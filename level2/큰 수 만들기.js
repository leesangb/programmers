// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
    const result = [];
    let deleted = 0;

    for (let digit of number) {
        while (deleted < k && result.length && digit > result[result.length - 1]) {
            result.pop();
            deleted++;
        }
        if (result.length < number.length - k) {
            result.push(digit);
        }
    }

    const answer = result.join('');

    return answer;
}
