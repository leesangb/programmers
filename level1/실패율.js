// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    const peopleFailed = Array(N + 2).fill(0);
    const peopleCleared = Array(N + 2).fill(0);

    stages.forEach((stage) => {
        for (let i = 1; i < stage; i++) {
            peopleCleared[i]++;
        }
        peopleFailed[stage]++;
    });

    const failRate = [];
    for (let i = 0; i < N; i++) {
        const base1Index = i + 1;
        const nbPeople = peopleFailed[base1Index] + peopleCleared[base1Index];
        const rate = peopleFailed[base1Index] / nbPeople;
        failRate[i] = { i: base1Index, rate };
    }

    const answer = failRate.sort((a, b) => b.rate - a.rate).map(({ i }) => i);

    return answer;
}
