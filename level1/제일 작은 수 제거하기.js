// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }
    const min = Math.min(...arr);
    const answer = arr.filter((n) => n !== min);
    return answer;
}
