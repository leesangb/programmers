// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    const results = new Set();

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            results.add(numbers[i] + numbers[j]);
        }
    }

    const answer = [...results].sort((a, b) => a - b);
    return answer;
}
