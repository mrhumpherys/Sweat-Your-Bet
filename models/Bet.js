/*
CREATE TABLE Bet (
	id INTEGER AUTO_INCREMENT,
    host_id INTEGER,
    challenger_id INTEGER,
    wager INTEGER,
    host_won BOOLEAN,
    game_id INTEGER,
    pick_team_id INTEGER,
    win BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY(host_id) REFERENCES User(id),
    FOREIGN KEY(challenger_id) REFERENCES User(id),
    FOREIGN KEY(game_id) REFERENCES Game(id),
    FOREIGN KEY(pick_team_id) REFERENCES Team(id)
);

*/
//! TODO
