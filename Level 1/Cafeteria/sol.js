
/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
    S.sort((a, b) => a - b);

    let totalAdditional = 0;

    if (S[0] > 1) {
        let rangeEnd = S[0] - K - 1;
        if (rangeEnd >= 1) {
            totalAdditional += Math.floor((rangeEnd - 1) / (K + 1)) + 1;
        }
    }

    for (let i = 0; i < M - 1; i++) {
        let rangeStart = S[i] + K + 1;
        let rangeEnd = S[i + 1] - K - 1;

        if (rangeStart <= rangeEnd) {
            let rangeLength = rangeEnd - rangeStart + 1;
            totalAdditional += Math.floor((rangeLength + K) / (K + 1));
        }
    }

    if (S[M - 1] < N) {
        let rangeStart = S[M - 1] + K + 1;
        if (rangeStart <= N) {
            let rangeLength = N - rangeStart + 1;
            totalAdditional += Math.floor((rangeLength + K) / (K + 1));
        }
    }

    return totalAdditional;
}
