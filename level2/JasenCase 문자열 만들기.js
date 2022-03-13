// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    const words = s.split(' ')
                   .map(word => word.length === 0 ? word : `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);
    return words.join(' ');
}
