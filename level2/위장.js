// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    let combinations = 1;
    let wears = {};
    for (let i = 0; i < clothes.length; i++) {
        const cloth = clothes[i];
        wears[cloth[1]] = (wears[cloth[1]] || 1) + 1;
    }

    for (let type in wears) {
        combinations *= wears[type];
    }

    const answer = combinations - 1;

    return answer;
}
