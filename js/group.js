
var cities = document.getElementsByClassName("city")
console.log(cities)

console.log("--- for of ---")
for (const city of cities) {
    console.log(city)
}

console.log("--- for in ---")
// HTML Collection は for in を使うとおかしくなる
for (const index in cities) {
    console.log(cities[index])
}

console.log("--- forEach ---")
// HTML Collection は for in を使うとおかしくなる
Array.from(cities).forEach(city => {
   console.log(city) 
});