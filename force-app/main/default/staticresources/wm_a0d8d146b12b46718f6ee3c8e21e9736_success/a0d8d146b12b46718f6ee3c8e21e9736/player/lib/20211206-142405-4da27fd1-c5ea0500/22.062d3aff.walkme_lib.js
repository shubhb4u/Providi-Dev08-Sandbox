window,(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[22],{1187:function(e,t,n){"use strict";n.r(t),n.d(t,"init",function(){return i}),n.d(t,"registers",function(){return a});var r=n(1280);function i(){a(),r.a.get("UserCentricPerformance").start()}function a(){n(2359),n(2360),n(2362),n(2363),n(2364),n(2365),n(2366)}},1280:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var n=n(10),r=Object(n.create)()},2359:function(e,t,n){"use strict";n.r(t),n(1280).a.register("UserCentricPerformance").asFunction(function(e,t,n,r,i){function a(){r.untrack(),i.untrack()}return{start:function(){n.track(),t.handlePerfRecords(e.__tti&&e.__tti.e),i.track(),r.track(),e.on("removeWalkMe",function(){a()})},stop:a}}).dependencies("WmInternals,UCPUtils,UCPTracker,TTITracker,AbandonTracker")},2360:function(e,t,s){"use strict";s.r(t),s(1280).a.register("TTITracker").asFunction(function(e,n,t,r,i){function a(){e.__tti&&e.__tti.o&&(t.handlePerfRecords(e.__tti.o.takeRecords()),e.__tti.o.disconnect())}var o={track:function(){if(!("PerformanceLongTaskTiming"in window))return i.fallbackNoTTI(),void a();(0,o.__getTTIPolyfill().getFirstConsistentlyInteractive)({minValue:void 0,searchStartGetter:function(){var e=t.getLastLCP();if(e)return e.startTime+e.duration},useMutationObserver:!0,__tti:e.__tti,setTimeout:r.setWalkmeTimeout,clearTimeout:function(e){e&&e.clear&&e.clear()}}).then(function(e){var t=e.tti,e=e.searchStart;i.untrack(),n.send("TTI",e,t,t-e)})},untrack:a,__getTTIPolyfill:function(){return s(2361)}};return o}).dependencies("WmInternals,UCPEventSender,UCPUtils,TimerManager,AbandonTracker")},2361:function(r,e,t){!function(i,w,b,k,P){!function(){function s(e){var t,n,r=void 0!==i&&i.iterator&&e[i.iterator];return r?r.call(e):{next:(t=e,n=0,function(){return n<t.length?{done:!1,value:t[n++]}:{done:!0}})}}function u(e){if(!(e instanceof Array)){e=s(e);for(var t,n=[];!(t=e.next()).done;)n.push(t.value);e=n}return e}var c,d,l,e="undefined"!=typeof window&&window===this||"undefined"==typeof global||null==global?this:global,f=0,h={},m="img script iframe link audio video source".split(" ");function p(e){return 1e3*(4*Math.pow(Math.E,e/1e3*-.045)+1)}function g(e,t){if(2<e.length)return performance.now();for(var n=[],r=(t=s(t)).next();!r.done;r=t.next())r=r.value,n.push({timestamp:r.start,type:"requestStart"}),n.push({timestamp:r.end,type:"requestEnd"});for(r=(t=s(e)).next();!r.done;r=t.next())n.push({timestamp:r.value,type:"requestStart"});for(n.sort(function(e,t){return e.timestamp-t.timestamp}),e=e.length,t=n.length-1;0<=t;t--)switch(r=n[t],r.type){case"requestStart":e--;break;case"requestEnd":if(2<++e)return r.timestamp;break;default:throw Error("Internal Error: This should never happen")}return 0}function v(){}function t(e){var t=this;l=(e=void 0===e?{}:e).log||v,this.setTimeout=e.setTimeout||setTimeout,this.clearTimeout=e.clearTimeout||clearTimeout,this.G=!!e.useMutationObserver,this.A=e.minValue||null,this.B=e.searchStartGetter||null;var a,o,r,n,i=e.__tti&&e.__tti.e;e=e.__tti&&e.__tti.o,this.a=[],this.b=[],i&&(l("Consuming the long task & network entries already recorded."),i.forEach(function(e){"longtask"===e.entryType?T(t,e):"resource"===e.entryType&&t.b.push({start:e.fetchStart,end:e.responseEnd})})),e&&e.disconnect(),this.c=new P,this.v=null,this.u=-1/0,this.s=!1,this.m=this.i=this.w=null,this.f={l:this.D.bind(this),g:this.C.bind(this)},a=this.f,h.send=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.send=c=function(e){for(var t=[],n=0;n<arguments.length;++n)t[n]=arguments[n];var r=this,i=f++;return a.l(i),this.addEventListener("readystatechange",function(){4===r.readyState&&a.g(i)}),h.send.apply(this,t)},o=this.f,h.fetch=w,w=d=function(e){for(var i=[],t=0;t<arguments.length;++t)i[t]=arguments[t];return new b(function(t,n){var r=f++;o.l(r),h.fetch.apply(h,u(i)).then(function(e){o.g(r),t(e)},function(e){o.g(r,e),n(e)})})},(r=this).i=new PerformanceObserver(function(e){for(var t,n=(e=s(e=e.getEntries())).next();!n.done;n=e.next())"resource"===(n=n.value).entryType&&(l("Network request finished",t=n),r.b.push({start:t.fetchStart,end:t.responseEnd}),y(r,g(r.h,r.b)+r.j)),"longtask"===n.entryType&&(l("Long task finished",n),n=T(r,n),y(r,n.end+r.j))}),r.i.observe({entryTypes:["longtask","resource"]}),this.G&&(this.m=(n=this.F.bind(this),(e=new k(function(e){for(var t=(e=s(e)).next();!t.done;t=e.next())("childList"==(t=t.value).type&&function e(t,n){for(var r=(t=s(t)).next();!r.done;r=t.next())if(r=r.value,n.includes(r.nodeName.toLowerCase())||r.children&&e(r.children,n))return 1}(t.addedNodes,m)||"attributes"==t.type&&m.includes(t.target.tagName.toLowerCase()))&&n(t)})).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["href","src"]}),e))}function n(e){l("Enabling FirstConsistentlyInteractiveDetector"),e.s=!0;var t=0<e.a.length?e.a[e.a.length-1].end:0,n=g(e.h,e.b);y(e,Math.max(n+5e3,t))}function y(i,e){i.s?(l("Attempting to reschedule FirstConsistentlyInteractive check to "+e),l("Previous timer activation time: "+i.u),i.u>e?l("Current activation time is greater than attempted reschedule time. No need to postpone."):(i.clearTimeout(i.v),i.v=i.setTimeout(function(){l("Checking if First Consistently Interactive was reached...");var e,t=g(i.h,i.b);i.B&&(e=i.B())||(e=performance.timing.navigationStart,e=(window.a&&window.a.H?1e3*window.a.H().I-e:0)||performance.timing.domContentLoadedEventEnd-e);var n=a(i),r=performance.now();null===n&&(l("No usable minimum value yet. Postponing check."),y(i,Math.max(t+i.j,r+1e3))),l("Parameter values:"),l("NavigationStart",performance.timing.navigationStart),l("lastKnownNetwork2Busy",t),l("Search Start",e),l("Min Value",n),l("Last busy",t),l("Current time",r),l("Long tasks",i.a),l("Incomplete JS Request Start Times",i.h),l("Network requests",i.b),(t=r-t<5e3||r-(t=function(e,t){function n(){250<s.end-s.start&&(a=Math.max(a,s.end),o=p(a-e))}var r=e+5e3,i=t.filter(function(e){return e.start>r}),a=0===(t=t.filter(function(e){return e.start<=r})).length?e:t[t.length-1].end;if(0===i.length)return a;var o,s={start:a-1e3,end:a};for(n(),t=0;t<i.length;t++){var u=i[t];if(u.start<s.end+1e3)s.end=u.end,n();else{if(u.start>a+o)break;s={start:u.start,end:u.end},n()}}return a}(e,i.a))<p(t)?null:Math.max(t,n))?(i.w({tti:t,searchStart:e}),l("Disabling FirstConsistentlyInteractiveDetector"),i.clearTimeout(i.v),i.s=!1,i.i&&i.i.disconnect(),i.m&&i.m.disconnect(),h.send&&XMLHttpRequest.prototype.send===c&&(XMLHttpRequest.prototype.send=h.send),h.fetch&&w===d&&(w=h.fetch),i.f&&(i.f.l=v,i.f.g=v),i.a=[],i.b=[],i.c=new P):(l("Could not detect First Consistently Interactive. Retrying in 1 second."),y(i,performance.now()+1e3))},e-performance.now()),i.u=e,l("Rescheduled firstConsistentlyInteractive check at "+e))):l("startSchedulingTimerTasks must be called before calling rescheduleTimer")}function T(e,t){return t={start:t.startTime,end:t.startTime+t.duration},e.a.push(t),t}function a(e){return e.A||(performance.timing.domContentLoadedEventEnd?(e=performance.timing).domContentLoadedEventEnd-e.navigationStart:null)}t.prototype.getFirstConsistentlyInteractive=function(){var t=this;return new b(function(e){t.w=e,"complete"==document.readyState?n(t):window.addEventListener("load",function(){n(t)})})},t.prototype.D=function(e){l("Starting JS initiated request. Request ID: "+e),this.c.set(e,performance.now()),l("Active XHRs: "+this.c.size)},t.prototype.C=function(e){l("Completed JS initiated request with request ID: "+e),this.c.delete(e),l("Active XHRs: "+this.c.size)},t.prototype.F=function(e){l("Potentially network resource fetching mutation detected",e),l("Pushing back FirstConsistentlyInteractive check by 5 seconds."),y(this,performance.now()+this.j)},e.Object.defineProperties(t.prototype,{h:{configurable:!0,enumerable:!0,get:function(){return[].concat(u(this.c.values()))}},j:{configurable:!0,enumerable:!0,get:function(){var e=a(this);return p(null!==e?performance.now()-e:0)}}}),r.exports={getFirstConsistentlyInteractive:function(e){return e=void 0===e?{}:e,"PerformanceLongTaskTiming"in window?new t(e).getFirstConsistentlyInteractive():b.resolve(null)}}}()}.call(this,t(28).wmSymbol,t(45).nativeFetch,t(12),t(149).default,t(28).wmMap)},2362:function(e,t,n){"use strict";n.r(t),n(1280).a.register("AbandonTracker").asFunction(function(e,t){function n(){document.removeEventListener&&document.removeEventListener("visibilitychange",r)}function r(){n(),e.send("abandon",performance.now())}return{track:function(){document.addEventListener&&document.addEventListener("visibilitychange",r)},untrack:n,fallbackNoTTI:function(){t.setWalkmeTimeout(n,5e3)}}}).dependencies("UCPEventSender,TimerManager")},2363:function(e,t,n){"use strict";n.r(t);var t=n(1280),T=n(25);t.a.register("UCPUtils").asFunction(function(m,p,g){var v,y=["LibFile","WidgetFile","PreLibJsFile","jQueryFile","PostLibJsFile"].map(function(n){return function(e,t){return e===t[n]&&n}}).concat([function(e,t){return 0===e.indexOf(t.PublicPath)&&"LibChunk"},function(t,e){return e.DataFiles.find(function(e){return e.url===t})&&"DataFile"},function(e,t){return 0===e.indexOf(t.BaseUserCdnFolder)&&"AccountFile"}]);return{handlePerfRecords:function(e){e=void 0===e?[]:e;for(var t=0,n=e=(void 0===e?[]:e).filter(function(e){var t=e.entryType,e=void 0===(e=e.name)?"":e;return!!g.isAllowed(t)&&("resource"!==t||!((t=m.getSettingsFile())&&(-1!==e.indexOf(t.EventServer)||-1!==e.indexOf(t.PlayerServer))))});t<n.length;t++){var r=n[t],i=r.name,a=r.startTime,o=r.duration,s=r.attribution,u=r.entryType,c=(l=function(e){var t=e.entryType,n=e.name,e=m.getCdnServerName();if("resource"===t&&n&&0===n.indexOf(e)){var r=m.getSettingsFile();if(e=Object(T.reduce)(y,function(e,t){return e||t(n,r)},void 0))return{url:(n?n.split("#").shift().split("?").shift().split("/").pop():null)||n,fileType:e}}return{}}(r)).url,d=l.fileType,l=void 0,f=r.startTime,h=r.entryType;l=r.duration,r=r.size,"largest-contentful-paint"===h&&(!v||v.size<r)&&(v={startTime:f,entryType:h,duration:l,size:r}),p.send(c||i,a,a+o,o,u,function(){if(s){for(var e=[],t=0,n=s;t<n.length;t++){var r=n[t];e.push({type:r.containerType,src:r.containerSrc,id:r.containerId,name:r.containerName})}return e}}(),d)}},getLastLCP:function(){return v}}}).dependencies("SettingsFile,UCPEventSender,UCPTrackingTypes")},2364:function(e,t,n){"use strict";n.r(t),n(1280).a.register("UCPEventSender").asFunction(function(e,s,u,c,d){var l=e.wrapCustomerLog("UserCentricPerf");return{send:function(e,t,n,r,i,a,o){o={name:e,quantity:Math.round(t),total:Math.round(n),duration:Math.round(r),type:i,result:c.toJSON(a),reason:"UserCentricPerf",message:u.getGroup(),language:d.getLanguage(),instanceId:o},l(o),s.send("feperf",o)}}}).dependencies("Logger,SessionThrottledBIBeaconLogger,WalkmeLoadTestIndicatorApi,JsonUtils,WalkMeInfo")},2365:function(e,t,n){"use strict";n.r(t),n(1280).a.register("UCPTracker").asFunction(function(t,n,r){var i;function a(){n.handlePerfRecords(i&&i.takeRecords()),i&&i.disconnect()}return{track:function(){var e;"PerformanceObserver"in window&&(e=[],"PerformanceResourceTiming"in window&&r.isAllowed("resource")&&e.push("resource"),"PerformancePaintTiming"in window&&r.isAllowed("paint")&&e.push("paint"),"PerformanceLongTaskTiming"in window&&r.isAllowed("longtask")&&e.push("longtask"),"LargestContentfulPaint"in window&&r.isAllowed("largest-contentful-paint")&&e.push("largest-contentful-paint"),0!==e.length&&((i=new PerformanceObserver(function(e){n.handlePerfRecords(e.getEntries())})).observe({entryTypes:e}),t.perf=t.perf||{},t.perf.observer=i,t.on("removeWalkMe",function(){a()})))},untrack:a}}).dependencies("WmInternals,UCPUtils,UCPTrackingTypes")},2366:function(e,t,n){"use strict";n.r(t);var n=n(1280),r=["paint","largest-contentful-paint"];n.a.register("UCPTrackingTypes").asFunction(function(t){return{isAllowed:function(e){return-1!==r.indexOf(e)||t.isFeatureEnabled("ucp-"+e)||t.isFeatureEnabled("ucp-measure-all")}}}).dependencies("FeaturesManager")}}]);