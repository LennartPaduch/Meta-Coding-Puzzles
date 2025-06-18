
/**
 * @param {number} R
 * @param {number} C
 * @param {string[][]} G
 * @return {number}
 */
function getSecondsRequired(R, C, G) {
    const portalMap = new Map();
    let startRow, startCol

    for (let row = 0; row < R; row++) {
        for (let col = 0; col < C; col++) {
            const cell = G[row][col];
            if (cell === "S") {
                startRow = row
                startCol = col;
            }
            else if (cell >= "a" && cell <= "z") {
                const portals = portalMap.get(cell) || []
                portals.push([row, col])
                portalMap.set(cell, portals)
            }
        }
    }

    const visited = new Set();
    const queue = [[startRow, startCol, 0]]


    while (queue.length > 0) {
        const [row, col, seconds] = queue.shift();
        if (visited.has(row + "," + col)) continue

        const cell = G[row][col]

        if (cell === "E") return seconds

        visited.add(row + "," + col);

        let newRow = row + 1;
        if (newRow < R && !visited.has(newRow + "," + col) && G[newRow][col] !== "#") {
            queue.push([newRow, col, seconds + 1]);
        }

        newRow = row - 1;
        if (newRow >= 0 && !visited.has(newRow + "," + col) && G[newRow][col] !== "#") {
            queue.push([newRow, col, seconds + 1]);
        }

        let newCol = col + 1;
        if (newCol < C && !visited.has(row + "," + newCol) && G[row][newCol] !== "#") {
            queue.push([row, newCol, seconds + 1]);
        }

        newCol = col - 1;
        if (newCol >= 0 && !visited.has(row + "," + newCol) && G[row][newCol] !== "#") {
            queue.push([row, newCol, seconds + 1]);
        }

        const reachablePortals = portalMap.get(cell)
        if (reachablePortals) {
            reachablePortals.forEach((pos) => {
                const [portalRow, portalCol] = pos;
                if (!visited.has(portalRow + "," + portalCol)) {
                    queue.push([portalRow, portalCol, seconds + 1]);
                }
            });
            portalMap.delete(cell)
        }
    }
    return -1
}
