function dateFormat(now: number): string {
    const date: Date = new Date(now);
    const day: string | number = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month: number = date.getMonth() === 0 ? 1 : date.getMonth() + 1;
    const year: number = date.getFullYear();

    return `${month < 10 ? `0${month}` : month }/${day}/${year}`;
}

function timeFormatHoursMinutes(now: number): string {
    const settings: object = {
        hour: '2-digit',
        minute: '2-digit'
    }

    const date: Date = new Date(now);
    const time: string = date.toLocaleTimeString('en-US', settings);

    return time;
}

export {
    dateFormat,
    timeFormatHoursMinutes
}