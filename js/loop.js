
// for
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

const person = {
    name: "Alice",
    age: 30,
    occupation: "Enginner",
}
// for-in
// キーまたはインデックスでリピート
for (const key in person) {
    //もしキーがあれば
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        const result = key + " = " + value
        console.log(result)
    }
}

const drinks = ["コーヒー", "紅茶", "ほうじ茶"]
//for-i
for (var index = 0; index < drinks.length; index++) {
    const drink = drinks[index];
    console.log(drink) 
}