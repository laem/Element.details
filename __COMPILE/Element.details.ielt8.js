(function(j,h){if(h=!(!h||!+h[1])){var i,a=j.Element||(j.Element={}),a=a.prototype||(a.prototype={});isCssClass=function(b,e){return!!~(" "+b.className+" ").indexOf(" "+e+" ")};emulateDetailChildrenOpenClose=function(b,e){for(var f=-1,c,d,a;c=b.childNodes[++f];)if(1==c.nodeType)if("SUMMARY"==c.nodeName.toUpperCase()||isCssClass(c,"\u25bc\u25bc")){for(a=-1;!d&&(d=c.childNodes[++a])&&!isCssClass(d,"details-marker");)d=void 0;d&&(d.innerHTML=e?"\u25bc":"\u25ba")}else c.style.display=e?"":"none"};_openAttributeReplacement=
"OPEN";var g={get:function(){return!("nodeName"in this)||"DETAILS"!=this.nodeName.toUpperCase()?void 0:null!==this.getAttribute(_openAttributeReplacement)},set:function(b){if("nodeName"in this&&"DETAILS"==this.nodeName.toUpperCase()){b=k(this,b);a:{var e=RegExp("(^|\\s)\u25ba(\\s|$)","g"),a=this.className;if(b)a=a.replace(e,"$1");else{if(e.test(a))break a;a+=" \u25ba"}this.className=a.replace(/\s+/g," ").replace(/(^ | $)/g,"")}this[b?"setAttribute":"removeAttribute"](_openAttributeReplacement,"");
emulateDetailChildrenOpenClose(this,b);return b}}};Object.defineProperty?(Object.defineProperty(a,"open",g),i="getopen"in a):(i=!0,a.getopen=g.get,a.setopen=g.set);i&&(_openAttributeReplacement="$OPEN$");document.head.insertAdjacentHTML("beforeend","<br><style>details summary,details .\u25bc\u25bc{display:block}details{display:block"+(i?";behavior:url(/Element.details.ielt8.htc)}":"}")+"</style>");var l=function(b){(b.keyCode===13||b.type==="click")&&g.set.call(this.parentNode,this.parentNode.getAttribute("open")===
null)},k=function(b,a){function f(){l.call(c,event)}if(b.a&&b.a.__isShimmed)return a;if(!b.a)b.a={};if(i)a="open"in b.attributes;else{a=b.getAttribute("open")!==null;Object.defineProperty(b,"open",g)}b.removeAttribute("open");a&&b.setAttribute(_openAttributeReplacement,"");for(var c,d,h=-1;d=b.childNodes[++h];)if(d.nodeType===3&&/[^\t\n\r ]/.test(d.data)){b.insertBefore(document.createElement("x-i"),d).innerHTML=d.data;b.removeChild(d)}else d.nodeName.toUpperCase()=="SUMMARY"&&(c=d);if(!c){(c=document.createElement("x-s")).innerHTML=
"Details";c.className="\u25bc\u25bc"}b.insertBefore(c,b.childNodes[0]);document.createElement("x-i");c.insertAdjacentHTML("afterbegin","<x-i class=details-marker>"+(a?"\u25bc":"\u25ba")+"</x-i>");c.tabIndex=0;c.attachEvent("onclick",f);c.attachEvent("onkeyup",f);b.a.__isShimmed=1;return a},a=function(){for(var b=document.getElementsByTagName("details"),a,f=-1;a=b[++f];)g.set.call(a,a.getAttribute("open")!==null)};"complete"!=document.readyState?(void 0===document.readyState&&a(),document.addEventListener?
document.addEventListener("DOMContentLoaded",a):window.attachEvent("onload",a)):a()}})(window,/msie (\d+)/i.exec(navigator.userAgent));