// https://programmers.co.kr/learn/courses/30/lessons/12921

function getPrimesCount(n) {
    const checked = new Array(n + 1).fill(0);
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (checked[i]) continue;
        let j = i;
        count++;
        while (j <= n) {
            checked[j] = 1;
            j += i;
        }
    }
    return count;
}

function solution(n) {
    const answer = getPrimesCount(n);
    return answer;
}
