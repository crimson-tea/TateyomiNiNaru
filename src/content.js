function changeScrollDirection() {
    const scrollTarget = document.querySelector("#novel_color");
    if (!scrollTarget) return;

    let interval = null;
    let count = -1;
    let targetLeft = 0;

    scrollTarget.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY === 0) return;
        if (interval) clearInterval(interval);
        if (count === -1) targetLeft = scrollTarget.scrollLeft;
        count = 0;

        const { scrollLeft, scrollWidth, clientWidth } = scrollTarget;
        targetLeft = Math.max(clientWidth - scrollWidth, Math.min(targetLeft - e.deltaY, 1));

        const sign = Math.sign(targetLeft - scrollLeft);
        const diff = Math.abs(targetLeft - scrollLeft);
        if (sign === 0) return;
        const scrollDelta = sign * Math.ceil(diff / 30);

        interval = setInterval(() => {
            scrollTarget.scrollLeft += scrollDelta;
            count++;
            if (count >= 30) {
                clearInterval(interval);
                count = -1;
            }
        }, 7);
    }, { passive: false });
}

changeScrollDirection();
