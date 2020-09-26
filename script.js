'use strict'

function smoothScroll(target, duration) {
    const targetEl = document.querySelector(target),
          targetPos = targetEl.getBoundingClientRect().top,
          startPos = window.pageYOffset,
          distance = targetPos - startPos - 140;
    let   startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;

        const timeElapsed = currentTime - startTime,
              run = easeInOutQuad(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
        
    requestAnimationFrame(animation)
}




const downBtn = document.querySelector('.down-btn');
downBtn.addEventListener('click', () => smoothScroll('#about', 2000))

window.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(()=>{
        console.log('Timeout')
    }, 1000)
})

