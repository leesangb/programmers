// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    const isEven = n % 2 === 0;
    const time = Math.floor(n / 2);
    const watermelon = '수박'.repeat(time) + (isEven ? '' : '수');

    const answer = watermelon;
    return answer;
}
