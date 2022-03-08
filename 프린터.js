// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    let answer = 0;
    const waitingList = priorities.map((priority, location) => ({ location, priority }));

    let isPrinted = false;
    while (!isPrinted) {
        const document = waitingList.shift();
        const canPrint = !waitingList.some((d) => d.priority > document.priority);
        if (canPrint) {
            answer++;
            isPrinted = document.location === location;
        } else {
            waitingList.push(document);
        }
    }

    return answer;
}
