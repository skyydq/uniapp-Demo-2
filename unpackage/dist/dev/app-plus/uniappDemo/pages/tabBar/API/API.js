
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"body { height: auto; min-height: 100%; }\n.",[1],"uni-card { box-shadow: none; }\n.",[1],"uni-list:after { height: 0; }\n.",[1],"uni-list:before { height: 0; }\n",],undefined,{path:"./pages/tabBar/API/API.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tabBar/API/API.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      