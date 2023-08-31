/*
  Warnings:

  - You are about to drop the column `craetedAt` on the `ClientInformation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClientInformation" DROP COLUMN "craetedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" DROP NOT NULL;
