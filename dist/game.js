!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var o=wx.getSystemInfoSync(),r=o.windowHeight,i=o.windowWidth;PIXI.utils.isWebGLSupported=function(){return!0};var a=new PIXI.Application({view:canvas,width:i*pixelRatio,height:r*pixelRatio,roundPixels:!0,sharedLoader:!0,sharedTicker:!0,autoResize:!1,antialias:!1,backgroundColor:94626});t.default=a},function(e,t,n){"use strict";n.r(t);var o={};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(o),n.d(o,"document",function(){return Te}),n.d(o,"navigator",function(){return Ne}),n.d(o,"XMLHttpRequest",function(){return Ge}),n.d(o,"WebSocket",function(){return Xe}),n.d(o,"Image",function(){return Y}),n.d(o,"Audio",function(){return Se}),n.d(o,"FileReader",function(){return ze}),n.d(o,"HTMLElement",function(){return U}),n.d(o,"localStorage",function(){return Ke}),n.d(o,"location",function(){return Je}),n.d(o,"canvas",function(){return Qe}),n.d(o,"innerWidth",function(){return N}),n.d(o,"innerHeight",function(){return C}),n.d(o,"devicePixelRatio",function(){return x}),n.d(o,"screen",function(){return A}),n.d(o,"ontouchstart",function(){return M}),n.d(o,"ontouchmove",function(){return I}),n.d(o,"ontouchend",function(){return L}),n.d(o,"performance",function(){return j}),n.d(o,"HTMLImageElement",function(){return J}),n.d(o,"HTMLCanvasElement",function(){return Q});var i=new WeakMap,a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i.set(this,{})}var t,n,o;return t=e,(n=[{key:"addEventListener",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.get(this);o||(o={},i.set(this,o)),o[e]||(o[e]=[]),o[e].push(t),n.capture&&console.warn("EventTarget.addEventListener: options.capture is not implemented."),n.once&&console.warn("EventTarget.addEventListener: options.once is not implemented."),n.passive&&console.warn("EventTarget.addEventListener: options.passive is not implemented.")}},{key:"removeEventListener",value:function(e,t){var n=i.get(this)[e];if(n&&n.length>0)for(var o=n.length;o--;o>0)if(n[o]===t){n.splice(o,1);break}}},{key:"dispatchEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.get(this)[e.type];if(t)for(var n=0;n<t.length;n++)t[n](e)}}])&&r(t.prototype,n),o&&r(t,o),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e,n,o,r,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,e=!(o=l(t).call(this))||"object"!==u(o)&&"function"!=typeof o?f(n):o,r=f(e),a=[],(i="childNodes")in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,e}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a),n=t,(o=[{key:"appendChild",value:function(e){if(!(e instanceof t))throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");this.childNodes.push(e)}},{key:"cloneNode",value:function(){var e=Object.create(this);return Object.assign(e,this),e}},{key:"removeChild",value:function(e){var t=this.childNodes.findIndex(function(t){return t===e});return t>-1?this.childNodes.splice(t,1):null}}])&&c(n.prototype,o),r&&c(n,r),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g,w=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,e=!(o=h(t).call(this))||"object"!==y(o)&&"function"!=typeof o?d(n):o,v(d(e),"className",""),v(d(e),"children",[]),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,p),t}();function m(){}if(wx.getPerformance){var O=wx.getSystemInfoSync().platform,S=wx.getPerformance(),E=S.now(),_=Object.assign({},S,{now:function(){return(S.now()-E)/1e3}});g="devtools"===O?S:_}var j=g,k=wx.getSystemInfoSync(),P=k.screenWidth,T=k.screenHeight,x=k.devicePixelRatio,N=P,C=T,A={availWidth:N,availHeight:C},M=null,I=null,L=null;function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(e){function t(){var e,n,o,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,e=!(o=W(t).call(this))||"object"!==H(o)&&"function"!=typeof o?D(n):o,B(D(e),"className",""),B(D(e),"childern",[]),B(D(e),"style",{width:"".concat(N,"px"),height:"".concat(C,"px")}),B(D(e),"insertBefore",m),B(D(e),"innerHTML",""),e.tagName=r.toUpperCase(),e}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,w),n=t,(o=[{key:"setAttribute",value:function(e,t){this[e]=t}},{key:"getAttribute",value:function(e){return this[e]}},{key:"getBoundingClientRect",value:function(){return{top:0,left:0,width:N,height:C}}},{key:"focus",value:function(){}},{key:"clientWidth",get:function(){var e=parseInt(this.style.fontSize,10)*this.innerHTML.length;return Number.isNaN(e)?0:e}},{key:"clientHeight",get:function(){var e=parseInt(this.style.fontSize,10);return Number.isNaN(e)?0:e}}])&&R(n.prototype,o),r&&R(n,r),t}();function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){return F(this,t),X(this,q(t).call(this,"img"))}return z(t,U),t}(),Q=function(e){function t(){return F(this,t),X(this,q(t).call(this,"canvas"))}return z(t,U),t}();function Y(){return wx.createImage()}function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ee(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var oe=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ee(this,te(t).call(this,e))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,U),n=t,(o=[{key:"addTextTrack",value:function(){}},{key:"captureStream",value:function(){}},{key:"fastSeek",value:function(){}},{key:"load",value:function(){}},{key:"pause",value:function(){}},{key:"play",value:function(){}}])&&$(n.prototype,o),r&&$(n,r),t}();function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ce=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ie(this,ae(t).call(this,"audio"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(t,oe),t}();function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de=0,be=1,ve=2,ge=3,we=4,me=new WeakMap,Oe=new WeakMap,Se=(new WeakMap,new WeakMap,function(e){function t(e){var n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=se(t).call(this),n=!r||"object"!==le(r)&&"function"!=typeof r?pe(o):r,he(pe(n),"HAVE_NOTHING",de),he(pe(n),"HAVE_METADATA",be),he(pe(n),"HAVE_CURRENT_DATA",ve),he(pe(n),"HAVE_FUTURE_DATA",ge),he(pe(n),"HAVE_ENOUGH_DATA",we),he(pe(n),"readyState",de),Oe.set(pe(n),"");var i=wx.createInnerAudioContext();return me.set(pe(n),i),i.onCanplay(function(){n.dispatchEvent({type:"load"}),n.dispatchEvent({type:"loadend"}),n.dispatchEvent({type:"canplay"}),n.dispatchEvent({type:"canplaythrough"}),n.dispatchEvent({type:"loadedmetadata"}),n.readyState=ve}),i.onPlay(function(){n.dispatchEvent({type:"play"})}),i.onPause(function(){n.dispatchEvent({type:"pause"})}),i.onEnded(function(){n.dispatchEvent({type:"ended"}),n.readyState=we}),i.onError(function(){n.dispatchEvent({type:"error"})}),e&&(me.get(pe(n)).src=e),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,ce),n=t,(o=[{key:"load",value:function(){console.warn("HTMLAudioElement.load() is not implemented.")}},{key:"play",value:function(){me.get(this).play()}},{key:"pause",value:function(){me.get(this).pause()}},{key:"canPlayType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"string"!=typeof e?"":e.indexOf("audio/mpeg")>-1||e.indexOf("audio/mp4")?"probably":""}},{key:"cloneNode",value:function(){var e=new t;return e.loop=me.get(this).loop,e.autoplay=me.get(this).autoplay,e.src=this.src,e}},{key:"currentTime",get:function(){return me.get(this).currentTime},set:function(e){me.get(this).seek(e)}},{key:"src",get:function(){return Oe.get(this)},set:function(e){Oe.set(this,e),me.get(this).src=e}},{key:"loop",get:function(){return me.get(this).loop},set:function(e){me.get(this).loop=e}},{key:"autoplay",get:function(){return me.get(this).autoplay},set:function(e){me.get(this).autoplay=e}},{key:"paused",get:function(){return me.get(this).paused}}])&&fe(n.prototype,o),r&&fe(n,r),t}());function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Ee(this,"target",Qe),Ee(this,"currentTarget",Qe),Ee(this,"touches",[]),Ee(this,"targetTouches",[]),Ee(this,"changedTouches",[]),Ee(this,"preventDefault",m),Ee(this,"stopPropagation",m),this.type=t};function je(e){return function(t){var n=new _e(e);n.touches=t.touches,n.targetTouches=Array.prototype.slice.call(t.touches),n.changedTouches=t.changedTouches,n.timeStamp=t.timeStamp,Te.dispatchEvent(n)}}wx.onTouchStart(je("touchstart")),wx.onTouchMove(je("touchmove")),wx.onTouchEnd(je("touchend")),wx.onTouchCancel(je("touchcancel"));var ke={},Pe={readyState:"complete",visibilityState:"visible",documentElement:o,hidden:!1,style:{},location:Je,ontouchstart:null,ontouchmove:null,ontouchend:null,head:new U("head"),body:new U("body"),createElement:function(e){return"canvas"===e?new xe:"audio"===e?new Se:"img"===e?new Y:new U(e)},getElementById:function(e){return e===Qe.id?Qe:null},getElementsByTagName:function(e){return"head"===e?[Pe.head]:"body"===e?[Pe.body]:"canvas"===e?[Qe]:[]},getElementsByName:function(e){return"head"===e?[Pe.head]:"body"===e?[Pe.body]:"canvas"===e?[Qe]:[]},querySelector:function(e){return"head"===e?Pe.head:"body"===e?Pe.body:"canvas"===e?Qe:e==="#".concat(Qe.id)?Qe:null},querySelectorAll:function(e){return"head"===e?[Pe.head]:"body"===e?[Pe.body]:"canvas"===e?[Qe]:[]},addEventListener:function(e,t){ke[e]||(ke[e]=[]),ke[e].push(t)},removeEventListener:function(e,t){var n=ke[e];if(n&&n.length>0)for(var o=n.length;o--;o>0)if(n[o]===t){n.splice(o,1);break}},dispatchEvent:function(e){var t=ke[e.type];if(t)for(var n=0;n<t.length;n++)t[n](e)}},Te=Pe;function xe(){var e=wx.createCanvas();e.type="canvas",e.__proto__.__proto__=new U("canvas");e.getContext;return e.getBoundingClientRect=function(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},e}var Ne={platform:wx.getSystemInfoSync().platform,language:"zh-cn",appVersion:"5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",onLine:!0,geolocation:{getCurrentPosition:m,watchPosition:m,clearWatch:m}};function Ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Me=new WeakMap,Ie=new WeakMap,Le=new WeakMap,He=new WeakMap,Re=new WeakMap;function We(e){if("function"==typeof this["on".concat(e)]){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this["on".concat(e)].apply(this,n)}}function De(e){this.readyState=e,We.call(this,"readystatechange")}var Ge=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Ae(this,"onabort",null),Ae(this,"onerror",null),Ae(this,"onload",null),Ae(this,"onloadstart",null),Ae(this,"onprogress",null),Ae(this,"ontimeout",null),Ae(this,"onloadend",null),Ae(this,"onreadystatechange",null),Ae(this,"readyState",0),Ae(this,"response",null),Ae(this,"responseText",null),Ae(this,"responseType",""),Ae(this,"responseXML",null),Ae(this,"status",0),Ae(this,"statusText",""),Ae(this,"upload",{}),Ae(this,"withCredentials",!1),Le.set(this,{"content-type":"application/x-www-form-urlencoded"}),He.set(this,{})}var t,n,o;return t=e,(n=[{key:"abort",value:function(){var e=Re.get(this);e&&e.abort()}},{key:"getAllResponseHeaders",value:function(){var e=He.get(this);return Object.keys(e).map(function(t){return"".concat(t,": ").concat(e[t])}).join("\n")}},{key:"getResponseHeader",value:function(e){return He.get(this)[e]}},{key:"open",value:function(t,n){Ie.set(this,t),Me.set(this,n),De.call(this,e.OPENED)}},{key:"overrideMimeType",value:function(){}},{key:"send",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.readyState!==e.OPENED)throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");wx.request({data:n,url:Me.get(this),method:Ie.get(this),header:Le.get(this),responseType:this.responseType,success:function(n){var o=n.data,r=n.statusCode,i=n.header;if("string"!=typeof o&&!(o instanceof ArrayBuffer))try{o=JSON.stringify(o)}catch(e){o=o}if(t.status=r,He.set(t,i),We.call(t,"loadstart"),De.call(t,e.HEADERS_RECEIVED),De.call(t,e.LOADING),t.response=o,o instanceof ArrayBuffer){t.responseText="";for(var a=new Uint8Array(o),u=a.byteLength,c=0;c<u;c++)t.responseText+=String.fromCharCode(a[c])}else t.responseText=o;De.call(t,e.DONE),We.call(t,"load"),We.call(t,"loadend")},fail:function(e){var n=e.errMsg;-1!==n.indexOf("abort")?We.call(t,"abort"):We.call(t,"error",n),We.call(t,"loadend")}})}},{key:"setRequestHeader",value:function(e,t){var n=Le.get(this);n[e]=t,Le.set(this,n)}}])&&Ce(t.prototype,n),o&&Ce(t,o),e}();function Be(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Ae(Ge,"UNSEND",0),Ae(Ge,"OPENED",1),Ae(Ge,"HEADERS_RECEIVED",2),Ae(Ge,"LOADING",3),Ae(Ge,"DONE",4);var Ve=new WeakMap,Fe=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Ue(this,"binaryType",""),Ue(this,"bufferedAmount",0),Ue(this,"extensions",""),Ue(this,"onclose",null),Ue(this,"onerror",null),Ue(this,"onmessage",null),Ue(this,"onopen",null),Ue(this,"protocol",""),Ue(this,"readyState",3),"string"!=typeof t||!/(^ws:\/\/)|(^wss:\/\/)/.test(t))throw new TypeError("Failed to construct 'WebSocket': The URL '".concat(t,"' is invalid"));this.url=t,this.readyState=e.CONNECTING;var r=wx.connectSocket({url:t,protocols:Array.isArray(o)?o:[o]});return Ve.set(this,r),r.onClose(function(t){n.readyState=e.CLOSED,"function"==typeof n.onclose&&n.onclose(t)}),r.onMessage(function(e){"function"==typeof n.onmessage&&n.onmessage(e)}),r.onOpen(function(){n.readyState=e.OPEN,"function"==typeof n.onopen&&n.onopen()}),r.onError(function(e){"function"==typeof n.onerror&&n.onerror(new Error(e.errMsg))}),this}var t,n,o;return t=e,(n=[{key:"close",value:function(t,n){this.readyState=e.CLOSING,Ve.get(this).close({code:t,reason:n})}},{key:"send",value:function(e){if("string"!=typeof e&&!(e instanceof ArrayBuffer))throw new TypeError("Failed to send message: The data ".concat(e," is invalid"));Ve.get(this).send({data:e})}}])&&Be(t.prototype,n),o&&Be(t,o),e}();Ue(Fe,"CONNECTING",0),Ue(Fe,"OPEN",1),Ue(Fe,"CLOSING",2),Ue(Fe,"CLOSED",3);var Xe=Fe;function qe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var ze=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"construct",value:function(){}}])&&qe(t.prototype,n),o&&qe(t,o),e}(),Ke={get length(){return wx.getStorageInfoSync().keys.length},key:function(e){return wx.getStorageInfoSync().keys[e]},getItem:function(e){return wx.getStorageSync(e)},setItem:function(e,t){return wx.setStorageSync(e,t)},removeItem:function(e){wx.removeStorageSync(e)},clear:function(){wx.clearStorageSync()}},Je={href:"game.js",reload:function(){}},Qe=new xe,Ye=GameGlobal;GameGlobal.__isAdapterInjected||(GameGlobal.__isAdapterInjected=!0,function(){if(Qe&&(Qe.addEventListener=void 0,Qe.removeEventListener=void 0),"devtools"===wx.getSystemInfoSync().platform){for(var e in o){var t=Object.getOwnPropertyDescriptor(Ye,e);t&&!0!==t.configurable||Object.defineProperty(window,e,{value:o[e]})}for(var n in Te){var r=Object.getOwnPropertyDescriptor(Ye.document,n);r&&!0!==r.configurable||Object.defineProperty(Ye.document,n,{value:Te[n]})}window.parent=window}else{for(var i in o)Ye[i]=o[i];Ye.window=o,window=Ye,window.top=window.parent=window}}())}]);
//# sourceMappingURL=game.js.map