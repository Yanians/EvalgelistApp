-- DROP TABLE IF EXISTS `it_companies`;

CREATE TABLE `users_reg` (
  `users_id` int(11) unsigned NOT NULL auto_increment,
  `fullname` varchar(255) NULL,
  `religion` varchar(255) NULL,
  `country` varchar(255)  NULL,
  `email` varchar(255) NULL,
  `contact` int(15)  NULL,
  `password` varchar(255) NULL,
   PRIMARY KEY  (`users_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- LOCK TABLES `it_companies` WRITE;

INSERT INTO `users_reg` (`users_id`, `fullname`, `religion`, `country`, `email`, `contact`, `password`)
VALUES
  (1,'Anecita Adlawan','Baptist','philippines','Ann23@gmail.com','09979162314','9Jawap@net'),
  (2,'Jayvee Agoncillo','Sevent day Adventist','philippines','Jay12@gmail.com','09453324566','9Jawap@net'),
  (3,'Verdugo Tiaves','Catholic','philippines','Tiaves45@gmail.com','09998775633','9Jawap@net'),
  (4,'Evangeline Bautista','INC','philippines','Vangel77@gmail.com','09092345523','9Jawap@net'),
  (5,'Sebastian Peres','Four Square','philippines','Seb67@gmail.com','09466643543','9Jawap@net'),
  (6,'Agnes Natividad','Momones','philippines','Agnes44@gmail.com','099098344322','9Jawap@net'),
  (7,'Ariel De Ocampo','ISLAM','philippines','Ariel31@gmail.com','09886544433','9Jawap@net'),
  (8,'Lucas Soriano','Baptist','philippines','Sorian44@gmail.com','0996784483','9Jawap@net'),
  (9,'Bevian Adlawan','Catholic','philippines','Vian88@gmail.com','09095677832','9Jawap@net');
  

-- UNLOCK TABLES;