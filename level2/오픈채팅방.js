// https://programmers.co.kr/learn/courses/30/lessons/42888

function parseItems(record) {
    const mappings = {};
    const actions = [];

    record.forEach((item) => {
        const [action, id, name] = item.split(' ');
        if (name) {
            mappings[id] = name;
        }
        if (action !== 'Change') {
            actions.push({
                message: action === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.',
                id,
            });
        }
    });

    return { mappings, actions };
}

function solution(record) {
    const { mappings, actions } = parseItems(record);

    const answer = actions.map((action) => `${mappings[action.id]}${action.message}`);

    return answer;
}
