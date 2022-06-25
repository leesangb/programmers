// https://programmers.co.kr/learn/courses/30/lessons/12923

const MAX_BLOCK_NUMBER = 10_000_000;

function getMaxDivisor(n) {
    const max = Math.sqrt(n);
    for (let i = 2; i <= max; i++) {
        if (n % i === 0 && n / i <= MAX_BLOCK_NUMBER) {
            return n / i;
        }
    }
    return 1;
}

function solution(begin, end) {
    const length = end - begin + 1;
    const answer = Array(length);

    for (let i = begin; i <= end; i++) {
        answer[i - begin] = getMaxDivisor(i);
    }
    
    if (begin === 1) {
        answer[0] = 0;
    }
    
    return answer;
}
