// https://programmers.co.kr/learn/courses/30/lessons/12926

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET = alphabet.toUpperCase();
const ALPHABET_LENGTH = ALPHABET.length;

function ceasar(letter, n) {
    if (letter === ' ') return letter;

    let index = alphabet.indexOf(letter);
    if (index >= 0) {
        return alphabet[(index + n) % ALPHABET_LENGTH];
    }

    index = ALPHABET.indexOf(letter);
    return ALPHABET[(index + n) % ALPHABET_LENGTH];
}

function solution(s, n) {
    const answer = s
        .split('')
        .map((c) => ceasar(c, n))
        .join('');
    return answer;
}
