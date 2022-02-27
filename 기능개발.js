function getTimeToSpend(progresses, speeds) {
    return progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
}

function solution(progresses, speeds) {
    const toSpend = getTimeToSpend(progresses, speeds);
    const answer = [];
    let i = 0;
    while (i < toSpend.length) {
        const origin = toSpend[i];
        let count = 1;
        let j = i + 1;
        while (j < toSpend.length && toSpend[j] <= origin) {
            count++;
            j++;
        }
        answer.push(count);
        i = j;
    }
    return answer;
}
