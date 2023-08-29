function processArray(arr, callback) {
    //繰り返し、引数 callbackを実行
    for (const number of arr) {
        callback(number)
    }
}

