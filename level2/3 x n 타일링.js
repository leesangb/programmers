// https://programmers.co.kr/learn/courses/30/lessons/12902

const CONSTANT = 1_000_000_007;

function solution(n) {
    if (n % 2) {
        return 0;
    }

    let answer = 0;
    let combination1 = 1;
    let combination2 = 1;

    for (let i = 2; i <= n; i += 2) {
        answer = (((combination2 * 4) % CONSTANT) - (combination1 % CONSTANT) + CONSTANT) % CONSTANT;
        combination1 = combination2;
        combination2 = answer;
    }

    return answer;
}
