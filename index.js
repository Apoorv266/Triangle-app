var angleVal = document.querySelectorAll("#inputVal")
var output = document.querySelector("#outputBox")
var button = document.querySelector("#checkBtn")

function clickHandle() {
    let sum = (Number(angleVal[0].value) + Number(angleVal[1].value) + Number(angleVal[2].value))
console.log(sum)

    if (sum === 180) {
        output.innerText = "Triangle can be successfully formed"
    }

    else{
        output.innerText = "Triangle cannot be formed"
    }
}

button.addEventListener("click", clickHandle)