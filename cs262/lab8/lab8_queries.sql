SELECT ID
FROM game
ORDER BY time ASC
SELECT * 
FROM Game
WHERE time > (SELECT dateadd(week, -1, getdate()))
SELECT name
FROM Player
WHERE name IS NOT NULL
SELECT playerID
FROM PlayerGame
WHERE score > 2000
SELECT name
FROM Player
WHERE emailAddress LIKE '%gmail.edu'


--8.2
SELECT score 
FROM PlayerGame, Player
WHERE name = 'The King'
ORDER BY score DESC

SELECT name 
FROM Player, PlayerGame, Game
WHERE Player.ID = playerID
AND Game.ID = gameID

