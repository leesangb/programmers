// https://programmers.co.kr/learn/courses/30/lessons/12901

function getDayString(date) {
    return date.toDateString().slice(0, 3).toUpperCase();
}

function solution(a, b) {
    const date = new Date(2016, a - 1, b);
    const answer = getDayString(date);
    return answer;
}
