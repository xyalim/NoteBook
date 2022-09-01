```javascript
<!-- resize -->
        <script>
            (function (doc, win) { var docEl = doc.documentElement; var resizeEvt = "orientationchange" in window ? "orientationchange" : "resize"; var recalc = function () { var clientWidth = docEl.clientWidth; if (!clientWidth) { return } if (clientWidth >= 750) { clientWidth = 750 } docEl.style.fontSize = 100 * (clientWidth / 750) + "px"; docEl.dataset.percent = 100 * (clientWidth / 750) }; recalc(); doc.documentElement.classList.add("iosx" + win.devicePixelRatio); if (typeof doc.addEventListener != "function") { return } win.addEventListener(resizeEvt, recalc, false) })(document, window);
        </script>
```

