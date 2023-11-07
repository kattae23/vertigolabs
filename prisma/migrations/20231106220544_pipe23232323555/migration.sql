/*
  Warnings:

  - You are about to drop the `Gender` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Gender` DROP FOREIGN KEY `Gender_userId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `gender` ENUM('male', 'female') NULL;

-- DropTable
DROP TABLE `Gender`;
