// https://programmers.co.kr/learn/courses/30/lessons/60057

function split(s, nbChar) {
    const chunks = [];
    const max = s.length / nbChar;
    for (let i = 0; i < max; i++) {
        chunks.push(s.slice(i * nbChar, (i + 1) * nbChar));
    }
    return chunks;
}

function compress(chunks) {
    let count = 1;
    let previousChunk = '';
    const compressed = [];

    for (let i = 0; i <= chunks.length; i++) {
        const chunk = chunks[i];
        if (previousChunk === chunk) {
            count++;
            continue;
        }

        if (count === 1) {
            compressed.push(previousChunk);
        } else {
            compressed.push(`${count}${previousChunk}`);
        }

        count = 1;
        previousChunk = chunk;
    }

    return compressed.join('');
}

function solution(s) {
    if (s.length === 1) {
        return 1;
    }

    let minLength = Number.MAX_SAFE_INTEGER;
    const maxNbChar = Math.floor(s.length / 2);

    for (let i = 1; i <= maxNbChar; i++) {
        const compressed = compress(split(s, i));
        minLength = Math.min(minLength, compressed.length);
    }

    const answer = minLength;
    return answer;
}
