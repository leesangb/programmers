// https://programmers.co.kr/learn/courses/30/lessons/77484

function countIntersection(array1, array2) {
    return array2.filter((item) => array1.some((i) => i === item)).length;
}

function countUnknown(lottos) {
    return lottos.filter((lotto) => lotto === 0).length;
}

function solution(lottos, win_nums) {
    const intersection = countIntersection(lottos, win_nums);
    const unknown = countUnknown(lottos);
    const min = Math.min(7 - intersection, 6);
    const max = Math.min(7 - intersection - unknown, 6);
    return [max, min];
}
