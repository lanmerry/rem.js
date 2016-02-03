(function(win) {
  var setRem = function setRem() {
    var rootEl = win.document.documentElement,
      cliSize = rootEl.getBoundingClientRect(),
      width = cliSize.width,
      height = cliSize.height,
      rem = undefined;

    if (width / height > 750 / 1334) {
      rem = height / (1334 / 50);
    } else {
      rem = width / (750 / 50);
    }
    ;

    rootEl.style.fontSize = rem + 'px';
  };

  setRem();

  var tid = undefined,
    refreshRem = function refreshRem() {
      win.clearTimeout(tid);
      tid = win.setTimeout(setRem, 300);
    };

  win.addEventListener('resize', function() {
    refreshRem();
  });

  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      refreshRem();
    }
    ;
  });
})(window);