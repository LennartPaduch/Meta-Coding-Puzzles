
/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
function getArtisticPhotographCount(N, C, X, Y) {
    let count = 0;

    let photographers_left = 0, backdrops_left = 0;
    let photographers_right = 0, backdrops_right = 0;

    for (let i = X; i <= Y; i++) {
        const letter = C[i]
        if (letter === 'P') {
            photographers_right++
        } else if (letter === 'B') {
            backdrops_right++
        }
    }


    for (let i = 1; i < C.length; i++) {
        if (i - Y - 1 >= 0) {
            const letter = C[i - Y - 1];
            if (letter === 'B') {
                backdrops_left--
            } else if (letter === "P") {
                photographers_left--
            }
        }

        if (i - X >= 0) {
            const letter = C[i - X];
            if (letter === 'B') {
                backdrops_left++
            } else if (letter === "P") {
                photographers_left++
            }
        }


        const l = C[i + X - 1];
        if (l === 'B') {
            backdrops_right--
        } else if (l === "P") {
            photographers_right--
        }



        if (i + Y < C.length) {
            const letter = C[i + Y]

            if (letter === 'B') {
                backdrops_right++
            } else if (letter === "P") {
                photographers_right++
            }
        }

        const letter = C[i]
        if (letter === 'A') {
            count += (backdrops_left * photographers_right + backdrops_right * photographers_left)
        }

    }



    return count
}

