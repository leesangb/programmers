// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    const sumOfDigits = x
        .toString()
        .split('')
        .reduce((acc, digit) => acc + Number(digit), 0);

    const answer = Number.isInteger(x / sumOfDigits);
    return answer;
}
