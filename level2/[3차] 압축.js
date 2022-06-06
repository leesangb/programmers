// https://programmers.co.kr/learn/courses/30/lessons/17684

const A_ASCII_CODE = 65;
const ALPHABET_LENGTH = 26;

function initDictionaryList() {
    const dictionaryList = [{}, {}];
    for (let i = 0; i < ALPHABET_LENGTH; i++) {
        dictionaryList[1][String.fromCharCode(i + A_ASCII_CODE)] = i + 1;
    }
    return dictionaryList;
}

function solution(msg) {
    const dictionary = initDictionaryList();
    const compressed = [];
    let count = ALPHABET_LENGTH + 1;

    while (msg) {
        for (let i = dictionary.length - 1; i > 0; i--) {
            if (i > msg.length) {
                continue;
            }

            const current = dictionary[i];
            const token = msg.substring(0, i);
            if (!current[token]) {
                continue;
            }

            compressed.push(current[token]);

            const nextToken = msg.substring(0, i + 1);
            if (!dictionary[nextToken.length]) {
                dictionary[nextToken.length] = { [nextToken]: count++ };
            } else if (!dictionary[nextToken.length][nextToken]) {
                dictionary[nextToken.length][nextToken] = count++;
            }
            msg = msg.substring(i);
            break;
        }
    }
    return compressed;
}
