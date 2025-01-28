function logError(e){try{console.log("Error: "+e)}catch(e){}}function IndexedDBManager(){var o,s=this,u="storage",e=indexedDB||mozIndexedDB||webkitIndexedDB||msIndexedDB;function l(e,n,t,r,i){var a;n?t(n):o?((a=o.transaction([u],e)).onerror=function(e){r&&r(e)},a=a.objectStore(u),t&&t(a)):setTimeout(function(){(i=i||0)<5&&l(e,n,t,r,i+1)},50)}function c(t,r,i,a,o){l("readwrite",null,function(n){s.getItem(r,i,function(e){e=t(e||{}),s.setItem(r,i,e,a,o,n)},o,n)},o)}s.init=function(n){try{var t=e.open("WalkMeStorage",2);t.onerror=function(e){logError("Error starting cross domain listening")},t.onblocked=function(e){logError("indexedDB open blocked")},t.onsuccess=function(e){o=t.result,n&&n()},t.onupgradeneeded=function(e){(e=e.target.result).objectStoreNames.contains(u)&&e.deleteObjectStore(u),e.createObjectStore(u,{keyPath:"uniqueKey"}).createIndex("guid","guid",{unique:!1})}}catch(e){logError(e)}},s.testConnection=function(e,n){(o?e:n)()},s.setItem=function(n,t,r,i,a,e){l("readwrite",e,function(e){(e=e.put({uniqueKey:n+t,guid:n,key:t,value:r})).onsuccess=function(e){i&&i()},e.onerror=function(e){a&&a()}},a)},s.getItem=function(n,t,r,i,e){l("readwrite",e,function(e){(e=e.get(n+t)).onsuccess=function(e){e=(e=e.target.result)?e.value:void 0,r&&r(e)},e.onerror=function(e){i&&i()}},i)},s.getAll=function(r,i,e){l("readwrite",null,function(e){var n=[],t=e.index("guid"),e=IDBKeyRange.only(r);t.openCursor(e).onsuccess=function(e){(e=e.target.result)?(void 0!==e.value.value&&n.push({key:e.value.key,saveObj:e.value.value}),e.continue()):i&&i(n)}},e)},s.removeItem=function(n,t,r,i){l("readwrite",null,function(e){(e=e.delete(n+t)).onsuccess=function(e){r&&r()},e.onerror=function(e){i&&i()}},i)},s.addToDictionary=function(e,n,t,r,i,a,o){c(function(e){var n=(e.value?JSON.parse(e.value):{})||{};return n[t]=r,e.value=JSON.stringify(n),e},e,n,i,a)},s.removeFromDictionary=function(e,n,t,r,i,a){c(function(e){var n=(e.value?JSON.parse(e.value):{})||{};return delete n[t],e.value=JSON.stringify(n),e},e,n,r,i)},s.addToSet=function(a,o,u,c,d,e){l("readwrite",null,function(i){s.getItem(a,o,function(e){var n=[],t=u.value||[];e&&e.value&&(n=JSON.parse(e.value)||[]);for(var r=0;r<t.length;r++)-1==n.indexOf(t[r])&&n.push(t[r]);u.value=JSON.stringify(n),s.setItem(a,o,u,c,d,i)},d,i)},d)},s.increment=function(t,r,i,a,o,u,e){l("readwrite",e,function(n){s.getItem(t,r,function(e){(e=e||{value:0}).value!==i&&e.value++,e.saveTime=(new Date).getTime(),e.expireSeconds=a,s.setItem(t,r,e,function(){o&&o(e.value)},u,n)},u,n)},u)},s.getOrSetAndGet=function(t,r,i,a,o,u,e){l("readwrite",e,function(n){s.getItem(t,r,function(e){e?o&&o(JSON.parse(e.value)):(e={value:JSON.stringify(i),saveTime:(new Date).getTime(),expireSeconds:a},s.setItem(t,r,e,function(){o&&o(i)},u,n))},u,n)})},s.setDictionary=function(t,e,n,r,i){c(function(e){for(var n in t)"value"!=n&&t.hasOwnProperty(n)&&(e[n]=t[n]);return e},e,n,r,i)},function(){}.apply(null,arguments)}var indexedDb=new IndexedDBManager;function createCallback(n,t){return function(e){sendMessage({num:n,success:t,obj:e})}}function sendMessage(e){postMessage(JSON.stringify(e))}indexedDb.init(function(){sendMessage("ready")}),onmessage=function(e){var n=JSON.parse(e.data),t=n.num,r=n.guid,e=n.action,i=n.obj,a=createCallback(t,!0),o=createCallback(t,!1);switch(e){case"set":!1===i.clearDict?indexedDb.setDictionary(i.value,r,i.key,a,o):indexedDb.setItem(r,i.key,i.value,a,o);break;case"get":indexedDb.getItem(r,i.key,a,o);break;case"all":indexedDb.getAll(r,a,o);break;case"del":indexedDb.removeItem(r,i.key,a,o);break;case"add":indexedDb.addToDictionary(r,i.dict,i.key,i.value,a,o);break;case"addSet":indexedDb.addToSet(r,i.key,i.value,a,o);break;case"rem":indexedDb.removeFromDictionary(r,i.dict,i.key,a,o);break;case"test":indexedDb.testConnection(a,o);break;case"inc":indexedDb.increment(r,i.key,i.lastValue,i.ttl,a,o);break;case"getOrSet":indexedDb.getOrSetAndGet(r,i.key,i.fallbackValue,i.ttl,a,o)}};