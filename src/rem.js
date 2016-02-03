((win) => {
    let setRem = () => {
        let rootEl = win.document.documentElement,
            cliSize = rootEl.getBoundingClientRect(),
            width = cliSize.width,
            height = cliSize.height,
            rem;

        if ((width / height) > (750 / 1334)) {
            rem = height / (1334 / 50);
        } else {
            rem = width / (750 / 50);
        };

        rootEl.style.fontSize = rem + 'px';
    };

    setRem();

    let tid,
        refreshRem = () => {
            win.clearTimeout(tid);
            tid = win.setTimeout(setRem, 300);
        };

    win.addEventListener('resize', () => {
        refreshRem();
    });

    win.addEventListener('pageshow', (e) => {
        if (e.persisted) {
            refreshRem();
        };
    });
})(window);
