
/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
function getSecondsRequired(N, F, P) {
    let gaps = 0;

    P.sort(((a, b) => b - a))

    const gapToLast = N - P[0] -
        1


    for (let i = 0; i < P.length - 1; i++) {
        const diff = P[i] - P[i + 1];
        gaps += diff - 1
    }



    return gaps + P.length + gapToLast
}

