var hypoVal = document.querySelectorAll("#inputVal")
var output = document.querySelector("#outputBox")
var button = document.querySelector("#checkBtn")

function clickHandle() {
    var hypotenuse = Math.sqrt((hypoVal[0].value*hypoVal[0].value)+(hypoVal[1].value*hypoVal[0].value));
    output.innerText =  "the Hypotenuse is :  " + hypotenuse.toFixed(4)
}


button.addEventListener("click", clickHandle)