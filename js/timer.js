var counterElement = document.getElementById("counter")
var interval = 1000  //1sec
var timer

//カウンター初期化(Initialize)
var count = 0
counterElement.innerText = count

function start() {
    console.log("Start!!!")

    timer = setInterval(() => {
        count++    
        counterElement.innerHTML = count
    }, interval);
}