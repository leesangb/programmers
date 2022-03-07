// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    const reportedBy = {};
    const hasReported = {};

    id_list.forEach((id) => {
        reportedBy[id] = new Set();
        hasReported[id] = new Set();
    });

    report.forEach((r) => {
        const [reporterId, reportedId] = r.split(' ');
        reportedBy[reportedId].add(reporterId);
        hasReported[reporterId].add(reportedId);
    });

    const answer = id_list.map((id) => [...hasReported[id]].filter((r) => reportedBy[r].size >= k).length);

    return answer;
}
