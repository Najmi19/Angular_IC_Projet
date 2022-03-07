DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS moto;
DROP TABLE IF EXISTS voiture;
CREATE TABLE users (
  id INT PRIMARY KEY,
  FIRST_NAME VARCHAR(250) NOT NULL,
  LAST_NAME VARCHAR(250) NOT NULL,
  EMAIL VARCHAR(250) NOT NULL
);

CREATE TABLE moto (
  id INT PRIMARY KEY,
  DESCRIPTION VARCHAR(250),
  PRIX VARCHAR(250) NOT NULL
);

CREATE TABLE voiture (
  id INT PRIMARY KEY,
  DESCRIPTION VARCHAR(250),
  PRIX VARCHAR(250) NOT NULL
);
INSERT INTO users (ID, FIRST_NAME, LAST_NAME, EMAIL) VALUES
  (1, 'first', 'last 1', 'abc1@gmail.com'),
  (2, 'first', 'last 2', 'abc2@gmail.com'),
  (3, 'first', 'last 3', 'abc3@gmail.com');

  INSERT INTO moto(ID,DESCRIPTION, PRIX) VALUES
  (1,'fred',1253),
  (2,'frvfed',1243),
  (3,'fregfdd',1853);

  INSERT INTO voiture(ID,DESCRIPTION, PRIX) VALUES
    (1,'alfred',1253),
    (2,'votfrvfed',1243),
    (3,'vegfdd',1853);