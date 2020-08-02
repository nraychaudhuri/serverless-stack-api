export function calculateCost(storage) {
    const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
    //calculating cost in pennies
    return rate * storage * 100;
}