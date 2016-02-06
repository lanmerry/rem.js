((win) => {
    let setRem = () => {
        let rootEl = win.document.documentElement,
            cliSize = rootEl.getBoundingClientRect(),
            width = cliSize.width,
            height = cliSize.height;

        let rem = (width / height) > (750 / 1334) ?
            height / (1334 / 50) :
            width / (750 / 50);

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
        }
    });
})(window);
