
/**
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
function getHitProbability(R, C, G) {
    let cells = R * C;
    let ships = 0
    for (let col = 0; col < G.length; col++) {
        for (let row = 0; row < G[col].length; row++) {
            ships += G[col][row];
        }
    }

    return ships / cells
}
