/*
  Warnings:

  - You are about to drop the column `profissional_profile` on the `Internship` table. All the data in the column will be lost.
  - You are about to drop the column `weekly_workload` on the `Internship` table. All the data in the column will be lost.
  - You are about to drop the column `work_style` on the `Internship` table. All the data in the column will be lost.
  - Added the required column `profissionalProfile` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weeklyWorkload` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workStyle` to the `Internship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "profissional_profile",
DROP COLUMN "weekly_workload",
DROP COLUMN "work_style",
ADD COLUMN     "profissionalProfile" TEXT NOT NULL,
ADD COLUMN     "weeklyWorkload" INTEGER NOT NULL,
ADD COLUMN     "workStyle" "WorkStyle" NOT NULL;
