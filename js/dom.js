// getElementById()
var priceElement = document.getElementById("price")
var price = priceElement.innerText
console.log(price)

// update element by id
var messageElement = document.getElementById("message")
// messageElement.innerText = "<p>Welcome!!</p>"
messageElement.innerHTML = "<p>Welcome!!</p>"