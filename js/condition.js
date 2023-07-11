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

// Date
var date = new Date()
var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDate()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()

var dateString = year + "/" + month + "/" + day
document.getElementById("today").innerHTML = dateString

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