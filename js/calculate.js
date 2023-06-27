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
monster_name = "スライム"

var message = monster_name + "があらわれた！"
console.log(message)