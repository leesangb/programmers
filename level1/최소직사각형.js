// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach((size) => {
        size.sort((a, b) => a - b);
        const [width, height] = size;
        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    });

    const answer = maxWidth * maxHeight;
    return answer;
}
