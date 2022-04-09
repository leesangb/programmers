// https://programmers.co.kr/learn/courses/30/lessons/67257

function evaluate(operands, operators, priority) {
    priority.forEach((operator) => {
        while (operators.some((o) => o === operator)) {
            const index = operators.findIndex((o) => o === operator);
            const expression = `${operands[index]}${operator}${operands[index + 1]}`;
            operands[index] = eval(expression);
            operands.splice(index + 1, 1);
            operators.splice(index, 1);
        }
    });
    return operands[0];
}

function solution(expression) {
    const priorities = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+'],
    ];
    const operands = expression.split(/[-+*]/);
    const operators = expression.split(/\d+/).slice(1, -1);

    const evaluated = priorities.map((priority) => Math.abs(evaluate([...operands], [...operators], priority)));
    const answer = Math.max(...evaluated);

    return answer;
}
