// https://programmers.co.kr/learn/courses/30/lessons/92335

/**
 * 10진수를 변환합니다
 * @param {number} n
 * @param {3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} base
 * @returns {string}
 */
function convertFromBase10(n, base) {
    if (base === 10) {
        return n.toString();
    }
    const digits = '0123456789'.slice(0, base);
    if (n === 0) {
        return digits[0];
    }

    let number = '';

    while (n) {
        const nModBase = n % base;
        number = digits[nModBase] + number;
        n = nModBase === 0 ? n / base : Math.floor(n / base);
    }

    return number;
}

/**
 * 소수인지 체크합니다
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
    if (isNaN(n) || n < 2) {
        return false;
    }
    const max = Math.floor(Math.sqrt(n));
    const checked = new Array(max + 1).fill(0);
    for (let i = 2; i <= max; i++) {
        if (checked[i]) continue;
        if (n % i === 0) {
            return false;
        }
        let j = i;
        while (j <= max) {
            checked[j] = 1;
            j += i;
        }
    }
    return true;
}

function solution(n, k) {
    const converted = convertFromBase10(n, k);
    const answer = converted
        .split('0')
        .map((n) => parseInt(n))
        .filter(isPrime).length;
    return answer;
}
