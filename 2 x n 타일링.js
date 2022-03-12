// https://programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
    let combination1 = 0;
    let combination2 = 1;
    let answer = 0;

    for (let i = 0; i < n; i++) {
        answer = (combination1 + combination2) % 1_000_000_007;
        combination1 = combination2;
        combination2 = answer;
    }

    return answer;
}
