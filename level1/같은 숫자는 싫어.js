// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
    if (!arr || !arr.length) return [];

    const array = [arr[0]];

    let i = 1;
    while (i < arr.length) {
        const current = arr[i++];
        if (current !== array[array.length - 1]) {
            array.push(current);
        }
    }

    const answer = array;

    return answer;
}
