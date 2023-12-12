/*
  Warnings:

  - A unique constraint covering the columns `[userId,internshipId]` on the table `Subscribe` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `work_style` on the `Internship` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WorkStyle" AS ENUM ('isPerson', 'remote', 'hybrid');

-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "work_style",
ADD COLUMN     "work_style" "WorkStyle" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subscribe_userId_internshipId_key" ON "Subscribe"("userId", "internshipId");
