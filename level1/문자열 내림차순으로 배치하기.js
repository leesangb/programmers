// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    const answer = s
        .split('')
        .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
        .join('');
    return answer;
}
