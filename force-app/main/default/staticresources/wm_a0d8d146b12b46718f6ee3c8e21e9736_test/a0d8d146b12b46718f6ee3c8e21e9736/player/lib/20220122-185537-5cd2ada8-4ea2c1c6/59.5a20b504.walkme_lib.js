window,window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[59],{1313:function(e,n){e.exports=function(h,c,f,l){var n=!1,t={},i={};this.deployablesToSearchDeployables=function(e){return n?t:(n=!0,e=function e(n){var t,i,r,o,s=n.children();if(s&&s.length){for(var a=[],u=0;u<s.length;u++)a=function(e,n){if(n)for(var t=0;t<n.length;t++)!function(e,n){for(var t=0;t<e.length;t++)if(e[t].id==n.id&&e[t].type==n.type)return 1}(e,n[t])&&e.push(n[t]);return e}(a,e(s[u]));return a}return n=[{sid:null,id:(t=n).id(),name:t.name(),description:t.description(),keywords:t.keywords().join(" "),type:t.type(),properties:function(e){return t.properties(e).getAll()},action:(i=t.id(),r=t.type(),o=t.activate,function(){c.preSelectionAction(l.SEARCH_DEPLOYABLES_PROVIDER_ID,r+"-"+i),h(i,r,o)()}),uniqueClass:f(t),reportData:{searchProvider:l.SEARCH_DEPLOYABLES_PROVIDER_ID,identifer:{id:t.id(),type:t.typeId()}}}]}(e),t=function(e){for(var n=0;n<e.length;n++)e[n].sid=n;return e}(e))},this.deployablesToDisplayDeployables=function(e){return i={},wmjQuery(e).map(function(e,n){if(!i[n])return i[n]=!0,n=t[n],_walkmeInternals.ctx.get("CommonEvents").raiseEvent(l.EVENTS.SearchResultConverted,n),n.returnValue||n}).toArray()}}},1314:function(e,n,t){e.exports=function(){var r,e=this;function o(e){if(!e)return s;var n,t=wmjQuery.extend({},s);for(n in e){var i=e[n].add,r=e[n].remove,o=t[n]||[];i&&(o=o.concat(i)),r&&(o=o.filter(function(e){return-1==r.indexOf(e.toLowerCase())})),t[n]=o}return t}e.init=function(){var e=(e=_walkMe.getSiteConfig()).Custom&&e.Custom.stopwords;r=o(e)},e.initCustomStopwords=function(e){for(var n in e){var t=(r=e[n]||{}).add,i=r.remove,r=s[n]||[];t&&(r=r.concat(t)),i&&(r=r.filter(function(e){return-1==i.indexOf(e.toLowerCase())})),s[n]=r}},e.filterOutStopwords=function(e,n){var t="default";n?r=o():t=WalkMeAPI.getCurrentLanguage()||"default";var i=r[t]||[];return e.split(" ").filter(function(e){return-1==i.indexOf(e.toLowerCase())}).join(" ")}};var s=t(1412)},1401:function(e,n,t){var i=function(){return{SearchDeployablesConverter:t(1313),SearchDeployablesEngine:t(1402),StopwordsManager:t(1314),SearchClickReporter:t(1413),SearchEventSender:t(1414),SearchTermSaver:t(1415)}};"object"==typeof e.exports?e.exports=i:this.searchDeployables=i},1402:function(e,n,y){function t(){var r,o,t,s,n,i,a,u,h,c,f,l,d=y(1313),w=y(1403),v=y(1314);this.init=function(e){return i=a.deployablesToSearchDeployables(e),(u=new w(h)).index(i),i},this.search=function(i){var e,n=(e=i=c?f.filterOutStopwords(i):i,n=l?function(){for(var t=[],e=i.split(" "),n=0;n<e.length;n++)t=wmjQuery(t).add(u.search(e[n]).filter(function(e,n){return-1==wmjQuery.inArray(n,t)}));return t}():u.search(i),t.raiseEvent(s.EVENTS.Widget.SearchResultsReady,e={term:e,engineResults:n,defaultValue:n}),e.returnValue);return function(e,n){o(r.formatString("###### Search Results for Term: {0} ######",e),5);for(var t=0;t<n.length;t++)o(r.formatString("id: {0} name: {1} keywords: {2}",n[t].id,n[t].name,n[t].keywords),5)}(i,n=a.deployablesToDisplayDeployables(n)),n},function(e){t=e.commonEvents,r=e.commonUtils,s=e.consts,o=e.logger.wrapCustomerLog("menuSearch"),n=e.configSettings,l=e.isFeatureActiveFunc("wordByWordSearch"),(c=e.isFeatureActiveFunc("menuSearchStopwords"))&&(f=new v).init(),h={isFeatureActiveFunc:e.isFeatureActiveFunc,logger:o,configSettings:n,commonUtils:r,getHostDataFunc:e.getHostDataFunc,clientStorageManager:e.clientStorageManager,toJSON:e.toJSON,getCommonUtilsFunc:e.getCommonUtilsFunc},e.utils,a=new d(e.createAction,e.reporter,e.getUniqueClassFunc,s)}.apply(null,arguments)}e.exports=t,_walkmeInternals.ctx.register("SearchDeployablesEngine").asCtor(t).asProto()},1403:function(e,n,h){e.exports=function(e){var t,i,n=h(1404),r=h(1405),o=h(1406),s=h(1408),a=h(1410),u=e.isFeatureActiveFunc("keywordSearch");this.index=function(e){t.indexDeployables(e),u&&i.indexDeployables(e)},this.search=function(e){var n=t.search(e);return u?i.search(e,n):n},this.reset=function(){t.reset&&t.reset()},u&&(i=new r),t=e.isFeatureActiveFunc("regexSearch")?(e.logger("regexSearch is active",5),new n(e.logger)):e.isFeatureActiveFunc("eliSearch")?(e.logger("eliSearch is active",5),new o(e.logger)):!e.getHostDataFunc().isIE(9,"lt")&&e.isFeatureActiveFunc("lunrSearch")?(e.logger("lunrSearch is active",5),new s(e.logger)):(e.logger("fuseSearch is active",5),e={commonUtils:e.commonUtils,logger:e.logger,configSettings:e.configSettings,clientStorageManager:e.clientStorageManager,toJSON:e.toJSON,getCommonUtilsFunc:e.getCommonUtilsFunc},new a(e))}},1404:function(e,n){e.exports=function(n){var o,s=["name","description","keywords"],i=wmjQuery(),a=wmjQuery(),t=wmjQuery(),r=!1;function u(i){for(var r=0;r<s.length;r++){var e=a.filter(function(e,n){var t=!1;return o[n+"#"+r]&&o[n+"#"+r].match(i)&&(function(e){for(var n=0;n<s.length;n++)delete o[e+"#"+n]}(n),t=!0),t}),e=wmjQuery.merge(t,e);t=wmjQuery(e)}}function h(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}this.indexDeployables=function(e){r||(wmjQuery(e).each(function(e,n){!function(e){for(var n=0;n<s.length;n++){var t=s[n];(t=e[t]&&e[t].toLowerCase())&&(i[e.sid+"#"+n]=function(e){var n,t,i={"&gt;":">","&lt;":"<","&#39;":"'","&amp;":"&"};for(n in i)i.hasOwnProperty(n)&&(t=new RegExp(n,"gi"),e=e.replace(t,i[n]));return e}(t),a.push(e.sid))}}(n)}),r=!0,n("regex search indexing ended",5))},this.search=function(e){return o=wmjQuery.extend({},i),t=wmjQuery(),e=e.toLowerCase(),u(new RegExp(h(e.split(" ").join("[^ ]* (.* )?")))),u(new RegExp((e=e.split(" "),(e=wmjQuery(e).map(function(e,n){for(var t=n.split(""),i=0;i<t.length;i++)t[i]=h(t[i]);return t.join("[^ ]*")+"[^ ]*"}).toArray()).join(" (.* )?")))),t=t.slice(0,30),n("regex search ended",5),t}}},1405:function(e,n){e.exports=function(){var a;this.indexDeployables=function(e){for(var n={},t=0;t<e.length;t++){var i=e[t];if(i.keywords)for(var r=i.keywords.toLowerCase().split(" "),o=0;o<r.length;o++){var s=r[o];n[s]||(n[s]=[]),n[s].indexOf(i.sid)<0&&n[s].push(i.sid)}}a=n},this.search=function(e,n){if(!e)return null;var t=[];n&&(t=wmjQuery.isArray(n)?t.concat(n):t.concat(wmjQuery(n).toArray()));for(var i=e.split(" "),r=0;r<i.length;r++){var o=i[r].toLowerCase();a[o]&&(t=t.concat(a[o]))}return function(e){for(var n=[],t=0;t<e.length;t++)n.indexOf(e[t])<0&&n.push(e[t]);return n}(t)}}},1406:function(e,n,t){e.exports=function(s){var r=t(1407),o=["name","description"],a=wmjQuery(),u="",n=!1,h={},c=0;this.indexDeployables=function(e){n||(wmjQuery(e).each(function(e,n){!function(e){for(var n=0;n<o.length;n++){var t=o[n],i=e[t]&&e[t].toLowerCase();i&&a.push({str:new r(i,h[t]),ref:e.sid})}}(n)}),n=!0,s&&s("eli search indexing ended",5))},this.search=function(t){var e,n,i=!1;if(t=t.toLowerCase(),u&&u==t)return n;e=u&&0==t.indexOf(u)?t.substring(u.length):(i=!0,t),u=t;for(var r=0;r<a.length;r++){var o=a[r];o.str.search(e,i),c=o.str.score>c?o.str.score:c}return n=(n=(n=(n=a.filter(function(e,n){return n.str.score>=t.length})).sort(function(e,n){return n.str.score==e.str.score?n.str.str>e.str.str:n.str.score-e.str.score})).map(function(e,n){return n.ref})).slice(0,30),s&&s("eli search ended",5),n}}},1407:function(e,n){e.exports=function(e,n){var r,o=this,s={};o.score;var a=[o.score];function i(){r=[-1],o.score=n||0,a=[o.score]}o.str=function(e){var n,t,i={"&gt;":">","&lt;":"<","&#39;":"'","&amp;":"&"};for(n in i)i.hasOwnProperty(n)&&(t=new RegExp(n,"gi"),e=e.replace(t,i[n]));return e}(e),o.search=function(e,n){n&&i();for(var t=0;t<e.length;t++)!function(e){for(var n=0;n<e.length;n++){var t=e[n];r.push(t.position),a.push(t.score)}}(function(e){for(var n,t=[],i=0;i<3;i++)void 0===r[i]||(n=function(e,n){if(void 0===e)--a[n];else if(e==r[n]+1||o.str.charAt(e-1)==o.str.charAt(r[n]))a[n]+=2,r[n]=e;else{if(r.length<3)return{position:e,score:a[n]+1};a[n]+=1,r[n]=e}}(function(e,t){return(e=s[e])&&e.filter(function(e,n){return n>r[t]})[0]}(e,i),i))&&t.push(n);return t}(e.charAt(t)));o.score=function(){for(var e=0,n=0;n<a.length;n++)a[n]&&(e=Math.max(e,a[n]));return e}()},function(){for(var e=0;e<o.str.length;e++){var n=o.str.charAt(e);s[n]||(s[n]=wmjQuery()),s[n].push(e)}i()}()}},1408:function(e,n,a){e.exports=function(t){var i,r=a(1409),o={name:{boost:7},description:{boost:1},keywords:{boost:100}},s=!1;this.indexDeployables=function(e){var n;s||(n=r(),i=n(function(){for(var e in this.pipeline.remove(n.stemmer),this.ref("sid"),o)this.field(e,o[e])}),wmjQuery(e).each(function(e,n){i.add(n)}),s=!0,t("lunr search indexing ended",5))},this.search=function(e){return e=i.search(e),e=wmjQuery(e).map(function(e,n){return n.ref}),t("lunr search ended",5),e}}},1409:function(e,n){e.exports=function(){function r(e,n,t){"use strict";var i,r=Object(e),o=r.length>>>0,s=0;if(3==arguments.length)i=t;else{for(;s<o&&!(s in r);)s++;if(o<=s)return null;i=r[s++]}for(;s<o;s++)s in r&&(i=n(i,r[s],s,r));return i}function v(e){var n=new v.Index;return n.pipeline.add(v.trimmer,v.stopWordFilter,v.stemmer),e&&e.call(n,n),n}return v.version="0.7.0",(v.utils={}).warn=function(e){},v.utils.asString=function(e){return null==e?"":e.toString()},(v.EventEmitter=function(){this.events={}}).prototype.addListener=function(){var n=(e=Array.prototype.slice.call(arguments)).pop(),e=e;if("function"!=typeof n)throw new TypeError("last argument must be a function");e.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(n)},this)},v.EventEmitter.prototype.removeListener=function(e,n){this.hasHandler(e)&&(n=this.events[e].indexOf(n),this.events[e].splice(n,1),this.events[e].length||delete this.events[e])},v.EventEmitter.prototype.emit=function(e){var n;this.hasHandler(e)&&(n=Array.prototype.slice.call(arguments,1),this.events[e].forEach(function(e){e.apply(void 0,n)}))},v.EventEmitter.prototype.hasHandler=function(e){return e in this.events},(v.tokenizer=function(e){return arguments.length&&null!=e&&null!=e?Array.isArray(e)?e.map(function(e){return v.utils.asString(e).toLowerCase()}):e.toString().trim().toLowerCase().split(v.tokenizer.seperator):[]}).seperator=/[\s\-]+/,v.tokenizer.load=function(e){var n=this.registeredFunctions[e];if(!n)throw new Error("Cannot load un-registered function: "+e);return n},v.tokenizer.label="default",v.tokenizer.registeredFunctions={default:v.tokenizer},v.tokenizer.registerFunction=function(e,n){n in this.registeredFunctions&&v.utils.warn("Overwriting existing tokenizer: "+n),e.label=n,this.registeredFunctions[n]=e},(v.Pipeline=function(){this._stack=[]}).registeredFunctions={},v.Pipeline.registerFunction=function(e,n){n in this.registeredFunctions&&v.utils.warn("Overwriting existing registered function: "+n),e.label=n,v.Pipeline.registeredFunctions[e.label]=e},v.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||v.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},v.Pipeline.load=function(e){var t=new v.Pipeline;return e.forEach(function(e){var n=v.Pipeline.registeredFunctions[e];if(!n)throw new Error("Cannot load un-registered function: "+e);t.add(n)}),t},v.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){v.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},v.Pipeline.prototype.after=function(e,n){if(v.Pipeline.warnIfFunctionNotRegistered(n),-1==(e=this._stack.indexOf(e)))throw new Error("Cannot find existingFn");this._stack.splice(e+=1,0,n)},v.Pipeline.prototype.before=function(e,n){if(v.Pipeline.warnIfFunctionNotRegistered(n),-1==(e=this._stack.indexOf(e)))throw new Error("Cannot find existingFn");this._stack.splice(e,0,n)},v.Pipeline.prototype.remove=function(e){-1!=(e=this._stack.indexOf(e))&&this._stack.splice(e,1)},v.Pipeline.prototype.run=function(e){for(var n=[],t=e.length,i=this._stack.length,r=0;r<t;r++){for(var o=e[r],s=0;s<i&&void 0!==(o=this._stack[s](o,r,e))&&""!==o;s++);void 0!==o&&""!==o&&n.push(o)}return n},v.Pipeline.prototype.reset=function(){this._stack=[]},v.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return v.Pipeline.warnIfFunctionNotRegistered(e),e.label})},(v.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0}).Node=function(e,n,t){this.idx=e,this.val=n,this.next=t},v.Vector.prototype.insert=function(e,n){this._magnitude=void 0;var t=this.list;if(!t)return this.list=new v.Vector.Node(e,n,t),this.length++;if(e<t.idx)return this.list=new v.Vector.Node(e,n,t),this.length++;for(var i=t,r=t.next;null!=r;){if(e<r.idx)return i.next=new v.Vector.Node(e,n,r),this.length++;r=(i=r).next}return i.next=new v.Vector.Node(e,n,r),this.length++},v.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e,n=this.list,t=0;n;)t+=(e=n.val)*e,n=n.next;return this._magnitude=Math.sqrt(t)},v.Vector.prototype.dot=function(e){for(var n=this.list,t=e.list,i=0;n&&t;)n.idx<t.idx?n=n.next:(n.idx>t.idx||(i+=n.val*t.val,n=n.next),t=t.next);return i},v.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},(v.SortedSet=function(){this.length=0,this.elements=[]}).load=function(e){var n=new this;return n.elements=e,n.length=e.length,n},v.SortedSet.prototype.add=function(){for(var e,n=0;n<arguments.length;n++)~this.indexOf(e=arguments[n])||this.elements.splice(this.locationFor(e),0,e);this.length=this.elements.length},v.SortedSet.prototype.toArray=function(){return this.elements.slice()},v.SortedSet.prototype.map=function(e,n){return this.elements.map(e,n)},v.SortedSet.prototype.forEach=function(e,n){return this.elements.forEach(e,n)},v.SortedSet.prototype.indexOf=function(e){for(var n=0,t=this.elements.length,i=t-n,r=n+Math.floor(i/2),o=this.elements[r];1<i;){if(o===e)return r;i=(t=e<o?r:t)-(n=o<e?r:n),r=n+Math.floor(i/2),o=this.elements[r]}return o===e?r:-1},v.SortedSet.prototype.locationFor=function(e){for(var n=0,t=this.elements.length,i=t-n,r=n+Math.floor(i/2),o=this.elements[r];1<i;)i=(t=e<o?r:t)-(n=o<e?r:n),r=n+Math.floor(i/2),o=this.elements[r];return e<o?r:o<e?r+1:void 0},v.SortedSet.prototype.intersect=function(e){for(var n=new v.SortedSet,t=0,i=0,r=this.length,o=e.length,s=this.elements,a=e.elements;!(r-1<t||o-1<i);)s[t]!==a[i]?s[t]<a[i]?t++:s[t]>a[i]&&i++:(n.add(s[t]),t++,i++);return n},v.SortedSet.prototype.clone=function(){var e=new v.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},v.SortedSet.prototype.union=function(e){for(var n,e=this.length>=e.length?(n=this,e):(n=e,this),t=n.clone(),i=0,r=e.toArray();i<r.length;i++)t.add(r[i]);return t},v.SortedSet.prototype.toJSON=function(){return this.toArray()},(v.Index=function(){this._fields=[],this._ref="id",this.pipeline=new v.Pipeline,this.documentStore=new v.Store,this.tokenStore=new v.TokenStore,this.corpusTokens=new v.SortedSet,this.eventEmitter=new v.EventEmitter,this.tokenizerFn=v.tokenizer,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))}).prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},v.Index.prototype.off=function(e,n){return this.eventEmitter.removeListener(e,n)},v.Index.load=function(e){e.version!==v.version&&v.utils.warn("version mismatch: current "+v.version+" importing "+e.version);var n=new this;return n._fields=e.fields,n._ref=e.ref,n.tokenizer=v.tokenizer.load(e.tokenizer),n.documentStore=v.Store.load(e.documentStore),n.tokenStore=v.TokenStore.load(e.tokenStore),n.corpusTokens=v.SortedSet.load(e.corpusTokens),n.pipeline=v.Pipeline.load(e.pipeline),n},v.Index.prototype.field=function(e,n){return n={name:e,boost:(n=n||{}).boost||1},this._fields.push(n),this},v.Index.prototype.ref=function(e){return this._ref=e,this},v.Index.prototype.tokenizer=function(e){return e.label&&e.label in v.tokenizer.registeredFunctions||v.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"),this.tokenizerFn=e,this},v.Index.prototype.add=function(r,e){var o={},s=new v.SortedSet,n=r[this._ref],e=void 0===e||e;this._fields.forEach(function(e){var n=this.pipeline.run(this.tokenizerFn(r[e.name]));o[e.name]=n;for(var t=0;t<n.length;t++){var i=n[t];s.add(i),this.corpusTokens.add(i)}},this),this.documentStore.set(n,s);for(var t=0;t<s.length;t++){for(var i=s.elements[t],a=0,u=0;u<this._fields.length;u++){var h=this._fields[u],c=o[h.name],f=c.length;if(f){for(var l=0,d=0;d<f;d++)c[d]===i&&l++;a+=l/f*h.boost}}this.tokenStore.add(i,{ref:n,tf:a})}e&&this.eventEmitter.emit("add",r,this)},v.Index.prototype.remove=function(e,n){var t,i=e[this._ref],n=void 0===n||n;this.documentStore.has(i)&&(t=this.documentStore.get(i),this.documentStore.remove(i),t.forEach(function(e){this.tokenStore.remove(e,i)},this),n&&this.eventEmitter.emit("remove",e,this))},v.Index.prototype.update=function(e,n){n=void 0===n||n,this.remove(e,!1),this.add(e,!1),n&&this.eventEmitter.emit("update",e,this)},v.Index.prototype.idf=function(e){var n="@"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,n))return this._idfCache[n];var t=this.tokenStore.count(e),e=1;return 0<t&&(e=1+Math.log(this.documentStore.length/t)),this._idfCache[n]=e},v.Index.prototype.search=function(e){var e=this.pipeline.run(this.tokenizerFn(e)),w=new v.Vector,t=[],i=r(this._fields,function(e,n){return e+n.boost},0);return e.some(function(e){return this.tokenStore.has(e)},this)?(e.forEach(function(f,e,n){var l=1/n.length*this._fields.length*i,d=this,n=r(this.tokenStore.expand(f),function(e,n){var t,i=d.corpusTokens.indexOf(n),r=d.idf(n),o=1,s=new v.SortedSet;n!==f&&(t=Math.max(3,n.length-f.length),o=1/Math.log(t)),-1<i&&w.insert(i,l*r*o);for(var a=d.tokenStore.get(n),u=Object.keys(a),h=u.length,c=0;c<h;c++)s.add(a[u[c]].ref);return e.union(s)},new v.SortedSet);t.push(n)},this),r(t,function(e,n){return e.intersect(n)}).map(function(e){return{ref:e,score:w.similarity(this.documentVector(e))}},this).sort(function(e,n){return n.score-e.score})):[]},v.Index.prototype.documentVector=function(e){for(var n=this.documentStore.get(e),t=n.length,i=new v.Vector,r=0;r<t;r++){var o=n.elements[r],s=this.tokenStore.get(o)[e].tf,a=this.idf(o);i.insert(this.corpusTokens.indexOf(o),s*a)}return i},v.Index.prototype.toJSON=function(){return{version:v.version,fields:this._fields,ref:this._ref,tokenizer:this.tokenizerFn.label,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},v.Index.prototype.use=function(e){var n=Array.prototype.slice.call(arguments,1);n.unshift(this),e.apply(this,n)},(v.Store=function(){this.store={},this.length=0}).load=function(t){var e=new this;return e.length=t.length,e.store=r(Object.keys(t.store),function(e,n){return e[n]=v.SortedSet.load(t.store[n]),e},{}),e},v.Store.prototype.set=function(e,n){this.has(e)||this.length++,this.store[e]=n},v.Store.prototype.get=function(e){return this.store[e]},v.Store.prototype.has=function(e){return e in this.store},v.Store.prototype.remove=function(e){this.has(e)&&(delete this.store[e],this.length--)},v.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},v.stemmer=(h={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},c={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},e="[aeiouy]",n="[^aeiou][^aeiouy]*",f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),l=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),w=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),y=/^(.+?)(ss|i)es$/,m=/^(.+?)([^s])s$/,g=/^(.+?)eed$/,p=/^(.+?)(ed|ing)$/,b=/.$/,k=/(at|bl|iz)$/,S=new RegExp("([^aeiouylsz])\\1$"),x=new RegExp("^"+n+e+"[^aeiouwxy]$"),j=/^(.+?[^aeiou])y$/,M=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,I=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,E=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,$=/^(.+?)(s|t)(ion)$/,Q=/^(.+?)e$/,z=/ll$/,F=new RegExp("^"+n+e+"[^aeiouwxy]$"),function(e){var n,t,i,r,o,s,a,u;return e.length<3?e:("y"==(t=e.substr(0,1))&&(e=t.toUpperCase()+e.substr(1)),a=m,(o=y).test(e)?e=e.replace(o,"$1$2"):a.test(e)&&(e=e.replace(a,"$1$2")),a=p,(o=g).test(e)?(u=o.exec(e),(o=f).test(u[1])&&(e=e.replace(o=b,""))):a.test(e)&&(s=(u=a.exec(e))[1],(a=w).test(s)&&(e=s,i=S,r=x,(a=k).test(e)?e+="e":i.test(e)?e=e.replace(o=b,""):r.test(e)&&(e+="e"))),(o=j).test(e)&&(e=(s=(u=o.exec(e))[1])+"i"),(o=M).test(e)&&(s=(u=o.exec(e))[1],n=u[2],(o=f).test(s)&&(e=s+h[n])),(o=I).test(e)&&(s=(u=o.exec(e))[1],n=u[2],(o=f).test(s)&&(e=s+c[n])),a=$,(o=E).test(e)?(s=(u=o.exec(e))[1],(o=l).test(s)&&(e=s)):a.test(e)&&(s=(u=a.exec(e))[1]+u[2],(a=l).test(s)&&(e=s)),(o=Q).test(e)&&(s=(u=o.exec(e))[1],a=d,i=F,((o=l).test(s)||a.test(s)&&!i.test(s))&&(e=s)),a=l,(o=z).test(e)&&a.test(e)&&(e=e.replace(o=b,"")),"y"==t?t.toLowerCase()+e.substr(1):e)}),v.Pipeline.registerFunction(v.stemmer,"stemmer"),v.stopWordFilter=(v.generateStopWordFilter=function(e){var n=r(e,function(e,n){return e[n]=n,e},{});return function(e){if(e&&n[e]!==e)return e}})(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),v.Pipeline.registerFunction(v.stopWordFilter,"stopWordFilter"),v.Pipeline.registerFunction(v.trimmer=function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")},"trimmer"),(v.TokenStore=function(){this.root={docs:{}},this.length=0}).load=function(e){var n=new this;return n.root=e.root,n.length=e.length,n},v.TokenStore.prototype.add=function(e,n,t){var t=t||this.root,i=e.charAt(0),e=e.slice(1);if(i in t||(t[i]={docs:{}}),0!==e.length)return this.add(e,n,t[i]);t[i].docs[n.ref]=n,this.length+=1},v.TokenStore.prototype.has=function(e){if(!e)return!1;for(var n=this.root,t=0;t<e.length;t++){if(!n[e.charAt(t)])return!1;n=n[e.charAt(t)]}return!0},v.TokenStore.prototype.getNode=function(e){if(!e)return{};for(var n=this.root,t=0;t<e.length;t++){if(!n[e.charAt(t)])return{};n=n[e.charAt(t)]}return n},v.TokenStore.prototype.get=function(e,n){return this.getNode(e,n).docs||{}},v.TokenStore.prototype.count=function(e,n){return Object.keys(this.get(e,n)).length},v.TokenStore.prototype.remove=function(e,n){if(e){for(var t=this.root,i=0;i<e.length;i++){if(!(e.charAt(i)in t))return;t=t[e.charAt(i)]}delete t.docs[n]}},v.TokenStore.prototype.expand=function(n,t){var e=this.getNode(n),i=e.docs||{},t=t||[];return Object.keys(i).length&&t.push(n),Object.keys(e).forEach(function(e){"docs"!==e&&t.concat(this.expand(n+e,t))},this),t},v.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},v;var h,c,e,n,f,l,d,w,y,m,g,p,b,k,S,x,j,M,I,E,$,Q,z,F}},1410:function(e,n,r){e.exports=function(o){var s,a,e,u=r(1411),h={keys:["name","description","keywords"]},n=!1,i=32;function c(e){for(var n=-1,t=0;t<e.length;t++)if(n+=e[t].length+1,i<n)return t;return e.length}function t(e,n,t,i){return(n=function(e){if(e&&e[t])return e[t]}(n))||o.commonUtils.getSettingsValue(e,t,i)}this.indexDeployables=function(e){n||(s=e,n=!0,o.logger("fuse search indexing ended",5))},this.search=function(e){for(var n=(r=c(i=(e=e.replace(/ +(?= )/g,"")).split(" ")))?s:[];0<r;){var t=i.slice(0,r).join(" ");h.printSearchedDeployablesToLog&&(o.logger("Searching in these deployables inside the following keys only: "+o.toJSON(h),5),o.logger(o.getCommonUtilsFunc().toJSON(n),5));var i,t=new u(n,h).search(t),n=wmjQuery(t).map(function(e,n){return n.sid}),r=c(i=i.slice(r,i.length))}return o.logger("fuse search ended",5),a?n.slice(0,a):n},this.reset=function(){s=null},e=o.clientStorageManager,(e=e.getData("walkme-search-settings"))&&(h.printSearchedDeployablesToLog=!0),a=t(o.configSettings,e,"searchMaxResults"),h.threshold=t(o.configSettings,e,"searchTH",.5),h.distance=t(o.configSettings,e,"searchDI"),o.logger("Search threshold is: "+h.threshold,1),o.logger("Search distance is: "+h.distance,1),o.logger("Search max results is: "+a,1)}},1411:function(e,n){var t;function y(y,m){var g=(m=m||{}).location||0,t=m.distance||100,p=m.threshold||.6,b=(y=m.caseSensitive?y:y.toLowerCase()).length;if(32<b)throw new Error("Pattern length is too long");var k=1<<b-1,S=function(){for(var e={},n=0,n=0;n<b;n++)e[y.charAt(n)]=0;for(n=0;n<b;n++)e[y.charAt(n)]|=1<<y.length-n-1;return e}();function x(e,n){return e/=b,n=Math.abs(g-n),t?e+n/t:n?1:e}this.search=function(e){if(e=m.caseSensitive?e:e.toLowerCase(),y===e)return{isMatch:!0,score:0};var n,t,i,r,o,s,a,u,h,c=e.length,f=p,l=e.indexOf(y,g),d=b+c,w=1,v=[];for(-1!=l&&(f=Math.min(x(0,l),f),-1!=(l=e.lastIndexOf(y,g+b))&&(f=Math.min(x(0,l),f))),l=-1,n=0;n<b;n++){for(i=0,r=d;i<r;)x(n,g+r)<=f?i=r:d=r,r=Math.floor((d-i)/2+i);for(d=r,s=Math.max(1,g-r+1),a=Math.min(g+r,c)+b,(u=Array(a+2))[a+1]=(1<<n)-1,t=a;s<=t;t--)if(h=S[e.charAt(t-1)],u[t]=0===n?(u[t+1]<<1|1)&h:(u[t+1]<<1|1)&h|(o[t+1]|o[t])<<1|1|o[t+1],u[t]&k&&(w=x(n,t-1))<=f){if(f=w,v.push(l=t-1),!(g<l))break;s=Math.max(1,2*g-l)}if(x(n+1,g)>f)break;o=u}return{isMatch:0<=l,score:w}}}t=function(d,w){var v=(w=w||{}).keys;this.search=function(e){var n,t,i,r,o,s,a=new y(e,w),u=d.length,h=[],c={},f=[];function l(e,n,t){null!=e&&"string"==typeof e&&(r=a.search(e)).isMatch&&((s=c[t])?s.score=Math.min(s.score,r.score):(c[t]={item:n,score:r.score},h.push(c[t])))}if("string"==typeof d[0])for(n=0;n<u;n++)l(d[n],n,n);else for(n=0;n<u;n++)for(i=d[n],t=0;t<v.length;t++)l(i[v[t]],i,n);for(h.sort(function(e,n){return e.score-n.score}),o=h.length,n=0;n<o;n++)f.push(w.id?h[n].item[w.id]:h[n].item);return f}},e.exports=t},1412:function(e,n){e.exports={default:["a","abst","actually","adj","ah","almost","already","also","although","always","am","among","amongst","an","and","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","apparently","approximately","are","aren","aren't","as","aside","ask","asking","at","away","awfully","b","back","be","became","because","become","becomes","becoming","been","before","beforehand","begin","beginning","beginnings","begins","behind","being","believe","below","beside","besides","between","beyond","biol","both","brief","briefly","but","by","c","ca","came","can","cannot","can't","cause","causes","certain","certainly","co","com","come","comes","contain","containing","contains","could","couldnt","d","did","didn't","do","does","doesn't","doing","done","don't","down","downwards","due","during","e","each","ed","edu","effect","eg","eight","eighty","either","else","elsewhere","end","ending","enough","especially","et","et-al","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","except","f","far","few","ff","fifth","first","five","fix","followed","following","follows","for","former","formerly","forth","found","four","from","further","furthermore","g","gave","get","gets","getting","give","given","gives","giving","go","goes","gone","got","gotten","h","had","happens","hardly","has","hasn't","have","haven't","having","he","hed","hence","her","here","hereafter","hereby","herein","heres","hereupon","hers","herself","hes","hi","hid","him","himself","his","hither","home","how","howbeit","however","hundred","i","id","ie","if","i'll","im","immediate","immediately","importance","in","inc","indeed","instead","into","invention","inward","is","isn't","it","itd","it'll","its","itself","i've","j","just","k","keep","keeps","kept","kg","km","know","known","knows","l","largely","last","lately","later","latter","latterly","least","less","lest","let","lets","like","liked","likely","line","little","'ll","look","looking","looks","ltd","m","made","mainly","makes","many","may","maybe","me","mean","means","meantime","meanwhile","merely","mg","might","million","miss","ml","more","moreover","most","mostly","mr","mrs","much","mug","must","my","myself","n","na","namely","nay","nd","near","nearly","necessarily","need","needs","neither","never","nevertheless","next","nine","ninety","no","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","now","nowhere","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","omitted","on","once","one","ones","only","onto","or","ord","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","owing","own","p","part","particular","particularly","past","per","perhaps","placed","please","plus","poorly","possible","possibly","potentially","pp","predominantly","present","previously","primarily","probably","promptly","proud","provides","put","q","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","respectively","resulted","resulting","right","run","s","said","same","saw","say","saying","says","sec","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sent","seven","several","shall","she","shed","she'll","shes","should","shouldn't","show","showed","shown","showns","shows","significant","significantly","similar","similarly","since","six","slightly","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","still","stop","strongly","sub","substantially","successfully","such","sufficiently","sup","sure","t","take","taken","taking","tell","tends","th","than","thank","thanks","thanx","that","that'll","that's","that've","the","their","theirs","them","themselves","then","thence","there","thereafter","thereby","there'd","therefore","therein","there'll","thereof","there're","there's","thereto","thereupon","there've","these","they","they'd","they'll","they're","they've","think","this","those","thou","though","thousand","through","throughout","thru","thus","til","tip","to","together","too","took","toward","towards","tried","tries","truly","try","trying","ts","twice","two","u","un","under","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","us","used","useful","usefully","usefulness","uses","usually","v","various","'ve","very","via","viz","vol","vols","vs","w","want","wants","was","wasn't","way","we","wed","welcome","we'll","went","were","weren't","we've","what","whatever","what'll","whats","when","whence","whenever","where","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","while","whim","whither","who","who'd","whoever","whole","who'll","whom","whomever","who's","whose","why","widely","willing","wish","with","within","without","wont","words","world","would","wouldn't","www","x","y","yes","yet","you","you'd","you'll","your","you're","yours","yourself","yourselves","you've","z","zero"]}},1413:function(e,n){function t(){var n,t,i,r,o,w,s,a,u,h,c,f,l,d,v,y,m,g,p,b,k=this,S=0,x=6e3;k.init=function(){a=u.register("s1",{actionUrl:"/Search/SaveSearchs",successCallback:function(e){j(),M(e)},failCallback:function(){j()},storageEnabled:!1,prefixForStorage:"srchm",sendingThreshold:1,dataType:"search model",dataIdFieldName:"Id",requestParamsFunc:function(e){return{searchModelsSerialized:n.toJSON(e)}}}),c=u.register("s2",{actionUrl:"/Search/ResultsClickedBeforeSearch",prefixForStorage:"srchhisrcbs",sendingThreshold:1,storageEnabled:!1,dataType:"search history",dataIdFieldName:"Id",requestParamsFunc:function(e){return{searchHistorysSerialized:n.toJSON(e),userGuid:t}}}),h=u.register("s3",{actionUrl:"/Search/SearchResultsClicked",prefixForStorage:"srchhisrc",sendingThreshold:1,storageEnabled:!1,dataType:"search history",dataIdFieldName:"Id",requestParamsFunc:function(e){return{searchHistorysSerialized:n.toJSON(e),userGuid:t}}})},k.searchGuid=function(e){if(void 0===e)return s;s=e},k.searchQuery=function(e){if(void 0===e)return i;i=e},k.impedimentSearch=function(e){o=e};var j=function(){S--};k.pendingSearches=function(){return S};var M=function(e){S||(s=e,r&&(E(r.provider,r.itemselected),r=null))};k.preSelectionAction=function(e,n){s?E(e,n):0<S?r={provider:e,itemselected:n}:o&&I(n)};var I=function(e){k.sendResultClickedBeforeSearchToServer(i,t,e)};function E(e,n){k.sendSearchResultClickedToServer(t,s,e,n),s=void 0}k.sendSearchResultClickedToServer=function(e,n,t,i){d()||(v(),i={guid:n,selectedResultProvider:t,selectedResult:i,permutationId:y(),endUserGuid:m(),source:g(),auditGuid:(new Date).getTime()+"-"+p()},h.sendData(i))},k.getSearchResultsFromServer=function(e,n,t,i,r){var o,s,a,u,h,c,f,l,d;return o=e,s=n,a=r,l=v(),d=_walkmeInternals.ctx.get("FeaturesManager").isFeatureEnabled("usePostSearch"),u=o,h=s,c=a,e=d,n=_walkmeInternals.ctx.get("SearchProviderUrlsManager").getAllSegmented(),o=_walkmeInternals.ctx.get("CommonUtils").toJSON(n),s=_walkmeInternals.ctx.get("LanguageManager").getCurrentLanguage(),c={userGuid:u,query:h,domainsSerialized:e?n:o,permutationId:y(),endUserGuid:m(),source:g(),saveSearch:!c,endUserLanguage:s},_walkmeInternals.ctx.get("FeaturesManager").isFeatureEnabled("additionalSearchParams")&&(o=_walkMe.getSiteConfig().Custom&&_walkMe.getSiteConfig().Custom.additionalSearchParams,s=f=o?_walkmeInternals.ctx.get("CommonUtils").getWindowVar(o):f,c.customDataSerialized=e?s:_walkmeInternals.ctx.get("CommonUtils").toJSON(s)),a=c,a={url:l+"/Search/Search",data:d?_walkmeInternals.ctx.get("CommonUtils").toJSON(a):a,timeout:x},d&&(a.type="POST",a.dataType="json",a.contentType="text/plain"),(r=w.execute(r=a)).success(t),r.error(i),r},k.saveSearchToServer=function(e,n,t){f.reportSearchTerm(n,t),S++,d()||(v(),t={userGuid:e,query:b(n),permutationId:y(),endUserGuid:m(),source:g(),auditGuid:(new Date).getTime()+"-"+p()},l.customerLog("sending search of "+n+" for "+e,5),a.sendData(t))},k.sendResultClickedBeforeSearchToServer=function(e,n,t){v(),t={searchQuery:b(e),selectedResult:t,permutationId:y(),endUserGuid:m(),source:g(),auditGuid:(new Date).getTime()+"-"+p()},c.sendData(t)},function(e){n=e.commonUtils,t=e.userGuid,e.serverName,w=e.wmAjax,u=e.dataSenderManager,l=e.logger,d=e.isAuditDisabledFunc,v=e.getPlayerServerFunc,y=e.getABPermutationIdFunc,m=e.getEndUserGuidFunc,g=e.getEnvIdFunc,p=e.generateNewGuidFunc,f=e.searchEventSender,x=_makeTutorial.getSiteConfig().Custom&&_makeTutorial.getSiteConfig().Custom.searchTimeOut?1e3*_makeTutorial.getSiteConfig().Custom.searchTimeOut:x,b=e.manipulateSearchTermFunc||function(e){return e}}.apply(null,arguments)}e.exports=t,_walkmeInternals.ctx.register("SearchClickReporter").asCtor(t).asProto()},1414:function(e,n){function t(){var o,s,a,u,h;this.reportSearchTerm=function(e,n){try{var t={type:o.EVENT_APPS.WidgetSearch,pId:n,value:h(e)};o.postEvent(o.EVENT_TYPES.Search,t)}catch(e){s.error(e)}},this.reportResultClicked=function(e){try{var n=(t=e,r={type:o.EVENT_APPS.WidgetSearch,pId:t.searchId,value:h(t.searchQuery.trim()),total:t.totalResults},t.clickedItem&&((i=t.clickedItem.searchProvider)==a.SEARCH_DEPLOYABLES_PROVIDER_ID?(r.aAppType=u.map(t.clickedItem.identifer.type),r.aoId=t.clickedItem.identifer.id):r.aoId=t.clickedItem.identifer.url,r.indx=t.clickedItem.index+1,r.aType=i),r);o.postEvent(o.EVENT_TYPES.Click,n)}catch(e){s.error(e)}var t,i,r},function(e){o=e.eventSender,s=e.logger,a=e.consts,h=e.manipulateSearchTermFunc||function(e){return e},u=_walkmeInternals.ctx.get("DeployableTypeToEventSenderAppTypeMapper")}.apply(null,arguments)}e.exports=t,_walkmeInternals.ctx.register("SearchEventSender").asCtor(t).asProto()},1415:function(e,n){function t(){var i,t,r,o,s,a,u,h=["how","how to","where","what","when","which","who","why","איך","כיצד","como","wie","come"],c=_walkMe.getTimerManager(),f=5,l=3;function d(e,n){var t;!e||e.length<l||(t=!0,(t=(!i||e!=i&&!i.match("^"+e+".{0,"+(f-1)+"}$"))&&t)&&(t=n,(n=e)&&-1==wmjQuery.inArray(n.toLowerCase(),h)&&(u.customerLog("Analytics: Saving the search term ["+n+"]",3),s.saveSearchToServer(a,n,t)),i=e))}this.saveSearch=function(e,n){o&&o.clear(),t=e,r=n,o=c.setWalkmeTimeout(function(){d(e,n)},2500)},this.saveLastSearch=function(){t!=i&&(d(t,r),o&&o.clear()),r=t=i=void 0},function(e){s=e.reporter,a=e.userGuid,u=e.logger}.apply(null,arguments)}e.exports=t,_walkmeInternals.ctx.register("SearchTermSaver").asCtor(t).asProto()}}]);