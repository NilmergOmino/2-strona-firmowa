window.addEventListener('DOMContentLoaded', function(){
    var fadeInAnimation = function(element){
        var startFadeAnimatePoint = document.documentElement.clientHeight,
            fadeElementCurrentPoint = element.getBoundingClientRect().top;
        if(fadeElementCurrentPoint < startFadeAnimatePoint){
            element.classList.add('fade-in-animation');
        }
    }
    var fadeElements = document.querySelectorAll('.main__section, .main__travel-section, .main__form-contact, .main__list-question'),
        flags = [];
        fadeElementsAmount = fadeElements.length;
    for (var i = 0; i < fadeElementsAmount ; i++) {
        flags[i] = true;
        if(fadeElements[i].getBoundingClientRect().top < document.documentElement.clientHeight){
            fadeElements[i].classList.add('fade-in-animation');
            flags[i] = false;
        }
    }
    window.addEventListener('scroll', function(){
        for (var i = 0; i < fadeElementsAmount; i++) {
            if(flags[i]) fadeInAnimation(fadeElements[i]);
        }
    })
})
