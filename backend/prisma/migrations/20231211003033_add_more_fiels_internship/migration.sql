/*
  Warnings:

  - Added the required column `course` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `office` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profissional_profile` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weekly_workload` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_style` to the `Internship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Internship" ADD COLUMN     "course" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "office" TEXT NOT NULL,
ADD COLUMN     "profissional_profile" TEXT NOT NULL,
ADD COLUMN     "weekly_workload" TEXT NOT NULL,
ADD COLUMN     "work_style" TEXT NOT NULL;
