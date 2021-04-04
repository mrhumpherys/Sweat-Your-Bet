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
}

}
