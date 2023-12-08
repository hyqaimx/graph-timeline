(window._iconfont_svg_string_ =
  '<svg><symbol id="icon-letter" viewBox="0 0 1024 1024"><path d="M914.285714 73.142857h-804.571428C51.2 73.142857 0 124.342857 0 182.857143v585.142857c0 58.514286 51.2 109.714286 109.714286 109.714286h804.571428c58.514286 0 109.714286-51.2 109.714286-109.714286v-585.142857c0-58.514286-51.2-109.714286-109.714286-109.714286z m-804.571428 73.142857h804.571428L563.2 497.371429c-14.628571 14.628571-29.257143 21.942857-51.2 21.942857s-36.571429-7.314286-51.2-21.942857L109.714286 146.285714zM73.142857 782.628571V212.114286l285.257143 285.257143L73.142857 782.628571z m80.457143 21.942858l256-256c29.257143 29.257143 65.828571 43.885714 102.4 43.885714s73.142857-14.628571 102.4-43.885714l43.885714-43.885715-43.885714 43.885715 256 256H153.6z m797.257143-36.571429v14.628571L665.6 497.371429 950.857143 212.114286v555.885714z"  ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg');
    if (!t) {
      var o,
        i,
        c,
        d,
        s,
        a = function (t, e) {
          e.parentNode.insertBefore(t, e);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (o = function () {
        var t,
          e = document.createElement('div');
        (e.innerHTML = n._iconfont_svg_string_),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild ? a(e, t.firstChild) : t.appendChild(e));
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o();
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((c = o),
            (d = n.document),
            (s = !1),
            r(),
            (d.onreadystatechange = function () {
              'complete' == d.readyState && ((d.onreadystatechange = null), l());
            }));
    }
    function l() {
      s || ((s = !0), c());
    }
    function r() {
      try {
        d.documentElement.doScroll('left');
      } catch (t) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
