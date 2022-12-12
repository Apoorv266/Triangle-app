var angleOne = document.querySelector("#angleOneInput")
var angleTwo = document.querySelector("#angleTwoInput")
var angleThree = document.querySelector("#angleThreeInput")
var output = document.querySelector("#outputBox")
var button = document.querySelector("#checkBtn")

function clickHandle() {
    let sum = (Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value))
console.log(sum)

    if (sum === 180) {
        output.innerText = "Triangle can be successfully formed"
    }

    else{
        output.innerText = "Triangle cannot be formed"
    }
}

button.addEventListener("click", clickHandle)