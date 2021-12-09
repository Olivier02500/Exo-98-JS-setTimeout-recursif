let div = document.getElementById('div');
let start = document.getElementById('start');
let countMin = 10;
let countSec = 60;

let timeoutCount = function (){
    let timeoutId = setTimeout(function (){
        if (countSec > 0 ) {
            countSec--;
            div.innerHTML = countMin + " : " + countSec
            timeoutCount();
        }
            if (countSec === 0){
                countSec = 60;
                countMin--;
            }
    },1000)
}
start.addEventListener('click', timeoutCount);