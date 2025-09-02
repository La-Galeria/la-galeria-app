/*
  Warnings:

  - You are about to drop the column `cantidadInicial` on the `Insumo` table. All the data in the column will be lost.
  - Added the required column `cantidad` to the `Insumo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Insumo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL
);
INSERT INTO "new_Insumo" ("id", "nombre") SELECT "id", "nombre" FROM "Insumo";
DROP TABLE "Insumo";
ALTER TABLE "new_Insumo" RENAME TO "Insumo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
