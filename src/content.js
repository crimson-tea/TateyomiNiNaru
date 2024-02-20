function handleScroll() {
    const scrollTarget = document.querySelector("#novel_color");
    if (!scrollTarget) return;

    let interval = null;

    let count = -1;
    let from = 0;
    let targetLeft = 0;

    scrollTarget.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY === 0) return;
        if (interval) clearInterval(interval);
        if (count === -100) {
            from = scrollTarget.scrollLeft;
            targetLeft = scrollTarget.scrollLeft;
            count = 1;
        } else {
            from = scrollTarget.scrollLeft;
            count = 1;
        }

        const { scrollWidth, clientWidth } = scrollTarget;
        targetLeft = Math.max(clientWidth - scrollWidth, Math.min(targetLeft - e.deltaY, 1));

        const sign = Math.sign(targetLeft - from);
        const diff = Math.abs(targetLeft - from);
        if (sign === 0) return;

        interval = setInterval(() => {
            const newScrollLeft = sign * Math.ceil(diff * easeOutSine(count / 30)) + from;

            scrollTarget.scrollLeft = newScrollLeft;
            count++;
            if (count >= 30) {
                clearInterval(interval);
                from = targetLeft;
                count = -100;
            }
        }, 7);
    }, { passive: false });
}

function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
}

handleScroll();
