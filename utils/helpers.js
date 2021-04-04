

const teamData = require('../seeds/team-seeds')

module.exports = {
    format_date: (date) => {
        let newDate =  date.split('T')[0];

        return newDate;
        
    },
    format_time: (date) => {
        let newDate =  date.split('T')[1];

        return newDate;
        
    },
    // format_date: date => {
    //     return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
    //         date
    //     ).getFullYear()}`;
    // },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    },
    
    auto_increment: (index) =>{
       return index + 1;
},

    render_team_logo: (id,logo) => {
        if(id===teamData.TeamID[0]){
            logo = "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[1]){
            logo = "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg"
            return logo;
        }
        if(id===teamData.TeamID[2]){
            logo = "https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[3]){
            logo = "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[4]){
            logo = "https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[5]){
            logo = "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[6]){
            logo = "https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[7]){
            logo = "https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg"
            return logo;
        }
        if(id===teamData.TeamID[8]){
            logo = "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg"
            return logo;
        }
        if(id===teamData.TeamID[9]){
            logo = "https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[10]){
            logo = "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[11]){
            logo = "https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[12]){
            logo = "https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg"
            return logo;
        }
        if(id===teamData.TeamID[13]){
            logo = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Pistons_logo17.svg"
            return logo;
        }
        if(id===teamData.TeamID[14]){
            logo = "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[15]){
            logo = "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[16]){
            logo = "https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg"
            return logo;
        }
        if(id===teamData.TeamID[17]){
            logo = "hhttps://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg"
            return logo;
        }
        if(id===teamData.TeamID[18]){
            logo = "https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[19]){
            logo = "https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg"
            return logo;
        }
        if(id===teamData.TeamID[20]){
            logo = "https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg"
            return logo;
        }
        if(id===teamData.TeamID[21]){
            logo = "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg"
            return logo;
        }
        if(id===teamData.TeamID[22]){
            logo = "https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[23]){
            logo = "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg"
            return logo;
        }
        if(id===teamData.TeamID[24]){
            logo = "https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[25]){
            logo = "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[26]){
            logo = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
            return logo;
        }
        if(id===teamData.TeamID[27]){
            logo = "https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg"
            return logo;
        }
        if(id===teamData.TeamID[28]){
            logo = "https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg"
            return logo;
        }

        

    }

}
