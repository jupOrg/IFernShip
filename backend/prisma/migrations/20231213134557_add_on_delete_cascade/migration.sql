-- DropForeignKey
ALTER TABLE "Internship" DROP CONSTRAINT "Internship_enterpriseId_fkey";

-- DropForeignKey
ALTER TABLE "Subscribe" DROP CONSTRAINT "Subscribe_internshipId_fkey";

-- DropForeignKey
ALTER TABLE "Subscribe" DROP CONSTRAINT "Subscribe_userId_fkey";

-- AddForeignKey
ALTER TABLE "Internship" ADD CONSTRAINT "Internship_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "Enterprise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscribe" ADD CONSTRAINT "Subscribe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscribe" ADD CONSTRAINT "Subscribe_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "Internship"("id") ON DELETE CASCADE ON UPDATE CASCADE;
