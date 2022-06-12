// https://programmers.co.kr/learn/courses/30/lessons/12915

const solution = (strings, n) =>
    strings.sort((a, b) => a[n].localeCompare(b[n]) || a.localeCompare(b));
