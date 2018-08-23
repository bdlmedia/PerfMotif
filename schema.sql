CREATE DATABASE bespoke_db

CREATE TABLE `website-contact` (
  `id` Int( 5) AUTO_INCREMENT NOT NULL,
  `created_at` DATETIME NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `email` VARCHAR( 50 ) NOT NULL,
  `phone` INT(15) NOT NULL,
  `message` VARCHAR(500) NOT NULL,
  
  PRIMARY KEY ( `id` ) 
);