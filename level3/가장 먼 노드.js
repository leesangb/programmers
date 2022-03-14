// https://programmers.co.kr/learn/courses/30/lessons/49189

function buildGraph(vertices) {
    const graph = [];
    vertices.forEach(([from, to]) => {
        graph[from] = [...(graph[from] || []), to];
        graph[to] = [...(graph[to] || []), from];
    });
    return graph;
}

function bfs(graph) {
    const visited = [1, 1];
    const queue = [[1, graph[1]]];
    while (queue.length > 0) {
        const [index, nodes] = queue.shift();
        for (let node of nodes) {
            if (!visited[node]) {
                visited[node] = visited[index] + 1;
                queue.push([node, graph[node]]);
            }
        }
    }

    return visited;
}

function solution(n, edge) {
    const graph = buildGraph(edge);
    const visited = bfs(graph);
    const max = Math.max(...visited);

    const count = visited.filter((length) => length === max).length;

    const answer = count;
    return answer;
}
