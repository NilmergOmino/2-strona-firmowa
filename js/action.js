window.addEventListener('load', function(){
    var listButtons = document.getElementsByClassName('main__list-question-element');
    var articles = document.getElementsByClassName('main__question-article');
    function toggleButton(element) {
        var articleVisible = document.getElementsByClassName('main__question-article_visible');
        if (element.getAttribute("aria-pressed") === "false") {
            for(var i=0;i<listButtons.length;i++){
                listButtons[i].setAttribute("aria-pressed", "false");
            }
            element.setAttribute("aria-pressed", "true");
            for (var j = 0; j < listButtons.length; j++) {
                if (listButtons[j].getAttribute("aria-pressed") === element.getAttribute("aria-pressed") ) {
                    articleVisible[0].classList.toggle('main__question-article_hidden');
                    articleVisible[0].classList.toggle('main__question-article_visible');
                    articles[j].classList.toggle('main__question-article_hidden');
                    articles[j].classList.toggle('main__question-article_visible');
                }
            }
        }
    }
    for(var i=0; i<listButtons.length; i++){
        var activatedButton = listButtons[i];
        activatedButton.onclick = function(event){
            toggleButton(event.target);
        }
        activatedButton.onkeypress = function(event){
            if (event.keyCode === 32 || event.keyCode === 13) {
              event.preventDefault();
              toggleButton(event.target);
            }
        }
    }
})
