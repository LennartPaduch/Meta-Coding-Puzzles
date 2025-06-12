
/**
 * @param {number} N
 * @param {number[]} S
 * @return {number}
 */
function getMinProblemCount(N, S) {
    let max = 0;
    let hasOdd = false

    for (let i = 0; i < S.length; i++) {
        const score = S[i];
        max = Math.max(score, max);
        if (score % 2 === 1) {
            hasOdd = true
        }
    }

    return Math.floor(max / 2) + Number(hasOdd)
}

// 2,2

// 2,1,1

N = 6
S = [1, 2, 3, 4, 5, 6]
console.log(getMinProblemCount(N, S))

