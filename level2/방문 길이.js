// https://programmers.co.kr/learn/courses/30/lessons/49994

const MAX_COORDINATE = 5;
const MIN_COORDINATE = -MAX_COORDINATE;

class Position {
    x;
    y;
    visited;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.visited = new Set();
    }

    right() {
        if (this.x === MAX_COORDINATE) return;
        const coordinates = [this.x++, this.x, this.y];
        this.visited.add(coordinates.join('x'));
    }

    left() {
        if (this.x === MIN_COORDINATE) return;
        const coordinates = [this.x--, this.y];
        coordinates.unshift(this.x);
        this.visited.add(coordinates.join('x'));
    }

    up() {
        if (this.y === MAX_COORDINATE) return;
        const coordinates = [this.y++, this.y, this.x];
        this.visited.add(coordinates.join('y'));
    }

    down() {
        if (this.y === MIN_COORDINATE) return;
        const coordinates = [this.y--, this.x];
        coordinates.unshift(this.y);
        this.visited.add(coordinates.join('y'));
    }
}

function solution(dirs) {
    const position = new Position(0, 0);
    for (let direction of dirs) {
        if (direction === 'L') position.left();
        else if (direction === 'R') position.right();
        else if (direction === 'U') position.up();
        else if (direction === 'D') position.down();
    }
    const answer = position.visited.size;
    return answer;
}
