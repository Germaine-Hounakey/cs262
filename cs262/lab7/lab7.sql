DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS PropertyGame;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY,
	time timestamp,
        isFinished boolean
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);
CREATE TABLE Property(
        ID integer PRIMARY KEY, 
	propertyName varchar(50) ,
	propertyPrice integer
	);
CREATE TABLE PropertyGame(
        propertyID integer REFERENCES Property(ID), 
        gameID integer REFERENCES Game(ID),
        playerID integer REFERENCES Player(ID),
	numHouses integer ,
	numHotels integer
	);


-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON PropertyGame TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00', TRUE);
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00', FALSE);
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00', FALSE);

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00);

INSERT INTO Property VALUES (1,'Virginia Avenue/Northumberland Ave',160);
INSERT INTO Property VALUES (2,'Indiana Avenue/Fleet St',220);
INSERT INTO Property VALUES (3,'St. James Place/Bow St',180);
INSERT INTO Property VALUES (4,'North Carolina Avenu',300);

INSERT INTO PropertyGame VALUES (1,1,1,3,0);
INSERT INTO PropertyGame VALUES (2,1,1,0,1);
INSERT INTO PropertyGame VALUES (3,1,2,2,0);
INSERT INTO PropertyGame VALUES (3,1,2,0,1);

INSERT INTO PropertyGame VALUES (1,2,1,1,0);
INSERT INTO PropertyGame VALUES (2,2,2,0,1);
INSERT INTO PropertyGame VALUES (3,3,3,2,0);
INSERT INTO PropertyGame VALUES (2,3,2,0,1);