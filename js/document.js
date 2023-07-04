/**
 * Pタグをアウトプットするメソッド
 * anonymous function
 */
const outputP = function(message) {
    var tag = "<p>" + message + "</p>"
    document.write(tag)
}

document.write("<h1>Profile</h1>")
document.write("<h2>Name</h2>")
document.write("<p>YSE</p>")
document.write("<h2>Favorite</h2>")

outputP("旅行")
outputP("ゲーム")
outputP("スポーツ")