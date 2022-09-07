const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {

        questions.forEach("click", function(item) {})
        question.classList.toggle("show-text");
    });
});