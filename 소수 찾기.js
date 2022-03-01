// https://programmers.co.kr/learn/courses/30/lessons/42839

function getPrimes(number) {
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

    const primes = marks
        .map((mark, i) => (mark ? i : 0))
        .filter((i) => i > 0)
        .map((i) => i.toString());

    return primes;
}

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
    const primes = getPrimes(maxNumber);

    const validPrimes = [];
    primes.forEach((prime) => {
        if (canBuildNumber(prime, numberArray)) {
            validPrimes.push(prime);
        }
    });

    return validPrimes.length;
}
