// https://programmers.co.kr/learn/courses/30/lessons/12911

function count1Binary(n) {
    let count = 0;
    while (n) {
        const rest = n % 2;
        if (rest) {
            count++;
        }
        n = (n - rest) / 2;
    }
    return count;
}

function solution(n) {
    const target = count1Binary(n);
    let i = n + 1;
    while (true) {
        const count = count1Binary(i);
        if (count === target) return i;
        i++;
    }
}
