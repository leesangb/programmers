// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    const usedWords = new Set();

    let lastWord = words[0];
    usedWords.add(lastWord);

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        if (lastWord[lastWord.length - 1] !== word[0] || usedWords.has(word))
            return [(i % n) + 1, Math.floor(i / n) + 1];

        usedWords.add(word);
        lastWord = word;
    }

    return [0, 0];
}
