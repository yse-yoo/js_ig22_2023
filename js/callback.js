function processArray(arr, callback) {
    //繰り返し
    for (const number of arr) {
        //引数（function型） callback を実行
        callback(number)
    }
}

const numbers = [1, 2, 3, 4, 5]
console.log("--- proccessArray() 1 ---")
processArray(numbers, function (number) {
    //引数を2倍する
    const answer = number * 2
    console.log(answer)
})

console.log("--- proccessArray() 2 ---")
processArray(numbers, function (number) {
    //計算
    const answer = (number + 5) * 0.5
    console.log(answer)
})

console.log("--- proccessArray() 3 ---")
processArray(numbers,  (number) => {
    //計算
    const answer = (number - 5) * 0.1
    console.log(answer)
})

console.log("--- proccessArray() 4 ---")
function calculate(number) {
    const answer = (number - 0.3) * 1.1
    console.log(answer)
}

processArray(numbers, calculate)


const drinks = ["コーヒー", "紅茶", "ほうじ茶"]
// forEach
// arrow function
console.log("--- arrow function ---")
drinks.forEach(drink => {
    console.log(drink)
});

// anonymous function
console.log("--- anonymous function ---")
drinks.forEach(function(drink) {
    console.log(drink)
});

// function
console.log("--- function ---")
function showDrink(drink) {
    console.log(drink)
}
drinks.forEach(showDrink)

const items = [
    { id: 1, name: "コーヒー", price: 300},
    { id: 2, name: "紅茶", price: 350},
    { id: 3, name: "ほうじ茶", price: 300},
] 