(window._walkmeABWebpackJP_latest=window._walkmeABWebpackJP_latest||[]).push([[6],{137:function(e,n,t){"use strict";var r=t(9),a=t(29),o=t(13),i=t(321),c=function(e){try{var n=r.a.deps.wmjQuery,t=n();if(!e)return t;n.merge(t,n(e));try{var o=window.frames;if(!o||!o.length)return t;[].concat(o).forEach((function(r){var a=n(e,r.document);n.merge(t,a)}))}catch(e){}return t}catch(e){return a.a.error(e),r.a.deps.wmjQuery()}};n.a={init:function(){!function(){try{var e=i.a.toString(),n=document.createElement("style"),t=document.createTextNode(e);n.className="walkme-to-remove",n.appendChild(t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n);try{var r=window.frames;r&&r.length&&[].concat(r).forEach((function(n){var t=document.createElement("style"),r=document.createTextNode(e);t.className="walkme-to-remove",t.appendChild(r),(n.document.head||n.document.getElementsByTagName("head")[0]).appendChild(t)}))}catch(e){}}catch(e){a.a.error(e)}}()},show:function(e){switch(void 0===e&&(e={}),e.type){case o.h.launcher:!function(e){if(e){var n=r.a.deps.wmjQuery,t=c(".walkme-launcher-id-"+e);if(t.length&&!t.find(".wm-ab-launcher-spinner").length){var a=n("<div>");a.addClass("wm-ab-launcher-spinner"),t.append(a)}}}(e.id)}},remove:function(e){switch(void 0===e&&(e={}),e.type){case o.h.launcher:!function(e){if(e){var n=c(".walkme-launcher-id-"+e);n.length&&n.find(".wm-ab-launcher-spinner").remove()}}(e.id)}},removeAll:function(){c(".wm-ab-launcher-spinner").remove()}}},154:function(e,n,t){"use strict";var r=t(109),a=t(110),o="middleEndian",i="iso",c="locale",u="custom",s="date",f="number",d="comma";n.a=function(e,n){switch(e&&e.type){case s:return function(e,n){var t=new Date(e.value);if(!Object(a.default)(t))return e;var s=function(e){return e?e.replace(/(D+)|(Y+)/g,(function(e){return e.toLowerCase()})):e}(n);if(!s)switch(e.settings&&e.settings.format){case o:s="MM/dd/yyyy";break;case i:s="yyyy-MM-dd";break;case c:return t.toLocaleDateString();case u:s=e.settings.customDateFormat;break;default:s="dd/MM/yyyy"}return Object(r.default)(t,s)}(e,n);case f:return function(e){return e.settings&&e.settings.decimalSeparator===d?String(e.value).replace(/\./g,","):e.value}(e);default:return e&&e.value}}},302:function(e,n,t){"use strict";(function(e,r,a,o){t.d(n,"a",(function(){return j}));var i,c,u=t(9),s=t(137),f=t(29),d=t(55),l=t(303),p=t(323),v=t(48),h=t(1),b=t(13),y=t(2);function m(){return(m=e||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function w(e,n,t,a,o,i,c){try{var u=e[i](c),s=u.value}catch(e){return void t(e)}u.done?n(s):r.resolve(s).then(a,o)}function g(e){return function(){var n=this,t=arguments;return new r((function(r,a){var o=e.apply(n,t);function i(e){w(o,r,a,i,c,"next",e)}function c(e){w(o,r,a,i,c,"throw",e)}i(void 0)}))}}var x,k,I,O,j=[y.rb,y.qb,y.pb,y.xb,y.ub,y.nb,y.ob,y.eb,y.Ab,y.sb],S=!1,E=!1,B=!1,A=function(e,n,t){return void 0===t&&(t={}),!(!n.webSystemGuid||!n.destinationUrl)||!!t.syncSwtDataToOtherAccounts&&t.syncSwtDataToOtherAccounts.some((function(n){return n.conversationId.includes(e.toString())}))},T=function(e,n){void 0===e&&(e={}),void 0===n&&(n={});try{return e.type===n.type&&e.id===n.id}catch(e){return!1}},M=function(n){var t,r=n.answers,o=n.settings;try{t=u.a.deps.eventsTrigger.sync(h.q,r)}catch(e){f.a.error(e)}var i=window.location,c=i.host,s=i.pathname,l=r.returnUrl||{type:"string",value:c+s},p=r.returnBaseUrl||{type:"string",value:c};return e(r,{returnUrl:l,returnBaseUrl:p},t||{}),a(r).forEach((function(e){var n=e[0],t=e[1];return d.a.setItem(n,t)})),o&&o.webSystemGuid&&a(r).forEach((function(e){var n=e[0],t=e[1];return d.a.setItem(n,t,null,o.webSystemGuid)})),d.a.sync()},C=function(e){O=null;try{a(e.answers).forEach((function(e){var n=e[0],t=e[1];return d.a.removeItem(n,t)}))}catch(e){f.a.error(e)}return d.a.sync()},F=((i={})[y.qb]=u.a.startFlowById,i[y.rb]=u.a.startFlowById,i[y.pb]=u.a.startFlowById,i[y.xb]=u.a.startWalkthruById,i[y.ub]=u.a.playSurveyById,i[y.nb]=u.a.playShoutOutById,i[y.eb]=u.a.playResourceById,i[y.ob]=u.a.playShuttleById,i[y.T]=u.a.openMenu,i),U=[{eventKey:"FlowCompleted",dataKey:"businessSolutionId"},{eventKey:"FlowStopped",dataKey:"businessSolutionId"},{eventKey:"FlowAborted",dataKey:"businessSolutionId"},{eventKey:"FlowBranched",dataKey:"businessSolutionId"},{eventKey:"FlowBranchReturned",dataKey:"businessSolutionId"}],P=((c={})[y.qb]=U,c[y.rb]=U,c[y.pb]=U,c[y.nb]=[{eventKey:"ShoutOutClosed",dataKey:"shoutOut"}],c),D=function(e){return new r(function(){var n=g(o.mark((function n(t){var r,a,i,c,s,l;return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.settings,a=r.app,i=r.id,!(j.indexOf(a)>-1)){n.next=4;break}return n.next=4,M(e);case 4:(c=F[a])&&(a&&d.a.setItem(Object(v.b)(a,i),!0),c(i),P[a]?(s=[],P[a].forEach((function(n){var r=n.eventKey,a=n.dataKey;s.push(r);var c=function(){var n=g(o.mark((function n(r,c){return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("FlowBranchReturned"!==c.eventType){n.next=4;break}O=null,n.next=13;break;case 4:if(!("FlowAborted"!==c.eventType&&"FlowBranched"!==c.eventType&&O&&c[a]===O||c&&c[a]===i||c&&c[a].Id===i)){n.next=12;break}if(u.a.deps.eventsListener.unbind(s.join(" ")),"FlowAborted"===c.eventType){n.next=9;break}return n.next=9,C(e);case 9:t(),n.next=13;break;case 12:"FlowBranched"===c.eventType&&(O=c[a]);case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();u.a.deps.eventsListener.bind(r,c)}))):t()),a===y.R&&((l=u.a.getLiveChat())?l.chat.openChat():f.a.warn("[ActionBot] LiveChat doesn't present on ctx"),t());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},N=function(e){return(u.a.getSettingsFile()||{}).CdnServerName+"/chatbot/action-bot-landing-page/index.html"+"?"+a(m({},e.options,{envId:u.a.getEnvId(),userGuid:u.a.getUserGuid()})).map((function(e){var n=e[0],t=e[1];return n+"="+encodeURIComponent(t)})).join("&")},L=function(e){s.a.remove(x),k.hide(),S=!1,E=!1,u.a.deps.commonEvents.raiseEvent(y.v),e&&u.a.deps.commonEvents.raiseEvent(y.h)},K=function(){var e=g(o.mark((function e(n,a){var i,c,h,w,O,j,M,C,F,U;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=a.botId,c=a.additionalSettings,h=void 0===c?{}:c,w=a.globalConfig,O=void 0===w?{}:w,n||f.a.error(new Error("Initiator is mandatory when opening DialogUI."),!0),j=n.type!==b.h.event&&T(x,n)&&S,x=n,k){e.next=13;break}return e.next=8,r.all([t.e(0),t.e(3),t.e(4)]).then(t.bind(null,741));case 8:if(e.t0=e.sent,e.t0){e.next=11;break}e.t0={};case 11:M=e.t0.default,k=new M;case 13:if(C=u.a.getFeaturesManager().isFeatureEnabled||u.a.isActionBotFeaturesEnabled,B){e.next=32;break}return e.next=17,k.init({userGuid:u.a.getUserGuid(),walkmeEndUserId:u.a.getEndUserGuid(),walkmeOpenUrl:u.a.openUrlWithWalkMe,isWorkstation:u.a.isWorkstation(),envId:u.a.getEnvId(),apiBaseUrl:u.a.getApiBaseUrl(),publicPath:u.a.getPublicPath(),uuid:d.a.getItem("euid"),siteConfig:u.a.getSiteConfig(),clientSideSFOauth:C("clientSideSFOauth"),evaluateTagsById:u.a.evaluateTagsById,getUserJsonSettings:u.a.getUserJsonSettings,globalConfig:O});case 17:F=e.sent,U=F.uuid,d.a.setItem("euid",U,63072e3),B=!0,k.on(y.j,(function(e){try{s.a.remove(x),S=!0,E=!1,u.a.deps.commonEvents.raiseEvent(y.w,a),h.playMode&&u.a.deps.commonEvents.raiseEvent(y.j)}catch(e){f.a.error(e)}Object(v.h)(e)})),k.on(y.i,(function(e){Object(v.h)(e),S=!1,E=!0})),k.on(y.h,(function(e){try{L(h.playMode)}catch(e){f.a.error(e)}Object(v.h)(e)})),k.on(y.g,(function(e){var n=e.type,t=e.data,r=e.options;try{var a={id:x.id||null,type:x.type||b.h.launcher,appType:x.type||b.h.launcher},o=m({},r.skipPInit||t.pInit?null:{pInit:a},t);Object(p.a)(n,o)}catch(e){f.a.error(e)}})),k.on(y.yb,function(){var e=g(o.mark((function e(n){var t,r;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=N(n),u.a.deps.commonEvents.raiseEvent(h.playMode?y.yb:y.u,m({},n,{landingPageUrl:t})),!((r=u.a.getUserJsonSettings())&&n.options&&n.settings&&A(n.options.conversationId,n.settings,r.actionbot))){e.next=7;break}window.open(t),e.next=17;break;case 7:if(l.a.skipWalkMeAction()){e.next=17;break}return e.prev=8,e.next=11,D(n);case 11:Object(v.h)(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),Object(v.g)(n,e.t0);case 17:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(n){return e.apply(this,arguments)}}()),k.on(y.B,function(){var e=g(o.mark((function e(n){var t,r,a;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=n.app,r=n.id,a=d.a.getItem(Object(v.b)(t,r)),Object(v.h)(n,a)}catch(e){Object(v.g)(n,e)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),k.on(y.o,function(){var e=g(o.mark((function e(n){var t,r;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.app,r=n.id,d.a.removeItem(Object(v.b)(t,r)),e.next=5,d.a.sync();case 5:Object(v.h)(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(v.g)(n,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()),k.on(y.M,(function(e){try{s.a.remove(x),I=null}catch(e){f.a.error(e)}Object(v.h)(e)})),k.on(y.ib,(function(e){var n=e.error,t=e.clientRelated;f.a.error(n,t),Object(v.h)(e)})),k.on(y.wb,function(){var e=g(o.mark((function e(n){var t;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.searchDeployables(n.searchTerm);case 3:t=e.sent,Object(v.h)(n,t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),f.a.error(e.t0),Object(v.g)(n,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()),k.on(y.db,function(){var e=g(o.mark((function e(n){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Object(v.h)(n,u.a.resolveBBCodes(n.text))}catch(e){f.a.error(e),Object(v.g)(n,e)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 32:if(!i||j){e.next=45;break}if(k.hide(),!E){e.next=40;break}k.show(),s.a.remove(x),S=!1,e.next=42;break;case 40:return e.next=42,k.open(a,I===i);case 42:I=i,e.next=48;break;case 45:k.hide(),s.a.remove(x),S=!1;case 48:e.next=55;break;case 50:e.prev=50,e.t1=e.catch(0),s.a.remove(x),[y.M].indexOf(e.t1)>-1&&f.a.error(e.t1);case 55:case"end":return e.stop()}}),e,null,[[0,50]])})));return function(n,t){return e.apply(this,arguments)}}();n.b={open:K,close:L,destroy:function(){k&&(k.close(),k=null)},isOpen:function(){return S}}}).call(this,t(14).assign,t(31).Promise,t(14).entries,t(37))},303:function(e,n,t){"use strict";n.a={init:function(e){this.config=e},skipWalkMeAction:function(){return this.config&&this.config.skipWalkMeAction}}},321:function(e,n,t){"use strict";var r=t(322),a=t.n(r)()(!1);a.push([e.i,".wm-ab-launcher-spinner {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.wm-ab-launcher-spinner::before {\n  animation: wm-ab-spin 1.5s linear infinite;\n  border: 2px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 2px solid transparent;\n  content: '';\n  height: 18px;\n  left: calc(50% - 9px);\n  position: absolute;\n  top: calc(50% - 9px);\n  width: 18px;\n}\n\n@keyframes wm-ab-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""]),n.a=a},323:function(e,n,t){"use strict";var r=t(9);n.a=function(e,n){return r.a.deps.eventSender.postEvent(e,n)}},48:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"d",(function(){return v})),t.d(n,"c",(function(){return h})),t.d(n,"f",(function(){return b})),t.d(n,"e",(function(){return y})),t.d(n,"h",(function(){return w})),t.d(n,"g",(function(){return g})),t.d(n,"b",(function(){return x}));var r=t(106),a=t.n(r),o=t(6),i=t.n(o),c=t(55),u=t(154),s=t(29),f=/\${([^{]+)}/g,d=function(e){return e.replace(/\\/g,"")},l=function(e){return void 0===e&&(e=""),d(e).replace(/\${(.*)}/,"$1")},p=function(e){return function(e){return d(e).match(f)||[]}(e).map((function(e){return l(e)}))},v=function(e){return void 0===e&&(e=""),d(e).split("@")},h=function(e){return void 0===e&&(e=""),"string"==typeof e&&Boolean(d(e).match(f))},b=function(e,n){void 0===e&&(e=""),void 0===n&&(n=!1);var t=p(e);if(!t.length)return e;var r=t.map((function(e){var t=v(e),r=t[0],a=t[1],o=Object(u.a)(c.a.getItem(r),a);return o&&n&&(c.a.removeItem(r),c.a.sync()),o})),o=d(e);return t.forEach((function(e,n){void 0!==r[n]&&(o=o.replace("${"+e+"}",r[n]))})),a()(o)};function y(e,n){var t;void 0===e&&(e=""),void 0===n&&(n=!1);try{h(e)&&(t=b(e,n))}catch(e){s.a.error(e)}return t||e}var m=function(){},w=function(e,n){i()(e,"resolve",m)(n)},g=function(e,n){i()(e,"reject",m)(n)},x=function(e,n){return e+"-"+n+"-started"}},55:function(e,n,t){"use strict";(function(e,r){var a=t(9);function o(n,t,r,a,o,i,c){try{var u=n[i](c),s=u.value}catch(e){return void r(e)}u.done?t(s):e.resolve(s).then(a,o)}n.a={getItem:function(e){return a.a.deps.clientStorageManager.getData("wm-ab-"+e)},setItem:function(e,n,t,r){return void 0===t&&(t=600),a.a.deps.clientStorageManager.saveData("wm-ab-"+e,n,t,r)},removeItem:function(e,n){var t;return void 0===n&&(n={}),(t=a.a.deps.clientStorageManager).removeData.apply(t,["wm-ab-"+e].concat(n))},clear:function(){},sync:function(){return(n=r.mark((function n(){return r.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new e((function(e){a.a.deps.clientStorageManager.refreshGetData(null,(function(){e()}))})));case 1:case"end":return n.stop()}}),n)})),function(){var t=this,r=arguments;return new e((function(e,a){var i=n.apply(t,r);function c(n){o(i,e,a,c,u,"next",n)}function u(n){o(i,e,a,c,u,"throw",n)}c(void 0)}))})();var n}}}).call(this,t(31).Promise,t(37))},742:function(e,n,t){"use strict";t.r(n),function(e,r){var a=t(745),o=t(9),i=t(137),c=t(303);function u(n,t,r,a,o,i,c){try{var u=n[i](c),s=u.value}catch(e){return void r(e)}u.done?t(s):e.resolve(s).then(a,o)}n.default={init:function(n){return(t=r.mark((function e(){var t,u;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.wmDependencies,u=n.config,o.a.init(t),c.a.init(u),i.a.init(),a.a.init();case 5:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new e((function(e,a){var o=t.apply(n,r);function i(n){u(o,e,a,i,c,"next",n)}function c(n){u(o,e,a,i,c,"throw",n)}i(void 0)}))})();var t}}}.call(this,t(31).Promise,t(37))},744:function(e,n,t){"use strict";(function(e){t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c}));var r=t(9),a=t(48),o={};function i(){var n=r.a.deps.win;o.open&&"function"==typeof o.open&&e(n,{open:o.open})}function c(){var n=r.a.deps.win,t=n.open;e(o,{open:t}),n.open=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.apply(void 0,[Object(a.e)(e)].concat(r))}}}).call(this,t(14).assign)},745:function(e,n,t){"use strict";(function(e,r,a){var o=t(29),i=t(9),c=t(746),u=t(302),s=t(137),f=t(751),d=t(13),l=t(1),p=t(744);function v(){return(v=e||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function h(e,n,t,a,o,i,c){try{var u=e[i](c),s=u.value}catch(e){return void t(e)}u.done?n(s):r.resolve(s).then(a,o)}var b=!1,y=[];function m(e,n){i.a.deps.eventsListener.bind(e,n),y.push({key:e,func:n})}function w(){var n=i.a.deps.consts.EVENTS.Launchers.LauncherClicked,t=i.a.getLaunchers(),f=t&&t.reduce((function(n,t){var r;return e(n,((r={})[t.Id]=t,r)),n}),{});return m(n,function(){var e,n=(e=a.mark((function e(n,t){var r,p,v,h,y,m,w,g,x,k,I,O,j,S,E,B,A,T;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.launcherId,e.prev=1,p=f[r],!b&&p&&i.a.isValidLauncher(p)){e.next=5;break}return e.abrupt("return");case 5:if(b=!0,r){e.next=8;break}throw new Error("[Integration: launcher click listener] Launcher ID isn't present in data");case 8:if(h=(v={}).botId,y=v.conversationId,m=p.Settings.action,w=m.actionType,g=m.arguments,w!==l.c){e.next=28;break}return e.next=13,Object(c.a)();case 13:if(e.t0=e.sent,e.t0){e.next=16;break}e.t0={};case 16:if(x=e.t0,k=x.launchers,I=void 0===k?{}:k,-1!==Object.keys(I).map(Number).indexOf(r)){e.next=23;break}return b=!1,e.abrupt("return");case 23:O=I[r]||{},j=O.bot,S=O.conversation,h=j,y=S,e.next=29;break;case 28:w===l.b&&(B=(E=g||{}).actionBotId,A=E.actionBotConversationId,h=Number(B),y=Number(A));case 29:return T={id:r,type:d.h.launcher},s.a.show(T),e.next=33,u.b.open(T,{botId:h,conversationId:y});case 33:b=!1,e.next=40;break;case 36:e.prev=36,e.t1=e.catch(1),b=!1,o.a.error(e.t1);case 40:case"end":return e.stop()}}),e,null,[[1,36]])})),function(){var n=this,t=arguments;return new r((function(r,a){var o=e.apply(n,t);function i(e){h(o,r,a,i,c,"next",e)}function c(e){h(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(e,t){return n.apply(this,arguments)}}())}function g(){return m(i.a.deps.consts.EVENTS.WalkmeReady,(function(){try{!function(){var e=window.location.search,n=/\?walkme=(\d+)-(\d+)(-(\d+))?/.exec(e);if(n){var t=n[1],r=n[2],a=n[4];if(Number(t)===d.a&&r){var o=v({botId:Number(r)},a&&{conversationId:Number(a)}),i={id:[t,r,a].filter(Boolean).join("-"),type:d.h.permalink};u.b.open(i,o)}}}()}catch(e){o.a.error(e)}}))}n.a={init:function(){var n;f.a.init(),n=i.a.deps.classWalkMeAPI,e(n,{actionbot:{open:function(e){var n=e.botId,t=e.conversationId,r=e.globalConfig,a={type:d.h.api};return u.b.open(a,{botId:n,conversationId:t,globalConfig:r})},close:function(){return u.b.close()},isOpen:function(){return u.b.isOpen()}}}),g(),w(),m(i.a.deps.consts.EVENTS.BeforeWalkmeRemoved,(function(){try{u.b.destroy();try{i.a.deps.wmjQuery('script[src*="chatbot"], script[src*="local"]').remove()}catch(e){}if(s.a.removeAll(),y&&y.length)for(;y.length;){var e=y.pop();i.a.deps.eventsListener.unbind(e.key,e.func)}["_walkmeABWebpackJP_latest","__wm-ab-core-js_shared__latest"].forEach((function(e){window.hasOwnProperty(e)&&delete window[e]})),window.open&&"function"==typeof window.open&&window.open.toString().indexOf("resolveVariable")>-1&&Object(p.b)()}catch(e){o.a.error(e)}})),m("wmActionBotRun",(function(e){var n={type:d.h.event};u.b.open(n,e)}))}}}).call(this,t(14).assign,t(31).Promise,t(37))},746:function(e,n,t){"use strict";(function(e,r){var a,o=t(747),i=t(9);function c(n,t,r,a,o,i,c){try{var u=n[i](c),s=u.value}catch(e){return void r(e)}u.done?t(s):e.resolve(s).then(a,o)}var u=function(){var n,t=(n=r.mark((function e(){var n,t,c,u,s;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=9;break}return n=i.a.getUserGuid(),t=i.a.getEnvId(),c=i.a.getSettingsFile(),e.next=6,Object(o.a)({url:"/chatbot/settings",baseURL:c.PlayerApiServer,headers:{"x-wmab-wmenv":t},params:{userGuid:n}});case 6:u=e.sent,s=u.data,a=s;case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new e((function(e,a){var o=n.apply(t,r);function i(n){c(o,e,a,i,u,"next",n)}function u(n){c(o,e,a,i,u,"throw",n)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();n.a=u}).call(this,t(31).Promise,t(37))},747:function(e,n,t){"use strict";(function(e){var r=t(9);n.a=function(n){var t=n.type,a=void 0===t?"GET":t,o=n.baseURL,i=n.url,c=n.headers,u=n.params;return new e((function(e,n){try{r.a.deps.wmAjax.execute({type:a,url:o+i,data:u,dataType:"json",headers:c,success:function(n){e({data:n})},error:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n(t)}})}catch(e){n(e)}}))}}).call(this,t(31).Promise)},748:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return i}));var r=t(9),a=t(48),o=t(29);function i(){var n=r.a.deps.actionStagesFactory,t=n.createActionStage;n.createActionStage=function(n){try{if(n&&"Redirect"===n.ActionType&&n.Settings&&n.Settings.actionArgs&&n.Settings.actionArgs.url){var r=n.Settings.actionArgs.url;Object(a.c)(r)&&e(n.Settings.actionArgs,{url:Object(a.f)(r)})}}catch(e){o.a.error(e)}for(var i=arguments.length,c=new Array(i>1?i-1:0),u=1;u<i;u++)c[u-1]=arguments[u];return t.apply(void 0,[n].concat(c))}}}).call(this,t(14).assign)},751:function(e,n,t){"use strict";var r=t(748),a=t(9),o=t(48),i=t(55),c=t(154),u=t(29);var s=t(744);n.a={init:function(){var e,n,t,f,d;Object(r.a)(),e=a.a.deps.clientStorageManager,n=e.getData,e.getData=function(e){try{if(Object(o.c)(e)){var t=Object(o.a)(e),r=Object(o.d)(t),a=r[0],s=r[1],f=i.a.getItem(a);if(f&&f.value)return Object(c.a)(f,s)}}catch(e){u.a.error(e)}for(var d=arguments.length,l=new Array(d>1?d-1:0),p=1;p<d;p++)l[p-1]=arguments[p];return n.apply(void 0,[e].concat(l))},t=a.a.deps.inputGenerator,f=t.text,d=t.selectByText,t.text=function(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return f.apply(void 0,[e,Object(o.e)(n)].concat(r))},t.selectByText=function(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return d.apply(void 0,[e,Object(o.e)(n)].concat(r))},function(){var e=a.a.deps.jQuerySelectorRunner,n=e.run;e.run=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return n.apply(void 0,[Object(o.e)(e)].concat(r))}}(),Object(s.a)()}}}}]);