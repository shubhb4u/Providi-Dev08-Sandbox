window,window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[7],{1188:function(i,t,n){!function(t){var e=n(1545),o={init:function(){t.register("ComponentAPI").dependencies("ElementsTether").asCtor(function(t){this.attach=t.attach,this.detach=t.detach})},services:["ElementsTether"],types:[]};n(2367),n(10).registerApi(o,e),i.exports=o}.call(this,n(2))},1545:function(t,e,o){t.exports=o(10).create()},2367:function(t,e,o){var i=o(1545),l=o(2368);i.register("ElementsTether").asCtor(function(t,n,r,i){this.attach=function(t,e,o){var i=r.generateGUID(),o=n.extend({element:t,target:e},a,o);return s[i]=new l(o),i},this.detach=function(t){var e,o=s[t];o&&(o.destroy(),e=o,(o=i.filter((e.target.getAttribute("class")||"").split(" "),function(t){return 0!==t.indexOf(e.options.classPrefix)}).join(" "))?e.target.setAttribute("class",o):e.target.removeAttribute("class"),delete s[t])};var s={},a={attachment:"middle center",targetAttachment:"middle center",classPrefix:"walkme-tether",constraints:[{to:"scrollParent"}]}}).dependencies("Consts, wmjQuery, CommonUtils, ArrayUtils")},2368:function(e,o,t){!function(G){var t;void 0===(t="function"==typeof(t=function(){"use strict";function i(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var O=void 0;void 0===O&&(O={modules:[]});var n=null;function s(t){var e,o,i,n=t.getBoundingClientRect(),r={};for(e in n)r[e]=n[e];try{t.ownerDocument===document||(o=t.ownerDocument.defaultView.frameElement)&&(i=s(o),r.top+=i.top,r.bottom+=i.top,r.left+=i.left,r.right+=i.left)}catch(t){}return r}function r(t){var e=(getComputedStyle(t)||{}).position,o=[];if("fixed"===e)return[t];for(var i=t;(i=i.parentNode)&&i&&1===i.nodeType;){var n=void 0;try{n=getComputedStyle(i)}catch(t){}if(null==n)return o.push(i),o;var r=n,s=r.overflow,a=r.overflowX,r=r.overflowY;/(auto|scroll|overlay)/.test(s+r+a)&&("absolute"!==e||0<=["relative","absolute","fixed"].indexOf(n.position))&&o.push(i)}return o.push(t.ownerDocument.body),t.ownerDocument!==document&&o.push(t.ownerDocument.defaultView),o}var t,a=(t=0,function(){return++t}),l={};function e(){n&&document.body.removeChild(n),n=null}function E(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i=s(t),t=function(){var t=n;t&&document.body.contains(t)||((t=document.createElement("div")).setAttribute("data-tether-id",a()),P(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),n=t);var e=t.getAttribute("data-tether-id");return void 0===l[e]&&(l[e]=s(t),k(function(){delete l[e]})),l[e]}();return i.top-=t.top,i.left-=t.left,void 0===i.width&&(i.width=document.body.scrollWidth-i.left-i.right),void 0===i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function x(t){return t.offsetParent||document.documentElement}var h=null;function A(){if(h)return h;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");P(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";t=t.offsetWidth;o===t&&(t=e.clientWidth),document.body.removeChild(e);t=o-t;return h={width:t,height:t}}function P(){var o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=[];return Array.prototype.push.apply(t,arguments),t.slice(1).forEach(function(t){if(t)for(var e in t)!{}.hasOwnProperty.call(t,e)||(o[e]=t[e])}),o}function f(e,t){void 0!==e.classList?t.split(" ").forEach(function(t){t.trim()&&e.classList.remove(t)}):(t=new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi"),t=p(e).replace(t," "),u(e,t))}function d(e,t){void 0!==e.classList?t.split(" ").forEach(function(t){t.trim()&&e.classList.add(t)}):(f(e,t),t=p(e)+" "+t,u(e,t))}function c(t,e){if(void 0!==t.classList)return t.classList.contains(e);t=p(t);return new RegExp("(^| )"+e+"( |$)","gi").test(t)}function p(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function u(t,e){t.setAttribute("class",e)}function T(e,o,t){t.forEach(function(t){-1===o.indexOf(t)&&c(e,t)&&f(e,t)}),o.forEach(function(t){c(e,t)||d(e,t)})}var g=[],k=function(t){g.push(t)},W=function(){for(var t=void 0;t=g.pop();)t()},m=((b=function(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t})(v,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];void 0===this.bindings&&(this.bindings={}),void 0===this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if(void 0!==this.bindings&&void 0!==this.bindings[t])if(void 0===e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if(void 0!==this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(1<o?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,r=r.once,a=void 0===a?this:a;s.apply(a,i),r?this.bindings[t].splice(e,1):++e}}}}]),v);function v(){o(this,v)}O.Utils={getActualBoundingClientRect:s,getScrollParents:r,getBounds:E,getOffsetParent:x,extend:P,addClass:d,removeClass:f,hasClass:c,updateClasses:T,defer:k,flush:W,uniqueId:a,Evented:m,getScrollBarSize:A,removeUtilElements:e};var S=function(t,e){if(Array.isArray(t))return t;if(G.iterator in Object(t))return function(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[G.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},b=function(t,e,o){return e&&w(t.prototype,e),o&&w(t,o),t},y=function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o,i=!1;null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(s)}n=Object.getPrototypeOf(n);if(null===n)return;t=n,e=r,o=s,i=!0,a=void 0}};function w(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}if(void 0===O)throw new Error("You must include the utils.js file before tether.js");var C=O.Utils,r=C.getScrollParents,E=C.getBounds,x=C.getOffsetParent,P=C.extend,d=C.addClass,f=C.removeClass,T=C.updateClasses,k=C.defer,W=C.flush,A=C.getScrollBarSize,e=C.removeUtilElements;var _,M,j,z=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),B=[],D=function(){B.forEach(function(t){t.position(!1)}),W()};function F(){return"object"==typeof performance&&"function"==typeof performance.now?performance.now():+new Date}function Y(){if(void 0!==M&&16<M)return M=Math.min(M-16,250),void(j=setTimeout(Y,250));void 0!==_&&F()-_<10||(null!=j&&(clearTimeout(j),j=null),_=F(),D(),M=F()-_)}j=M=_=null,"undefined"!=typeof window&&void 0!==window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,Y)});function L(t){var e=t.left,o=t.top;return{left:e=void 0!==N[t.left]?N[t.left]:e,top:o=void 0!==N[t.top]?N[t.top]:o}}var X={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},N={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"};function R(){for(var o={top:0,left:0},t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.forEach(function(t){var e=t.top,t=t.left;"string"==typeof e&&(e=parseFloat(e,10)),"string"==typeof t&&(t=parseFloat(t,10)),o.top+=e,o.left+=t}),o}function U(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}function V(t){return t=t.split(" "),{top:(t=S(t,2))[0],left:t[1]}}var I=V,b=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(q,m),b(q,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return void 0!==e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]||arguments[1];this.options=P({offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},t);var i=this.options,n=i.element,t=i.target,i=i.targetModifier;if(this.element=n,this.target=t,this.targetModifier=i,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if(void 0===e[t])throw new Error("Tether Error: Both element and target must be defined");void 0!==e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),d(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&d(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=I(this.options.targetAttachment),this.attachment=I(this.options.attachment),this.offset=V(this.options.offset),this.targetOffset=V(this.options.targetOffset),void 0!==this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=r(this.target),!1!==this.options.enabled&&this.enable(o)}},{key:"getTargetBounds",value:function(){if(void 0===this.targetModifier)return E(this.target);if("visible"===this.targetModifier)return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:((r={height:(t=E(this.target)).height,width:t.width,top:t.top,left:t.left}).height=Math.min(r.height,t.height-(pageYOffset-t.top)),r.height=Math.min(r.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),r.height=Math.min(innerHeight,r.height),r.height-=2,r.width=Math.min(r.width,t.width-(pageXOffset-t.left)),r.width=Math.min(r.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),r.width=Math.min(innerWidth,r.width),r.width-=2,r.top<pageYOffset&&(r.top=pageYOffset),r.left<pageXOffset&&(r.left=pageXOffset),r);if("scroll-handle"===this.targetModifier){var t=void 0,e=this.target;t=e===document.body?(e=document.documentElement,{left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):E(e);var o=getComputedStyle(e),i=0;(e.scrollWidth>e.clientWidth||0<=[o.overflow,o.overflowX].indexOf("scroll")||this.target!==document.body)&&(i=15);var n=t.height-parseFloat(o.borderTopWidth)-parseFloat(o.borderBottomWidth)-i,r={width:15,height:.975*n*(n/e.scrollHeight),left:t.left+t.width-parseFloat(o.borderLeftWidth)-15},i=0;n<408&&this.target===document.body&&(i=-11e-5*Math.pow(n,2)-.00727*n+22.58),this.target!==document.body&&(r.height=Math.max(r.height,24));e=this.target.scrollTop/(e.scrollHeight-n);return r.top=e*(n-r.height-i)+t.top+parseFloat(o.borderTopWidth),this.target===document.body&&(r.height=Math.max(r.height,24)),r}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return void 0===this._cache&&(this._cache={}),void 0===this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0];!1!==this.options.addTargetClasses&&d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(t){t!==e.target.ownerDocument&&t.addEventListener("scroll",e.position)}),t&&this.position()}},{key:"disable",value:function(){var e=this;f(this.target,this.getClass("enabled")),f(this.element,this.getClass("enabled")),this.enabled=!1,void 0!==this.scrollParents&&this.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.position)})}},{key:"destroy",value:function(){var o=this;this.disable(),B.forEach(function(t,e){t===o&&B.splice(e,1)}),0===B.length&&e()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;void 0!==this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),void 0===this._addAttachClasses&&(this._addAttachClasses=[]);var i=this._addAttachClasses;t.top&&i.push(this.getClass("element-attached")+"-"+t.top),t.left&&i.push(this.getClass("element-attached")+"-"+t.left),e.top&&i.push(this.getClass("target-attached")+"-"+e.top),e.left&&i.push(this.getClass("target-attached")+"-"+e.left);var n=[];["left","top","bottom","right","middle","center"].forEach(function(t){n.push(o.getClass("element-attached")+"-"+t),n.push(o.getClass("target-attached")+"-"+t)}),k(function(){void 0!==o._addAttachClasses&&(T(o.element,o._addAttachClasses,n),!1!==o.options.addTargetClasses&&T(o.target,o._addAttachClasses,n),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=(y=this.targetAttachment,a=this.attachment,r=y.left,y=y.top,{left:r="auto"===r?X[a.left]:r,top:y="auto"===y?H[a.top]:y});this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return E(t.element)}),n=i.width,r=i.height;0===n&&0===r&&void 0!==this.lastSize?(n=(w=this.lastSize).width,r=w.height):this.lastSize={width:n,height:r};for(var s=this.cache("target-bounds",function(){return t.getTargetBounds()}),a=s,l=U(L(this.attachment),{width:n,height:r}),h=U(L(o),a),f=U(this.offset,{width:n,height:r}),d=U(this.targetOffset,a),l=R(l,f),h=R(h,d),c=s.left+h.left-l.left,p=s.top+h.top-l.top,u=0;u<O.modules.length;++u){var g=O.modules[u].position.call(this,{left:c,top:p,targetAttachment:o,targetPos:s,elementPos:i,offset:l,targetOffset:h,manualOffset:f,manualTargetOffset:d,scrollbarSize:C,attachment:this.attachment});if(!1===g)return!1;void 0!==g&&"object"==typeof g&&(p=g.top,c=g.left)}var m,v,b,y={page:{top:p,left:c},viewport:{top:p-pageYOffset,bottom:pageYOffset-p-r+innerHeight,left:c-pageXOffset,right:pageXOffset-c-n+innerWidth}},w=this.target.ownerDocument,a=w.defaultView,C=void 0;return a.innerHeight>w.documentElement.clientHeight&&(C=this.cache("scrollbar-size",A),y.viewport.bottom-=C.height),a.innerWidth>w.documentElement.clientWidth&&(C=this.cache("scrollbar-size",A),y.viewport.right-=C.width),-1!==["","static"].indexOf(w.body.style.position)&&-1!==["","static"].indexOf(w.body.parentElement.style.position)||(y.page.bottom=w.body.scrollHeight-p-r,y.page.right=w.body.scrollWidth-c-n),void 0!==this.options.optimizations&&!1!==this.options.optimizations.moveElement&&void 0===this.targetModifier&&(m=t.cache("target-offsetparent",function(){return x(t.target)}),r=t.cache("target-offsetparent-bounds",function(){return E(m)}),v=getComputedStyle(m),n=r,b={},["Top","Left","Bottom","Right"].forEach(function(t){b[t.toLowerCase()]=parseFloat(v["border"+t+"Width"])}),r.right=w.body.scrollWidth-r.left-n.width+b.right,r.bottom=w.body.scrollHeight-r.top-n.height+b.bottom,y.page.top>=r.top+b.top&&y.page.bottom>=r.bottom&&y.page.left>=r.left+b.left&&y.page.right>=r.right&&(w=m.scrollTop,n=m.scrollLeft,y.offset={top:y.page.top-r.top+w-b.top,left:y.page.left-r.left+n-b.left})),this.move(y),this.history.unshift(y),3<this.history.length&&this.history.pop(),e&&W(),!0}}},{key:"move",value:function(e){var n=this;if(void 0!==this.element.parentNode){var t,o={};for(t in e)for(var i in o[t]={},e[t]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if(void 0!==a[t]&&!function(t,e,o){return e<=t+(o=arguments.length<=2||void 0===o?1:o)&&t-o<=e}(a[t][i],e[t][i])){r=!0;break}}r||(o[t][i]=!0)}var l,h,f={top:"",left:"",right:"",bottom:""},d=function(t,e){var o,i;!1!==(void 0!==n.options.optimizations?n.options.optimizations.gpu:null)?(i=o=void 0,o=t.top?(f.top=0,e.top):(f.bottom=0,-e.bottom),i=t.left?(f.left=0,e.left):(f.right=0,-e.right),"number"==typeof window.devicePixelRatio&&devicePixelRatio%1==0&&(i=Math.round(i*devicePixelRatio)/devicePixelRatio,o=Math.round(o*devicePixelRatio)/devicePixelRatio),f[z]="translateX("+i+"px) translateY("+o+"px)","msTransform"!==z&&(f[z]+=" translateZ(0)")):(t.top?f.top=e.top+"px":f.bottom=e.bottom+"px",t.left?f.left=e.left+"px":f.right=e.right+"px")},c=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(f.position="absolute",d(o.page,e.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(f.position="fixed",d(o.viewport,e.viewport)):void 0!==o.offset&&o.offset.top&&o.offset.left?function(){f.position="absolute";var t=n.cache("target-offsetparent",function(){return x(n.target)});x(n.element)!==t&&k(function(){n.element.parentNode.removeChild(n.element),t.appendChild(n.element)}),d(o.offset,e.offset),c=!0}():(f.position="absolute",d({top:!0,left:!0},e.page)),!c)if(this.options.bodyElement)this.element.parentNode!==this.options.bodyElement&&this.options.bodyElement.appendChild(this.element);else{for(var p=!0,u=this.element.parentNode;u&&1===u.nodeType&&"BODY"!==u.tagName&&(h=void 0,((h=(l=u).ownerDocument).fullscreenElement||h.webkitFullscreenElement||h.mozFullScreenElement||h.msFullscreenElement)!==l);){if("static"!==getComputedStyle(u).position){p=!1;break}u=u.parentNode}p||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var g={},m=!1;for(i in f){var v=f[i];this.element.style[i]!==v&&(m=!0,g[i]=v)}m&&k(function(){P(n.element.style,g),n.trigger("repositioned")})}}}]),q);function q(t){var e=this;o(this,q),y(Object.getPrototypeOf(q.prototype),"constructor",this).call(this),this.position=this.position.bind(this),B.push(this),this.history=[],this.setOptions(t,!1),O.modules.forEach(function(t){void 0!==t.initialize&&t.initialize.call(e)}),this.position()}b.modules=[],O.position=D;var b=P(b,O),S=function(t,e){if(Array.isArray(t))return t;if(G.iterator in Object(t))return function(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[G.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},E=(C=O.Utils).getBounds,P=C.extend,T=C.updateClasses,k=C.defer,J=["left","top","right","bottom"];O.modules.push({position:function(t){var d=this,c=t.top,p=t.left,u=t.targetAttachment;if(!this.options.constraints)return!0;var t=this.cache("element-bounds",function(){return E(d.element)}),g=t.height,m=t.width;0===m&&0===g&&void 0!==this.lastSize&&(e=this.lastSize,m=e.width,g=e.height);var e=this.cache("target-bounds",function(){return d.getTargetBounds()}),v=e.height,b=e.width,o=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,t=t.pinnedClass;e&&o.push(e),t&&o.push(t)}),o.forEach(function(e){["left","top","right","bottom"].forEach(function(t){o.push(e+"-"+t)})});var y=[],w=P({},u),C=P({},this.attachment);return this.options.constraints.forEach(function(t){var e=t.to,o=t.attachment,i=t.pin,n=void 0,r=void 0;n=0<=(o=void 0===o?"":o).indexOf(" ")?(t=o.split(" "),r=(t=S(t,2))[0],t[1]):r=o;var s,a,l,a=(o=d,"scrollParent"===(s=e)?s=o.scrollParents[0]:"window"===s&&(s=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),void 0!==(s=s===document?s.documentElement:s).nodeType&&(e=E(a=s),o=e,l=getComputedStyle(s),s=[o.left,o.top,e.width+o.left,e.height+o.top],a.ownerDocument!==document&&(a=a.ownerDocument.defaultView,s[0]+=a.pageXOffset,s[1]+=a.pageYOffset,s[2]+=a.pageXOffset,s[3]+=a.pageYOffset),J.forEach(function(t,e){"Top"===(t=t[0].toUpperCase()+t.substr(1))||"Left"===t?s[e]+=parseFloat(l["border"+t+"Width"]):s[e]-=parseFloat(l["border"+t+"Width"])})),s);"target"!==r&&"both"!==r||(c<a[1]&&"top"===w.top&&(c+=v,w.top="bottom"),c+g>a[3]&&"bottom"===w.top&&(c-=v,w.top="top")),"together"===r&&("top"===w.top&&("bottom"===C.top&&c<a[1]?(c+=v,w.top="bottom",c+=g,C.top="top"):"top"===C.top&&c+g>a[3]&&c-(g-v)>=a[1]&&(c-=g-v,w.top="bottom",C.top="bottom")),"bottom"===w.top&&("top"===C.top&&c+g>a[3]?(c-=v,w.top="top",c-=g,C.top="bottom"):"bottom"===C.top&&c<a[1]&&c+(2*g-v)<=a[3]&&(c+=g-v,w.top="top",C.top="top")),"middle"===w.top&&(c+g>a[3]&&"top"===C.top?(c-=g,C.top="bottom"):c<a[1]&&"bottom"===C.top&&(c+=g,C.top="top"))),"target"!==n&&"both"!==n||(p<a[0]&&"left"===w.left&&(p+=b,w.left="right"),p+m>a[2]&&"right"===w.left&&(p-=b,w.left="left")),"together"===n&&(p<a[0]&&"left"===w.left?"right"===C.left?(p+=b,w.left="right",p+=m,C.left="left"):"left"===C.left&&(p+=b,w.left="right",p-=m,C.left="right"):p+m>a[2]&&"right"===w.left?"left"===C.left?(p-=b,w.left="left",p-=m,C.left="right"):"right"===C.left&&(p-=b,w.left="left",p+=m,C.left="left"):"center"===w.left&&(p+m>a[2]&&"left"===C.left?(p-=m,C.left="right"):p<a[0]&&"right"===C.left&&(p+=m,C.left="left"))),"element"!==r&&"both"!==r||(c<a[1]&&"bottom"===C.top&&(c+=g,C.top="top"),c+g>a[3]&&"top"===C.top&&(c-=g,C.top="bottom")),"element"!==n&&"both"!==n||(p<a[0]&&("right"===C.left?(p+=m,C.left="left"):"center"===C.left&&(p+=m/2,C.left="left")),p+m>a[2]&&("left"===C.left?(p-=m,C.left="right"):"center"===C.left&&(p-=m/2,C.left="right"))),"string"==typeof i?i=i.split(",").map(function(t){return t.trim()}):!0===i&&(i=["top","left","right","bottom"]);var h,f,i=i||[],r=[],n=[];c<a[1]&&(0<=i.indexOf("top")?(c=a[1],r.push("top")):n.push("top")),c+g>a[3]&&(0<=i.indexOf("bottom")?(c=a[3]-g,r.push("bottom")):n.push("bottom")),p<a[0]&&(0<=i.indexOf("left")?(p=a[0],r.push("left")):n.push("left")),p+m>a[2]&&(0<=i.indexOf("right")?(p=a[2]-m,r.push("right")):n.push("right")),r.length&&(h=(h=void 0)!==d.options.pinnedClass?d.options.pinnedClass:d.getClass("pinned"),y.push(h),r.forEach(function(t){y.push(h+"-"+t)})),n.length&&(f=(f=void 0)!==d.options.outOfBoundsClass?d.options.outOfBoundsClass:d.getClass("out-of-bounds"),y.push(f),n.forEach(function(t){y.push(f+"-"+t)})),(0<=r.indexOf("left")||0<=r.indexOf("right"))&&(C.left=w.left=!1),(0<=r.indexOf("top")||0<=r.indexOf("bottom"))&&(C.top=w.top=!1),w.top===u.top&&w.left===u.left&&C.top===d.attachment.top&&C.left===d.attachment.left||(d.updateAttachClasses(C,w),d.trigger("update",{attachment:C,targetAttachment:w}))}),k(function(){!1!==d.options.addTargetClasses&&T(d.target,y,o),T(d.element,y,o)}),{top:c,left:p}}});var E=(C=O.Utils).getBounds,T=C.updateClasses,k=C.defer;O.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return E(e.element)}),t=n.height,n=n.width,r=this.getTargetBounds(),s=o+t,a=i+n,l=[];o<=r.bottom&&s>=r.top&&["left","right"].forEach(function(t){var e=r[t];e!==i&&e!==a||l.push(t)}),i<=r.right&&a>=r.left&&["top","bottom"].forEach(function(t){var e=r[t];e!==o&&e!==s||l.push(t)});var h=[],f=[];return h.push(this.getClass("abutted")),["left","top","right","bottom"].forEach(function(t){h.push(e.getClass("abutted")+"-"+t)}),l.length&&f.push(this.getClass("abutted")),l.forEach(function(t){f.push(e.getClass("abutted")+"-"+t)}),k(function(){!1!==e.options.addTargetClasses&&T(e.target,f,h),T(e.element,f,h)}),!0}});S=function(t,e){if(Array.isArray(t))return t;if(G.iterator in Object(t))return function(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[G.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};return O.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift,n=void 0,r=void 0;return r="string"==typeof(i="function"==typeof this.options.shift?this.options.shift.call(this,{top:e,left:o}):i)?((i=i.split(" "))[1]=i[1]||i[0],n=(t=S(i,2))[0],r=t[1],n=parseFloat(n,10),parseFloat(r,10)):(n=i.top,i.left),{top:e+=n,left:o+=r}}}}),b})?t.apply(o,[]):t)||(e.exports=t)}.call(this,t(28).wmSymbol)}}]);