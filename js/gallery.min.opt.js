!function(a,b){"function"==typeof define&&define.amd?define("ev-emitter/ev-
emitter",b):"object"==typeof module&&module.exports?module.exports=b():a.EvEmi
tter=b()}(this,function(){function a(){}var b=a.prototype;return
b.on=function(a,b){if(a&&b){var c=this._events=this._events||{},d=c[a]=c[a]||[
];return-1==d.indexOf(b)&&d.push(b),this}},b.once=function(a,b){if(a&&b){this.
on(a,b);var c=this._onceEvents=this._onceEvents||{},d=c[a]=c[a]||[];return
d[b]=!0,this}},b.off=function(a,b){var
c=this._events&&this._events[a];if(c&&c.length){var
d=c.indexOf(b);return-1!=d&&c.splice(d,1),this}},b.emitEvent=function(a,b){var
c=this._events&&this._events[a];if(c&&c.length){var d=0,e=c[d];b=b||[];for(var
f=this._onceEvents&&this._onceEvents[a];e;){var
g=f&&f[e];g&&(this.off(a,e),delete
f[e]),e.apply(this,b),d+=g?0:1,e=c[d]}return this}},a}),function(a,b){"use
strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-
emitter"],function(c){return b(a,c)}):"object"==typeof
module&&module.exports?module.exports=b(a,require("ev-
emitter")):a.imagesLoaded=b(a,a.EvEmitter)}(window,function(a,b){function
c(a,b){for(var c in b)a[c]=b[c];return a}function d(a){var
b=[];if(Array.isArray(a))b=a;else if("number"==typeof a.length)for(var
c=0;c<a.length;c++)b.push(a[c]);else b.push(a);return b}function
e(a,b,f){return this instanceof e?("string"==typeof a&&(a=document.querySelect
orAll(a)),this.elements=d(a),this.options=c({},this.options),"function"==typeo
f b?f=b:c(this.options,b),f&&this.on("always",f),this.getImages(),h&&(this.jqD
eferred=new h.Deferred),void
setTimeout(function(){this.check()}.bind(this))):new e(a,b,f)}function
f(a){this.img=a}function g(a,b){this.url=a,this.element=b,this.img=new
Image}var h=a.jQuery,i=a.console;e.prototype=Object.create(b.prototype),e.prot
otype.options={},e.prototype.getImages=function(){this.images=[],this.elements
.forEach(this.addElementImages,this)},e.prototype.addElementImages=function(a)
{"IMG"==a.nodeName&&this.addImage(a),this.options.background===!0&&this.addEle
mentBackgroundImages(a);var b=a.nodeType;if(b&&j[b]){for(var
c=a.querySelectorAll("img"),d=0;d<c.length;d++){var
e=c[d];this.addImage(e)}if("string"==typeof this.options.background){var
f=a.querySelectorAll(this.options.background);for(d=0;d<f.length;d++){var
g=f[d];this.addElementBackgroundImages(g)}}}};var j={1:!0,9:!0,11:!0};return
e.prototype.addElementBackgroundImages=function(a){var
b=getComputedStyle(a);if(b)for(var
c=/url\((['"])?(.*?)\1\)/gi,d=c.exec(b.backgroundImage);null!==d;){var e=d&&d[
2];e&&this.addBackground(e,a),d=c.exec(b.backgroundImage)}},e.prototype.addIma
ge=function(a){var b=new
f(a);this.images.push(b)},e.prototype.addBackground=function(a,b){var c=new
g(a,b);this.images.push(c)},e.prototype.check=function(){function
a(a,c,d){setTimeout(function(){b.progress(a,c,d)})}var b=this;return
this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void
this.images.forEach(function(b){b.once("progress",a),b.check()}):void this.com
plete()},e.prototype.progress=function(a,b,c){this.progressedCount++,this.hasA
nyBroken=this.hasAnyBroken||!a.isLoaded,this.emitEvent("progress",[this,a,b]),
this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,a),this.p
rogressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.l
og("progress: "+c,a,b)},e.prototype.complete=function(){var a=this.hasAnyBroke
n?"fail":"done";if(this.isComplete=!0,this.emitEvent(a,[this]),this.emitEvent(
"always",[this]),this.jqDeferred){var b=this.hasAnyBroken?"reject":"resolve";t
his.jqDeferred[b](this)}},f.prototype=Object.create(b.prototype),f.prototype.c
heck=function(){var a=this.getIsImageComplete();return a?void
this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Im
age,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventList
ener("error",this),this.img.addEventListener("load",this),this.img.addEventLis
tener("error",this),void(this.proxyImage.src=this.img.src))},f.prototype.getIs
ImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWi
dth},f.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progres
s",[this,this.img,b])},f.prototype.handleEvent=function(a){var b="on"+a.type;t
his[b]&&this[b](a)},f.prototype.onload=function(){this.confirm(!0,"onload"),th
is.unbindEvents()},f.prototype.onerror=function(){this.confirm(!1,"onerror"),t
his.unbindEvents()},f.prototype.unbindEvents=function(){this.proxyImage.remove
EventListener("load",this),this.proxyImage.removeEventListener("error",this),t
his.img.removeEventListener("load",this),this.img.removeEventListener("error",
this)},g.prototype=Object.create(f.prototype),g.prototype.check=function(){thi
s.img.addEventListener("load",this),this.img.addEventListener("error",this),th
is.img.src=this.url;var a=this.getIsImageComplete();a&&(this.confirm(0!==this.
img.naturalWidth,"naturalWidth"),this.unbindEvents())},g.prototype.unbindEvent
s=function(){this.img.removeEventListener("load",this),this.img.removeEventLis
tener("error",this)},g.prototype.confirm=function(a,b){this.isLoaded=a,this.em
itEvent("progress",[this,this.element,b])},e.makeJQueryPlugin=function(b){b=b|
|a.jQuery,b&&(h=b,h.fn.imagesLoaded=function(a,b){var c=new e(this,a,b);return
c.jqDeferred.promise(h(this))})},e.makeJQueryPlugin(),e}),!function(a,b){"use
strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-
bridget",["jquery"],function(c){b(a,c)}):"object"==typeof module&&module.expor
ts?module.exports=b(a,require("jquery")):a.jQueryBridget=b(a,a.jQuery)}(window
,function(a,b){"use strict";function c(c,f,h){function i(a,b,d){var
e,f="$()."+c+'("'+b+'")';return a.each(function(a,i){var
j=h.data(i,c);if(!j)return void g(c+" not initialized. Cannot call methods,
i.e. "+f);var k=j[b];if(!k||"_"==b.charAt(0))return void g(f+" is not a valid
method");var l=k.apply(j,d);e=void 0===e?l:e}),void 0!==e?e:a}function
j(a,b){a.each(function(a,d){var e=h.data(d,c);e?(e.option(b),e._init()):(e=new
f(d,b),h.data(d,c,e))})}h=h||b||a.jQuery,h&&(f.prototype.option||(f.prototype.
option=function(a){h.isPlainObject(a)&&(this.options=h.extend(!0,this.options,
a))}),h.fn[c]=function(a){if("string"==typeof a){var
b=e.call(arguments,1);return i(this,a,b)}return j(this,a),this},d(h))}function
d(a){!a||a&&a.bridget||(a.bridget=c)}var
e=Array.prototype.slice,f=a.console,g="undefined"==typeof
f?function(){}:function(a){f.error(a)};return
d(b||a.jQuery),c}),function(a,b){"function"==typeof define&&define.amd?define
("ev-emitter/ev-emitter",b):"object"==typeof module&&module.exports?module.exp
orts=b():a.EvEmitter=b()}(this,function(){function a(){}var
b=a.prototype;return b.on=function(a,b){if(a&&b){var c=this._events=this._even
ts||{},d=c[a]=c[a]||[];return-1==d.indexOf(b)&&d.push(b),this}},b.once=functio
n(a,b){if(a&&b){this.on(a,b);var
c=this._onceEvents=this._onceEvents||{},d=c[a]=c[a]||[];return
d[b]=!0,this}},b.off=function(a,b){var
c=this._events&&this._events[a];if(c&&c.length){var
d=c.indexOf(b);return-1!=d&&c.splice(d,1),this}},b.emitEvent=function(a,b){var
c=this._events&&this._events[a];if(c&&c.length){var d=0,e=c[d];b=b||[];for(var
f=this._onceEvents&&this._onceEvents[a];e;){var
g=f&&f[e];g&&(this.off(a,e),delete
f[e]),e.apply(this,b),d+=g?0:1,e=c[d]}return this}},a}),function(a,b){"use
strict";"function"==typeof define&&define.amd?define("get-size/get-
size",[],function(){return b()}):"object"==typeof module&&module.exports?modul
e.exports=b():a.getSize=b()}(window,function(){"use strict";function a(a){var
b=parseFloat(a),c=-1==a.indexOf("%")&&!isNaN(b);return c&&b}function
b(){}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outer
Width:0,outerHeight:0},b=0;j>b;b++){var c=i[b];a[c]=0}return a}function
d(a){var b=getComputedStyle(a);return b||h("Style returned "+b+". Are you
running this code in a hidden iframe on Firefox? See
http://bit.ly/getsizebug1"),b}function e(){if(!k){k=!0;var
b=document.createElement("div");b.style.width="200px",b.style.padding="1px 2px
3px 4px",b.style.borderStyle="solid",b.style.borderWidth="1px 2px 3px
4px",b.style.boxSizing="border-box";var
c=document.body||document.documentElement;c.appendChild(b);var
e=d(b);f.isBoxSizeOuter=g=200==a(e.width),c.removeChild(b)}}function
f(b){if(e(),"string"==typeof
b&&(b=document.querySelector(b)),b&&"object"==typeof b&&b.nodeType){var
f=d(b);if("none"==f.display)return c();var
h={};h.width=b.offsetWidth,h.height=b.offsetHeight;for(var k=h.isBorderBox
="border-box"==f.boxSizing,l=0;j>l;l++){var
m=i[l],n=f[m],o=parseFloat(n);h[m]=isNaN(o)?0:o}var p=h.paddingLeft+h.paddingR
ight,q=h.paddingTop+h.paddingBottom,r=h.marginLeft+h.marginRight,s=h.marginTop
+h.marginBottom,t=h.borderLeftWidth+h.borderRightWidth,u=h.borderTopWidth+h.bo
rderBottomWidth,v=k&&g,w=a(f.width);w!==!1&&(h.width=w+(v?0:p+t));var
x=a(f.height);return x!==!1&&(h.height=x+(v?0:q+u)),h.innerWidth=h.width-(p+t)
,h.innerHeight=h.height-(q+u),h.outerWidth=h.width+r,h.outerHeight=h.height+s,
h}}var g,h="undefined"==typeof console?b:function(a){console.error(a)},i=["pad
dingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRigh
t","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopW
idth","borderBottomWidth"],j=i.length,k=!1;return f}),function(a,b){"use
strict";"function"==typeof define&&define.amd?define("matches-selector
/matches-selector",b):"object"==typeof module&&module.exports?module.exports=b
():a.matchesSelector=b()}(window,function(){"use strict";var a=function(){var 
a=Element.prototype;if(a.matches)return"matches";if(a.matchesSelector)return"m
atchesSelector";for(var b=["webkit","moz","ms","o"],c=0;c<b.length;c++){var
d=b[c],e=d+"MatchesSelector";if(a[e])return e}}();return function(b,c){return
b[a](c)}}),function(a,b){"use strict";"function"==typeof
define&&define.amd?define("fizzy-ui-utils/utils",["matches-selector/matches-
selector"],function(c){return b(a,c)}):"object"==typeof
module&&module.exports?module.exports=b(a,require("desandro-matches-
selector")):a.fizzyUIUtils=b(a,a.matchesSelector)}(window,function(a,b){var
c={};c.extend=function(a,b){for(var c in b)a[c]=b[c];return
a},c.modulo=function(a,b){return(a%b+b)%b},c.makeArray=function(a){var
b=[];if(Array.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var
c=0;c<a.length;c++)b.push(a[c]);else b.push(a);return
b},c.removeFrom=function(a,b){var c=a.indexOf(b);-1!=c&&a.splice(c,1)},c.getPa
rent=function(a,c){for(;a!=document.body;)if(a=a.parentNode,b(a,c))return
a},c.getQueryElement=function(a){return"string"==typeof
a?document.querySelector(a):a},c.handleEvent=function(a){var b="on"+a.type;thi
s[b]&&this[b](a)},c.filterFindElements=function(a,d){a=c.makeArray(a);var
e=[];return a.forEach(function(a){if(a instanceof HTMLElement){if(!d)return
void e.push(a);b(a,d)&&e.push(a);for(var c=a.querySelectorAll(d),f=0;f<c.lengt
h;f++)e.push(c[f])}}),e},c.debounceMethod=function(a,b,c){var
d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var
a=this[e];a&&clearTimeout(a);var
b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||
100)}},c.docReady=function(a){"complete"==document.readyState?a():document.add
EventListener("DOMContentLoaded",a)},c.toDashed=function(a){return
a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var
d=a.console;return c.htmlInit=function(b,e){c.docReady(function(){var f=c.toDa
shed(e),g="data-"+f,h=document.querySelectorAll("["+g+"]"),i=document.querySel
ectorAll(".js-"+f),j=c.makeArray(h).concat(c.makeArray(i)),k=g+"-options",l=a.
jQuery;j.forEach(function(a){var c,f=a.getAttribute(g)||a.getAttribute(k);try{
c=f&&JSON.parse(f)}catch(h){return void(d&&d.error("Error parsing "+g+" on
"+a.className+": "+h))}var i=new
b(a,c);l&&l.data(a,e,i)})})},c}),function(a,b){"function"==typeof
define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size
/get-size"],function(c,d){return b(a,c,d)}):"object"==typeof
module&&module.exports?module.exports=b(a,require("ev-emitter"),require("get-s
ize")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EvEmitter,a.getSize))}(window,func
tion(a,b,c){"use strict";function d(a){for(var b in a)return!1;return
b=null,!0}function e(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,
y:0},this._create())}function f(a){return
a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var
g=document.documentElement.style,h="string"==typeof
g.transition?"transition":"WebkitTransition",i="string"==typeof g.transform?"t
ransform":"WebkitTransform",j={WebkitTransition:"webkitTransitionEnd",transiti
on:"transitionend"}[h],k=[i,h,h+"Duration",h+"Property"],l=e.prototype=Object.
create(b.prototype);l.constructor=e,l._create=function(){this._transn={ingProp
erties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},l.handleEvent=fu
nction(a){var b="on"+a.type;this[b]&&this[b](a)},l.getSize=function(){this.siz
e=c(this.element)},l.css=function(a){var b=this.element.style;for(var c in
a){var d=k[c]||c;b[d]=a[c]}},l.getPosition=function(){var a=getComputedStyle(t
his.element),b=this.layout._getOption("originLeft"),c=this.layout._getOption("
originTop"),d=a[b?"left":"right"],e=a[c?"top":"bottom"],f=this.layout.size,g=-
1!=d.indexOf("%")?parseFloat(d)/100*f.width:parseInt(d,10),h=-1!=e.indexOf("%"
)?parseFloat(e)/100*f.height:parseInt(e,10);g=isNaN(g)?0:g,h=isNaN(h)?0:h,g-=b
?f.paddingLeft:f.paddingRight,h-=c?f.paddingTop:f.paddingBottom,this.position.
x=g,this.position.y=h},l.layoutPosition=function(){var a=this.layout.size,b={}
,c=this.layout._getOption("originLeft"),d=this.layout._getOption("originTop"),
e=c?"paddingLeft":"paddingRight",f=c?"left":"right",g=c?"right":"left",h=this.
position.x+a[e];b[f]=this.getXValue(h),b[g]="";var i=d?"paddingTop":"paddingBo
ttom",j=d?"top":"bottom",k=d?"bottom":"top",l=this.position.y+a[i];b[j]=this.g
etYValue(l),b[k]="",this.css(b),this.emitEvent("layout",[this])},l.getXValue=f
unction(a){var b=this.layout._getOption("horizontal");return this.layout.optio
ns.percentPosition&&!b?a/this.layout.size.width*100+"%":a+"px"},l.getYValue=fu
nction(a){var b=this.layout._getOption("horizontal");return this.layout.option
s.percentPosition&&b?a/this.layout.size.height*100+"%":a+"px"},l._transitionTo
=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=pa
rseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(th
is.setPosition(a,b),g&&!this.isTransitioning)return void
this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),
this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleani
ng:!0})},l.getTranslate=function(a,b){var c=this.layout._getOption("originLeft
"),d=this.layout._getOption("originTop");return
a=c?a:-a,b=d?b:-b,"translate3d("+a+"px, "+b+"px, 0)"},l.goTo=function(a,b){thi
s.setPosition(a,b),this.layoutPosition()},l.moveTo=l._transitionTo,l.setPositi
on=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)
},l._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles
(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},l._tran
sition=function(a){if(!parseFloat(this.layout.options.transitionDuration))retu
rn void this._nonTransition(a);var b=this._transn;for(var c in
a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingPropertie
s[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.e
lement.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isT
ransitioning=!0};var m="opacity,"+f(k.transform||"transform");l.enableTransiti
on=function(){this.isTransitioning||(this.css({transitionProperty:m,transition
Duration:this.layout.options.transitionDuration}),this.element.addEventListene
r(j,this,!1))},l.transition=e.prototype[h?"_transition":"_nonTransition"],l.on
webkitTransitionEnd=function(a){this.ontransitionend(a)},l.onotransitionend=fu
nction(a){this.ontransitionend(a)};var n={"-webkit-transform":"transform"};l.o
ntransitionend=function(a){if(a.target===this.element){var
b=this._transn,c=n[a.propertyName]||a.propertyName;if(delete
b.ingProperties[c],d(b.ingProperties)&&this.disableTransition(),c in
b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in
b.onEnd){var e=b.onEnd[c];e.call(this),delete b.onEnd[c]}this.emitEvent("trans
itionEnd",[this])}},l.disableTransition=function(){this.removeTransitionStyles
(),this.element.removeEventListener(j,this,!1),this.isTransitioning=!1},l._rem
oveStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var
o={transitionProperty:"",transitionDuration:""};return l.removeTransitionStyle
s=function(){this.css(o)},l.removeElem=function(){this.element.parentNode.remo
veChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},
l.remove=function(){return h&&parseFloat(this.layout.options.transitionDuratio
n)?(this.once("transitionEnd",function(){this.removeElem()}),void
this.hide()):void this.removeElem()},l.reveal=function(){delete
this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.get
HideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEn
d,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransi
tionEnd:b})},l.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent(
"reveal")},l.getHideRevealTransitionEndProperty=function(a){var
b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return
c},l.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout
.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=th
is.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,i
sCleaning:!0,onTransitionEnd:b})},l.onHideTransitionEnd=function(){this.isHidd
en&&(this.css({display:"none"}),this.emitEvent("hide"))},l.destroy=function(){
this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transfor
m:""})},e}),function(a,b){"use strict";"function"==typeof
define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-
size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f){return
b(a,c,d,e,f)}):"object"==typeof
module&&module.exports?module.exports=b(a,require("ev-emitter"),require("get-
size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.EvEmitter
,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e){"use
strict";function f(a,b){var c=d.getQueryElement(a);if(!c)return
void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));th
is.element=c,i&&(this.$element=i(this.element)),this.options=d.extend({},this.
constructor.defaults),this.option(b);var
e=++k;this.element.outlayerGUID=e,l[e]=this,this._create();var
f=this._getOption("initLayout");f&&this.layout()}function g(a){function
b(){a.apply(this,arguments)}return
b.prototype=Object.create(a.prototype),b.prototype.constructor=b,b}var h=a.con
sole,i=a.jQuery,j=function(){},k=0,l={};f.namespace="outlayer",f.Item=e,f.defa
ults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originT
op:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opac
ity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}}
;var m=f.prototype;return d.extend(m,b.prototype),m.option=function(a){d.exten
d(this.options,a)},m._getOption=function(a){var
b=this.constructor.compatOptions[a];return b&&void 0!==this.options[b]?this.op
tions[b]:this.options[a]},f.compatOptions={initLayout:"isInitLayout",horizonta
l:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",ori
ginTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContain
er"},m._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.op
tions.stamp),d.extend(this.element.style,this.options.containerStyle);var a=th
is._getOption("resize");a&&this.bindResize()},m.reloadItems=function(){this.it
ems=this._itemize(this.element.children)},m._itemize=function(a){for(var b=thi
s._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0;e<b.length;e++){
var f=b[e],g=new c(f,this);d.push(g)}return
d},m._filterFindItemElements=function(a){return d.filterFindElements(a,this.op
tions.itemSelector)},m.getItemElements=function(){return
this.items.map(function(a){return
a.element})},m.layout=function(){this._resetLayout(),this._manageStamps();var
a=this._getOption("layoutInstant"),b=void 0!==a?a:!this._isLayoutInited;this.l
ayoutItems(this.items,b),this._isLayoutInited=!0},m._init=m.layout,m._resetLay
out=function(){this.getSize()},m.getSize=function(){this.size=c(this.element)}
,m._getMeasurement=function(a,b){var d,e=this.options[a];e?("string"==typeof
e?d=this.element.querySelector(e):e instanceof HTMLElement&&(d=e),this[a]=d?c(
d)[b]:e):this[a]=0},m.layoutItems=function(a,b){a=this._getItemsForLayout(a),t
his._layoutItems(a,b),this._postLayout()},m._getItemsForLayout=function(a){ret
urn a.filter(function(a){return!a.isIgnored})},m._layoutItems=function(a,b){if
(this._emitCompleteOnItems("layout",a),a&&a.length){var
c=[];a.forEach(function(a){var d=this._getItemLayoutPosition(a);d.item=a,d.isI
nstant=b||a.isLayoutInstant,c.push(d)},this),this._processLayoutQueue(c)}},m._
getItemLayoutPosition=function(){return{x:0,y:0}},m._processLayoutQueue=functi
on(a){a.forEach(function(a){this._positionItem(a.item,a.x,a.y,a.isInstant)},th
is)},m._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},m._postLay
out=function(){this.resizeContainer()},m.resizeContainer=function(){var
a=this._getOption("resizeContainer");if(a){var b=this._getContainerSize();b&&(
this._setContainerMeasure(b.width,!0),this._setContainerMeasure(b.height,!1))}
},m._getContainerSize=j,m._setContainerMeasure=function(a,b){if(void
0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.bor
derLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+
c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+
"px"}},m._emitCompleteOnItems=function(a,b){function
c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g==f&&c()}var
e=this,f=b.length;if(!b||!f)return void c();var
g=0;b.forEach(function(b){b.once(a,d)})},m.dispatchEvent=function(a,b,c){var d
=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(
this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else
this.$element.trigger(a,c)},m.ignore=function(a){var
b=this.getItem(a);b&&(b.isIgnored=!0)},m.unignore=function(a){var
b=this.getItem(a);b&&delete b.isIgnored},m.stamp=function(a){a=this._find(a),a
&&(this.stamps=this.stamps.concat(a),a.forEach(this.ignore,this))},m.unstamp=f
unction(a){a=this._find(a),a&&a.forEach(function(a){d.removeFrom(this.stamps,a
),this.unignore(a)},this)},m._find=function(a){return a?("string"==typeof
a&&(a=this.element.querySelectorAll(a)),a=d.makeArray(a)):void 0},m._manageSta
mps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.
stamps.forEach(this._manageStamp,this))},m._getBoundingRect=function(){var a=t
his.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.lef
t+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,righ
t:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom
+b.borderBottomWidth)}},m._manageStamp=j,m._getElementOffset=function(a){var b
=a.getBoundingClientRect(),d=this._boundingRect,e=c(a),f={left:b.left-d.left-e
.marginLeft,top:b.top-d.top-e.marginTop,right:d.right-b.right-e.marginRight,bo
ttom:d.bottom-b.bottom-e.marginBottom};return f},m.handleEvent=d.handleEvent,m
.bindResize=function(){a.addEventListener("resize",this),this.isResizeBound=!0
},m.unbindResize=function(){a.removeEventListener("resize",this),this.isResize
Bound=!1},m.onresize=function(){this.resize()},d.debounceMethod(f,"onresize",1
00),m.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.lay
out()},m.needsResizeLayout=function(){var
a=c(this.element),b=this.size&&a;return
b&&a.innerWidth!==this.size.innerWidth},m.addItems=function(a){var
b=this._itemize(a);return
b.length&&(this.items=this.items.concat(b)),b},m.appended=function(a){var b=th
is.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},m.prepended=
function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this
.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b
,!0),this.reveal(b),this.layoutItems(c)}},m.reveal=function(a){this._emitCompl
eteOnItems("reveal",a),a&&a.length&&a.forEach(function(a){a.reveal()})},m.hide
=function(a){this._emitCompleteOnItems("hide",a),a&&a.length&&a.forEach(functi
on(a){a.hide()})},m.revealItemElements=function(a){var
b=this.getItems(a);this.reveal(b)},m.hideItemElements=function(a){var
b=this.getItems(a);this.hide(b)},m.getItem=function(a){for(var
b=0;b<this.items.length;b++){var c=this.items[b];if(c.element==a)return
c}},m.getItems=function(a){a=d.makeArray(a);var b=[];return
a.forEach(function(a){var
c=this.getItem(a);c&&b.push(c)},this),b},m.remove=function(a){var b=this.getIt
ems(a);this._emitCompleteOnItems("remove",b),b&&b.length&&b.forEach(function(a
){a.remove(),d.removeFrom(this.items,a)},this)},m.destroy=function(){var a=thi
s.element.style;a.height="",a.position="",a.width="",this.items.forEach(functi
on(a){a.destroy()}),this.unbindResize();var b=this.element.outlayerGUID;delete
l[b],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constr
uctor.namespace)},f.data=function(a){a=d.getQueryElement(a);var
b=a&&a.outlayerGUID;return b&&l[b]},f.create=function(a,b){var c=g(f);return c
.defaults=d.extend({},f.defaults),d.extend(c.defaults,b),c.compatOptions=d.ext
end({},f.compatOptions),c.namespace=a,c.data=f.data,c.Item=g(e),d.htmlInit(c,a
),i&&i.bridget&&i.bridget(a,c),c},f.Item=e,f}),function(a,b){"function"==typeo
f define&&define.amd?define(["outlayer/outlayer","get-size/get-
size"],b):"object"==typeof
module&&module.exports?module.exports=b(require("outlayer"),require("get-
size")):a.Masonry=b(a.Outlayer,a.getSize)}(window,function(a,b){var
c=a.create("masonry");return c.compatOptions.fitWidth="isFitWidth",c.prototype
._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","ou
terWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),t
his.colYs=[];for(var a=0;a<this.cols;a++)this.colYs.push(0);this.maxY=0},c.pro
totype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth
){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this
.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this
.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max
(f,1)},c.prototype.getContainerWidth=function(){var a=this._getOption("fitWidt
h"),c=a?this.element.parentNode:this.element,d=b(c);this.containerWidth=d&&d.i
nnerWidth},c.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.
size.outerWidth%this.columnWidth,c=b&&1>b?"round":"ceil",d=Math[c](a.size.oute
rWidth/this.columnWidth);d=Math.min(d,this.cols);for(var e=this._getColGroup(d
),f=Math.min.apply(Math,e),g=e.indexOf(f),h={x:this.columnWidth*g,y:f},i=f+a.s
ize.outerHeight,j=this.cols+1-e.length,k=0;j>k;k++)this.colYs[g+k]=i;return
h},c.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var
b=[],c=this.cols+1-a,d=0;c>d;d++){var
e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return
b},c.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a)
,e=this._getOption("originLeft"),f=e?d.left:d.right,g=f+c.outerWidth,h=Math.fl
oor(f/this.columnWidth);h=Math.max(0,h);var i=Math.floor(g/this.columnWidth);i
-=g%this.columnWidth?0:1,i=Math.min(this.cols-1,i);for(var j=this._getOption("
originTop"),k=(j?d.top:d.bottom)+c.outerHeight,l=h;i>=l;l++)this.colYs[l]=Math
.max(k,this.colYs[l])},c.prototype._getContainerSize=function(){this.maxY=Math
.max.apply(Math,this.colYs);var a={height:this.maxY};return this._getOption("f
itWidth")&&(a.width=this._getContainerFitWidth()),a},c.prototype._getContainer
FitWidth=function(){for(var
a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this
.columnWidth-this.gutter},c.prototype.needsResizeLayout=function(){var
a=this.containerWidth;return
this.getContainerWidth(),a!=this.containerWidth},c});var CanvasImage=function(
a){this.canvas=document.createElement("canvas"),this.context=this.canvas.getCo
ntext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.widt
h=a.width,this.height=this.canvas.height=a.height,this.context.drawImage(a,0,0
,this.width,this.height)};CanvasImage.prototype.clear=function(){this.context.
clearRect(0,0,this.width,this.height)},CanvasImage.prototype.update=function(a
){this.context.putImageData(a,0,0)},CanvasImage.prototype.getPixelCount=functi
on(){return
this.width*this.height},CanvasImage.prototype.getImageData=function(){return t
his.context.getImageData(0,0,this.width,this.height)},CanvasImage.prototype.re
moveCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var
ColorThief=function(){};if(ColorThief.prototype.getColor=function(a,b){var
c=this.getPalette(a,5,b),d=c[0];return
d},ColorThief.prototype.getPalette=function(a,b,c){"undefined"==typeof
b&&(b=10),("undefined"==typeof c||1>c)&&(c=10);for(var d,e,f,g,h,i=new CanvasI
mage(a),j=i.getImageData(),k=j.data,l=i.getPixelCount(),m=[],n=0;l>n;n+=c)d=4*
n,e=k[d+0],f=k[d+1],g=k[d+2],h=k[d+3],h>=125&&(e>250&&f>250&&g>250||m.push([e,
f,g]));var o=MMCQ.quantize(m,b),p=o?o.palette():null;return
i.removeCanvas(),p},!pv)var pv={map:function(a,b){var c={};return
b?a.map(function(a,d){return
c.index=d,b.call(c,a)}):a.slice()},naturalOrder:function(a,b){return
b>a?-1:a>b?1:0},sum:function(a,b){var c={};return
a.reduce(b?function(a,d,e){return
c.index=e,a+b.call(c,d)}:function(a,b){return
a+b},0)},max:function(a,b){return Math.max.apply(null,b?pv.map(a,b):a)}};var
MMCQ=function(){function a(a,b,c){return(a<<2*i)+(b<<i)+c}function
b(a){function b(){c.sort(a),d=!0}var
c=[],d=!1;return{push:function(a){c.push(a),d=!1},peek:function(a){return
d||b(),void 0===a&&(a=c.length-1),c[a]},pop:function(){return
d||b(),c.pop()},size:function(){return c.length},map:function(a){return
c.map(a)},debug:function(){return d||b(),c}}}function c(a,b,c,d,e,f,g){var
h=this;h.r1=a,h.r2=b,h.g1=c,h.g2=d,h.b1=e,h.b2=f,h.histo=g}function
d(){this.vboxes=new b(function(a,b){return pv.naturalOrder(a.vbox.count()*a.vb
ox.volume(),b.vbox.count()*b.vbox.volume())})}function e(b){var
c,d,e,f,g=1<<3*i,h=new Array(g);return b.forEach(function(b){d=b[0]>>j,e=b[1]>
>j,f=b[2]>>j,c=a(d,e,f),h[c]=(h[c]||0)+1}),h}function f(a,b){var
d,e,f,g=1e6,h=0,i=1e6,k=0,l=1e6,m=0;return a.forEach(function(a){d=a[0]>>j,e=a
[1]>>j,f=a[2]>>j,g>d?g=d:d>h&&(h=d),i>e?i=e:e>k&&(k=e),l>f?l=f:f>m&&(m=f)}),ne
w c(g,h,i,k,l,m,b)}function g(b,c){function d(a){var b,d,e,f,g,h=a+"1",j=a+"2"
,k=0;for(i=c[h];i<=c[j];i++)if(o[i]>n/2){for(e=c.copy(),f=c.copy(),b=i-c[h],d=
c[j]-i,g=d>=b?Math.min(c[j]-1,~~(i+d/2)):Math.max(c[h],~~(i-1-b/2));!o[g];)g++
;for(k=p[g];!k&&o[g-1];)k=p[--g];return
e[j]=g,f[h]=e[j]+1,[e,f]}}if(c.count()){var e=c.r2-c.r1+1,f=c.g2-c.g1+1,g=c.b2
-c.b1+1,h=pv.max([e,f,g]);if(1==c.count())return[c.copy()];var i,j,k,l,m,n=0,o
=[],p=[];if(h==e)for(i=c.r1;i<=c.r2;i++){for(l=0,j=c.g1;j<=c.g2;j++)for(k=c.b1
;k<=c.b2;k++)m=a(i,j,k),l+=b[m]||0;n+=l,o[i]=n}else if(h==f)for(i=c.g1;i<=c.g2
;i++){for(l=0,j=c.r1;j<=c.r2;j++)for(k=c.b1;k<=c.b2;k++)m=a(j,i,k),l+=b[m]||0;
n+=l,o[i]=n}else for(i=c.b1;i<=c.b2;i++){for(l=0,j=c.r1;j<=c.r2;j++)for(k=c.g1
;k<=c.g2;k++)m=a(j,k,i),l+=b[m]||0;n+=l,o[i]=n}return
o.forEach(function(a,b){p[b]=n-a}),d(h==e?"r":h==f?"g":"b")}}function
h(a,c){function h(a,b){for(var c,d=1,e=0;k>e;)if(c=a.pop(),c.count()){var f=g(
i,c),h=f[0],j=f[1];if(!h)return;if(a.push(h),j&&(a.push(j),d++),d>=b)return;if
(e++>k)return}else a.push(c),e++}if(!a.length||2>c||c>256)return!1;var
i=e(a),j=0;i.forEach(function(){j++});var m=f(a,i),n=new
b(function(a,b){return
pv.naturalOrder(a.count(),b.count())});n.push(m),h(n,l*c);for(var o=new
b(function(a,b){return pv.naturalOrder(a.count()*a.volume(),b.count()*b.volume
())});n.size();)o.push(n.pop());h(o,c-o.size());for(var p=new
d;o.size();)p.push(o.pop());return p; }var i=5,j=8-i,k=1e3,l=.75;return
c.prototype={volume:function(a){var b=this;return(!b._volume||a)&&(b._volume=(
b.r2-b.r1+1)*(b.g2-b.g1+1)*(b.b2-b.b1+1)),b._volume},count:function(b){var
c=this,d=c.histo;if(!c._count_set||b){var e,f,g,h=0;for(e=c.r1;e<=c.r2;e++)for
(f=c.g1;f<=c.g2;f++)for(g=c.b1;g<=c.b2;g++)index=a(e,f,g),h+=d[index]||0;c._co
unt=h,c._count_set=!0}return c._count},copy:function(){var a=this;return new
c(a.r1,a.r2,a.g1,a.g2,a.b1,a.b2,a.histo)},avg:function(b){var
c=this,d=c.histo;if(!c._avg||b){var e,f,g,h,j,k=0,l=1<<8-i,m=0,n=0,o=0;for(f=c
.r1;f<=c.r2;f++)for(g=c.g1;g<=c.g2;g++)for(h=c.b1;h<=c.b2;h++)j=a(f,g,h),e=d[j
]||0,k+=e,m+=e*(f+.5)*l,n+=e*(g+.5)*l,o+=e*(h+.5)*l;k?c._avg=[~~(m/k),~~(n/k),
~~(o/k)]:c._avg=[~~(l*(c.r1+c.r2+1)/2),~~(l*(c.g1+c.g2+1)/2),~~(l*(c.b1+c.b2+1
)/2)]}return c._avg},contains:function(a){var b=this,c=a[0]>>j;return gval=a[1
]>>j,bval=a[2]>>j,c>=b.r1&&c<=b.r2&&gval>=b.g1&&gval<=b.g2&&bval>=b.b1&&bval<=
b.b2}},d.prototype={push:function(a){this.vboxes.push({vbox:a,color:a.avg()})}
,palette:function(){return this.vboxes.map(function(a){return
a.color})},size:function(){return this.vboxes.size()},map:function(a){for(var
b=this.vboxes,c=0;c<b.size();c++)if(b.peek(c).vbox.contains(a))return
b.peek(c).color;return this.nearest(a)},nearest:function(a){for(var b,c,d,e=th
is.vboxes,f=0;f<e.size();f++)c=Math.sqrt(Math.pow(a[0]-e.peek(f).color[0],2)+M
ath.pow(a[1]-e.peek(f).color[1],2)+Math.pow(a[2]-e.peek(f).color[2],2)),(b>c||
void 0===b)&&(b=c,d=e.peek(f).color);return d},forcebw:function(){var
a=this.vboxes;a.sort(function(a,b){return
pv.naturalOrder(pv.sum(a.color),pv.sum(b.color))});var
b=a[0].color;b[0]<5&&b[1]<5&&b[2]<5&&(a[0].color=[0,0,0]);var c=a.length-1,d=a
[c].color;d[0]>251&&d[1]>251&&d[2]>251&&(a[c].color=[255,255,255])}},{quantize
:h}}();!function(a){var b={init:function(b){var c={inDuration:300,outDuration:
200,responsiveThreshold:992,contentPadding:40,onShow:null,defaultColor:"#444",
fillScreen:!1,dynamicRouting:!1};b=a.extend(c,b);var
d=window.location.hash.substring(1);return this.each(function(c){function
e(){if(G){G=!1,b.dynamicRouting&&(window.location.hash="!");var
c=!I;window.clearTimeout(C),C=null,O.stop(),I=!0,u=void 0;var d=a
("#placeholder-overlay").first();d.off("click.galleryExpand").off("mouseenter.
galleryExpand").off("mouseleave.galleryExpand"),g.scrollTop(0),g.attr("style",
D.attr("style")),L.css("left",D.find(".gallery-
cover").css("left")).removeClass("dh ep"),_(),a("body").css("overflow",""),g.c
ss("overflowY",""),d.css({transition:"none",opacity:.9}),M.show(),setTimeout(f
unction(){if(a(window).off("resize",B),J.find(".gallery-body").css("display","
none"),P&&P.find(U).removeClass("k"),a("nav").removeClass("ed"),a
("#placeholder-navbar").fadeOut(b.outDuration,"easeInQuad",function(){a(this).
remove()}),H=!1,d.fadeOut(b.outDuration,"easeInQuad",function(){a(this).remove
()}),!c){J.css({width:h,height:i,transform:"translate3d(0,0,0)",transition:"tr
ansform "+b.outDuration/1e3+"s "+W,"-webkit-transition":"-webkit-transform
"+b.outDuration/1e3+"s "+W});var e=p.top-T-V;N.css({transform:"translate3d(0,
"+e+"px, 0)",transition:"transform "+b.outDuration/1e3+"s","-webkit-transition
":"-webkit-transform "+b.outDuration/1e3+"s"});var
f={};S&&Q?(f.width=n,f.height=o,f.transform="translate3d("+p.left+"px,
"+V+"px, 0)",f.transition="transform "+b.outDuration/1e3+"s, width
"+b.outDuration/1e3+"s, height "+b.outDuration/1e3+"s",f["-webkit-transition
"]="-webkit-transform "+b.outDuration/1e3+"s, width "+b.outDuration/1e3+"s,
height "+b.outDuration/1e3+"s",$.css({background:""})):(f.transform="translate
3d("+(p.left-A-V)+"px, 0, 0)",f.transition="transform "+b.outDuration/1e3+"s
"+W,f["-webkit-transition"]="-webkit-transform "+b.outDuration/1e3+"s "+W),L.c
ss(f),M.css({transform:"translate3d("+j.left+"px,"+m+"px,0)",transition:"trans
form "+b.outDuration/1e3+"s","-webkit-transition":"-webkit-transform "+b.outDu
ration/1e3+"s"})}C=setTimeout(function(){g.removeAttr("style"),J.css({width:""
,height:"",overflow:"","z-index":"",transform:"",transition:"","-webkit-transi
tion":""}),L.removeAttr("style").attr("style",E),N.removeAttr("style"),M.remov
eAttr("style"),M.children().removeAttr("style"),O.find(".title-wrapper").css({
marginTop:"",marginLeft:"",paddingLeft:"",height:""}),J.removeClass("k"),F=!0,
a(".gallery").data("masonry")&&a(".gallery").masonry("layout")},b.outDuration)
},0)}}var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=!0,G=!1,H=!1,I
=!0,J=a(this),K=J.attr("id")||c.toString(),L=J.find(".gallery-cover"),M=J.find
(".gallery-header"),N=J.find(".gallery-curve-wrapper"),O=J.find(".gallery-
body"),P=J.find(".gallery-action"),Q=!!L.length&&(a(this).attr("data-
fillScreen")||b.fillScreen),R=a(this).hasClass("gallery-
horizontal"),S=!1,T=64,U=".btn, .btn-large, .btn-
floating",V=b.contentPadding,W="cubic-bezier(0.420, 0.000, 0.580, 1.000)",X=a(
document).width(),Y=window.innerHeight,Z=!1;g=J.children(".placeholder").first
(),g.length||(J.wrapInner(a('<div class="placeholder"></div>')),g=J.children("
.placeholder").first()),M.length||(M=a('<div class="gallery-header
invisible"></div>'),L.length?L.after(M):N.append(M));var
$=L.find(".gradient").first();Q&&($.length||($=a('<div
class="gradient"></div>'),L.append($)),J.attr("data-fillscreen",!0));var
_=function(){L=J.find(".gallery-cover"),M=J.find(".gallery-header"),N=J.find
(".gallery-curve-wrapper"),O=J.find(".gallery-body"),P=J.find(".gallery-action
"),g=J.find(".placeholder")},aa=function(){origContainerRect=J[0].getBoundingC
lientRect(),h=origContainerRect.width,i=J.height(),j=M[0].getBoundingClientRec
t(),k=j.width,l=j.height||1,n=L.width(),o=L.height(),p=L.length?L[0].getBoundi
ngClientRect():{top:j.top,left:0},q=a(window).scrollTop()};J.off("click.galler
yExpand").on("click.galleryExpand",function(c){if(!F)return!(!a(c.target).is("
a")&&!a(c.target).closest(".gallery-action").length)&&void 0;F=!1,window.clear
Timeout(C),C=null,aa(),b.dynamicRouting&&(window.location.hash=K);var d,q,_,ba
,ca,da=function(){X=a(document).width(),Y=window.innerHeight,f=X<=b.responsive
Threshold,S=n>X/2||Q,Z=document.body.scrollHeight>document.body.clientHeight;v
ar c=document.body.currentStyle||window.getComputedStyle(document.body,"");if(
Z=Z&&("visible"==c.overflow||"visible"==c.overflowY||"auto"==c.overflow||"auto
"==c.overflowY),T=f?56:64,t=-J[0].getBoundingClientRect().top,u=void 0===u?-g[
0].getBoundingClientRect().left:u+-g[0].getBoundingClientRect().left,V=f?20:b.
contentPadding,v=Math.round(o/2+V+T),d=o/2-V,q=.7*X,_=Y-d-T,A=Math.max((X-q)/2
,V),f&&(q=X,A=0),S)if(Q){var
e=L.children("img").first(),j=imgHeight=1/0;if(e.length){var m=e[0].getBoundin
gClientRect();j=m.width,imgHeight=m.height}r=Math.min(X,j),s=Math.min(Y-T,imgH
eight),v=f?Math.round((Y-T)/2):Math.round(3*V+T),d=s-v+T,_=Y-v}else{var p=h/i;
r=X/2,s=r/p,v=Math.round(s/2)+V+T,d=s/2+V,_=Y-d-T}ba=q/k,ca=_/l};if(da(),D=g.c
lone(!0),a("body").css("overflowX","hidden"),a("body").on("scroll.disable-
scroll mousewheel.disable-scroll touchmove.disable-scroll",function(a){return 
a.preventDefault(),a.stopPropagation(),!1}),J.css({height:i,width:h}),L.length
){E=L.attr("style");var ea="translate3d(";Q?ea+=p.left+"px, "+V+"px,
0)":(L.css({left:A+V,top:V}),ea+=p.left-A-V+"px, 0,
0)"),L.css({height:o,width:n,transform:ea})}var
fa=p.top-T-V;N.css({display:"block",transform:"translate3d(0, "+fa+"px, 0)"}),
m=R?V-l:V,M.css({height:l,width:k,transform:"translate3d("+j.left+"px,"+m+"px,
0)"}),g.css({height:Y,width:X,transform:"translate3d("+Math.round(u)+"px,
"+Math.round(t)+"px, 0)"}),J.addClass("k"),"absolute"!==J.css("position")&&J.c
ss({position:"relative"}),H=!0,I=!1;var ga=a("#placeholder-
overlay");ga.length||(ga=a('<div id="placeholder-overlay"></div>'),g.prepend(g
a)),ga.off("click.galleryExpand").on("click.galleryExpand",function(){e()}),Q&
&ga.off("mouseenter.galleryExpand").off("mouseleave.galleryExpand").on("mousee
nter.galleryExpand",function(){L.addClass("ep")}).on("mouseleave.galleryExpand
",function(){L.removeClass("ep")}),setTimeout(function(){ga.addClass("et")},0)
;var ha=a('<nav id="placeholder-navbar"></nav>'),ia=a('<div class="nav-
wrapper"></div>'),ja=a('<div class="db"></div>'),ka=a('<button class="back-
btn"><i class="material-icons">arrow_back</i><span>Back</span></button>'),la="
";if(a("nav").length&&(la=a("nav").css("background-
color"),a("nav").addClass("ed")),ha.css({"background-color":la}),ja.append(ka)
,ia.append(ja),ha.append(ia),g.prepend(ha),ka.click(function(){e()}),y=b.defau
ltColor,"undefined"!=typeof ColorThief&&L.length){w=new ColorThief;var ma=new 
Image;ma.onload=function(){w.getColor(ma)},ma.crossOrigin="Anonymous",ma.src=J
.find("img").attr("src");try{x=w.getPalette(J.find("img")[0],2),y="rgb("+x[0][
0]+","+x[0][1]+","+x[0][2]+")",z="rgb("+x[1][0]+","+x[1][1]+","+x[1][2]+")",ha
.css({backgroundColor:z})}catch(c){console.log("Cross Origin error. Falling
back to defaultColor. Try using a locally hosted image",c);var
na=a("body").children("canvas:last-child");if(na.length){var
oa=imgHeight=0,ma=L.children("img").first();if(ma.length){var pa=ma[0].getBoun
dingClientRect();oa=Math.round(pa.width),imgHeight=Math.round(pa.height)}na[0]
.getContext("2d").canvas.width===oa&&na[0].getContext("2d").canvas.height===im
gHeight&&na.remove()}}}ga.css({backgroundColor:y}),Q&&$.length&&$.css({backgro
und:"linear-gradient(to bottom, rgba(0,0,0,0) 0%, "+y+" 100%)"});var
qa={};if(qa.transform="",qa.transition="transform "+b.inDuration/1e3+"s",qa
["-webkit-transition"]="-webkit-transform
"+b.inDuration/1e3+"s",S)if(Q){qa.width=r,qa.height=s,qa.transition="transform
"+b.inDuration/1e3+"s, width "+b.inDuration/1e3+"s, height
"+b.inDuration/1e3+"s",qa["-webkit-transition"]="-webkit-transform
"+b.inDuration/1e3+"s, width "+b.inDuration/1e3+"s, height
"+b.inDuration/1e3+"s";r<X&&(qa.transform="scale("+X/r+")")}else
qa.transform="scale("+r/n+")";L.css(qa),N.css({height:Y,transition:"transform
"+b.inDuration/1e3+"s "+W,"-webkit-transition":"-webkit-transform
"+b.inDuration/1e3+"s "+W,transform:""}),M.children().css("opacity",0);var
ra=function(){var
a=A/ba,c=-d/ca;S&&!Q&&(c=(d-o)/ca),M.css({transition:"transform
"+b.inDuration/1e3+"s "+W,"-webkit-transition":"-webkit-transform
"+b.inDuration/1e3+"s "+W,transform:"scale("+ba+","+ca+")
translate3d("+a+"px,"+c+"px,0)",transformOrigin:"0 0"})};ra(),O.length&&(O.css
({marginTop:v,padding:V,minHeight:Y-v}),!Q&&L.length&&(f?O.find(".title-
wrapper").css({marginTop:v/2}):O.find(".title-wrapper").css({marginLeft:n,padd
ingLeft:V,height:d}))),P.length&&(P.css({top:v}),P.find(U).each(function(){a(t
his).css({backgroundColor:z})})),B=Materialize.throttle(function(){da()},150),
a(window).resize(B),C=setTimeout(function(){P.length&&P.find(U).each(function(
){a(this).addClass("k")});var c=function(){D=g.clone(!0),g.css({transform:"",p
osition:"fixed",width:"100%",height:"100%",top:0,left:0,overflow:"auto"}),Z&&(
a("body").css("overflow","hidden"),g.css("overflowY","scroll")),a("body").off(
"scroll.disable-scroll mousewheel.disable-scroll touchmove.disable-scroll"),N.
css({height:"100%"}),Q?L.css({width:"",height:"",transform:"",transition:"opac
ity .3s"}):L.css({left:V}),L.addClass("dh"),M.hide()};O.length?O.fadeIn(300,fu
nction(){c()}):c(),I=!0,G=!0,"function"==typeof b.onShow&&b.onShow.call(this,J
)},b.inDuration)}),a(document).keyup(function(a){27===a.keyCode&&H&&e()}),b.dy
namicRouting&&d===K&&J.trigger("click.galleryExpand")})},open:function(){a(thi
s).trigger("click.galleryExpand")},close:function(){var b=a("#placeholder-over
lay");b.length&&b.trigger("click.galleryExpand")}};a.fn.galleryExpand=function
(c){return
b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof
c&&c?void a.error("Method "+c+" does not exist on jQuery.galleryExpand"):b.ini
t.apply(this,arguments)}}(jQuery),function(a){a(function(){a(".button-
collapse").sideNav();var b=a("nav .categories-
container");if(b.length){b.pushpin({top:b.offset().top});var
c=b.find("li");c.each(function(){var
b=a(this);b.on("click",function(){c.removeClass("k"),b.addClass("k");var
e=b.find("a").first()[0].hash.substr(1),f=a(".b .gallery-
item");if(f.stop().addClass("ce").fadeIn(100),"all"!==e){var g=f.not("."+e).no
t(".all");g.removeClass("ce").hide()}d.masonry({transitionDuration:".3s"}),d.o
ne("layoutComplete",function(a,b){d.masonry({transitionDuration:0})}),setTimeo
ut(function(){d.masonry("layout")},1e3)})})}a(".t:not(.carousel-
slider)").carousel({dist:0,padding:10}),a(".t.carousel-
slider").carousel({fullWidth:!0,indicators:!0,onCycleTo:function(b){a(".nav-
background img").removeClass("k"),a(".nav-background
img").eq(b.index()).addClass("k")}});var d=a(".b");d.masonry({itemSelector:".c
e",columnWidth:".ce",transitionDuration:0}),d.imagesLoaded(function(){d.masonr
y("layout")}),a("a.filter").click(function(a){a.preventDefault()}),a("form
.form-control").focus(function(){a(this).siblings("label").first().children("i
").first().css({color:"#aaa",left:0})}),a("form .form-control").blur(function(
){a(this).siblings("label").first().children("i").first().css({color:"transpar
ent",left:"-20px"})});var e=function(a){var
b=a.find(".t.initialized");b.carousel({dist:0,padding:10})};a(".gallery-
expand").galleryExpand({onShow:e}),a(".blog .gallery-
expand").galleryExpand({onShow:e,fillScreen:!0,inDuration:500})})}(jQuery);
