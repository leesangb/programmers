// https://programmers.co.kr/learn/courses/30/lessons/43162

function bfs(index, graph, visited) {
    const queue = [index];
    while (queue.length > 0) {
        const node = queue.shift();
        if (!visited[node]) {
            visited[node] = 1;

            graph[node].forEach((isConnected, i) => {
                if (!visited[i] && isConnected) {
                    queue.push(i);
                }
            });
        }
    }
}

function calcNetworks(n, computers) {
    const visited = new Array(n).fill(0);
    let nbNetwork = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        nbNetwork++;
        bfs(i, computers, visited);
    }

    return nbNetwork;
}

function solution(n, computers) {
    const nbNetwork = calcNetworks(n, computers);

    return nbNetwork;
}
