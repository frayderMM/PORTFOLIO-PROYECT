/* ================================================================
   BOLSA DE TRABAJO – Diseño de base de datos en SQL Server
   - Usuarios (empresas y trabajadores)
   ================================================================ */

--------------------------------------------------
-- 0) Crear base de datos (si no existe)
--------------------------------------------------
IF DB_ID(N'BolsaTrabajo') IS NULL
BEGIN
  EXEC ('CREATE DATABASE BolsaTrabajo');
END
GO

USE BolsaTrabajo;
GO

--------------------------------------------------
-- 1) Esquema lógico
--------------------------------------------------
IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = N'app')
  EXEC ('CREATE SCHEMA app');
GO

--------------------------------------------------
-- 2) Tablas base
--------------------------------------------------

-- USUARIOS
IF OBJECT_ID('app.Usuarios','U') IS NOT NULL DROP TABLE app.Usuarios;
CREATE TABLE app.Usuarios (
  id_usuario          BIGINT IDENTITY(1,1) CONSTRAINT PK_Usuarios PRIMARY KEY,
  nombre_completo     NVARCHAR(150) NOT NULL,
  dni                 VARCHAR(15)   NULL,
  telefono            NVARCHAR(30)  NULL,
  correo              NVARCHAR(200) NOT NULL,
  contraseña          VARBINARY(512) NULL,      -- si gestionas hash aquí; de lo contrario NVARCHAR(200)
  ubicacion_distrito  NVARCHAR(100) NULL,
  latitud             DECIMAL(9,6)  NULL,
  longitud            DECIMAL(9,6)  NULL,
  tipo_usuario        VARCHAR(15)   NOT NULL 
                      CONSTRAINT CK_Usuarios_Tipo CHECK (tipo_usuario IN ('empresa','trabajador','admin')),
  fecha_registro      DATETIME2(3)  NOT NULL CONSTRAINT DF_Usuarios_Fecha DEFAULT (SYSUTCDATETIME()),
  estado_cuenta       VARCHAR(15)   NOT NULL CONSTRAINT DF_Usuarios_Estado DEFAULT ('activo')
                      CONSTRAINT CK_Usuarios_Estado CHECK (estado_cuenta IN ('activo','suspendido','eliminado','pendiente')),
  CONSTRAINT UQ_Usuarios_Correo UNIQUE (correo),
  CONSTRAINT UQ_Usuarios_DNI UNIQUE (dni)
);

-- PERFILES DE EMPRESAS (PK = FK a Usuarios)
IF OBJECT_ID('app.PerfilesEmpresas','U') IS NOT NULL DROP TABLE app.PerfilesEmpresas;
CREATE TABLE app.PerfilesEmpresas (
  id_empresa      BIGINT  CONSTRAINT PK_PerfilesEmpresas PRIMARY KEY,
  nombre_empresa  NVARCHAR(180) NOT NULL,
  rubro           NVARCHAR(120) NULL,
  ruc             VARCHAR(20)   NULL,
  direccion       NVARCHAR(220) NULL,
  descripcion     NVARCHAR(600) NULL,
  calificacion    DECIMAL(3,2)  NULL
                   CONSTRAINT CK_PerfEmp_Calif CHECK (calificacion IS NULL OR (calificacion BETWEEN 0 AND 5)),
  CONSTRAINT FK_PerfEmp_Usuario FOREIGN KEY (id_empresa) REFERENCES app.Usuarios(id_usuario)
      ON DELETE CASCADE
);

-- PERFILES DE TRABAJADORES (PK = FK a Usuarios)
IF OBJECT_ID('app.PerfilesTrabajadores','U') IS NOT NULL DROP TABLE app.PerfilesTrabajadores;
CREATE TABLE app.PerfilesTrabajadores (
  id_trabajador     BIGINT  CONSTRAINT PK_PerfilesTrabajadores PRIMARY KEY,
  foto_perfil       NVARCHAR(300) NULL,
  edad              TINYINT  NULL CONSTRAINT CK_PerfTrab_Edad CHECK (edad BETWEEN 14 AND 100),
  genero            VARCHAR(20) NULL,
  ocupaciones       NVARCHAR(300) NULL,       -- lista separada o cat. aparte si lo prefieres
  experiencia_texto NVARCHAR(800) NULL,
  video_presentacion NVARCHAR(300) NULL,
  disponibilidad    NVARCHAR(120) NULL,       -- p.ej. "L-V 9-18"
  calificacion      DECIMAL(3,2) NULL
                     CONSTRAINT CK_PerfTrab_Calif CHECK (calificacion IS NULL OR (calificacion BETWEEN 0 AND 5)),
  CONSTRAINT FK_PerfTrab_Usuario FOREIGN KEY (id_trabajador) REFERENCES app.Usuarios(id_usuario)
      ON DELETE CASCADE
);

-- OFERTAS
IF OBJECT_ID('app.Ofertas','U') IS NOT NULL DROP TABLE app.Ofertas;
CREATE TABLE app.Ofertas (
  id_oferta           BIGINT IDENTITY(1,1) CONSTRAINT PK_Ofertas PRIMARY KEY,
  id_empresa          BIGINT NOT NULL,
  titulo              NVARCHAR(200) NOT NULL,
  descripcion         NVARCHAR(MAX) NULL,
  categoria           NVARCHAR(120) NULL,
  pago_estimado       DECIMAL(12,2) NULL CONSTRAINT CK_Ofertas_Pago CHECK (pago_estimado IS NULL OR pago_estimado >= 0),
  fecha_publicacion   DATETIME2(3) NOT NULL CONSTRAINT DF_Ofertas_Public DEFAULT (SYSUTCDATETIME()),
  fecha_inicio        DATE NULL,
  ubicacion_trabajo   NVARCHAR(150) NULL,
  latitud             DECIMAL(9,6)  NULL,
  longitud            DECIMAL(9,6)  NULL,
  estado              VARCHAR(12) NOT NULL CONSTRAINT DF_Ofertas_Estado DEFAULT ('abierta')
                        CONSTRAINT CK_Ofertas_Estado CHECK (estado IN ('abierta','cerrada','pausada')),
  CONSTRAINT FK_Ofertas_Empresa FOREIGN KEY (id_empresa) REFERENCES app.PerfilesEmpresas(id_empresa),
  INDEX IX_Ofertas_Empresa_Fecha (id_empresa, fecha_publicacion),
  INDEX IX_Ofertas_Estado (estado),
  INDEX IX_Ofertas_Categoria (categoria)
);

-- POSTULACIONES
IF OBJECT_ID('app.Postulaciones','U') IS NOT NULL DROP TABLE app.Postulaciones;
CREATE TABLE app.Postulaciones (
  id_postulacion     BIGINT IDENTITY(1,1) CONSTRAINT PK_Postulaciones PRIMARY KEY,
  id_oferta          BIGINT NOT NULL,
  id_trabajador      BIGINT NOT NULL,
  fecha_postulacion  DATETIME2(3) NOT NULL CONSTRAINT DF_Post_Fecha DEFAULT (SYSUTCDATETIME()),
  estado             VARCHAR(15) NOT NULL CONSTRAINT DF_Post_Estado DEFAULT ('postulada')
                       CONSTRAINT CK_Post_Estado CHECK (estado IN ('postulada','aceptada','rechazada','retirada')),
  CONSTRAINT UQ_Postulacion UNIQUE (id_oferta, id_trabajador),
  CONSTRAINT FK_Post_Oferta     FOREIGN KEY (id_oferta)     REFERENCES app.Ofertas(id_oferta) ON DELETE CASCADE,
  CONSTRAINT FK_Post_Trabajador FOREIGN KEY (id_trabajador) REFERENCES app.PerfilesTrabajadores(id_trabajador) ON DELETE CASCADE,
  INDEX IX_Post_Trab_Fecha (id_trabajador, fecha_postulacion)
);

-- MENSAJES (chat simple entre usuarios)
IF OBJECT_ID('app.Mensajes','U') IS NOT NULL DROP TABLE app.Mensajes;
CREATE TABLE app.Mensajes (
  id_chat        BIGINT IDENTITY(1,1) CONSTRAINT PK_Mensajes PRIMARY KEY,
  id_emisor      BIGINT NOT NULL,
  id_receptor    BIGINT NOT NULL,
  mensaje        NVARCHAR(MAX) NOT NULL,
  fecha_envio    DATETIME2(3)  NOT NULL CONSTRAINT DF_Mensajes_Fecha DEFAULT (SYSUTCDATETIME()),
  leido          BIT NOT NULL CONSTRAINT DF_Mensajes_Leido DEFAULT (0),
  CONSTRAINT FK_Msg_Emisor   FOREIGN KEY (id_emisor)   REFERENCES app.Usuarios(id_usuario) ON DELETE CASCADE,
  CONSTRAINT FK_Msg_Receptor FOREIGN KEY (id_receptor) REFERENCES app.Usuarios(id_usuario) ON DELETE CASCADE,
  INDEX IX_Msg_Usuarios_Fecha (id_emisor, id_receptor, fecha_envio),
  INDEX IX_Msg_Receptor_Fecha (id_receptor, fecha_envio)
);

-- RESEÑAS (usuario -> usuario; tipo: 'empresa' califica a 'trabajador' o viceversa)
IF OBJECT_ID('app.Reseñas','U') IS NOT NULL DROP TABLE app.Reseñas;
CREATE TABLE app.Reseñas (
  id_resena     BIGINT IDENTITY(1,1) CONSTRAINT PK_Resenas PRIMARY KEY,
  tipo_resena   VARCHAR(20) NOT NULL
                 CONSTRAINT CK_Resena_Tipo CHECK (tipo_resena IN ('empresa_a_trabajador','trabajador_a_empresa')),
  id_autor      BIGINT NOT NULL,
  id_destino    BIGINT NOT NULL,
  calificacion  TINYINT NOT NULL CONSTRAINT CK_Resena_Calif CHECK (calificacion BETWEEN 1 AND 5),
  comentario    NVARCHAR(600) NULL,
  fecha         DATETIME2(3) NOT NULL CONSTRAINT DF_Resena_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT FK_Resena_Autor   FOREIGN KEY (id_autor)   REFERENCES app.Usuarios(id_usuario) ON DELETE CASCADE,
  CONSTRAINT FK_Resena_Destino FOREIGN KEY (id_destino) REFERENCES app.Usuarios(id_usuario) ON DELETE CASCADE,
  INDEX IX_Resena_Destino (id_destino, fecha),
  INDEX IX_Resena_Autor (id_autor, fecha)
);

--------------------------------------------------
-- 3) Disparadores opcionales (sin lógica agresiva)
--    Ejemplo: asegurar que solo EMPRESA tenga perfil empresa, etc.
--------------------------------------------------

-- Solo permitir crear PerfilEmpresa si el usuario es tipo 'empresa'
IF OBJECT_ID('app.TG_PerfEmp_Check','TR') IS NOT NULL DROP TRIGGER app.TG_PerfEmp_Check;
GO
CREATE TRIGGER app.TG_PerfEmp_Check
ON app.PerfilesEmpresas
INSTEAD OF INSERT
AS
BEGIN
  SET NOCOUNT ON;

  IF EXISTS (
    SELECT 1
    FROM inserted i
    JOIN app.Usuarios u ON u.id_usuario = i.id_empresa
    WHERE u.tipo_usuario <> 'empresa'
  )
  BEGIN
    RAISERROR (N'El usuario debe ser de tipo EMPRESA para crear PerfilesEmpresas.', 16, 1);
    RETURN;
  END

  INSERT INTO app.PerfilesEmpresas (id_empresa, nombre_empresa, rubro, ruc, direccion, descripcion, calificacion)
  SELECT id_empresa, nombre_empresa, rubro, ruc, direccion, descripcion, calificacion
  FROM inserted;
END
GO

-- Solo permitir crear PerfilTrabajador si el usuario es tipo 'trabajador'
IF OBJECT_ID('app.TG_PerfTrab_Check','TR') IS NOT NULL DROP TRIGGER app.TG_PerfTrab_Check;
GO
CREATE TRIGGER app.TG_PerfTrab_Check
ON app.PerfilesTrabajadores
INSTEAD OF INSERT
AS
BEGIN
  SET NOCOUNT ON;

  IF EXISTS (
    SELECT 1
    FROM inserted i
    JOIN app.Usuarios u ON u.id_usuario = i.id_trabajador
    WHERE u.tipo_usuario <> 'trabajador'
  )
  BEGIN
    RAISERROR (N'El usuario debe ser de tipo TRABAJADOR para crear PerfilesTrabajadores.', 16, 1);
    RETURN;
  END

  INSERT INTO app.PerfilesTrabajadores (id_trabajador, foto_perfil, edad, genero, ocupaciones,
                                        experiencia_texto, video_presentacion, disponibilidad, calificacion)
  SELECT id_trabajador, foto_perfil, edad, genero, ocupaciones,
         experiencia_texto, video_presentacion, disponibilidad, calificacion
  FROM inserted;
END
GO

--------------------------------------------------
-- 4) Semilla mínima de prueba
--------------------------------------------------
-- Usuarios
INSERT INTO app.Usuarios (nombre_completo, dni, telefono, correo, tipo_usuario)
VALUES
(N'Empresa Demo SAC', NULL, N'(01)123-4567', N'contacto@empresa.demo', 'empresa'),
(N'Juan Pérez', '12345678', N'999-111-222', N'juanp@correo.com', 'trabajador');

-- Perfiles
INSERT INTO app.PerfilesEmpresas (id_empresa, nombre_empresa, rubro, ruc, direccion, descripcion, calificacion)
VALUES ((SELECT id_usuario FROM app.Usuarios WHERE correo=N'contacto@empresa.demo'),
        N'Empresa Demo SAC', N'Servicios', '20123456789', N'Av. Principal 123', N'Empresa de ejemplo', 4.7);

INSERT INTO app.PerfilesTrabajadores (id_trabajador, edad, genero, ocupaciones, experiencia_texto, disponibilidad, calificacion)
VALUES ((SELECT id_usuario FROM app.Usuarios WHERE correo=N'juanp@correo.com'),
        28, 'M', N'Carpintero; Albañil', N'3 años de experiencia en obras menores y remodelación.', N'L-S 8-18', 4.5);

-- Oferta
INSERT INTO app.Ofertas (id_empresa, titulo, descripcion, categoria, pago_estimado, fecha_inicio, ubicacion_trabajo, estado)
VALUES (
  (SELECT id_empresa FROM app.PerfilesEmpresas WHERE nombre_empresa=N'Empresa Demo SAC'),
  N'Remodelación de cocina', N'Se requiere maestro de obra para remodelación de cocina completa.', N'Construcción', 2500.00,
  DATEADD(DAY, 7, CAST(SYSUTCDATETIME() AS DATE)), N'Miraflores', 'abierta'
);

-- Postulación
INSERT INTO app.Postulaciones (id_oferta, id_trabajador, estado)
SELECT o.id_oferta, pt.id_trabajador, 'postulada'
FROM app.Ofertas o
CROSS JOIN app.PerfilesTrabajadores pt
WHERE o.titulo = N'Remodelación de cocina'
  AND pt.id_trabajador = (SELECT id_usuario FROM app.Usuarios WHERE correo=N'juanp@correo.com');

-- Mensaje
INSERT INTO app.Mensajes (id_emisor, id_receptor, mensaje)
VALUES (
  (SELECT id_usuario FROM app.Usuarios WHERE correo=N'contacto@empresa.demo'),
  (SELECT id_usuario FROM app.Usuarios WHERE correo=N'juanp@correo.com'),
  N'Hola Juan, vimos tu postulación. ¿Puedes conversar mañana a las 10am?'
);

-- Reseña (empresa -> trabajador)
INSERT INTO app.Reseñas (tipo_resena, id_autor, id_destino, calificacion, comentario)
VALUES (
  'empresa_a_trabajador',
  (SELECT id_usuario FROM app.Usuarios WHERE correo=N'contacto@empresa.demo'),
  (SELECT id_usuario FROM app.Usuarios WHERE correo=N'juanp@correo.com'),
  5, N'Excelente trabajo y puntualidad.'
);

--------------------------------------------------
-- 5) Consultas de verificación
--------------------------------------------------
-- a) Ofertas con empresa
SELECT o.id_oferta, o.titulo, pe.nombre_empresa, o.estado, o.fecha_publicacion
FROM app.Ofertas o
JOIN app.PerfilesEmpresas pe ON pe.id_empresa = o.id_empresa
ORDER BY o.id_oferta DESC;

-- b) Postulaciones por trabajador
SELECT p.id_postulacion, o.titulo, p.estado, p.fecha_postulacion
FROM app.Postulaciones p
JOIN app.Ofertas o ON o.id_oferta = p.id_oferta
WHERE p.id_trabajador = (SELECT id_usuario FROM app.Usuarios WHERE correo=N'juanp@correo.com');

-- c) Inbox de un usuario
SELECT TOP 20 m.id_chat, u1.nombre_completo AS emisor, u2.nombre_completo AS receptor, m.mensaje, m.fecha_envio, m.leido
FROM app.Mensajes m
JOIN app.Usuarios u1 ON u1.id_usuario = m.id_emisor
JOIN app.Usuarios u2 ON u2.id_usuario = m.id_receptor
ORDER BY m.fecha_envio DESC;

-- d) Reseñas recibidas por un usuario
SELECT r.id_resena, r.tipo_resena, r.calificacion, r.comentario, r.fecha
FROM app.Reseñas r
WHERE r.id_destino = (SELECT id_usuario FROM app.Usuarios WHERE correo=N'juanp@correo.com')
ORDER BY r.fecha DESC;
