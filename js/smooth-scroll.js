window.addEventListener('load', function(){
    var navElements = document.getElementsByClassName('nav__link');
    for(var i=0;i<navElements.length; i++){
        var navElement = navElements[i];
        navElement.onclick = function(){
            var anchor = this.hash;
            var target = document.getElementById(this.hash.slice(1));
                from = pageYOffset;
                upto = target.offsetTop;
            var scroll = function(){
                if(pageYOffset < upto) var step = Math.floor((upto - pageYOffset)*4/100);
                else if(pageYOffset > upto) var step = Math.floor((pageYOffset - upto)*4/100);
                if (step < 3) step = 3;
                if (from < upto) {
                    window.scrollBy(0, step);
                    from += step;
                    window.requestAnimationFrame(scroll);
                }
                else if(from > upto+1) {
                    window.scrollBy(0, -step);
                    from -= step;
                    window.requestAnimationFrame(scroll);
                }
                if(from <= upto +10 && from >= upto-10 ){
                    location.hash = anchor;
                }
            }
            window.requestAnimationFrame(scroll);
            return false;
        }
    }
})
