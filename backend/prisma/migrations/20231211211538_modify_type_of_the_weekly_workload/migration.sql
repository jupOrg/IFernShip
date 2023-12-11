/*
  Warnings:

  - You are about to drop the column `position` on the `Internship` table. All the data in the column will be lost.
  - Changed the type of `weekly_workload` on the `Internship` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "position",
DROP COLUMN "weekly_workload",
ADD COLUMN     "weekly_workload" INTEGER NOT NULL;
