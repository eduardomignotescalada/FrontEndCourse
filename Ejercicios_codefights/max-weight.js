function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (maxW >= weight1 + weight2) {
        console.log("puede llevar los dos")
        return value1 + value2
    } else if (maxW >= Math.max(weight1, weight2)) {
        console.log("puede llevar cualquiera -  el que tenga más valor")
        return Math.max(value1, value2)
    } else if (maxW >= Math.min(weight1, weight2))
        if ((maxW > weight1) || (value1 > value2)) {
            console.log("caso especial 1")
            return value1
        }
    else if ((maxW > weight2) || (value2 > value1)) {
        console.log("caso especial 2")
        return value2
    } else {
        console.log("no puede llevar ninguno")
        return 0
    }
}

knapsackLight(1, 10, 2, 5, 6);
knapsackLight(10, 5, 6, 4, 8);
knapsackLight(10, 5, 6, 4, 9);
knapsackLight(5, 3, 7, 4, 6)
