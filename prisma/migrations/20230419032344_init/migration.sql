/*
  Warnings:

  - Added the required column `avatar_url` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `race` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "avatar_url" TEXT NOT NULL,
ADD COLUMN     "race" TEXT NOT NULL;
