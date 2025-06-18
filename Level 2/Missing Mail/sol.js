
/**
 * @param {number} N
 * @param {number[]} V
 * @param {number} C
 * @param {number} S
 * @return {number}
 */
function getMaxExpectedProfit(N, V, C, S) {
    const map = new Map()

    function solve(day, currentValue) {
        if (day >= N) return 0;

        let newTotal = currentValue + V[day];

        const key = day + "," + currentValue
        const memoized = map.get(key)
        if (memoized !== undefined) return memoized

        let collectNow = newTotal - C + solve(day + 1, 0);

        let wait = solve(day + 1, newTotal * (1 - S));

        const max = Math.max(collectNow, wait);
        map.set(key, max)
        return max
    }

    return solve(0, 0);
}


