// https://programmers.co.kr/learn/courses/30/lessons/17687

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
