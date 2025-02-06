window,window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[16],{1192:function(i,t,r){!function(t){var e=r(1281),n={init:function(){t.register("ComponentAPI").dependencies("RichTextEditorConverter").asCtor(function(t){this.getRichTextElement=t.getRichTextElement})},services:["RichTextEditorConverter","MentionElement"],types:[]};r(2450),r(2451),r(2460),r(2461),r(2462),r(2463),r(2464),r(10).registerApi(n,e),i.exports=n}.call(this,r(2))},1281:function(t,e,n){t.exports=n(10).create()},1292:function(t,e,n){"use strict";var i,r,o,s,a;Object.defineProperty(e,"__esModule",{value:!0}),e.NewLine="\n",(i=r=r||{}).Ordered="ordered",i.Bullet="bullet",i.Checked="checked",i.Unchecked="unchecked",e.ListType=r,(r=i={}).Sub="sub",r.Super="super",e.ScriptType=i,(o=o||{}).Rtl="rtl",e.DirectionType=o,(o=s=s||{}).Left="left",o.Center="center",o.Right="right",o.Justify="justify",e.AlignType=s,(s=a=a||{}).Image="image",s.Video="video",s.Formula="formula",s.Text="text",e.DataType=a,(a=s={}).Block="block",a.InlineGroup="inline-group",a.List="list",a.Video="video",e.GroupType=s},1358:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2452);e.QuillDeltaToHtmlConverter=i.QuillDeltaToHtmlConverter,i=n(1549),e.OpToHtmlConverter=i.OpToHtmlConverter,i=n(1360),e.InlineGroup=i.InlineGroup,e.VideoItem=i.VideoItem,e.BlockGroup=i.BlockGroup,e.ListGroup=i.ListGroup,e.ListItem=i.ListItem,e.BlotBlock=i.BlotBlock,i=n(1426),e.DeltaInsertOp=i.DeltaInsertOp,i=n(1427),e.InsertDataQuill=i.InsertDataQuill,e.InsertDataCustom=i.InsertDataCustom,n=n(1292),e.NewLine=n.NewLine,e.ListType=n.ListType,e.ScriptType=n.ScriptType,e.DirectionType=n.DirectionType,e.AlignType=n.AlignType,e.DataType=n.DataType,e.GroupType=n.GroupType},1359:function(t,n,e){"use strict";!function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.preferSecond=function(t){return 0===t.length?null:2<=t.length?t[1]:t[0]},n.flatten=function n(t){return e.reduce(t,function(t,e){return t.concat(Array.isArray(e)?n(e):e)},[])},n.find=function(t,e){if(Array.prototype.find)return Array.prototype.find.call(t,e);for(var n=0;n<t.length;n++)if(e(t[n]))return t[n]},n.groupConsecutiveElementsWhile=function(t,e){for(var n,i=[],r=0;r<t.length;r++)n=t[r],0<r&&e(n,t[r-1])?i[i.length-1].push(n):i.push([n]);return i.map(function(t){return 1===t.length?t[0]:t})},n.sliceFromReverseWhile=function(t,e,n){for(var i={elements:[],sliceStartsAt:-1},r=e;0<=r&&n(t[r]);r--)i.sliceStartsAt=r,i.elements.unshift(t[r]);return i},n.intersperse=function(i,r){return i.reduce(function(t,e,n){return t.push(e),n<i.length-1&&t.push(r),t},[])}}.call(this,e(25))},1360:function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.InlineGroup=function(t){this.ops=t};var o,s=(r(a,o=l=function(t){this.op=t}),a);function a(){return null!==o&&o.apply(this,arguments)||this}e.VideoItem=s;var u,l=(r(c,u=l),c);function c(){return null!==u&&u.apply(this,arguments)||this}e.BlotBlock=l,e.BlockGroup=function(t,e){this.op=t,this.ops=e},e.ListGroup=function(t){this.items=t},l=function(t,e){void 0===e&&(e=null),this.item=t,this.innerList=e},e.ListItem=l},1426:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1292),r=n(1427),n=(o.createNewLineOp=function(){return new o(i.NewLine)},o.prototype.isContainerBlock=function(){var t=this.attributes;return!!(t.blockquote||t.list||t["code-block"]||t.header||t.align||t.direction||t.indent)},o.prototype.isBlockquote=function(){return!!this.attributes.blockquote},o.prototype.isHeader=function(){return!!this.attributes.header},o.prototype.isSameHeaderAs=function(t){return t.attributes.header===this.attributes.header&&this.isHeader()},o.prototype.hasSameAdiAs=function(t){return this.attributes.align===t.attributes.align&&this.attributes.direction===t.attributes.direction&&this.attributes.indent===t.attributes.indent},o.prototype.hasSameIndentationAs=function(t){return this.attributes.indent===t.attributes.indent},o.prototype.hasHigherIndentThan=function(t){return(Number(this.attributes.indent)||0)>(Number(t.attributes.indent)||0)},o.prototype.isInline=function(){return!(this.isContainerBlock()||this.isVideo()||this.isCustomBlock())},o.prototype.isCodeBlock=function(){return!!this.attributes["code-block"]},o.prototype.isJustNewline=function(){return this.insert.value===i.NewLine},o.prototype.isList=function(){return this.isOrderedList()||this.isBulletList()||this.isCheckedList()||this.isUncheckedList()},o.prototype.isOrderedList=function(){return this.attributes.list===i.ListType.Ordered},o.prototype.isBulletList=function(){return this.attributes.list===i.ListType.Bullet},o.prototype.isCheckedList=function(){return this.attributes.list===i.ListType.Checked},o.prototype.isUncheckedList=function(){return this.attributes.list===i.ListType.Unchecked},o.prototype.isACheckList=function(){return this.attributes.list==i.ListType.Unchecked||this.attributes.list===i.ListType.Checked},o.prototype.isSameListAs=function(t){return!!t.attributes.list&&(this.attributes.list===t.attributes.list||t.isACheckList()&&this.isACheckList())},o.prototype.isText=function(){return this.insert.type===i.DataType.Text},o.prototype.isImage=function(){return this.insert.type===i.DataType.Image},o.prototype.isFormula=function(){return this.insert.type===i.DataType.Formula},o.prototype.isVideo=function(){return this.insert.type===i.DataType.Video},o.prototype.isLink=function(){return this.isText()&&!!this.attributes.link},o.prototype.isCustom=function(){return this.insert instanceof r.InsertDataCustom},o.prototype.isCustomBlock=function(){return this.isCustom()&&!!this.attributes.renderAsBlock},o.prototype.isMentions=function(){return this.isText()&&!!this.attributes.mentions},o);function o(t,e){"string"==typeof t&&(t=new r.InsertDataQuill(i.DataType.Text,t+"")),this.insert=t,this.attributes=e||{}}e.DeltaInsertOp=n},1427:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InsertDataQuill=function(t,e){this.type=t,this.value=e},e.InsertDataCustom=function(t,e){this.type=t,this.value=e}},1428:function(t,e,n){"use strict";!function(k){Object.defineProperty(e,"__esModule",{value:!0});var T=n(1292),L=n(2454),i=n(2455),r=n(1429),C=n(1359),t=(I.sanitize=function(n,t){var i={};if(!n||"object"!=typeof n)return i;var e=["bold","italic","underline","strike","code","blockquote","code-block","renderAsBlock"],r=["background","color"],o=n.font,s=n.size,a=n.link,u=n.script,l=n.list,c=n.header,p=n.align,f=n.direction,d=n.indent,h=n.mentions,m=n.mention,g=n.width,y=n.target,v=n.rel,b=e.concat(r,["font","size","link","script","list","header","align","direction","indent","mentions","mention","width","target","rel"]);return e.forEach(function(t){var e=n[t];e&&(i[t]=!!e)}),r.forEach(function(t){var e=n[t];e&&(I.IsValidHexColor(e+"")||I.IsValidColorLiteral(e+"")||I.IsValidRGBColor(e+""))&&(i[t]=e)}),o&&I.IsValidFontName(o+"")&&(i.font=o),s&&I.IsValidSize(s+"")&&(i.size=s),g&&I.IsValidWidth(g+"")&&(i.width=g),a&&(i.link=I.sanitizeLinkUsingOptions(a+"",t)),y&&I.isValidTarget(y)&&(i.target=y),v&&I.IsValidRel(v)&&(i.rel=v),u!==T.ScriptType.Sub&&T.ScriptType.Super!==u||(i.script=u),l!==T.ListType.Bullet&&l!==T.ListType.Ordered&&l!==T.ListType.Checked&&l!==T.ListType.Unchecked||(i.list=l),Number(c)&&(i.header=Math.min(Number(c),6)),C.find([T.AlignType.Center,T.AlignType.Right,T.AlignType.Justify,T.AlignType.Left],function(t){return t===p})&&(i.align=p),f===T.DirectionType.Rtl&&(i.direction=f),d&&Number(d)&&(i.indent=Math.min(Number(d),30)),h&&m&&(t=L.MentionSanitizer.sanitize(m,t),0<Object.keys(t).length&&(i.mentions=!!h,i.mention=m)),k.reduce(Object.keys(n),function(t,e){return-1===b.indexOf(e)&&(t[e]=n[e]),t},i)},I.sanitizeLinkUsingOptions=function(t,e){var n=function(){};return"string"==typeof(n=(n=e&&"function"==typeof e.urlSanitizer?e.urlSanitizer:n)(t))?n:r.encodeLink(i.sanitize(t))},I.IsValidHexColor=function(t){return!!t.match(/^#([0-9A-F]{6}|[0-9A-F]{3})$/i)},I.IsValidColorLiteral=function(t){return!!t.match(/^[a-z]{1,50}$/i)},I.IsValidRGBColor=function(t){return!!t.match(/^rgb\(((0|25[0-5]|2[0-4]\d|1\d\d|0?\d?\d),\s*){2}(0|25[0-5]|2[0-4]\d|1\d\d|0?\d?\d)\)$/i)},I.IsValidFontName=function(t){return!!t.match(/^[a-z\s0-9\- ]{1,30}$/i)},I.IsValidSize=function(t){return!!t.match(/^[a-z0-9\-]{1,20}$/i)},I.IsValidWidth=function(t){return!!t.match(/^[0-9]*(px|em|%)?$/)},I.isValidTarget=function(t){return!!t.match(/^[_a-zA-Z0-9\-]{1,50}$/)},I.IsValidRel=function(t){return!!t.match(/^[a-zA-Z\s\-]{1,250}$/i)},I);function I(){}e.OpAttributeSanitizer=t}.call(this,n(25))},1429:function(t,e,n){"use strict";var i,r;function o(t){return s(i.Html).reduce(u,t)}function s(t){var e=[["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#x27;"],["\\/","&#x2F;"],["\\(","&#40;"],["\\)","&#41;"]];return t===i.Html?e.filter(function(t){var e=t[0];return t[1],-1===e.indexOf("(")&&-1===e.indexOf(")")}):e.filter(function(t){var e=t[0];return t[1],-1===e.indexOf("/")})}function a(t,e){return t.replace(new RegExp(e[0],"g"),e[1])}function u(t,e){return t.replace(new RegExp(e[1],"g"),e[0].replace("\\",""))}Object.defineProperty(e,"__esModule",{value:!0}),(r=i=i||{})[r.Html=0]="Html",r[r.Url=1]="Url",e.makeStartTag=function(t,e){if(!t)return"";var n="",i="img"!==t&&"br"!==t?">":"/>";return(n=(e=void 0===e?void 0:e)?[].concat(e).map(function(t){return t.key+(t.value?'="'+t.value+'"':"")}).join(" "):n)?"<"+t+" "+n+i:"<"+t+i},e.makeEndTag=function(t){return(t=void 0===t?"":t)&&"</"+t+">"||""},e.decodeHtml=o,e.encodeHtml=function(t,e){return(e=void 0===e||e)&&(t=o(t)),s(i.Html).reduce(a,t)},e.encodeLink=function(t){var e=s(i.Url),t=e.reduce(u,t);return e.reduce(a,t)}},1430:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.assign=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),r=0;r<e.length;r++){var o=e[r];if(null!=o)for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])}return i}},1549:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var c=e(1429),p=e(1292),n=e(1430),s=e(1359),i=e(1428),r={serif:"font-family: Georgia, Times New Roman, serif",monospace:"font-family: Monaco, Courier New, monospace"};function a(t,e){this.op=t,this.options=n.assign({},{classPrefix:"ql",inlineStyles:void 0,encodeHtml:!0,listItemTag:"li",paragraphTag:"p"},e)}o.DEFAULT_INLINE_STYLES={font:function(t){return r[t]||"font-family:"+t},size:{small:"font-size: 0.75em",large:"font-size: 1.5em",huge:"font-size: 2.5em"},indent:function(t,e){return t=3*parseInt(t,10),"padding-"+("rtl"===e.attributes.direction?"right":"left")+":"+t+"em"},direction:function(t,e){if("rtl"===t)return"direction:rtl"+(e.attributes.align?"":"; text-align:inherit")}},a.prototype.prefixClass=function(t){return this.options.classPrefix?this.options.classPrefix+"-"+t:t+""},a.prototype.getHtml=function(){var t=this.getHtmlParts();return t.openingTag+t.content+t.closingTag},a.prototype.getHtmlParts=function(){var e=this;if(this.op.isJustNewline()&&!this.op.isContainerBlock())return{openingTag:"",closingTag:"",content:p.NewLine};var t=this.getTags(),n=this.getTagAttributes();!t.length&&n.length&&t.push("span");for(var i=[],r=[],o="img",s=function(t){return t===o&&!!e.op.attributes.link},a=0,u=t;a<u.length;a++){var l=u[a];s(l)&&i.push(c.makeStartTag("a",this.getLinkAttrs())),i.push(c.makeStartTag(l,n)),r.push("img"===l?"":c.makeEndTag(l)),s(l)&&r.push(c.makeEndTag("a")),n=[]}return r.reverse(),{openingTag:i.join(""),content:this.getContent(),closingTag:r.join("")}},a.prototype.getContent=function(){if(this.op.isContainerBlock())return"";if(this.op.isMentions())return this.op.insert.value;var t=this.op.isFormula()||this.op.isText()?this.op.insert.value:"";return this.options.encodeHtml&&c.encodeHtml(t)||t},a.prototype.getCssClasses=function(){var e=this.op.attributes;if(this.options.inlineStyles)return[];var t=["indent","align","direction","font","size"];return this.options.allowBackgroundClasses&&t.push("background"),t.filter(function(t){return!!e[t]}).filter(function(t){return"background"!==t||i.OpAttributeSanitizer.IsValidColorLiteral(e[t])}).map(function(t){return t+"-"+e[t]}).concat(this.op.isFormula()?"formula":[]).concat(this.op.isVideo()?"video":[]).concat(this.op.isImage()?"image":[]).map(this.prefixClass.bind(this))},a.prototype.getCssStyles=function(){var i=this,r=this.op.attributes,t=[["color"]];return!this.options.inlineStyles&&this.options.allowBackgroundClasses||t.push(["background","background-color"]),(t=this.options.inlineStyles?t.concat([["indent"],["align","text-align"],["direction"],["font","font-family"],["size"]]):t).filter(function(t){return!!r[t[0]]}).map(function(t){var e=t[0],n=r[e];return"object"==typeof(e=i.options.inlineStyles&&i.options.inlineStyles[e]||o.DEFAULT_INLINE_STYLES[e])?e[n]:"function"!=typeof e?s.preferSecond(t)+":"+n:e(n,i.op)}).filter(function(t){return void 0!==t})},a.prototype.getTagAttributes=function(){if(this.op.attributes.code&&!this.op.isLink())return[];var t=this.makeAttr.bind(this),e=(e=this.getCssClasses()).length?[t("class",e.join(" "))]:[];if(this.op.isImage())return(e=this.op.attributes.width?e.concat(t("width",this.op.attributes.width)):e).concat(t("src",this.op.insert.value));if(this.op.isACheckList())return e.concat(t("data-checked",this.op.isCheckedList()?"true":"false"));if(this.op.isFormula())return e;if(this.op.isVideo())return e.concat(t("frameborder","0"),t("allowfullscreen","true"),t("src",this.op.insert.value));if(this.op.isMentions()){var n=this.op.attributes.mention;return n.class&&(e=e.concat(t("class",n.class))),e=n["end-point"]&&n.slug?e.concat(t("href",n["end-point"]+"/"+n.slug)):e.concat(t("href","about:blank")),n.target?e.concat(t("target",n.target)):e}return(n=this.getCssStyles()).length&&e.push(t("style",n.join(";"))),!this.op.isContainerBlock()&&this.op.isLink()?e.concat(this.getLinkAttrs()):e},a.prototype.makeAttr=function(t,e){return{key:t,value:e}},a.prototype.getLinkAttrs=function(){var t=i.OpAttributeSanitizer.isValidTarget(this.options.linkTarget||"")?this.options.linkTarget:void 0,e=i.OpAttributeSanitizer.IsValidRel(this.options.linkRel||"")?this.options.linkRel:void 0,t=this.op.attributes.target||t,e=this.op.attributes.rel||e;return[].concat(this.makeAttr("href",this.op.attributes.link)).concat(t?this.makeAttr("target",t):[]).concat(e?this.makeAttr("rel",e):[])},a.prototype.getTags=function(){var e=this.op.attributes;if(!this.op.isText())return[this.op.isVideo()?"iframe":this.op.isImage()?"img":"span"];for(var t=this.options.paragraphTag||"p",n=0,i=[["blockquote"],["code-block","pre"],["list",this.options.listItemTag],["header"],["align",t],["direction",t],["indent",t]];n<i.length;n++){var r=i[n],o=r[0];if(e[o])return"header"===o?["h"+e[o]]:[s.preferSecond(r)]}return[["link","a"],["mentions","a"],["script"],["bold","strong"],["italic","em"],["strike","s"],["underline","u"],["code"]].filter(function(t){return!!e[t[0]]}).map(function(t){return"script"===t[0]?e[t[0]]===p.ScriptType.Sub?"sub":"sup":s.preferSecond(t)})},o.OpToHtmlConverter=e=a},2450:function(t,e,n){n(1281).register("RichTextEditorDefaults").dependencies("FontStyleTranslator,FeaturesManager").asCtor(function(n,i){this.getConfig=function(t){var e=i.isFeatureEnabled("rteOverrideGlobalCss")&&t?" !important":"";return{encodeHtml:!1,classPrefix:"wm-vd-rte",inlineStyles:{size:function(t){return"font-size:"+t+e},font:function(t){return"font-family:"+n.getFontFamilyWithFallback(t)+e},color:function(t){return"color:"+t+e}}}}})},2451:function(t,e,n){var i=n(1281),l=(n=n(1358)).OpToHtmlConverter,c=n.DeltaInsertOp;i.register("ActionElement").asCtor(function(r,o,s,a,u){this.getHtml=function(t,e,n){var i,n=new l(new c(t.insert.value.text,(i=t.attributes,u.extend({underline:!0},i))),s.getConfig(n));return(n=r.parseElement(n.getHtml())).setAttribute("href",""),n.setAttribute(o.RICH_TEXT_EDITOR.ACTION_LINK_ATTR,a.toJSON(t.insert.value)),n.outerHTML}}).dependencies("DomManager, Consts, RichTextEditorDefaults, JsonUtils, wmjQuery")},2452:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2453),r=n(1549),o=n(2458),s=n(1360),a=n(2459),u=n(1429),l=n(1430),c=n(1292),p="<br/>",n=(f.prototype._getListTag=function(t){return t.isOrderedList()?this.options.orderedListTag+"":t.isBulletList()||t.isCheckedList()||t.isUncheckedList()?this.options.bulletListTag+"":""},f.prototype.getGroupedOps=function(){var t=i.InsertOpsConverter.convert(this.rawDeltaOps,this.options),t=o.Grouper.pairOpsWithTheirBlock(t),t=o.Grouper.groupConsecutiveSameStyleBlocks(t,{blockquotes:!!this.options.multiLineBlockquote,header:!!this.options.multiLineHeader,codeBlocks:!!this.options.multiLineCodeblock}),t=o.Grouper.reduceConsecutiveSameStyleBlocksToOne(t);return(new a.ListNester).nest(t)},f.prototype.convert=function(){var n=this;return this.getGroupedOps().map(function(t){if(t instanceof s.ListGroup)return n._renderWithCallbacks(c.GroupType.List,t,function(){return n._renderList(t)});if(t instanceof s.BlockGroup){var e=t;return n._renderWithCallbacks(c.GroupType.Block,t,function(){return n._renderBlock(e.op,e.ops)})}return t instanceof s.BlotBlock?n._renderCustom(t.op,null):t instanceof s.VideoItem?n._renderWithCallbacks(c.GroupType.Video,t,function(){return new r.OpToHtmlConverter(t.op,n.converterOptions).getHtml()}):n._renderWithCallbacks(c.GroupType.InlineGroup,t,function(){return n._renderInlines(t.ops,!0)})}).join("")},f.prototype._renderWithCallbacks=function(t,e,n){var i="",r=this.callbacks.beforeRender_cb,i=(i="function"==typeof r?r.apply(null,[t,e]):"")||n();return"function"==typeof(n=this.callbacks.afterRender_cb)?n.apply(null,[t,i]):i},f.prototype._renderList=function(t){var e=this,n=t.items[0];return u.makeStartTag(this._getListTag(n.item.op))+t.items.map(function(t){return e._renderListItem(t)}).join("")+u.makeEndTag(this._getListTag(n.item.op))},f.prototype._renderListItem=function(t){t.item.op.attributes.indent=0;var e=new r.OpToHtmlConverter(t.item.op,this.converterOptions).getHtmlParts(),n=this._renderInlines(t.item.ops,!1);return e.openingTag+n+(t.innerList?this._renderList(t.innerList):"")+e.closingTag},f.prototype._renderBlock=function(e,t){var n=this,i=new r.OpToHtmlConverter(e,this.converterOptions).getHtmlParts();return e.isCodeBlock()?i.openingTag+u.encodeHtml(t.map(function(t){return t.isCustom()?n._renderCustom(t,e):t.insert.value}).join(""))+i.closingTag:(t=t.map(function(t){return n._renderInline(t,e)}).join(""),i.openingTag+(t||p)+i.closingTag)},f.prototype._renderInlines=function(t,e){var n=this;void 0===e&&(e=!0);var i=t.length-1,r=t.map(function(t,e){return 0<e&&e===i&&t.isJustNewline()?"":n._renderInline(t,null)}).join("");return e?(t=u.makeStartTag(this.options.paragraphTag),e=u.makeEndTag(this.options.paragraphTag),r===p||this.options.multiLineParagraph?t+r+e:t+r.split(p).map(function(t){return""===t?p:t}).join(e+t)+e):r},f.prototype._renderInline=function(t,e){return t.isCustom()?this._renderCustom(t,e):new r.OpToHtmlConverter(t,this.converterOptions).getHtml().replace(/\n/g,p)},f.prototype._renderCustom=function(t,e){var n=this.callbacks.renderCustomOp_cb;return"function"==typeof n?n.apply(null,[t,e]):""},f.prototype.beforeRender=function(t){"function"==typeof t&&(this.callbacks.beforeRender_cb=t)},f.prototype.afterRender=function(t){"function"==typeof t&&(this.callbacks.afterRender_cb=t)},f.prototype.renderCustomWith=function(t){this.callbacks.renderCustomOp_cb=t},f);function f(t,e){this.rawDeltaOps=[],this.callbacks={},this.options=l.assign({paragraphTag:"p",encodeHtml:!0,classPrefix:"ql",inlineStyles:!1,multiLineBlockquote:!0,multiLineHeader:!0,multiLineCodeblock:!0,multiLineParagraph:!0,allowBackgroundClasses:!1,linkTarget:"_blank"},e,{orderedListTag:"ol",bulletListTag:"ul",listItemTag:"li"}),e=this.options.inlineStyles?"object"==typeof this.options.inlineStyles?this.options.inlineStyles:{}:void 0,this.converterOptions={encodeHtml:this.options.encodeHtml,classPrefix:this.options.classPrefix,inlineStyles:e,listItemTag:this.options.listItemTag,paragraphTag:this.options.paragraphTag,linkRel:this.options.linkRel,linkTarget:this.options.linkTarget,allowBackgroundClasses:this.options.allowBackgroundClasses},this.rawDeltaOps=t}e.QuillDeltaToHtmlConverter=n},2453:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1426),i=n(1292),r=n(1427),u=n(1428),l=n(2456),n=(c.convert=function(t,e){if(!Array.isArray(t))return[];for(var n,i=[],r=0,o=[].concat.apply([],t.map(l.InsertOpDenormalizer.denormalize));r<o.length;r++){var s=o[r];s.insert&&(n=c.convertInsertVal(s.insert,e))&&(s=u.OpAttributeSanitizer.sanitize(s.attributes,e),i.push(new a.DeltaInsertOp(n,s)))}return i},c.convertInsertVal=function(t,e){if("string"==typeof t)return new r.InsertDataQuill(i.DataType.Text,t);if(!t||"object"!=typeof t)return null;var n=Object.keys(t);return n.length?i.DataType.Image in t?new r.InsertDataQuill(i.DataType.Image,u.OpAttributeSanitizer.sanitizeLinkUsingOptions(t[i.DataType.Image]+"",e)):i.DataType.Video in t?new r.InsertDataQuill(i.DataType.Video,u.OpAttributeSanitizer.sanitizeLinkUsingOptions(t[i.DataType.Video]+"",e)):i.DataType.Formula in t?new r.InsertDataQuill(i.DataType.Formula,t[i.DataType.Formula]):new r.InsertDataCustom(n[0],t[n[0]]):null},c);function c(){}e.InsertOpsConverter=n},2454:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1428),n=(r.sanitize=function(t,e){var n={};return t&&"object"==typeof t&&(t.class&&r.IsValidClass(t.class)&&(n.class=t.class),t.id&&r.IsValidId(t.id)&&(n.id=t.id),r.IsValidTarget(t.target+"")&&(n.target=t.target),t.avatar&&(n.avatar=i.OpAttributeSanitizer.sanitizeLinkUsingOptions(t.avatar+"",e)),t["end-point"]&&(n["end-point"]=i.OpAttributeSanitizer.sanitizeLinkUsingOptions(t["end-point"]+"",e)),t.slug&&(n.slug=t.slug+"")),n},r.IsValidClass=function(t){return!!t.match(/^[a-zA-Z0-9_\-]{1,500}$/i)},r.IsValidId=function(t){return!!t.match(/^[a-zA-Z0-9_\-\:\.]{1,500}$/i)},r.IsValidTarget=function(t){return-1<["_self","_blank","_parent","_top"].indexOf(t)},r);function r(){}e.MentionSanitizer=n},2455:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=function(t){return t=t.replace(/^\s*/gm,""),/^((https?|s?ftp|file|blob|mailto|tel):|#|\/|data:image\/)/.test(t)?t:"unsafe:"+t}},2456:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1292),r=n(2457),o=n(1430),n=(s.denormalize=function(e){if(!e||"object"!=typeof e)return[];if("object"==typeof e.insert||e.insert===i.NewLine)return[e];var t=r.tokenizeWithNewLines(e.insert+"");if(1===t.length)return[e];var n=o.assign({},e,{insert:i.NewLine});return t.map(function(t){return t===i.NewLine?n:o.assign({},e,{insert:t})})},s);function s(){}e.InsertOpDenormalizer=n},2457:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.tokenizeWithNewLines=function(t){if("\n"===t)return[t];if(1===(t=t.split("\n")).length)return t;var i=t.length-1;return t.reduce(function(t,e,n){return n!==i?""!==e?t=t.concat(e,"\n"):t.push("\n"):""!==e&&t.push(e),t},[])}},2458:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1426),a=n(1359),u=n(1360),n=(i.pairOpsWithTheirBlock=function(t){for(var e,n=[],i=function(t){return!(t.isJustNewline()||t.isCustomBlock()||t.isVideo()||t.isContainerBlock())},r=function(t){return t.isInline()},o=t.length-1;0<=o;o--){var s=t[o];s.isVideo()?n.push(new u.VideoItem(s)):s.isCustomBlock()?n.push(new u.BlotBlock(s)):(s.isContainerBlock()?(e=a.sliceFromReverseWhile(t,o-1,i),n.push(new u.BlockGroup(s,e.elements))):(e=a.sliceFromReverseWhile(t,o-1,r),n.push(new u.InlineGroup(e.elements.concat(s)))),o=-1<e.sliceStartsAt?e.sliceStartsAt:o)}return n.reverse(),n},i.groupConsecutiveSameStyleBlocks=function(t,n){return void 0===n&&(n={header:!0,codeBlocks:!0,blockquotes:!0}),a.groupConsecutiveElementsWhile(t,function(t,e){return t instanceof u.BlockGroup&&e instanceof u.BlockGroup&&(n.codeBlocks&&i.areBothCodeblocks(t,e)||n.blockquotes&&i.areBothBlockquotesWithSameAdi(t,e)||n.header&&i.areBothSameHeadersWithSameAdi(t,e))})},i.reduceConsecutiveSameStyleBlocksToOne=function(t){var i=r.DeltaInsertOp.createNewLineOp();return t.map(function(t){if(!Array.isArray(t))return t instanceof u.BlockGroup&&!t.ops.length&&t.ops.push(i),t;var n=t.length-1;return t[0].ops=a.flatten(t.map(function(t,e){return t.ops.length?t.ops.concat(e<n?[i]:[]):[i]})),t[0]})},i.areBothCodeblocks=function(t,e){return t.op.isCodeBlock()&&e.op.isCodeBlock()},i.areBothSameHeadersWithSameAdi=function(t,e){return t.op.isSameHeaderAs(e.op)&&t.op.hasSameAdiAs(e.op)},i.areBothBlockquotesWithSameAdi=function(t,e){return t.op.isBlockquote()&&e.op.isBlockquote()&&t.op.hasSameAdiAs(e.op)},i);function i(){}e.Grouper=n},2459:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1360),r=n(1359),n=(o.prototype.nest=function(t){var e=this,t=this.convertListBlocksToListGroups(t),t=this.groupConsecutiveListGroups(t),t=r.flatten(t.map(function(t){return Array.isArray(t)?e.nestListSection(t):t}));return r.groupConsecutiveElementsWhile(t,function(t,e){return t instanceof i.ListGroup&&e instanceof i.ListGroup&&t.items[0].item.op.isSameListAs(e.items[0].item.op)}).map(function(t){return Array.isArray(t)?(t=t.map(function(t){return t.items}),new i.ListGroup(r.flatten(t))):t})},o.prototype.convertListBlocksToListGroups=function(t){return r.groupConsecutiveElementsWhile(t,function(t,e){return t instanceof i.BlockGroup&&e instanceof i.BlockGroup&&t.op.isList()&&e.op.isList()&&t.op.isSameListAs(e.op)&&t.op.hasSameIndentationAs(e.op)}).map(function(t){return Array.isArray(t)?new i.ListGroup(t.map(function(t){return new i.ListItem(t)})):t instanceof i.BlockGroup&&t.op.isList()?new i.ListGroup([new i.ListItem(t)]):t})},o.prototype.groupConsecutiveListGroups=function(t){return r.groupConsecutiveElementsWhile(t,function(t,e){return t instanceof i.ListGroup&&e instanceof i.ListGroup})},o.prototype.nestListSection=function(n){var i=this,e=this.groupByIndent(n);return Object.keys(e).map(Number).sort().reverse().forEach(function(t){e[t].forEach(function(t){var e=n.indexOf(t);i.placeUnderParent(t,n.slice(0,e))&&n.splice(e,1)})}),n},o.prototype.groupByIndent=function(t){return t.reduce(function(t,e){var n=e.items[0].item.op.attributes.indent;return n&&(t[n]=t[n]||[],t[n].push(e)),t},{})},o.prototype.placeUnderParent=function(t,e){for(var n=e.length-1;0<=n;n--){var i=e[n];if(t.items[0].item.op.hasHigherIndentThan(i.items[0].item.op))return(i=i.items[i.items.length-1]).innerList?i.innerList.items=i.innerList.items.concat(t.items):i.innerList=t,!0}return!1},o);function o(){}e.ListNester=n},2460:function(t,e,n){var i=n(1281),u=(n=n(1358)).OpToHtmlConverter,l=n.DeltaInsertOp;i.register("LinkElement").asCtor(function(t,o,s,a){this.getHtml=function(t,e,n){var i=t.insert.value,r=a.encodeText(i.text||"")||i.value,i=(t=t.attributes,s.extend({underline:!0},t,{link:i.value,target:i.target}));return new u(new l(r,i),o.getConfig(n)).getHtml()}}).dependencies("Consts, RichTextEditorDefaults, wmjQuery, CommonUtils")},2461:function(t,e,n){var i=n(1281),a=(n=n(1358)).OpToHtmlConverter,u=n.DeltaInsertOp;i.register("MentionElement").asCtor(function(t,r,o,s){this.getHtml=function(t,e,n){var i,i=(i=t.insert.value.id,i=o.getByName(i),s.evaluate(i.Type,i.Value));return new a(new u(i,t.attributes),r.getConfig(n)).getHtml()}}).dependencies("Consts, RichTextEditorDefaults, UserAttributes, EndUserDataEvaluator")},2462:function(t,e,n){n(1281).register("CustomElementsRenderer").asCtor(function(i,r,o){this.renderCustomWith=function(t,e,n){switch(t.insert.type){case"action":return i.getHtml(t,e,n);case"url":return r.getHtml(t,e,n);case"mention":return o.getHtml(t,e,n);default:return}},this.prepareCustomElements=function(t){for(var e=0;e<t.length;e++){var n,i=t[e];i.attributes&&i.attributes.link&&"string"==typeof i.insert&&(n=i.attributes.link,i.insert={action:{text:i.insert,data:n}})}}}).dependencies("ActionElement, LinkElement, MentionElement")},2463:function(t,e,n){var i=n(1281),l=n(1358).QuillDeltaToHtmlConverter;i.register("RichTextEditorConverter").asCtor(function(r,o,s,a,u){this.getRichTextElement=function(t,e){var n,i=document.createElement("div"),e=(n=e,function(t){for(var e=0;e<t.length;e++){var n=t[e];n.attributes&&n.attributes.font&&(n.attributes.font=u.load(n.attributes.font))}}(t=t),o.prepareCustomElements(t),(t=new l(t,s.getConfig(n.rteStylesPriority))).afterRender(function(t,e){return r.manipulateHtml(t,e,n.rteStylesPriority)}),t.renderCustomWith(function(t,e){return o.renderCustomWith(t,e,n.rteStylesPriority)}),t.convert());return a.setInnerHTML(i,e),i}}).dependencies("AfterRenderHtmlManipulator, CustomElementsRenderer, RichTextEditorDefaults, DomManager, FontsLoader")},2464:function(t,e,n){n(1281).register("AfterRenderHtmlManipulator").asCtor(function(p,f,d,t){var r=t.isFeatureEnabled("revertToBrowserStyle"),h=t.isFeatureEnabled("rteOverrideGlobalCss"),t=t.isFeatureEnabled("defaultRteULFontSize"),m={P:{margin:"0",padding:"0"},LI:{margin:"0",padding:"0"},STRONG:{"font-weight":"bold","font-style":"inherit"},EM:{"font-style":"italic","font-weight":"inherit"},OL:{"list-style-type":"decimal"},UL:{"list-style-type":"disc"},LIST:{"list-style-position":"inside"}};function g(t,e,n){return e((t=t.tagName?t:f.parseElement(t)).tagName.toLowerCase())&&n(t),t.outerHTML}r&&(m.LIST["margin-block-start"]="1em",m.LIST["margin-block-end"]="1em",m.LIST["padding-inline-start"]="40px"),t||(m.UL["font-size"]="0"),this.manipulateHtml=function(t,e,n){var i={STRONG:{},EM:{},U:{}};switch((n=n&&h)&&(i.STRONG.color="inherit",i.STRONG["font-size"]="inherit",i.EM.color="inherit",i.EM["font-size"]="inherit",i.U={"text-decoration":"underline",color:"inherit","font-size":"inherit","font-weight":"inherit","font-style":"inherit"}),r&&(e=function(t,e,n){for(var i=(t=f.parseElement(t)).getElementsByTagName("strong"),r=0;r<i.length;r++)!function(t,n){g(t,function(t){return"strong"===t},function(t){var e=d.extend({},m.STRONG,n.STRONG);p.update(t,e,!0)})}(i[r],e);for(var o=t.getElementsByTagName("em"),s=0;s<o.length;s++)!function(t,n){g(t,function(t){return"em"===t},function(t){var e=d.extend({},m.EM,n.EM);p.update(t,e,!0)})}(o[s],e);var a=t.getElementsByTagName("li");if(0<a.length)for(var u=0;u<a.length;u++)g(a[u],function(t){return"li"===t},function(t){p.update(t,m.LI,!0)});if(h&&n){var l=t.getElementsByTagName("u");if(0<l.length)for(var c=0;c<l.length;c++)!function(t,e){g(t,function(t){return"u"===t},function(t){p.update(t,e.U,!0)})}(l[c],e)}return t.outerHTML}(e,i,n)),t){case"list":return g(e,function(t){return"ol"===t||"ul"===t},function(t){var e=t.tagName.toUpperCase(),e=d.extend({},m.LIST,m[e]);p.update(t,e,!0)});case"block":case"inline-group":return g(e,function(t){return"p"===t},function(t){p.update(t,m.P,!0)});default:return e}}}).dependencies("CssAttributeSetter, DomManager, wmjQuery, FeaturesManager")}}]);