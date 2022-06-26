// https://programmers.co.kr/learn/courses/30/lessons/72411

function getCombinations(menus, count) {
    menus = [...menus];
    if (!menus.length || count > menus.length || !count) return [[]];
    if (count === menus.length) return [menus];

    const head = menus.shift();
    return getCombinations(menus, count - 1)
        .map((combination) => {
            combination.unshift(head);
            return combination;
        })
        .concat(getCombinations(menus, count));
}

function solution(orders, course) {
    const combinations = {};

    orders.forEach((order) => {
        const menus = order.split('').sort();
        course.forEach((count) => {
            if (menus.length < count) {
                return;
            }
            if (!combinations[count]) {
                combinations[count] = {};
            }
            getCombinations(menus, count)
                .map((combination) => combination.join(''))
                .forEach((combination) => {
                    if (!combinations[count][combination]) {
                        combinations[count][combination] = 0;
                    }
                    combinations[count][combination]++;
                });
        });
    });

    const answer = course
        .flatMap((count) => {
            if (!combinations[count]) return [];
            const max = Math.max(...Object.values(combinations[count]));
            if (max === 1) return [];
            return Object.entries(combinations[count])
                .filter(([_, length]) => length === max)
                .map(([combination]) => combination);
        })
        .sort();

    return answer;
}
