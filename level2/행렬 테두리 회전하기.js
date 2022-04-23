// https://programmers.co.kr/learn/courses/30/lessons/77485

function buildGrid(rows, columns) {
    return [...Array(rows).keys()].map((row) => [...Array(columns).keys()].map((column) => row * columns + column + 1));
}

function rotate(grid, query) {
    const [y1, x1, y2, x2] = query;
    const rotated = [];

    // topLeft to topRight
    let previous = grid[y1 + 1][x1];
    for (let x = x1; x <= x2; x++) {
        [grid[y1][x], previous] = [previous, grid[y1][x]];
        rotated.push(previous);
    }

    // topRight to bottomRight
    for (let y = y1 + 1; y <= y2; y++) {
        [grid[y][x2], previous] = [previous, grid[y][x2]];
        rotated.push(previous);
    }

    // bottomRight to bottomLeft
    for (let x = x2 - 1; x >= x1; x--) {
        [grid[y2][x], previous] = [previous, grid[y2][x]];
        rotated.push(previous);
    }

    // bottomLeft to topLeft
    for (let y = y2 - 1; y > y1; y--) {
        [grid[y][x1], previous] = [previous, grid[y][x1]];
        rotated.push(previous);
    }

    return rotated;
}

function solution(rows, columns, queries) {
    const grid = buildGrid(rows, columns);
    const mins = queries.map((query) =>
        Math.min(
            ...rotate(
                grid,
                query.map((coord) => coord - 1)
            )
        )
    );

    const answer = mins;

    return answer;
}
