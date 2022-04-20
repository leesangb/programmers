// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    const half = Math.floor(s.length / 2);
    const answer = s.length % 2 ? s[half] : `${s[half - 1]}${s[half]}`;
    return answer;
}
