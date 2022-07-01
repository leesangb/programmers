// https://programmers.co.kr/learn/courses/30/lessons/12930

function transform(word) {
    return word
        .split('')
        .map((c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase()))
        .join('');
}

function solution(s) {
    const answer = s.split(' ').map(transform).join(' ');
    return answer;
}
