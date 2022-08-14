/*
  Warnings:

  - You are about to drop the column `acessedAt` on the `sessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "publications" ALTER COLUMN "url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "acessedAt",
ADD COLUMN     "accessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
