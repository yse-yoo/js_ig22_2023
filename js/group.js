
var cities = document.getElementsByClassName("city")
//HTML Collection
console.log(cities)

console.log("--- for of ---")
//ただしく動く
for (const city of cities) {
    console.log(city.innerHTML)
}

console.log("--- for in ---")
// HTML Collection は for in を使うとおかしくなる
for (const index in cities) {
    console.log(cities[index].innerHTML)
}

console.log("--- forEach ---")
// forEach は HTML Collection から Array にして動かす
Array.from(cities).forEach(city => {
   console.log(city.innerHTML) 
});

var menus = document.getElementsByClassName("menus")
console.log(menus)

for (const menu of menus) {
    //ul をしゅとく
    console.log(menu)
    // ul のこども(li)
    console.log(menu.children)
    for (const item of menu.children) {
        console.log(item.innerHTML)
    }
}