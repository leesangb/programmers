// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    const step1 = new_id.toLowerCase();
    const step2 = step1.replace(/[^-_a-z0-9.]/g, '');
    const step3 = step2.replace(/\.+/g, '.');
    const step4 = step3.replace(/^\./, '').replace(/\.$/, '');
    const step5 = !step4 ? new Array(3).fill('a').join('') : step4;
    const step6 = step5.slice(0, 15).replace(/\.$/, '');
    const step7 =
        step6.length < 3 ? [...step6, ...new Array(3 - step6.length).fill(step6[step6.length - 1])].join('') : step6;

    const answer = step7;

    return answer;
}
