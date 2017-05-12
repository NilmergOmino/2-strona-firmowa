    var nav = document.getElementById('nav');
        topPos = nav.offsetTop;
window.addEventListener('load', function(){
    if(pageYOffset >= topPos) nav.classList.add('nav_sticky');
})
window.addEventListener("scroll", function(){
    var currentPos = pageYOffset;
    if(currentPos >= topPos){
        nav.classList.add('nav_sticky');
    }
    else{
        nav.classList.remove('nav_sticky');
    }
})
