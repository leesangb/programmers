// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        let sign = signs[i] ? 1 : -1;
        answer += absolutes[i] * sign;
    }
    return answer;
}
