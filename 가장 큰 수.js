// https://programmers.co.kr/learn/courses/30/lessons/42746

/**
 * 첫 자리 숫자마다 가장 큰 수를 만들수 있는 조합으로 정렬된 숫자들을 매핑하여 반환
 * @param {number[]} numbers
 * @returns {Partial<Record<0|1|2|3|4|5|6|7|8|9, number[]>}
 */
function getNumberMappings(numbers) {
    const mapping = {};

    numbers
        .map((n) => n.toString())
        .forEach((n) => {
            const firstDigit = n[0];
            mapping[firstDigit] = [...(mapping[firstDigit] || []), n];
        });

    for (const value of Object.values(mapping)) {
        value.sort((a, b) => `${b}${a}`.localeCompare(`${a}${b}`));
    }

    return mapping;
}

function solution(numbers) {
    const mapping = getNumberMappings(numbers);

    const resultArray = [];
    for (let i = 9; i > 0; i--) {
        if (mapping[i]) {
            mapping[i].forEach((n) => resultArray.push(n));
        }
    }

    // 0만 남았을 경우
    if (resultArray.length === 0 && mapping[0]) return '0';

    const result = resultArray.concat(mapping[0] || []).join('');

    return result;
}
