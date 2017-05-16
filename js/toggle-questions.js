// toggle artykułów w sekcji pytań i odpowiedzi
window.addEventListener('DOMContentLoaded', function(){
    var listButtons = document.getElementsByClassName('main__list-question-element'),
        articles = document.getElementsByClassName('main__question-article'),
        listButtonsAmount = listButtons.length;
    function toggleButton(element) {
        var activeButton = document.getElementsByClassName('main__list-question-element_active'),
            articleVisible = document.getElementsByClassName('main__question-article_visible');
        if (element.getAttribute("aria-pressed") === "false") {
            activeButton[0].setAttribute("aria-pressed", "false");
            activeButton[0].setAttribute("aria-expanded", "false");
            activeButton[0].classList.toggle('main__list-question-element_active');
            element.setAttribute("aria-pressed", "true");
            element.setAttribute("aria-expanded", "true");
            element.classList.add('main__list-question-element_active');
            for (var j = 0; j < listButtonsAmount; j++) {
                if (listButtons[j] === element ) {
                    articleVisible[0].classList.toggle('main__question-article_hidden');
                    articleVisible[0].classList.toggle('main__question-article_visible');
                    articles[j].classList.toggle('main__question-article_hidden');
                    articles[j].classList.toggle('main__question-article_visible');
                }
            }
        }
    }
    for(var i=0; i<listButtonsAmount; i++){
        var activatedButton = listButtons[i];
        activatedButton.addEventListener('click', function(event){
            toggleButton(event.target);
        }, false)
    }
})
