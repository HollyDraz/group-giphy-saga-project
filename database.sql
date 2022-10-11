CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- favorite table
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR (1000) NOT NULL,
	"category_id" INTEGER
);

-- Default favorites
INSERT INTO "favorites" ("url", "category_id")
VALUES ('https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/200.gif?cid=3c6db77c7g5rhgenlrs4b126ynydd2nl9qi18gawwqza5r1h&rid=200.gif&ct=g', 1);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


