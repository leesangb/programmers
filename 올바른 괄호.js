// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
    if (s[0] === ')' || s[s.length - 1] === '(' || s.length % 2) {
        return false;
    }

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const parenthesis = stack.pop();
        if (!parenthesis && s[i] === ')') return false;
        if (!parenthesis && s[i] === '(') {
            stack.push('(');
        } else if (s[i] === '(') {
            stack.push('(');
            stack.push('(');
        }
    }

    return stack.length === 0;
}
