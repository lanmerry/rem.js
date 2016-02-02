// 传入 window 对象，减少向上查找，也利于压缩
(function(win) {
    var rem = function(rootSize, desWid) {
        // 内置尺寸列表
        var sizeList = {
            640: 1136,
            750: 1334,
            1080: 1920
        };

        // 设置 rem
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
        }.bind(null, rootSize, desWid);

        // 延迟重设 rem
        var tid,
            refreshRem = function() {
                win.clearTimeout(tid);
                tid = win.setTimeout(setRem, 300);
            };

        setRem();

        // 添加事件
        win.addEventListener('resize', function() {
            refreshRem();
        });

        win.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                refreshRem();
            };
        });
    };

    // 暴露全局变量
    win.$rem = rem;
}(window));
