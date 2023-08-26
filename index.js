const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"}
]

function superbowlWin(record) {
    let isItAWinner = (obj => obj.result === "W");
    const winRecord = record.find(isItAWinner);
    if (winRecord) {
        return winRecord.year;
    }
}