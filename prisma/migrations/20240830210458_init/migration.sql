/*
  Warnings:

  - You are about to drop the `URL` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "URL";

-- CreateTable
CREATE TABLE "Url" (
    "base" TEXT NOT NULL,
    "id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_id_key" ON "Url"("id");
