(function(win) {
    var refreshRem = function() {
        var docEl = win.document.documentElement,
            cliSize = docEl.getBoundingClientRect(),
            width = cliSize.width,
            height = cliSize.height,
            rem;

        if ((width / height) > (750 / 1334)) {
            rem = height / (1334 / 50);
        } else {
            rem = width / (750 / 50);
        };

        docEl.style.fontSize = rem + 'px';
    };

    refreshRem();

    var tid,
        setRem = function() {
            win.clearTimeout(tid);
            tid = win.setTimeout(refreshRem, 300);
        };

    win.addEventListener('resize', function() {
        setRem();
    });

    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            setRem();
        };
    });
}(window));
