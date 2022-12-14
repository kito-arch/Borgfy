const counterAnim = (qSelector, start = 0, end, duration = 1500) => {

    if(document.querySelector(qSelector).innerText != "")
        return;

    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     target.innerText = Math.floor(progress * (end - start) + start);
     if (progress < 1) {
      window.requestAnimationFrame(step);
     }
    };
    window.requestAnimationFrame(step);
};


function isInViewport(element) {
    const rect = document.getElementById(element).getBoundingClientRect();
    // console.log(rect)
    return (
        // rect.top >= 0 &&
        rect.left >= 0
        && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        //  && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


export const onMyScroll = ()=>{
    document.addEventListener('scroll', function () {
        console.log(isInViewport("nums"))
        if(isInViewport("nums")){
            counterAnim("#num1", 0, 15)
            counterAnim("#num2", 0, 10)
            counterAnim("#num3", 0, 12)
        }
    }, {
        passive: true
    });    
}

