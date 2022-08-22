(function () {
    let doc = document.documentElement;
    let w = window;

    /*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

    let curScroll;
    let prevScroll = w.scrollY || doc.scrollTop;
    let curDirection = 0;
    let prevDirection = 0;

    /*
    how it works:
    -------------
    create a scroll event listener
    create function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0
    then set the direction value to curDirection
    compare curDirection and prevDirection
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

    let header = document.getElementById("header");
    let toggled;
    let threshold = 200;

    let checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        } else {
            //scrolled up
            curDirection = 1;
        }

        if (curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if (toggled) {
            prevDirection = curDirection;
        }
    };

    let toggleHeader = function () {
        toggled = true;
        if (curDirection === 2 && curScroll > threshold) {
            header.classList.add("hide");
        } else if (curDirection === 1) {
            header.classList.remove("hide");
        } else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener("scroll", checkScroll);
})();
