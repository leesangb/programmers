// https://programmers.co.kr/learn/courses/30/lessons/42885

function getPairs(people, limit) {
    const pairs = [];
    let left = 0;
    let right = people.length - 1;

    while (left < right) {
        if (people[left] + people[right] <= limit) {
            pairs.push([left, right]);
            left++;
            right--;
        } else {
            right--;
        }
    }
    return pairs;
}

function solution(people, limit) {
    const onePersonLimit = limit - 40;

    const onlyOne = people.filter((person) => person > onePersonLimit);
    const canCombine = people.filter((person) => person <= onePersonLimit).sort((a, b) => a - b);
    const pairs = getPairs(canCombine, limit);

    const answer = onlyOne.length + pairs.length + canCombine.length - pairs.length * 2;

    return answer;
}
