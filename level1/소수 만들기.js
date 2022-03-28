// https://programmers.co.kr/learn/courses/30/lessons/12977

function getCombinations(numbers) {
    const combinations = [];
    for (let i = 0; i < numbers.length - 2; i++) {
        for (let j = i + 1; j < numbers.length - 1; j++) {
            for (let k = j + 1; k < numbers.length; k++) {
                combinations.push([numbers[i], numbers[j], numbers[k]]);
            }
        }
    }
    return combinations;
}

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    const max = Math.ceil(Math.sqrt(n));
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

function sum(numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

function solution(numbers) {
    const answer = getCombinations(numbers).map(sum).filter(isPrime).length;

    return answer;
}
