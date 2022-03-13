// https://programmers.co.kr/learn/courses/30/lessons/43165

function dfs(numbers, target, depth, result, results) {
    if (depth === numbers.length) {
        if (result === target) {
            results.push(result);
        }
        return;
    }

    dfs(numbers, target, depth + 1, result + numbers[depth], results);
    dfs(numbers, target, depth + 1, result - numbers[depth], results);
}

function solution(numbers, target) {
    const results = [];
    dfs(numbers, target, 0, 0, results);

    return results.length;
}
