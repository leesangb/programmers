// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function greatestCommonDivisor(a, b) {
    return !b ? a : greatestCommonDivisor(b, a % b);
}

function leastCommonMultiple(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
}

function solution(arr) {
    const answer = arr.reduce((a, b) => leastCommonMultiple(a, b));
    return answer;
}
