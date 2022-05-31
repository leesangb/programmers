// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    d.sort((a, b) => a - b);

    let count = 0;
    let sum = 0;
    for (let amount of d) {
        sum += amount;
        if (sum > budget) {
            break;
        }
        count++;
    }

    return count;
}
