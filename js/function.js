function calculateTotalPrice(price, amount) {
    var result = price * amount;
    return result;
}

var totalPrice = calculateTotalPrice(200, 5);
console.log(totalPrice);

// anonymous function(無名関数：むめいかんすう）
const hello = function(name) {
    var message = name + "さん、ようこそ！";
    return message;
}
