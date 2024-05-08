const dayInMilliseconds = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    const date1 = new Date(dateText1);
    const date2 = new Date(dateText2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / dayInMilliseconds);
    return diffDays;
}

console.log(getDaysBetweenDates('12/15/2023', "12/18/2023"));