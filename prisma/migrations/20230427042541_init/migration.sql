/*
  Warnings:

  - Changed the type of `race` on the `characters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RacesEnum" AS ENUM ('Human', 'Half_Elf', 'Dwarf', 'Dragonborn', 'Beastfolk');

-- AlterTable
ALTER TABLE "characters" DROP COLUMN "race",
ADD COLUMN     "race" "RacesEnum" NOT NULL;
