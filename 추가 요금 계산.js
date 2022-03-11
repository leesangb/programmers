// https://programmers.co.kr/learn/courses/30/lessons/92341

function parseRecord(record) {
    const [time, carNumber, history] = record.split(' ');
    const [hours, minutes] = time.split(':');
    return {
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        carNumber,
        history,
    };
}

function getParkingHistory(records) {
    const maxOut = 23 * 60 + 59;
    const parkingHistory = {};

    records.forEach((record) => {
        const { hours, minutes, carNumber, history } = parseRecord(record);

        if (history === 'IN') {
            parkingHistory[carNumber] = [
                ...(parkingHistory[carNumber] || []),
                {
                    in: hours * 60 + minutes,
                    out: maxOut,
                },
            ];
        } else {
            const lastIndex = parkingHistory[carNumber].length - 1;
            parkingHistory[carNumber][lastIndex].out = hours * 60 + minutes;
        }
    });

    return parkingHistory;
}

function computeFee([defaultTime, defaultFee, timeUnit, feeUnit], histories) {
    const totalTime = histories.reduce((acc, history) => acc + history.out - history.in, 0);
    if (totalTime < defaultTime) {
        return defaultFee;
    }

    const price = defaultFee + Math.ceil((totalTime - defaultTime) / timeUnit) * feeUnit;
    return price;
}

function solution(fees, records) {
    const parkingHistory = getParkingHistory(records);

    const answer = Object.keys(parkingHistory)
        .sort((a, b) => a.localeCompare(b))
        .map((carNumber) => computeFee(fees, parkingHistory[carNumber]));

    return answer;
}
