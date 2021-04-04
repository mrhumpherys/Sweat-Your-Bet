module.exports = {
    format_date: (date) => {
        let newDate =  date.split('T')[0];

        return newDate;
        
    },
    format_time: (date) => {
        let newDate =  date.split('T')[1];
        let time = newDate.split(":")[0];
        if(time>12){
            let formatted_time= time -=12
            let newTime= formatted_time + ':00pm'
            return newTime;
        }else{
            let formatted_time = time.split("0");
            let newTime = formatted_time + ':00am';
            return newTime
        }
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
}

}
