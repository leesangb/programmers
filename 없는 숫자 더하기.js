// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    const SUM_1_TO_9 = 45;
    return SUM_1_TO_9 - numbers.reduce((acc, n) => acc + n, 0);
}
