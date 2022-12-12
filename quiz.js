var output = document.querySelector("#outputBox")
var button = document.querySelector("#checkBtn")
var form = document.querySelector(".quizForm")


var correctAnswer = ["Equal", "60°", "Hypotenuse", "SSA", "Isosceles but not congruent", "6.9 cm", "Equilateral triangle", "PR is the longest side", "Larger", "isosceles"]


function scoreVal() {
    let score = 0
    let index = 0

    var formData = new FormData(form);

    for (const item of formData.values()) {
        if (item === correctAnswer[index]) {
            score++
        }
        index++
    }
    output.innerText = "Final score is : " + score;
}

button.addEventListener("click", scoreVal)
