// https://programmers.co.kr/learn/courses/30/lessons/70129

function removeZeros(s) {
    const length = s.length;
    return s.replace(/0/g, '');
}

function toBase2(n) {
    const digits = [];
    while (n) {
        const rest = n % 2;
        digits.unshift(rest);
        n = (n - rest) / 2;
    }
    return digits.join('');
}

function solution(s) {
    let removeCount = 0;
    let removedZeroCount = 0;
    while (s !== '1') {
        const lengthBefore = s.length;
        s = removeZeros(s);
        const lengthAfter = s.length;
        s = toBase2(lengthAfter);
        removedZeroCount += lengthBefore - lengthAfter;
        removeCount++;
    }
    const answer = [removeCount, removedZeroCount];
    return answer;
}
