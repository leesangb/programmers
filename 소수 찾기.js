// https://programmers.co.kr/learn/courses/30/lessons/42839

function getPrimes(number, numberArray) {
    // zero-based
    const marks = new Array(number + 1).fill(1);
    // mark 0 and 1 as not prime
    marks[0] = 0;
    marks[1] = 0;
    const rootMax = Math.sqrt(number);

    for (let i = 2; i < rootMax; i++) {
        if (marks[i]) {
            let j = Math.pow(i, 2);
            while (j <= number) {
                marks[j] = 0;
                j += i;
            }
        }
    }

    const primes = [];

    for (let i = 0; i < marks.length; i++) {
        if (marks[i]) {
            const toBuild = i.toString();
            if (canBuildNumber(toBuild, numberArray)) primes.push(toBuild);
        }
    }

    return primes;
}

/**
 * numberArray에 있는 숫자들로 toBuild을 조합할 수 있는지 확인
 * @param {string} toBuild 만들어 낼 숫자
 * @param {string[]} numberArray 쓸 수 있는 숫자
 */
function canBuildNumber(toBuild, numberArray) {
    const left = {};
    numberArray.forEach((n) => (left[n] = (left[n] || 0) + 1));

    for (let n of toBuild) {
        if (!left[n]) {
            return false;
        }
        left[n] -= 1;
    }

    return true;
}

function solution(numbers) {
    const numberArray = numbers.split('');
    const maxNumberStr = numberArray.sort((n1, n2) => n2.localeCompare(n1)).join('');
    const maxNumber = parseInt(maxNumberStr);
    const primes = getPrimes(maxNumber, numberArray);

    return primes.length;
}
