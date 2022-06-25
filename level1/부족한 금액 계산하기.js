// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let result = money;
    for (let i = 1; i <= count; i++) {
        result -= i * price;
    }

    return result < 0 
      ? -result
      : 0;
}
