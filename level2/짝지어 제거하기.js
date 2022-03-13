// https://programmers.co.kr/learn/courses/30/lessons/12973

function reduce(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const character = stack.pop();
        if (character !== str[i]) {
            if (character) {
                stack.push(character);
            }
            stack.push(str[i]);
        }
    }

    return stack;
}

function solution(s) {
    if (s.length % 2) {
        return 0;
    }

    const stack = reduce(s);

    return stack.length > 0 ? 0 : 1;
}
