// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    const hidden = phone_number.slice(0, -4).replace(/./g, '*');
    const last4 = phone_number.slice(-4);
    const answer = `${hidden}${last4}`;
    return answer;
}
