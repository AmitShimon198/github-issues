export const returnDayDiff =(firstDate, secondDate)=>{
    return Math.round((firstDate - secondDate) / (1000 * 60 * 60 * 24))
}
