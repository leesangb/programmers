// https://programmers.co.kr/learn/courses/30/lessons/17680

const CACHE_HIT_TIME = 1;
const CACHE_MISS_TIME = 5;

class Node {
    data;
    previous;
    next;

    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class Cache {
    head;
    tail;
    size;
    count;

    constructor(size) {
        this.size = size;
        this.count = 0;
        this.head = new Node(null);
        this.tail = new Node(null);
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    /**
     * 캐시된 데이터가 있다면 반환하고 없다면 캐싱합니다
     * @param {string} data
     * @returns {number} 캐시를 불러오는 시간
     */
    get(data) {
        let node = this.head.next;
        while (node.data) {
            if (node.data.toLowerCase() === data.toLowerCase()) {
                return this.hit(node, data);
            }
            node = node.next;
        }
        return this.miss(data);
    }

    hit(node, data) {
        this.remove(node);
        this.addHead(data);
        return CACHE_HIT_TIME;
    }

    miss(data) {
        this.addHead(data);
        if (this.count > this.size) {
            this.removeTail();
        }
        return CACHE_MISS_TIME;
    }

    remove(node) {
        node.next.previous = node.previous;
        node.previous.next = node.next;
        this.count--;
    }

    addHead(data) {
        const node = new Node(data);
        this.head.next.previous = node;
        node.next = this.head.next;
        this.head.next = node;
        node.previous = this.head;
        this.count++;
    }

    removeTail() {
        this.tail.previous.previous.next = this.tail;
        this.tail.previous = this.tail.previous.previous;
        this.count--;
    }
}

function solution(cacheSize, cities) {
    const cache = new Cache(cacheSize);

    const elapsedTime = cities.reduce((time, city) => time + cache.get(city), 0);

    return elapsedTime;
}
