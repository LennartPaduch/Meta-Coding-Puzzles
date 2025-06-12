
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
function getUniformIntegerCountInInterval(A, B) {
    let total = 0;

    let multiplier = 0;
    for (let i = 0; i < 12; i++) {
        multiplier += 10 ** i
        for (let j = 0; j <= 9; j++) {
            const uniformNumber = j * multiplier
            if (uniformNumber >= A && uniformNumber <= B) total++
        }
    }
    return total
}

