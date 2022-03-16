// https://programmers.co.kr/learn/courses/30/lessons/42840

function getSolvedCount(picks, answers) {
    let solved = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === picks[i % picks.length]) {
            solved++;
        }
    }
    return solved;
}

function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const students = [first, second, third];

    const solvedMapping = students
        .map((picks, i) => ({ number: i + 1, solved: getSolvedCount(picks, answers) }))
        .sort((a, b) => {
            if (b.solved > a.solved) {
                return 1;
            } else if (b.solved < a.solved) {
                return -1;
            } else {
                return a.number - b.number;
            }
        });

    const maxSolved = solvedMapping[0].solved;

    const answer = solvedMapping.filter((s) => s.solved === maxSolved).map((s) => s.number);

    return answer;
}
