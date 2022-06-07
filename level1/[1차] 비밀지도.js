// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    const answer = [];
 
    for (let i = 0; i < n; i++) {
        const a = arr1[i].toString(2).padStart(n, '0');
        const b = arr2[i].toString(2).padStart(n, '0');
        const sum = [];
        for (let j = 0; j < n; j++) {
            if (a[j] === '1' || b[j] === '1')
                sum.push('#');
            else
                sum.push(' ');
        }
        answer.push(sum.join(''));
    }
  
    return answer;
}
