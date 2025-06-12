
/**
 * @param {number} N
 * @param {number[]} R
 * @return {number}
 */
function getMinimumDeflatedDiscCount(N, R) {
    minNumberDiscs = 0;

    for (let i = N - 2; i >= 0; i--) {
        if (R[i] >= R[i + 1]) {
            minNumberDiscs++
            R[i] = R[i + 1] - 1
            if (R[i] === 0) return -1
        }
    }

    return minNumberDiscs
}

