window.addEventListener('load', function(){
    var fadeInAnimation = function(element){
        var startFadeAnimatePoint = document.documentElement.clientHeight;
        var fadeElementCurrentPoint = element.getBoundingClientRect().top;
        if(fadeElementCurrentPoint < startFadeAnimatePoint){
            element.classList.add('fade-in-animation');
        }
    }
    var fadeElements = document.querySelectorAll('.main__article, .main__travel-article');
        flags = [];
    for (var i = 0; i < fadeElements.length; i++) {
        flags[i] = true;
        if(fadeElements[i].getBoundingClientRect().top < document.documentElement.clientHeight){
            fadeElements[i].classList.add('fade-in-animation');
            flags[i] = false;
        }
    }
    window.addEventListener('scroll', function(){
        for (var i = 0; i < fadeElements.length; i++) {
            if(flags[i]) fadeInAnimation(fadeElements[i]);
        }
    })
})
