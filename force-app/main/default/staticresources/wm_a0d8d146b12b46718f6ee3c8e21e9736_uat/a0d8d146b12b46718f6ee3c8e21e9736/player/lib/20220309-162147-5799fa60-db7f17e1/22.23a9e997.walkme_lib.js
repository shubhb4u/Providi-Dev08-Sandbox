window,window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[22],{1186:function(e,a,o){"use strict";o.r(a),function(n){o.d(a,"init",function(){return e});var r=o(2507),i=o(23),e=function(e){var a=n.get("Logger");return Object(r.a)({name:"shield",callbackName:"onShieldReadyCb",publicPathStorageKey:"wm-shield-public-path",apiBaseUrlStorageKey:"wm-shield-api-base-url",dataFile:e,settingsFile:n.get("SettingsFile"),localStorageService:Object(i.get)(),commonUtils:n.get("CommonUtils"),wmDependencies:{consts:n.get("Consts"),hostData:n.get("HostData"),wmInternals:n.get("WmInternals"),deployableTypes:n.get("DeployableTypes"),logger:a,languageManager:n.get("LanguageManager"),clientStorageManager:n.get("ClientStorageManager"),userGuidContainer:n.get("UserGuidContainer"),newApiEventsConfigProvider:n.get("NewApiEventsConfigProvider"),commonEvents:n.get("CommonEvents"),flowDataServicesProvider:n.get("FlowDataServicesProvider"),ownershipManagerProvider:n.get("OwnershipManagerProvider"),bizflowApi:n.get("BizflowApi"),flowTransitionChecker:n.get("FlowTransitionChecker"),flowsManager:n.get("FlowsManager"),timerManager:n.get("TimerManager"),crossDomainManager:n.get("CrossDomainManager"),bizFlowOnBeforeUnloadChecker:n.get("BizFlowOnBeforeUnloadChecker"),bizflowOwnershipManager:n.get("BizflowOwnershipManager"),deployablesRestorer:n.get("DeployablesRestorer"),deployablesManagerFactory:n.get("DeployablesManagerFactory")}}).catch(function(e){a.error(e)})}}.call(this,o(2))},2507:function(e,a,n){"use strict";!function(h){n.d(a,"a",function(){return e});var e=function(e){var a,n,r,i,o,t,l=e.name,s=e.callbackName,c=e.publicPathStorageKey,g=e.apiBaseUrlStorageKey,w=e.dataFile,d=e.settingsFile,p=e.localStorageService,u=e.commonUtils,m=e.wmDependencies,e=(n=(f={name:l,settingsFile:d,localStorageService:p,publicPathStorageKey:c}).name,a=f.settingsFile,e=f.localStorageService,f=f.publicPathStorageKey,a=a.getSettingsFile(),f=e&&e.getItem(f),n=a&&a.Components&&a.Components[n]||"",f&&f+"main.js"||n),f=(f=(a={name:l,settingsFile:d,localStorageService:p,publicPathStorageKey:c}).name,n=a.settingsFile,c=a.localStorageService,a=a.publicPathStorageKey,n=n.getSettingsFile(),a=c&&c.getItem(a),f=(n&&n.Components&&n.Components[f]||"").replace(/main\.js$/,""),a||f),p=(p=(d={settingsFile:d,localStorageService:p,apiBaseUrlStorageKey:g}).settingsFile,g=d.localStorageService,d=d.apiBaseUrlStorageKey,p=p.getSettingsFile(),g&&g.getItem(d)||p.PlayerApiServer);if(!e)throw new Error("Component "+l+" don't have a valid entryPoint");return m=wmjQuery.extend({},m,{publicPath:f,apiBaseUrl:p,datafile:w}),r=(s={entryPoint:e,commonUtils:u,wmDependencies:m,callbackName:s}).commonUtils,i=s.entryPoint,o=s.callbackName,t=s.wmDependencies,new h(function(e,a){r.addScriptWithCallback(i,o,function(){return{resolve:e,reject:a,wmDependencies:t}},function(){a(new Error("Failed to addScriptWithCallback for: "+i))})})}}.call(this,n(12))}}]);