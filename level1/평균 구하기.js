// https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    const sum = arr.reduce((acc, n) => acc + n, 0);
    const answer = sum / arr.length;
    return answer;
}
