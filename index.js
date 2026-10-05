// Exercise 6: Calculate total cost from basket and prices objects
function getTotalCost(basket, prices) {
    let totalCost = 0;
    for (let item in basket) {
        if (prices[item] !== undefined) {
            totalCost += basket[item] * prices[item];
        }
    }
    return totalCost;
}

// Exercise 6 Handler
function cal() {
    // Example objects as specified in the exercise
    const prices = { "apple": 100, "banana": 40, "orange": 60 };
    const basket = { "apple": 2, "banana": 5 };

    const total = getTotalCost(basket, prices);
    document.getElementById('cal6').innerText = total;
}
