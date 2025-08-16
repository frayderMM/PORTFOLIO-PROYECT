/* =========================================================================
   TIENDA ONLINE – SQL Server (SSMS)
   Modelo base para e-commerce con usuarios, productos, inventario, pedidos,
   pagos, envíos y auditoría.
   ======================================================================== */

-----------------------------
-- 0) CREAR BASE DE DATOS
-----------------------------
IF DB_ID(N'TiendaOnline') IS NULL
BEGIN
  EXEC ('CREATE DATABASE TiendaOnline');
END
GO

ALTER DATABASE TiendaOnline SET READ_COMMITTED_SNAPSHOT ON;
GO

USE TiendaOnline;
GO

-----------------------------
-- 1) ESQUEMA
-----------------------------
IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = N'app')
  EXEC('CREATE SCHEMA app');
GO

-----------------------------
-- 2) TABLAS MAESTRAS
-----------------------------

-- Países (ISO opcional)
IF OBJECT_ID('app.Pais','U') IS NOT NULL DROP TABLE app.Pais;
CREATE TABLE app.Pais (
  PaisId           SMALLINT IDENTITY(1,1) CONSTRAINT PK_Pais PRIMARY KEY,
  Nombre           NVARCHAR(100) NOT NULL,
  ISO2             CHAR(2)       NULL,
  ISO3             CHAR(3)       NULL,
  Activo           BIT           NOT NULL CONSTRAINT DF_Pais_Activo DEFAULT (1),
  FechaCreacionUTC DATETIME2(3)  NOT NULL CONSTRAINT DF_Pais_Fecha DEFAULT (SYSUTCDATETIME())
);

-- Estados/Provincias
IF OBJECT_ID('app.Estado','U') IS NOT NULL DROP TABLE app.Estado;
CREATE TABLE app.Estado (
  EstadoId         INT IDENTITY(1,1) CONSTRAINT PK_Estado PRIMARY KEY,
  PaisId           SMALLINT NOT NULL,
  Nombre           NVARCHAR(100) NOT NULL,
  Activo           BIT NOT NULL CONSTRAINT DF_Estado_Activo DEFAULT (1),
  FechaCreacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Estado_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT FK_Estado_Pais FOREIGN KEY (PaisId) REFERENCES app.Pais(PaisId)
);

-- Ciudades
IF OBJECT_ID('app.Ciudad','U') IS NOT NULL DROP TABLE app.Ciudad;
CREATE TABLE app.Ciudad (
  CiudadId         INT IDENTITY(1,1) CONSTRAINT PK_Ciudad PRIMARY KEY,
  EstadoId         INT NOT NULL,
  Nombre           NVARCHAR(120) NOT NULL,
  Activo           BIT NOT NULL CONSTRAINT DF_Ciudad_Activo DEFAULT (1),
  FechaCreacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Ciudad_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT FK_Ciudad_Estado FOREIGN KEY (EstadoId) REFERENCES app.Estado(EstadoId)
);

-- Direcciones reutilizables (usuarios, pedidos)
IF OBJECT_ID('app.Direccion','U') IS NOT NULL DROP TABLE app.Direccion;
CREATE TABLE app.Direccion (
  DireccionId      BIGINT IDENTITY(1,1) CONSTRAINT PK_Direccion PRIMARY KEY,
  PaisId           SMALLINT NOT NULL,
  EstadoId         INT      NULL,
  CiudadId         INT      NULL,
  Linea1           NVARCHAR(200) NOT NULL,
  Linea2           NVARCHAR(200) NULL,
  CodigoPostal     NVARCHAR(20)  NULL,
  Referencia       NVARCHAR(200) NULL,
  FechaCreacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Direccion_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT FK_Direccion_Pais   FOREIGN KEY (PaisId)  REFERENCES app.Pais(PaisId),
  CONSTRAINT FK_Direccion_Estado FOREIGN KEY (EstadoId)REFERENCES app.Estado(EstadoId),
  CONSTRAINT FK_Direccion_Ciudad FOREIGN KEY (CiudadId)REFERENCES app.Ciudad(CiudadId)
);

-----------------------------
-- 3) USUARIOS Y ROLES
-----------------------------
IF OBJECT_ID('app.Rol','U') IS NOT NULL DROP TABLE app.Rol;
CREATE TABLE app.Rol (
  RolId            SMALLINT IDENTITY(1,1) CONSTRAINT PK_Rol PRIMARY KEY,
  Nombre           NVARCHAR(50) NOT NULL UNIQUE
);

IF OBJECT_ID('app.Usuario','U') IS NOT NULL DROP TABLE app.Usuario;
CREATE TABLE app.Usuario (
  UsuarioId        BIGINT IDENTITY(1,1) CONSTRAINT PK_Usuario PRIMARY KEY,
  Email            NVARCHAR(255) NOT NULL UNIQUE,
  HashPassword     VARBINARY(512) NULL,    -- si gestionas auth aquí
  Nombre           NVARCHAR(100) NOT NULL,
  Apellido         NVARCHAR(100) NOT NULL,
  Telefono         NVARCHAR(30)  NULL,
  DireccionId      BIGINT NULL,            -- dirección preferida
  Activo           BIT NOT NULL CONSTRAINT DF_Usuario_Activo DEFAULT (1),
  FechaCreacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Usuario_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT FK_Usuario_Direccion FOREIGN KEY (DireccionId) REFERENCES app.Direccion(DireccionId)
);

IF OBJECT_ID('app.UsuarioRol','U') IS NOT NULL DROP TABLE app.UsuarioRol;
CREATE TABLE app.UsuarioRol (
  UsuarioId BIGINT NOT NULL,
  RolId     SMALLINT NOT NULL,
  FechaAsignacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_UsuarioRol_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT PK_UsuarioRol PRIMARY KEY (UsuarioId, RolId),
  CONSTRAINT FK_UsuarioRol_Usuario FOREIGN KEY (UsuarioId) REFERENCES app.Usuario(UsuarioId),
  CONSTRAINT FK_UsuarioRol_Rol FOREIGN KEY (RolId) REFERENCES app.Rol(RolId)
);

-----------------------------
-- 4) CATALOGO DE PRODUCTOS
-----------------------------
IF OBJECT_ID('app.Categoria','U') IS NOT NULL DROP TABLE app.Categoria;
CREATE TABLE app.Categoria (
  CategoriaId      INT IDENTITY(1,1) CONSTRAINT PK_Categoria PRIMARY KEY,
  Nombre           NVARCHAR(120) NOT NULL,
  Slug             NVARCHAR(140) NOT NULL UNIQUE,
  Activo           BIT NOT NULL CONSTRAINT DF_Categoria_Activo DEFAULT (1),
  FechaCreacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Categoria_Fecha DEFAULT (SYSUTCDATETIME())
);

IF OBJECT_ID('app.Producto','U') IS NOT NULL DROP TABLE app.Producto;
CREATE TABLE app.Producto (
  ProductoId       BIGINT IDENTITY(1,1) CONSTRAINT PK_Producto PRIMARY KEY,
  CategoriaId      INT NOT NULL,
  SKU              NVARCHAR(60)  NOT NULL UNIQUE,
  Nombre           NVARCHAR(200) NOT NULL,
  Descripcion      NVARCHAR(MAX) NULL,
  Precio           DECIMAL(12,2) NOT NULL CHECK (Precio >= 0),
  Activo           BIT NOT NULL CONSTRAINT DF_Producto_Activo DEFAULT (1),
  FechaCreacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Producto_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT FK_Producto_Categoria FOREIGN KEY (CategoriaId) REFERENCES app.Categoria(CategoriaId)
);

-- Inventario por almacén (simple; puedes normalizar Almacen si lo requieres)
IF OBJECT_ID('app.Inventario','U') IS NOT NULL DROP TABLE app.Inventario;
CREATE TABLE app.Inventario (
  InventarioId     BIGINT IDENTITY(1,1) CONSTRAINT PK_Inventario PRIMARY KEY,
  ProductoId       BIGINT NOT NULL,
  Almacen          NVARCHAR(100) NOT NULL DEFAULT N'Principal',
  Stock            INT NOT NULL CHECK (Stock >= 0),
  PuntoReorden     INT NOT NULL DEFAULT(0) CHECK (PuntoReorden >= 0),
  FechaActualizacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Inventario_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT UQ_Inventario UNIQUE (ProductoId, Almacen),
  CONSTRAINT FK_Inventario_Producto FOREIGN KEY (ProductoId) REFERENCES app.Producto(ProductoId)
);

-----------------------------
-- 5) PEDIDOS, PAGOS Y ENVIOS
-----------------------------

-- Estados de pedido controlados por CHECK
-- (carrito, confirmado, pagado, enviado, entregado, cancelado)
IF OBJECT_ID('app.Pedido','U') IS NOT NULL DROP TABLE app.Pedido;
CREATE TABLE app.Pedido (
  PedidoId         BIGINT IDENTITY(1,1) CONSTRAINT PK_Pedido PRIMARY KEY,
  UsuarioId        BIGINT NOT NULL,
  DireccionEnvioId BIGINT NOT NULL,
  Subtotal         DECIMAL(12,2) NOT NULL DEFAULT(0) CHECK (Subtotal >= 0),
  Impuestos        DECIMAL(12,2) NOT NULL DEFAULT(0) CHECK (Impuestos >= 0),
  Envio            DECIMAL(12,2) NOT NULL DEFAULT(0) CHECK (Envio >= 0),
  Descuento        DECIMAL(12,2) NOT NULL DEFAULT(0) CHECK (Descuento >= 0),
  Total            AS (Subtotal + Impuestos + Envio - Descuento) PERSISTED,
  Estado           VARCHAR(20) NOT NULL CONSTRAINT CK_Pedido_Estado CHECK (Estado IN ('carrito','confirmado','pagado','enviado','entregado','cancelado')),
  FechaCreacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Pedido_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT FK_Pedido_Usuario        FOREIGN KEY (UsuarioId)        REFERENCES app.Usuario(UsuarioId),
  CONSTRAINT FK_Pedido_DireccionEnvio FOREIGN KEY (DireccionEnvioId) REFERENCES app.Direccion(DireccionId)
);

IF OBJECT_ID('app.PedidoItem','U') IS NOT NULL DROP TABLE app.PedidoItem;
CREATE TABLE app.PedidoItem (
  PedidoItemId     BIGINT IDENTITY(1,1) CONSTRAINT PK_PedidoItem PRIMARY KEY,
  PedidoId         BIGINT NOT NULL,
  ProductoId       BIGINT NOT NULL,
  Cantidad         INT NOT NULL CHECK (Cantidad > 0),
  PrecioUnitario   DECIMAL(12,2) NOT NULL CHECK (PrecioUnitario >= 0),
  ImpuestoLinea    DECIMAL(12,2) NOT NULL DEFAULT(0) CHECK (ImpuestoLinea >= 0),
  TotalLinea       AS (Cantidad * PrecioUnitario + ImpuestoLinea) PERSISTED,
  CONSTRAINT UQ_PedidoItem UNIQUE (PedidoId, ProductoId), -- evita duplicados del mismo producto en un pedido
  CONSTRAINT FK_PedidoItem_Pedido   FOREIGN KEY (PedidoId)   REFERENCES app.Pedido(PedidoId) ON DELETE CASCADE,
  CONSTRAINT FK_PedidoItem_Producto FOREIGN KEY (ProductoId) REFERENCES app.Producto(ProductoId)
);

-- Pagos (uno o varios por pedido: intentos, devoluciones, etc.)
IF OBJECT_ID('app.Pago','U') IS NOT NULL DROP TABLE app.Pago;
CREATE TABLE app.Pago (
  PagoId           BIGINT IDENTITY(1,1) CONSTRAINT PK_Pago PRIMARY KEY,
  PedidoId         BIGINT NOT NULL,
  Monto            DECIMAL(12,2) NOT NULL CHECK (Monto >= 0),
  Moneda           CHAR(3) NOT NULL DEFAULT('USD'),
  Metodo           VARCHAR(30) NOT NULL,   -- 'tarjeta', 'paypal', 'transferencia', etc.
  Estado           VARCHAR(20) NOT NULL CONSTRAINT CK_Pago_Estado CHECK (Estado IN ('pendiente','aprobado','rechazado','reembolsado')),
  Referencia       NVARCHAR(200) NULL,     -- id de pasarela
  FechaPagoUTC     DATETIME2(3) NOT NULL CONSTRAINT DF_Pago_Fecha DEFAULT (SYSUTCDATETIME()),
  CONSTRAINT FK_Pago_Pedido FOREIGN KEY (PedidoId) REFERENCES app.Pedido(PedidoId) ON DELETE CASCADE
);

-- Envíos
IF OBJECT_ID('app.Envio','U') IS NOT NULL DROP TABLE app.Envio;
CREATE TABLE app.Envio (
  EnvioId          BIGINT IDENTITY(1,1) CONSTRAINT PK_Envio PRIMARY KEY,
  PedidoId         BIGINT NOT NULL,
  Courier          NVARCHAR(80) NOT NULL,
  Guia             NVARCHAR(80) NULL,      -- tracking
  CostoEnvio       DECIMAL(12,2) NOT NULL DEFAULT(0),
  Estado           VARCHAR(20) NOT NULL CONSTRAINT CK_Envio_Estado CHECK (Estado IN ('pendiente','despachado','en_transito','entregado','devuelto')),
  FechaCreacionUTC DATETIME2(3) NOT NULL CONSTRAINT DF_Envio_Fecha DEFAULT (SYSUTCDATETIME()),
  FechaEntregaUTC  DATETIME2(3) NULL,
  CONSTRAINT FK_Envio_Pedido FOREIGN KEY (PedidoId) REFERENCES app.Pedido(PedidoId) ON DELETE CASCADE
);

-----------------------------
-- 6) AUDITORIA SIMPLE
-----------------------------
IF OBJECT_ID('app.AuditoriaStock','U') IS NOT NULL DROP TABLE app.AuditoriaStock;
CREATE TABLE app.AuditoriaStock (
  AuditoriaStockId BIGINT IDENTITY(1,1) CONSTRAINT PK_AuditoriaStock PRIMARY KEY,
  ProductoId       BIGINT NOT NULL,
  Almacen          NVARCHAR(100) NOT NULL,
  StockAnterior    INT NOT NULL,
  StockNuevo       INT NOT NULL,
  Motivo           NVARCHAR(200) NULL,
  FechaCambioUTC   DATETIME2(3) NOT NULL CONSTRAINT DF_AudStock_Fecha DEFAULT (SYSUTCDATETIME())
);

-- Trigger para auditar cambios en Inventario
IF OBJECT_ID('app.TG_Inventario_Audit','TR') IS NOT NULL DROP TRIGGER app.TG_Inventario_Audit;
GO
CREATE TRIGGER app.TG_Inventario_Audit
ON app.Inventario
AFTER UPDATE
AS
BEGIN
  SET NOCOUNT ON;
  INSERT INTO app.AuditoriaStock (ProductoId, Almacen, StockAnterior, StockNuevo, Motivo)
  SELECT
    COALESCE(i.ProductoId, d.ProductoId),
    COALESCE(i.Almacen, d.Almacen),
    d.Stock,
    i.Stock,
    N'Actualización de stock'
  FROM inserted i
  JOIN deleted d ON i.InventarioId = d.InventarioId
  WHERE ISNULL(i.Stock, -1) <> ISNULL(d.Stock, -1);
END;
GO

-----------------------------
-- 7) INDICES Y OPTIMIZACION
-----------------------------

-- Búsqueda de productos por nombre / categoría
CREATE INDEX IX_Producto_Nombre      ON app.Producto (Nombre);
CREATE INDEX IX_Producto_Categoria   ON app.Producto (CategoriaId);

-- Inventario: acceso por Producto y Almacén
CREATE INDEX IX_Inventario_Producto  ON app.Inventario (ProductoId);

-- Pedido: consultas por usuario y fechas
CREATE INDEX IX_Pedido_Usuario_Fecha ON app.Pedido (UsuarioId, FechaCreacionUTC);
CREATE INDEX IX_Pedido_Estado        ON app.Pedido (Estado);

-- Pago y Envío por Pedido
CREATE INDEX IX_Pago_Pedido          ON app.Pago (PedidoId);
CREATE INDEX IX_Envio_Pedido         ON app.Envio (PedidoId);

-- Dirección por país/estado/ciudad
CREATE INDEX IX_Direccion_Localidad  ON app.Direccion (PaisId, EstadoId, CiudadId);

-----------------------------
-- 8) VISTAS DE REPORTE
-----------------------------
IF OBJECT_ID('app.vw_VentasPorDia','V') IS NOT NULL DROP VIEW app.vw_VentasPorDia;
GO
CREATE VIEW app.vw_VentasPorDia
AS
SELECT
  CONVERT(date, p.FechaCreacionUTC) AS Fecha,
  COUNT(DISTINCT p.PedidoId)        AS Pedidos,
  SUM(p.Subtotal)                   AS SumaSubtotal,
  SUM(p.Impuestos)                  AS SumaImpuestos,
  SUM(p.Envio)                      AS SumaEnvio,
  SUM(p.Descuento)                  AS SumaDescuento,
  SUM(p.Total)                      AS SumaTotal
FROM app.Pedido p
WHERE p.Estado IN ('pagado','enviado','entregado')
GROUP BY CONVERT(date, p.FechaCreacionUTC);
GO

-----------------------------
-- 9) DATOS SEMILLA MINIMOS
-----------------------------
-- País/Estado/Ciudad
INSERT INTO app.Pais (Nombre, ISO2, ISO3) VALUES (N'Perú','PE','PER');
INSERT INTO app.Estado (PaisId, Nombre) SELECT TOP 1 PaisId, N'Lima' FROM app.Pais WHERE ISO2='PE';
INSERT INTO app.Ciudad (EstadoId, Nombre) SELECT TOP 1 EstadoId, N'Lima' FROM app.Estado;

-- Direcciones
INSERT INTO app.Direccion (PaisId, EstadoId, CiudadId, Linea1, CodigoPostal)
SELECT p.PaisId, e.EstadoId, c.CiudadId, N'Av. Siempre Viva 123', N'15000'
FROM app.Pais p JOIN app.Estado e ON e.PaisId=p.PaisId JOIN app.Ciudad c ON c.EstadoId=e.EstadoId;

-- Roles
INSERT INTO app.Rol (Nombre) VALUES (N'cliente'),(N'admin');

-- Usuarios
INSERT INTO app.Usuario (Email, Nombre, Apellido, Telefono, DireccionId)
VALUES (N'cliente@demo.com', N'Juan', N'Pérez', N'+51 900000000', 1);

INSERT INTO app.UsuarioRol (UsuarioId, RolId)
SELECT u.UsuarioId, r.RolId
FROM app.Usuario u CROSS JOIN app.Rol r
WHERE u.Email = N'cliente@demo.com' AND r.Nombre = N'cliente';

-- Categorías y Productos
INSERT INTO app.Categoria (Nombre, Slug, Activo) VALUES
(N'Electrónica', N'electronica', 1),
(N'Hogar',       N'hogar',       1);

INSERT INTO app.Producto (CategoriaId, SKU, Nombre, Descripcion, Precio, Activo)
SELECT c.CategoriaId, 'SKU-001', N'Auriculares Bluetooth', N'BT 5.0 con cancelación de ruido', 120.00, 1
FROM app.Categoria c WHERE c.Slug='electronica';

INSERT INTO app.Producto (CategoriaId, SKU, Nombre, Descripcion, Precio, Activo)
SELECT c.CategoriaId, 'SKU-002', N'Aspiradora Robot', N'Lidar, app y base de carga', 980.00, 1
FROM app.Categoria c WHERE c.Slug='hogar';

-- Inventario
INSERT INTO app.Inventario (ProductoId, Almacen, Stock, PuntoReorden)
SELECT p.ProductoId, N'Principal', 50, 5 FROM app.Producto p;

-----------------------------
-- 10) EJEMPLO DE CARRITO -> PEDIDO
-----------------------------
-- Crear pedido en estado 'confirmado'
DECLARE @UsuarioId BIGINT = (SELECT TOP 1 UsuarioId FROM app.Usuario WHERE Email=N'cliente@demo.com');
DECLARE @DirEnvioId BIGINT = (SELECT TOP 1 DireccionId FROM app.Usuario WHERE UsuarioId=@UsuarioId);
INSERT INTO app.Pedido (UsuarioId, DireccionEnvioId, Subtotal, Impuestos, Envio, Descuento, Estado)
VALUES (@UsuarioId, @DirEnvioId, 0, 0, 20.00, 0, 'confirmado');

DECLARE @PedidoId BIGINT = SCOPE_IDENTITY();

-- Agregar items (simulando carrito confirmado)
DECLARE @Producto1 BIGINT = (SELECT ProductoId FROM app.Producto WHERE SKU='SKU-001');
DECLARE @Producto2 BIGINT = (SELECT ProductoId FROM app.Producto WHERE SKU='SKU-002');

INSERT INTO app.PedidoItem (PedidoId, ProductoId, Cantidad, PrecioUnitario, ImpuestoLinea)
VALUES
(@PedidoId, @Producto1, 1, 120.00, 21.60),  -- 18% IGV ejemplo
(@PedidoId, @Producto2, 1, 980.00, 176.40);

-- Recalcular totales simples
UPDATE p SET
  Subtotal = x.Subtotal,
  Impuestos = x.Impuestos
FROM app.Pedido p
CROSS APPLY (
  SELECT
    SUM(pi.Cantidad * pi.PrecioUnitario) AS Subtotal,
    SUM(pi.ImpuestoLinea)                AS Impuestos
  FROM app.PedidoItem pi
  WHERE pi.PedidoId = p.PedidoId
) x
WHERE p.PedidoId = @PedidoId;

-- Registrar pago aprobado
INSERT INTO app.Pago (PedidoId, Monto, Moneda, Metodo, Estado, Referencia)
VALUES (@PedidoId, (SELECT Total FROM app.Pedido WHERE PedidoId=@PedidoId), 'USD', 'tarjeta', 'aprobado', N'TRX-DEMO-001');

-- Cambiar estado a 'pagado'
UPDATE app.Pedido SET Estado='pagado' WHERE PedidoId=@PedidoId;

-- Crear envío
INSERT INTO app.Envio (PedidoId, Courier, Guia, CostoEnvio, Estado)
VALUES (@PedidoId, N'ShipFast', N'SF-0001', 20.00, 'despachado');

-----------------------------
-- 11) CONSULTAS DE PRUEBA
-----------------------------
-- Ventas por día (vista)
SELECT * FROM app.vw_VentasPorDia;

-- Pedidos del usuario
SELECT p.PedidoId, p.Estado, p.Subtotal, p.Impuestos, p.Envio, p.Total, p.FechaCreacionUTC
FROM app.Pedido p
WHERE p.UsuarioId = @UsuarioId;

-- Items del pedido
SELECT i.PedidoItemId, pr.Nombre, i.Cantidad, i.PrecioUnitario, i.TotalLinea
FROM app.PedidoItem i
JOIN app.Producto pr ON pr.ProductoId = i.ProductoId
WHERE i.PedidoId = @PedidoId;

-- Auditoría de stock (si hubo updates de stock)
SELECT TOP 50 * FROM app.AuditoriaStock ORDER BY AuditoriaStockId DESC;
