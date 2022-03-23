// https://programmers.co.kr/learn/courses/30/lessons/42895

/**
 * lefts와 rights에 있는 숫자들을 +, -, *, / 로 연산하여 Set에 반환
 * @param {number[]} lefts
 * @param {number[]} rights
 * @returns {Set<number>}
 */
function getResultsCombination(lefts, rights) {
    const results = new Set();

    lefts.forEach((left) => {
        rights.forEach((right) => {
            results.add(left + right);
            results.add(left - right);
            results.add(left * right);
            if (right > 0 && left % right === 0) {
                results.add(left / right);
            }
        });
    });

    return results;
}

/**
 * digit를 n번 붙여놓은 수를 반환
 * @param {number} digit
 * @param {number} n
 * @returns {number}
 */
function concatDigit(digit, n) {
    return parseInt(new Array(n).fill(digit).join(''));
}

function solution(digit, goal) {
    if (digit === goal) {
        return 1;
    }
    const MAX_NUMBER_OF_DIGIT = 8;

    const resultNDigit = new Array(MAX_NUMBER_OF_DIGIT + 1);
    resultNDigit[1] = new Set([digit]);

    for (let i = 2; i <= MAX_NUMBER_OF_DIGIT; i++) {
        resultNDigit[i] = new Set([concatDigit(digit, i)]);
        for (let j = 1; j < i; j++) {
            const lefts = resultNDigit[j];
            const rights = resultNDigit[i - j];
            const resultsCombinations = getResultsCombination(lefts, rights);
            resultNDigit[i] = new Set([...resultNDigit[i], ...resultsCombinations]);

            if (resultNDigit[i].has(goal)) {
                return i;
            }
        }
    }

    return -1;
}
