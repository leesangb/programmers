// https://programmers.co.kr/learn/courses/30/lessons/64061

/**
 * 바구니에 마지막으로 추가한 아이템이 추가하는 아이템과 같다면
 * 터트린 아이템 수를 반환합니다.
 * @param {number[]} basket 바구니
 * @param {number} item 아이템
 * @returns {number} 터트린 아이템 수
 */
function push(basket, item) {
    if (item === 0) return 0;

    if (basket.length && basket[basket.length - 1] === item) {
        basket.pop();
        return 2;
    } else {
        basket.push(item);
        return 0;
    }
}

/**
 * 보드와 크레인의 위치를 주면 뽑은 아이템을 반환합니다.
 * @param {number[][]} board 보드
 * @param {number} move 크레인이 뽑을 위치
 * @returns {number} 뽑은 아이템
 */
function getItem(board, move) {
    for (let y = 0; y < board.length; y++) {
        if (board[y][move]) {
            const item = board[y][move];
            board[y][move] = 0;
            return item;
        }
    }
    return 0;
}

function solution(board, moves) {
    const basket = [];

    const answer = moves.reduce((acc, move) => acc + push(basket, getItem(board, move - 1)), 0);

    return answer;
}
