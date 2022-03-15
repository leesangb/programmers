// https://programmers.co.kr/learn/courses/30/lessons/17687

/**
 * 진수 변환
 * @param {number} n 변환 할 10진수 숫자
 * @param {string} digits 사용 할 숫자 문자열
 * @returns {string}
 */
function convert(n, digits) {
    if (n === 0) {
        return digits[0];
    }
    const base = digits.length;

    let number = '';

    while (n) {
        const nModBase = n % base;
        number = digits[nModBase] + number;
        n = nModBase === 0 ? n / base : Math.floor(n / base);
    }

    return number;
}

/**
 * 내 턴에 불러야 할 숫자들을 계산
 * @param {string} digits 진수 문자열
 * @param {number} length 미리 계산 할 길이
 * @param {number} nbPlayers 게임에 참여하는 사람 수
 * @param {number} turn 내 턴
 * @returns {string[]} 내 턴마다 불러야 할 숫자
 */
function computeGame(digits, length, nbPlayers, turn) {
    let numbers = [];
    let toConvert = 0;
    let i = 0;

    while (numbers.length < length) {
        const number = convert(toConvert, digits);
        for (const digit of number) {
            if (i % nbPlayers === turn - 1) {
                numbers.push(digit);
            }
            i++;
        }
        toConvert++;
    }

    return numbers.slice(0, length);
}

function solution(n, t, m, p) {
    const digits = '0123456789ABCDEF'.slice(0, n);
    const game = computeGame(digits, t, m, p);

    const answer = game.join('');
    return answer;
}
