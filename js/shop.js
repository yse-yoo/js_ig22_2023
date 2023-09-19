var calculateBtn = document.getElementById('calculate-btn')

//clickイベント登録（とうろく）
calculateBtn.addEventListener('click', function(event) {
    //クリックされた時の処理（しょり）
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value
    console.log(price, quantity)

    var message = "入力が間違っています"
    if (!isNaN(price) && !isNaN(quantity)) {
        var totalPrice = price * quantity
        message = totalPrice + "円"
    }
    document.getElementById('result').innerHTML = message
    //処理を止める
    event.preventDefault()
})