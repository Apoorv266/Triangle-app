var areaVal = document.querySelectorAll("#inputVal")
var output = document.querySelector("#outputBox")
var button = document.querySelector("#checkBtn")

function clickHandle(params) {
    let product = areaVal[0].value * areaVal[1].value
    let area = 1/2 * (product)
    let unit = "2"
    output.innerHTML = "<p>Area of triangle is: " + area  + "cm"+ unit.sup() + "</p>"
}



button.addEventListener("click", clickHandle)