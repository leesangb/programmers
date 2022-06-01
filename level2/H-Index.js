// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    citations.sort((a, b) => b - a);
    let i = 0;
    while (i + 1 <= citations[i]) {
        i++;
    }

    const answer = i;
    return answer;
}
