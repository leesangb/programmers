// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
    let jumpCount = 0;

    while (n) {
        if (n % 2 !== 0) {
            n = (n - 1) / 2;
            jumpCount++;
        } else {
            n = n / 2;
        }
    }

    return jumpCount;
}
