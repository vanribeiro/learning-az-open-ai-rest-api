function dateFormat(now: number) {
    const date = new Date(now);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() === 0 ? 1 : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month < 10 ? `0${month}` : month }/${day}/${year}`
}

function timeFormatHoursMinutes(date: number) {
    // const 
    console.log(date)
}

export {
    dateFormat,
    timeFormatHoursMinutes
}