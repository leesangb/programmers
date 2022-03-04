// https://programmers.co.kr/learn/courses/30/lessons/72412

function parseInfo(info) {
    const [language, position, career, food, score] = info.split(' ');
    return {
        language,
        position,
        career,
        food,
        score: parseInt(score),
    };
}

function parseQuery(query) {
    const [key, scoreStr] = query.replace(/\sand\s/g, '').split(' ');
    const score = parseInt(scoreStr);
    return { key, score };
}

function computePossibilities(infos) {
    const possibilities = {};

    for (let language of ['cpp', 'java', 'python', '-'])
        for (let position of ['backend', 'frontend', '-'])
            for (let career of ['junior', 'senior', '-'])
                for (let food of ['chicken', 'pizza', '-'])
                    possibilities[`${language}${position}${career}${food}`] = [];

    infos.forEach((info) => {
        const { language, position, career, food, score } = parseInfo(info);
        for (let l of [language, '-'])
            for (let p of [position, '-'])
                for (let c of [career, '-'])
                    for (let f of [food, '-']) {
                        possibilities[`${l}${p}${c}${f}`].push(score);
                    }
    });

    Object.keys(possibilities).forEach((key) => possibilities[key].sort((a, b) => a - b));

    return possibilities;
}

function binarySearch(numbers, n) {
    let start = 0;
    let end = numbers.length - 1;
    let index = numbers.length;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (numbers[mid] >= n) {
            index = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return index;
}

function solution(infos, queries) {
    const possibilities = computePossibilities(infos);
    const answer = queries.map((query) => {
        const { key, score } = parseQuery(query);
        const scores = possibilities[key];
        const index = binarySearch(scores, score);

        return scores.length - index;
    });

    return answer;
}
