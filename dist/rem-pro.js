// 传入 window 对象，减少向上查找，也便于压缩
(function(win) {
  var rem = function rem(rootSize, desWid) {
    // 内置尺寸列表
    var sizeList = {
      640: 1136,
      750: 1334,
      1080: 1920
    };

    // 计算并设置 rem
    var setRem = function setRem() {
      var rootEl = win.document.documentElement,
        cliSize = rootEl.getBoundingClientRect(),
        cliWid = cliSize.width,
        cliHei = cliSize.height;

      var desHei = sizeList[desWid];

      var rem = cliWid / cliHei > desWid / desHei ? cliHei / (desHei / rootSize) : cliWid / (desWid / rootSize);

      rootEl.style.fontSize = rem + 'px';
    };

    // 延迟重设 rem
    var tid = undefined,
      refreshRem = function refreshRem() {
        win.clearTimeout(tid);
        tid = win.setTimeout(setRem, 300);
      };

    setRem();

    // 事件触发重设
    win.addEventListener('resize', function() {
      refreshRem();
    });

    win.addEventListener('pageshow', function(e) {
      if (e.persisted) {
        refreshRem();
      }
    });
  };

  // 暴露全局变量
  win.$rem = rem;
})(window);