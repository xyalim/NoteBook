```JavaScript
function openwx(){

             locatUrl = "weixin://";

             if(/ipad|iphone|mac/i.test(navigator.userAgent)) {

                var ifr =document.createElement("iframe");

                ifr.src = locatUrl;

                ifr.style.display = "none";

                document.body.appendChild(ifr);

             }else{

                window.location.href = locatUrl;
             }

        }
```

