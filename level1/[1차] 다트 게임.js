// https://programmers.co.kr/learn/courses/30/lessons/17682

const POW = {
    S: 1,
    D: 2,
    T: 3,
};

function solution(dartResult) {
    const numbers = [];

    let i = 0;
    while (i < dartResult.length) {
        const digits = [];

        while (dartResult[i].match(/\d/)) {
            digits.push(dartResult[i++]);
        }

        const number = parseInt(digits.join('')) ** POW[dartResult[i++]];
        numbers.push(number);

        if (dartResult[i] === '*') {
            numbers[numbers.length - 1] *= 2;
            numbers[numbers.length - 2] *= 2;
            i++;
        }
        if (dartResult[i] === '#') {
            numbers[numbers.length - 1] *= -1;
            i++;
        }
    }

    return numbers.reduce((acc, n) => acc + n, 0);
}
