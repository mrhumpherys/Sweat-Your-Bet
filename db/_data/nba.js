// import npm for env variables 
require('dotenv').config();
// IMPORT FILE SYSTEM
fs = require('fs');
//================================
//This imports the npm node-fetch module
const fetch = require('node-fetch');;

//ALREADY SET UP TO RETURN TEAM DATA. I.E. TEAM NAME, LOGO, ETC
getTeam = () => {
    //fetch request according to node-fetch's docs for node and express 
    fetch(`https://fly.sportsdata.io/v3/nba/scores/json/AllTeams`, {
        method: 'GET',
        //required header 
        headers: {
            //REQUIRED KEY FOR API ACCESS - REQUIRED TOKEN IN ENV SETTINGS
            'Ocp-Apim-Subscription-Key': process.env.KEY
        }
    })
    //RETURNS RESPONSE TO JSON
        .then(res => res.json())
        //DO SOMETHING WITH THE DATA
        .then(json => {
            //PARTICULAR CODE RETURNS RESULTS AND WRITES TO A JSON FILE
            const data = JSON.stringify(json);
            //WRITE FILE SYNTAX STRUCTURE 
            fs.writeFile('./team-data.json', data, 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);
                } else {
                    console.log(`File is written successfully!`);
                }
            });

        });
}
// LIST OF ALL GAMES BY DATE
getGamesByDate = (date) => {
    //THE SYNTAX FOR THE DATE FOR QUERIES
    date = '2021-MAR-31'
    //FETCH REQUEST WITH DATE VARIABLE
    fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.KEY
        }
    })
        .then(res => res.json())
        .then(json => {
            const data = JSON.stringify(json);
            fs.writeFile('./game-data1.json', data, 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);
                } else {
                    console.log(`File is written successfully!`);
                }
            });

        });
}
//RETURNS NEWS BY DATE- GET NEWS IS BETTER FOR RIGHT NOW
getNewsByDate = (date) => {
    date = '2021-MAR-31'
    fetch(`https://fly.sportsdata.io/v3/nba/scores/json/NewsByDate/${date}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.KEY
        }
    })
        .then(res => res.json())
        .then(json => {
            const data = JSON.stringify(json);
            fs.writeFile('./news-data.json', data, 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);
                } else {
                    console.log(`File is written successfully!`);
                }
            });

        });
}
//GETS CURRENT NEWS STORIES
getNews = () => {
    
    fetch(`https://fly.sportsdata.io/v3/nba/scores/json/News`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.KEY
        }
    })
        .then(res => res.json())
        .then(json => {
            const data = JSON.stringify(json);
            fs.writeFile('./current-news-data.json', data, 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);
                } else {
                    console.log(`File is written successfully!`);
                }
            });

        });
}

