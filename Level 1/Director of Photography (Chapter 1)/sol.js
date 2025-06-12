
/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
function getArtisticPhotographCount(N, C, X, Y) {
    let count = 0;

    for (let i = 0; i < C.length; i++) {
        if (C[i] === 'A') {

            let photographers_left = 0, backdrops_left = 0;
            let photographers_right = 0, backdrops_right = 0;

            for (let j = X; j <= Y; j++) {
                if (i - j >= 0) {
                    let char = C[i - j]
                    if (char === 'P') {
                        photographers_left++;
                    } else if (char === 'B') {
                        backdrops_left++
                    }
                }
                if (i + j < C.length) {
                    char = C[i + j];
                    if (char === 'P') {
                        photographers_right++;
                    } else if (char === 'B') {
                        backdrops_right++
                    }
                }
            }
            count += (backdrops_left * photographers_right + backdrops_right * photographers_left)
        }
    }
    return count
}
