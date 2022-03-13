// https://programmers.co.kr/learn/courses/30/lessons/42576

function getCompletedParticipants(completion) {
    const completed = {};
    completion.forEach((c) => {
        completed[c] = (completed[c] || 0) + 1;
    });
    return completed;
}

function solution(participants, completion) {
    const completed = getCompletedParticipants(completion);

    for (const participant of participants) {
        if (!completed[participant]) {
            return participant;
        }
        completed[participant] -= 1;
    }

    // should never be executed
    return null;
}
