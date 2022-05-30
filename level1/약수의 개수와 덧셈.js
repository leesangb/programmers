// https://programmers.co.kr/learn/courses/30/lessons/77884

function getMultiples(n) {
    const max = Math.sqrt(n);
    const multiples = new Set();
    for (let i = 1; i <= max; i++) {
        if (n % i === 0) {
            multiples.add(i);
            multiples.add(n / i);
        }
    }
    return [...multiples];
}

function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        const multiplesCount = getMultiples(i).length;
        if (multiplesCount % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }

    return answer;
}
