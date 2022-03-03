// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
    const resultArray = [...numbers].sort((a, b) => `${b}${a}`.localeCompare(`${a}${b}`));

    // 0만 남았을 경우
    if (resultArray.every((n) => n === 0)) return '0';

    const result = resultArray.join('');

    return result;
}
