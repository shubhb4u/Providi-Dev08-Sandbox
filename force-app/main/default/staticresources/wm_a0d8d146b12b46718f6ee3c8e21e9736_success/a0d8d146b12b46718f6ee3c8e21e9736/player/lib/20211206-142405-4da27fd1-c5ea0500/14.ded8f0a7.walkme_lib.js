window,window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[14],{1195:function(t,u,f){"use strict";f.r(u),function(e){f.d(u,"Aggregator",function(){return i});var t=f(0),r=f(7),n=f(1433),a=f(60),o=f(265),c=f(2777),i=(s.prototype.add=function(t,e){var r=this;this._durations.push(t),e.forEach(function(t){return r._contributors.add(t)})},s.prototype.flush=function(t){void 0===t&&(t=!1);var e=Object(a.a)();n.a.get("PerformanceDataSender").send(Object(c.a)(e-this._lastFlush,this._durations),t),this.resetData(e)},s.prototype.resetData=function(t){this._lastFlush=t,this._contributors=new e,this._durations=[]},Object(t.__decorate)([Object(r.c)("Aggregator",{ctx:n.a,dependencies:"Config,TimerManager,WindowBeforeUnloadHandler"})],s));function s(t,e){var r=this;this.resetData(Object(a.a)()),e.playSetInterval(function(){return r.flush()},t.interval||1e4),Object(o.register)(function(){return r.flush(!0)})}}.call(this,f(28).wmSet)},1196:function(t,s,u){"use strict";u.r(s),function(t){u.d(s,"AsapDataCollector",function(){return c});var e=u(0),r=u(60),n=u(2503),a=u(7),o=u(1433),c=(i.prototype.collect=function(t){var e=this;this.contributors.add(t),this.start||(this.start=Object(r.a)(),Object(n.a)(function(){return e.process()}))},i.prototype.process=function(){var t=Object(r.a)()-this.start;17<t&&this.aggregator.add(t,this.contributors),this.resetData()},i.prototype.resetData=function(){this.contributors=new t,this.start=null},Object(e.__decorate)([Object(a.c)("Collector",{ctx:o.a,dependencies:"Aggregator"})],i));function i(t){this.aggregator=t,this.resetData()}}.call(this,u(28).wmSet)},1197:function(t,c,i){"use strict";i.r(c),function(e){i.d(c,"init",function(){return t});var r=i(1433),n=i(54),a=i(148),o=i(118);function t(){r.a.register("Config").asInstance(Object(n.getExperiment)(n.Experiments.DataCollector).config||{});var t=r.a.get("Collector");e.get("Instrumenter").getStream().pipe(Object(a.a)(function(t){return t.__stage==o.a.Start})).subscribe(function(){return t.collect()})}}.call(this,i(2))},1433:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var r=r(10),n=Object(r.create)()},2503:function(t,r,n){"use strict";!function(e){function t(t){e.resolve().then(t)}n.d(r,"a",function(){return t})}.call(this,n(12))},2777:function(t,e,r){"use strict";var o=r(0),c=c||{};c[c.score=1]="score";var i=r(25);function n(t,e){t=Math.round(t);var r=Math.round(Object(i.reduce)(e,function(t,e){return t+e},0)),n=Math.round(Object(i.reduce)(e,function(t,e){return t+e*e},0)),a=Math.round(Math.max.apply(Math,Object(o.__spreadArrays)(e,[0])));return{type:c.score,amount:a,sum:r,total:n,count:e.length,duration:t}}r.d(e,"a",function(){return n})}}]);