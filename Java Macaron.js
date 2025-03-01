f// Function to check the answer and show the result
function checkAnswer(event) {
    event.preventDefault();


    const answer1 = document.querySelector('input[name="q1"]:checked'); // Get selected radio button
    const answer2 = document.querySelector('input[name="q2"]:checked');

    let resultText = '';

    if (answer1) {
        if (answer1.value === "almond_flour") {
            resultText += "Correct! Almond flour is key to making our macarons. We specifically use the Blue Diamond brand at Atelier DSHM+.<br>";
        } else {
            resultText += "Incorrect! Coconut flour isn't used in our macarons.Try again!<br>";

        }
    } else {
    resultText += "Please select an answer for Question 1.<br>";
    }

if (answer2) {
    if (answer2.value === "skilled_chefs") {
        resultText += "Correct! Our skilled pastry chefs are crucial to our quality control.<br>";
    } else {
        resultText += "Incorrect! Automated machines aren't the primary factors in quality control.<br>";
    }
} else {
    resultText += "Please select an answer Question 2.<br>";
}


    document.getElementById("quizResult").innerHTML = resultText;
}


document.getElementById("quizForm").addEventListener("submit", checkAnswer);
