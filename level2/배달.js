// https://programmers.co.kr/learn/courses/30/lessons/12978

function buildGraph(roads) {
    const graph = [];
    roads.forEach((road) => {
        const [from, to, time] = road;
        graph[from] = [...(graph[from] || []), [to, time]];
        graph[to] = [...(graph[to] || []), [from, time]];
    });
    return graph;
}

function bfs(graph) {
    const distances = [-1, 0];
    const queue = [[1, graph[1]]];

    while (queue.length) {
        const [index, nodes] = queue.shift();
        nodes.forEach(([node, distance]) => {
            const minDistance = distances[index] + distance;
            if (distances[node] === undefined || distances[node] > minDistance) {
                distances[node] = minDistance;
                queue.push([node, graph[node]]);
            }
        });
    }

    return distances;
}

function solution(N, roads, K) {
    const graph = buildGraph(roads);
    const distances = bfs(graph, K);
    const nbTown = distances.filter((distance) => distance >= 0 && distance <= K).length;

    return nbTown;
}
