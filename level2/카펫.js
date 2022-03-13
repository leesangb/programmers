// https://programmers.co.kr/learn/courses/30/lessons/42842

/**
 * number의 배수들을 반환 합니다
 * @param {number} number
 * @returns {[number, number][]}
 */
function getMultiples(number) {
    const multiples = [];
    const alreadyVisited = new Set();
    for (let i = 1; i <= number; i++) {
        if (number % i !== 0) continue;

        const a = i;
        const b = number / i;

        if (alreadyVisited.has(a) || alreadyVisited.has(b)) break;

        multiples.push([b, a]);
        alreadyVisited.add(a);
        alreadyVisited.add(b);
    }

    return multiples;
}

function solution(brown, yellow) {
    const multiples = getMultiples(yellow);

    for (let [w, h] of multiples) {
        if (2 * w + 2 * h + 4 === brown) return [w + 2, h + 2];
    }

    return [];
}
