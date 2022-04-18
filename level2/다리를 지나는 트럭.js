// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridgeLength, bridgeMaxWeight, truckWeights) {
    const onBridge = [];
    let tick = 0;

    while (truckWeights.length || onBridge.length) {
        if (onBridge.length && onBridge[0].tick === tick) {
            onBridge.shift();
        }

        const onBridgeWeight = onBridge.reduce((acc, truck) => acc + truck.weight, 0);
        const nextTruckWeight = truckWeights[0];

        if (onBridge.length < bridgeLength && onBridgeWeight + nextTruckWeight <= bridgeMaxWeight) {
            onBridge.push({ weight: truckWeights.shift(), tick: tick + bridgeLength });
        }
        tick++;
    }

    const answer = tick;

    return answer;
}
