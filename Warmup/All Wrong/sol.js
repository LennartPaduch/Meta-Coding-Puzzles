
/**
 * @param {number} N
 * @param {string} C
 * @return {string}
 */
function getWrongAnswers(N, C) {
    let res = ""
    for (let i = 0; i < N; i++) {
        res += C.charAt(i) === 'A' ? 'B' : 'A'
    }
    return res
}
