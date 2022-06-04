// https://programmers.co.kr/learn/courses/30/lessons/76502

function isComplementary(a, b) {
    return (a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}');
}

function isCorrect(brackets) {
    const stack = [];
    for (let bracket of brackets) {
        const isEmpty = stack.length === 0;
        if ((isEmpty && bracket === ')') || (isEmpty && bracket === ']') || (isEmpty && bracket === '}')) {
            return false;
        }
        const lastBracket = stack[stack.length - 1];

        if (['(', '[', '{'].some((b) => b === bracket)) {
            stack.push(bracket);
        } else {
            if (isComplementary(lastBracket, bracket)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function solution(s) {
    const parentheses = s.split('');
    let correct = 0;
    for (let i = 0; i < s.length; i++) {
        if (isCorrect(parentheses)) {
            correct++;
        }
        parentheses.push(parentheses.shift());
    }
    const answer = correct;
    return answer;
}
