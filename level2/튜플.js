// https://programmers.co.kr/learn/courses/30/lessons/64065

function parseTuples(s) {
    const tuples = s
        .slice(2, s.length - 2)
        .split('},{')
        .map(tuple => tuple.split(','));
    return tuples;
}

function solution(s) {
    const tuples = parseTuples(s);
    const answer = tuples
        .sort((t1, t2) => t1.length - t2.length)
        .map((tuple, i) => parseInt(tuple.filter(n => !(tuples[i - 1] || []).includes(n))[0]));

    return answer;
}
