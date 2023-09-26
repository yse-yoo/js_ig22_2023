function getPerson(resolve) {
    // 2秒後に、コールバック関数を実行
    setTimeout(() => {
        var person = {
            name: "John",
            age: 30,
            city: "NY",
        }
        // Promiseの コールバック関数
        resolve(person)
    }, 2000)
}