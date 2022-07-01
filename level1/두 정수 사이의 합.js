// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    const [begin, end] = [Math.min(a, b), Math.max(a, b)];
    let sum = 0;
    for (let i = begin; i <= end; i++) {
        sum += i;
    }
    return sum;
}
