function inputUserName() {
    console.log("change!!")
    // user_name 取得（しゅとく）
    var user_name = userNameElement.value
    console.log(user_name)
    var message = "Welcome, " + user_name
    messageElement.innerText = message
}

function order() {
    console.log("Order!!!")
}

var userNameElement = document.getElementById('user_name')
var messageElement = document.getElementById('message')

var itemNameElement = document.getElementById('item_name')
var priceElement = document.getElementById('price')
var quantityElement = document.getElementById('quantity')