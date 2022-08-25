// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function getMaxKey(score, types) {
    const [left, right] = types.split('');
    return score[left] >= score[right]
        ? left
        : right;
}

function getPoint(types, choice) {
    if (choice === 4) {
        return null;
    }
    const [left, right] = types.split('');
    
    return choice < 4
        ? { key: left, value: 4 - choice }
        : { key: right, value: choice - 4 }
}

function solution(survey, choices) {
    const score = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    }
    
    const length = survey.length;
    for (let i = 0; i < length; i++) {
        const point = getPoint(survey[i], choices[i]);
        if (point) {
            score[point.key] += point.value;
        }
    }

    const answer = ['RT', 'CF', 'JM', 'AN']
        .map(types => getMaxKey(score, types))
        .join('');
    
    return answer;
}
