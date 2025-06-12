
/**
 * @param {number} N 
 * @param {number} M 
 * @param {number[]} C 
 * @return {number}
 */
function getMinCodeEntryTime(N, M, C) {
    let seconds = 0;
    let current = 1

    for (let i = 0; i < C.length; i++) {
        let targetNumber = C[i];
        if (targetNumber === current) {
            continue;
        }
        const absDistance = Math.abs(current - targetNumber)
        if (absDistance <= N / 2) seconds += absDistance
        else seconds += N - absDistance
        current = targetNumber
    }

    return seconds
}


