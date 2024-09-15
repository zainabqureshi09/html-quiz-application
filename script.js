document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var correctAnswers = {
        q1: "Hyper Text Markup Language",
        q2: "h1",
        q3: "br",
        q4: "/",
        q5: "ol",
        q6: "bold text",
        q7:"href",
        q9:"alt",
        q9:"hr",
        q10:"pre",
        q11:"q",
    };

    var score = 0;
    var totalQuestions = 11;

    for (var question in correctAnswers) {
        var selectedAnswer = document.querySelector('input[name="' + question + '"]:checked');
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    var resultMessage = "You scored " + score + " out of " + totalQuestions + "!";
    document.getElementById('result').textContent = resultMessage;
});