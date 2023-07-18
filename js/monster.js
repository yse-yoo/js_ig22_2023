var stage = document.getElementById("stage")

// pタグの作成
var monsterElement1 = document.createElement("p")
// タグの中に文字をいれる
monsterElement1.innerHTML = "ゴースト"
// parent elment(stage)に child element(monsterElement1)を追加
stage.appendChild(monsterElement1)

var monsterElement2 = document.createElement("p")
monsterElement2.innerHTML = "キメラ"
stage.appendChild(monsterElement2)

//stageから、monsterElement1を削除（さくじょ）
stage.removeChild(monsterElement1)

//aタグ作成
var a = document.createElement("a")
a.href = "https://www.google.com/search?q=" + monsterElement1.innerHTML
a.target = "_blank"
a.innerHTML = monsterElement1.innerHTML
stage.appendChild(a)
