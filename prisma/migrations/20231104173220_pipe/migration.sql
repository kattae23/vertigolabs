-- AlterTable
ALTER TABLE `User` ADD COLUMN `accountState` ENUM('premium', 'uncompleted') NOT NULL DEFAULT 'uncompleted';
