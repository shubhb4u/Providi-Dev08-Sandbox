window,(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[5],{397:function(t,i,s){"use strict";s.r(i),s.d(i,"AttentionGrabberDataManager",function(){return n});var i=s(133),h=s(23),n=(r.prototype.updateSelection=function(t){this.selectedId=t,this.t()},r.prototype.updateEvent=function(){this.o=(new Date).getTime(),this.t()},r.prototype.updateUnload=function(){this.unload=1,this.t()},r.prototype.init=function(){var t,i,s=this.A.getData(this.M),h=(new Date).getTime(),n=this.G.get().Settings,r=parseInt(n.AGDataVersion)||0;s?(this.C=h,this.sessionCounter=s.sc||1,this.D=this.p.isDefined(s.v)?s.v:r,this.S=r>this.D,t=s.st?Math.abs(h-s.st):0,i=void 0,this.O&&(i=this.O.getItem(this.A.keysConfig.attentionGrabber.sessionLength.key)),this.U=parseFloat(i||n.AGSL||1440),this.F=t/6e4>this.U,this.isNewSession=this.F||this.S,this.sessionCounter=this.S?1:this.F?this.sessionCounter+1:this.sessionCounter,this.D=this.S?r:s.v,this.selectedId=this.isNewSession?void 0:s.id,this.o=this.isNewSession?h:s.et,this.unload=this.isNewSession?0:s.u,this.eventTimestampDelta=this.o?Math.abs(h-this.o):0):(this.isNewSession=!0,this.C=h,this.sessionCounter=1,this.D=r,this.o=h,this.unload=0),this.L=!0,this.t()},r.prototype.t=function(){var t;this.L&&(t={st:this.C,sc:this.sessionCounter,v:this.D,id:this.selectedId,et:this.o,u:this.unload},this.A.saveData(this.M,t,this.A.keysConfig.attentionGrabber.data.expiry))},r);function r(t,i,s){this.O=Object(h.get)(),this.L=!1,this.G=t,this.A=i,this.p=s,this.M=i.keysConfig.attentionGrabber.data.key}i.register("AttentionGrabberDataManager").asCtor(n).dependencies("SiteConfigManager, ClientOrServerStorageManager, CommonUtils")},398:function(t,i,h){"use strict";h.r(i),h.d(i,"AttentionGrabberManager",function(){return s});var n=h(0),r=h(133),s=(e.prototype.init=function(t){var i,s;t.config&&t.player&&(this.P=t.config,this.T=t.player,this.q=t.menu,i=this.P.Settings.AG,(s=this.P.Settings.AGs)&&0<s.length?(this.B.init(),this.H(s)):i&&this.create(t).setupAttenGrab())},e.prototype.reset=function(){this.J=this.K=this.P=this.T=this.q=void 0},e.prototype.blockLoad=function(){this.N=!0},e.prototype.H=function(t){var i;this.B.isNewSession?(i=(i=this.R(t)).sort(function(t,i){return t.Priority-i.Priority}),this.V(i)):this.W(t),this.J?(this.X.customerLog("Attention grabber - name: "+this.J.Name+", settings:",3),this.X.customerLog(this.J.Settings,3)):this.X.customerLog("Attention grabber: not selected",3),t="Attention grabber data: session counter = "+this.B.sessionCounter+", selected AG = "+this.B.selectedId+", unload AG = "+this.B.unload+", event timestamp delta = "+this.B.eventTimestampDelta/1e3+"s, session = "+this.B.isNewSession,this.X.customerLog(t,4)},e.prototype.R=function(t){for(var i=[],s=this.B.sessionCounter,h=0;h<t.length;h++){var n=t[h],r=n.Settings;this.Y(s,r)&&(parseInt(r.newContent)?this.Z.hasNewDeployables()&&(n.Priority-=this.$,i.push(n)):i.push(n))}return i},e.prototype.V=function(t){for(var i=0;i<t.length;i++){var s=t[i],h=s.Settings;if(!h.conditions)return this.J=s,void this.B.updateSelection(s.Id);if(this._.evaluate(h.conditions))return this.J=s,void this.B.updateSelection(s.Id)}},e.prototype.W=function(t){for(var i=this.B.sessionCounter,s=0;s<t.length;s++){var h=t[s];if(h.Settings,h.Id==this.B.selectedId){var n=h.Settings;return void(this.Y(i,n)&&this.tt(n)&&(!n.conditions||this._.evaluate(n.conditions)?(this.J=h,this.B.updateSelection(h.Id)):this.X.customerLog("Attention grabber conditions are not satisfied",5)))}}},e.prototype.Y=function(t,i){return!(!(i&&this.it.isDefined(i.session)&&this.it.isDefined(i.interval))||t<i.session||t!=i.session&&(0==i.interval||(t-i.session)%i.interval!=0))},e.prototype.tt=function(t){if(this.B.unload)return!1;if(!t)return!1;var i=this.B.eventTimestampDelta,s=parseInt(t.replay);return!(!s||!i)&&(t.delay=(s=60*s*1e3)<i?0:(s-i)/1e3,!0)},e.prototype.load=function(s){return Object(n.__awaiter)(this,void 0,void 0,function(){var i;return Object(n.__generator)(this,function(t){switch(t.label){case 0:return!this.J||this.N?[2]:(i={config:this.P,player:this.T,menu:this.q,agData:this.J},[4,h.e(4).then(h.bind(null,1167))]);case 1:return t.sent(),this.K=r.create("AttentionGrabber",i),this.K.setupAttenGrab(),s&&s(),[2]}})})},e.prototype.remove=function(t){this.K?(this.B.updateUnload(),this.K.remove(t)):t&&t()},e.prototype.create=function(t){return this.P=t.config,this.T=t.player,this.K=r.create("AttentionGrabber",t),this.K},e.prototype.getImageAG=function(t){return this.P=t.config,this.T=t.player,this.K=r.create("ImageAttentionGrabber",t),this.K},e);function e(t,i,s,h,n,r){this.it=r,this.N=!1,this.$=1e3,this._=t,this.A=s,this.Z=h,this.X=n,this.B=i}r.register("AttentionGrabberManager").asCtor(s).dependencies("ConditionTreeEvaluator, AttentionGrabberDataManager, ClientOrServerStorageManager, PublishDataManager, Logger, CommonUtils, SiteConfigManager, Consts")}}]);