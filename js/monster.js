var stage = document.getElementById("stage")

// pタグの作成
var monsterElement1 = document.createElement("p")
// タグの中に文字をいれる
monsterElement1.innerHTML = "ゴースト"
// parent elment(stage)に child element(monsterElement1)を追加
stage.appendChild(monsterElement1)