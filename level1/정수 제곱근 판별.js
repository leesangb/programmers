// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
}
