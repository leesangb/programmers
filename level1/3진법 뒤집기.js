// https://programmers.co.kr/learn/courses/30/lessons/68935

function base10ToReversedBase3(n) {
    const digits = [];
    while (n) {
        const rest = n % 3;
        digits.push(rest);
        n = (n - rest) / 3;
    }
    return digits.join('');
}

function base3ToBase10(s) {
    let number = 0;

    for (let i = 0; i < s.length; i++) {
        number += parseInt(s[i]) * 3 ** (s.length - 1 - i);
    }

    return number;
}

function solution(n) {
    const reversedBase3 = base10ToReversedBase3(n);
    const answer = base3ToBase10(reversedBase3);
    return answer;
}
