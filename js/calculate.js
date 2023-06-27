var hp;

hp = 4

// 2項演算
hp = hp + 5
console.log(hp)

hp = hp - 1
console.log(hp)

hp = hp * 2
console.log(hp)

hp = hp / 3
console.log(hp)

// 単項演算
console.log("--- unary operation ---")
hp = 5
hp++
console.log(hp)

hp = 5
hp--
console.log(hp)

// 複合演算
console.log("--- compound operation ---")
hp = 5
hp += 3
console.log(hp)

hp = 5
hp -= 3
console.log(hp)

// 文字と連結（れんけつ）
hp = 10

var monster_name = "スライム"
var message = monster_name + "があらわれた！"
console.log(message)

message = monster_name + "のHPは" + hp
console.log(message)

// 論理演算（logical operation）
console.log("--- logical operation ---")
var isBool;

hp = 10;
isBool = (hp == 20)
console.log(isBool)

hp = 0;
isBool = (hp < 0)
console.log(isBool)

hp = 0;
isBool = (hp >= 0)
console.log(isBool)

hp = 15;
isBool = (hp >= 10)
console.log(isBool)

// ３項演算(ternary operation)
console.log("--- ternary operation ---")
hp = 10
var result = (hp <= 20) ? "ピンチ！" : "だいじょうぶ";
console.log("HP:" + hp)
console.log(result)