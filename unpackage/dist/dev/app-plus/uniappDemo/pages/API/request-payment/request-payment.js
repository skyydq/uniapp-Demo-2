
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"rmbLogo { font-size: ",[0,40],"; }\n.",[1],"_button { background-color: #007aff; color: #ffffff; }\n",],undefined,{path:"./pages/API/request-payment/request-payment.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/request-payment/request-payment.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      