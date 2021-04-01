/*
CREATE TABLE Game (
	id INTEGER AUTO_INCREMENT,
    time INTEGER,
    status VARCHAR(30),
    team1_id INTEGER,
    team2_id INTEGER,
    result VARCHAR(30),
    PRIMARY KEY (id),
    FOREIGN KEY(team1_id) REFERENCES Team(id),
    FOREIGN KEY(team2_id) REFERENCES Team(id)
);
*/
//! TODO
