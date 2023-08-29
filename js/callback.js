function processArray(arr, callback) {
    //繰り返し
    for (const number of arr) {
        //引数（function型） callback を実行
        callback(number)
    }
}

const numbers = [1, 2, 3, 4, 5]
processArray(numbers, function (number) {
    //引数を2倍する
    const answer = number * 2
    console.log(answer)
})

processArray(numbers, function (number) {
    //計算
    const answer = (number + 5) * 0.5
    console.log(answer)
})

processArray(numbers, function (number) {
    //計算
    const answer = (number - 5) * 0.1
    console.log(answer)
})