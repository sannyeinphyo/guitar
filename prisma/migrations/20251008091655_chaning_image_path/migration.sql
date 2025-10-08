/*
  Warnings:

  - You are about to alter the column `image` on the `Chord` table. The data in that column could be lost. The data in that column will be cast from `ByteA` to `VarChar(255)`.
  - You are about to alter the column `image` on the `artist` table. The data in that column could be lost. The data in that column will be cast from `ByteA` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Chord" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "artist" ALTER COLUMN "image" SET DATA TYPE VARCHAR(255);
