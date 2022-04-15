// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    const numbers = s.split(' ').map((number) => parseInt(number));
    return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}
