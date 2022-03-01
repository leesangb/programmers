// https://programmers.co.kr/learn/courses/30/lessons/12899

/**
 * | 10진 | 3진 | 124 |
 * |     1|    1|    1|
 * |     2|    2|    2|
 * |     3|   10|    4|
 * |     4|   11|   11|
 * |     5|   12|   12|
 * |     6|   20|   14|
 */
function solution(n) {
    // 배열을 412로 한 이유:
    // n%3 = 0 => 4
    // n%3 = 1 => 1
    // n%3 = 2 => 2
    const digits = '412';
    const base = digits.length;
    let answer = '';

    while (n) {
        const nModBase = n % base;
        answer = digits[nModBase] + answer;
        n = nModBase === 0 ? n / base - 1 : Math.floor(n / base);
    }

    return answer;
}
