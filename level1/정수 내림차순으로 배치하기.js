// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    const answer = Number(n.toString().split('').sort().reverse().join(''));
    return answer;
}
