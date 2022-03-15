// https://programmers.co.kr/learn/courses/30/lessons/43163

/**
 * word와 target이 1글자 차이 나는지 확인
 * @param {string} word
 * @param {string} target
 * @returns {boolean}
 */
function canChangeWord(word, target) {
    let difference = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== target[i]) {
            difference++;
            if (difference > 1) {
                return false;
            }
        }
    }

    return difference === 1;
}

/**
 * 1글자 차이나는 문자열들을 그래프로 구현
 * @param {string[]} words
 * @returns {number[][]}
 */
function buildGraph(words) {
    const graph = [];

    for (let i = 0; i < words.length; i++) {
        words.forEach((word, index) => {
            if (canChangeWord(words[i], word)) {
                if (!graph[i]) {
                    graph[i] = [];
                }
                graph[i].push(index);
            }
        });
    }

    return graph;
}

/**
 * 첫번째 노드와 떨어진 거리를 계산
 * @param {number[][]} graph
 * @returns {number[]}
 */
function bfs(graph) {
    const distance = new Array(graph.length).fill(0);

    const queue = [[0, graph[0]]];

    while (queue.length > 0) {
        const [index, siblings] = queue.shift();
        siblings.forEach((sibling) => {
            if (sibling === 0) return;
            if (!distance[sibling]) {
                distance[sibling] = distance[index] + 1;
                queue.push([sibling, graph[sibling]]);
            }
        });
    }

    return distance;
}

function solution(begin, target, words) {
    const allWords = [begin, ...words];
    const targetIndex = allWords.findIndex((word) => word === target);
    if (begin !== target && targetIndex < 0) {
        return 0;
    }

    const graph = buildGraph(allWords);
    const distance = bfs(graph);
    const answer = distance[targetIndex];

    return answer;
}
