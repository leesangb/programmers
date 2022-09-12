// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function isBlock(board, x, y) {
    const type = board[x][y];
    if (!type) return false;
    return type === board[x + 1][y] && type === board[x][y + 1] && type === board[x + 1][y + 1];
}

function getBlocks(board, m, n) {
    const blocks = [];
    const column = m - 1;
    const row = n - 1;
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            if (isBlock(board, x, y)) {
                blocks.push({ x, y });
            }
        }
    }
    return blocks;
}

function removeBlocks(board, blocks) {
    blocks.forEach(({ x, y }) => {
        board[x][y] = 0;
        board[x][y + 1] = 0;
        board[x + 1][y] = 0;
        board[x + 1][y + 1] = 0;
    });
}

function createGameBoard(m, n, board) {
    const gameBoard = [];
    for (let i = 0; i < n; i++) {
        gameBoard.push([]);
    }

    for (let j = 0; j < n; j++) {
        for (let i = m - 1; i >= 0; i--) {
            gameBoard[j].push(board[i][j]);
        }
    }
    return gameBoard;
}

function solution(m, n, board) {
    let gameBoard = createGameBoard(m, n, board);
    let count = 0;

    let blocks = getBlocks(gameBoard, m, n);

    while (blocks.length) {
        removeBlocks(gameBoard, blocks);

        gameBoard = gameBoard.map((column) => {
            const newColumn = column.filter((figure) => figure);
            const removed = column.length - newColumn.length;
            count += removed;
            return newColumn;
        });

        blocks = getBlocks(gameBoard, m, n);
    }

    return count;
}
