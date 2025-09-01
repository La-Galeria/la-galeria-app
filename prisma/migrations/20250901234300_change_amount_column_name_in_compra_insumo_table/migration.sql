/*
  Warnings:

  - You are about to drop the column `cantidadInicial` on the `Producto` table. All the data in the column will be lost.
  - Added the required column `cantidad` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioVenta" INTEGER NOT NULL
);
INSERT INTO "new_Producto" ("id", "nombre", "precioVenta") SELECT "id", "nombre", "precioVenta" FROM "Producto";
DROP TABLE "Producto";
ALTER TABLE "new_Producto" RENAME TO "Producto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
