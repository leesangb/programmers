// https://programmers.co.kr/learn/courses/30/lessons/43164

function travel(route, tickets, routes) {
    if (!tickets.length) {
        routes.push(route);
        return;
    }

    const location = route[route.length - 1];
    tickets.forEach(([from, to], i) => {
        if (from != location) return;

        travel([...route, to], [...tickets.slice(0, i), ...tickets.slice(i + 1)], routes);
    });
}

function solution(tickets) {
    const routes = [];
    travel(['ICN'], tickets, routes);
    routes.sort();
    const answer = routes[0];

    return answer;
}
