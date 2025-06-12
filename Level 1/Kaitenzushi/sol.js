
/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
function getMaximumEatenDishCount(N, D, K) {
    let meals = 0;

    let blockedMealsSet = new Set()
    let blockedMealsArr = Array(K)
    let index = 0;

    for (let i = 0; i < N; i++) {
        const dish = D[i]
        if (!blockedMealsSet.has(dish)) {
            const removedDish = blockedMealsArr[index % K];
            blockedMealsArr[index % K] = dish
            blockedMealsSet.delete(removedDish)
            blockedMealsSet.add(dish)
            index++
            meals++;
        }
    }

    return meals
}
