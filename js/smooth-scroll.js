window.addEventListener('load', function(){

var smoothScrolling = function(anchorId,anchorTarget){
    var anchor = document.getElementById(anchorId);
        target = document.getElementById(anchorTarget);
    anchor.onclick = function(){
        var from = pageYOffset;
            upto = target.offsetTop;
        var scroll = function(){
            if(pageYOffset < upto) var step = Math.floor((upto - pageYOffset)*3/100);
            else if(pageYOffset > upto) var step = Math.floor((pageYOffset - upto)*3/100);
            if (step < 2) step = 2;
            if (from < upto) {
                window.scrollBy(0, step);
                from += step;
                window.requestAnimationFrame(scroll);
            }
            else if(from > upto+9) {
                window.scrollBy(0, -step);
                from -= step;
                window.requestAnimationFrame(scroll);
            }
            if(from <= upto +10 && from >= upto-10 ){
                location.hash = anchor.hash;
            }
        }
        window.requestAnimationFrame(scroll);
        return false;
    }
}
smoothScrolling('o-nas_anchor','o-nas');
smoothScrolling('podroze_anchor','podroze');
smoothScrolling('pytania_anchor','pytania-i-odpowiedzi');
smoothScrolling('kontakt_anchor','kontakt');
})
