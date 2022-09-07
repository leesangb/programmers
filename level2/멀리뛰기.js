// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
    if (n <= 3) {
        return n;
    }

    let a = 2;
    let b = 3;

    for (let i = 3; i < n; i++) {
        const c = (a + b) % 1234567;
        a = b;
        b = c;
    }

    return b;
}
