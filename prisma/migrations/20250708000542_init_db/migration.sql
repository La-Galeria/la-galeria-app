-- CreateTable
CREATE TABLE "Insumo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cantidadInicial" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "InsumoGastado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "idInsumo" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    CONSTRAINT "InsumoGastado_idInsumo_fkey" FOREIGN KEY ("idInsumo") REFERENCES "Insumo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CompraInsumo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "idInsumo" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "valorTotal" INTEGER NOT NULL,
    CONSTRAINT "CompraInsumo_idInsumo_fkey" FOREIGN KEY ("idInsumo") REFERENCES "Insumo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cantidadInicial" INTEGER NOT NULL,
    "precioVenta" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "CompraProducto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "valorTotal" INTEGER NOT NULL,
    CONSTRAINT "CompraProducto_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VentaProducto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    CONSTRAINT "VentaProducto_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Servicio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "VentaServicio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "idServicio" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    CONSTRAINT "VentaServicio_idServicio_fkey" FOREIGN KEY ("idServicio") REFERENCES "Servicio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pago" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "descripcion" TEXT NOT NULL,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreUsuario" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL
);
