// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    const answer = arr1.map((arr, i) => arr.map((n, j) => n + arr2[i][j]));
    return answer;
}
