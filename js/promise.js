// 2秒後に、コールバック関数を実行
function getPerson(resolve) {
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

// ブラウザにデータを表示する
function showPerson(person) {
    document.getElementById('name').innerHTML = person.name
    document.getElementById('age').innerHTML = person.age
    document.getElementById('city').innerHTML = person.city
}