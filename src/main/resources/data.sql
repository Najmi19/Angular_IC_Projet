DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS moto;
DROP TABLE IF EXISTS voiture;
CREATE TABLE users (
  id INT PRIMARY KEY,
  FIRSTNAME VARCHAR(250) NOT NULL,
  LASTNAME VARCHAR(250) NOT NULL,
  EMAIL VARCHAR(250) NOT NULL
);

CREATE TABLE moto (
  id INT PRIMARY KEY,
  DESCRIPTION VARCHAR(250),
  PRIX FLOAT NOT NULL
);

CREATE TABLE voiture (
  id INT PRIMARY KEY,
  img VARCHAR (100),
  nom VARCHAR (30) NOT NULL,
  model VARCHAR (30),
  mileage INT,
  typetransmission VARCHAR(30),
  capacity DOUBLE,
  torqmax VARCHAR(30),
  enginedisp VARCHAR(30),
  prix FLOAT NOT NULL
);
INSERT INTO users (ID, firstName, lastName, EMAIL) VALUES
  (1, 'first', 'last 1', 'abc1@gmail.com'),
  (2, 'first', 'last 2', 'abc2@gmail.com'),
  (3, 'first', 'last 3', 'abc3@gmail.com');

  INSERT INTO moto(ID,DESCRIPTION, PRIX) VALUES
  (1,'fred',1253 ),
  (2,'frvfed',1243),
  (3,'fregfdd',1853);

  INSERT INTO voiture(ID, nom, model, img, mileage ,typetransmission,capacity,torqmax, enginedisp, prix) VALUES
    (1,'Bugatti','Veyron','https://i.ibb.co/wCPJRLD/car-gc07e62adb-1920.jpg',6.8,'Automatic',100,'1250 @2200',7993,3500000),
    (2,'Mercedes','AMG','https://i.ibb.co/XLNMV3S/auto-g51878f578-1920.jpg',1225,'Automatic',25,'479 @ 1750',4.0,3500),
    (3,'Audi','A5','https://i.ibb.co/FqDSbjN/car-gf35abb144-1920.jpg',19.2,'Automatic',5,'479 @ 1750',1968,2500);