// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    const answer = n
        .toString()
        .split('')
        .reduce((acc, digit) => acc + Number(digit), 0);
    return answer;
}
