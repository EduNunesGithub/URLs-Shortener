-- CreateTable
CREATE TABLE "URL" (
    "base" TEXT NOT NULL,
    "id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "URL_id_key" ON "URL"("id");
