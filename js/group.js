
var cities = document.getElementsByClassName("city")
console.log(cities)

console.log("--- for of ---")
//ただしく動く
for (const city of cities) {
    console.log(city)
}

console.log("--- for in ---")
// HTML Collection は for in を使うとおかしくなる
for (const index in cities) {
    console.log(cities[index])
}

console.log("--- forEach ---")
// forEach は HTML Collection から Array にして動かす
Array.from(cities).forEach(city => {
   console.log(city) 
});