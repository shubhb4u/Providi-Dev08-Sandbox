window,(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[25],{1194:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"getData",function(){return s});var i=e(16),o=e(2564),a=e(1573),u=e(9),c={playBf:function(t){return{bfId:t.itemId,playBfFromBeginning:!!t.playFromBeginning,NodeId:t.subItemId}},playWt:function(t){return{wtId:t.itemId,playWtFromBeginning:!!t.playFromBeginning,StepId:t.subItemId}},playContent:function(t){return{contentId:t.itemId}},playShuttle:function(t){return{shuttleId:t.itemId}},playSurvey:function(t){return{surveyId:t.itemId}},playActionBot:function(t){return{actionBotId:t.itemId,startConversion:!!t.subItemId,actionBotConversationId:t.subItemId}}},s=function(t){var n,e=t.Action;return e.type="None"===e.type?"none":e.type,e.args=u.default.extend({},e.args,(n=e.type,(n=c[n])?n(e):void 0),{buttonId:t.Id,buttonText:t.Content&&t.Content.Text,buttonType:"button"}),e},l=e(1574),f=e(1576),d=e(1577),v=e(2565);e.d(n,"component",function(){return h}),e.d(n,"init",function(){return p});var h={instances:[{name:"AccessibilityAttributesSetter",instance:o},{name:"FontStyleTranslator",instance:a},{name:"VisualDesignActionsHandler",instance:l},{name:"FontsLoader",instance:f},{name:"ActionDataAdapter",instance:r},{name:"OverlayWrapper",instance:d.a},{name:"VisualDesignComponent",instance:v.a}]},p=function(){Object(i.a)(h)}},1443:function(t,n,e){"use strict";e.r(n),e.d(n,"translate",function(){return u});var o=e(0),a=e(26),u=function(t,n,e){var r=((e=e?e+"-":"")+n).replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=t[n];return i&&"object"==typeof i?Object(a.reduce)(Object.keys(i),function(t,n){return Object(o.__assign)(Object(o.__assign)({},t),u(i,n,r))},{}):((n={})[r]=i,n)}},1573:function(t,n,e){"use strict";e.r(n),e.d(n,"getFontFamilyWithFallback",function(){return r}),e.d(n,"translate",function(){return i});var r=function(t){var n="arial";return t?t.replace(/([,;\s?])*$/,", "+n):n},i=function(t){var n=t.font,t={"text-align":n.align,"font-weight":n.bold?"bold":"normal",color:n.color,"font-family":r(n.family),"font-style":n.italics?"italic":"normal","font-size":n.size+"px"};return wmjQuery.extend(t,function(){switch(n.align){case"left":return o("flex-start","start");case"right":return o("flex-end","end");default:return o("center","center")}}()),n.underline&&(t["text-decoration"]="underline"),t};function o(t,n){return{"justify-content":t,"-ms-flex-pack":n}}},1574:function(t,n,e){"use strict";e.r(n),e.d(n,"addESCPressEvents",function(){return i}),e.d(n,"mapLinksActions",function(){return o}),e.d(n,"addClickEvents",function(){return a});var u=e(9),c=e(32),s=e(1),l=e(37),r=e(1575),i=function(t){var n={keyCode:s.KEY_CODES.ESC,eventName:s.EVENTS.Drawables.KeypressEsc,params:{Action:{type:"destroy"}}};Object(r.a)(t,"keydown",n,function(t){return n.keyCode===t.keyCode})},o=function(t){for(var n=s.RICH_TEXT_EDITOR.ACTION_LINK_ATTR,e=t.querySelectorAll("["+n+"]"),r=0;e&&r<e.length;r++){var i=e[r],o=i.getAttribute(n),a=Object(c.secureEvalJSON)(o),o=Object(l.decodeHTMLEntities)(a.data),o=Object(c.secureEvalJSON)(o);f(i,{Action:u.default.extend({preventDefault:!0},o),Content:{Text:a.text}}),i.removeAttribute(n)}},a=function(t,n){o(t),f(t,n)};function f(t,n){n.Action&&Object(r.a)(t,"click",{params:n})}},1575:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var a=e(9),u=e(1),r=function(t,n,e,r){var i=e.eventName||u.EVENTS.Drawables.ActionClicked,o=Object(a.default)(t);o.on(n,function(t){var n;r&&!r(t)||(null!==(n=null===(n=e.params)||void 0===n?void 0:n.Action)&&void 0!==n&&n.preventDefault&&t.preventDefault(),o.trigger(i,e.params))})}},1576:function(t,s,l){"use strict";l.r(s),function(r,i){l.d(s,"load",function(){return n}),l.d(s,"waitForAllFonts",function(){return e});var t,o=l(9),a=l(3),u=((t={})["Open Sans"]={id:"opensans",name:"opensans",url:"/player/resources/fonts/opensans"},t["walkme-opensans"]={id:"opensans",name:"opensans",url:"/player/resources/fonts/opensans"},t["walkme-poppins"]={id:"poppins",name:"poppins",url:"/player/resources/fonts/poppins"},t["walkme-proxima-nova"]={id:"proxima-nova",name:"proxima-nova",url:"/player/resources/fonts/proxima-nova"},t["walkme-opensans-regular"]={id:"opensans-regular",name:"opensans-regular",url:"/player/resources/fonts/opensans-regular"},t),c={},n=function(t){for(var e=(t=Object(a.isFeatureEnabled)("opensansRegularW5G")?t.replace(/walkme-opensans|Open Sans/gi,"walkme-opensans-regular"):t).split(","),n=0;n<e.length;n++)!function(t){var n=u[e[t].trim()];if(!n)return;c[n.id]=c[n.id]||new i(function(t){r.get("ResourceManager").font(n,Object(o.default)("head"),t,t)})}(n);return t},e=function(){var t=Object.keys(c).map(function(t){return c[t]});return i.all(t)}}.call(this,l(2),l(12))},1577:function(t,i,o){"use strict";!function(n){var r=o(1),t=(e.prototype.t=function(){var t=this.o(this.u.visualDesign);this.v=n.get("PopupUIUtil"),this.v.setSettings(t),this.v.setUiObject(this.u.$element)},e.prototype.removeOverlay=function(){this.v.removeOverlay()},e.prototype.showOverlay=function(){var t=this.v.getOverlay();t&&(this.p(),t.show())},e.prototype.o=function(t){var n={},e=t.Style;return 0<(null===(t=null==e?void 0:e.backcover)||void 0===t?void 0:t.Style.opacity)&&(e=e.backcover.Style,n.overlay={opct:e.opacity,color:e.background}),n},e.prototype.p=function(){var t=this.u.$element[0].style,n=Number(t.zIndex),e=t.getPropertyPriority("z-index");n===r.VISUAL_DESIGN_DRAWABLE.DefaultZIndex&&t.setProperty("z-index",(n+1).toString(),e)},e);function e(t){this.u=t,this.t()}i.a=t}.call(this,o(2))},1578:function(t,n,e){"use strict";!function(l){e.d(n,"a",function(){return t});var f=e(9),d=e(37),v=e(2785),h=e(1),p={Text:"span",Button:"button",Image:"img",Shape:"div","Web-View":"iframe",Canvas:"div","Rich-Text":"div","Flex-Container":"div","Flex-Canvas":"div"},t=function(t,n,e){var r,i,o,a,u=t.Type,c=document.createElement(p[u]),s=t.Id;return s&&c.setAttribute("id",s),c.setAttribute("class","wm-visual-design-"+u.toLowerCase()),s=c,(u=t.Content)&&(r=s,(i=u).Quill?(o=r,a=i.Quill,n=n,l.has("RichTextEditorConverter")&&(function(t,n){for(var e=n.length,r=0;r<e;r++)t.appendChild(n[0])}(o,l.get("RichTextEditorConverter").getRichTextElement(a.ops,n).childNodes),o.className+=(o.className?" ":"")+h.DEFAULT_CLASSES.IGNORE_CSS_RESET)):(r=r,(i=i.Text)&&(i=Object(d.decodeHTMLEntities)(i),i=document.createTextNode(i),r.appendChild(i))),r=s,(i=(i=u).Url||i.ImageSource)&&!/^\s*javascript\s*:/.test(i.toLowerCase())&&r.setAttribute("src",i),function(t,n){if(n)for(var e in n)t.setAttribute(e,n[e])}(s,u.Attributes)),r=c,i=t.Style,s=e,f.default.extend(s={position:s?"static":"absolute","box-sizing":"border-box"},i),l.get("CssAttributeSetter").set(r,s),u=c,e=t,(t=Object(v.a)(u.tagName))&&t.adjust(u,e),c}}.call(this,e(2))},1579:function(t,c,s){"use strict";!function(e){var r=s(2570),i=s(2571),o=s(3),a=null,t=["top","left","right","bottom"],n=(u.prototype.setStates=function(){if(this.O){for(var t=[],n=0;n<this.M.length;n++){var e=this.M[n],r=this.O.style[e];r&&t.push({property:e,value:r})}(t.length||this.C)&&(this.S=this.A(t),this.T(),this.F())}},u.prototype.N=function(t){var n=this.B(t,-1),e=this.R(t,-1);return n===e&&(n=this.B(t,1),e=this.R(t,1)),{hover:n,click:e}},u.prototype.D=function(t){for(var n={hover:{},click:{},original:{}},e=0;e<t.length;e++){var r=t[e],i=this.N(r.value),o=r.property;n.click[o]=i.click,n.hover[o]=i.hover,n.original[o]=r.value}return n},u.prototype.F=function(){var e=this;this.q("mousedown",function(){a=e.O,e.V(e.S.click)}),this.q("mouseleave",function(){e.V(e.S.original,!0)}),this.q("mouseup",function(){a=null,e.V(e.S.hover)}),this.q("mouseenter",function(t){var n=e.S.hover;t.buttons&&e.O.isSameNode(a)&&(n=e.S.click),e.V(n)})},u.prototype.A=function(t){var n=this.D(t);if(this.C)for(var e in this.C){var r=this.C[e]||{};this.W&&Object(i.a)(r),Object.keys(r).length&&(n[e]=r)}return n},u.prototype.q=function(t,n){return this.O.addEventListener(t,n)},u.prototype.V=function(t,n){void 0===n&&(n=!1),this.L?Object(i.c)(t,this.O,n,this.L):e.get("CssAttributeSetter").update(this.O,t)},u.prototype.T=function(){var n=this;t.forEach(function(t){delete n.S.original[t]})},u.prototype.B=function(t,n){return r.a.pSBC(.1*n,t)},u.prototype.R=function(t,n){return r.a.pSBC(.2*n,t)},u.prototype.G=function(){return this.O.className.includes("wm-visual-design-rich-text")},u);function u(t,n,e){void 0===n&&(n=["background-color"]),this.O=t=void 0===t?void 0:t,this.M=n,this.C=e,this.W=Object(o.isFeatureEnabled)("visualDesignLauncher")&&this.G(),this.L=this.W&&Object(i.b)(t)}c.a=n}.call(this,s(2))},1580:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t){return t.customValue||t.value+t.unit}},2564:function(t,r,i){"use strict";i.r(r),function(t){i.d(r,"set",function(){return n});var o=function(){return t.get("AccessibilityGeneralManager")},a="UntitledIframe",e="aria-label",n=function(t,n){var e={};return wmjQuery.extend(!0,e,t),function t(n,e){!function(t,n){var e;switch(t.Type){case"Canvas":e=n,u(c(t),e);break;case"Web-View":!function(t){(t=c(t)).title||(t.title=o().getValue(a))}(t);break;case"Image":!function(t){(t=c(t)).alt||(t.alt="")}(t);break;case"XButton":u(c(t),"Close")}}(n,e);var r=n.ChildElements;if(r)for(var i=0;i<r.length;i++)t(r[i])}(e.RootVisualElement,n),e};function u(t,n){t[e]||(n=o().getValue(n))&&(t[e]=n)}function c(t){var n;return(n=t).Content||(n.Content={}),(t=n.Content).Attributes||(t.Attributes={}),t.Attributes}}.call(this,i(2))},2565:function(t,e,c){"use strict";!function(r){var i=c(9),o=c(1577),a=c(2566),u=c(2780),t=(n.prototype.show=function(){this.P.showOverlay(),this.$.show()},n.prototype.remove=function(){this.P.removeOverlay(),this.$.remove()},n.prototype.hide=function(){this.$.hide()},n.prototype.on=function(t,n){this.$.on(t,n)},n.prototype.fadeIn=function(t,n){var e=this;this.P.showOverlay(),r.get("DOMSessionManager").mutate(function(){e.$.stop(!0,!1).hide().fadeIn(t,n)})},n.prototype.fadeOut=function(t,n){this.$.fadeOut(t,n)},n.prototype.appendToBody=function(){r.get("TopContainerProvider").getTopContainer().append(this.$)},n.prototype.getVisualDesignElement=function(){return this.$[0]},n.prototype.H=function(){var n=this.$[0];document.body.appendChild(n);var t=getComputedStyle(n),e=t.width,r=t.height;(t=this.X.RootVisualElement.Style.size).width.customValue=e,t.height.customValue=r;var r=this.X.RootVisualElement.Style.position,i=Object(u.a)({RootVisualElement:{Style:{size:t,position:r}}});["top","right","bottom","left"].forEach(function(t){return void 0!==i.RootVisualElement.Style[t]&&n.style.setProperty(t,i.RootVisualElement.Style[t],"important")}),document.body.removeChild(n)},n);function n(t){this.X=t;var n,e=Object(u.a)(t);this.$=Object(i.default)(Object(a.a)(e)),null!==(n=e.RootVisualElement)&&void 0!==n&&n.Style&&(e=(n=e.RootVisualElement.Style).height,n=n.width,(isNaN(parseFloat(e))||isNaN(parseFloat(n)))&&this.H()),this.P=new o.a({visualDesign:t,$element:this.$})}e.a=t}.call(this,c(2))},2566:function(t,e,r){"use strict";!function(a){r.d(e,"a",function(){return n});var u=r(0),c=r(9),t=r(1),s=r(2567),l=r(2574),f=r(2575),d={"z-index":t.VISUAL_DESIGN_DRAWABLE.DefaultZIndex},v={overflow:"hidden","box-sizing":"content-box","white-space":"pre-wrap","overflow-wrap":"break-word","word-wrap":"break-word"},n=function(t){var n,e=(e=t.Style.position,{outerStyle:Object(u.__assign)(Object(u.__assign)({},d),{position:"string"==typeof e?e:"fixed"}),innerStyle:Object(u.__assign)({},v)}),r=c.default.extend({},e.innerStyle,e.outerStyle),i=t.RootVisualElement.Style;for(n in r)void 0===i[n]&&(i[n]=r[n]);var o=Object(s.a)(t),e=t;return(t=o).id="walkme-visual-design-"+(e.Id||a.get("CommonUtils").generateGUID()),t.className+=" walkme-to-remove",e.extraClasses&&(t.className+=" "+e.extraClasses.join(" ")),Object(l.a)(o),(new f.a).waitForAll(o).then(function(){var t,n=o;(t=document.createEvent("Event")).initEvent("all-images-loaded",!0,!0),n.dispatchEvent(t)}),o}}.call(this,r(2))},2567:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var c=e(1578),s=e(2573),l=e(1574),f=e(1576),r=function(t){var n=function t(n,e,r){r=r||n.Style&&"flex"===n.Style.display,n.Style["font-family"]&&(n.Style["font-family"]=Object(f.load)(n.Style["font-family"]));var i=(0,("XButton"===n.Type?s:c).a)(n,e,r),o=n.ChildElements;if(o)for(var a=0;a<o.length;a++){var u=t(o[a],e,r);i.appendChild(u)}return Object(l.addClickEvents)(i,n),i}(t.RootVisualElement,t.Style||{});return null!==(t=t.Style.xButton)&&void 0!==t&&t.enabled&&n.appendChild(Object(s.b)()),Object(l.addESCPressEvents)(n),n}},2568:function(t,e,r){"use strict";r.r(e),function(n){r.d(e,"adjust",function(){return t});var t=function(t){n.get("CssAttributeSetter").update(t,{display:"flex","align-items":"center"})}}.call(this,r(2))},2569:function(t,n,i){"use strict";i.r(n),function(e){i.d(n,"adjust",function(){return t});var r=i(1579),t=function(t,n){(n.HoverStyle||n.ClickedStyle)&&(new r.a(t,["background-color","fill"],n?{hover:n.HoverStyle,click:n.ClickedStyle,original:n.Style}:null).setStates(),e.get("CssAttributeSetter").update(t,{cursor:"pointer"}))}}.call(this,i(2))},2570:function(t,n,e){"use strict";var r=(i.prototype.pSBC=function(t,n,e,r){var i,o,a,u,c,s=parseInt,l=Math.round,f="string"==typeof e;return"number"!=typeof t||t<-1||1<t||"string"!=typeof n||"r"!==n[0]&&"#"!==n[0]||e&&!f?null:(this.Z||(this.Z=function(t){var n=t.length,e={};if(9<n){if(n=(t=t.split(",")).length,i=t[0],o=t[1],a=t[2],f=t[3],n<3||4<n)return null;e.r=s("a"===i[3]?i.slice(5):i.slice(4)),e.g=s(o),e.b=s(a),e.a=f?parseFloat(f):-1}else{if(8===n||6===n||n<4)return null;n<6&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(4<n?t[4]+t[4]:"")),t=s(t.slice(1),16),9===n||5===n?(e.r=t>>24&255,e.g=t>>16&255,e.b=t>>8&255,e.a=l((255&t)/.255)/1e3):(e.r=t>>16,e.g=t>>8&255,e.b=255&t,e.a=-1)}return e}),c=9<n.length,c=f?9<e.length||"c"===e&&!c:c,u=this.Z(n),n=t<0,e=e&&"c"!==e?this.Z(e):n?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},n=1-(t=n?-1*t:t),u&&e?(a=r?(i=Math.round(n*u.r+t*e.r),o=Math.round(n*u.g+t*e.g),Math.round(n*u.b+t*e.b)):(i=Math.round(Math.pow(n*Math.pow(u.r,2)+t*Math.pow(e.r,2),.5)),o=Math.round(Math.pow(n*Math.pow(u.g,2)+t*Math.pow(e.g,2),.5)),Math.round(Math.pow(n*Math.pow(u.b,2)+t*Math.pow(e.b,2),.5))),f=u.a,e=e.a,f=(u=0<=f||0<=e)?f<0?e:e<0?f:f*n+e*t:0,c?"rgb"+(u?"a(":"(")+i+","+o+","+a+(u?","+Math.round(1e3*f)/1e3:"")+")":"#"+(4294967296+16777216*i+65536*o+256*a+(u?Math.round(255*f):0)).toString(16).slice(1,u?void 0:-2)):null)},i);function i(){}n.a=new r},2571:function(t,e,r){"use strict";!function(s){r.d(e,"b",function(){return n}),r.d(e,"a",function(){return t}),r.d(e,"c",function(){return l});var t=function(t){var n,e={underline:"none","font-style":"none","font-weight":"normal","text-decoration":"none"};for(n in e)t[n]||(t[n]=e[n])},o=function(t,n){for(var e=0,r=[{prop:"color",value:{default:"unset"}},{prop:"font-weight",value:{STRONG:"bold",default:"unset"}},{prop:"text-decoration",value:{U:"underline",default:"none"}},{prop:"font-style",value:{EM:"italic",default:"unset"}}];e<r.length;e++){var i=(o=r[e]).prop,o=o.value;n[i]||(n[i]=o[t]||o.default)}},u=function(t,n,e){e[t.dataset.styleSetterKey=n]={};for(var r=t.style,i=0;r[i];i++)e[n][r[i]]=r[r[i]];o(t.nodeName,e[n])},c=function(t,n,e){for(var r=0,i=t.children;r<i.length;r++){var o=i[r],a=""+n;n+=1,u(o,a,e),null!==(a=o.children)&&void 0!==a&&a.length&&c(o,n,e)}},n=function(t){var n={};return u(t,"1",n),c(t,2,n),n},l=function(e,t,r,i){function n(t){var n=t.dataset.styleSetterKey;(n=r?i[n]:e)&&s.get("CssAttributeSetter").update(t,n)}var o;n(t);for(var a=0,u=t.children;a<u.length;a++){var c=u[a];n(c),null!==(o=c.children)&&void 0!==o&&o.length&&l(e,c,r,i)}}}.call(this,r(2))},2572:function(t,n,i){"use strict";i.r(n),function(e){i.d(n,"adjust",function(){return t});var r=i(1579),t=function(t,n){new r.a(t,["background-color","fill"],n?{hover:n.HoverStyle,click:n.ClickedStyle,original:n.Style}:null).setStates(),e.get("CssAttributeSetter").update(t,{cursor:"pointer"})}}.call(this,i(2))},2573:function(t,i,o){"use strict";!function(u){o.d(i,"b",function(){return t}),o.d(i,"a",function(){return r});var n=o(34),c=o(1),e=o(1575),s=o(1578),t=function(){var t=Object(s.a)({Type:"Image",Content:{Url:Object(n.getCdnServerName)()+"/player/resources/images/ic-close.svg"},Style:{"margin-top":"8px","margin-right":"8px",top:"0px",right:"0px",cursor:"pointer","border-style":"none"}});return Object(e.a)(t,"click",{eventName:c.EVENTS.Drawables.XButtonClicked}),t},r=function(t){var n,e,r,i=t.Style["font-size"],o=wmjQuery.extend({},t,{Type:"Button",Style:wmjQuery.extend({},t.Style,{fill:t.Style.color})}),a=Object(s.a)(o),t=document.createElement("div"),o=(n=i,e="http://www.w3.org/2000/svg",(r=document.createElementNS(e,"svg")).setAttribute("viewBox","0 0 256 256"),r.setAttribute("width",n),r.setAttribute("height",n),r.setAttribute("class",c.DEFAULT_CLASSES.IGNORE_CSS_RESET),(e=document.createElementNS(e,"path")).setAttribute("d","M128 151l38 38q3 3 8 3t8 -3l7 -7q3 -3 3 -8t-3 -8l-38 -38l38 -38q3 -3 3 -8t-3 -8l-7 -7q-3 -3 -8 -3t-8 3l-38 38l-38 -38q-3 -3 -8 -3t-8 3l-7 7q-3 3 -3 8t3 8l38 38l-38 38q-3 3 -3 8t3 8l7 7q3 3 8 3t8 -3z"),r.appendChild(e),r);return u.get("CssAttributeSetter").set(t,{height:i,width:i,position:"absolute",left:i="50%",top:i,transform:"translate(-50%, -50%)"}),t.appendChild(o),a.appendChild(t),a}}.call(this,o(2))},2574:function(t,n,e){"use strict";!function(u){e.d(n,"a",function(){return t});var c=e(1),r=[{selector:"tr",css:{display:"table-row","vertical-align":"inherit"}},{selector:"td, th",css:{display:"table-cell","vertical-align":"inherit",padding:"1px"}},{selector:"tfoot",css:{display:"table-footer-group","vertical-align":"middle"}},{selector:"tbody",css:{display:"table-row-group","vertical-align":"middle"}},{selector:"thead",css:{display:"table-header-group","vertical-align":"middle"}},{selector:"table",css:{display:"table","border-collapse":"separate","border-spacing":"2px"}},{selector:"ul",css:{"padding-left":"40px"}},{selector:"li",css:{display:"list-item"}},{selector:"span, button, input, label, a, b, br, img, i, u",css:{display:"inline"}},{selector:":not(video)",css:{height:"auto",width:"auto"}},{selector:"*",css:{display:"block","padding-top":"0","padding-left":"0","padding-bottom":"0","padding-right":"0","margin-top":"0","margin-left":"0","margin-bottom":"0","margin-right":"0","vertical-align":"baseline","border-collapse":"inherit","background-image":"none","background-color":"transparent","line-height":"normal","text-indent":"inherit","letter-spacing":"normal","text-transform":"none","box-shadow":"none","text-shadow":"none","border-top-style":"none","border-top-width":"medium","border-right-style":"none","border-right-width":"medium","border-bottom-style":"none","border-bottom-width":"medium","border-left-style":"none","border-left-width":"medium",position:"static",top:"auto",left:"auto",transition:"none","box-sizing":"border-box",color:"#EB15E2",direction:"inherit"}}],t=function(t){for(var n=0;n<r.length;n++){var e=r[n];!function t(n,e,r){var i=u.get("ElementUtils");if(!i.isElementMatches(n,"."+c.DEFAULT_CLASSES.IGNORE_CSS_RESET)){i.isElementMatches(n,e)&&u.get("CssAttributeSetter").update(n,r,!0);for(var o=n.children,a=0;o&&a<o.length;a++)t(o[a],e,r)}}(t,e.selector,e.css)}}}.call(this,e(2))},2575:function(t,e,n){"use strict";!function(a){var t=(n.prototype.waitForAll=function(t){var n=this,e=t.querySelectorAll("img");if(this.J=e.length,this.K=0,!this.J)return a.resolve();for(var r=0;r<e.length;r++){var i=e[r].getAttribute("src"),o=document.createElement("img");o.onload=this.Y,o.onerror=this.Y,o.setAttribute("src",i)}return new a(function(t){n._=t})},n);function n(){var t=this;this.Y=function(){t.K++,t.K===t.J&&t._&&t._()}}e.a=t}.call(this,n(12))},2576:function(t,r,i){"use strict";i.r(r),function(t){i.d(r,"translate",function(){return e});var o=i(0),n=i(26),a=i(1443),u=i(1580),c=new t(["aspectRatio","aspectRatioLock","units","customValue"]),e=function(t){var i=t.size;return Object(n.reduce)(Object.keys(i),function(t,n){if(c.has(n))return t;var e=Object(u.a)(i[n]);if(!e)return t;var r=((r={})[n]=e,r),n=Object(a.translate)(r,n);return Object(o.__assign)(Object(o.__assign)({},t),n)},{})}}.call(this,i(38).wmSet)},2780:function(t,n,e){"use strict";var r={};e.r(r),e.d(r,"translate",function(){return b});var i={};e.r(i),e.d(i,"translate",function(){return g});var o={};e.r(o),e.d(o,"translate",function(){return m});var a={};e.r(a),e.d(a,"translate",function(){return O});var u={};e.r(u),e.d(u,"translate",function(){return C});var c={};e.r(c),e.d(c,"translate",function(){return I});var s={};e.r(s),e.d(s,"translate",function(){return T});var l=e(9),f=e(0),d=e(26),v=e(3),h=e(1),p=e(218),b=function(t){var n=null!==(n=t.opacity)&&void 0!==n?n:1;return{"background-color":"rgba"+Object(p.hexToRgba)(t.background,n)}},g=function(t){return{"border-radius":[(t=t.cornerRadius).tl,t.tr,t.br,t.bl].join("px ")+"px"}},m=function(t){return{direction:0===t.direction?"ltr":"rtl"}},j=e(1580),y={TOP:"top",MIDDLE:"middle",BOTTOM:"bottom",LEFT:"left",CENTER:"center",RIGHT:"right"},O=function(t){var n=t.position,e=t.size,t=w(e,n,n.vReference),n=w(e,n,n.hReference);return Object(f.__assign)(Object(f.__assign)({},t),n)};function w(t,n,e){var r;e=e.toLowerCase();var i=n.vertical,o=n.horizontal;switch(e){case y.MIDDLE:return{top:x(t.height,i)};case y.CENTER:return{left:x(t.width,o)};case y.TOP:case y.BOTTOM:return(r={})[e]=Object(j.a)(i),r;case y.LEFT:case y.RIGHT:return(r={})[e]=Object(j.a)(o),r}return{}}function x(t,n){return n=Object(j.a)(n),t=Object(j.a)(t),isNaN(parseFloat(n))||isNaN(parseFloat(t))?"0":"calc(50% + "+n+" - ("+t+" / 2))"}function M(n,t){var e,e=t?{}:(e={"border-style":"none","border-width":0,"padding-left":0,"padding-top":0,"padding-right":0,"padding-bottom":0},Object(v.isFeatureEnabled)(h.FEATURES.WmAccessibility)||(e.outline="none"),e),t=Object.keys(n).map(function(t){return"opacity"===t&&void 0!==n.opacity&&n.background?{}:(F[t]||A).translate(n,t)});return Object(d.reduce)(Object(f.__spreadArrays)([e],t),function(t,n){return Object(f.__assign)(Object(f.__assign)({},t),n)},{})}var k=e(2576),C=function(t){var n=t.border,t={"border-color":n.color,"border-style":"solid"};return(n=n.weight)&&(t["border-width"]=n+"px"),t},S=e(1573),A=e(1443),I=function(t){var n=(r=t.flex).direction,t=r.stretch,e=(r.spacing,Object(f.__rest)(r,["direction","stretch","spacing"])),r=Object(d.reduce)(Object.keys(e),function(t,n){return Object(f.__assign)(Object(f.__assign)({},t),Object(A.translate)(((t={})[n]=e[n],t),n))},{});return n&&(r["flex-direction"]=n),t&&(r["flex-grow"]=1),r},T=function(t){var n=void 0===(r=(o=t.shadow).angle)?90:r,e=void 0===(i=o.distance)?1:i,t=o.color,r=o.opacity,i=o.radius,o=Math.round(Math.cos(n*(Math.PI/180))*e),e=Math.round(Math.sin(n*(Math.PI/180))*e),e="rgba"+Object(p.hexToRgba)(t,r)+" "+o+"px "+e+"px "+(i||0)+"px 0";return(i={})["box-shadow"]=e,i["moz-box-shadow"]=e,i["webkit-box-shadow"]=e,i},F={background:r,cornerRadius:i,direction:o,position:a,size:k,border:u,font:S,flex:c,shadow:s};e.d(n,"a",function(){return N});var N=function(t){var n={};return l.default.extend(!0,n,t),function t(e,n){(n=n||["Style","HoverStyle","ClickedStyle"]).forEach(function(t){var n;(n=e)[t=t]&&(n[t]=M(n[t],"Style"!==t))});var r=e.ChildElements;if(r)for(var i=0;i<r.length;i++)t(r[i])}(n.RootVisualElement),n}},2785:function(t,n,e){"use strict";var r={};e.r(r),e.d(r,"adjust",function(){return u});var i=e(2568),o=e(2569),a=e(2572),u=function(t){t.removeAttribute("width"),t.removeAttribute("height")};e.d(n,"a",function(){return s});var c={IMG:r,BUTTON:a,SPAN:i,DIV:o},s=function(t){return c[t]}}}]);