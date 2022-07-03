// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    const numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(x * i);
    }
    const answer = numbers;
    return answer;
}
