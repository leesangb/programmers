// https://programmers.co.kr/learn/courses/30/lessons/12940

function greatestCommonDivisor(a, b) {
    return !b ? a : greatestCommonDivisor(b, a % b);
}

function solution(n, m) {
    const gcd = greatestCommonDivisor(n, m);
    const answer = [gcd, (n * m) / gcd];
    return answer;
}
