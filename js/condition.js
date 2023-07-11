var message = ""
var price = 200
var money = 500

if (price <= 0) {
    message = "価格が正しくありません"
} else if (money >= price) {
    message = "購入できます"
} else {
    message = "お金がたりません"
}
console.log(message)

var weekday = "月"
var garbade = ""

switch (weekday) {
    case "月":
    case "金":
        garbade = "もえるごみ"
        break;
    case "水":
        garbade = "もえないごみ"
        break;
    default:
        break;
}
document.getElementById("weekday").innerHTML = weekday
document.getElementById("gabage").innerHTML = garbade