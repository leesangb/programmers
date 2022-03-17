// https://programmers.co.kr/learn/courses/30/lessons/12985

function solution(n,a,b)
{
    let count = 0;
    while (a !== b) {
        a += a % 2;
        b += b % 2;
        count++;
        a /= 2;
        b /= 2;
    }

    return count;
}
