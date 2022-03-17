// https://programmers.co.kr/learn/courses/30/lessons/81303

function parseCommand(cmd) {
    const [command, arg] = cmd.split(' ');
    return {
        command: command,
        arg: arg ? parseInt(arg) : undefined,
    };
}

class Table {
    selected;
    history;
    length;

    constructor(length, selectedIndex) {
        this.history = [];
        this.length = length;

        const firstNode = new Node(0);
        this.selected = firstNode;
        let previous = firstNode;
        for (let i = 1; i < length; i++) {
            const node = new Node(i);
            previous.next = node;
            node.previous = previous;
            previous = node;
            if (i === selectedIndex) {
                this.selected = node;
            }
        }
    }

    up(n) {
        let node = this.selected;
        while (node && n > 0) {
            node = node.previous;
            n--;
        }
        this.selected = node;
    }

    down(n) {
        let node = this.selected;
        while (node && n > 0) {
            node = node.next;
            n--;
        }
        this.selected = node;
    }

    remove() {
        this.history.push(this.selected);
        const previous = this.selected.previous;
        const next = this.selected.next;
        if (previous && next) {
            previous.next = next;
            next.previous = previous;
            this.selected = next;
        } else if (!next) {
            previous.next = null;
            this.selected = previous;
        } else if (!previous) {
            next.previous = null;
            this.selected = next;
        }
    }

    undo() {
        const node = this.history.pop();
        if (node.previous) {
            node.previous.next = node;
        }
        if (node.next) {
            node.next.previous = node;
        }
    }

    computeResult() {
        const history = [...this.history];
        const result = new Array(this.length).fill('O');

        while (history.length > 0) {
            result[history.pop().index] = 'X';
        }

        return result;
    }
}

class Node {
    index;
    previous;
    next;

    constructor(index) {
        this.index = index;
        this.previous = null;
        this.next = null;
    }
}

function solution(n, k, commands) {
    const table = new Table(n, k);

    commands.forEach((cmd) => {
        const { command, arg } = parseCommand(cmd);
        if (command === 'U') {
            table.up(arg);
        } else if (command === 'D') {
            table.down(arg);
        } else if (command === 'C') {
            table.remove();
        } else if (command === 'Z') {
            table.undo();
        }
    });

    const result = table.computeResult();

    const answer = result.join('');

    return answer;
}
