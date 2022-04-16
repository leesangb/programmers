// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
    if (n === 1) {
        return 1;
    }
    let answer = 1;

    const max = Math.ceil(n / 2);

    for (let i = 1; i <= max; i++) {
        let sum = 0;
        for (let j = i; j <= max; j++) {
            sum += j;
            if (sum >= n) {
                answer += sum === n;
                break;
            }
        }
    }

    return answer;
}
