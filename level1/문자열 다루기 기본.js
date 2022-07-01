// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    const answer = (s.length === 4 || s.length === 6) && !!s.match(/^\d+$/);
    return answer;
}
