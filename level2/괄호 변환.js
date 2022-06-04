// https://programmers.co.kr/learn/courses/30/lessons/60058

function splitBalanced(parentheses) {
    let left = 0,
        right = 0,
        i = 0;
    do {
        if (parentheses[i] === '(') {
            left++;
        } else {
            right++;
        }
        i++;
    } while (i < parentheses.length && left !== right);

    return [parentheses.slice(0, i), parentheses.slice(i)];
}

function isCorrectlyBalanced(parentheses) {
    let stack = 0;
    for (let parenthesis of parentheses) {
        if (stack === 0 && parenthesis === ')') return false;
        if (parenthesis === '(') {
            stack++;
        } else {
            stack--;
        }
    }
    return true;
}

function reverseParentheses(parentheses) {
    const parenthesisList = [];
    for (let parenthesis of parentheses) {
        if (parenthesis === '(') {
            parenthesisList.push(')');
        } else {
            parenthesisList.push('(');
        }
    }
    return parenthesisList.join('');
}

function fixParentheses(p) {
    if (p === '') {
        return '';
    }
    const [u, v] = splitBalanced(p);
    if (isCorrectlyBalanced(u)) {
        return u + fixParentheses(v);
    }

    const fixed = `(${fixParentheses(v)})${reverseParentheses(u.slice(1, -1))}`;
    return fixed;
}

function solution(p) {
    const answer = fixParentheses(p);
    return answer;
}
