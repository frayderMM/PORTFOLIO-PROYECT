/* ===================================================================
   LOGISTICA – MySQL 8.0
   Modelo base para gestión de órdenes, envíos, rutas y tracking.
   =================================================================== */

-- 0) CREAR BD
DROP DATABASE IF EXISTS logistica;
CREATE DATABASE logistica
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;
USE logistica;

-- 1) TABLAS MAESTRAS
-- Clientes
CREATE TABLE cliente (
  cliente_id       BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  ruc_dni          VARCHAR(20)  NOT NULL,
  nombre           VARCHAR(180) NOT NULL,
  email            VARCHAR(180) NULL,
  telefono         VARCHAR(40)  NULL,
  direccion        VARCHAR(240) NULL,
  distrito         VARCHAR(120) NULL,
  activo           TINYINT(1)   NOT NULL DEFAULT 1,
  creado_utc       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_cliente_rucdni (ruc_dni)
) ENGINE=InnoDB;

-- Hubs / Almacenes
CREATE TABLE hub (
  hub_id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  codigo           VARCHAR(20)  NOT NULL,
  nombre           VARCHAR(160) NOT NULL,
  direccion        VARCHAR(240) NULL,
  ciudad           VARCHAR(120) NULL,
  region           VARCHAR(120) NULL,
  activo           TINYINT(1)   NOT NULL DEFAULT 1,
  creado_utc       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_hub_codigo (codigo)
) ENGINE=InnoDB;

-- Vehículos
CREATE TABLE vehiculo (
  vehiculo_id      INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  placa            VARCHAR(15)  NOT NULL,
  tipo             VARCHAR(40)  NOT NULL, -- furgon, moto, camión, etc.
  capacidad_kg     DECIMAL(10,2) NOT NULL DEFAULT 0 CHECK (capacidad_kg >= 0),
  volumen_m3       DECIMAL(10,2) NOT NULL DEFAULT 0 CHECK (volumen_m3 >= 0),
  activo           TINYINT(1)   NOT NULL DEFAULT 1,
  creado_utc       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_vehiculo_placa (placa)
) ENGINE=InnoDB;

-- Conductores
CREATE TABLE conductor (
  conductor_id     INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  documento        VARCHAR(20)  NOT NULL,
  nombres          VARCHAR(120) NOT NULL,
  apellidos        VARCHAR(140) NOT NULL,
  telefono         VARCHAR(40)  NULL,
  email            VARCHAR(180) NULL,
  activo           TINYINT(1)   NOT NULL DEFAULT 1,
  creado_utc       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_conductor_doc (documento)
) ENGINE=InnoDB;

-- 2) ORDENES Y PAQUETES
-- Orden del cliente (puede tener varios paquetes)
CREATE TABLE orden (
  orden_id         BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cliente_id       BIGINT UNSIGNED NOT NULL,
  hub_origen_id    INT UNSIGNED    NOT NULL,
  hub_destino_id   INT UNSIGNED    NOT NULL,
  referencia       VARCHAR(200)    NULL,
  instrucciones    VARCHAR(300)    NULL,
  estado           ENUM('creada','en_ruta','entregada','cancelada') NOT NULL DEFAULT 'creada',
  subtotal         DECIMAL(12,2) NOT NULL DEFAULT 0 CHECK (subtotal >= 0),
  impuestos        DECIMAL(12,2) NOT NULL DEFAULT 0 CHECK (impuestos >= 0),
  costo_envio      DECIMAL(12,2) NOT NULL DEFAULT 0 CHECK (costo_envio >= 0),
  total            DECIMAL(12,2) AS (subtotal + impuestos + costo_envio) STORED,
  creado_utc       TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizado_utc  TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_orden_cliente    FOREIGN KEY (cliente_id)     REFERENCES cliente(cliente_id),
  CONSTRAINT fk_orden_hub_origen FOREIGN KEY (hub_origen_id)  REFERENCES hub(hub_id),
  CONSTRAINT fk_orden_hub_dest   FOREIGN KEY (hub_destino_id) REFERENCES hub(hub_id),
  KEY ix_orden_estado (estado),
  KEY ix_orden_cliente_fecha (cliente_id, creado_utc)
) ENGINE=InnoDB;

-- Paquetes de una orden
CREATE TABLE paquete (
  paquete_id       BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  orden_id         BIGINT UNSIGNED NOT NULL,
  codigo_barra     VARCHAR(50)    NOT NULL,
  peso_kg          DECIMAL(10,2)  NOT NULL DEFAULT 0 CHECK (peso_kg >= 0),
  volumen_m3       DECIMAL(10,2)  NOT NULL DEFAULT 0 CHECK (volumen_m3 >= 0),
  valor_declarado  DECIMAL(12,2)  NOT NULL DEFAULT 0 CHECK (valor_declarado >= 0),
  fragil           TINYINT(1)     NOT NULL DEFAULT 0,
  descripcion      VARCHAR(240)   NULL,
  estado           ENUM('registrado','en_hub_origen','en_ruta','en_hub_destino','entregado','incidencia') NOT NULL DEFAULT 'registrado',
  creado_utc       TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_paquete_orden FOREIGN KEY (orden_id) REFERENCES orden(orden_id) ON DELETE CASCADE,
  UNIQUE KEY uq_paquete_barra (codigo_barra),
  KEY ix_paquete_orden (orden_id),
  KEY ix_paquete_estado (estado)
) ENGINE=InnoDB;

-- 3) ENVIOS Y RUTAS
-- Envío agrupa paquetes en una salida (manifiesto)
CREATE TABLE envio (
  envio_id         BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  hub_salida_id    INT UNSIGNED   NOT NULL,
  hub_llegada_id   INT UNSIGNED   NOT NULL,
  fecha_programada DATETIME       NOT NULL,
  fecha_salida     DATETIME       NULL,
  fecha_llegada    DATETIME       NULL,
  estado           ENUM('planificado','despachado','en_transito','arribado','cerrado','cancelado') NOT NULL DEFAULT 'planificado',
  creado_utc       TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizado_utc  TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_envio_hub_salida  FOREIGN KEY (hub_salida_id)  REFERENCES hub(hub_id),
  CONSTRAINT fk_envio_hub_llegada FOREIGN KEY (hub_llegada_id) REFERENCES hub(hub_id),
  KEY ix_envio_estado (estado),
  KEY ix_envio_programada (fecha_programada)
) ENGINE=InnoDB;

-- Relación Envío-Paquete (muchos a muchos)
CREATE TABLE envio_paquete (
  envio_id         BIGINT UNSIGNED NOT NULL,
  paquete_id       BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (envio_id, paquete_id),
  CONSTRAINT fk_envio_paquete_envio   FOREIGN KEY (envio_id)   REFERENCES envio(envio_id)   ON DELETE CASCADE,
  CONSTRAINT fk_envio_paquete_paquete FOREIGN KEY (paquete_id) REFERENCES paquete(paquete_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Ruta y paradas
CREATE TABLE ruta (
  ruta_id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  nombre           VARCHAR(160) NOT NULL,
  distancia_km     DECIMAL(10,2) NOT NULL DEFAULT 0 CHECK (distancia_km >= 0),
  estimado_min     INT NOT NULL DEFAULT 0 CHECK (estimado_min >= 0),
  activo           TINYINT(1) NOT NULL DEFAULT 1,
  creado_utc       TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE ruta_parada (
  ruta_parada_id   BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  ruta_id          BIGINT UNSIGNED NOT NULL,
  hub_id           INT UNSIGNED    NOT NULL,
  orden_seq        INT NOT NULL,
  tiempo_espera_min INT NOT NULL DEFAULT 0 CHECK (tiempo_espera_min >= 0),
  UNIQUE KEY uq_ruta_orden (ruta_id, orden_seq),
  CONSTRAINT fk_rutaparada_ruta FOREIGN KEY (ruta_id) REFERENCES ruta(ruta_id) ON DELETE CASCADE,
  CONSTRAINT fk_rutaparada_hub  FOREIGN KEY (hub_id)  REFERENCES hub(hub_id)
) ENGINE=InnoDB;

-- Asignación de vehículo y conductor a un envío
CREATE TABLE asignacion_envio (
  asignacion_id    BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  envio_id         BIGINT UNSIGNED NOT NULL,
  vehiculo_id      INT UNSIGNED    NOT NULL,
  conductor_id     INT UNSIGNED    NOT NULL,
  ruta_id          BIGINT UNSIGNED NULL,
  creado_utc       TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_asig_envio     FOREIGN KEY (envio_id)    REFERENCES envio(envio_id)    ON DELETE CASCADE,
  CONSTRAINT fk_asig_vehiculo  FOREIGN KEY (vehiculo_id) REFERENCES vehiculo(vehiculo_id),
  CONSTRAINT fk_asig_conductor FOREIGN KEY (conductor_id)REFERENCES conductor(conductor_id),
  CONSTRAINT fk_asig_ruta      FOREIGN KEY (ruta_id)     REFERENCES ruta(ruta_id),
  UNIQUE KEY uq_asig_envio (envio_id),
  KEY ix_asig_conductor_fecha (conductor_id, creado_utc)
) ENGINE=InnoDB;

-- 4) TRACKING
CREATE TABLE tracking_evento (
  tracking_id      BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  paquete_id       BIGINT UNSIGNED NOT NULL,
  hub_id           INT UNSIGNED    NULL,
  estado           ENUM('recibido','clasificado','cargado','en_transito','descargado','en_reparto','entregado','incidencia') NOT NULL,
  descripcion      VARCHAR(300) NULL,
  lat              DECIMAL(10,7) NULL,
  lon              DECIMAL(10,7) NULL,
  registrado_utc   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_tracking_paquete FOREIGN KEY (paquete_id) REFERENCES paquete(paquete_id) ON DELETE CASCADE,
  CONSTRAINT fk_tracking_hub     FOREIGN KEY (hub_id)     REFERENCES hub(hub_id),
  KEY ix_tracking_paquete (paquete_id, registrado_utc),
  KEY ix_tracking_estado (estado)
) ENGINE=InnoDB;

-- 5) INDICES ADICIONALES
CREATE INDEX ix_paquete_valor ON paquete (valor_declarado);
CREATE INDEX ix_envio_salida_llegada ON envio (hub_salida_id, hub_llegada_id);

-- 6) DATOS SEMILLA MINIMOS
INSERT INTO hub (codigo, nombre, direccion, ciudad, region) VALUES
('LIM01','Hub Lima Centro','Av. Principal 100','Lima','Lima'),
('LIM02','Hub Lima Norte','Av. Los Andes 200','Lima','Lima'),
('TRU01','Hub Trujillo','Av. Libertad 50','Trujillo','La Libertad');

INSERT INTO cliente (ruc_dni, nombre, email, telefono, distrito) VALUES
('20123456789','Comercial Andina SAC','contacto@andina.pe','(01)111-1111','Miraflores'),
('10456789','Juan Pérez','juanp@mail.com','999-111-222','SMP');

INSERT INTO vehiculo (placa, tipo, capacidad_kg, volumen_m3) VALUES
('ABC-123','camion', 5000, 25),
('XYZ-987','furgon', 1500, 8);

INSERT INTO conductor (documento, nombres, apellidos, telefono, email) VALUES
('DNI-1001','Lucía','Gómez','999111222','lucia@logistica.pe'),
('DNI-1002','Carlos','Rojas','999333444','carlos@logistica.pe');

-- Orden con 2 paquetes (Lima Centro -> Trujillo)
INSERT INTO orden (cliente_id, hub_origen_id, hub_destino_id, referencia, instrucciones, subtotal, impuestos, costo_envio)
VALUES (1, 1, 3, 'ORD-0001', 'Manejar con cuidado (frágil)', 120.00, 21.60, 30.00);

INSERT INTO paquete (orden_id, codigo_barra, peso_kg, volumen_m3, valor_declarado, fragil, descripcion)
VALUES
(LAST_INSERT_ID(), 'PKG-0001', 10.50, 0.60, 800.00, 1, 'Electrónica'),
(LAST_INSERT_ID(), 'PKG-0002', 5.25,  0.30, 250.00, 0, 'Accesorios');

-- Envío programado Lima Centro -> Trujillo
INSERT INTO envio (hub_salida_id, hub_llegada_id, fecha_programada, estado)
VALUES (1, 3, DATE_ADD(NOW(), INTERVAL 1 HOUR), 'planificado');

-- Asignar vehículo/conductor
INSERT INTO asignacion_envio (envio_id, vehiculo_id, conductor_id)
VALUES (LAST_INSERT_ID(), 1, 1);

-- Relacionar paquetes al envío
INSERT INTO envio_paquete (envio_id, paquete_id)
SELECT e.envio_id, p.paquete_id
FROM envio e
JOIN paquete p
ORDER BY e.envio_id DESC
LIMIT 2;

-- Eventos de tracking iniciales
INSERT INTO tracking_evento (paquete_id, hub_id, estado, descripcion)
SELECT paquete_id, 1, 'recibido', 'Paquete recibido en Hub Lima Centro'
FROM paquete;

-- 7) CONSULTAS DE EJEMPLO
-- a) Tracking de un paquete
SELECT p.codigo_barra, t.estado, t.descripcion, t.registrado_utc, h.nombre AS hub
FROM paquete p
JOIN tracking_evento t ON t.paquete_id = p.paquete_id
LEFT JOIN hub h ON h.hub_id = t.hub_id
WHERE p.codigo_barra = 'PKG-0001'
ORDER BY t.registrado_utc;

-- b) Manifiesto del envío más reciente
SELECT e.envio_id, e.estado, e.fecha_programada, hs.nombre AS origen, hl.nombre AS destino,
       v.placa, c.nombres AS conductor
FROM envio e
LEFT JOIN asignacion_envio a ON a.envio_id = e.envio_id
LEFT JOIN vehiculo v ON v.vehiculo_id = a.vehiculo_id
LEFT JOIN conductor c ON c.conductor_id = a.conductor_id
JOIN hub hs ON hs.hub_id = e.hub_salida_id
JOIN hub hl ON hl.hub_id = e.hub_llegada_id
ORDER BY e.envio_id DESC
LIMIT 1;

-- c) KPIs simples: paquetes por estado
SELECT estado, COUNT(*) AS total
FROM paquete
GROUP BY estado
ORDER BY total DESC;