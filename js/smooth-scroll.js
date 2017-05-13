window.addEventListener('load', function(){
    var navElements = document.getElementsByClassName('nav__link');
    for(var i=0;i<navElements.length; i++){
        var navElement = navElements[i];
        navElement.onclick = function(){
            var check = true;
                anchor = this.hash;
                target = document.getElementById(this.hash.slice(1));
                from = pageYOffset;
                upto = target.offsetTop;
            var scroll = function(){
                if(pageYOffset < upto ) var step = Math.floor((upto - pageYOffset)*6/100);
                else if(pageYOffset > upto) var step = Math.floor((pageYOffset - upto)*6/100);
                if (step < 1) step = 1;
                if (from < upto) {
                    window.scrollBy(0, step);
                    from += step;
                    window.requestAnimationFrame(scroll);
                }
                else if(from > upto) {
                    window.scrollBy(0, -step);
                    from -= step;
                    window.requestAnimationFrame(scroll);
                }
                if(step < 10 && check==true){
                    history.pushState(null,null,anchor);
                    check = false;
                }
            }
            window.requestAnimationFrame(scroll);
            return false;
        }
    }
})
