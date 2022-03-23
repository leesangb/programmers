// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    words.forEach((word, i) => {
        s = s.replace(new RegExp(word, 'g'), i);
    });
    const answer = parseInt(s);
    return answer;
}
