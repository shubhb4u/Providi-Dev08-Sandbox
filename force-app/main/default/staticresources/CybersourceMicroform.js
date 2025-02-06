/*!
 * Flex Microform v2.1.1
 * @copyright CyberSource 2016-2023
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){"use strict";n.d(t,"j",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"k",(function(){return f})),n.d(t,"e",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"b",(function(){return E})),n.d(t,"p",(function(){return _})),n.d(t,"s",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"t",(function(){return b})),n.d(t,"l",(function(){return O})),n.d(t,"g",(function(){return m})),n.d(t,"o",(function(){return A})),n.d(t,"q",(function(){return T})),n.d(t,"r",(function(){return g})),n.d(t,"m",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return R})),n.d(t,"n",(function(){return I})),n.d(t,"u",(function(){return N}));var r=n(4),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return null!=e&&"object"===a(e)}function s(e){var t=a(e);return null!=e&&("object"===t||"function"===t)}function c(e){var t=s(e)?Object.prototype.toString.call(e):"";return"[object Function]"===t||"[object GeneratorFunction]"===t}function f(e){return"string"==typeof e||!Array.isArray(e)&&u(e)&&"[object String]"===Object.prototype.toString.call(e)}function l(e){return!0===e||!1===e||"[object Boolean]"===Object.prototype.toString.call(e)}function d(e){return"[object Number]"===Object.prototype.toString.call(e)&&!isNaN(e)}function E(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function _(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0,o=e.length;r<o;r+=1)n[r]=e.charCodeAt(r);return t}function p(e){try{return atob(e.replace(/-/g,"+").replace(/_/g,"/"))}catch(e){throw new Error("Failed to decode base64 string")}}function h(){window.getSelection&&window.getSelection().empty?window.getSelection().empty():window.getSelection&&window.getSelection().removeAllRanges?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}function b(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}function O(e){return f(e)&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)}function m(e){return f(e)&&/^([-\w]+\.){2}[-\w]+$/.test(e)}function A(e){return JSON.parse(JSON.stringify(e))}function T(e){return"string"==typeof e?e.replace(/\D/g,""):""}function g(e){return"string"==typeof e?e.replace(/\s/g,""):""}function y(e,t){e.setAttribute("autocomplete",t),e.setAttribute("autocompletetype",t),e.setAttribute("x-autocompletetype",t)}function v(e){if(!(e instanceof Set))return[];if(Array.from)return Array.from(e);var t=[];return e.forEach((function(e){return t.push(e)})),t}function R(e,t){return e instanceof Set&&t instanceof Set&&e.size===t.size&&v(e).every((function(e){return t.has(e)}))}function I(e){if(e instanceof Array&&e.length>0)for(var t,n,r=e.length;--r;)n=~~(Math.random()*(r+1)),t=e[r],e[r]=e[n],e[n]=t}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map((function(t){return t in e?i({},t,e[t]):{}})).reduce((function(e,t){return o()(e,t)}),{})}},function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.reason)throw new Error("Error reason required");if(!e.message)throw new Error("Error message required");this.name="MicroformError",this.reason=e.reason,this.message=e.message,this.informationLink=e.informationLink||"https://www.cybersource.com/products/payment_security/secure_acceptance",this.correlationId=e.correlationId,this.details=e.details}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r;var o=r;t.a={CAPTURE_CONTEXT_INVALID:function(){return new o({reason:"CAPTURE_CONTEXT_INVALID",message:"You have not supplied a valid capture context."})},CAPTURE_CONTEXT_EXPIRED:function(){return new o({reason:"CAPTURE_CONTEXT_EXPIRED",message:"Your capture context has expired."})},BROWSER_ENCRYPTION_FAILED:function(){return new o({reason:"BROWSER_ENCRYPTION_FAILED",message:"In-browser encryption has failed."})},CREATE_FIELD_INVALID_FIELD_TYPE:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new o({reason:"CREATE_FIELD_INVALID_FIELD_TYPE",message:'Invalid field "'.concat(e,'". Supported values are [ ').concat(t.join(", ")," ]."),details:{message:"Supported values are [ ".concat(t.join(", ")," ].")}})},CREATE_FIELD_DUPLICATE:function(e){return new o({reason:"CREATE_FIELD_DUPLICATE",message:'A "'.concat(e,'" field has already been created for this integration.')})},CREATE_TOKEN_NO_FIELDS_LOADED:function(){return new o({reason:"CREATE_TOKEN_NO_FIELDS_LOADED",message:"No fields have been loaded."})},CREATE_TOKEN_TIMEOUT:function(e){var t=new o({reason:"CREATE_TOKEN_TIMEOUT",message:"Create token request timed out.",details:{}});return e&&(t.details.fields=e),t},CREATE_TOKEN_XHR_ERROR:function(){return new o({reason:"CREATE_TOKEN_XHR_ERROR",message:"Could not create a token as the underlying XMLHttpRequest failed."})},CREATE_TOKEN_NO_FIELDS:function(){return new o({reason:"CREATE_TOKEN_NO_FIELDS",message:"No fields for collection."})},CREATE_TOKEN_VALIDATION_PARAMS:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new o({reason:"CREATE_TOKEN_VALIDATION_PARAMS",message:"One or more params have a validation error.",details:e.map((function(e){return{message:"Validation error",location:e}}))})},CREATE_TOKEN_VALIDATION_FIELDS:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new o({reason:"CREATE_TOKEN_VALIDATION_FIELDS",message:"One or more fields have a validation error.",details:e.map((function(e){return{message:"Validation error",location:e}}))})},CREATE_TOKEN_UNABLE_TO_START:function(){return new o({reason:"CREATE_TOKEN_UNABLE_TO_START",message:"Unable to trigger tokenization."})},FIELD_UNLOAD_ERROR:function(){return new o({reason:"FIELD_UNLOAD_ERROR",message:'Field is not loaded. Call "load" before attempting to unload.'})},FIELD_ALREADY_LOADED:function(){return new o({reason:"FIELD_ALREADY_LOADED",message:'Field has already been loaded. Call "unload" before trying to re-load.'})},FIELD_LOAD_CONTAINER_SELECTOR:function(){return new o({reason:"FIELD_LOAD_CONTAINER_SELECTOR",message:"Unable to locate a DOM node using the supplied selector string."})},FIELD_LOAD_INVALID_CONTAINER:function(){return new o({reason:"FIELD_LOAD_INVALID_CONTAINER",message:"Invalid argument supplied to load. Supported values are [HTMLElement or a CSS selector string]."})},FIELD_SUBSCRIBE_UNSUPPORTED_EVENT:function(){return new o({reason:"FIELD_SUBSCRIBE_UNSUPPORTED_EVENT",message:"Unsupported event name."})},FIELD_SUBSCRIBE_INVALID_CALLBACK:function(){return new o({reason:"FIELD_SUBSCRIBE_INVALID_CALLBACK",message:"The supplied callback is not a function."})},IFRAME_JWT_VALIDATION_FAILED:function(){return new o({reason:"IFRAME_JWT_VALIDATION_FAILED",message:"Invalid JWT."})},IFRAME_UNSUPPORTED_FIELD_TYPE:function(e){return new o({reason:"IFRAME_UNSUPPORTED_FIELD_TYPE",message:"Unsupported field type:  ".concat(e,".")})},MALFORMED_TOKENS_RESPONSE:function(){return new o({reason:"MALFORMED_TOKENS_RESPONSE",message:"JWT returned on tokens request does not match expected format."})},UNKNOWN_REASON:function(e){return new o({reason:"UNKNOWN_REASON",message:"Microform could not handle the recieved Flex API reason code.",details:e})},API_INTERNAL_ERROR:function(){return new o({reason:"API_INTERNAL_ERROR",message:"An unknown error has occurred."})},API_JSON_PARSER_ERROR:function(){return new o({reason:"API_JSON_PARSER_ERROR",message:"There was a problem processing your request."})},API_JWE_PARSING_ERROR:function(){return new o({reason:"API_JWE_PARSING_ERROR",message:"Unable create a token as the JWE contents could not be parsed."})},API_GATEWAY_ERROR:function(){return new o({reason:"API_GATEWAY_ERROR",message:"The API gateway rejected your request."})},CREATE_TOKEN_DECRYPTION:function(){return new o({reason:"CREATE_TOKEN_DECRYPTION",message:"Unable create a token as the JWE contents could not be decrypted."})},CREATE_TOKEN_PLATFORM_ERROR:function(){return new o({reason:"CREATE_TOKEN_PLATFORM_ERROR",message:"There was a problem communicating with the tokenization service."})},CREATE_TOKEN_CAPTURE_CONTEXT_USED_TOO_MANY_TIMES:function(){return new o({reason:"CREATE_TOKEN_CAPTURE_CONTEXT_USED_TOO_MANY_TIMES",message:"The supplied capture context has exceeded its usage limits. Please request another before trying again."})},CREATE_TOKEN_CAPTURE_CONTEXT_NOT_FOUND:function(){return new o({reason:"CREATE_TOKEN_CAPTURE_CONTEXT_NOT_FOUND",message:"The capture context could not be found. Please request another before trying again."})},CREATE_TOKEN_NO_DATA_SUBMITTED:function(){return new o({reason:"CREATE_TOKEN_NO_DATA_SUBMITTED",message:"At least one non-empty field must be supplied for tokenization."})},CREATE_TOKEN_CARD_TYPE_NOT_ALLOWED:function(e){var t=new o({reason:"CREATE_TOKEN_CARD_TYPE_NOT_ALLOWED",message:"Card Type is not in this session's allowedCardNetworks.",details:{message:"Validation error",location:"type"}});return e&&(t.details.message+=": supported values [".concat(e.join(", "),"]")),t},CREATE_TOKEN_VALIDATION_SERVERSIDE:function(e){var t=new o({reason:"CREATE_TOKEN_VALIDATION_SERVERSIDE",message:"Server-side validation has rejected your request.",details:[]}),n={"captureData.number":"number","captureData.type":"type","captureData.expirationMonth":"expirationMonth","captureData.expirationYear":"expirationYear","captureData.securityCode":"securityCode"};return Array.isArray(e)&&e.forEach((function(e){e.location&&n[e.location]&&t.details.push({location:n[e.location],message:e.message})})),t}}},function(e,t,n){"use strict";n.r(t),n.d(t,"AUTOCOMPLETE",(function(){return r})),n.d(t,"BLUR",(function(){return o})),n.d(t,"CHANGE",(function(){return i})),n.d(t,"ERROR",(function(){return a})),n.d(t,"FOCUS",(function(){return u})),n.d(t,"INPUT_SUBMIT_REQUEST",(function(){return s})),n.d(t,"LOAD",(function(){return c})),n.d(t,"UNLOAD",(function(){return f})),n.d(t,"UPDATE",(function(){return l}));var r="autocomplete",o="blur",i="change",a="error",u="focus",s="inputSubmitRequest",c="load",f="unload",l="update"},function(e,t,n){"use strict";n.r(t),n.d(t,"NUMBER",(function(){return r})),n.d(t,"SECURITY_CODE",(function(){return o}));var r="number",o="securityCode"},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=a(e),c=1;c<arguments.length;c++){for(var f in n=Object(arguments[c]))o.call(n,f)&&(s[f]=n[f]);if(r){u=r(n);for(var l=0;l<u.length;l++)i.call(n,u[l])&&(s[u[l]]=n[u[l]])}}return s}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return a}));var r="autocompleteEdit",o="clear",i="tokenize",a="error"},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return new Error('Required parameter "'.concat(e,'" was not supplied'))}function a(e,t,n){return new Error('Invalid value of "'.concat(t,'" for "').concat(e,'" parameter. Supported values are [').concat(n.join(", "),"]"))}function u(e,t,n){return new Error('Invalid value typeof "'.concat(t,'" supplied for parameter "').concat(e,'". Expected typeof "').concat(n,'".'))}function s(e){return new Error('Failed expression evaluation for parameter "'.concat(e,'".'))}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};return Object.keys(t).forEach((function(c){var f=t[c],l=e[c];if(void 0===l){if(f.required)throw i(c);if(void 0===f.default)return;l=f.default}if(o(l)!==f.type)throw u(c,o(l),f.type);if(f.supportedValues&&f.supportedValues.indexOf(l)<0)throw a(c,l,f.supportedValues);if(Object(r.f)(f.expression)&&!0!==f.expression.call(null,l,e,t))throw s(c);n[c]=l})),n}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=/^http(s)?:\/\/.+(:\d+)?$/;function i(e,t,n){if(!o.test(n))throw new Error('Invalid origin "'.concat(n,'"'));var i={},a=t,u=e,s=n;function c(e,t){return!(!Object(r.k)(e)||!Object(r.f)(t))&&(i[e]||(i[e]=[]),i[e].push(t),!0)}function f(e,t){if(!Object(r.k)(e)||!Object(r.f)(t))return!1;if(!i[e])return!1;for(var n=i[e],o=0;o<n.length;o+=1)if(n[o]===t)return n.splice(o,1),!0;return!1}function l(e,t,n){var o={event:e,channel:a,contentType:"application/x-telegram+json",data:t||{}};return"function"==typeof n&&(o.reply=function(e){var t=Object(r.t)();return c(t,(function n(r){f(t,n),e(r)})),t}(n)),o}function d(e){var t=e.origin||e.originalEvent.origin;if((s===t||"*"===s)&&Object(r.i)(e.data)&&"application/x-telegram+json"===e.data.contentType&&"event"in e.data&&!(!"application/x-telegram+json".indexOf(e.data.event)<0||void 0!==e.data.channel&&e.data.channel!==a&&"*"!==e.data.channel)){var n=[e.data.data||{}];e.data.reply&&n.push(function(e){return function(t,n){var r=l(e.data.reply,t,n);e.source.postMessage(r,e.origin)}}(e)),function(e,t,n){if(i[e])for(var r=i[e].length,o=0;o<r;o+=1)i[e][o].apply(n,t)}(e.data.event,n,e)}}function E(){return i={},!0}return window.addEventListener("message",d,!1),{publish:function(e,t,n){var r=JSON.parse(JSON.stringify(l(e,t,n)));try{(u instanceof HTMLIFrameElement?u.contentWindow:u).postMessage(r,s)}catch(e){throw new Error("Frame communication failed.")}},subscribe:c,unsubscribe:f,unsubscribeAll:E,teardown:function(){window.removeEventListener("message",d,!1),E()}}}},,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"Flex",(function(){return U}));var r=n(1),o=n(0),i=n(3),a=n(5),u=n(6),s=n(4),c=n.n(s),f=n(2),l=n(7);function d(){var e={};return{subscribe:function(t,n){if(!Object(o.f)(n))throw new Error("handler not a function.");return e.hasOwnProperty.call(e,t)||(e[t]=[]),e[t].push(n),this},unsubscribe:function(t,n){if(!Object(o.f)(n))throw new Error("handler not a function.");if(e.hasOwnProperty.call(e,t)){var r=e[t].indexOf(n);r>=0&&e[t].splice(r,1)}return this},unsubscribeAll:function(){return e={},this},publish:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.hasOwnProperty.call(e,t)&&e[t].forEach((function(e){return e(n)})),this}}}var E=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","iframe","*[tabindex]","*[contenteditable]"].join(","),_={base:"flex-microform",focused:"flex-microform-focused",valid:"flex-microform-valid",invalid:"flex-microform-invalid",disabled:"flex-microform-disabled",autocomplete:"flex-microform-autocomplete"};function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=Object.keys(_).map((function(e){return _[e]})),O=Object.keys(i).map((function(e){return i[e]})),m={placeholder:{type:"string",required:!1},title:{type:"string",required:!1},description:{type:"string",required:!1},"aria-label":{type:"string",required:!1},"aria-required":{type:"boolean",required:!1},disabled:{type:"boolean",required:!1},styles:{type:"object",required:!1}},A=c()({},m,{autoformat:{type:"boolean",required:!1}}),T=c()({},m,{maxLength:{type:"number",required:!1,supportedValues:[3,4]}}),g=Object.keys(f).map((function(e){return f[e]})),y="/microform/bundle/v".concat("2.1.1","/iframe.html");function v(e,t,n,r,o,i){var a={microformId:t,fieldId:n,jwt:e.jwt,microformConfig:r,config:o,fieldType:i};void 0===document.location.ancestorOrigins&&(a.refererOrigin=window.location.origin);var u=document.createElement("iframe");return u.setAttribute("hspace","0"),u.setAttribute("vspace","0"),u.setAttribute("frameborder","0"),u.setAttribute("scrolling","no"),u.setAttribute("allowtransparency","true"),u.setAttribute("marginwidth","0"),u.setAttribute("marginheight","0"),u.setAttribute("title","secure payment field"),u.style.overflow="hidden",u.style.position="relative",u.style.border="none",u.style.width="100%",u.style.height="100%",u.setAttribute("src","".concat(e.origin).concat(y,"?keyId=").concat(e.keyId,"#").concat(JSON.stringify(a))),u}var R=function(e){return g.indexOf(e)>=0};function I(e,t,n){R(t)&&e.publish(t,n)}function N(e,t,n,r){var u=this;t.subscribe(f.LOAD,(function(e){return I(n,f.LOAD,e)})),t.subscribe(f.FOCUS,(function(){Object(o.d)(),r.parentElement.classList.add(_.focused),I(n,f.FOCUS)})),t.subscribe(f.BLUR,(function(e){!function(e,t){if(t&&("next"===t.focusShift||"previous"===t.focusShift)){var n=Array.prototype.slice.call(document.querySelectorAll(E)).filter((function(e){var t=e.getAttribute("tabindex"),n=e.getBoundingClientRect();return(!t||parseInt(t,10)>=0)&&(n.width>0&&n.height>0||"AREA"===e.tagName)})),r=n.indexOf(e)+("previous"===t.focusShift?-1:1);r>=0&&n[r].focus()}}(r,e),r.parentElement.classList.remove(_.focused),I(n,f.BLUR)})),t.subscribe(f.INPUT_SUBMIT_REQUEST,(function(){I(n,f.INPUT_SUBMIT_REQUEST)})),t.subscribe(f.CHANGE,(function(e){e.valid?(r.parentElement.classList.remove(_.invalid),r.parentElement.classList.add(_.valid)):e.couldBeValid?(r.parentElement.classList.remove(_.invalid),r.parentElement.classList.remove(_.valid)):(r.parentElement.classList.remove(_.valid),r.parentElement.classList.add(_.invalid)),I(n,f.CHANGE,e)})),t.subscribe(f.UPDATE,(function(e){c()(u._config,e),!0===e.disabled?r.parentElement.classList.add(_.disabled):r.parentElement.classList.remove(_.disabled),I(n,f.UPDATE,e)})),t.subscribe(a.c,(function(e){I(n,f.ERROR,e)})),e===i.NUMBER&&(t.subscribe(f.AUTOCOMPLETE,(function(e){r.parentElement.classList.add(_.autocomplete),I(n,f.AUTOCOMPLETE,e)})),t.subscribe(a.a,(function(){r.parentElement.classList.remove(_.autocomplete)})))}function w(e,t){switch(e){case i.NUMBER:return Object(u.a)(t,A);case i.SECURITY_CODE:return Object(u.a)(t,T);default:return{}}}var L=function(){function e(t,n,i,a){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(p(this,e),O.indexOf(i)<0)throw r.a.CREATE_FIELD_INVALID_FIELD_TYPE(i,O);this._type=i,this._config=w(this._type,u);var s=Object(o.t)();this._iframe=v(t,n,s,a,this._config,i),this._telegram=new l.a(this._iframe,s,t.origin),this._pubSub=new d,this._container=null,this._loaded=!1,N.call(this,i,this._telegram,this._pubSub,this._iframe)}var t,n,i;return t=e,(n=[{key:"clear",value:function(){!0===this._loaded&&this._telegram.publish(a.b)}},{key:"dispose",value:function(){!0===this._loaded&&this.unload()}},{key:"focus",value:function(){!0===this._loaded&&this._telegram.publish(f.FOCUS)}},{key:"blur",value:function(){!0===this._loaded&&this._telegram.publish(f.BLUR)}},{key:"on",value:function(e,t){if(!R(e))throw r.a.FIELD_SUBSCRIBE_UNSUPPORTED_EVENT();if(!Object(o.f)(t))throw r.a.FIELD_SUBSCRIBE_INVALID_CALLBACK();this._pubSub.subscribe(e,t)}},{key:"off",value:function(e,t){this._pubSub.unsubscribe(e,t)}},{key:"unload",value:function(){var e=this;if(!0!==this._loaded)throw r.a.FIELD_UNLOAD_ERROR();if(this._loaded=!1,this._iframe.onload=null,this._container){for(;this._container.lastChild;)this._container.removeChild(this._container.lastChild);b.forEach((function(t){return e._container.classList.remove(t)})),this._container=null}I(this._pubSub,f.UNLOAD)}},{key:"update",value:function(e){var t=w(this._type,e);Object.keys(t).length<1||(c()(this._config,t),!0===this._loaded&&this._telegram.publish(f.UPDATE,t))}},{key:"load",value:function(e){var t=this;if(!0===this._loaded)throw r.a.FIELD_ALREADY_LOADED();if(e instanceof Element)this._container=e;else{if("string"!=typeof e)throw r.a.FIELD_LOAD_INVALID_CONTAINER();var n=document.querySelector(e);if(!n)throw r.a.FIELD_LOAD_CONTAINER_SELECTOR();this._container=n}var o=function(e,t){try{var n=e.indexOf("#"),r=JSON.parse(e.substr(n+1));return c()(r.config,t),"".concat(e.substring(0,n),"#").concat(JSON.stringify(r))}catch(t){return e}}(this._iframe.getAttribute("src"),this._config);for(this._iframe.setAttribute("src",o);this._container.lastChild;)this._container.removeChild(this._container.lastChild);this._iframe.onload=function(){t._loaded=!0},this._container.appendChild(this._iframe),this._container.classList.add(_.base)}}])&&h(t.prototype,n),i&&h(t,i),e}();function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=Object.keys(i).map((function(e){return i[e]})),j={styles:{type:"object",required:!1,default:{}}},x=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};D(this,e),n=Object(u.a)(n,j),this._microformId=Object(o.t)(),this._flexConfig=t,this._baseConfig={styles:n.styles},this.fields={}}var t,n,i;return t=e,(n=[{key:"createField",value:function(e,t){if("string"!=typeof e||S.indexOf(e)<0)throw r.a.CREATE_FIELD_INVALID_FIELD_TYPE(e,S);if(void 0!==this.fields[e])throw r.a.CREATE_FIELD_DUPLICATE(e);return this.fields[e]=new L(this._flexConfig,this._microformId,e,this._baseConfig,t),this.fields[e]}},{key:"createToken",value:function(e,t){var n=this,i=[],u=Object.keys(this.fields).reduce((function(e,t){return n.fields[t]._loaded&&(i.push(t),e.push(n.fields[t]._telegram.publish)),e}),[]);if(u.length<1)t(r.a.CREATE_TOKEN_NO_FIELDS_LOADED());else{Object(o.n)(u);for(var s={options:Object(o.u)(e,["type","expirationMonth","expirationYear"]),fields:i},c=function(e){Object(o.g)(e)?t(null,e):t(e)},f=0;f<u.length;f+=1)try{return void u[f](a.d,s,c)}catch(e){}t(r.a.CREATE_TOKEN_UNABLE_TO_START())}}},{key:"teardown",value:function(){var e=this;Object.keys(this.fields).forEach((function(t){return e.fields[t].dispose()})),this.fields={}}}])&&C(t.prototype,n),i&&C(t,i),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=function(e){var t;try{if(!Object(o.g)(e))throw new Error;if(!(t=JSON.parse(Object(o.s)(e.split(".")[1]))).jti||!t.flx.origin)throw new Error}catch(e){throw r.a.CAPTURE_CONTEXT_INVALID()}return Object.freeze({jwt:e,keyId:t.flx.jwk.kid,origin:t.flx.origin})}(t)}var t,n,i;return t=e,(n=[{key:"microform",value:function(e){return new x(this._config,e)}}])&&P(t.prototype,n),i&&P(t,i),e}()}])}));