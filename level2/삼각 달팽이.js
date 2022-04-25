// https://programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
    const snail = [...Array(n).keys()].map(i => Array(i + 1).fill(0));

    let row = -1;
    let col = 0;

    let number = 1;

    for(let i = n; i > 0; i -= 3) {
        for(let j = 0; j < i ; j++) {
            snail[++row][col] = number++;
        }
        for(let j = 0; j < i - 1 ; j++) {
            snail[row][++col] = number++;
        }
        for(let j = 0; j < i - 2 ; j++) {
            snail[--row][--col] = number++;
        }
    }

    const answer = snail.flat();

    return answer;
}
