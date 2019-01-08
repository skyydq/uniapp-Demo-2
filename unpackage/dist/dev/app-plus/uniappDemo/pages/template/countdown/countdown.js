
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"wx-view { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"title { margin: ",[0,80]," 0 ",[0,20]," 0; }\n.",[1],"uni-countdown { display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,2]," 0; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"uni-countdown-splitor { width: auto !important; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; line-height: ",[0,44],"; padding: 0 ",[0,5],"; }\n.",[1],"uni-countdown-numbers { line-height: ",[0,44],"; width: auto !important; padding: 0 ",[0,10],"; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: ",[0,44],"; border-radius: ",[0,8],"; margin: 0 ",[0,5],"; border: 1px solid #000000; font-size: ",[0,22],"; }\n",],undefined,{path:"./pages/template/countdown/countdown.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/countdown/countdown.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      