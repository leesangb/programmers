// https://programmers.co.kr/learn/courses/30/lessons/42579

/**
 * 장르별로 총 재생 횟수와 트랙 리스트를 반환 합니다
 * @param {string[]} genres
 * @param {number[]} plays
 * @returns {{ [genre: string]: { totalPlayed: number, tracks: { played: number, number: number }[]} }}
 */
function getMusicInfoByGenre(genres, plays) {
    const musics = {};

    genres.forEach((genre, i) => {
        if (!musics[genre]) {
            musics[genre] = {
                totalPlayed: 0,
                tracks: [],
            };
        }
        musics[genre].totalPlayed += plays[i];
        musics[genre].tracks.push({
            played: plays[i],
            number: i,
        });
    });

    return musics;
}

function solution(genres, plays) {
    const musics = getMusicInfoByGenre(genres, plays);

    const answer = Object.values(musics)
        // 총 재생 횟수로 정렬
        .sort((a, b) => b.totalPlayed - a.totalPlayed)
        // 앨범에 많이 재생된 두 곡 추가
        .reduce((album, music) => [...album, ...music.tracks.sort((a, b) => b.played - a.played).slice(0, 2)], [])
        // 곡 고유번호 반환
        .map((track) => track.number);

    return answer;
}
