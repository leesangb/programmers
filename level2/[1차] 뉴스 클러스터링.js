// https://programmers.co.kr/learn/courses/30/lessons/17677

function isAlphabet(s) {
    return s.toLowerCase() !== s.toUpperCase();
}

/**
 * 문자 2개씩 묶어 몇번씩 등장하는지 반환합니다
 * @param {string} str
 * @returns {{[key: string]: number}}
 */
function getPairOccurrences(str) {
    const pairOccurrences = {};
    for (let i = 1; i < str.length; i++) {
        const first = str[i - 1];
        const second = str[i];
        if (!isAlphabet(first) || !isAlphabet(second)) {
            continue;
        }
        const pair = `${first}${second}`.toUpperCase();
        pairOccurrences[pair] = (pairOccurrences[pair] || 0) + 1;
    }
    return pairOccurrences;
}

/**
 * 중복을 허용하는 교집합, 합집합의 수를 구합니다
 * @param {{[key: string]: number}} occurrences1
 * @param {{[key: string]: number}} occurrences2
 * @returns {{intersection: number, union: number}}
 */
function getIntersectionUnionCount(occurrences1, occurrences2) {
    const pairs = [...new Set([...Object.keys(occurrences1), ...Object.keys(occurrences2)])];

    let intersection = 0;
    let union = 0;

    pairs.forEach((pair) => {
        const min = Math.min(occurrences1[pair] || 0, occurrences2[pair] || 0);
        const max = Math.max(occurrences1[pair] || 0, occurrences2[pair] || 0);
        intersection += min;
        union += max;
    });

    return {
        intersection,
        union,
    };
}

function solution(str1, str2) {
    const pairOccurrences1 = getPairOccurrences(str1);
    const pairOccurrences2 = getPairOccurrences(str2);

    const { intersection, union } = getIntersectionUnionCount(pairOccurrences1, pairOccurrences2);

    const similarity = union === 0 ? 1 : intersection / union;

    const answer = Math.floor(similarity * 65536);

    return answer;
}
