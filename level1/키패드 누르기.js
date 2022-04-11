// https://programmers.co.kr/learn/courses/30/lessons/67256

/**
 * 키패드 숫자별 가운데 열의 숫자와 거리순으로 정리된 배열
 */
const distances = {
    ['1']: [[2], [5], [8], [0]],
    ['2']: [[5], [8], [0]],
    ['3']: [[2], [5], [8], [0]],
    ['4']: [[5], [2, 8], [0]],
    ['5']: [[2, 8], [0]],
    ['6']: [[5], [2, 8], [0]],
    ['7']: [[8], [0, 5], [2]],
    ['8']: [[0, 5], [2]],
    ['9']: [[8], [0, 5], [2]],
    ['0']: [[8], [5], [2]],
    ['*']: [[0], [8], [5], [2]],
    ['#']: [[0], [8], [5], [2]],
};

/**
 * 현재위치에서 가운데 열의 있는 숫자의 거리를 반환 합니다.
 * @param {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | '*' | '#'} from 현재위치
 * @param {2 | 5 | 8 | 0} to 도달 할 가운데 열의 숫자
 * @returns {number} 거리
 */
function getDistance(from, to) {
    return distances[from].findIndex((numbers) => numbers.includes(to));
}

/**
 * 왼손 오른손중 number와 가장 가까운 손을 반환합니다
 * @param {1 | 4 | 7 | '*' | 2 | 5 | 8 | 0} left
 * @param {3 | 6 | 9 | '#' | 2 | 5 | 8 | 0} right
 * @param {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9} number
 * @param {'left' | 'right'} hand
 * @returns {'L' | 'R'}
 */
function getNearerHand(left, right, number, hand) {
    const leftDistance = getDistance(left, number);
    const rightDistance = getDistance(right, number);

    if (leftDistance < rightDistance) {
        return 'L';
    } else if (leftDistance > rightDistance) {
        return 'R';
    }
    return hand === 'left' ? 'L' : 'R';
}

function solution(numbers, hand) {
    var answer = '';

    let left = '*';
    let right = '#';

    for (let number of numbers) {
        if ([1, 4, 7].includes(number)) {
            answer += 'L';
            left = number;
            continue;
        }
        if ([3, 6, 9].includes(number)) {
            answer += 'R';
            right = number;
            continue;
        }

        const nearer = getNearerHand(left, right, number, hand);
        answer += nearer;
        if (nearer === 'L') {
            left = number;
        } else {
            right = number;
        }
    }

    return answer;
}
