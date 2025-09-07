/*
  Warnings:

  - Added the required column `valor` to the `VentaProducto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `VentaServicio` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VentaProducto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    CONSTRAINT "VentaProducto_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_VentaProducto" ("cantidad", "fecha", "id", "idProducto") SELECT "cantidad", "fecha", "id", "idProducto" FROM "VentaProducto";
DROP TABLE "VentaProducto";
ALTER TABLE "new_VentaProducto" RENAME TO "VentaProducto";
CREATE TABLE "new_VentaServicio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "idServicio" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    CONSTRAINT "VentaServicio_idServicio_fkey" FOREIGN KEY ("idServicio") REFERENCES "Servicio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_VentaServicio" ("cantidad", "fecha", "id", "idServicio") SELECT "cantidad", "fecha", "id", "idServicio" FROM "VentaServicio";
DROP TABLE "VentaServicio";
ALTER TABLE "new_VentaServicio" RENAME TO "VentaServicio";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
