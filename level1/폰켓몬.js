// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const set = new Set(nums);
    return Math.min(nums.length / 2, set.size);
}
