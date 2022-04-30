// https://programmers.co.kr/learn/courses/30/lessons/17686

const HEAD_NUMBER_TAIL_REGEX = /([^0-9]+)([0-9]{1,5})(.*)/;

function splitFilename(filename) {
    const match = filename.match(HEAD_NUMBER_TAIL_REGEX);
    return {
        head: match[1],
        number: parseInt(match[2]),
        tail: match[3],
    };
}

function compareIgnoreCase(a, b) {
    return a.localeCompare(b, undefined, { sensitivity: 'accent' });
}

function byFilenameNumber(filenameA, filenameB) {
    const fileA = splitFilename(filenameA);
    const fileB = splitFilename(filenameB);

    const compareHead = compareIgnoreCase(fileA.head, fileB.head);

    return compareHead === 0 ? fileA.number - fileB.number : compareHead;
}

function solution(files) {
    files.sort(byFilenameNumber);
    return files;
}
