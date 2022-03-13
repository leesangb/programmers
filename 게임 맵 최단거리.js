// https://programmers.co.kr/learn/courses/30/lessons/1844

function isOutOfRange(array, i) {
    return i < 0 || i >= array.length;
}

function isWall(grid, x, y) {
    return grid[x][y] === 0;
}

function isFirstVisit(grid, x, y) {
    return grid[x][y] === 1;
}

function bfs(grid) {
    const directions = [
        { x: -1, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: -1 },
        { x: 0, y: 1 },
    ];

    const queue = [[0, 0]];

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (let direction of directions) {
            const dx = x + direction.x;
            const dy = y + direction.y;
            if (isOutOfRange(grid, dx) || isOutOfRange(grid[x], dy) || isWall(grid, dx, dy)) {
                continue;
            }

            if (isFirstVisit(grid, dx, dy)) {
                grid[dx][dy] = grid[x][y] + 1;
                queue.push([dx, dy]);
            }
        }
    }

    const maxX = grid.length - 1;
    const maxY = grid[0].length - 1;
    const hasFinished = grid[maxX][maxY] > 1;

    return hasFinished ? grid[maxX][maxY] : -1;
}

function solution(maps) {
    const length = bfs(maps);

    return length;
}
