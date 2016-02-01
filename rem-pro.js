(function(win) {
    var rem = function(rootSize, desWid) {
        var sizeList = {
            640: 1136,
            750: 1334,
            1080: 1920
        };

        var setRem = function(rootSize, desWid) {
            var rootEl = win.document.documentElement,
                cliSize = rootEl.getBoundingClientRect(),
                cliWid = cliSize.width,
                cliHei = cliSize.height;

            var desHei = sizeList[desWid];

            var rem = (cliWid / cliHei) > (desWid / desHei) ?
                cliHei / (desHei / rootSize) :
                cliWid / (desWid / rootSize);

            rootEl.style.fontSize = rem + 'px';
        };

        var tid,
            refreshRem = setRem.bind(this, rootSize, desWid),
            _setRem = function() {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            };

        setRem(rootSize, desWid);

        win.addEventListener('resize', function() {
            _setRem();
        });

        win.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                _setRem();
            }
        });
    };

    win.$rem = rem;
}(window));
