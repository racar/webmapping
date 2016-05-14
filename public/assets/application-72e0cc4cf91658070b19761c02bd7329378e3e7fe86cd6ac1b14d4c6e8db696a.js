/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, ref, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (!browserSupportsTurbolinks) {
      return;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, i, key, len, pageCacheKeys, results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    results = [];
    for (i = 0, len = pageCacheKeys.length; i < len; i++) {
      key = pageCacheKeys[i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      results.push(delete pageCache[key]);
    }
    return results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, i, j, len, len1, nextSibling, parentNode, ref, ref1, script, scripts;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      if (!((ref = script.type) === '' || ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      ref1 = script.attributes;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        attr = ref1[j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(window.history.state, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var ref, value;
    value = ((ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var ref;
      return (400 <= (ref = xhr.status) && ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var i, len, node, ref, results;
      ref = doc.querySelector('head').childNodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var i, len, ref, results, value;
      if (a.length > b.length) {
        ref = [b, a], a = ref[0], b = ref[1];
      }
      results = [];
      for (i = 0, len = a.length; i < len; i++) {
        value = a[i];
        if (indexOf.call(b, value) >= 0) {
          results.push(value);
        }
      }
      return results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  createDocument = function(html) {
    var doc;
    doc = document.documentElement.cloneNode();
    doc.innerHTML = html;
    doc.head = doc.querySelector('head');
    doc.body = doc.querySelector('body');
    return doc;
  };

  ComponentUrl = (function() {
    function ComponentUrl(original1) {
      this.original = original1 != null ? original1 : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      ref = this.link, this.href = ref.href, this.protocol = ref.protocol, this.host = ref.host, this.hostname = ref.hostname, this.port = ref.port, this.pathname = ref.pathname, this.search = ref.search, this.hash = ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(superClass) {
    extend(Link, superClass);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, i, len;
      extensions = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = 0, len = extensions.length; i < len; i++) {
        extension = extensions[i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link1) {
      this.link = link1;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event1) {
      this.event = event1;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = bind(this._trickle, this);
      this.value = 0;
      this.content = '';
      this.speed = 300;
      this.opacity = 0.99;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var ref;
      if ((value > (ref = this.value) && ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      var originalOpacity;
      originalOpacity = this.opacity;
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = originalOpacity;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, ref;
    if ((ref = event.state) != null ? ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (ref = popCookie('request_method')) === 'GET' || ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

/*global window, jQuery */

(function($) {
    // Default configuration properties.
    var defaults = {
        vertical: false,
        rtl: false,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: 'normal',
        easing: 'swing',
        auto: 0,
        wrap: null,
        initCallback: null,
        setupCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        animationStepCallback: null,
        buttonNextHTML: '<div></div>',
        buttonPrevHTML: '<div></div>',
        buttonNextEvent: 'click',
        buttonPrevEvent: 'click',
        buttonNextCallback: null,
        buttonPrevCallback: null,
        itemFallbackDimension: null
    }, windowLoaded = false;

    $(window).bind('load.jcarousel', function() { windowLoaded = true; });

    /**
     * The jCarousel object.
     *
     * @constructor
     * @class jcarousel
     * @param e {HTMLElement} The element to create the carousel for.
     * @param o {Object} A set of key/value pairs to set as configuration properties.
     * @cat Plugins/jCarousel
     */
    $.jcarousel = function(e, o) {
        this.options    = $.extend({}, defaults, o || {});

        this.locked          = false;
        this.autoStopped     = false;

        this.container       = null;
        this.clip            = null;
        this.list            = null;
        this.buttonNext      = null;
        this.buttonPrev      = null;
        this.buttonNextState = null;
        this.buttonPrevState = null;

        // Only set if not explicitly passed as option
        if (!o || o.rtl === undefined) {
            this.options.rtl = ($(e).attr('dir') || $('html').attr('dir') || '').toLowerCase() == 'rtl';
        }

        this.wh = !this.options.vertical ? 'width' : 'height';
        this.lt = !this.options.vertical ? (this.options.rtl ? 'right' : 'left') : 'top';

        // Extract skin class
        var skin = '', split = e.className.split(' ');

        for (var i = 0; i < split.length; i++) {
            if (split[i].indexOf('jcarousel-skin') != -1) {
                $(e).removeClass(split[i]);
                skin = split[i];
                break;
            }
        }

        if (e.nodeName.toUpperCase() == 'UL' || e.nodeName.toUpperCase() == 'OL') {
            this.list      = $(e);
            this.clip      = this.list.parents('.jcarousel-clip');
            this.container = this.list.parents('.jcarousel-container');
        } else {
            this.container = $(e);
            this.list      = this.container.find('ul,ol').eq(0);
            this.clip      = this.container.find('.jcarousel-clip');
        }

        if (this.clip.size() === 0) {
            this.clip = this.list.wrap('<div></div>').parent();
        }

        if (this.container.size() === 0) {
            this.container = this.clip.wrap('<div></div>').parent();
        }

        if (skin !== '' && this.container.parent()[0].className.indexOf('jcarousel-skin') == -1) {
            this.container.wrap('<div class=" '+ skin + '"></div>');
        }

        this.buttonPrev = $('.jcarousel-prev', this.container);

        if (this.buttonPrev.size() === 0 && this.options.buttonPrevHTML !== null) {
            this.buttonPrev = $(this.options.buttonPrevHTML).appendTo(this.container);
        }

        this.buttonPrev.addClass(this.className('jcarousel-prev'));

        this.buttonNext = $('.jcarousel-next', this.container);

        if (this.buttonNext.size() === 0 && this.options.buttonNextHTML !== null) {
            this.buttonNext = $(this.options.buttonNextHTML).appendTo(this.container);
        }

        this.buttonNext.addClass(this.className('jcarousel-next'));

        this.clip.addClass(this.className('jcarousel-clip')).css({
            position: 'relative'
        });

        this.list.addClass(this.className('jcarousel-list')).css({
            overflow: 'hidden',
            position: 'relative',
            top: 0,
            margin: 0,
            padding: 0
        }).css((this.options.rtl ? 'right' : 'left'), 0);

        this.container.addClass(this.className('jcarousel-container')).css({
            position: 'relative'
        });

        if (!this.options.vertical && this.options.rtl) {
            this.container.addClass('jcarousel-direction-rtl').attr('dir', 'rtl');
        }

        var di = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
        var li = this.list.children('li');

        var self = this;

        if (li.size() > 0) {
            var wh = 0, j = this.options.offset;
            li.each(function() {
                self.format(this, j++);
                wh += self.dimension(this, di);
            });

            this.list.css(this.wh, (wh + 100) + 'px');

            // Only set if not explicitly passed as option
            if (!o || o.size === undefined) {
                this.options.size = li.size();
            }
        }

        // For whatever reason, .show() does not work in Safari...
        this.container.css('display', 'block');
        this.buttonNext.css('display', 'block');
        this.buttonPrev.css('display', 'block');

        this.funcNext   = function() { self.next(); return false; };
        this.funcPrev   = function() { self.prev(); return false; };
        this.funcResize = function() {
            if (self.resizeTimer) {
                clearTimeout(self.resizeTimer);
            }

            self.resizeTimer = setTimeout(function() {
                self.reload();
            }, 100);
        };

        if (this.options.initCallback !== null) {
            this.options.initCallback(this, 'init');
        }

        if (!windowLoaded && $jc.isSafari()) {
            this.buttons(false, false);
            $(window).bind('load.jcarousel', function() { self.setup(); });
        } else {
            this.setup();
        }
    };

    // Create shortcut for internal use
    var $jc = $.jcarousel;

    $jc.fn = $jc.prototype = {
        jcarousel: '0.2.9'
    };

    $jc.fn.extend = $jc.extend = $.extend;

    $jc.fn.extend({
        /**
         * Setups the carousel.
         *
         * @method setup
         * @return undefined
         */
        setup: function() {
            this.first       = null;
            this.last        = null;
            this.prevFirst   = null;
            this.prevLast    = null;
            this.animating   = false;
            this.timer       = null;
            this.resizeTimer = null;
            this.tail        = null;
            this.inTail      = false;

            if (this.locked) {
                return;
            }

            this.list.css(this.lt, this.pos(this.options.offset) + 'px');
            var p = this.pos(this.options.start, true);
            this.prevFirst = this.prevLast = null;
            this.animate(p, false);

            $(window).unbind('resize.jcarousel', this.funcResize).bind('resize.jcarousel', this.funcResize);

            if (this.options.setupCallback !== null) {
                this.options.setupCallback(this);
            }
        },

        /**
         * Clears the list and resets the carousel.
         *
         * @method reset
         * @return undefined
         */
        reset: function() {
            this.list.empty();

            this.list.css(this.lt, '0px');
            this.list.css(this.wh, '10px');

            if (this.options.initCallback !== null) {
                this.options.initCallback(this, 'reset');
            }

            this.setup();
        },

        /**
         * Reloads the carousel and adjusts positions.
         *
         * @method reload
         * @return undefined
         */
        reload: function() {
            if (this.tail !== null && this.inTail) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + this.tail);
            }

            this.tail   = null;
            this.inTail = false;

            if (this.options.reloadCallback !== null) {
                this.options.reloadCallback(this);
            }

            if (this.options.visible !== null) {
                var self = this;
                var di = Math.ceil(this.clipping() / this.options.visible), wh = 0, lt = 0;
                this.list.children('li').each(function(i) {
                    wh += self.dimension(this, di);
                    if (i + 1 < self.first) {
                        lt = wh;
                    }
                });

                this.list.css(this.wh, wh + 'px');
                this.list.css(this.lt, -lt + 'px');
            }

            this.scroll(this.first, false);
        },

        /**
         * Locks the carousel.
         *
         * @method lock
         * @return undefined
         */
        lock: function() {
            this.locked = true;
            this.buttons();
        },

        /**
         * Unlocks the carousel.
         *
         * @method unlock
         * @return undefined
         */
        unlock: function() {
            this.locked = false;
            this.buttons();
        },

        /**
         * Sets the size of the carousel.
         *
         * @method size
         * @return undefined
         * @param s {Number} The size of the carousel.
         */
        size: function(s) {
            if (s !== undefined) {
                this.options.size = s;
                if (!this.locked) {
                    this.buttons();
                }
            }

            return this.options.size;
        },

        /**
         * Checks whether a list element exists for the given index (or index range).
         *
         * @method get
         * @return bool
         * @param i {Number} The index of the (first) element.
         * @param i2 {Number} The index of the last element.
         */
        has: function(i, i2) {
            if (i2 === undefined || !i2) {
                i2 = i;
            }

            if (this.options.size !== null && i2 > this.options.size) {
                i2 = this.options.size;
            }

            for (var j = i; j <= i2; j++) {
                var e = this.get(j);
                if (!e.length || e.hasClass('jcarousel-item-placeholder')) {
                    return false;
                }
            }

            return true;
        },

        /**
         * Returns a jQuery object with list element for the given index.
         *
         * @method get
         * @return jQuery
         * @param i {Number} The index of the element.
         */
        get: function(i) {
            return $('>.jcarousel-item-' + i, this.list);
        },

        /**
         * Adds an element for the given index to the list.
         * If the element already exists, it updates the inner html.
         * Returns the created element as jQuery object.
         *
         * @method add
         * @return jQuery
         * @param i {Number} The index of the element.
         * @param s {String} The innerHTML of the element.
         */
        add: function(i, s) {
            var e = this.get(i), old = 0, n = $(s);

            if (e.length === 0) {
                var c, j = $jc.intval(i);
                e = this.create(i);
                while (true) {
                    c = this.get(--j);
                    if (j <= 0 || c.length) {
                        if (j <= 0) {
                            this.list.prepend(e);
                        } else {
                            c.after(e);
                        }
                        break;
                    }
                }
            } else {
                old = this.dimension(e);
            }

            if (n.get(0).nodeName.toUpperCase() == 'LI') {
                e.replaceWith(n);
                e = n;
            } else {
                e.empty().append(s);
            }

            this.format(e.removeClass(this.className('jcarousel-item-placeholder')), i);

            var di = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
            var wh = this.dimension(e, di) - old;

            if (i > 0 && i < this.first) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - wh + 'px');
            }

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) + wh + 'px');

            return e;
        },

        /**
         * Removes an element for the given index from the list.
         *
         * @method remove
         * @return undefined
         * @param i {Number} The index of the element.
         */
        remove: function(i) {
            var e = this.get(i);

            // Check if item exists and is not currently visible
            if (!e.length || (i >= this.first && i <= this.last)) {
                return;
            }

            var d = this.dimension(e);

            if (i < this.first) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + d + 'px');
            }

            e.remove();

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) - d + 'px');
        },

        /**
         * Moves the carousel forwards.
         *
         * @method next
         * @return undefined
         */
        next: function() {
            if (this.tail !== null && !this.inTail) {
                this.scrollTail(false);
            } else {
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'last') && this.options.size !== null && this.last == this.options.size) ? 1 : this.first + this.options.scroll);
            }
        },

        /**
         * Moves the carousel backwards.
         *
         * @method prev
         * @return undefined
         */
        prev: function() {
            if (this.tail !== null && this.inTail) {
                this.scrollTail(true);
            } else {
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'first') && this.options.size !== null && this.first == 1) ? this.options.size : this.first - this.options.scroll);
            }
        },

        /**
         * Scrolls the tail of the carousel.
         *
         * @method scrollTail
         * @return undefined
         * @param b {Boolean} Whether scroll the tail back or forward.
         */
        scrollTail: function(b) {
            if (this.locked || this.animating || !this.tail) {
                return;
            }

            this.pauseAuto();

            var pos  = $jc.intval(this.list.css(this.lt));

            pos = !b ? pos - this.tail : pos + this.tail;
            this.inTail = !b;

            // Save for callbacks
            this.prevFirst = this.first;
            this.prevLast  = this.last;

            this.animate(pos);
        },

        /**
         * Scrolls the carousel to a certain position.
         *
         * @method scroll
         * @return undefined
         * @param i {Number} The index of the element to scoll to.
         * @param a {Boolean} Flag indicating whether to perform animation.
         */
        scroll: function(i, a) {
            if (this.locked || this.animating) {
                return;
            }

            this.pauseAuto();
            this.animate(this.pos(i), a);
        },

        /**
         * Prepares the carousel and return the position for a certian index.
         *
         * @method pos
         * @return {Number}
         * @param i {Number} The index of the element to scoll to.
         * @param fv {Boolean} Whether to force last item to be visible.
         */
        pos: function(i, fv) {
            var pos  = $jc.intval(this.list.css(this.lt));

            if (this.locked || this.animating) {
                return pos;
            }

            if (this.options.wrap != 'circular') {
                i = i < 1 ? 1 : (this.options.size && i > this.options.size ? this.options.size : i);
            }

            var back = this.first > i;

            // Create placeholders, new list width/height
            // and new list position
            var f = this.options.wrap != 'circular' && this.first <= 1 ? 1 : this.first;
            var c = back ? this.get(f) : this.get(this.last);
            var j = back ? f : f - 1;
            var e = null, l = 0, p = false, d = 0, g;

            while (back ? --j >= i : ++j < i) {
                e = this.get(j);
                p = !e.length;
                if (e.length === 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    c[back ? 'before' : 'after' ](e);

                    if (this.first !== null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length) {
                            e = this.add(j, g.clone(true));
                        }
                    }
                }

                c = e;
                d = this.dimension(e);

                if (p) {
                    l += d;
                }

                if (this.first !== null && (this.options.wrap == 'circular' || (j >= 1 && (this.options.size === null || j <= this.options.size)))) {
                    pos = back ? pos + d : pos - d;
                }
            }

            // Calculate visible items
            var clipping = this.clipping(), cache = [], visible = 0, v = 0;
            c = this.get(i - 1);
            j = i;

            while (++visible) {
                e = this.get(j);
                p = !e.length;
                if (e.length === 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    // This should only happen on a next scroll
                    if (c.length === 0) {
                        this.list.prepend(e);
                    } else {
                        c[back ? 'before' : 'after' ](e);
                    }

                    if (this.first !== null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length) {
                            e = this.add(j, g.clone(true));
                        }
                    }
                }

                c = e;
                d = this.dimension(e);
                if (d === 0) {
                    throw new Error('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');
                }

                if (this.options.wrap != 'circular' && this.options.size !== null && j > this.options.size) {
                    cache.push(e);
                } else if (p) {
                    l += d;
                }

                v += d;

                if (v >= clipping) {
                    break;
                }

                j++;
            }

             // Remove out-of-range placeholders
            for (var x = 0; x < cache.length; x++) {
                cache[x].remove();
            }

            // Resize list
            if (l > 0) {
                this.list.css(this.wh, this.dimension(this.list) + l + 'px');

                if (back) {
                    pos -= l;
                    this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - l + 'px');
                }
            }

            // Calculate first and last item
            var last = i + visible - 1;
            if (this.options.wrap != 'circular' && this.options.size && last > this.options.size) {
                last = this.options.size;
            }

            if (j > last) {
                visible = 0;
                j = last;
                v = 0;
                while (++visible) {
                    e = this.get(j--);
                    if (!e.length) {
                        break;
                    }
                    v += this.dimension(e);
                    if (v >= clipping) {
                        break;
                    }
                }
            }

            var first = last - visible + 1;
            if (this.options.wrap != 'circular' && first < 1) {
                first = 1;
            }

            if (this.inTail && back) {
                pos += this.tail;
                this.inTail = false;
            }

            this.tail = null;
            if (this.options.wrap != 'circular' && last == this.options.size && (last - visible + 1) >= 1) {
                var m = $jc.intval(this.get(last).css(!this.options.vertical ? 'marginRight' : 'marginBottom'));
                if ((v - m) > clipping) {
                    this.tail = v - clipping - m;
                }
            }

            if (fv && i === this.options.size && this.tail) {
                pos -= this.tail;
                this.inTail = true;
            }

            // Adjust position
            while (i-- > first) {
                pos += this.dimension(this.get(i));
            }

            // Save visible item range
            this.prevFirst = this.first;
            this.prevLast  = this.last;
            this.first     = first;
            this.last      = last;

            return pos;
        },

        /**
         * Animates the carousel to a certain position.
         *
         * @method animate
         * @return undefined
         * @param p {Number} Position to scroll to.
         * @param a {Boolean} Flag indicating whether to perform animation.
         */
        animate: function(p, a) {
            if (this.locked || this.animating) {
                return;
            }

            this.animating = true;

            var self = this;
            var scrolled = function() {
                self.animating = false;

                if (p === 0) {
                    self.list.css(self.lt,  0);
                }

                if (!self.autoStopped && (self.options.wrap == 'circular' || self.options.wrap == 'both' || self.options.wrap == 'last' || self.options.size === null || self.last < self.options.size || (self.last == self.options.size && self.tail !== null && !self.inTail))) {
                    self.startAuto();
                }

                self.buttons();
                self.notify('onAfterAnimation');

                // This function removes items which are appended automatically for circulation.
                // This prevents the list from growing infinitely.
                if (self.options.wrap == 'circular' && self.options.size !== null) {
                    for (var i = self.prevFirst; i <= self.prevLast; i++) {
                        if (i !== null && !(i >= self.first && i <= self.last) && (i < 1 || i > self.options.size)) {
                            self.remove(i);
                        }
                    }
                }
            };

            this.notify('onBeforeAnimation');

            // Animate
            if (!this.options.animation || a === false) {
                this.list.css(this.lt, p + 'px');
                scrolled();
            } else {
                var o = !this.options.vertical ? (this.options.rtl ? {'right': p} : {'left': p}) : {'top': p};
                // Define animation settings.
                var settings = {
                    duration: this.options.animation,
                    easing:   this.options.easing,
                    complete: scrolled
                };
                // If we have a step callback, specify it as well.
                if ($.isFunction(this.options.animationStepCallback)) {
                    settings.step = this.options.animationStepCallback;
                }
                // Start the animation.
                this.list.animate(o, settings);
            }
        },

        /**
         * Starts autoscrolling.
         *
         * @method auto
         * @return undefined
         * @param s {Number} Seconds to periodically autoscroll the content.
         */
        startAuto: function(s) {
            if (s !== undefined) {
                this.options.auto = s;
            }

            if (this.options.auto === 0) {
                return this.stopAuto();
            }

            if (this.timer !== null) {
                return;
            }

            this.autoStopped = false;

            var self = this;
            this.timer = window.setTimeout(function() { self.next(); }, this.options.auto * 1000);
        },

        /**
         * Stops autoscrolling.
         *
         * @method stopAuto
         * @return undefined
         */
        stopAuto: function() {
            this.pauseAuto();
            this.autoStopped = true;
        },

        /**
         * Pauses autoscrolling.
         *
         * @method pauseAuto
         * @return undefined
         */
        pauseAuto: function() {
            if (this.timer === null) {
                return;
            }

            window.clearTimeout(this.timer);
            this.timer = null;
        },

        /**
         * Sets the states of the prev/next buttons.
         *
         * @method buttons
         * @return undefined
         */
        buttons: function(n, p) {
            if (n == null) {
                n = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'first') || this.options.size === null || this.last < this.options.size);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'first') && this.options.size !== null && this.last >= this.options.size) {
                    n = this.tail !== null && !this.inTail;
                }
            }

            if (p == null) {
                p = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'last') || this.first > 1);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'last') && this.options.size !== null && this.first == 1) {
                    p = this.tail !== null && this.inTail;
                }
            }

            var self = this;

            if (this.buttonNext.size() > 0) {
                this.buttonNext.unbind(this.options.buttonNextEvent + '.jcarousel', this.funcNext);

                if (n) {
                    this.buttonNext.bind(this.options.buttonNextEvent + '.jcarousel', this.funcNext);
                }

                this.buttonNext[n ? 'removeClass' : 'addClass'](this.className('jcarousel-next-disabled')).attr('disabled', n ? false : true);

                if (this.options.buttonNextCallback !== null && this.buttonNext.data('jcarouselstate') != n) {
                    this.buttonNext.each(function() { self.options.buttonNextCallback(self, this, n); }).data('jcarouselstate', n);
                }
            } else {
                if (this.options.buttonNextCallback !== null && this.buttonNextState != n) {
                    this.options.buttonNextCallback(self, null, n);
                }
            }

            if (this.buttonPrev.size() > 0) {
                this.buttonPrev.unbind(this.options.buttonPrevEvent + '.jcarousel', this.funcPrev);

                if (p) {
                    this.buttonPrev.bind(this.options.buttonPrevEvent + '.jcarousel', this.funcPrev);
                }

                this.buttonPrev[p ? 'removeClass' : 'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled', p ? false : true);

                if (this.options.buttonPrevCallback !== null && this.buttonPrev.data('jcarouselstate') != p) {
                    this.buttonPrev.each(function() { self.options.buttonPrevCallback(self, this, p); }).data('jcarouselstate', p);
                }
            } else {
                if (this.options.buttonPrevCallback !== null && this.buttonPrevState != p) {
                    this.options.buttonPrevCallback(self, null, p);
                }
            }

            this.buttonNextState = n;
            this.buttonPrevState = p;
        },

        /**
         * Notify callback of a specified event.
         *
         * @method notify
         * @return undefined
         * @param evt {String} The event name
         */
        notify: function(evt) {
            var state = this.prevFirst === null ? 'init' : (this.prevFirst < this.first ? 'next' : 'prev');

            // Load items
            this.callback('itemLoadCallback', evt, state);

            if (this.prevFirst !== this.first) {
                this.callback('itemFirstInCallback', evt, state, this.first);
                this.callback('itemFirstOutCallback', evt, state, this.prevFirst);
            }

            if (this.prevLast !== this.last) {
                this.callback('itemLastInCallback', evt, state, this.last);
                this.callback('itemLastOutCallback', evt, state, this.prevLast);
            }

            this.callback('itemVisibleInCallback', evt, state, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback('itemVisibleOutCallback', evt, state, this.prevFirst, this.prevLast, this.first, this.last);
        },

        callback: function(cb, evt, state, i1, i2, i3, i4) {
            if (this.options[cb] == null || (typeof this.options[cb] != 'object' && evt != 'onAfterAnimation')) {
                return;
            }

            var callback = typeof this.options[cb] == 'object' ? this.options[cb][evt] : this.options[cb];

            if (!$.isFunction(callback)) {
                return;
            }

            var self = this;

            if (i1 === undefined) {
                callback(self, state, evt);
            } else if (i2 === undefined) {
                this.get(i1).each(function() { callback(self, this, i1, state, evt); });
            } else {
                var call = function(i) {
                    self.get(i).each(function() { callback(self, this, i, state, evt); });
                };
                for (var i = i1; i <= i2; i++) {
                    if (i !== null && !(i >= i3 && i <= i4)) {
                        call(i);
                    }
                }
            }
        },

        create: function(i) {
            return this.format('<li></li>', i);
        },

        format: function(e, i) {
            e = $(e);
            var split = e.get(0).className.split(' ');
            for (var j = 0; j < split.length; j++) {
                if (split[j].indexOf('jcarousel-') != -1) {
                    e.removeClass(split[j]);
                }
            }
            e.addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-' + i)).css({
                'float': (this.options.rtl ? 'right' : 'left'),
                'list-style': 'none'
            }).attr('jcarouselindex', i);
            return e;
        },

        className: function(c) {
            return c + ' ' + c + (!this.options.vertical ? '-horizontal' : '-vertical');
        },

        dimension: function(e, d) {
            var el = $(e);

            if (d == null) {
                return !this.options.vertical ?
                    ((el.innerWidth() +
                        $jc.intval(el.css('margin-left')) +
                        $jc.intval(el.css('margin-right')) +
                        $jc.intval(el.css('border-left-width')) +
                        $jc.intval(el.css('border-right-width'))) || $jc.intval(this.options.itemFallbackDimension)) :
                    ((el.innerHeight() +
                        $jc.intval(el.css('margin-top')) +
                        $jc.intval(el.css('margin-bottom')) +
                        $jc.intval(el.css('border-top-width')) +
                        $jc.intval(el.css('border-bottom-width'))) || $jc.intval(this.options.itemFallbackDimension));
            } else {
                var w = !this.options.vertical ?
                    d - $jc.intval(el.css('marginLeft')) - $jc.intval(el.css('marginRight')) :
                    d - $jc.intval(el.css('marginTop')) - $jc.intval(el.css('marginBottom'));

                $(el).css(this.wh, w + 'px');

                return this.dimension(el);
            }
        },

        clipping: function() {
            return !this.options.vertical ?
                this.clip[0].offsetWidth - $jc.intval(this.clip.css('borderLeftWidth')) - $jc.intval(this.clip.css('borderRightWidth')) :
                this.clip[0].offsetHeight - $jc.intval(this.clip.css('borderTopWidth')) - $jc.intval(this.clip.css('borderBottomWidth'));
        },

        index: function(i, s) {
            if (s == null) {
                s = this.options.size;
            }

            return Math.round((((i-1) / s) - Math.floor((i-1) / s)) * s) + 1;
        }
    });

    $jc.extend({
        /**
         * Gets/Sets the global default configuration properties.
         *
         * @method defaults
         * @return {Object}
         * @param d {Object} A set of key/value pairs to set as configuration properties.
         */
        defaults: function(d) {
            return $.extend(defaults, d || {});
        },

        intval: function(v) {
            v = parseInt(v, 10);
            return isNaN(v) ? 0 : v;
        },

        windowLoaded: function() {
            windowLoaded = true;
        },

        isSafari: function() {
            var ua = navigator.userAgent.toLowerCase(),
                match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || [],
                browser = match[1] || "";

            return browser === 'webkit';
        }
    });

    /**
     * Creates a carousel for all matched elements.
     *
     * @example $("#mycarousel").jcarousel();
     * @before <ul id="mycarousel" class="jcarousel-skin-name"><li>First item</li><li>Second item</li></ul>
     * @result
     *
     * <div class="jcarousel-skin-name">
     *   <div class="jcarousel-container">
     *     <div class="jcarousel-clip">
     *       <ul class="jcarousel-list">
     *         <li class="jcarousel-item-1">First item</li>
     *         <li class="jcarousel-item-2">Second item</li>
     *       </ul>
     *     </div>
     *     <div disabled="disabled" class="jcarousel-prev jcarousel-prev-disabled"></div>
     *     <div class="jcarousel-next"></div>
     *   </div>
     * </div>
     *
     * @method jcarousel
     * @return jQuery
     * @param o {Hash|String} A set of key/value pairs to set as configuration properties or a method name to call on a formerly created instance.
     */
    $.fn.jcarousel = function(o) {
        if (typeof o == 'string') {
            var instance = $(this).data('jcarousel'), args = Array.prototype.slice.call(arguments, 1);
            return instance[o].apply(instance, args);
        } else {
            return this.each(function() {
                var instance = $(this).data('jcarousel');
                if (instance) {
                    if (o) {
                        $.extend(instance.options, o);
                    }
                    instance.reload();
                } else {
                    $(this).data('jcarousel', new $jc(this, o));
                }
            });
        }
    };

})(jQuery);
/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/


(function($){
	
	// DECLARE METHODS
 
	var methods = {

		// "INIT" METHOD
	
	    init: function(settings){

			return this.each(function(){
				
				// BUILD CONFIG OBJECT

				var config = {
					
					// PUBLIC PROPERTIES
					
					targetSelector : '.mix',
					filterSelector : '.filter',
					sortSelector : '.sort',
					buttonEvent: 'click',
					effects : ['fade', 'scale'],
					listEffects : null,
					easing : 'smooth',
					layoutMode: 'grid',
					targetDisplayGrid : 'inline-block',
					targetDisplayList: 'block',
					listClass : '',
					gridClass : '',
					transitionSpeed : 600,
					showOnLoad : 'all',
					sortOnLoad : false,
					multiFilter : false,
					filterLogic : 'or',
					resizeContainer : true,
					minHeight : 0,
					failClass : 'fail',
					perspectiveDistance : '3000',
					perspectiveOrigin : '50% 50%',
					animateGridList : true,
					onMixLoad: null,
					onMixStart : null,
					onMixEnd : null,

					// MISC

					container : null,
					origOrder : [],
					startOrder : [],
					newOrder : [],
					origSort: [],
					checkSort: [],
					filter : '',
					mixing : false,
					origDisplay : '',
					origLayout: '',
					origHeight : 0, 
					newHeight : 0,
					isTouch : false,
					resetDelay : 0,
					failsafe : null,

					// CSS
					
					prefix : '',
					easingFallback : 'ease-in-out',
					transition : {}, 
					perspective : {}, 
					clean : {},
					fade : '1',
					scale : '',
					rotateX : '',
					rotateY : '',
					rotateZ : '',
					blur : '',
					grayscale : ''
				};
				
				if(settings){
					$.extend(config, settings);
				};

				// ADD CONFIG OBJECT TO CONTAINER OBJECT PER INSTANTIATION
				
				this.config = config;
				
				// DETECT TOUCH
				
				$.support.touch = 'ontouchend' in document;

				if ($.support.touch) {
					config.isTouch = true;
					config.resetDelay = 350;
				};
				
				// LOCALIZE CONTAINER
	
				config.container = $(this);
				var $cont = config.container;
				
				// GET VENDOR PREFIX
				
				config.prefix = prefix($cont[0]);
				config.prefix = config.prefix ? '-'+config.prefix.toLowerCase()+'-' : '';
				
				// CACHE 'DEFAULT' SORTING ORDER
			
				$cont.find(config.targetSelector).each(function(){
					config.origOrder.push($(this));
				});
				
				// PERFORM SORT ON LOAD 
				
				if(config.sortOnLoad){
					var sortby, order;
					if($.isArray(config.sortOnLoad)){
						sortby = config.sortOnLoad[0], order = config.sortOnLoad[1];
						$(config.sortSelector+'[data-sort='+config.sortOnLoad[0]+'][data-order='+config.sortOnLoad[1]+']').addClass('active');
					} else {
						$(config.sortSelector+'[data-sort='+config.sortOnLoad+']').addClass('active');
						sortby = config.sortOnLoad, config.sortOnLoad = 'desc';
					};
					sort(sortby, order, $cont, config);
				};
				
				// BUILD TRANSITION AND PERSPECTIVE OBJECTS
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.transition[a+'transition'] = 'all '+config.transitionSpeed+'ms ease-in-out';
					config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
					config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
				};
				
				// BUILD TRANSITION CLEANER
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.clean[a+'transition'] = 'none';
				};
	
				// CHOOSE GRID OR LIST
	
				if(config.layoutMode == 'list'){
					$cont.addClass(config.listClass);
					config.origDisplay = config.targetDisplayList;
				} else {
					$cont.addClass(config.gridClass);
					config.origDisplay = config.targetDisplayGrid;
				};
				config.origLayout = config.layoutMode;
				
				// PARSE 'SHOWONLOAD'
				
				var showOnLoadArray = config.showOnLoad.split(' ');
				
				// GIVE ACTIVE FILTER ACTIVE CLASS
				
				$.each(showOnLoadArray, function(){
					$(config.filterSelector+'[data-filter="'+this+'"]').addClass('active');
				});
				
				// RENAME "ALL" CATEGORY TO "MIX_ALL"
	
				$cont.find(config.targetSelector).addClass('mix_all');
				if(showOnLoadArray[0]  == 'all'){
					showOnLoadArray[0] = 'mix_all',
					config.showOnLoad = 'mix_all';
				};
				
				// FADE IN 'SHOWONLOAD'
				
				var $showOnLoad = $();
				$.each(showOnLoadArray, function(){
					$showOnLoad = $showOnLoad.add($('.'+this))
				});
				
				$showOnLoad.each(function(){
					var $t = $(this);
					if(config.layoutMode == 'list'){
						$t.css('display',config.targetDisplayList);
					} else {
						$t.css('display',config.targetDisplayGrid);
					};
					$t.css(config.transition);
				});
				
				// WRAP FADE-IN TO PREVENT RACE CONDITION
				
				var delay = setTimeout(function(){
					
					config.mixing = true;
					
					$showOnLoad.css('opacity','1');
					
					// CLEAN UP
					
					var reset = setTimeout(function(){
						if(config.layoutMode == 'list'){
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayList,
								opacity: 1
							});
						} else {
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayGrid,
								opacity: 1
							});
						};
						
						// FIRE "ONMIXLOAD" CALLBACK
						
						config.mixing = false;

						if(typeof config.onMixLoad == 'function') {
							var output = config.onMixLoad.call(this, config);

							// UPDATE CONFIG IF DATA RETURNED

							config = output ? output : config;
						};
						
					},config.transitionSpeed);
				},10);
				
				// PRESET ACTIVE FILTER
				
				config.filter = config.showOnLoad;
			
				// BIND SORT CLICK HANDLERS
			
				$(config.sortSelector).bind(config.buttonEvent,function(){
					
					if(!config.mixing){
						
						// PARSE SORT ARGUMENTS FROM BUTTON CLASSES
						
						var $t = $(this),
						sortby = $t.attr('data-sort'),
						order = $t.attr('data-order');
						
						if(!$t.hasClass('active')){
							$(config.sortSelector).removeClass('active');
							$t.addClass('active');
						} else {
							if(sortby != 'random')return false;
						};
						
						$cont.find(config.targetSelector).each(function(){
							config.startOrder.push($(this));
						});
				
						goMix(config.filter,sortby,order,$cont, config);
				
					};
				
				});

				// BIND FILTER CLICK HANDLERS

				$(config.filterSelector).bind(config.buttonEvent,function(){
				
					if(!config.mixing){
						
						var $t = $(this);
						
						// PARSE FILTER ARGUMENTS FROM BUTTON CLASSES
		
						if(config.multiFilter == false){
							
							// SINGLE ACTIVE BUTTON
							
							$(config.filterSelector).removeClass('active');
							$t.addClass('active');
						
							config.filter = $t.attr('data-filter');
						
							$(config.filterSelector+'[data-filter="'+config.filter+'"]').addClass('active');

						} else {
						
							// MULTIPLE ACTIVE BUTTONS
							
							var thisFilter = $t.attr('data-filter'); 
						
							if($t.hasClass('active')){
								$t.removeClass('active');
								
								// REMOVE FILTER FROM SPACE-SEPERATED STRING
								
								var re = new RegExp('(\\s|^)'+thisFilter);
								config.filter = config.filter.replace(re,'');
							} else {
								
								// ADD FILTER TO SPACE-SEPERATED STRING
								
								$t.addClass('active');
								config.filter = config.filter+' '+thisFilter;
								
							};
						};
						
						// GO MIX
						
						goMix(config.filter, null, null, $cont, config);

					};
				
				});
					
			});
		},
	
		// "TOGRID" METHOD
	
		toGrid: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'grid'){
					config.layoutMode = 'grid';
					goMix(config.filter, null, null, $(this), config);
				};
			});
		},
	
		// "TOLIST" METHOD
	
		toList: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'list'){
					config.layoutMode = 'list';
					goMix(config.filter, null, null, $(this), config);
				};
			});
		},
	
		// "FILTER" METHOD
	
		filter: function(arg){
			return this.each(function(){
				var config = this.config;
				if(!config.mixing){	
					$(config.filterSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, $(this), config);
				};
			});	
		},
	
		// "SORT" METHOD
	
		sort: function(args){
			return this.each(function(){
				var config = this.config,
					$t = $(this);
				if(!config.mixing){
					$(config.sortSelector).removeClass('active');
					if($.isArray(args)){
						var sortby = args[0], order = args[1];
						$(config.sortSelector+'[data-sort="'+args[0]+'"][data-order="'+args[1]+'"]').addClass('active');
					} else {
						$(config.sortSelector+'[data-sort="'+args+'"]').addClass('active');
						var sortby = args, order = 'desc';
					};
					$t.find(config.targetSelector).each(function(){
						config.startOrder.push($(this));
					});
					
					goMix(config.filter,sortby,order, $t, config);
				
				};
			});
		},
		
		// "MULTIMIX" METHOD
		
		multimix: function(args){
			return this.each(function(){
				var config = this.config,
					$t = $(this);
					multiOut = {
						filter: config.filter,
						sort: null,
						order: 'desc',
						layoutMode: config.layoutMode
					};
				$.extend(multiOut, args);
				if(!config.mixing){
					$(config.filterSelector).add(config.sortSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass('active');
					if(typeof multiOut.sort !== 'undefined'){
						$(config.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass('active');
						$t.find(config.targetSelector).each(function(){
							config.startOrder.push($(this));
						});
					};
					config.layoutMode = multiOut.layoutMode;
					goMix(multiOut.filter,multiOut.sort,multiOut.order, $t, config);
				};
			});
		},
		
		// "REMIX" METHOD

		remix: function(arg){
			return this.each(function(){
				var config = this.config,
					$t = $(this);	
				config.origOrder = [];
				$t.find(config.targetSelector).each(function(){
					var $th = $(this);
					$th.addClass('mix_all'); 
				    config.origOrder.push($th);
				});
				if(!config.mixing && typeof arg !== 'undefined'){
					$(config.filterSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, $t, config);
				};
			});
		}
	};
	
	// DECLARE PLUGIN

	$.fn.mixitup = function(method, arg){
		if (methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments,1));
		} else if (typeof method === 'object' || ! method){
			return methods.init.apply( this, arguments );
		};
	};
	
	/* ==== THE MAGIC ==== */
	
	function goMix(filter, sortby, order, $cont, config){
		
		// WE ARE NOW MIXING

		clearInterval(config.failsafe);
		config.mixing = true;	
		
		// APPLY ARGS TO CONFIG
		
		config.filter = filter;
		
		// FIRE "ONMIXSTART" CALLBACK
		
		if(typeof config.onMixStart == 'function') {
			var output = config.onMixStart.call(this, config);
			
			// UPDATE CONFIG IF DATA RETURNED
			
			config = output ? output : config;
		};
		
		// SHORT LOCAL VARS
		
		var speed = config.transitionSpeed;
		
		// REBUILD TRANSITION AND PERSPECTIVE OBJECTS
		
		for(var i = 0; i<2; i++){
			var a = i==0 ? a = config.prefix : '';
			config.transition[a+'transition'] = 'all '+speed+'ms linear';
			config.transition[a+'transform'] = a+'translate3d(0,0,0)';
			config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
			config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
		};
		
		// CACHE TARGET ELEMENTS FOR QUICK ACCESS
		
		var mixSelector = config.targetSelector,
		$targets = $cont.find(mixSelector);
		
		// ADD DATA OBJECT TO EACH TARGET
		
		$targets.each(function(){
			this.data = {};
		});
		
		// RE-DEFINE CONTAINER INCASE NOT IMMEDIATE PARENT OF TARGET ELEMENTS 
		
		var $par = $targets.parent();
	
		// ADD PERSPECTIVE TO CONTAINER 
		
		$par.css(config.perspective);
		
		// SETUP EASING

		config.easingFallback = 'ease-in-out';
		if(config.easing == 'smooth')config.easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
		if(config.easing == 'snap')config.easing = 'cubic-bezier(0.77, 0, 0.175, 1)';
		if(config.easing == 'windback'){
			config.easing = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			config.easingFallback = 'cubic-bezier(0.175, 0.885, 0.320, 1)'; // Fall-back for old webkit, with no values > 1 or < 1
		};
		if(config.easing == 'windup'){
			config.easing = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
			config.easingFallback = 'cubic-bezier(0.6, 0.28, 0.735, 0.045)';
		};
		
		// USE LIST SPECIFIC EFFECTS IF DECLARED
		
		var effectsOut = config.layoutMode == 'list' && config.listEffects != null ? config.listEffects : config.effects;
	
		// BUILD EFFECTS STRINGS & SKIP IF IE8
	
		if (Array.prototype.indexOf){
			config.fade = effectsOut.indexOf('fade') > -1 ? '0' : '';
			config.scale = effectsOut.indexOf('scale') > -1 ? 'scale(.01)' : '';
			config.rotateZ = effectsOut.indexOf('rotateZ') > -1 ? 'rotate(180deg)' : '';
			config.rotateY = effectsOut.indexOf('rotateY') > -1 ? 'rotateY(90deg)' : '';
			config.rotateX = effectsOut.indexOf('rotateX') > -1 ? 'rotateX(90deg)' : '';
			config.blur = effectsOut.indexOf('blur') > -1 ? 'blur(8px)' : '';
			config.grayscale = effectsOut.indexOf('grayscale') > -1 ? 'grayscale(100%)' : '';
		};
		
		// DECLARE NEW JQUERY OBJECTS FOR GROUPING
		
		var $show = $(), 
		$hide = $(),
		filterArray = [],
		multiDimensional = false;
		
		// BUILD FILTER ARRAY(S)
		
		if(typeof filter === 'string'){
			
			// SINGLE DIMENSIONAL FILTERING
			
			filterArray = buildFilterArray(filter);
			
		} else {
			
			// MULTI DIMENSIONAL FILTERING
			
			multiDimensional = true;
			
			$.each(filter,function(i){
				filterArray[i] = buildFilterArray(this);
			});
		};

		// "OR" LOGIC (DEFAULT)
		
		if(config.filterLogic == 'or'){
			
			if(filterArray[0] == '') filterArray.shift(); // IF FIRST ITEM IN ARRAY IS AN EMPTY SPACE, DELETE
			
			// IF NO ELEMENTS ARE DESIRED THEN HIDE ALL VISIBLE ELEMENTS
		
			if(filterArray.length < 1){
				
				$hide = $hide.add($cont.find(mixSelector+':visible'));
				
			} else {

			// ELSE CHECK EACH TARGET ELEMENT FOR ANY FILTER CATEGORY:
			
				$targets.each(function(){
					var $t = $(this);
					if(!multiDimensional){
						// IF HAS ANY FILTER, ADD TO "SHOW" OBJECT
						if($t.is('.'+filterArray.join(', .'))){
							$show = $show.add($t);
						// ELSE IF HAS NO FILTERS, ADD TO "HIDE" OBJECT
						} else {
							$hide = $hide.add($t);
						};
					} else {
						
						var pass = 0;
						// FOR EACH DIMENSION
						
						$.each(filterArray,function(i){
							if(this.length){
								if($t.is('.'+this.join(', .'))){
									pass++
								};
							} else if(pass > 0){
								pass++;
							};
						});
						// IF PASSES ALL DIMENSIONS, SHOW
						if(pass == filterArray.length){
							$show = $show.add($t);
						// ELSE HIDE
						} else {
							$hide = $hide.add($t);
						};
					};
				});
			
			};
	
		} else {
			
		// "AND" LOGIC
			
			// ADD "MIX_SHOW" CLASS TO ELEMENTS THAT HAVE ALL FILTERS
			
			$show = $show.add($par.find(mixSelector+'.'+filterArray.join('.')));
			
			// ADD "MIX_HIDE" CLASS TO EVERYTHING ELSE
			
			$hide = $hide.add($par.find(mixSelector+':not(.'+filterArray.join('.')+'):visible'));
		};
		
		// GET TOTAL NUMBER OF ELEMENTS TO SHOW
		
		var total = $show.length;
		
		// DECLARE NEW JQUERY OBJECTS

		var $tohide = $(),
		$toshow = $(),
		$pre = $();
		
		// FOR ELEMENTS TO BE HIDDEN, IF NOT ALREADY HIDDEN THEN ADD TO OBJECTS "TOHIDE" AND "PRE" 
		// TO INDICATE PRE-EXISTING ELEMENTS TO BE HIDDEN
		
		$hide.each(function(){
			var $t = $(this);
			if($t.css('display') != 'none'){
				$tohide = $tohide.add($t);
				$pre = $pre.add($t);
			};
		});
		
		// IF ALL ELEMENTS ARE ALREADY SHOWN AND THERE IS NOTHING TO HIDE, AND NOT PERFORMING A LAYOUT CHANGE OR SORT:
		
		if($show.filter(':visible').length == total && !$tohide.length && !sortby){
			
			if(config.origLayout == config.layoutMode){
				
				// THEN CLEAN UP AND GO HOME

				resetFilter();
				return false;
			} else {
				
				// IF ONLY ONE ITEM AND CHANGING FORM GRID TO LIST, MOST LIKELY POSITION WILL NOT CHANGE SO WE'RE DONE
			
				if($show.length == 1){ 
					
					if(config.layoutMode == 'list'){ 
						$cont.addClass(config.listClass);
						$cont.removeClass(config.gridClass);
						$pre.css('display',config.targetDisplayList);
					} else {
						$cont.addClass(config.gridClass);
						$cont.removeClass(config.listClass);
						$pre.css('display',config.targetDisplayGrid);
					};
					
					// THEN CLEAN UP AND GO HOME

					resetFilter();
					return false;
				}
			};
		};
		
		// GET CONTAINER'S STARTING HEIGHT

		config.origHeight = $par.height();
		
		// IF THERE IS SOMETHING TO BE SHOWN:

		if($show.length){
			
			// REMOVE "FAIL CLASS" FROM CONTAINER IF EXISTS
			
			$cont.removeClass(config.failClass);
			
			
			// FOR ELEMENTS TO BE SHOWN, IF NOT ALREADY SHOWN THEN ADD TO OBJECTS "TOSHOW" ELSE ADD CLASS "MIX_PRE"
			// TO INDICATE PRE-EXISTING ELEMENT

			$show.each(function(){ 
				var $t = $(this);
				if($t.css('display') == 'none'){
					$toshow = $toshow.add($t)
				} else {
					$pre = $pre.add($t);
				};
			});
	
			// IF NON-ANIMATED LAYOUT MODE TRANSITION:
		
			if((config.origLayout != config.layoutMode) && config.animateGridList == false){ 
			
				// ADD NEW DISPLAY TYPES, CLEAN UP AND GO HOME
				
				if(config.layoutMode == 'list'){ 
					$cont.addClass(config.listClass);
					$cont.removeClass(config.gridClass);
					$pre.css('display',config.targetDisplayList);
				} else {
					$cont.addClass(config.gridClass);
					$cont.removeClass(config.listClass);
					$pre.css('display',config.targetDisplayGrid);
				};
				
				resetFilter();
				return false;
			};
			
			// IF IE, FUCK OFF, AND THEN CLEAN UP AND GO HOME
		
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// OVERRIDE ANY EXISTING TRANSITION TIMING FOR CALCULATIONS
			
			$targets.css(config.clean);
			
			// FOR EACH PRE-EXISTING ELEMENT, ADD STARTING POSITION TO 'ORIGPOS' ARRAY
			
			$pre.each(function(){
				this.data.origPos = $(this).offset();
			});
	
			// TEMPORARILY SHOW ALL ELEMENTS TO SHOW (THAT ARE NOT ALREADY SHOWN), WITHOUT HIDING ELEMENTS TO HIDE
			// AND ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				$cont.addClass(config.listClass);
				$cont.removeClass(config.gridClass);
				$toshow.css('display',config.targetDisplayList);
			} else {
				$cont.addClass(config.gridClass);
				$cont.removeClass(config.listClass);
				$toshow.css('display',config.targetDisplayGrid);
			};
			
			// FOR EACH ELEMENT NOW SHOWN, ADD ITS INTERMEDIATE POSITION TO 'SHOWINTERPOS' ARRAY
	
			$toshow.each(function(){
				this.data.showInterPos = $(this).offset();
			});
			
			// FOR EACH ELEMENT TO BE HIDDEN, BUT NOT YET HIDDEN, AND NOW MOVED DUE TO SHOWN ELEMENTS,
			// ADD ITS INTERMEDIATE POSITION TO 'HIDEINTERPOS' ARRAY

			$tohide.each(function(){
				this.data.hideInterPos = $(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT, NOW MOVED DUE TO SHOWN ELEMENTS, ADD ITS POSITION TO 'PREINTERPOS' ARRAY
	
			$pre.each(function(){
				this.data.preInterPos = $(this).offset();
			});
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS INCASE WE ARE CHANGING LAYOUT MODE
	
			if(config.layoutMode == 'list'){
				$pre.css('display',config.targetDisplayList);
			} else {
				$pre.css('display',config.targetDisplayGrid);
			};
			
			// IF A SORT ARGUMENT HAS BEEN SENT, RUN SORT FUNCTION SO OBJECTS WILL MOVE TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, $cont, config);	
			};
			
			// IF VISIBLE SORT ORDER IS THE SAME (WHICH WOULD NOT TRIGGER A TRANSITION EVENT)
		
			if(sortby && compareArr(config.origSort, config.checkSort)){
				
				// THEN CLEAN UP AND GO HOME
				resetFilter();
				return false;
			};
			
			// TEMPORARILY HIDE ALL SHOWN ELEMENTS TO HIDE

			$tohide.hide();
			
			// FOR EACH ELEMENT TO SHOW, AND NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED, 
			// ADD ITS POSITION TO 'FINALPOS' ARRAY
			
			$toshow.each(function(i){
				this.data.finalPos = $(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED,
			// ADD ITS POSITION TO 'FINALPREPOS' ARRAY
	
			$pre.each(function(){
				this.data.finalPrePos = $(this).offset();
			});
			
			// SINCE WE ARE IN OUT FINAL STATE, GET NEW HEIGHT OF CONTAINER
	
			config.newHeight = $par.height();
			
			// IF A SORT ARGUMENT AS BEEN SENT, RUN SORT FUNCTION 'RESET' TO MOVE ELEMENTS BACK TO THEIR STARTING ORDER
			
			if(sortby){
				sort('reset', null, $cont, config);
			};
			
			// RE-HIDE ALL ELEMENTS TEMPORARILY SHOWN
			
			$toshow.hide();
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS BACK TO THEIR 
			// ORIGINAL PROPERTY, INCASE WE ARE CHANGING LAYOUT MODE
			
			$pre.css('display',config.origDisplay);
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.origDisplay == 'block'){
				$cont.addClass(config.listClass);
				$toshow.css('display', config.targetDisplayList);
			} else {
				$cont.removeClass(config.listClass);
				$toshow.css('display', config.targetDisplayGrid);
			};
			
			// IF WE ARE ANIMATING CONTAINER, RESET IT TO ITS STARTING HEIGHT
		
			if(config.resizeContainer)$par.css('height', config.origHeight+'px');
	
			// ADD TRANSFORMS TO ALL ELEMENTS TO SHOW
			
			var toShowCSS = {};
			
			for(var i = 0; i<2; i++){
				var a = i==0 ? a = config.prefix : '';
				toShowCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
				toShowCSS[a+'filter'] = config.blur+' '+config.grayscale;
			};
			
			$toshow.css(toShowCSS);
	
			// FOR EACH PRE-EXISTING ELEMENT, SUBTRACT ITS INTERMEDIATE POSITION FROM ITS ORIGINAL POSITION 
			// TO GET ITS STARTING OFFSET
	
			$pre.each(function(){
				var data = this.data,
				$t = $(this);
				
				if ($t.hasClass('mix_tohide')){
					data.preTX = data.origPos.left - data.hideInterPos.left;
					data.preTY = data.origPos.top - data.hideInterPos.top;
				} else {
					data.preTX = data.origPos.left - data.preInterPos.left;
					data.preTY = data.origPos.top - data.preInterPos.top;
				};
				var preCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					preCSS[a+'transform'] = 'translate('+data.preTX+'px,'+data.preTY+'px)';
				};
				
				$t.css(preCSS);	
			});
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				$cont.addClass(config.listClass);
				$cont.removeClass(config.gridClass);
			} else {
				$cont.addClass(config.gridClass);
				$cont.removeClass(config.listClass);
			};
			
			// WRAP ANIMATION FUNCTIONS IN 10ms TIMEOUT TO PREVENT RACE CONDITION
			
			var delay = setTimeout(function(){
		
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
				
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'all '+speed+'ms ease-in-out';
						containerCSS['height'] = config.newHeight+'px';
					};
					$par.css(containerCSS);
				};
	
				// BEGIN FADING IN/OUT OF ALL ELEMENTS TO SHOW/HIDE
				$tohide.css('opacity',config.fade);
				$toshow.css('opacity',1);
	
				// FOR EACH ELEMENT BEING SHOWN, CALCULATE ITS TRAJECTORY BY SUBTRACTING
				// ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				$toshow.each(function(){
					var data = this.data;
					data.tX = data.finalPos.left - data.showInterPos.left;
					data.tY = data.finalPos.top - data.showInterPos.top;
					
					var toShowCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toShowCSS[a+'transition-property'] = a+'transform, '+a+'filter, opacity';
						toShowCSS[a+'transition-timing-function'] = config.easing+', linear, linear';
						toShowCSS[a+'transition-duration'] = speed+'ms';
						toShowCSS[a+'transition-delay'] = '0';
						toShowCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
						toShowCSS[a+'filter'] = 'none';
					};
					
					$(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(toShowCSS);
				});
				
				// FOR EACH PRE-EXISTING ELEMENT, IF IT HAS A FINAL POSITION, CALCULATE 
				// ITS TRAJETORY BY SUBTRACTING ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				$pre.each(function(){
					var data = this.data
					data.tX = data.finalPrePos.left != 0 ? data.finalPrePos.left - data.preInterPos.left : 0;
					data.tY = data.finalPrePos.left != 0 ? data.finalPrePos.top - data.preInterPos.top : 0;
					
					var preCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						preCSS[a+'transition'] = 'all '+speed+'ms '+config.easing;
						preCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
					};
					
					$(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(preCSS);
				});
		
				// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN
				
				var toHideCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					toHideCSS[a+'transition'] = 'all '+speed+'ms '+config.easing+', '+a+'filter '+speed+'ms linear, opacity '+speed+'ms linear';
					toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
					toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
					toHideCSS['opacity'] = config.fade;
				};
				
				$tohide.css(toHideCSS);
				
				// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:
				
				$par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
					
					if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
						
						if(mixSelector.indexOf('.') > -1){
						
						// IF MIXSELECTOR IS A CLASS NAME
						
							if($(e.target).hasClass(mixSelector.replace('.',''))){
								resetFilter();
							};
						
						} else {
							
						// IF MIXSELECTOR IS A TAG
						
							if($(e.target).is(mixSelector)){
								resetFilter();
							};
							
						};
						
					};
				});	
	
			},10);
			
			// LAST RESORT EMERGENCY FAILSAFE
			
			config.failsafe = setTimeout(function(){
				if(config.mixing){
					resetFilter();
				};
			}, speed + 400);
	
		} else {
			
		// ELSE IF NOTHING TO SHOW, AND EVERYTHING TO BE HIDDEN
		
			// IF WE ARE RESIZING CONTAINER, SET ITS STARTING HEIGHT
	
			if(config.resizeContainer)$par.css('height', config.origHeight+'px');
			
			// IF IE, FUCK OFF, AND THEN GO HOME
			
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// GROUP ALL ELEMENTS TO HIDE INTO JQUERY OBJECT
			
			$tohide = $hide;
			
			// WRAP ANIMATION FUNCTIONS IN A 10ms DELAY TO PREVENT RACE CONDITION
	
			var delay = setTimeout(function(){
				
				// APPLY PERSPECTIVE TO CONTAINER
	
				$par.css(config.perspective);
				
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
		
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'height '+speed+'ms ease-in-out';
						containerCSS['height'] = config.minHeight+'px';
					};
					$par.css(containerCSS);
				};
	
				// APPLY TRANSITION TIMING TO ALL TARGET ELEMENTS
				
				$targets.css(config.transition);
				
				// GET TOTAL NUMBER OF ELEMENTS TO HIDE
	
				var totalHide = $hide.length;
				
				// IF SOMETHING TO HIDE:
	
				if(totalHide){
					
					// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN

					var toHideCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
						toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
						toHideCSS['opacity'] = config.fade;
					};

					$tohide.css(toHideCSS);
					
					// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:

					$par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
						if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
							$cont.addClass(config.failClass);
							resetFilter();
						};
					});
		
				} else {
					
				// ELSE, WE'RE DONE MIXING
				 	
					config.mixing = false;
				};
	
			}, 10);
		}; 
		
		// CLEAN UP AND RESET FUNCTION

		function resetFilter(){
			
			// UNBIND TRANSITION END EVENTS FROM CONTAINER
			
			$par.unbind('webkitTransitionEnd transitionend otransitionend oTransitionEnd');
			
			// IF A SORT ARGUMENT HAS BEEN SENT, SORT ELEMENTS TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, $cont, config);
			};
			
			// EMPTY SORTING ARRAYS
		
			config.startOrder = [], config.newOrder = [], config.origSort = [], config.checkSort = [];
		
			// REMOVE INLINE STYLES FROM ALL TARGET ELEMENTS AND SLAM THE BRAKES ON
			
			$targets.removeStyle(
				config.prefix+'filter, filter, '+config.prefix+'transform, transform, opacity, display'
			).css(config.clean).removeAttr('data-checksum');
			
			// BECAUSE IE SUCKS
			
			if(!window.atob){
				$targets.css({
					display: 'none',
					opacity: '0'
				});
			};
			
			// REMOVE HEIGHT FROM CONTAINER ONLY IF RESIZING
			
			var remH = config.resizeContainer ? 'height' : '';
			
			// REMOVE INLINE STYLES FROM CONTAINER
		
			$par.removeStyle(
				config.prefix+'transition, transition, '+config.prefix+'perspective, perspective, '+config.prefix+'perspective-origin, perspective-origin, '+remH
			);
			
			// ADD FINAL DISPLAY PROPERTIES AND OPACITY TO ALL SHOWN ELEMENTS
			// CACHE CURRENT LAYOUT MODE & SORT FOR NEXT MIX
			
			if(config.layoutMode == 'list'){
				$show.css({display:config.targetDisplayList, opacity:'1'});
				config.origDisplay = config.targetDisplayList;
			} else {
				$show.css({display:config.targetDisplayGrid, opacity:'1'});
				config.origDisplay = config.targetDisplayGrid;
			};
			config.origLayout = config.layoutMode;
				
			var wait = setTimeout(function(){
				
				// LET GO OF THE BRAKES
				
				$targets.removeStyle(config.prefix+'transition, transition');
			
				// WE'RE DONE MIXING
			
				config.mixing = false;
			
				// FIRE "ONMIXEND" CALLBACK
			
				if(typeof config.onMixEnd == 'function') {
					var output = config.onMixEnd.call(this, config);
				
					// UPDATE CONFIG IF DATA RETURNED
				
					config = output ? output : config;
				};
			});
		};
	};
	
	// SORT FUNCTION
	
	function sort(sortby, order, $cont, config){

		// COMPARE BY ATTRIBUTE

		function compare(a,b) {
			var sortAttrA = isNaN(a.attr(sortby) * 1) ? a.attr(sortby).toLowerCase() : a.attr(sortby) * 1,
				sortAttrB = isNaN(b.attr(sortby) * 1) ? b.attr(sortby).toLowerCase() : b.attr(sortby) * 1;
		  	if (sortAttrA < sortAttrB)
		    	return -1;
		  	if (sortAttrA > sortAttrB)
		    	return 1;
		  	return 0;
		};
		
		// REBUILD DOM

		function rebuild(element){
			if(order == 'asc'){
				$sortWrapper.prepend(element).prepend(' ');
			} else {
				$sortWrapper.append(element).append(' ');
			};
		};
		
		// RANDOMIZE ARRAY

		function arrayShuffle(oldArray){
			var newArray = oldArray.slice();
		 	var len = newArray.length;
			var i = len;
			while (i--){
			 	var p = parseInt(Math.random()*len);
				var t = newArray[i];
		  		newArray[i] = newArray[p];
			  	newArray[p] = t;
		 	};
			return newArray; 
		};
		
		// SORT
		
		$cont.find(config.targetSelector).wrapAll('<div class="mix_sorter"/>');
		
		var $sortWrapper = $cont.find('.mix_sorter');
		
		if(!config.origSort.length){
			$sortWrapper.find(config.targetSelector+':visible').each(function(){
				$(this).wrap('<s/>');
				config.origSort.push($(this).parent().html().replace(/\s+/g, ''));
				$(this).unwrap();
			});
		};
		
		
		
		$sortWrapper.empty();
		
		if(sortby == 'reset'){
			$.each(config.startOrder,function(){
				$sortWrapper.append(this).append(' ');
			});
		} else if(sortby == 'default'){
			$.each(config.origOrder,function(){
				rebuild(this);
			});
		} else if(sortby == 'random'){
			if(!config.newOrder.length){
				config.newOrder = arrayShuffle(config.startOrder);
			};
			$.each(config.newOrder,function(){
				$sortWrapper.append(this).append(' ');
			});	
		} else if(sortby == 'custom'){
			$.each(order, function(){
				rebuild(this);
			});
		} else { 
			// SORT BY ATTRIBUTE
			
			if(typeof config.origOrder[0].attr(sortby) === 'undefined'){
				console.log('No such attribute found. Terminating');
				return false;
			};
			
			if(!config.newOrder.length){
				$.each(config.origOrder,function(){
					config.newOrder.push($(this));
				});
				config.newOrder.sort(compare);
			};
			$.each(config.newOrder,function(){
				rebuild(this);
			});
			
		};
		config.checkSort = [];
		$sortWrapper.find(config.targetSelector+':visible').each(function(i){
			var $t = $(this);
			if(i == 0){
				
				// PREVENT COMPARE RETURNING FALSE POSITIVES ON ELEMENTS WITH NO CLASS/ATTRIBUTES
				
				$t.attr('data-checksum','1');
			};
			$t.wrap('<s/>');
			config.checkSort.push($t.parent().html().replace(/\s+/g, ''));
			$t.unwrap();
		});
		
		$cont.find(config.targetSelector).unwrap();
	};
	
	// FIND VENDOR PREFIX

	function prefix(el) {
	    var prefixes = ["Webkit", "Moz", "O", "ms"];
	    for (var i = 0; i < prefixes.length; i++){
	        if (prefixes[i] + "Transition" in el.style){
	            return prefixes[i];
	        };
	    };
	    return "transition" in el.style ? "" : false;
	};
	
	// REMOVE SPECIFIC STYLES
	
	$.fn.removeStyle = function(style){
		return this.each(function(){
			var obj = $(this);
			style = style.replace(/\s+/g, '');
			var styles = style.split(',');
			$.each(styles,function(){
				
				var search = new RegExp(this.toString() + '[^;]+;?', 'g');
				obj.attr('style', function(i, style){
					if(style) return style.replace(search, '');
			    });
			});
		});
    };

	// COMPARE ARRAYS 
	
	function compareArr(a,b){
	    if (a.length != b.length) return false;
	    for (var i = 0; i < b.length; i++){
	        if (a[i].compare) { 
	            if (!a[i].compare(b[i])) return false;
	        };
	        if (a[i] !== b[i]) return false;
	    };
	    return true;
	};
	
	// BUILD FILTER ARRAY(S)
	
	function buildFilterArray(str){
		// CLEAN FILTER STRING
		str = str.replace(/\s{2,}/g, ' ');
		// FOR EACH PEROID SEPERATED CLASS NAME, ADD STRING TO FILTER ARRAY
		var arr = str.split(' ');
		// IF ALL, REPLACE WITH MIX_ALL
		$.each(arr,function(i){
			if(this == 'all')arr[i] = 'mix_all';
		});
		if(arr[0] == "")arr.shift(); 
		return arr;
	};

	
})(jQuery);
/*! ResponsiveSlides.js v1.54
 * http://responsiveslides.com
 * http://viljamis.com
 *
 * Copyright (c) 2011-2012 @viljamis
 * Available under the MIT license
 */

/*jslint browser: true, sloppy: true, vars: true, plusplus: true, indent: 2 */


(function ($, window, i) {
  $.fn.responsiveSlides = function (options) {

    // Default settings
    var settings = $.extend({
      "auto": true,             // Boolean: Animate automatically, true or false
      "speed": 500,             // Integer: Speed of the transition, in milliseconds
      "timeout": 4000,          // Integer: Time between slide transitions, in milliseconds
      "pager": false,           // Boolean: Show pager, true or false
      "nav": false,             // Boolean: Show navigation, true or false
      "random": false,          // Boolean: Randomize the order of the slides, true or false
      "pause": false,           // Boolean: Pause on hover, true or false
      "pauseControls": false,    // Boolean: Pause when hovering controls, true or false
      "prevText": "Previous",   // String: Text for the "previous" button
      "nextText": "Next",       // String: Text for the "next" button
      "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
      "navContainer": "",       // Selector: Where auto generated controls should be appended to, default is after the <ul>
      "manualControls": "",     // Selector: Declare custom pager navigation
      "namespace": "rslides",   // String: change the default namespace used
      "before": $.noop,         // Function: Before callback
      "after": $.noop           // Function: After callback
    }, options);

    return this.each(function () {

      // Index for namespacing
      i++;

      var $this = $(this),

        // Local variables
        vendor,
        selectTab,
        startCycle,
        restartCycle,
        rotate,
        $tabs,

        // Helpers
        index = 0,
        $slide = $this.children(),
        length = $slide.size(),
        fadeTime = parseFloat(settings.speed),
        waitTime = parseFloat(settings.timeout),
        maxw = parseFloat(settings.maxwidth),

        // Namespacing
        namespace = settings.namespace,
        namespaceIdx = namespace + i,

        // Classes
        navClass = namespace + "_nav " + namespaceIdx + "_nav",
        activeClass = namespace + "_here",
        visibleClass = namespaceIdx + "_on",
        slideClassPrefix = namespaceIdx + "_s",

        // Pager
        $pager = $("<ul class='" + namespace + "_tabs " + namespaceIdx + "_tabs' />"),

        // Styles for visible and hidden slides
        visible = {"float": "left", "position": "relative", "opacity": 1, "zIndex": 2},
        hidden = {"float": "none", "position": "absolute", "opacity": 0, "zIndex": 1},

        // Detect transition support
        supportsTransitions = (function () {
          var docBody = document.body || document.documentElement;
          var styles = docBody.style;
          var prop = "transition";
          if (typeof styles[prop] === "string") {
            return true;
          }
          // Tests for vendor specific prop
          vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
          prop = prop.charAt(0).toUpperCase() + prop.substr(1);
          var i;
          for (i = 0; i < vendor.length; i++) {
            if (typeof styles[vendor[i] + prop] === "string") {
              return true;
            }
          }
          return false;
        })(),

        // Fading animation
        slideTo = function (idx) {
          settings.before(idx);
          // If CSS3 transitions are supported
          if (supportsTransitions) {
            $slide
              .removeClass(visibleClass)
              .css(hidden)
              .eq(idx)
              .addClass(visibleClass)
              .css(visible);
            index = idx;
            setTimeout(function () {
              settings.after(idx);
            }, fadeTime);
          // If not, use jQuery fallback
          } else {
            $slide
              .stop()
              .fadeOut(fadeTime, function () {
                $(this)
                  .removeClass(visibleClass)
                  .css(hidden)
                  .css("opacity", 1);
              })
              .eq(idx)
              .fadeIn(fadeTime, function () {
                $(this)
                  .addClass(visibleClass)
                  .css(visible);
                settings.after(idx);
                index = idx;
              });
          }
        };

      // Random order
      if (settings.random) {
        $slide.sort(function () {
          return (Math.round(Math.random()) - 0.5);
        });
        $this
          .empty()
          .append($slide);
      }

      // Add ID's to each slide
      $slide.each(function (i) {
        this.id = slideClassPrefix + i;
      });

      // Add max-width and classes
      $this.addClass(namespace + " " + namespaceIdx);
      if (options && options.maxwidth) {
        $this.css("max-width", maxw);
      }

      // Hide all slides, then show first one
      $slide
        .hide()
        .css(hidden)
        .eq(0)
        .addClass(visibleClass)
        .css(visible)
        .show();

      // CSS transitions
      if (supportsTransitions) {
        $slide
          .show()
          .css({
            // -ms prefix isn't needed as IE10 uses prefix free version
            "-webkit-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-moz-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-o-transition": "opacity " + fadeTime + "ms ease-in-out",
            "transition": "opacity " + fadeTime + "ms ease-in-out"
          });
      }

      // Only run if there's more than one slide
      if ($slide.size() > 1) {

        // Make sure the timeout is at least 100ms longer than the fade
        if (waitTime < fadeTime + 100) {
          return;
        }

        // Pager
        if (settings.pager && !settings.manualControls) {
          var tabMarkup = [];
          $slide.each(function (i) {
            var n = i + 1;
            tabMarkup +=
              "<li>" +
              "<a href='#' class='" + slideClassPrefix + n + "'></a>" +
              "</li>";
          });
          $pager.append(tabMarkup);

          // Inject pager
          if (options.navContainer) {
            $(settings.navContainer).append($pager);
          } else {
            $this.after($pager);
          }
        }

        // Manual pager controls
        if (settings.manualControls) {
          $pager = $(settings.manualControls);
          $pager.addClass(namespace + "_tabs " + namespaceIdx + "_tabs");
        }

        // Add pager slide class prefixes
        if (settings.pager || settings.manualControls) {
          $pager.find('li').each(function (i) {
            $(this).addClass(slideClassPrefix + (i + 1));
          });
        }

        // If we have a pager, we need to set up the selectTab function
        if (settings.pager || settings.manualControls) {
          $tabs = $pager.find('a');

          // Select pager item
          selectTab = function (idx) {
            $tabs
              .closest("li")
              .removeClass(activeClass)
              .eq(idx)
              .addClass(activeClass);
          };
        }

        // Auto cycle
        if (settings.auto) {

          startCycle = function () {
            rotate = setInterval(function () {

              // Clear the event queue
              $slide.stop(true, true);

              var idx = index + 1 < length ? index + 1 : 0;

              // Remove active state and set new if pager is set
              if (settings.pager || settings.manualControls) {
                selectTab(idx);
              }

              slideTo(idx);
            }, waitTime);
          };

          // Init cycle
          startCycle();
        }

        // Restarting cycle
        restartCycle = function () {
          if (settings.auto) {
            // Stop
            clearInterval(rotate);
            // Restart
            startCycle();
          }
        };

        // Pause on hover
        if (settings.pause) {
          $this.hover(function () {
            clearInterval(rotate);
          }, function () {
            restartCycle();
          });
        }

        // Pager click event handler
        if (settings.pager || settings.manualControls) {
          $tabs.bind("click", function (e) {
            e.preventDefault();

            if (!settings.pauseControls) {
              restartCycle();
            }

            // Get index of clicked tab
            var idx = $tabs.index(this);

            // Break if element is already active or currently animated
            if (index === idx || $("." + visibleClass).queue('fx').length) {
              return;
            }

            // Remove active state from old tab and set new one
            selectTab(idx);

            // Do the animation
            slideTo(idx);
          })
            .eq(0)
            .closest("li")
            .addClass(activeClass);

          // Pause when hovering pager
          if (settings.pauseControls) {
            $tabs.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

        // Navigation
        if (settings.nav) {
          var navMarkup =
            "<a href='#' class='" + navClass + " prev'>" + settings.prevText + "</a>" +
            "<a href='#' class='" + navClass + " next'>" + settings.nextText + "</a>";

          // Inject navigation
          if (options.navContainer) {
            $(settings.navContainer).append(navMarkup);
          } else {
            $this.after(navMarkup);
          }

          var $trigger = $("." + namespaceIdx + "_nav"),
            $prev = $trigger.filter(".prev");

          // Click event handler
          $trigger.bind("click", function (e) {
            e.preventDefault();

            var $visibleClass = $("." + visibleClass);

            // Prevent clicking if currently animated
            if ($visibleClass.queue('fx').length) {
              return;
            }

            //  Adds active class during slide animation
            //  $(this)
            //    .addClass(namespace + "_active")
            //    .delay(fadeTime)
            //    .queue(function (next) {
            //      $(this).removeClass(namespace + "_active");
            //      next();
            //  });

            // Determine where to slide
            var idx = $slide.index($visibleClass),
              prevIdx = idx - 1,
              nextIdx = idx + 1 < length ? index + 1 : 0;

            // Go to slide
            slideTo($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            if (settings.pager || settings.manualControls) {
              selectTab($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            }

            if (!settings.pauseControls) {
              restartCycle();
            }
          });

          // Pause when hovering navigation
          if (settings.pauseControls) {
            $trigger.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

      }

      // Max-width fallback
      if (typeof document.body.style.maxWidth === "undefined" && options.maxwidth) {
        var widthSupport = function () {
          $this.css("width", "100%");
          if ($this.width() > maxw) {
            $this.css("width", maxw);
          }
        };

        // Init fallback
        widthSupport();
        $(window).bind("resize", function () {
          widthSupport();
        });
      }

    });

  };
})(jQuery, this, 0);
// cartodb.js version: 3.11.23
// uncompressed version: cartodb.uncompressed.js
// sha: 86e2dcdfc7966bc34d8f80352f68d218df6d2369
(function(){var root=this,__prev={jQuery:root.jQuery,$:root.$,L:root.L,Mustache:root.Mustache,Backbone:root.Backbone,_:root._};(function(e,t){function n(e){return H.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}function r(e){if(!vn[e]){var t=_.body,n=H("<"+e+">").appendTo(t),r=n.css("display");n.remove();if(r==="none"||r===""){mn||(mn=_.createElement("iframe"),mn.frameBorder=mn.width=mn.height=0),t.appendChild(mn);if(!gn||!mn.createElement)gn=(mn.contentWindow||mn.contentDocument).document,gn.write((H.support.boxModel?"<!doctype html>":"")+"<html><body>"),gn.close();n=gn.createElement(e),gn.body.appendChild(n),r=H.css(n,"display"),t.removeChild(mn)}vn[e]=r}return vn[e]}function i(e,t){var n={};return H.each(En.concat.apply([],En.slice(0,t)),function(){n[this]=e}),n}function s(){Sn=t}function o(){return setTimeout(s,0),Sn=H.now()}function u(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function a(){try{return new e.XMLHttpRequest}catch(t){}}function f(e,n){e.dataFilter&&(n=e.dataFilter(n,e.dataType));var r=e.dataTypes,i={},s,o,u=r.length,a,f=r[0],l,c,h,p,d;for(s=1;s<u;s++){if(s===1)for(o in e.converters)typeof o=="string"&&(i[o.toLowerCase()]=e.converters[o]);l=f,f=r[s];if(f==="*")f=l;else if(l!=="*"&&l!==f){c=l+" "+f,h=i[c]||i["* "+f];if(!h){d=t;for(p in i){a=p.split(" ");if(a[0]===l||a[0]==="*"){d=i[a[1]+" "+f];if(d){p=i[p],p===!0?h=d:d===!0&&(h=p);break}}}}!h&&!d&&H.error("No conversion from "+c.replace(" "," to ")),h!==!0&&(n=h?h(n):d(p(n)))}}return n}function l(e,n,r){var i=e.contents,s=e.dataTypes,o=e.responseFields,u,a,f,l;for(a in o)a in r&&(n[o[a]]=r[a]);while(s[0]==="*")s.shift(),u===t&&(u=e.mimeType||n.getResponseHeader("content-type"));if(u)for(a in i)if(i[a]&&i[a].test(u)){s.unshift(a);break}if(s[0]in r)f=s[0];else{for(a in r){if(!s[0]||e.converters[a+" "+s[0]]){f=a;break}l||(l=a)}f=f||l}if(f)return f!==s[0]&&s.unshift(f),r[f]}function c(e,t,n,r){if(H.isArray(t))H.each(t,function(t,i){n||Ut.test(e)?r(e,i):c(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&H.type(t)==="object")for(var i in t)c(e+"["+i+"]",t[i],n,r);else r(e,t)}function h(e,n){var r,i,s=H.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&H.extend(!0,e,i)}function p(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u=e[s],a=0,f=u?u.length:0,l=e===rn,c;for(;a<f&&(l||!c);a++)c=u[a](n,r,i),typeof c=="string"&&(!l||o[c]?c=t:(n.dataTypes.unshift(c),c=p(e,n,r,i,c,o)));return(l||!c)&&!o["*"]&&(c=p(e,n,r,i,"*",o)),c}function d(e){return function(t,n){typeof t!="string"&&(n=t,t="*");if(H.isFunction(n)){var r=t.toLowerCase().split(Zt),i=0,s=r.length,o,u,a;for(;i<s;i++)o=r[i],a=/^\+/.test(o),a&&(o=o.substr(1)||"*"),u=e[o]=e[o]||[],u[a?"unshift":"push"](n)}}}function v(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=t==="width"?1:0,s=4;if(r>0){if(n!=="border")for(;i<s;i+=2)n||(r-=parseFloat(H.css(e,"padding"+jt[i]))||0),n==="margin"?r+=parseFloat(H.css(e,n+jt[i]))||0:r-=parseFloat(H.css(e,"border"+jt[i]+"Width"))||0;return r+"px"}r=Ft(e,t);if(r<0||r==null)r=e.style[t];if(Dt.test(r))return r;r=parseFloat(r)||0;if(n)for(;i<s;i+=2)r+=parseFloat(H.css(e,"padding"+jt[i]))||0,n!=="padding"&&(r+=parseFloat(H.css(e,"border"+jt[i]+"Width"))||0),n==="margin"&&(r+=parseFloat(H.css(e,n+jt[i]))||0);return r+"px"}function m(e){var t=_.createElement("div");return Lt.appendChild(t),t.innerHTML=e.outerHTML,t.firstChild}function g(e){var t=(e.nodeName||"").toLowerCase();t==="input"?y(e):t!=="script"&&typeof e.getElementsByTagName!="undefined"&&H.grep(e.getElementsByTagName("input"),y)}function y(e){if(e.type==="checkbox"||e.type==="radio")e.defaultChecked=e.checked}function b(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function w(e,t){var n;t.nodeType===1&&(t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?t.outerHTML=e.outerHTML:n!=="input"||e.type!=="checkbox"&&e.type!=="radio"?n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text):(e.checked&&(t.defaultChecked=t.checked=e.checked),t.value!==e.value&&(t.value=e.value)),t.removeAttribute(H.expando),t.removeAttribute("_submit_attached"),t.removeAttribute("_change_attached"))}function E(e,t){if(t.nodeType===1&&!!H.hasData(e)){var n,r,i,s=H._data(e),o=H._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)H.event.add(t,n,u[n][r])}o.data&&(o.data=H.extend({},o.data))}}function S(e,t){return H.nodeName(e,"table")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function x(e){var t=dt.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function T(e,t,n){t=t||0;if(H.isFunction(t))return H.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return H.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=H.grep(e,function(e){return e.nodeType===1});if(lt.test(t))return H.filter(t,r,!n);t=H.filter(t,r)}return H.grep(e,function(e,r){return H.inArray(e,t)>=0===n})}function N(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function C(){return!0}function k(){return!1}function L(e,t,n){var r=t+"defer",i=t+"queue",s=t+"mark",o=H._data(e,r);o&&(n==="queue"||!H._data(e,i))&&(n==="mark"||!H._data(e,s))&&setTimeout(function(){!H._data(e,i)&&!H._data(e,s)&&(H.removeData(e,r,!0),o.fire())},0)}function A(e){for(var t in e){if(t==="data"&&H.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function O(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(I,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:H.isNumeric(r)?+r:F.test(r)?H.parseJSON(r):r}catch(s){}H.data(e,n,r)}else r=t}return r}function M(e){var t=B[e]={},n,r;e=e.split(/\s+/);for(n=0,r=e.length;n<r;n++)t[e[n]]=!0;return t}var _=e.document,D=e.navigator,P=e.location,H=function(){function n(){if(!r.isReady){try{_.documentElement.doScroll("left")}catch(e){setTimeout(n,1);return}r.ready()}}var r=function(e,t){return new r.fn.init(e,t,o)},i=e.jQuery,s=e.$,o,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,a=/\S/,f=/^\s+/,l=/\s+$/,c=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,h=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,d=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,v=/(?:^|:|,)(?:\s*\[)+/g,m=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,y=/(msie) ([\w.]+)/,b=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,E=/^-ms-/,S=function(e,t){return(t+"").toUpperCase()},x=D.userAgent,T,N,C,k=Object.prototype.toString,L=Object.prototype.hasOwnProperty,A=Array.prototype.push,O=Array.prototype.slice,M=String.prototype.trim,P=Array.prototype.indexOf,H={};return r.fn=r.prototype={constructor:r,init:function(e,n,i){var s,o,a,f;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(e==="body"&&!n&&_.body)return this.context=_,this[0]=_.body,this.selector=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)!=="<"||e.charAt(e.length-1)!==">"||e.length<3?s=u.exec(e):s=[null,e,null];if(s&&(s[1]||!n)){if(s[1])return n=n instanceof r?n[0]:n,f=n?n.ownerDocument||n:_,a=c.exec(e),a?r.isPlainObject(n)?(e=[_.createElement(a[1])],r.fn.attr.call(e,n,!0)):e=[f.createElement(a[1])]:(a=r.buildFragment([s[1]],[f]),e=(a.cacheable?r.clone(a.fragment):a.fragment).childNodes),r.merge(this,e);o=_.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return i.find(e);this.length=1,this[0]=o}return this.context=_,this.selector=e,this}return!n||n.jquery?(n||i).find(e):this.constructor(n).find(e)}return r.isFunction(e)?i.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),r.makeArray(e,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return O.call(this,0)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var i=this.constructor();return r.isArray(e)?A.apply(i,e):r.merge(i,e),i.prevObject=this,i.context=this.context,t==="find"?i.selector=this.selector+(this.selector?" ":"")+n:t&&(i.selector=this.selector+"."+t+"("+n+")"),i},each:function(e,t){return r.each(this,e,t)},ready:function(e){return r.bindReady(),N.add(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(O.apply(this,arguments),"slice",O.call(arguments).join(","))},map:function(e){return this.pushStack(r.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:A,sort:[].sort,splice:[].splice},r.fn.init.prototype=r.fn,r.extend=r.fn.extend=function(){var e,n,i,s,o,u,a=arguments[0]||{},f=1,l=arguments.length,c=!1;typeof a=="boolean"&&(c=a,a=arguments[1]||{},f=2),typeof a!="object"&&!r.isFunction(a)&&(a={}),l===f&&(a=this,--f);for(;f<l;f++)if((e=arguments[f])!=null)for(n in e){i=a[n],s=e[n];if(a===s)continue;c&&s&&(r.isPlainObject(s)||(o=r.isArray(s)))?(o?(o=!1,u=i&&r.isArray(i)?i:[]):u=i&&r.isPlainObject(i)?i:{},a[n]=r.extend(c,u,s)):s!==t&&(a[n]=s)}return a},r.extend({noConflict:function(t){return e.$===r&&(e.$=s),t&&e.jQuery===r&&(e.jQuery=i),r},isReady:!1,readyWait:1,holdReady:function(e){e?r.readyWait++:r.ready(!0)},ready:function(e){if(e===!0&&!--r.readyWait||e!==!0&&!r.isReady){if(!_.body)return setTimeout(r.ready,1);r.isReady=!0;if(e!==!0&&--r.readyWait>0)return;N.fireWith(_,[r]),r.fn.trigger&&r(_).trigger("ready").off("ready")}},bindReady:function(){if(!N){N=r.Callbacks("once memory");if(_.readyState==="complete")return setTimeout(r.ready,1);if(_.addEventListener)_.addEventListener("DOMContentLoaded",C,!1),e.addEventListener("load",r.ready,!1);else if(_.attachEvent){_.attachEvent("onreadystatechange",C),e.attachEvent("onload",r.ready);var t=!1;try{t=e.frameElement==null}catch(i){}_.documentElement.doScroll&&t&&n()}}},isFunction:function(e){return r.type(e)==="function"},isArray:Array.isArray||function(e){return r.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):H[k.call(e)]||"object"},isPlainObject:function(e){if(!e||r.type(e)!=="object"||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!L.call(e,"constructor")&&!L.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var i;for(i in e);return i===t||L.call(e,i)},isEmptyObject:function(e){for(var t in e)return!1;return!0},error:function(e){throw new Error(e)},parseJSON:function(t){if(typeof t!="string"||!t)return null;t=r.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(h.test(t.replace(p,"@").replace(d,"]").replace(v,"")))return(new Function("return "+t))();r.error("Invalid JSON: "+t)},parseXML:function(n){if(typeof n!="string"||!n)return null;var i,s;try{e.DOMParser?(s=new DOMParser,i=s.parseFromString(n,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n))}catch(o){i=t}return(!i||!i.documentElement||i.getElementsByTagName("parsererror").length)&&r.error("Invalid XML: "+n),i},noop:function(){},globalEval:function(t){t&&a.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(E,"ms-").replace(w,S)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,n,i){var s,o=0,u=e.length,a=u===t||r.isFunction(e);if(i){if(a){for(s in e)if(n.apply(e[s],i)===!1)break}else for(;o<u;)if(n.apply(e[o++],i)===!1)break}else if(a){for(s in e)if(n.call(e[s],s,e[s])===!1)break}else for(;o<u;)if(n.call(e[o],o,e[o++])===!1)break;return e},trim:M?function(e){return e==null?"":M.call(e)}:function(e){return e==null?"":(e+"").replace(f,"").replace(l,"")},makeArray:function(e,t){var n=t||[];if(e!=null){var i=r.type(e);e.length==null||i==="string"||i==="function"||i==="regexp"||r.isWindow(e)?A.call(n,e):r.merge(n,e)}return n},inArray:function(e,t,n){var r;if(t){if(P)return P.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=e.length,i=0;if(typeof n.length=="number")for(var s=n.length;i<s;i++)e[r++]=n[i];else while(n[i]!==t)e[r++]=n[i++];return e.length=r,e},grep:function(e,t,n){var r=[],i;n=!!n;for(var s=0,o=e.length;s<o;s++)i=!!t(e[s],s),n!==i&&r.push(e[s]);return r},map:function(e,n,i){var s,o,u=[],a=0,f=e.length,l=e instanceof r||f!==t&&typeof f=="number"&&(f>0&&e[0]&&e[f-1]||f===0||r.isArray(e));if(l)for(;a<f;a++)s=n(e[a],a,i),s!=null&&(u[u.length]=s);else for(o in e)s=n(e[o],o,i),s!=null&&(u[u.length]=s);return u.concat.apply([],u)},guid:1,proxy:function(e,n){if(typeof n=="string"){var i=e[n];n=e,e=i}if(!r.isFunction(e))return t;var s=O.call(arguments,2),o=function(){return e.apply(n,s.concat(O.call(arguments)))};return o.guid=e.guid=e.guid||o.guid||r.guid++,o},access:function(e,n,i,s,o,u,a){var f,l=i==null,c=0,h=e.length;if(i&&typeof i=="object"){for(c in i)r.access(e,n,c,i[c],1,u,s);o=1}else if(s!==t){f=a===t&&r.isFunction(s),l&&(f?(f=n,n=function(e,t,n){return f.call(r(e),n)}):(n.call(e,s),n=null));if(n)for(;c<h;c++)n(e[c],i,f?s.call(e[c],c,n(e[c],i)):s,a);o=1}return o?e:l?n.call(e):h?n(e[0],i):u},now:function(){return(new Date).getTime()},uaMatch:function(e){e=e.toLowerCase();var t=m.exec(e)||g.exec(e)||y.exec(e)||e.indexOf("compatible")<0&&b.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},sub:function(){function e(t,n){return new e.fn.init(t,n)}r.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,i){return i&&i instanceof r&&!(i instanceof e)&&(i=e(i)),r.fn.init.call(this,n,i,t)},e.fn.init.prototype=e.fn;var t=e(_);return e},browser:{}}),r.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){H["[object "+t+"]"]=t.toLowerCase()}),T=r.uaMatch(x),T.browser&&(r.browser[T.browser]=!0,r.browser.version=T.version),r.browser.webkit&&(r.browser.safari=!0),a.test("Â ")&&(f=/^[\s\xA0]+/,l=/[\s\xA0]+$/),o=r(_),_.addEventListener?C=function(){_.removeEventListener("DOMContentLoaded",C,!1),r.ready()}:_.attachEvent&&(C=function(){_.readyState==="complete"&&(_.detachEvent("onreadystatechange",C),r.ready())}),r}(),B={};H.Callbacks=function(e){e=e?B[e]||M(e):{};var n=[],r=[],i,s,o,u,a,f,l=function(t){var r,i,s,o,u;for(r=0,i=t.length;r<i;r++)s=t[r],o=H.type(s),o==="array"?l(s):o==="function"&&(!e.unique||!h.has(s))&&n.push(s)},c=function(t,l){l=l||[],i=!e.memory||[t,l],s=!0,o=!0,f=u||0,u=0,a=n.length;for(;n&&f<a;f++)if(n[f].apply(t,l)===!1&&e.stopOnFalse){i=!0;break}o=!1,n&&(e.once?i===!0?h.disable():n=[]:r&&r.length&&(i=r.shift(),h.fireWith(i[0],i[1])))},h={add:function(){if(n){var e=n.length;l(arguments),o?a=n.length:i&&i!==!0&&(u=e,c(i[0],i[1]))}return this},remove:function(){if(n){var t=arguments,r=0,i=t.length;for(;r<i;r++)for(var s=0;s<n.length;s++)if(t[r]===n[s]){o&&s<=a&&(a--,s<=f&&f--),n.splice(s--,1);if(e.unique)break}}return this},has:function(e){if(n){var t=0,r=n.length;for(;t<r;t++)if(e===n[t])return!0}return!1},empty:function(){return n=[],this},disable:function(){return n=r=i=t,this},disabled:function(){return!n},lock:function(){return r=t,(!i||i===!0)&&h.disable(),this},locked:function(){return!r},fireWith:function(t,n){return r&&(o?e.once||r.push([t,n]):(!e.once||!i)&&c(t,n)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!s}};return h};var j=[].slice;H.extend({Deferred:function(e){var t=H.Callbacks("once memory"),n=H.Callbacks("once memory"),r=H.Callbacks("memory"),i="pending",s={resolve:t,reject:n,notify:r},o={done:t.add,fail:n.add,progress:r.add,state:function(){return i},isResolved:t.fired,isRejected:n.fired,then:function(e,t,n){return u.done(e).fail(t).progress(n),this},always:function(){return u.done.apply(u,arguments).fail.apply(u,arguments),this},pipe:function(e,t,n){return H.Deferred(function(r){H.each({done:[e,"resolve"],fail:[t,"reject"],progress:[n,"notify"]},function(e,t){var n=t[0],i=t[1],s;H.isFunction(n)?u[e](function(){s=n.apply(this,arguments),s&&H.isFunction(s.promise)?s.promise().then(r.resolve,r.reject,r.notify):r[i+"With"](this===u?r:this,[s])}):u[e](r[i])})}).promise()},promise:function(e){if(e==null)e=o;else for(var t in o)e[t]=o[t];return e}},u=o.promise({}),a;for(a in s)u[a]=s[a].fire,u[a+"With"]=s[a].fireWith;return u.done(function(){i="resolved"},n.disable,r.lock).fail(function(){i="rejected"},t.disable,r.lock),e&&e.call(u,u),u},when:function(e){function t(e){return function(t){o[e]=arguments.length>1?j.call(arguments,0):t,f.notifyWith(l,o)}}function n(e){return function(t){r[e]=arguments.length>1?j.call(arguments,0):t,--u||f.resolveWith(f,r)}}var r=j.call(arguments,0),i=0,s=r.length,o=Array(s),u=s,a=s,f=s<=1&&e&&H.isFunction(e.promise)?e:H.Deferred(),l=f.promise();if(s>1){for(;i<s;i++)r[i]&&r[i].promise&&H.isFunction(r[i].promise)?r[i].promise().then(n(i),f.reject,t(i)):--u;u||f.resolveWith(f,r)}else f!==e&&f.resolveWith(f,s?[e]:[]);return l}}),H.support=function(){var t,n,r,i,s,o,u,a,f,l,c,h,p=_.createElement("div"),d=_.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!n.length||!r)return{};i=_.createElement("select"),s=i.appendChild(_.createElement("option")),o=p.getElementsByTagName("input")[0],t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.55/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:o.value==="on",optSelected:s.selected,getSetAttribute:p.className!=="t",enctype:!!_.createElement("form").enctype,html5Clone:_.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},H.boxModel=t.boxModel=_.compatMode==="CSS1Compat",o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!s.disabled;try{delete p.test}catch(v){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),o=_.createElement("input"),o.value="t",o.setAttribute("type","radio"),t.radioValue=o.value==="t",o.setAttribute("checked","checked"),o.setAttribute("name","t"),p.appendChild(o),u=_.createDocumentFragment(),u.appendChild(p.lastChild),t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=o.checked,u.removeChild(o),u.appendChild(p);if(p.attachEvent)for(c in{submit:1,change:1,focusin:1})l="on"+c,h=l in p,h||(p.setAttribute(l,"return;"),h=typeof p[l]=="function"),t[c+"Bubbles"]=h;return u.removeChild(p),u=i=s=p=o=null,H(function(){var n,r,i,s,o,u,f,l,c,d,v,m,g,y=_.getElementsByTagName("body")[0];!y||(l=1,g="padding:0;margin:0;border:",v="position:absolute;top:0;left:0;width:1px;height:1px;",m=g+"0;visibility:hidden;",c="style='"+v+g+"5px solid #000;",d="<div "+c+"display:block;'><div style='"+g+"0;display:block;overflow:hidden;'></div></div>"+"<table "+c+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",n=_.createElement("div"),n.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+l+"px",y.insertBefore(n,y.firstChild),p=_.createElement("div"),n.appendChild(p),p.innerHTML="<table><tr><td style='"+g+"0;display:none'></td><td>t</td></tr></table>",a=p.getElementsByTagName("td"),h=a[0].offsetHeight===0,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=h&&a[0].offsetHeight===0,e.getComputedStyle&&(p.innerHTML="",f=_.createElement("div"),f.style.width="0",f.style.marginRight="0",p.style.width="2px",p.appendChild(f),t.reliableMarginRight=(parseInt((e.getComputedStyle(f,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,t.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",t.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=v+m,p.innerHTML=d,r=p.firstChild,i=r.firstChild,o=r.nextSibling.firstChild.firstChild,u={doesNotAddBorder:i.offsetTop!==5,doesAddBorderForTableAndCells:o.offsetTop===5},i.style.position="fixed",i.style.top="20px",u.fixedPosition=i.offsetTop===20||i.offsetTop===15,i.style.position=i.style.top="",r.style.overflow="hidden",r.style.position="relative",u.subtractsBorderForOverflowNotVisible=i.offsetTop===-5,u.doesNotIncludeMarginInBodyOffset=y.offsetTop!==l,e.getComputedStyle&&(p.style.marginTop="1%",t.pixelMargin=(e.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof n.style.zoom!="undefined"&&(n.style.zoom=1),y.removeChild(n),f=p=n=null,H.extend(t,u))}),t}();var F=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;H.extend({cache:{},uuid:0,expando:"jQuery"+(H.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?H.cache[e[H.expando]]:e[H.expando],!!e&&!A(e)},data:function(e,n,r,i){if(!!H.acceptData(e)){var s,o,u,a=H.expando,f=typeof n=="string",l=e.nodeType,c=l?H.cache:e,h=l?e[a]:e[a]&&a,p=n==="events";if((!h||!c[h]||!p&&!i&&!c[h].data)&&f&&r===t)return;h||(l?e[a]=h=++H.uuid:h=a),c[h]||(c[h]={},l||(c[h].toJSON=H.noop));if(typeof n=="object"||typeof n=="function")i?c[h]=H.extend(c[h],n):c[h].data=H.extend(c[h].data,n);return s=o=c[h],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[H.camelCase(n)]=r),p&&!o[n]?s.events:(f?(u=o[n],u==null&&(u=o[H.camelCase(n)])):u=o,u)}},removeData:function(e,t,n){if(!!H.acceptData(e)){var r,i,s,o=H.expando,u=e.nodeType,a=u?H.cache:e,f=u?e[o]:o;if(!a[f])return;if(t){r=n?a[f]:a[f].data;if(r){H.isArray(t)||(t in r?t=[t]:(t=H.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?A:H.isEmptyObject)(r))return}}if(!n){delete a[f].data;if(!A(a[f]))return}H.support.deleteExpando||!a.setInterval?delete a[f]:a[f]=null,u&&(H.support.deleteExpando?delete e[o]:e.removeAttribute?e.removeAttribute(o):e[o]=null)}},_data:function(e,t,n){return H.data(e,t,n,!0)},acceptData:function(e){if(e.nodeName){var t=H.noData[e.nodeName.toLowerCase()];if(t)return t!==!0&&e.getAttribute("classid")===t}return!0}}),H.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=H.data(a);if(a.nodeType===1&&!H._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")===0&&(o=H.camelCase(o.substring(5)),O(a,o,l[o]));H._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){H.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",H.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=H.data(a,e),l=O(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=H(this);t.triggerHandler("setData"+i,r),H.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){H.removeData(this,e)})}}),H.extend({_mark:function(e,t){e&&(t=(t||"fx")+"mark",H._data(e,t,(H._data(e,t)||0)+1))},_unmark:function(e,t,n){e!==!0&&(n=t,t=e,e=!1);if(t){n=n||"fx";var r=n+"mark",i=e?0:(H._data(t,r)||1)-1;i?H._data(t,r,i):(H.removeData(t,r,!0),L(t,n,"mark"))}},queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=H._data(e,t),n&&(!r||H.isArray(n)?r=H._data(e,t,H.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=H.queue(e,t),r=n.shift(),i={};r==="inprogress"&&(r=n.shift()),r&&(t==="fx"&&n.unshift("inprogress"),H._data(e,t+".run",i),r.call(e,function(){H.dequeue(e,t)},i)),n.length||(H.removeData(e,t+"queue "+t+".run",!0),L(e,t,"queue"))}}),H.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?H.queue(this[0],e):n===t?this:this.each(function(){var t=H.queue(this,e,n);e==="fx"&&t[0]!=="inprogress"&&H.dequeue(this,e)})},dequeue:function(e){return this.each(function(){H.dequeue(this,e)})},delay:function(e,t){return e=H.fx?H.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){function r(){--u||i.resolveWith(s,[s])}typeof e!="string"&&(n=e,e=t),e=e||"fx";var i=H.Deferred(),s=this,o=s.length,u=1,a=e+"defer",f=e+"queue",l=e+"mark",c;while(o--)if(c=H.data(s[o],a,t,!0)||(H.data(s[o],f,t,!0)||H.data(s[o],l,t,!0))&&H.data(s[o],a,H.Callbacks("once memory"),!0))u++,c.add(r);return r(),i.promise(n)}});var q=/[\n\t\r]/g,R=/\s+/,U=/\r/g,z=/^(?:button|input)$/i,W=/^(?:button|input|object|select|textarea)$/i,X=/^a(?:rea)?$/i,V=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,$=H.support.getSetAttribute,J,K,Q;H.fn.extend({attr:function(e,t){return H.access(this,H.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){H.removeAttr(this,e)})},prop:function(e,t){return H.access(this,H.prop,e,t,arguments.length>1)},removeProp:function(e){return e=H.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(H.isFunction(e))return this.each(function(t){H(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(R);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)~s.indexOf(" "+t[o]+" ")||(s+=t[o]+" ");i.className=H.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(H.isFunction(e))return this.each(function(t){H(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(R);for(r=0,i=this.length;r<i;r++){s=this[r];if(s.nodeType===1&&s.className)if(e){o=(" "+s.className+" ").replace(q," ");for(u=0,a=n.length;u<a;u++)o=o.replace(" "+n[u]+" "," ");s.className=H.trim(o)}else s.className=""}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return H.isFunction(e)?this.each(function(n){H(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=H(this),u=t,a=e.split(R);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&H._data(this,"__className__",this.className),this.className=this.className||e===!1?"":H._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>-1)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!!arguments.length)return i=H.isFunction(e),this.each(function(r){var s=H(this),o;if(this.nodeType===1){i?o=e.call(this,r,s.val()):o=e,o==null?o="":typeof o=="number"?o+="":H.isArray(o)&&(o=H.map(o,function(e){return e==null?"":e+""})),n=H.valHooks[this.type]||H.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,o,"value")===t)this.value=o}});if(s)return n=H.valHooks[s.type]||H.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(U,""):r==null?"":r)}}),H.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,s=e.selectedIndex,o=[],u=e.options,a=e.type==="select-one";if(s<0)return null;n=a?s:0,r=a?s+1:u.length;for(;n<r;n++){i=u[n];if(i.selected&&(H.support.optDisabled?!i.disabled:i.getAttribute("disabled")===null)&&(!i.parentNode.disabled||!H.nodeName(i.parentNode,"optgroup"))){t=H(i).val();if(a)return t;o.push(t)}}return a&&!o.length&&u.length?H(u[s]).val():o},set:function(e,t){var n=H.makeArray(t);return H(e).find("option").each(function(){this.selected=H.inArray(H(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!!e&&a!==3&&a!==8&&a!==2){if(i&&n in H.attrFn)return H(e)[n](r);if(typeof e.getAttribute=="undefined")return H.prop(e,n,r);u=a!==1||!H.isXMLDoc(e),u&&(n=n.toLowerCase(),o=H.attrHooks[n]||(V.test(n)?K:J));if(r!==t){if(r===null){H.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,""+r),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)}},removeAttr:function(e,t){var n,r,i,s,o,u=0;if(t&&e.nodeType===1){r=t.toLowerCase().split(R),s=r.length;for(;u<s;u++)i=r[u],i&&(n=H.propFix[i]||i,o=V.test(i),o||H.attr(e,i,""),e.removeAttribute($?i:n),o&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(z.test(e.nodeName)&&e.parentNode)H.error("type property can't be changed");else if(!H.support.radioValue&&t==="radio"&&H.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return J&&H.nodeName(e,"button")?J.get(e,t):t in e?e.value:null},set:function(e,t,n){if(J&&H.nodeName(e,"button"))return J.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!!e&&u!==3&&u!==8&&u!==2)return o=u!==1||!H.isXMLDoc(e),o&&(n=H.propFix[n]||n,s=H.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):W.test(e.nodeName)||X.test(e.nodeName)&&e.href?0:t}}}}),H.attrHooks.tabindex=H.propHooks.tabIndex,K={get:function(e,n){var r,i=H.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?H.removeAttr(e,n):(r=H.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},$||(Q={name:!0,id:!0,coords:!0},J=H.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(Q[n]?r.nodeValue!=="":r.specified)?r.nodeValue:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=_.createAttribute(n),e.setAttributeNode(r)),r.nodeValue=t+""}},H.attrHooks.tabindex.set=J.set,H.each(["width","height"],function(e,t){H.attrHooks[t]=H.extend(H.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),H.attrHooks.contenteditable={get:J.get,set:function(e,t,n){t===""&&(t="false"),J.set(e,t,n)}}),H.support.hrefNormalized||H.each(["href","src","width","height"],function(e,n){H.attrHooks[n]=H.extend(H.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),H.support.style||(H.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=""+t}}),H.support.optSelected||(H.propHooks.selected=H.extend(H.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),H.support.enctype||(H.propFix.enctype="encoding"),H.support.checkOn||H.each(["radio","checkbox"],function(){H.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),H.each(["radio","checkbox"],function(){H.valHooks[this]=H.extend(H.valHooks[this],{set:function(e,t){if(H.isArray(t))return e.checked=H.inArray(H(e).val(),t)>=0}})});var G=/^(?:textarea|input|select)$/i,Y=/^([^\.]*)?(?:\.(.+))?$/,Z=/(?:^|\s)hover(\.\S+)?\b/,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,it=function(e){var t=rt.exec(e);return t&&(t[1]=(t[1]||"").toLowerCase(),t[3]=t[3]&&new RegExp("(?:^|\\s)"+t[3]+"(?:\\s|$)")),t},st=function(e,t){var n=e.attributes||{};return(!t[1]||e.nodeName.toLowerCase()===t[1])&&(!t[2]||(n.id||{}).value===
    t[2])&&(!t[3]||t[3].test((n["class"]||{}).value))},ot=function(e){return H.event.special.hover?e:e.replace(Z,"mouseenter$1 mouseleave$1")};H.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,v,m,g;if(!(e.nodeType===3||e.nodeType===8||!n||!r||!(o=H._data(e)))){r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=H.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof H=="undefined"||!!e&&H.event.triggered===e.type?t:H.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=H.trim(ot(n)).split(" ");for(f=0;f<n.length;f++){l=Y.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=H.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=H.event.special[c]||{},p=H.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,quick:s&&it(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),H.event.global[c]=!0}e=null}},global:{},remove:function(e,t,n,r,i){var s=H.hasData(e)&&H._data(e),o,u,a,f,l,c,h,p,d,v,m,g;if(!!s&&!!(p=s.events)){t=H.trim(ot(t||"")).split(" ");for(o=0;o<t.length;o++){u=Y.exec(t[o])||[],a=f=u[1],l=u[2];if(!a){for(a in p)H.event.remove(e,a+t[o],n,r,!0);continue}d=H.event.special[a]||{},a=(r?d.delegateType:d.bindType)||a,m=p[a]||[],c=m.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(h=0;h<m.length;h++)g=m[h],(i||f===g.origType)&&(!n||n.guid===g.guid)&&(!l||l.test(g.namespace))&&(!r||r===g.selector||r==="**"&&g.selector)&&(m.splice(h--,1),g.selector&&m.delegateCount--,d.remove&&d.remove.call(e,g));m.length===0&&c!==m.length&&((!d.teardown||d.teardown.call(e,l)===!1)&&H.removeEvent(e,a,s.handle),delete p[a])}H.isEmptyObject(p)&&(v=s.handle,v&&(v.elem=null),H.removeData(e,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,s){if(!i||i.nodeType!==3&&i.nodeType!==8){var o=n.type||n,u=[],a,f,l,c,h,p,d,v,m,g;if(nt.test(o+H.event.triggered))return;o.indexOf("!")>=0&&(o=o.slice(0,-1),f=!0),o.indexOf(".")>=0&&(u=o.split("."),o=u.shift(),u.sort());if((!i||H.event.customEvent[o])&&!H.event.global[o])return;n=typeof n=="object"?n[H.expando]?n:new H.Event(o,n):new H.Event(o),n.type=o,n.isTrigger=!0,n.exclusive=f,n.namespace=u.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+u.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,p=o.indexOf(":")<0?"on"+o:"";if(!i){a=H.cache;for(l in a)a[l].events&&a[l].events[o]&&H.event.trigger(n,r,a[l].handle.elem,!0);return}n.result=t,n.target||(n.target=i),r=r!=null?H.makeArray(r):[],r.unshift(n),d=H.event.special[o]||{};if(d.trigger&&d.trigger.apply(i,r)===!1)return;m=[[i,d.bindType||o]];if(!s&&!d.noBubble&&!H.isWindow(i)){g=d.delegateType||o,c=nt.test(g+o)?i:i.parentNode,h=null;for(;c;c=c.parentNode)m.push([c,g]),h=c;h&&h===i.ownerDocument&&m.push([h.defaultView||h.parentWindow||e,g])}for(l=0;l<m.length&&!n.isPropagationStopped();l++)c=m[l][0],n.type=m[l][1],v=(H._data(c,"events")||{})[n.type]&&H._data(c,"handle"),v&&v.apply(c,r),v=p&&c[p],v&&H.acceptData(c)&&v.apply(c,r)===!1&&n.preventDefault();return n.type=o,!s&&!n.isDefaultPrevented()&&(!d._default||d._default.apply(i.ownerDocument,r)===!1)&&(o!=="click"||!H.nodeName(i,"a"))&&H.acceptData(i)&&p&&i[o]&&(o!=="focus"&&o!=="blur"||n.target.offsetWidth!==0)&&!H.isWindow(i)&&(h=i[p],h&&(i[p]=null),H.event.triggered=o,i[o](),H.event.triggered=t,h&&(i[p]=h)),n.result}},dispatch:function(n){n=H.event.fix(n||e.event);var r=(H._data(this,"events")||{})[n.type]||[],i=r.delegateCount,s=[].slice.call(arguments,0),o=!n.exclusive&&!n.namespace,u=H.event.special[n.type]||{},a=[],f,l,c,h,p,d,v,m,g,y,b;s[0]=n,n.delegateTarget=this;if(!u.preDispatch||u.preDispatch.call(this,n)!==!1){if(i&&(!n.button||n.type!=="click")){h=H(this),h.context=this.ownerDocument||this;for(c=n.target;c!=this;c=c.parentNode||this)if(c.disabled!==!0){d={},m=[],h[0]=c;for(f=0;f<i;f++)g=r[f],y=g.selector,d[y]===t&&(d[y]=g.quick?st(c,g.quick):h.is(y)),d[y]&&m.push(g);m.length&&a.push({elem:c,matches:m})}}r.length>i&&a.push({elem:this,matches:r.slice(i)});for(f=0;f<a.length&&!n.isPropagationStopped();f++){v=a[f],n.currentTarget=v.elem;for(l=0;l<v.matches.length&&!n.isImmediatePropagationStopped();l++){g=v.matches[l];if(o||!n.namespace&&!g.namespace||n.namespace_re&&n.namespace_re.test(g.namespace))n.data=g.data,n.handleObj=g,p=((H.event.special[g.origType]||{}).handle||g.handler).apply(v.elem,s),p!==t&&(n.result=p,p===!1&&(n.preventDefault(),n.stopPropagation()))}}return u.postDispatch&&u.postDispatch.call(this,n),n.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,s,o=n.button,u=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||_,i=r.documentElement,s=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||s&&s.scrollLeft||0)-(i&&i.clientLeft||s&&s.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||s&&s.scrollTop||0)-(i&&i.clientTop||s&&s.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),!e.which&&o!==t&&(e.which=o&1?1:o&2?3:o&4?2:0),e}},fix:function(e){if(e[H.expando])return e;var n,r,i=e,s=H.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=H.Event(i);for(n=o.length;n;)r=o[--n],e[r]=i[r];return e.target||(e.target=i.srcElement||_),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey===t&&(e.metaKey=e.ctrlKey),s.filter?s.filter(e,i):e},special:{ready:{setup:H.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){H.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=H.extend(new H.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?H.event.trigger(i,null,t):H.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},H.event.handle=H.event.dispatch,H.removeEvent=_.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)},H.Event=function(e,t){if(!(this instanceof H.Event))return new H.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?C:k):this.type=e,t&&H.extend(this,t),this.timeStamp=e&&e.timeStamp||H.now(),this[H.expando]=!0},H.Event.prototype={preventDefault:function(){this.isDefaultPrevented=C;var e=this.originalEvent;!e||(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=C;var e=this.originalEvent;!e||(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=C,this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k},H.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){H.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n=this,r=e.relatedTarget,i=e.handleObj,s=i.selector,o;if(!r||r!==n&&!H.contains(n,r))e.type=i.origType,o=i.handler.apply(this,arguments),e.type=t;return o}}}),H.support.submitBubbles||(H.event.special.submit={setup:function(){if(H.nodeName(this,"form"))return!1;H.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=H.nodeName(n,"input")||H.nodeName(n,"button")?n.form:t;r&&!r._submit_attached&&(H.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),r._submit_attached=!0)})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&H.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(H.nodeName(this,"form"))return!1;H.event.remove(this,"._submit")}}),H.support.changeBubbles||(H.event.special.change={setup:function(){if(G.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")H.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),H.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1,H.event.simulate("change",this,e,!0))});return!1}H.event.add(this,"beforeactivate._change",function(e){var t=e.target;G.test(t.nodeName)&&!t._change_attached&&(H.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&H.event.simulate("change",this.parentNode,e,!0)}),t._change_attached=!0)})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return H.event.remove(this,"._change"),G.test(this.nodeName)}}),H.support.focusinBubbles||H.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){H.event.simulate(t,e.target,H.event.fix(e),!0)};H.event.special[t]={setup:function(){n++===0&&_.addEventListener(e,r,!0)},teardown:function(){--n===0&&_.removeEventListener(e,r,!0)}}}),H.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=k;else if(!i)return this;return s===1&&(o=i,i=function(e){return H().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=H.guid++)),this.each(function(){H.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){if(e&&e.preventDefault&&e.handleObj){var i=e.handleObj;return H(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this}if(typeof e=="object"){for(var s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=k),this.each(function(){H.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return H(this.context).on(e,this.selector,t,n),this},die:function(e,t){return H(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length==1?this.off(e,"**"):this.off(t,e,n)},trigger:function(e,t){return this.each(function(){H.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return H.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||H.guid++,r=0,i=function(n){var i=(H._data(this,"lastToggle"+e.guid)||0)%r;return H._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){H.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},H.attrFn&&(H.attrFn[t]=!0),et.test(t)&&(H.event.fixHooks[t]=H.event.keyHooks),tt.test(t)&&(H.event.fixHooks[t]=H.event.mouseHooks)}),function(){function e(e,t,n,r,s,o){for(var u=0,a=r.length;u<a;u++){var f=r[u];if(f){var l=!1;f=f[e];while(f){if(f[i]===n){l=r[f.sizset];break}if(f.nodeType===1){o||(f[i]=n,f.sizset=u);if(typeof t!="string"){if(f===t){l=!0;break}}else if(h.filter(t,[f]).length>0){l=f;break}}f=f[e]}r[u]=l}}}function n(e,t,n,r,s,o){for(var u=0,a=r.length;u<a;u++){var f=r[u];if(f){var l=!1;f=f[e];while(f){if(f[i]===n){l=r[f.sizset];break}f.nodeType===1&&!o&&(f[i]=n,f.sizset=u);if(f.nodeName.toLowerCase()===t){l=f;break}f=f[e]}r[u]=l}}}var r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i="sizcache"+(Math.random()+"").replace(".",""),s=0,o=Object.prototype.toString,u=!1,a=!0,f=/\\/g,l=/\r\n/g,c=/\W/;[0,0].sort(function(){return a=!1,0});var h=function(e,t,n,i){n=n||[],t=t||_;var s=t;if(t.nodeType!==1&&t.nodeType!==9)return[];if(!e||typeof e!="string")return n;var u,a,f,l,c,p,m,g,b=!0,w=h.isXML(t),E=[],x=e;do{r.exec(""),u=r.exec(x);if(u){x=u[3],E.push(u[1]);if(u[2]){l=u[3];break}}}while(u);if(E.length>1&&v.exec(e))if(E.length===2&&d.relative[E[0]])a=S(E[0]+E[1],t,i);else{a=d.relative[E[0]]?[t]:h(E.shift(),t);while(E.length)e=E.shift(),d.relative[e]&&(e+=E.shift()),a=S(e,a,i)}else{!i&&E.length>1&&t.nodeType===9&&!w&&d.match.ID.test(E[0])&&!d.match.ID.test(E[E.length-1])&&(c=h.find(E.shift(),t,w),t=c.expr?h.filter(c.expr,c.set)[0]:c.set[0]);if(t){c=i?{expr:E.pop(),set:y(i)}:h.find(E.pop(),E.length!==1||E[0]!=="~"&&E[0]!=="+"||!t.parentNode?t:t.parentNode,w),a=c.expr?h.filter(c.expr,c.set):c.set,E.length>0?f=y(a):b=!1;while(E.length)p=E.pop(),m=p,d.relative[p]?m=E.pop():p="",m==null&&(m=t),d.relative[p](f,m,w)}else f=E=[]}f||(f=a),f||h.error(p||e);if(o.call(f)==="[object Array]")if(!b)n.push.apply(n,f);else if(t&&t.nodeType===1)for(g=0;f[g]!=null;g++)f[g]&&(f[g]===!0||f[g].nodeType===1&&h.contains(t,f[g]))&&n.push(a[g]);else for(g=0;f[g]!=null;g++)f[g]&&f[g].nodeType===1&&n.push(a[g]);else y(f,n);return l&&(h(l,s,n,i),h.uniqueSort(n)),n};h.uniqueSort=function(e){if(w){u=a,e.sort(w);if(u)for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1)}return e},h.matches=function(e,t){return h(e,null,null,t)},h.matchesSelector=function(e,t){return h(t,null,null,[e]).length>0},h.find=function(e,t,n){var r,i,s,o,u,a;if(!e)return[];for(i=0,s=d.order.length;i<s;i++){u=d.order[i];if(o=d.leftMatch[u].exec(e)){a=o[1],o.splice(1,1);if(a.substr(a.length-1)!=="\\"){o[1]=(o[1]||"").replace(f,""),r=d.find[u](o,t,n);if(r!=null){e=e.replace(d.match[u],"");break}}}}return r||(r=typeof t.getElementsByTagName!="undefined"?t.getElementsByTagName("*"):[]),{set:r,expr:e}},h.filter=function(e,n,r,i){var s,o,u,a,f,l,c,p,v,m=e,g=[],y=n,b=n&&n[0]&&h.isXML(n[0]);while(e&&n.length){for(u in d.filter)if((s=d.leftMatch[u].exec(e))!=null&&s[2]){l=d.filter[u],c=s[1],o=!1,s.splice(1,1);if(c.substr(c.length-1)==="\\")continue;y===g&&(g=[]);if(d.preFilter[u]){s=d.preFilter[u](s,y,r,g,i,b);if(!s)o=a=!0;else if(s===!0)continue}if(s)for(p=0;(f=y[p])!=null;p++)f&&(a=l(f,s,p,y),v=i^a,r&&a!=null?v?o=!0:y[p]=!1:v&&(g.push(f),o=!0));if(a!==t){r||(y=g),e=e.replace(d.match[u],"");if(!o)return[];break}}if(e===m){if(o!=null)break;h.error(e)}m=e}return y},h.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};var p=h.getText=function(e){var t,n,r=e.nodeType,i="";if(r){if(r===1||r===9||r===11){if(typeof e.textContent=="string")return e.textContent;if(typeof e.innerText=="string")return e.innerText.replace(l,"");for(e=e.firstChild;e;e=e.nextSibling)i+=p(e)}else if(r===3||r===4)return e.nodeValue}else for(t=0;n=e[t];t++)n.nodeType!==8&&(i+=p(n));return i},d=h.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n=typeof t=="string",r=n&&!c.test(t),i=n&&!r;r&&(t=t.toLowerCase());for(var s=0,o=e.length,u;s<o;s++)if(u=e[s]){while((u=u.previousSibling)&&u.nodeType!==1);e[s]=i||u&&u.nodeName.toLowerCase()===t?u||!1:u===t}i&&h.filter(t,e,!0)},">":function(e,t){var n,r=typeof t=="string",i=0,s=e.length;if(r&&!c.test(t)){t=t.toLowerCase();for(;i<s;i++){n=e[i];if(n){var o=n.parentNode;e[i]=o.nodeName.toLowerCase()===t?o:!1}}}else{for(;i<s;i++)n=e[i],n&&(e[i]=r?n.parentNode:n.parentNode===t);r&&h.filter(t,e,!0)}},"":function(t,r,i){var o,u=s++,a=e;typeof r=="string"&&!c.test(r)&&(r=r.toLowerCase(),o=r,a=n),a("parentNode",r,u,t,o,i)},"~":function(t,r,i){var o,u=s++,a=e;typeof r=="string"&&!c.test(r)&&(r=r.toLowerCase(),o=r,a=n),a("previousSibling",r,u,t,o,i)}},find:{ID:function(e,t,n){if(typeof t.getElementById!="undefined"&&!n){var r=t.getElementById(e[1]);return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if(typeof t.getElementsByName!="undefined"){var n=[],r=t.getElementsByName(e[1]);for(var i=0,s=r.length;i<s;i++)r[i].getAttribute("name")===e[1]&&n.push(r[i]);return n.length===0?null:n}},TAG:function(e,t){if(typeof t.getElementsByTagName!="undefined")return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,t,n,r,i,s){e=" "+e[1].replace(f,"")+" ";if(s)return e;for(var o=0,u;(u=t[o])!=null;o++)u&&(i^(u.className&&(" "+u.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)?n||r.push(u):n&&(t[o]=!1));return!1},ID:function(e){return e[1].replace(f,"")},TAG:function(e,t){return e[1].replace(f,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){e[2]||h.error(e[0]),e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}else e[2]&&h.error(e[0]);return e[0]=s++,e},ATTR:function(e,t,n,r,i,s){var o=e[1]=e[1].replace(f,"");return!s&&d.attrMap[o]&&(e[1]=d.attrMap[o]),e[4]=(e[4]||e[5]||"").replace(f,""),e[2]==="~="&&(e[4]=" "+e[4]+" "),e},PSEUDO:function(e,t,n,i,s){if(e[1]==="not"){if(!((r.exec(e[3])||"").length>1||/^\w/.test(e[3]))){var o=h.filter(e[3],t,n,!0^s);return n||i.push.apply(i,o),!1}e[3]=h(e[3],null,null,t)}else if(d.match.POS.test(e[0])||d.match.CHILD.test(e[0]))return!0;return e},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&e.type!=="hidden"},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!h(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type;return e.nodeName.toLowerCase()==="input"&&"text"===n&&(t===n||t===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"submit"===e.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&"button"===e.type||t==="button"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return t===0},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],s=d.filters[i];if(s)return s(e,n,t,r);if(i==="contains")return(e.textContent||e.innerText||p([e])||"").indexOf(t[3])>=0;if(i==="not"){var o=t[3];for(var u=0,a=o.length;u<a;u++)if(o[u]===e)return!1;return!0}h.error(i)},CHILD:function(e,t){var n,r,s,o,u,a,f,l=t[1],c=e;switch(l){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(l==="first")return!0;c=e;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0;case"nth":n=t[2],r=t[3];if(n===1&&r===0)return!0;s=t[0],o=e.parentNode;if(o&&(o[i]!==s||!e.nodeIndex)){a=0;for(c=o.firstChild;c;c=c.nextSibling)c.nodeType===1&&(c.nodeIndex=++a);o[i]=s}return f=e.nodeIndex-r,n===0?f===0:f%n===0&&f/n>=0}},ID:function(e,t){return e.nodeType===1&&e.getAttribute("id")===t},TAG:function(e,t){return t==="*"&&e.nodeType===1||!!e.nodeName&&e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=h.attr?h.attr(e,n):d.attrHandle[n]?d.attrHandle[n](e):e[n]!=null?e[n]:e.getAttribute(n),i=r+"",s=t[2],o=t[4];return r==null?s==="!=":!s&&h.attr?r!=null:s==="="?i===o:s==="*="?i.indexOf(o)>=0:s==="~="?(" "+i+" ").indexOf(o)>=0:o?s==="!="?i!==o:s==="^="?i.indexOf(o)===0:s==="$="?i.substr(i.length-o.length)===o:s==="|="?i===o||i.substr(0,o.length+1)===o+"-":!1:i&&r!==!1},POS:function(e,t,n,r){var i=t[2],s=d.setFilters[i];if(s)return s(e,n,t,r)}}},v=d.match.POS,m=function(e,t){return"\\"+(t-0+1)};for(var g in d.match)d.match[g]=new RegExp(d.match[g].source+/(?![^\[]*\])(?![^\(]*\))/.source),d.leftMatch[g]=new RegExp(/(^(?:.|\r|\n)*?)/.source+d.match[g].source.replace(/\\(\d+)/g,m));d.match.globalPOS=v;var y=function(e,t){return e=Array.prototype.slice.call(e,0),t?(t.push.apply(t,e),t):e};try{Array.prototype.slice.call(_.documentElement.childNodes,0)[0].nodeType}catch(b){y=function(e,t){var n=0,r=t||[];if(o.call(e)==="[object Array]")Array.prototype.push.apply(r,e);else if(typeof e.length=="number")for(var i=e.length;n<i;n++)r.push(e[n]);else for(;e[n];n++)r.push(e[n]);return r}}var w,E;_.documentElement.compareDocumentPosition?w=function(e,t){return e===t?(u=!0,0):!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition?-1:1:e.compareDocumentPosition(t)&4?-1:1}:(w=function(e,t){if(e===t)return u=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,a=t.parentNode,f=o;if(o===a)return E(e,t);if(!o)return-1;if(!a)return 1;while(f)i.unshift(f),f=f.parentNode;f=a;while(f)s.unshift(f),f=f.parentNode;n=i.length,r=s.length;for(var l=0;l<n&&l<r;l++)if(i[l]!==s[l])return E(i[l],s[l]);return l===n?E(e,s[l],-1):E(i[l],t,1)},E=function(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}),function(){var e=_.createElement("div"),n="script"+(new Date).getTime(),r=_.documentElement;e.innerHTML="<a name='"+n+"'/>",r.insertBefore(e,r.firstChild),_.getElementById(n)&&(d.find.ID=function(e,n,r){if(typeof n.getElementById!="undefined"&&!r){var i=n.getElementById(e[1]);return i?i.id===e[1]||typeof i.getAttributeNode!="undefined"&&i.getAttributeNode("id").nodeValue===e[1]?[i]:t:[]}},d.filter.ID=function(e,t){var n=typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id");return e.nodeType===1&&n&&n.nodeValue===t}),r.removeChild(e),r=e=null}(),function(){var e=_.createElement("div");e.appendChild(_.createComment("")),e.getElementsByTagName("*").length>0&&(d.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if(e[1]==="*"){var r=[];for(var i=0;n[i];i++)n[i].nodeType===1&&r.push(n[i]);n=r}return n}),e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!="undefined"&&e.firstChild.getAttribute("href")!=="#"&&(d.attrHandle.href=function(e){return e.getAttribute("href",2)}),e=null}(),_.querySelectorAll&&function(){var e=h,t=_.createElement("div"),n="__sizzle__";t.innerHTML="<p class='TEST'></p>";if(!t.querySelectorAll||t.querySelectorAll(".TEST").length!==0){h=function(t,r,i,s){r=r||_;if(!s&&!h.isXML(r)){var o=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(o&&(r.nodeType===1||r.nodeType===9)){if(o[1])return y(r.getElementsByTagName(t),i);if(o[2]&&d.find.CLASS&&r.getElementsByClassName)return y(r.getElementsByClassName(o[2]),i)}if(r.nodeType===9){if(t==="body"&&r.body)return y([r.body],i);if(o&&o[3]){var u=r.getElementById(o[3]);if(!u||!u.parentNode)return y([],i);if(u.id===o[3])return y([u],i)}try{return y(r.querySelectorAll(t),i)}catch(a){}}else if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){var f=r,l=r.getAttribute("id"),c=l||n,p=r.parentNode,v=/^\s*[+~]/.test(t);l?c=c.replace(/'/g,"\\$&"):r.setAttribute("id",c),v&&p&&(r=r.parentNode);try{if(!v||p)return y(r.querySelectorAll("[id='"+c+"'] "+t),i)}catch(m){}finally{l||f.removeAttribute("id")}}}return e(t,r,i,s)};for(var r in e)h[r]=e[r];t=null}}(),function(){var e=_.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(t){var n=!t.call(_.createElement("div"),"div"),r=!1;try{t.call(_.documentElement,"[test!='']:sizzle")}catch(i){r=!0}h.matchesSelector=function(e,i){i=i.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!h.isXML(e))try{if(r||!d.match.PSEUDO.test(i)&&!/!=/.test(i)){var s=t.call(e,i);if(s||!n||e.document&&e.document.nodeType!==11)return s}}catch(o){}return h(i,null,null,[e]).length>0}}}(),function(){var e=_.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!e.getElementsByClassName&&e.getElementsByClassName("e").length!==0){e.lastChild.className="e";if(e.getElementsByClassName("e").length===1)return;d.order.splice(1,0,"CLASS"),d.find.CLASS=function(e,t,n){if(typeof t.getElementsByClassName!="undefined"&&!n)return t.getElementsByClassName(e[1])},e=null}}(),_.documentElement.contains?h.contains=function(e,t){return e!==t&&(e.contains?e.contains(t):!0)}:_.documentElement.compareDocumentPosition?h.contains=function(e,t){return!!(e.compareDocumentPosition(t)&16)}:h.contains=function(){return!1},h.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":!1};var S=function(e,t,n){var r,i=[],s="",o=t.nodeType?[t]:t;while(r=d.match.PSEUDO.exec(e))s+=r[0],e=e.replace(d.match.PSEUDO,"");e=d.relative[e]?e+"*":e;for(var u=0,a=o.length;u<a;u++)h(e,o[u],i,n);return h.filter(s,i)};h.attr=H.attr,h.selectors.attrMap={},H.find=h,H.expr=h.selectors,H.expr[":"]=H.expr.filters,H.unique=h.uniqueSort,H.text=h.getText,H.isXMLDoc=h.isXML,H.contains=h.contains}();var ut=/Until$/,at=/^(?:parents|prevUntil|prevAll)/,ft=/,/,lt=/^.[^:#\[\.,]*$/,ct=Array.prototype.slice,ht=H.expr.match.globalPOS,pt={children:!0,contents:!0,next:!0,prev:!0};H.fn.extend({find:function(e){var t=this,n,r;if(typeof e!="string")return H(e).filter(function(){for(n=0,r=t.length;n<r;n++)if(H.contains(t[n],this))return!0});var i=this.pushStack("","find",e),s,o,u;for(n=0,r=this.length;n<r;n++){s=i.length,H.find(e,this[n],i);if(n>0)for(o=s;o<i.length;o++)for(u=0;u<s;u++)if(i[u]===i[o]){i.splice(o--,1);break}}return i},has:function(e){var t=H(e);return this.filter(function(){for(var e=0,n=t.length;e<n;e++)if(H.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(T(this,e,!1),"not",e)},filter:function(e){return this.pushStack(T(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?ht.test(e)?H(e,this.context).index(this[0])>=0:H.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n=[],r,i,s=this[0];if(H.isArray(e)){var o=1;while(s&&s.ownerDocument&&s!==t){for(r=0;r<e.length;r++)H(s).is(e[r])&&n.push({selector:e[r],elem:s,level:o});s=s.parentNode,o++}return n}var u=ht.test(e)||typeof e!="string"?H(e,t||this.context):0;for(r=0,i=this.length;r<i;r++){s=this[r];while(s){if(u?u.index(s)>-1:H.find.matchesSelector(s,e)){n.push(s);break}s=s.parentNode;if(!s||!s.ownerDocument||s===t||s.nodeType===11)break}}return n=n.length>1?H.unique(n):n,this.pushStack(n,"closest",e)},index:function(e){return e?typeof e=="string"?H.inArray(this[0],H(e)):H.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?H(e,t):H.makeArray(e&&e.nodeType?[e]:e),r=H.merge(this.get(),n);return this.pushStack(N(n[0])||N(r[0])?r:H.unique(r))},andSelf:function(){return this.add(this.prevObject)}}),H.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return H.dir(e,"parentNode")},parentsUntil:function(e,t,n){return H.dir(e,"parentNode",n)},next:function(e){return H.nth(e,2,"nextSibling")},prev:function(e){return H.nth(e,2,"previousSibling")},nextAll:function(e){return H.dir(e,"nextSibling")},prevAll:function(e){return H.dir(e,"previousSibling")},nextUntil:function(e,t,n){return H.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return H.dir(e,"previousSibling",n)},siblings:function(e){return H.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return H.sibling(e.firstChild)},contents:function(e){return H.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:H.makeArray(e.childNodes)}},function(e,t){H.fn[e]=function(n,r){var i=H.map(this,t,n);return ut.test(e)||(r=n),r&&typeof r=="string"&&(i=H.filter(r,i)),i=this.length>1&&!pt[e]?H.unique(i):i,(this.length>1||ft.test(r))&&at.test(e)&&(i=i.reverse()),this.pushStack(i,e,ct.call(arguments).join(","))}}),H.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?H.find.matchesSelector(t[0],e)?[t[0]]:[]:H.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!H(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},nth:function(e,t,n,r){t=t||1;var i=0;for(;e;e=e[n])if(e.nodeType===1&&++i===t)break;return e},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var dt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",vt=/ jQuery\d+="(?:\d+|null)"/g,mt=/^\s+/,gt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,yt=/<([\w:]+)/,bt=/<tbody/i,wt=/<|&#?\w+;/,Et=/<(?:script|style)/i,St=/<(?:script|object|embed|option|style)/i,xt=new RegExp("<(?:"+dt+")[\\s/>]","i"),Tt=/checked\s*(?:[^=]|=\s*.checked.)/i,Nt=/\/(java|ecma)script/i,Ct=/^\s*<!(?:\[CDATA\[|\-\-)/,kt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Lt=x(_);kt.optgroup=kt.option,kt.tbody=kt.tfoot=kt.colgroup=kt.caption=kt.thead,kt.th=kt.td,H.support.htmlSerialize||(kt._default=[1,"div<div>","</div>"]),H.fn.extend({text:function(e){return H.access(this,function(e){return e===t?H.text(this):this.empty().append((this[0]&&this[0].ownerDocument||_).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(H.isFunction(e))return this.each(function(t){H(this).wrapAll(e.call(this,t))});if(this[0]){var t=H(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return H.isFunction(e)?this.each(function(t){H(this).wrapInner(e.call(this,t))}):this.each(function(){var t=H(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=H.isFunction(e);return this.each(function(n){H(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){H.nodeName(this,"body")||H(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){this.nodeType===1&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){this.nodeType===1&&this.insertBefore(e,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=H.clean(arguments);return e.push.apply(e,this.toArray()),this.pushStack(e,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=
    this.pushStack(this,"after",arguments);return e.push.apply(e,H.clean(arguments)),e}},remove:function(e,t){for(var n=0,r;(r=this[n])!=null;n++)if(!e||H.filter(e,[r]).length)!t&&r.nodeType===1&&(H.cleanData(r.getElementsByTagName("*")),H.cleanData([r])),r.parentNode&&r.parentNode.removeChild(r);return this},empty:function(){for(var e=0,t;(t=this[e])!=null;e++){t.nodeType===1&&H.cleanData(t.getElementsByTagName("*"));while(t.firstChild)t.removeChild(t.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return H.clone(this,e,t)})},html:function(e){return H.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(vt,""):null;if(typeof e=="string"&&!Et.test(e)&&(H.support.leadingWhitespace||!mt.test(e))&&!kt[(yt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(gt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(H.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return this[0]&&this[0].parentNode?H.isFunction(e)?this.each(function(t){var n=H(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=H(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;H(this).remove(),t?H(t).before(e):H(n).append(e)})):this.length?this.pushStack(H(H.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){var i,s,o,u,a=e[0],f=[];if(!H.support.checkClone&&arguments.length===3&&typeof a=="string"&&Tt.test(a))return this.each(function(){H(this).domManip(e,n,r,!0)});if(H.isFunction(a))return this.each(function(i){var s=H(this);e[0]=a.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){u=a&&a.parentNode,H.support.parentNode&&u&&u.nodeType===11&&u.childNodes.length===this.length?i={fragment:u}:i=H.buildFragment(e,this,f),o=i.fragment,o.childNodes.length===1?s=o=o.firstChild:s=o.firstChild;if(s){n=n&&H.nodeName(s,"tr");for(var l=0,c=this.length,h=c-1;l<c;l++)r.call(n?S(this[l],s):this[l],i.cacheable||c>1&&l<h?H.clone(o,!0,!0):o)}f.length&&H.each(f,function(e,t){t.src?H.ajax({type:"GET",global:!1,url:t.src,async:!1,dataType:"script"}):H.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Ct,"/*$0*/")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),H.buildFragment=function(e,t,n){var r,i,s,o,u=e[0];return t&&t[0]&&(o=t[0].ownerDocument||t[0]),o.createDocumentFragment||(o=_),e.length===1&&typeof u=="string"&&u.length<512&&o===_&&u.charAt(0)==="<"&&!St.test(u)&&(H.support.checkClone||!Tt.test(u))&&(H.support.html5Clone||!xt.test(u))&&(i=!0,s=H.fragments[u],s&&s!==1&&(r=s)),r||(r=o.createDocumentFragment(),H.clean(e,o,r,n)),i&&(H.fragments[u]=s?r:1),{fragment:r,cacheable:i}},H.fragments={},H.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){H.fn[e]=function(n){var r=[],i=H(n),s=this.length===1&&this[0].parentNode;if(s&&s.nodeType===11&&s.childNodes.length===1&&i.length===1)return i[t](this[0]),this;for(var o=0,u=i.length;o<u;o++){var a=(o>0?this.clone(!0):this).get();H(i[o])[t](a),r=r.concat(a)}return this.pushStack(r,e,i.selector)}}),H.extend({clone:function(e,t,n){var r,i,s,o=H.support.html5Clone||H.isXMLDoc(e)||!xt.test("<"+e.nodeName+">")?e.cloneNode(!0):m(e);if((!H.support.noCloneEvent||!H.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!H.isXMLDoc(e)){w(e,o),r=b(e),i=b(o);for(s=0;r[s];++s)i[s]&&w(r[s],i[s])}if(t){E(e,o);if(n){r=b(e),i=b(o);for(s=0;r[s];++s)E(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var i,s,o,u=[];t=t||_,typeof t.createElement=="undefined"&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||_);for(var a=0,f;(f=e[a])!=null;a++){typeof f=="number"&&(f+="");if(!f)continue;if(typeof f=="string")if(!wt.test(f))f=t.createTextNode(f);else{f=f.replace(gt,"<$1></$2>");var l=(yt.exec(f)||["",""])[1].toLowerCase(),c=kt[l]||kt._default,h=c[0],p=t.createElement("div"),d=Lt.childNodes,v;t===_?Lt.appendChild(p):x(t).appendChild(p),p.innerHTML=c[1]+f+c[2];while(h--)p=p.lastChild;if(!H.support.tbody){var m=bt.test(f),y=l==="table"&&!m?p.firstChild&&p.firstChild.childNodes:c[1]==="<table>"&&!m?p.childNodes:[];for(o=y.length-1;o>=0;--o)H.nodeName(y[o],"tbody")&&!y[o].childNodes.length&&y[o].parentNode.removeChild(y[o])}!H.support.leadingWhitespace&&mt.test(f)&&p.insertBefore(t.createTextNode(mt.exec(f)[0]),p.firstChild),f=p.childNodes,p&&(p.parentNode.removeChild(p),d.length>0&&(v=d[d.length-1],v&&v.parentNode&&v.parentNode.removeChild(v)))}var b;if(!H.support.appendChecked)if(f[0]&&typeof (b=f.length)=="number")for(o=0;o<b;o++)g(f[o]);else g(f);f.nodeType?u.push(f):u=H.merge(u,f)}if(n){i=function(e){return!e.type||Nt.test(e.type)};for(a=0;u[a];a++){s=u[a];if(r&&H.nodeName(s,"script")&&(!s.type||Nt.test(s.type)))r.push(s.parentNode?s.parentNode.removeChild(s):s);else{if(s.nodeType===1){var w=H.grep(s.getElementsByTagName("script"),i);u.splice.apply(u,[a+1,0].concat(w))}n.appendChild(s)}}}return u},cleanData:function(e){var t,n,r=H.cache,i=H.event.special,s=H.support.deleteExpando;for(var o=0,u;(u=e[o])!=null;o++){if(u.nodeName&&H.noData[u.nodeName.toLowerCase()])continue;n=u[H.expando];if(n){t=r[n];if(t&&t.events){for(var a in t.events)i[a]?H.event.remove(u,a):H.removeEvent(u,a,t.handle);t.handle&&(t.handle.elem=null)}s?delete u[H.expando]:u.removeAttribute&&u.removeAttribute(H.expando),delete r[n]}}}});var At=/alpha\([^)]*\)/i,Ot=/opacity=([^)]*)/,Mt=/([A-Z]|^ms)/g,_t=/^[\-+]?(?:\d*\.)?\d+$/i,Dt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Pt=/^([\-+])=([\-+.\de]+)/,Ht=/^margin/,Bt={position:"absolute",visibility:"hidden",display:"block"},jt=["Top","Right","Bottom","Left"],Ft,It,qt;H.fn.css=function(e,n){return H.access(this,function(e,n,r){return r!==t?H.style(e,n,r):H.css(e,n)},e,n,arguments.length>1)},H.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ft(e,"opacity");return n===""?"1":n}return e.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":H.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!!e&&e.nodeType!==3&&e.nodeType!==8&&!!e.style){var s,o,u=H.camelCase(n),a=e.style,f=H.cssHooks[u];n=H.cssProps[u]||u;if(r===t)return f&&"get"in f&&(s=f.get(e,!1,i))!==t?s:a[n];o=typeof r,o==="string"&&(s=Pt.exec(r))&&(r=+(s[1]+1)*+s[2]+parseFloat(H.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!H.cssNumber[u]&&(r+="px");if(!f||!("set"in f)||(r=f.set(e,r))!==t)try{a[n]=r}catch(l){}}},css:function(e,n,r){var i,s;n=H.camelCase(n),s=H.cssHooks[n],n=H.cssProps[n]||n,n==="cssFloat"&&(n="float");if(s&&"get"in s&&(i=s.get(e,!0,r))!==t)return i;if(Ft)return Ft(e,n)},swap:function(e,t,n){var r={},i,s;for(s in t)r[s]=e.style[s],e.style[s]=t[s];i=n.call(e);for(s in t)e.style[s]=r[s];return i}}),H.curCSS=H.css,_.defaultView&&_.defaultView.getComputedStyle&&(It=function(e,t){var n,r,i,s,o=e.style;return t=t.replace(Mt,"-$1").toLowerCase(),(r=e.ownerDocument.defaultView)&&(i=r.getComputedStyle(e,null))&&(n=i.getPropertyValue(t),n===""&&!H.contains(e.ownerDocument.documentElement,e)&&(n=H.style(e,t))),!H.support.pixelMargin&&i&&Ht.test(t)&&Dt.test(n)&&(s=o.width,o.width=n,n=i.width,o.width=s),n}),_.documentElement.currentStyle&&(qt=function(e,t){var n,r,i,s=e.currentStyle&&e.currentStyle[t],o=e.style;return s==null&&o&&(i=o[t])&&(s=i),Dt.test(s)&&(n=o.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),o.left=t==="fontSize"?"1em":s,s=o.pixelLeft+"px",o.left=n,r&&(e.runtimeStyle.left=r)),s===""?"auto":s}),Ft=It||qt,H.each(["height","width"],function(e,t){H.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth!==0?v(e,t,r):H.swap(e,Bt,function(){return v(e,t,r)})},set:function(e,t){return _t.test(t)?t+"px":t}}}),H.support.opacity||(H.cssHooks.opacity={get:function(e,t){return Ot.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=H.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&H.trim(s.replace(At,""))===""){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=At.test(s)?s.replace(At,i):s+" "+i}}),H(function(){H.support.reliableMarginRight||(H.cssHooks.marginRight={get:function(e,t){return H.swap(e,{display:"inline-block"},function(){return t?Ft(e,"margin-right"):e.style.marginRight})}})}),H.expr&&H.expr.filters&&(H.expr.filters.hidden=function(e){var t=e.offsetWidth,n=e.offsetHeight;return t===0&&n===0||!H.support.reliableHiddenOffsets&&(e.style&&e.style.display||H.css(e,"display"))==="none"},H.expr.filters.visible=function(e){return!H.expr.filters.hidden(e)}),H.each({margin:"",padding:"",border:"Width"},function(e,t){H.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+jt[r]+t]=i[r]||i[r-2]||i[0];return s}}});var Rt=/%20/g,Ut=/\[\]$/,zt=/\r?\n/g,Wt=/#.*$/,Xt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Vt=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,$t=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Jt=/^(?:GET|HEAD)$/,Kt=/^\/\//,Qt=/\?/,Gt=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Yt=/^(?:select|textarea)/i,Zt=/\s+/,en=/([?&])_=[^&]*/,tn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,nn=H.fn.load,rn={},sn={},on,un,an=["*/"]+["*"];try{on=P.href}catch(fn){on=_.createElement("a"),on.href="",on=on.href}un=tn.exec(on.toLowerCase())||[],H.fn.extend({load:function(e,n,r){if(typeof e!="string"&&nn)return nn.apply(this,arguments);if(!this.length)return this;var i=e.indexOf(" ");if(i>=0){var s=e.slice(i,e.length);e=e.slice(0,i)}var o="GET";n&&(H.isFunction(n)?(r=n,n=t):typeof n=="object"&&(n=H.param(n,H.ajaxSettings.traditional),o="POST"));var u=this;return H.ajax({url:e,type:o,dataType:"html",data:n,complete:function(e,t,n){n=e.responseText,e.isResolved()&&(e.done(function(e){n=e}),u.html(s?H("<div>").append(n.replace(Gt,"")).find(s):n)),r&&u.each(r,[n,t,e])}}),this},serialize:function(){return H.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?H.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Yt.test(this.nodeName)||Vt.test(this.type))}).map(function(e,t){var n=H(this).val();return n==null?null:H.isArray(n)?H.map(n,function(e,n){return{name:t.name,value:e.replace(zt,"\r\n")}}):{name:t.name,value:n.replace(zt,"\r\n")}}).get()}}),H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){H.fn[t]=function(e){return this.on(t,e)}}),H.each(["get","post"],function(e,n){H[n]=function(e,r,i,s){return H.isFunction(r)&&(s=s||i,i=r,r=t),H.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),H.extend({getScript:function(e,n){return H.get(e,t,n,"script")},getJSON:function(e,t,n){return H.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?h(e,H.ajaxSettings):(t=e,e=H.ajaxSettings),h(e,t),e},ajaxSettings:{url:on,isLocal:$t.test(un[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":an},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":H.parseJSON,"text xml":H.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:d(rn),ajaxTransport:d(sn),ajax:function(e,n){function r(e,n,r,p){if(E!==2){E=2,b&&clearTimeout(b),y=t,m=p||"",T.readyState=e>0?4:0;var d,v,g,w=n,x=r?l(i,T,r):t,N,C;if(e>=200&&e<300||e===304){if(i.ifModified){if(N=T.getResponseHeader("Last-Modified"))H.lastModified[h]=N;if(C=T.getResponseHeader("Etag"))H.etag[h]=C}if(e===304)w="notmodified",d=!0;else try{v=f(i,x),w="success",d=!0}catch(k){w="parsererror",g=k}}else{g=w;if(!w||e)w="error",e<0&&(e=0)}T.status=e,T.statusText=""+(n||w),d?u.resolveWith(s,[v,w,T]):u.rejectWith(s,[T,w,g]),T.statusCode(c),c=t,S&&o.trigger("ajax"+(d?"Success":"Error"),[T,i,d?v:g]),a.fireWith(s,[T,w]),S&&(o.trigger("ajaxComplete",[T,i]),--H.active||H.event.trigger("ajaxStop"))}}typeof e=="object"&&(n=e,e=t),n=n||{};var i=H.ajaxSetup({},n),s=i.context||i,o=s!==i&&(s.nodeType||s instanceof H)?H(s):H.event,u=H.Deferred(),a=H.Callbacks("once memory"),c=i.statusCode||{},h,d={},v={},m,g,y,b,w,E=0,S,x,T={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=v[n]=v[n]||e,d[e]=t}return this},getAllResponseHeaders:function(){return E===2?m:null},getResponseHeader:function(e){var n;if(E===2){if(!g){g={};while(n=Xt.exec(m))g[n[1].toLowerCase()]=n[2]}n=g[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(i.mimeType=e),this},abort:function(e){return e=e||"abort",y&&y.abort(e),r(0,e),this}};u.promise(T),T.success=T.done,T.error=T.fail,T.complete=a.add,T.statusCode=function(e){if(e){var t;if(E<2)for(t in e)c[t]=[c[t],e[t]];else t=e[T.status],T.then(t,t)}return this},i.url=((e||i.url)+"").replace(Wt,"").replace(Kt,un[1]+"//"),i.dataTypes=H.trim(i.dataType||"*").toLowerCase().split(Zt),i.crossDomain==null&&(w=tn.exec(i.url.toLowerCase()),i.crossDomain=!(!w||w[1]==un[1]&&w[2]==un[2]&&(w[3]||(w[1]==="http:"?80:443))==(un[3]||(un[1]==="http:"?80:443)))),i.data&&i.processData&&typeof i.data!="string"&&(i.data=H.param(i.data,i.traditional)),p(rn,i,n,T);if(E===2)return!1;S=i.global,i.type=i.type.toUpperCase(),i.hasContent=!Jt.test(i.type),S&&H.active++===0&&H.event.trigger("ajaxStart");if(!i.hasContent){i.data&&(i.url+=(Qt.test(i.url)?"&":"?")+i.data,delete i.data),h=i.url;if(i.cache===!1){var N=H.now(),C=i.url.replace(en,"$1_="+N);i.url=C+(C===i.url?(Qt.test(i.url)?"&":"?")+"_="+N:"")}}(i.data&&i.hasContent&&i.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",i.contentType),i.ifModified&&(h=h||i.url,H.lastModified[h]&&T.setRequestHeader("If-Modified-Since",H.lastModified[h]),H.etag[h]&&T.setRequestHeader("If-None-Match",H.etag[h])),T.setRequestHeader("Accept",i.dataTypes[0]&&i.accepts[i.dataTypes[0]]?i.accepts[i.dataTypes[0]]+(i.dataTypes[0]!=="*"?", "+an+"; q=0.01":""):i.accepts["*"]);for(x in i.headers)T.setRequestHeader(x,i.headers[x]);if(!i.beforeSend||i.beforeSend.call(s,T,i)!==!1&&E!==2){for(x in{success:1,error:1,complete:1})T[x](i[x]);y=p(sn,i,n,T);if(!y)r(-1,"No Transport");else{T.readyState=1,S&&o.trigger("ajaxSend",[T,i]),i.async&&i.timeout>0&&(b=setTimeout(function(){T.abort("timeout")},i.timeout));try{E=1,y.send(d,r)}catch(k){if(!(E<2))throw k;r(-1,k)}}return T}return T.abort(),!1},param:function(e,n){var r=[],i=function(e,t){t=H.isFunction(t)?t():t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=H.ajaxSettings.traditional);if(H.isArray(e)||e.jquery&&!H.isPlainObject(e))H.each(e,function(){i(this.name,this.value)});else for(var s in e)c(s,e[s],n,i);return r.join("&").replace(Rt,"+")}}),H.extend({active:0,lastModified:{},etag:{}});var ln=H.now(),cn=/(\=)\?(&|$)|\?\?/i;H.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return H.expando+"_"+ln++}}),H.ajaxPrefilter("json jsonp",function(t,n,r){var i=typeof t.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(t.contentType);if(t.dataTypes[0]==="jsonp"||t.jsonp!==!1&&(cn.test(t.url)||i&&cn.test(t.data))){var s,o=t.jsonpCallback=H.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,u=e[o],a=t.url,f=t.data,l="$1"+o+"$2";return t.jsonp!==!1&&(a=a.replace(cn,l),t.url===a&&(i&&(f=f.replace(cn,l)),t.data===f&&(a+=(/\?/.test(a)?"&":"?")+t.jsonp+"="+o))),t.url=a,t.data=f,e[o]=function(e){s=[e]},r.always(function(){e[o]=u,s&&H.isFunction(u)&&e[o](s[0])}),t.converters["script json"]=function(){return s||H.error(o+" was not called"),s[0]},t.dataTypes[0]="json","script"}}),H.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return H.globalEval(e),e}}}),H.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),H.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=_.head||_.getElementsByTagName("head")[0]||_.documentElement;return{send:function(i,s){n=_.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||s(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var hn=e.ActiveXObject?function(){for(var e in dn)dn[e](0,1)}:!1,pn=0,dn;H.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&a()||u()}:a,function(e){H.extend(H.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(H.ajaxSettings.xhr()),H.support.ajax&&H.ajaxTransport(function(n){if(!n.crossDomain||H.support.cors){var r;return{send:function(i,s){var o=n.xhr(),u,a;n.username?o.open(n.type,n.url,n.async,n.username,n.password):o.open(n.type,n.url,n.async);if(n.xhrFields)for(a in n.xhrFields)o[a]=n.xhrFields[a];n.mimeType&&o.overrideMimeType&&o.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(a in i)o.setRequestHeader(a,i[a])}catch(f){}o.send(n.hasContent&&n.data||null),r=function(e,i){var a,f,l,c,h;try{if(r&&(i||o.readyState===4)){r=t,u&&(o.onreadystatechange=H.noop,hn&&delete dn[u]);if(i)o.readyState!==4&&o.abort();else{a=o.status,l=o.getAllResponseHeaders(),c={},h=o.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=o.responseText}catch(e){}try{f=o.statusText}catch(p){f=""}!a&&n.isLocal&&!n.crossDomain?a=c.text?200:404:a===1223&&(a=204)}}}catch(d){i||s(-1,d)}c&&s(a,f,c,l)},!n.async||o.readyState===4?r():(u=++pn,hn&&(dn||(dn={},H(e).unload(hn)),dn[u]=r),o.onreadystatechange=r)},abort:function(){r&&r(0,1)}}}});var vn={},mn,gn,yn=/^(?:toggle|show|hide)$/,bn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,wn,En=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],Sn;H.fn.extend({show:function(e,t,n){var s,o;if(e||e===0)return this.animate(i("show",3),e,t,n);for(var u=0,a=this.length;u<a;u++)s=this[u],s.style&&(o=s.style.display,!H._data(s,"olddisplay")&&o==="none"&&(o=s.style.display=""),(o===""&&H.css(s,"display")==="none"||!H.contains(s.ownerDocument.documentElement,s))&&H._data(s,"olddisplay",r(s.nodeName)));for(u=0;u<a;u++){s=this[u];if(s.style){o=s.style.display;if(o===""||o==="none")s.style.display=H._data(s,"olddisplay")||""}}return this},hide:function(e,t,n){if(e||e===0)return this.animate(i("hide",3),e,t,n);var r,s,o=0,u=this.length;for(;o<u;o++)r=this[o],r.style&&(s=H.css(r,"display"),s!=="none"&&!H._data(r,"olddisplay")&&H._data(r,"olddisplay",s));for(o=0;o<u;o++)this[o].style&&(this[o].style.display="none");return this},_toggle:H.fn.toggle,toggle:function(e,t,n){var r=typeof e=="boolean";return H.isFunction(e)&&H.isFunction(t)?this._toggle.apply(this,arguments):e==null||r?this.each(function(){var t=r?e:H(this).is(":hidden");H(this)[t?"show":"hide"]()}):this.animate(i("toggle",3),e,t,n),this},fadeTo:function(e,t,n,r){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,i){function s(){o.queue===!1&&H._mark(this);var t=H.extend({},o),n=this.nodeType===1,i=n&&H(this).is(":hidden"),s,u,a,f,l,c,h,p,d,v,m;t.animatedProperties={};for(a in e){s=H.camelCase(a),a!==s&&(e[s]=e[a],delete e[a]);if((l=H.cssHooks[s])&&"expand"in l){c=l.expand(e[s]),delete e[s];for(a in c)a in e||(e[a]=c[a])}}for(s in e){u=e[s],H.isArray(u)?(t.animatedProperties[s]=u[1],u=e[s]=u[0]):t.animatedProperties[s]=t.specialEasing&&t.specialEasing[s]||t.easing||"swing";if(u==="hide"&&i||u==="show"&&!i)return t.complete.call(this);n&&(s==="height"||s==="width")&&(t.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],H.css(this,"display")==="inline"&&H.css(this,"float")==="none"&&(!H.support.inlineBlockNeedsLayout||r(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}t.overflow!=null&&(this.style.overflow="hidden");for(a in e)f=new H.fx(this,t,a),u=e[a],yn.test(u)?(m=H._data(this,"toggle"+a)||(u==="toggle"?i?"show":"hide":0),m?(H._data(this,"toggle"+a,m==="show"?"hide":"show"),f[m]()):f[u]()):(h=bn.exec(u),p=f.cur(),h?(d=parseFloat(h[2]),v=h[3]||(H.cssNumber[a]?"":"px"),v!=="px"&&(H.style(this,a,(d||1)+v),p=(d||1)/f.cur()*p,H.style(this,a,p+v)),h[1]&&(d=(h[1]==="-="?-1:1)*d+p),f.custom(p,d,v)):f.custom(p,u,""));return!0}var o=H.speed(t,n,i);return H.isEmptyObject(e)?this.each(o.complete,[!1]):(e=H.extend({},e),o.queue===!1?this.each(s):this.queue(o.queue,s))},stop:function(e,n,r){return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){function t(e,t,n){var i=t[n];H.removeData(e,n,!0),i.stop(r)}var n,i=!1,s=H.timers,o=H._data(this);r||H._unmark(!0,this);if(e==null)for(n in o)o[n]&&o[n].stop&&n.indexOf(".run")===n.length-4&&t(this,o,n);else o[n=e+".run"]&&o[n].stop&&t(this,o,n);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(r?s[n](!0):s[n].saveState(),i=!0,s.splice(n,1));(!r||!i)&&H.dequeue(this,e)})}}),H.each({slideDown:i("show",1),slideUp:i("hide",1),slideToggle:i("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){H.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),H.extend({speed:function(e,t,n){var r=e&&typeof e=="object"?H.extend({},e):{complete:n||!n&&t||H.isFunction(e)&&e,duration:e,easing:n&&t||t&&!H.isFunction(t)&&t};r.duration=H.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in H.fx.speeds?H.fx.speeds[r.duration]:H.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(e){H.isFunction(r.old)&&r.old.call(this),r.queue?H.dequeue(this,r.queue):e!==!1&&H._unmark(this)},r},easing:{linear:function(e){return e},swing:function(e){return-Math.cos(e*Math.PI)/2+.5}},timers:[],fx:function(e,t,n){this.options=t,this.elem=e,this.prop=n,t.orig=t.orig||{}}}),H.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(H.fx.step[this.prop]||H.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]==null||!!this.elem.style&&this.elem.style[this.prop]!=null){var e,t=H.css(this.elem,this.prop);return isNaN(e=parseFloat(t))?!t||t==="auto"?0:t:e}return this.elem[this.prop]},custom:function(e,n,r){function i(e){return s.step(e)}var s=this,u=H.fx;this.startTime=Sn||o(),this.end=n,this.now=this.start=e,this.pos=this.state=0,this.unit=r||this.unit||(H.cssNumber[this.prop]?"":"px"),i.queue=this.options.queue,i.elem=this.elem,i.saveState=function(){H._data(s.elem,"fxshow"+s.prop)===t&&(s.options.hide?H._data(s.elem,"fxshow"+s.prop,s.start):s.options.show&&H._data(s.elem,"fxshow"+s.prop,s.end))},i()&&H.timers.push(i)&&!wn&&(wn=setInterval(u.tick,u.interval))},show:function(){var e=H._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=e||H.style(this.elem,this.prop),this.options.show=!0,e!==t?this.custom(this.cur(),e):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),H(this.elem).show()},hide:function(){this.options.orig[this.prop]=H._data(this.elem,"fxshow"+this.prop)||H.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(e){var t,n,r,i=Sn||o(),s=!0,u=this.elem,a=this.options;if(e||i>=a.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),a.animatedProperties[this.prop]=!0;for(t in a.animatedProperties)a.animatedProperties[t]!==!0&&(s=!1);if(s){a.overflow!=null&&!H.support.shrinkWrapBlocks&&H.each(["","X","Y"],function(e,t){u.style["overflow"+t]=a.overflow[e]}),a.hide&&H(u).hide();if(a.hide||a.show)for(t in a.animatedProperties)H.style(u,t,a.orig[t]),H.removeData(u,"fxshow"+t,!0),H.removeData(u,"toggle"+t,!0);r=a.complete,r&&(a.complete=!1,r.call(u))}return!1}return a.duration==Infinity?this.now=i:(n=i-this.startTime,this.state=n/a.duration,this.pos=H.easing[a.animatedProperties[this.prop]](this.state,n,0,1,a.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},H.extend(H.fx,{tick:function(){var e,t=H.timers,n=0;for(;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||H.fx.stop()},interval:13,stop:function(){clearInterval(wn),wn=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){H.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&e.elem.style[e.prop]!=null?e.elem.style[e.prop]=e.now+e.unit:e.elem[e.prop]=e.now}}}),H.each(En.concat.apply([],En),function(e,t){t.indexOf("margin")&&(H.fx.step[t]=function(e){H.style(e.elem,t,Math.max(0,e.now)+e.unit)})}),H.expr&&H.expr.filters&&(H.expr.filters.animated=function(e){return H.grep(H.timers,function(t){return e===t.elem}).length});var xn,Tn=/^t(?:able|d|h)$/i,Nn=/^(?:body|html)$/i;"getBoundingClientRect"in _.documentElement?xn=function(e,t,r,i){try{i=e.getBoundingClientRect()}catch(s){}if(!i||!H.contains(r,e))return i?{top:i.top,left:i.left}:{top:0,left:0};var o=t.body,u=n(t),a=r.clientTop||o.clientTop||0,f=r.clientLeft||o.clientLeft||0,l=u.pageYOffset||H.support.boxModel&&r.scrollTop||o.scrollTop,c=u.pageXOffset||H.support.boxModel&&r.scrollLeft||o.scrollLeft,h=i.top+l-a,p=i.left+c-f;return{top:h,left:p}}:xn=function(e,t,n){var r,i=e.offsetParent,s=e,o=t.body,u=t.defaultView,a=u?u.getComputedStyle(e,null):e.currentStyle,f=e.offsetTop,l=e.offsetLeft;while((e=e.parentNode)&&e!==o&&e!==n){if(H.support.fixedPosition&&a.position==="fixed")break;r=u?u.getComputedStyle(e,null):e.currentStyle,f-=e.scrollTop,l-=e.scrollLeft,e===i&&(f+=e.offsetTop,l+=e.offsetLeft,H.support.doesNotAddBorder&&(!H.support.doesAddBorderForTableAndCells||!Tn.test(e.nodeName))&&(f+=parseFloat(r.borderTopWidth)||0,l+=parseFloat(r.borderLeftWidth)||0),s=i,i=e.offsetParent),H.support.subtractsBorderForOverflowNotVisible&&r.overflow!=="visible"&&(f+=parseFloat(r.borderTopWidth)||0,l+=parseFloat(r.borderLeftWidth)||0),a=r}if(a.position==="relative"||a.position==="static")f+=o.offsetTop,l+=o.offsetLeft;return H.support.fixedPosition&&a.position==="fixed"&&(f+=Math.max(n.scrollTop,o.scrollTop),l+=Math.max(n.scrollLeft,o.scrollLeft)),{top:f,left:l}},H.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){H.offset.setOffset(this,e,t)});var n=this[0],r=n&&n.ownerDocument;return r?n===r.body?H.offset.bodyOffset(n):xn(n,r,r.documentElement):null},H.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return H.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(H.css(e,"marginTop"))||0,n+=parseFloat(H.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=H.css(e,"position");r==="static"&&(e.style.position="relative");var i=H(e),s=i.offset(),o=H.css(e,"top"),u=H.css(e,"left"),a=(r==="absolute"||r==="fixed")&&H.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),H.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},H.fn.extend({position:function(){if(!this[0])return null;var e=this[0],t=this.offsetParent(),n=this.offset(),r=Nn.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(H.css(e,"marginTop"))||0,n.left-=parseFloat(H.css(e,"marginLeft"))||0,r.top+=parseFloat(H.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(H.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||_.body;while(e&&!Nn.test(e.nodeName)&&H.css(e,"position")==="static")e=e.offsetParent;return e})}}),H.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,r){var i=/Y/.test(r);H.fn[e]=function(s){return H.access(this,function(e,s,o){var u=n(e);if(o===t)return u?r in u?u[r]:H.support.boxModel&&u.document.documentElement[s]||u.document.body[s]:e[s];u?u.scrollTo(i?H(u).scrollLeft():o,i?o:H(u).scrollTop()):e[s]=o},e,s,arguments.length,null)}}),H.each({Height:"height",Width:"width"},function(e,n){var r="client"+e,i="scroll"+e,s="offset"+e;H.fn["inner"+e]=function(){var e=this[0];return e?e.style?parseFloat(H.css(e,n,"padding")):this[n]():null},H.fn["outer"+e]=function(e){var t=this[0];return t?t.style?parseFloat(H.css(t,n,e?"margin":"border")):this[n]():null},H.fn[n]=function(e){return H.access(this,function(e,n,o){var u,a,f,l;if(H.isWindow(e))return u=e.document,a=u.documentElement[r],H.support.boxModel&&a||u.body&&u.body[r]||a;if(e.nodeType===9)return u=e.documentElement,u[r]>=u[i]?u[r]:Math.max(e.body[i],u[i],e.body[s],u[s]);if(o===t)return f=H.css(e,n),l=parseFloat(f),H.isNumeric(l)?l:f;H(e).css(n,o)},n,e,arguments.length,null)}}),e.jQuery=e.$=H,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return H})})(window),function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=i.toString,l=i.hasOwnProperty,c=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,v=r.filter,m=r.every,g=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,E=Object.keys,S=s.bind,x=function(e){return e instanceof x?e:this instanceof x?(this._wrapped=e,void 0):new x(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):e._=x,x.VERSION="1.4.4";var T=x.each=x.forEach=function(e,t,r){if(null!=e)if(c&&e.forEach===c)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;s>i;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(x.has(e,o)&&t.call(r,e[o],o,e)===n)return};x.map=x.collect=function(e,t,n){var r=[];return null==e?r:h&&e.map===h?e.map(t,n):(T(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)};var N="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),p&&e.reduce===p)return r&&(t=x.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(T(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)}),!i)throw new TypeError(N);return n},x.reduceRight=x.foldr=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),d&&e.reduceRight===d)return r&&(t=x.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=x.keys(e);s=o.length}if(T(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)}),!i)throw new TypeError(N);return n},x.find=x.detect=function(e,t,n){var r;return C(e,function(e,i,s){return t.call(n,e,i,s)?(r=e,!0):void 0}),r},x.filter=x.select=function(e,t,n){var r=[];return null==e?r:v&&e.filter===v?e.filter(t,n):(T(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},x.reject=function(e,t,n){return x.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},x.every=x.all=function(e,t,r){t||(t=x.identity);var i=!0;return null==e?i:m&&e.every===m?e.every(t,r):(T(e,function(e,s,o){return(i=i&&t.call(r,e,s,o))?void 0:n}),!!i)};var C=x.some=x.any=function(e,t,r){t||(t=x.identity);var i=!1;return null==e?i:g&&e.some===g?e.some(t,r):(T(e,function(e,s,o){return i||(i=t.call(r,e,s,o))?n:void 0}),!!i)};x.contains=x.include=function(e,t){return null==e?!1:y&&e.indexOf===y?e.indexOf(t)!=-1:C(e,function(e){return e===t})},x.invoke=function(e,t){var n=u.call(arguments,2),r=x.isFunction(t);return x.map(e,function(e){return(r?t:e[t]).apply(e,n)})},x.pluck=function(e,t){return x.map(e,function(e){return e[t]})},x.where=function(e,t,n){return x.isEmpty(t)?n?null:[]:x[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},x.findWhere=function(e,t){return x.where(e,t,!0)},x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.max.apply(Math,e);if(!t&&x.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.min.apply(Math,e);if(!t&&x.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;r.computed>o&&(r={value:e,computed:o})}),r.value},x.shuffle=function(e){var t,n=0,r=[];return T(e,function(e){t=x.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return x.isFunction(e)?e:function(t){return t[e]}};x.sortBy=function(e,t,n){var r=k(t);return x.pluck(x.map(e,function(e,t,i){return{value:e
    ,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(r>n||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t||x.identity);return T(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};x.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(x.has(e,t)?e[t]:e[t]=[]).push(n)})},x.countBy=function(e,t,n){return L(e,t,n,function(e,t){x.has(e,t)||(e[t]=0),e[t]++})},x.sortedIndex=function(e,t,n,r){n=null==n?x.identity:k(n);for(var i=n.call(r,t),s=0,o=e.length;o>s;){var u=s+o>>>1;i>n.call(r,e[u])?s=u+1:o=u}return s},x.toArray=function(e){return e?x.isArray(e)?u.call(e):e.length===+e.length?x.map(e,x.identity):x.values(e):[]},x.size=function(e){return null==e?0:e.length===+e.length?e.length:x.keys(e).length},x.first=x.head=x.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:u.call(e,0,t)},x.initial=function(e,t,n){return u.call(e,0,e.length-(null==t||n?1:t))},x.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:u.call(e,Math.max(e.length-t,0))},x.rest=x.tail=x.drop=function(e,t,n){return u.call(e,null==t||n?1:t)},x.compact=function(e){return x.filter(e,x.identity)};var A=function(e,t,n){return T(e,function(e){x.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n};x.flatten=function(e,t){return A(e,t,[])},x.without=function(e){return x.difference(e,u.call(arguments,1))},x.uniq=x.unique=function(e,t,n,r){x.isFunction(t)&&(r=n,n=t,t=!1);var i=n?x.map(e,n,r):e,s=[],o=[];return T(i,function(n,r){(t?r&&o[o.length-1]===n:x.contains(o,n))||(o.push(n),s.push(e[r]))}),s},x.union=function(){return x.uniq(a.apply(r,arguments))},x.intersection=function(e){var t=u.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.indexOf(t,e)>=0})})},x.difference=function(e){var t=a.apply(r,u.call(arguments,1));return x.filter(e,function(e){return!x.contains(t,e)})},x.zip=function(){for(var e=u.call(arguments),t=x.max(x.pluck(e,"length")),n=Array(t),r=0;t>r;r++)n[r]=x.pluck(e,""+r);return n},x.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},x.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=x.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;i>r;r++)if(e[r]===t)return r;return-1},x.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=r?n:e.length;i--;)if(e[i]===t)return i;return-1},x.range=function(e,t,n){1>=arguments.length&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=Array(r);r>i;)s[i++]=e,e+=n;return s},x.bind=function(e,t){if(e.bind===S&&S)return S.apply(e,u.call(arguments,1));var n=u.call(arguments,2);return function(){return e.apply(t,n.concat(u.call(arguments)))}},x.partial=function(e){var t=u.call(arguments,1);return function(){return e.apply(this,t.concat(u.call(arguments)))}},x.bindAll=function(e){var t=u.call(arguments,1);return 0===t.length&&(t=x.functions(e)),T(t,function(t){e[t]=x.bind(e[t],e)}),e},x.memoize=function(e,t){var n={};return t||(t=x.identity),function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},x.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=function(e){return x.delay.apply(x,[e,1].concat(u.call(arguments,1)))},x.throttle=function(e,t){var n,r,i,s,o=0,u=function(){o=new Date,i=null,s=e.apply(n,r)};return function(){var a=new Date,f=t-(a-o);return n=this,r=arguments,0>=f?(clearTimeout(i),i=null,o=a,s=e.apply(n,r)):i||(i=setTimeout(u,f)),s}},x.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},x.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},x.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},x.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},x.after=function(e,t){return 0>=e?t():function(){return 1>--e?t.apply(this,arguments):void 0}},x.keys=E||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)x.has(e,n)&&(t[t.length]=n);return t},x.values=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push(e[n]);return t},x.pairs=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push([n,e[n]]);return t},x.invert=function(e){var t={};for(var n in e)x.has(e,n)&&(t[e[n]]=n);return t},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},x.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return T(n,function(n){n in e&&(t[n]=e[n])}),t},x.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)x.contains(n,i)||(t[i]=e[i]);return t},x.defaults=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)null==e[n]&&(e[n]=t[n])}),e},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e};var O=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof x&&(e=e._wrapped),t instanceof x&&(t=t._wrapped);var i=f.call(e);if(i!=f.call(t))return!1;switch(i){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var s=n.length;s--;)if(n[s]==e)return r[s]==t;n.push(e),r.push(t);var o=0,u=!0;if("[object Array]"==i){if(o=e.length,u=o==t.length)for(;o--&&(u=O(e[o],t[o],n,r)););}else{var a=e.constructor,l=t.constructor;if(a!==l&&!(x.isFunction(a)&&a instanceof a&&x.isFunction(l)&&l instanceof l))return!1;for(var c in e)if(x.has(e,c)&&(o++,!(u=x.has(t,c)&&O(e[c],t[c],n,r))))break;if(u){for(c in t)if(x.has(t,c)&&!(o--))break;u=!o}}return n.pop(),r.pop(),u};x.isEqual=function(e,t){return O(e,t,[],[])},x.isEmpty=function(e){if(null==e)return!0;if(x.isArray(e)||x.isString(e))return 0===e.length;for(var t in e)if(x.has(e,t))return!1;return!0},x.isElement=function(e){return!!e&&1===e.nodeType},x.isArray=w||function(e){return"[object Array]"==f.call(e)},x.isObject=function(e){return e===Object(e)},T(["Arguments","Function","String","Number","Date","RegExp"],function(e){x["is"+e]=function(t){return f.call(t)=="[object "+e+"]"}}),x.isArguments(arguments)||(x.isArguments=function(e){return!!e&&!!x.has(e,"callee")}),"function"!=typeof /./&&(x.isFunction=function(e){return"function"==typeof e}),x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},x.isNaN=function(e){return x.isNumber(e)&&e!=+e},x.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==f.call(e)},x.isNull=function(e){return null===e},x.isUndefined=function(e){return e===void 0},x.has=function(e,t){return l.call(e,t)},x.noConflict=function(){return e._=t,this},x.identity=function(e){return e},x.times=function(e,t,n){for(var r=Array(e),i=0;e>i;i++)r[i]=t.call(n,i);return r},x.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=x.invert(M.escape);var _={escape:RegExp("["+x.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+x.keys(M.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(e){x[e]=function(t){return null==t?"":(""+t).replace(_[e],function(t){return M[e][t]})}}),x.result=function(e,t){if(null==e)return null;var n=e[t];return x.isFunction(n)?n.call(e):n},x.mixin=function(e){T(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),j.call(this,n.apply(x,e))}})};var D=0;x.uniqueId=function(e){var t=++D+"";return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(e,t,n){var r;n=x.defaults({},n,x.templateSettings);var i=RegExp([(n.escape||P).source,(n.interpolate||P).source,(n.evaluate||P).source].join("|")+"|$","g"),s=0,o="__p+='";e.replace(i,function(t,n,r,i,u){return o+=e.slice(s,u).replace(B,function(e){return"\\"+H[e]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),s=u+t.length,t}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=Function(n.variable||"obj","_",o)}catch(u){throw u.source=o,u}if(t)return r(t,x);var a=function(e){return r.call(this,e,x)};return a.source="function("+(n.variable||"obj")+"){\n"+o+"}",a},x.chain=function(e){return x(e).chain()};var j=function(e){return this._chain?x(e).chain():e};x.mixin(x),T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];x.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],j.call(this,n)}}),T(["concat","join","slice"],function(e){var t=r[e];x.prototype[e]=function(){return j.call(this,t.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(){var e=this,t=e.Backbone,n=Array.prototype.slice,r=Array.prototype.splice,i;typeof exports!="undefined"?i=exports:i=e.Backbone={},i.VERSION="0.9.2";var s=e._;!s&&typeof require!="undefined"&&(s=require("underscore"));var o=e.jQuery||e.Zepto||e.ender;i.setDomLibrary=function(e){o=e},i.noConflict=function(){return e.Backbone=t,this},i.emulateHTTP=!1,i.emulateJSON=!1;var u=/\s+/,a=i.Events={on:function(e,t,n){var r,i,s,o,a;if(!t)return this;e=e.split(u),r=this._callbacks||(this._callbacks={});while(i=e.shift())a=r[i],s=a?a.tail:{},s.next=o={},s.context=n,s.callback=t,r[i]={tail:o,next:a?a.next:s};return this},off:function(e,t,n){var r,i,o,a,f,l;if(!(i=this._callbacks))return;if(!(e||t||n))return delete this._callbacks,this;e=e?e.split(u):s.keys(i);while(r=e.shift()){o=i[r],delete i[r];if(!o||!t&&!n)continue;a=o.tail;while((o=o.next)!==a)f=o.callback,l=o.context,(t&&f!==t||n&&l!==n)&&this.on(r,f,l)}return this},trigger:function(e){var t,r,i,s,o,a,f;if(!(i=this._callbacks))return this;a=i.all,e=e.split(u),f=n.call(arguments,1);while(t=e.shift()){if(r=i[t]){s=r.tail;while((r=r.next)!==s)r.callback.apply(r.context||this,f)}if(r=a){s=r.tail,o=[t].concat(f);while((r=r.next)!==s)r.callback.apply(r.context||this,o)}}return this}};a.bind=a.on,a.unbind=a.off;var f=i.Model=function(e,t){var n;e||(e={}),t&&t.parse&&(e=this.parse(e));if(n=C(this,"defaults"))e=s.extend({},n,e);t&&t.collection&&(this.collection=t.collection),this.attributes={},this._escapedAttributes={},this.cid=s.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(e,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=s.clone(this.attributes),this.initialize.apply(this,arguments)};s.extend(f.prototype,a,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return s.clone(this.attributes)},get:function(e){return this.attributes[e]},escape:function(e){var t;if(t=this._escapedAttributes[e])return t;var n=this.get(e);return this._escapedAttributes[e]=s.escape(n==null?"":""+n)},has:function(e){return this.get(e)!=null},set:function(e,t,n){var r,i,o;s.isObject(e)||e==null?(r=e,n=t):(r={},r[e]=t),n||(n={});if(!r)return this;r instanceof f&&(r=r.attributes);if(n.unset)for(i in r)r[i]=void 0;if(!this._validate(r,n))return!1;this.idAttribute in r&&(this.id=r[this.idAttribute]);var u=n.changes={},a=this.attributes,l=this._escapedAttributes,c=this._previousAttributes||{};for(i in r){o=r[i];if(!s.isEqual(a[i],o)||n.unset&&s.has(a,i))delete l[i],(n.silent?this._silent:u)[i]=!0;n.unset?delete a[i]:a[i]=o,!s.isEqual(c[i],o)||s.has(a,i)!=s.has(c,i)?(this.changed[i]=o,n.silent||(this._pending[i]=!0)):(delete this.changed[i],delete this._pending[i])}return n.silent||this.change(n),this},unset:function(e,t){return(t||(t={})).unset=!0,this.set(e,null,t)},clear:function(e){return(e||(e={})).unset=!0,this.set(s.clone(this.attributes),e)},fetch:function(e){e=e?s.clone(e):{};var t=this,n=e.success;return e.success=function(r,i,s){if(!t.set(t.parse(r,s),e))return!1;n&&n(t,r)},e.error=i.wrapError(e.error,t,e),(this.sync||i.sync).call(this,"read",this,e)},save:function(e,t,n){var r,o;s.isObject(e)||e==null?(r=e,n=t):(r={},r[e]=t),n=n?s.clone(n):{};if(n.wait){if(!this._validate(r,n))return!1;o=s.clone(this.attributes)}var u=s.extend({},n,{silent:!0});if(r&&!this.set(r,n.wait?u:n))return!1;var a=this,f=n.success;n.success=function(e,t,i){var o=a.parse(e,i);n.wait&&(delete n.wait,o=s.extend(r||{},o));if(!a.set(o,n))return!1;f?f(a,e):a.trigger("sync",a,e,n)},n.error=i.wrapError(n.error,a,n);var l=this.isNew()?"create":"update",c=(this.sync||i.sync).call(this,l,this,n);return n.wait&&this.set(o,u),c},destroy:function(e){e=e?s.clone(e):{};var t=this,n=e.success,r=function(){t.trigger("destroy",t,t.collection,e)};if(this.isNew())return r(),!1;e.success=function(i){e.wait&&r(),n?n(t,i):t.trigger("sync",t,i,e)},e.error=i.wrapError(e.error,t,e);var o=(this.sync||i.sync).call(this,"delete",this,e);return e.wait||r(),o},url:function(){var e=C(this,"urlRoot")||C(this.collection,"url")||k();return this.isNew()?e:e+(e.charAt(e.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},change:function(e){e||(e={});var t=this._changing;this._changing=!0;for(var n in this._silent)this._pending[n]=!0;var r=s.extend({},e.changes,this._silent);this._silent={};for(var n in r)this.trigger("change:"+n,this,this.get(n),e);if(t)return this;while(!s.isEmpty(this._pending)){this._pending={},this.trigger("change",this,e);for(var n in this.changed){if(this._pending[n]||this._silent[n])continue;delete this.changed[n]}this._previousAttributes=s.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(e){return arguments.length?s.has(this.changed,e):!s.isEmpty(this.changed)},changedAttributes:function(e){if(!e)return this.hasChanged()?s.clone(this.changed):!1;var t,n=!1,r=this._previousAttributes;for(var i in e){if(s.isEqual(r[i],t=e[i]))continue;(n||(n={}))[i]=t}return n},previous:function(e){return!arguments.length||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return s.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(e,t){if(t.silent||!this.validate)return!0;e=s.extend({},this.attributes,e);var n=this.validate(e,t);return n?(t&&t.error?t.error(this,n,t):this.trigger("error",this,n,t),!1):!0}});var l=i.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,{silent:!0,parse:t.parse})};s.extend(l.prototype,a,{model:f,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},add:function(e,t){var n,i,o,u,a,f,l={},c={},h=[];t||(t={}),e=s.isArray(e)?e.slice():[e];for(n=0,o=e.length;n<o;n++){if(!(u=e[n]=this._prepareModel(e[n],t)))throw new Error("Can't add an invalid model to a collection");a=u.cid,f=u.id;if(l[a]||this._byCid[a]||f!=null&&(c[f]||this._byId[f])){h.push(n);continue}l[a]=c[f]=u}n=h.length;while(n--)e.splice(h[n],1);for(n=0,o=e.length;n<o;n++)(u=e[n]).on("all",this._onModelEvent,this),this._byCid[u.cid]=u,u.id!=null&&(this._byId[u.id]=u);this.length+=o,i=t.at!=null?t.at:this.models.length,r.apply(this.models,[i,0].concat(e)),this.comparator&&this.sort({silent:!0});if(t.silent)return this;for(n=0,o=this.models.length;n<o;n++){if(!l[(u=this.models[n]).cid])continue;t.index=n,u.trigger("add",u,this,t)}return this},remove:function(e,t){var n,r,i,o;t||(t={}),e=s.isArray(e)?e.slice():[e];for(n=0,r=e.length;n<r;n++){o=this.getByCid(e[n])||this.get(e[n]);if(!o)continue;delete this._byId[o.id],delete this._byCid[o.cid],i=this.indexOf(o),this.models.splice(i,1),this.length--,t.silent||(t.index=i,o.trigger("remove",o,this,t)),this._removeReference(o)}return this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,t),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,s.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},get:function(e){return e==null?void 0:this._byId[e.id!=null?e.id:e]},getByCid:function(e){return e&&this._byCid[e.cid||e]},at:function(e){return this.models[e]},where:function(e){return s.isEmpty(e)?[]:this.filter(function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},sort:function(e){e||(e={});if(!this.comparator)throw new Error("Cannot sort a set without a comparator");var t=s.bind(this.comparator,this);return this.comparator.length==1?this.models=this.sortBy(t):this.models.sort(t),e.silent||this.trigger("reset",this,e),this},pluck:function(e){return s.map(this.models,function(t){return t.get(e)})},reset:function(e,t){e||(e=[]),t||(t={});for(var n=0,r=this.models.length;n<r;n++)this._removeReference(this.models[n]);return this._reset(),this.add(e,s.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},fetch:function(e){e=e?s.clone(e):{},e.parse===undefined&&(e.parse=!0);var t=this,n=e.success;return e.success=function(r,i,s){t[e.add?"add":"reset"](t.parse(r,s),e),n&&n(t,r)},e.error=i.wrapError(e.error,t,e),(this.sync||i.sync).call(this,"read",this,e)},create:function(e,t){var n=this;t=t?s.clone(t):{},e=this._prepareModel(e,t);if(!e)return!1;t.wait||n.add(e,t);var r=t.success;return t.success=function(i,s,o){t.wait&&n.add(i,t),r?r(i,s):i.trigger("sync",e,s,t)},e.save(null,t),e},parse:function(e,t){return e},chain:function(){return s(this.models).chain()},_reset:function(e){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(e,t){t||(t={});if(e instanceof f)e.collection||(e.collection=this);else{var n=e;t.collection=this,e=new this.model(n,t),e._validate(e.attributes,t)||(e=!1)}return e},_removeReference:function(e){this==e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e=="add"||e=="remove")&&n!=this)return;e=="destroy"&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],this._byId[t.id]=t),this.trigger.apply(this,arguments)}});var c=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];s.each(c,function(e){l.prototype[e]=function(){return s[e].apply(s,[this.models].concat(s.toArray(arguments)))}});var h=i.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},p=/:\w+/g,d=/\*\w+/g,v=/[-[\]{}()+?.,\\^$|#\s]/g;s.extend(h.prototype,a,{initialize:function(){},route:function(e,t,n){return i.history||(i.history=new m),s.isRegExp(e)||(e=this._routeToRegExp(e)),n||(n=this[t]),i.history.route(e,s.bind(function(r){var s=this._extractParameters(e,r);n&&n.apply(this,s),this.trigger.apply(this,["route:"+t].concat(s)),i.history.trigger("route",this,t,s)},this)),this},navigate:function(e,t){i.history.navigate(e,t)},_bindRoutes:function(){if(!this.routes)return;var e=[];for(var t in this.routes)e.unshift([t,this.routes[t]]);for(var n=0,r=e.length;n<r;n++)this.route(e[n][0],e[n][1],this[e[n][1]])},_routeToRegExp:function(e){return e=e.replace(v,"\\$&").replace(p,"([^/]+)").replace(d,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){return e.exec(t).slice(1)}});var m=i.History=function(){this.handlers=[],s.bindAll(this,"checkUrl")},g=/^[#\/]/,y=/msie [\w.]+/;m.started=!1,s.extend(m.prototype,a,{interval:50,getHash:function(e){var t=e?e.location:window.location,n=t.href.match(/#(.*)$/);return n?n[1]:""},getFragment:function(e,t){if(e==null)if(this._hasPushState||t){e=window.location.pathname;var n=window.location.search;n&&(e+=n)}else e=this.getHash();return e.indexOf(this.options.root)||(e=e.substr(this.options.root.length)),e.replace(g,"")},start:function(e){if(m.started)throw new Error("Backbone.history has already been started");m.started=!0,this.options=s.extend({},{root:"/"},this.options,e),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var t=this.getFragment(),n=document.documentMode,r=y.exec(navigator.userAgent.toLowerCase())&&(!n||n<=7);r&&(this.iframe=o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(t)),this._hasPushState?o(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?o(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=t;var i=window.location,u=i.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!u)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&u&&i.hash&&(this.fragment=this.getHash().replace(g,""),window.history.replaceState({},document.title,i.protocol+"//"+i.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},stop:function(){o(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),m.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();t==this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)));if(t==this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(e){var t=this.fragment=this.getFragment(e),n=s.any(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0});return n},navigate:function(e,t){if(!m.started)return!1;if(!t||t===!0)t={trigger:t};var n=(e||"").replace(g,"");if(this.fragment==n)return;this._hasPushState?(n.indexOf(this.options.root)!=0&&(n=this.options.root+n),this.fragment=n,window.history[t.replace?"replaceState":"pushState"]({},document.title,n)):this._wantsHashChange?(this.fragment=n,this._updateHash(window.location,n,t.replace),this.iframe&&n!=this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,n,t.replace))):window.location.assign(this.options.root+e),t.trigger&&this.loadUrl(e)},_updateHash:function(e,t,n){n?e.replace(e.toString().replace(/(javascript:|#).*$/,"")+"#"+t):e.hash=t}});var b=i.View=function(e){this.cid=s.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},w=/^(\S+)\s*(.*)$/,E=["model","collection","el","id","attributes","className","tagName"];s.extend(b.prototype,a,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(e,t,n){var r=document.createElement(e);return t&&o(r).attr(t),n&&o(r).html(n),r},setElement:function(e,t){return this.$el&&this.undelegateEvents(),this.$el=e instanceof o?e:o(e),this.el=this.$el[0],t!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=C(this,"events")))return;this.undelegateEvents();for(var t in e){var n=e[t];s.isFunction(n)||(n=this[e[t]]);if(!n)throw new Error('Method "'+e[t]+'" does not exist');var r=t.match(w),i=r[1],o=r[2];n=s.bind(n,this),i+=".delegateEvents"+this.cid,o===""?this.$el.bind(i,n):this.$el.delegate(o,i,n)}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(e){this.options&&(e=s.extend({},this.options,e));for(var t=0,n=E.length;t<n;t++){var r=E[t];e[r]&&(this[r]=e[r])}this.options=e},_ensureElement:function(){if(!this.el){var e=C(this,"attributes")||{};this.id&&(e.id=this.id),this.className&&(e["class"]=this.className),this.setElement(this.make(this.tagName,e),!1)}else this.setElement(this.el,!1)}});var S=function(e,t){var n=N(this,e,t);return n.extend=this.extend,n};f.extend=l.extend=h.extend=b.extend=S;var x={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};i.sync=function(e,t,n){var r=x[e];n||(n={});var u={type:r,dataType:"json"};return n.url||(u.url=C(t,"url")||k()),!n.data&&t&&(e=="create"||e=="update")&&(u.contentType="application/json",u.data=JSON.stringify(t.toJSON())),i.emulateJSON&&(u.contentType="application/x-www-form-urlencoded",u.data=u.data?{model:u.data}:{}),i.emulateHTTP&&(r==="PUT"||r==="DELETE")&&(i.emulateJSON&&(u.data._method=r),u.type="POST",u.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",r)}),u.type!=="GET"&&!i.emulateJSON&&(u.processData=!1),o.ajax(s.extend(u,n))},i.wrapError=function(e,t,n){return function(r,i){i=r===t?i:r,e?e(t,i,n):t.trigger("error",t,i,n)}};var T=function(){},N=function(e,t,n){var r;return t&&t.hasOwnProperty("constructor")?r=t.constructor:r=function(){e.apply(this,arguments)},s.extend(r,e),T.prototype=e.prototype,r.prototype=new T,t&&s.extend(r.prototype,t),n&&s.extend(r,n),r.prototype.constructor=r,r.__super__=e.prototype,r},C=function(e,t){return!e||!e[t]?null:s.isFunction(e[t])?e[t]():e[t]},k=function(){throw new Error('A "url" property or function must be specified')}}.call(this),function(e,t,n){var r=e.L,i={};i.version="0.7.3",typeof module=="object"&&typeof module.exports=="object"?module.exports=i:typeof define=="function"&&define.amd&&define(i),i.noConflict=function(){return e.L=r,this},e.L=i,i.Util={extend:function(e){var t=Array.prototype.slice.call(arguments,1),n,r,i,s;for(r=0,i=t.length;r<i;r++){s=t[r]||{};for(n in s)s.hasOwnProperty(n)&&(e[n]=s[n])}return e},bind:function(e,t){var n=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return e.apply(t,n||arguments)}},stamp:function(){var e=0,t="_leaflet_id";return function(n){return n[t]=n[t]||++e,n[t]}}(),invokeEach:function(e,t,n){var r,i;if(typeof e=="object"){i=Array.prototype.slice.call(arguments,3);for(r in e)t.apply(n,[r,e[r]].concat(i));return!0}return!1},limitExecByInterval:function(e,t,n){var r,i;return function s(){var o=arguments;if(r){i=!0;return}r=!0,setTimeout(function(){r=!1,i&&(s.apply(n,o),i=!1)},t),e.apply(n,o)}},falseFn:function(){return!1},formatNum:function(e,t){var n=Math.pow(10,t||5);return Math.round(e*n)/n},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},splitWords:function(e){return i.Util.trim(e).split(/\s+/)},setOptions:function(e,t){return e.options=i.extend({},e.options,t),e.options},getParamString:function(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+"="+encodeURIComponent(e[i]));return(!t||t.indexOf("?")===-1?"?":"&")+r.join("&")},template:function(e,t){return e.replace(/\{ *([\w_]+) *\}/g,function(e,r){var i=t[r];if(i===n)throw new Error("No value provided for variable "+e);return typeof i=="function"&&(i=i(t)),i})},isArray:Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function t(t){var n,r,i=["webkit","moz","o","ms"];for(n=0;n<i.length&&!r;n++)r=e[i[n]+t];return r}function r(t){var r=+(new Date),i=Math.max(0,16-(r-n));return n=r+i,e.setTimeout(t,i)}var n=0,s=e.requestAnimationFrame||t("RequestAnimationFrame")||r,o=e.cancelAnimationFrame||t("CancelAnimationFrame")||t("CancelRequestAnimationFrame")||function(t){e.clearTimeout(t)};i.Util.requestAnimFrame=function(t,n,o,u){t=i.bind(t,n);if(!o||s!==r)return s.call(e,t,u);t()},i.Util.cancelAnimFrame=function(t){t&&o.call(e,t)}}(),i.extend=i.Util.extend,i.bind=i.Util.bind,i.stamp=i.Util.stamp,i.setOptions=i.Util.setOptions,i.Class=function(){},i.Class.extend=function(e){var t=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},n=function(){};n.prototype=this.prototype;var r=new n;r.constructor=t,t.prototype=r;for(var s in this)this.hasOwnProperty(s)&&s!=="prototype"&&(t[s]=this[s]);e.statics&&(i.extend(t,e.statics),delete e.statics),e.includes&&(i.Util.extend.apply(null,[r].concat(e.includes)),delete e.includes),e.options&&r.options&&(e.options=i.extend({},r.options,e.options)),i.extend(r,e),r._initHooks=[];var o=this;return t.__super__=o.prototype,r.callInitHooks=function(){if(this._initHooksCalled)return;o.prototype.callInitHooks&&o.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=r._initHooks.length;e<t;e++)r._initHooks[e].call(this)},t},i.Class.include=function(e){i.extend(this.prototype,e)},i.Class.mergeOptions=function(e){i.extend(this.prototype.options,e)},i.Class
    .addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e=="function"?e:function(){this[e].apply(this,t)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n)};var s="_leaflet_events";i.Mixin={},i.Mixin.Events={addEventListener:function(e,t,n){if(i.Util.invokeEach(e,this.addEventListener,this,t,n))return this;var r=this[s]=this[s]||{},o=n&&n!==this&&i.stamp(n),u,a,f,l,c,h,p;e=i.Util.splitWords(e);for(u=0,a=e.length;u<a;u++)f={action:t,context:n||this},l=e[u],o?(c=l+"_idx",h=c+"_len",p=r[c]=r[c]||{},p[o]||(p[o]=[],r[h]=(r[h]||0)+1),p[o].push(f)):(r[l]=r[l]||[],r[l].push(f));return this},hasEventListeners:function(e){var t=this[s];return!!t&&(e in t&&t[e].length>0||e+"_idx"in t&&t[e+"_idx_len"]>0)},removeEventListener:function(e,t,n){if(!this[s])return this;if(!e)return this.clearAllEventListeners();if(i.Util.invokeEach(e,this.removeEventListener,this,t,n))return this;var r=this[s],o=n&&n!==this&&i.stamp(n),u,a,f,l,c,h,p,d,v;e=i.Util.splitWords(e);for(u=0,a=e.length;u<a;u++){f=e[u],h=f+"_idx",p=h+"_len",d=r[h];if(!t)delete r[f],delete r[h],delete r[p];else{l=o&&d?d[o]:r[f];if(l){for(c=l.length-1;c>=0;c--)l[c].action===t&&(!n||l[c].context===n)&&(v=l.splice(c,1),v[0].action=i.Util.falseFn);n&&d&&l.length===0&&(delete d[o],r[p]--)}}}return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(e,t){if(!this.hasEventListeners(e))return this;var n=i.Util.extend({},t,{type:e,target:this}),r=this[s],o,u,a,f,l;if(r[e]){o=r[e].slice();for(u=0,a=o.length;u<a;u++)o[u].action.call(o[u].context,n)}f=r[e+"_idx"];for(l in f){o=f[l].slice();if(o)for(u=0,a=o.length;u<a;u++)o[u].action.call(o[u].context,n)}return this},addOneTimeEventListener:function(e,t,n){if(i.Util.invokeEach(e,this.addOneTimeEventListener,this,t,n))return this;var r=i.bind(function(){this.removeEventListener(e,t,n).removeEventListener(e,r,n)},this);return this.addEventListener(e,t,n).addEventListener(e,r,n)}},i.Mixin.Events.on=i.Mixin.Events.addEventListener,i.Mixin.Events.off=i.Mixin.Events.removeEventListener,i.Mixin.Events.once=i.Mixin.Events.addOneTimeEventListener,i.Mixin.Events.fire=i.Mixin.Events.fireEvent,function(){var r="ActiveXObject"in e,s=r&&!t.addEventListener,o=navigator.userAgent.toLowerCase(),u=o.indexOf("webkit")!==-1,a=o.indexOf("chrome")!==-1,f=o.indexOf("phantom")!==-1,l=o.indexOf("android")!==-1,c=o.search("android [23]")!==-1,h=o.indexOf("gecko")!==-1,p=typeof orientation!=n+"",d=e.navigator&&e.navigator.msPointerEnabled&&e.navigator.msMaxTouchPoints&&!e.PointerEvent,v=e.PointerEvent&&e.navigator.pointerEnabled&&e.navigator.maxTouchPoints||d,m="devicePixelRatio"in e&&e.devicePixelRatio>1||"matchMedia"in e&&e.matchMedia("(min-resolution:144dpi)")&&e.matchMedia("(min-resolution:144dpi)").matches,g=t.documentElement,y=r&&"transition"in g.style,b="WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix&&!c,w="MozPerspective"in g.style,E="OTransition"in g.style,S=!e.L_DISABLE_3D&&(y||b||w||E)&&!f,x=!e.L_NO_TOUCH&&!f&&function(){var e="ontouchstart";if(v||e in g)return!0;var n=t.createElement("div"),r=!1;return n.setAttribute?(n.setAttribute(e,"return;"),typeof n[e]=="function"&&(r=!0),n.removeAttribute(e),n=null,r):!1}();i.Browser={ie:r,ielt9:s,webkit:u,gecko:h&&!u&&!e.opera&&!r,android:l,android23:c,chrome:a,ie3d:y,webkit3d:b,gecko3d:w,opera3d:E,any3d:S,mobile:p,mobileWebkit:p&&u,mobileWebkit3d:p&&b,mobileOpera:p&&e.opera,touch:x,msPointer:d,pointer:v,retina:m}}(),i.Point=function(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t},i.Point.prototype={clone:function(){return new i.Point(this.x,this.y)},add:function(e){return this.clone()._add(i.point(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(i.point(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(e){e=i.point(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=i.point(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=i.point(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return"Point("+i.Util.formatNum(this.x)+", "+i.Util.formatNum(this.y)+")"}},i.point=function(e,t,r){return e instanceof i.Point?e:i.Util.isArray(e)?new i.Point(e[0],e[1]):e===n||e===null?e:new i.Point(e,t,r)},i.Bounds=function(e,t){if(!e)return;var n=t?[e,t]:e;for(var r=0,i=n.length;r<i;r++)this.extend(n[r])},i.Bounds.prototype={extend:function(e){return e=i.point(e),!this.min&&!this.max?(this.min=e.clone(),this.max=e.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(e.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(e.y,this.max.y)),this},getCenter:function(e){return new i.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return new i.Point(this.min.x,this.max.y)},getTopRight:function(){return new i.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return typeof e[0]=="number"||e instanceof i.Point?e=i.point(e):e=i.bounds(e),e instanceof i.Bounds?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=i.bounds(e);var t=this.min,n=this.max,r=e.min,s=e.max,o=s.x>=t.x&&r.x<=n.x,u=s.y>=t.y&&r.y<=n.y;return o&&u},isValid:function(){return!!this.min&&!!this.max}},i.bounds=function(e,t){return!e||e instanceof i.Bounds?e:new i.Bounds(e,t)},i.Transformation=function(e,t,n,r){this._a=e,this._b=t,this._c=n,this._d=r},i.Transformation.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t=t||1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t=t||1,new i.Point((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}},i.DomUtil={get:function(e){return typeof e=="string"?t.getElementById(e):e},getStyle:function(e,n){var r=e.style[n];!r&&e.currentStyle&&(r=e.currentStyle[n]);if((!r||r==="auto")&&t.defaultView){var i=t.defaultView.getComputedStyle(e,null);r=i?i[n]:null}return r==="auto"?null:r},getViewportOffset:function(e){var n=0,r=0,s=e,o=t.body,u=t.documentElement,a;do{n+=s.offsetTop||0,r+=s.offsetLeft||0,n+=parseInt(i.DomUtil.getStyle(s,"borderTopWidth"),10)||0,r+=parseInt(i.DomUtil.getStyle(s,"borderLeftWidth"),10)||0,a=i.DomUtil.getStyle(s,"position");if(s.offsetParent===o&&a==="absolute")break;if(a==="fixed"){n+=o.scrollTop||u.scrollTop||0,r+=o.scrollLeft||u.scrollLeft||0;break}if(a==="relative"&&!s.offsetLeft){var f=i.DomUtil.getStyle(s,"width"),l=i.DomUtil.getStyle(s,"max-width"),c=s.getBoundingClientRect();if(f!=="none"||l!=="none")r+=c.left+s.clientLeft;n+=c.top+(o.scrollTop||u.scrollTop||0);break}s=s.offsetParent}while(s);s=e;do{if(s===o)break;n-=s.scrollTop||0,r-=s.scrollLeft||0,s=s.parentNode}while(s);return new i.Point(r,n)},documentIsLtr:function(){return i.DomUtil._docIsLtrCached||(i.DomUtil._docIsLtrCached=!0,i.DomUtil._docIsLtr=i.DomUtil.getStyle(t.body,"direction")==="ltr"),i.DomUtil._docIsLtr},create:function(e,n,r){var i=t.createElement(e);return i.className=n,r&&r.appendChild(i),i},hasClass:function(e,t){if(e.classList!==n)return e.classList.contains(t);var r=i.DomUtil._getClass(e);return r.length>0&&(new RegExp("(^|\\s)"+t+"(\\s|$)")).test(r)},addClass:function(e,t){if(e.classList!==n){var r=i.Util.splitWords(t);for(var s=0,o=r.length;s<o;s++)e.classList.add(r[s])}else if(!i.DomUtil.hasClass(e,t)){var u=i.DomUtil._getClass(e);i.DomUtil._setClass(e,(u?u+" ":"")+t)}},removeClass:function(e,t){e.classList!==n?e.classList.remove(t):i.DomUtil._setClass(e,i.Util.trim((" "+i.DomUtil._getClass(e)+" ").replace(" "+t+" "," ")))},_setClass:function(e,t){e.className.baseVal===n?e.className=t:e.className.baseVal=t},_getClass:function(e){return e.className.baseVal===n?e.className:e.className.baseVal},setOpacity:function(e,t){if("opacity"in e.style)e.style.opacity=t;else if("filter"in e.style){var n=!1,r="DXImageTransform.Microsoft.Alpha";try{n=e.filters.item(r)}catch(i){if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=" progid:"+r+"(opacity="+t+")"}},testProp:function(e){var n=t.documentElement.style;for(var r=0;r<e.length;r++)if(e[r]in n)return e[r];return!1},getTranslateString:function(e){var t=i.Browser.webkit3d,n="translate"+(t?"3d":"")+"(",r=(t?",0":"")+")";return n+e.x+"px,"+e.y+"px"+r},getScaleString:function(e,t){var n=i.DomUtil.getTranslateString(t.add(t.multiplyBy(-1*e))),r=" scale("+e+") ";return n+r},setPosition:function(e,t,n){e._leaflet_pos=t,!n&&i.Browser.any3d?e.style[i.DomUtil.TRANSFORM]=i.DomUtil.getTranslateString(t):(e.style.left=t.x+"px",e.style.top=t.y+"px")},getPosition:function(e){return e._leaflet_pos}},i.DomUtil.TRANSFORM=i.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),i.DomUtil.TRANSITION=i.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),i.DomUtil.TRANSITION_END=i.DomUtil.TRANSITION==="webkitTransition"||i.DomUtil.TRANSITION==="OTransition"?i.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in t)i.extend(i.DomUtil,{disableTextSelection:function(){i.DomEvent.on(e,"selectstart",i.DomEvent.preventDefault)},enableTextSelection:function(){i.DomEvent.off(e,"selectstart",i.DomEvent.preventDefault)}});else{var n=i.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);i.extend(i.DomUtil,{disableTextSelection:function(){if(n){var e=t.documentElement.style;this._userSelect=e[n],e[n]="none"}},enableTextSelection:function(){n&&(t.documentElement.style[n]=this._userSelect,delete this._userSelect)}})}i.extend(i.DomUtil,{disableImageDrag:function(){i.DomEvent.on(e,"dragstart",i.DomEvent.preventDefault)},enableImageDrag:function(){i.DomEvent.off(e,"dragstart",i.DomEvent.preventDefault)}})}(),i.LatLng=function(e,t,r){e=parseFloat(e),t=parseFloat(t);if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=e,this.lng=t,r!==n&&(this.alt=parseFloat(r))},i.extend(i.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),i.LatLng.prototype={equals:function(e){if(!e)return!1;e=i.latLng(e);var t=Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng));return t<=i.LatLng.MAX_MARGIN},toString:function(e){return"LatLng("+i.Util.formatNum(this.lat,e)+", "+i.Util.formatNum(this.lng,e)+")"},distanceTo:function(e){e=i.latLng(e);var t=6378137,n=i.LatLng.DEG_TO_RAD,r=(e.lat-this.lat)*n,s=(e.lng-this.lng)*n,o=this.lat*n,u=e.lat*n,a=Math.sin(r/2),f=Math.sin(s/2),l=a*a+f*f*Math.cos(o)*Math.cos(u);return t*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))},wrap:function(e,t){var n=this.lng;return e=e||-180,t=t||180,n=(n+t)%(t-e)+(n<e||n===t?t:e),new i.LatLng(this.lat,n)}},i.latLng=function(e,t){return e instanceof i.LatLng?e:i.Util.isArray(e)?typeof e[0]=="number"||typeof e[0]=="string"?new i.LatLng(e[0],e[1],e[2]):null:e===n||e===null?e:typeof e=="object"&&"lat"in e?new i.LatLng(e.lat,"lng"in e?e.lng:e.lon):t===n?null:new i.LatLng(e,t)},i.LatLngBounds=function(e,t){if(!e)return;var n=t?[e,t]:e;for(var r=0,i=n.length;r<i;r++)this.extend(n[r])},i.LatLngBounds.prototype={extend:function(e){if(!e)return this;var t=i.latLng(e);return t!==null?e=t:e=i.latLngBounds(e),e instanceof i.LatLng?!this._southWest&&!this._northEast?(this._southWest=new i.LatLng(e.lat,e.lng),this._northEast=new i.LatLng(e.lat,e.lng)):(this._southWest.lat=Math.min(e.lat,this._southWest.lat),this._southWest.lng=Math.min(e.lng,this._southWest.lng),this._northEast.lat=Math.max(e.lat,this._northEast.lat),this._northEast.lng=Math.max(e.lng,this._northEast.lng)):e instanceof i.LatLngBounds&&(this.extend(e._southWest),this.extend(e._northEast)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,s=Math.abs(t.lng-n.lng)*e;return new i.LatLngBounds(new i.LatLng(t.lat-r,t.lng-s),new i.LatLng(n.lat+r,n.lng+s))},getCenter:function(){return new i.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new i.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new i.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){typeof e[0]=="number"||e instanceof i.LatLng?e=i.latLng(e):e=i.latLngBounds(e);var t=this._southWest,n=this._northEast,r,s;return e instanceof i.LatLngBounds?(r=e.getSouthWest(),s=e.getNorthEast()):r=s=e,r.lat>=t.lat&&s.lat<=n.lat&&r.lng>=t.lng&&s.lng<=n.lng},intersects:function(e){e=i.latLngBounds(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),s=e.getNorthEast(),o=s.lat>=t.lat&&r.lat<=n.lat,u=s.lng>=t.lng&&r.lng<=n.lng;return o&&u},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(e){return e?(e=i.latLngBounds(e),this._southWest.equals(e.getSouthWest())&&this._northEast.equals(e.getNorthEast())):!1},isValid:function(){return!!this._southWest&&!!this._northEast}},i.latLngBounds=function(e,t){return!e||e instanceof i.LatLngBounds?e:new i.LatLngBounds(e,t)},i.Projection={},i.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(e){var t=i.LatLng.DEG_TO_RAD,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),s=e.lng*t,o=r*t;return o=Math.log(Math.tan(Math.PI/4+o/2)),new i.Point(s,o)},unproject:function(e){var t=i.LatLng.RAD_TO_DEG,n=e.x*t,r=(2*Math.atan(Math.exp(e.y))-Math.PI/2)*t;return new i.LatLng(r,n)}},i.Projection.LonLat={project:function(e){return new i.Point(e.lng,e.lat)},unproject:function(e){return new i.LatLng(e.y,e.x)}},i.CRS={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},scale:function(e){return 256*Math.pow(2,e)},getSize:function(e){var t=this.scale(e);return i.point(t,t)}},i.CRS.Simple=i.extend({},i.CRS,{projection:i.Projection.LonLat,transformation:new i.Transformation(1,0,-1,0),scale:function(e){return Math.pow(2,e)}}),i.CRS.EPSG3857=i.extend({},i.CRS,{code:"EPSG:3857",projection:i.Projection.SphericalMercator,transformation:new i.Transformation(.5/Math.PI,.5,-0.5/Math.PI,.5),project:function(e){var t=this.projection.project(e),n=6378137;return t.multiplyBy(n)}}),i.CRS.EPSG900913=i.extend({},i.CRS.EPSG3857,{code:"EPSG:900913"}),i.CRS.EPSG4326=i.extend({},i.CRS,{code:"EPSG:4326",projection:i.Projection.LonLat,transformation:new i.Transformation(1/360,.5,-1/360,.5)}),i.Map=i.Class.extend({includes:i.Mixin.Events,options:{crs:i.CRS.EPSG3857,fadeAnimation:i.DomUtil.TRANSITION&&!i.Browser.android23,trackResize:!0,markerZoomAnimation:i.DomUtil.TRANSITION&&i.Browser.any3d},initialize:function(e,t){t=i.setOptions(this,t),this._initContainer(e),this._initLayout(),this._onResize=i.bind(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.center&&t.zoom!==n&&this.setView(i.latLng(t.center),t.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(t.layers)},setView:function(e,t){return t=t===n?this.getZoom():t,this._resetView(i.latLng(e),this._limitZoom(t)),this},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=this._limitZoom(e),this)},zoomIn:function(e,t){return this.setZoom(this._zoom+(e||1),t)},zoomOut:function(e,t){return this.setZoom(this._zoom-(e||1),t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),s=this.getSize().divideBy(2),o=e instanceof i.Point?e:this.latLngToContainerPoint(e),u=o.subtract(s).multiplyBy(1-1/r),a=this.containerPointToLatLng(s.add(u));return this.setView(a,t,{zoom:n})},fitBounds:function(e,t){t=t||{},e=e.getBounds?e.getBounds():i.latLngBounds(e);var n=i.point(t.paddingTopLeft||t.padding||[0,0]),r=i.point(t.paddingBottomRight||t.padding||[0,0]),s=this.getBoundsZoom(e,!1,n.add(r)),o=r.subtract(n).divideBy(2),u=this.project(e.getSouthWest(),s),a=this.project(e.getNorthEast(),s),f=this.unproject(u.add(a).divideBy(2).add(o),s);return s=t&&t.maxZoom?Math.min(t.maxZoom,s):s,this.setView(f,s,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e){return this.fire("movestart"),this._rawPanBy(i.point(e)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(e){return e=i.latLngBounds(e),this.options.maxBounds=e,e?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(e,t){var n=this.getCenter(),r=this._limitCenter(n,this._zoom,e);return n.equals(r)?this:this.panTo(r,t)},addLayer:function(e){var t=i.stamp(e);return this._layers[t]?this:(this._layers[t]=e,e.options&&(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[t]=e,this._updateZoomLevels()),this.options.zoomAnimation&&i.TileLayer&&e instanceof i.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,e.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(e),this)},removeLayer:function(e){var t=i.stamp(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&this.fire("layerremove",{layer:e}),this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels()),this.options.zoomAnimation&&i.TileLayer&&e instanceof i.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,e.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(e){return e?i.stamp(e)in this._layers:!1},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},invalidateSize:function(e){if(!this._loaded)return this;e=i.extend({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var n=this.getSize(),r=t.divideBy(2).round(),s=n.divideBy(2).round(),o=r.subtract(s);return!o.x&&!o.y?this:(e.animate&&e.pan?this.panBy(o):(e.pan&&this._rawPanBy(o),this.fire("move"),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:t,newSize:n}))},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(e){this._container._leaflet=n}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds(),t=this.unproject(e.getBottomLeft()),n=this.unproject(e.getTopRight());return new i.LatLngBounds(t,n)},getMinZoom:function(){return this.options.minZoom===n?this._layersMinZoom===n?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===n?this._layersMaxZoom===n?Infinity:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=i.latLngBounds(e);var r=this.getMinZoom()-(t?1:0),s=this.getMaxZoom(),o=this.getSize(),u=e.getNorthWest(),a=e.getSouthEast(),f=!0,l;n=i.point(n||[0,0]);do r++,l=this.project(a,r).subtract(this.project(u,r)).add(n),f=t?l.x<o.x||l.y<o.y:o.contains(l);while(f&&r<=s);return f&&t?null:t?r:r-1},getSize:function(){if(!this._size||this._sizeChanged)this._size=new i.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1;return this._size.clone()},getPixelBounds:function(){var e=this._getTopLeftPoint();return new i.Bounds(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e){var t=this.options.crs;return t.scale(e)/t.scale(this._zoom)},getScaleZoom:function(e){return this._zoom+Math.log(e)/Math.LN2},project:function(e,t){return t=t===n?this._zoom:t,this.options.crs.latLngToPoint(i.latLng(e),t)},unproject:function(e,t){return t=t===n?this._zoom:t,this.options.crs.pointToLatLng(i.point(e),t)},layerPointToLatLng:function(e){var t=i.point(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){var t=this.project(i.latLng(e))._round();return t._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(e){return i.point(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return i.point(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(i.point(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(i.latLng(e)))},mouseEventToContainerPoint:function(e){return i.DomEvent.getMousePosition(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=i.DomUtil.get(e);if(!t)throw new Error("Map container not found.");if(t._leaflet)throw new Error("Map container is already initialized.");t._leaflet=!0},_initLayout:function(){var e=this._container;i.DomUtil.addClass(e,"leaflet-container"+(i.Browser.touch?" leaflet-touch":"")+(i.Browser.retina?" leaflet-retina":"")+(i.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var t=i.DomUtil.getStyle(e,"position");t!=="absolute"&&t!=="relative"&&t!=="fixed"&&(e.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._mapPane=e.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=e.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),e.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),e.shadowPane=this._createPane("leaflet-shadow-pane"),e.overlayPane=this._createPane("leaflet-overlay-pane"),e.markerPane=this._createPane("leaflet-marker-pane"),e.popupPane=this._createPane("leaflet-popup-pane");var t=" leaflet-zoom-hide";this.options.markerZoomAnimation||(i.DomUtil.addClass(e.markerPane,t),i.DomUtil.addClass(e.shadowPane,t),i.DomUtil.addClass(e.popupPane,t))},_createPane:function(e,t){return i.DomUtil.create("div",e,t||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(e){e=e?i.Util.isArray(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_resetView:function(e,t,n,r){var s=this._zoom!==t;r||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=t,this._initialCenter=e,this._initialTopLeftPoint=this._getNewTopLeftPoint(e),n?this._initialTopLeftPoint._add(this._getMapPanePos()):i.DomUtil.setPosition(this._mapPane,new i.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var o=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!n}),o&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("move"),(s||r)&&this.fire("zoomend"),this.fire("moveend",{hard:!n})},_rawPanBy:function(e){i.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var e,t=Infinity,r=-Infinity,i=this._getZoomSpan();for(e in this._zoomBoundLayers){var s=this._zoomBoundLayers[e];isNaN(s.options.minZoom)||(t=Math.min(t,s.options.minZoom)),isNaN(s.options.maxZoom)||(r=Math.max(r,s.options.maxZoom))}e===n?this._layersMaxZoom=this._layersMinZoom=n:(this._layersMaxZoom=r,this._layersMinZoom=t),i!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){if(!i.DomEvent)return;t=t||"on",i.DomEvent[t](this._container,"click",this._onMouseClick,this);var n=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"],r,s;for(r=0,s=n.length;r<s;r++)i.DomEvent[t](this._container,n[r],this._fireMouseEvent,this);this.options.trackResize&&i.DomEvent[t](e,"resize",this._onResize,this)},_onResize:function(){i.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=i.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(e){if(!this._loaded||!e._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||i.DomEvent._skipped(e))return;this.fire("preclick"),this._fireMouseEvent(e)},_fireMouseEvent:function(e){if(!this._loaded||i.DomEvent._skipped(e))return;var t=e.type;t=t==="mouseenter"?"mouseover":t==="mouseleave"?"mouseout":t;if(!this.hasEventListeners(t))return;t==="contextmenu"&&i.DomEvent.preventDefault(e);var n=this.mouseEventToContainerPoint(e),r=this.containerPointToLayerPoint(n),s=this.layerPointToLatLng(r);this.fire(t,{latlng:s,layerPoint:r,containerPoint:n,originalEvent:e})},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,this):this.on("load",e,t),this},_layerAdd:function(e){e.onAdd(this),this.fire("layeradd",{layer:e})},_getMapPanePos:function(){return i.DomUtil.getPosition(this._mapPane)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewTopLeftPoint(n,t).add(this._getMapPanePos());return this.project(e,t)._subtract(r)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),s=this.getSize().divideBy(2),o=new i.Bounds(r.subtract(s),r.add(s)),u=this._getBoundsOffset(o,n,t);return this.unproject(r.add(u),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new i.Bounds(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=this.project(t.getNorthWest(),n).subtract(e.min),s=this.project(t.getSouthEast(),n).subtract(e.max),o=this._rebound(r.x,-s.x),u=this._rebound(r.y,-s.y);return new i.Point(o,u)},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom();return Math.max(t,Math.min(n,e))}}),i.map=function(e,t){return new i.Map(e,t)},i.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(e){var t=i.LatLng.DEG_TO_RAD,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),s=this.R_MAJOR,o=this.R_MINOR,u=e.lng*t*s,a=r*t,f=o/s,l=Math.sqrt(1-f*f),c=l*Math.sin(a);c=Math.pow((1-c)/(1+c),l*.5);var h=Math.tan(.5*(Math.PI*.5-a))/c;return a=-s*Math.log(h),new i.Point(u,a)},unproject:function(e){var t=i.LatLng.RAD_TO_DEG,n=this.R_MAJOR,r=this.R_MINOR,s=e.x*t/n,o=r/n,u=Math.sqrt(1-o*o),a=Math.exp(-e.y/n),f=Math.PI/2-2*Math.atan(a),l=15,c=1e-7,h=l,p=.1,d;while(Math.abs(p)>c&&--h>0)d=u*Math.sin(f),p=Math.PI/2-2*Math.atan(a*Math.pow((1-d)/(1+d),.5*u))-f,f+=p;return new i.LatLng(f*t,s)}},i.CRS.EPSG3395=i.extend({},i.CRS,{code:"EPSG:3395",projection:i.Projection.Mercator,transformation:function(){var e=i.Projection.Mercator,t=e.R_MAJOR,n=.5/(Math.PI*t);return new i.Transformation(n,.5,-n,.5)}()}),i.TileLayer=i.Class.extend({includes:i.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:i.Browser.mobile,updateWhenIdle:i.Browser.mobile},initialize:function(e,t){t=i.setOptions(this,t),t.detectRetina&&i.Browser.retina&&t.maxZoom>0&&(t.tileSize=Math.floor(t.tileSize/2),t.zoomOffset++,t.minZoom>0&&t.minZoom--,this.options.maxZoom--),t.bounds&&(t.bounds=i.latLngBounds(t.bounds)),this._url=e;var n=this.options.subdomains;typeof n=="string"&&(this.options.subdomains=n.split(""))},onAdd:function(e){this._map=e,this._animated=e._zoomAnimated,this._initContainer(),e.on({viewreset:this._reset,moveend:this._update},this),this._animated&&e.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=i.Util.limitExecByInterval(this._update,150,this),e.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){this._container.parentNode.removeChild(this._container),e.off({viewreset:this._reset,moveend:this._update},this),this._animated&&e.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||e.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var e=this._map._panes.tilePane;return this._container&&(e.appendChild(this._container),this._setAutoZIndex(e,Math.max)),this},bringToBack:function(){var e=this._map._panes.tilePane;return this._container&&(e.insertBefore(this._container,e.firstChild),this._setAutoZIndex(e,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},setUrl:function(e,t){return this._url=e,t||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==n&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e,t){var n=e.children,r=-t(Infinity,-Infinity),i,s,o;for(s=0,o=n.length;s<o;s++)n[s]!==this._container&&(i=parseInt(n[s].style.zIndex,10),isNaN(i)||(r=t(r,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(r)?r:0)+t(1,-1)},_updateOpacity:function(){var e,t=this._tiles;if(i.Browser.ielt9)for(e in t)i.DomUtil.setOpacity(t[e],this.options.opacity);else i.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var e=this._map._panes.tilePane;if(!this._container){this._container=i.DomUtil.create("div","leaflet-layer"),this._updateZIndex();if(this._animated){var t="leaflet-tile-container";this._bgBuffer=i.DomUtil.create("div",t,this._container),this._tileContainer=i.DomUtil.create("div",t,this._container)}else this._tileContainer=this._container;e.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(e){for(var t in this._tiles)this.fire("tileunload",{tile:this._tiles[t]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&e&&e.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var e=this._map,t=e.getZoom()+this.options.zoomOffset,n=this.options.maxNativeZoom,r=this.options.tileSize;return n&&t>n&&(r=Math.round(e.getZoomScale(t)/e.getZoomScale(n)*r)),r},_update:function(){if(!this._map)return;var e=this._map,t=e.getPixelBounds(),n=e.getZoom(),r=this._getTileSize(
);if(n>this.options.maxZoom||n<this.options.minZoom)return;var s=i.bounds(t.min.divideBy(r)._floor(),t.max.divideBy(r)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)},_addTilesFromCenterOut:function(e){var n=[],r=e.getCenter(),s,o,u;for(s=e.min.y;s<=e.max.y;s++)for(o=e.min.x;o<=e.max.x;o++)u=new i.Point(o,s),this._tileShouldBeLoaded(u)&&n.push(u);var a=n.length;if(a===0)return;n.sort(function(e,t){return e.distanceTo(r)-t.distanceTo(r)});var f=t.createDocumentFragment();this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=a;for(o=0;o<a;o++)this._addTile(n[o],f);this._tileContainer.appendChild(f)},_tileShouldBeLoaded:function(e){if(e.x+":"+e.y in this._tiles)return!1;var t=this.options;if(!t.continuousWorld){var n=this._getWrapTileNum();if(t.noWrap&&(e.x<0||e.x>=n.x)||e.y<0||e.y>=n.y)return!1}if(t.bounds){var r=t.tileSize,i=e.multiplyBy(r),s=i.add([r,r]),o=this._map.unproject(i),u=this._map.unproject(s);!t.continuousWorld&&!t.noWrap&&(o=o.wrap(),u=u.wrap());if(!t.bounds.intersects([o,u]))return!1}return!0},_removeOtherTiles:function(e){var t,n,r,i;for(i in this._tiles)t=i.split(":"),n=parseInt(t[0],10),r=parseInt(t[1],10),(n<e.min.x||n>e.max.x||r<e.min.y||r>e.max.y)&&this._removeTile(i)},_removeTile:function(e){var t=this._tiles[e];this.fire("tileunload",{tile:t,url:t.src}),this.options.reuseTiles?(i.DomUtil.removeClass(t,"leaflet-tile-loaded"),this._unusedTiles.push(t)):t.parentNode===this._tileContainer&&this._tileContainer.removeChild(t),i.Browser.android||(t.onload=null,t.src=i.Util.emptyImageUrl),delete this._tiles[e]},_addTile:function(e,t){var n=this._getTilePos(e),r=this._getTile();i.DomUtil.setPosition(r,n,i.Browser.chrome),this._tiles[e.x+":"+e.y]=r,this._loadTile(r,e),r.parentNode!==this._tileContainer&&t.appendChild(r)},_getZoomForUrl:function(){var e=this.options,t=this._map.getZoom();return e.zoomReverse&&(t=e.maxZoom-t),t+=e.zoomOffset,e.maxNativeZoom?Math.min(t,e.maxNativeZoom):t},_getTilePos:function(e){var t=this._map.getPixelOrigin(),n=this._getTileSize();return e.multiplyBy(n).subtract(t)},getTileUrl:function(e){return i.Util.template(this._url,i.extend({s:this._getSubdomain(e),z:e.z,x:e.x,y:e.y},this.options))},_getWrapTileNum:function(){var e=this._map.options.crs,t=e.getSize(this._map.getZoom());return t.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(e){var t=this._getWrapTileNum();!this.options.continuousWorld&&!this.options.noWrap&&(e.x=(e.x%t.x+t.x)%t.x),this.options.tms&&(e.y=t.y-e.y-1),e.z=this._getZoomForUrl()},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var e=this._unusedTiles.pop();return this._resetTile(e),e}return this._createTile()},_resetTile:function(){},_createTile:function(){var e=i.DomUtil.create("img","leaflet-tile");return e.style.width=e.style.height=this._getTileSize()+"px",e.galleryimg="no",e.onselectstart=e.onmousemove=i.Util.falseFn,i.Browser.ielt9&&this.options.opacity!==n&&i.DomUtil.setOpacity(e,this.options.opacity),i.Browser.mobileWebkit3d&&(e.style.WebkitBackfaceVisibility="hidden"),e},_loadTile:function(e,t){e._layer=this,e.onload=this._tileOnLoad,e.onerror=this._tileOnError,this._adjustTilePoint(t),e.src=this.getTileUrl(t),this.fire("tileloadstart",{tile:e,url:e.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&i.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(i.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var e=this._layer;this.src!==i.Util.emptyImageUrl&&(i.DomUtil.addClass(this,"leaflet-tile-loaded"),e.fire("tileload",{tile:this,url:this.src})),e._tileLoaded()},_tileOnError:function(){var e=this._layer;e.fire("tileerror",{tile:this,url:this.src});var t=e.options.errorTileUrl;t&&(this.src=t),e._tileLoaded()}}),i.tileLayer=function(e,t){return new i.TileLayer(e,t)},i.TileLayer.WMS=i.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(e,t){this._url=e;var n=i.extend({},this.defaultWmsParams),r=t.tileSize||this.options.tileSize;t.detectRetina&&i.Browser.retina?n.width=n.height=r*2:n.width=n.height=r;for(var s in t)!this.options.hasOwnProperty(s)&&s!=="crs"&&(n[s]=t[s]);this.wmsParams=n,i.setOptions(this,t)},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[t]=this._crs.code,i.TileLayer.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._map,n=this.options.tileSize,r=e.multiplyBy(n),s=r.add([n,n]),o=this._crs.project(t.unproject(r,e.z)),u=this._crs.project(t.unproject(s,e.z)),a=this._wmsVersion>=1.3&&this._crs===i.CRS.EPSG4326?[u.y,o.x,o.y,u.x].join(","):[o.x,u.y,u.x,o.y].join(","),f=i.Util.template(this._url,{s:this._getSubdomain(e)});return f+i.Util.getParamString(this.wmsParams,f,!0)+"&BBOX="+a},setParams:function(e,t){return i.extend(this.wmsParams,e),t||this.redraw(),this}}),i.tileLayer.wms=function(e,t){return new i.TileLayer.WMS(e,t)},i.TileLayer.Canvas=i.TileLayer.extend({options:{async:!1},initialize:function(e){i.setOptions(this,e)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var e in this._tiles)this._redrawTile(this._tiles[e]);return this},_redrawTile:function(e){this.drawTile(e,e._tilePoint,this._map._zoom)},_createTile:function(){var e=i.DomUtil.create("canvas","leaflet-tile");return e.width=e.height=this.options.tileSize,e.onselectstart=e.onmousemove=i.Util.falseFn,e},_loadTile:function(e,t){e._layer=this,e._tilePoint=t,this._redrawTile(e),this.options.async||this.tileDrawn(e)},drawTile:function(){},tileDrawn:function(e){this._tileOnLoad.call(e)}}),i.tileLayer.canvas=function(e){return new i.TileLayer.Canvas(e)},i.ImageOverlay=i.Class.extend({includes:i.Mixin.Events,options:{opacity:1},initialize:function(e,t,n){this._url=e,this._bounds=i.latLngBounds(t),i.setOptions(this,n)},onAdd:function(e){this._map=e,this._image||this._initImage(),e._panes.overlayPane.appendChild(this._image),e.on("viewreset",this._reset,this),e.options.zoomAnimation&&i.Browser.any3d&&e.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(e){e.getPanes().overlayPane.removeChild(this._image),e.off("viewreset",this._reset,this),e.options.zoomAnimation&&e.off("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var e=this._map._panes.overlayPane;return this._image&&e.insertBefore(this._image,e.firstChild),this},setUrl:function(e){this._url=e,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=i.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&i.Browser.any3d?i.DomUtil.addClass(this._image,"leaflet-zoom-animated"):i.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),i.extend(this._image,{galleryimg:"no",onselectstart:i.Util.falseFn,onmousemove:i.Util.falseFn,onload:i.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(e){var t=this._map,n=this._image,r=t.getZoomScale(e.zoom),s=this._bounds.getNorthWest(),o=this._bounds.getSouthEast(),u=t._latLngToNewLayerPoint(s,e.zoom,e.center),a=t._latLngToNewLayerPoint(o,e.zoom,e.center)._subtract(u),f=u._add(a._multiplyBy(.5*(1-1/r)));n.style[i.DomUtil.TRANSFORM]=i.DomUtil.getTranslateString(f)+" scale("+r+") "},_reset:function(){var e=this._image,t=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),n=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(t);i.DomUtil.setPosition(e,t),e.style.width=n.x+"px",e.style.height=n.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){i.DomUtil.setOpacity(this._image,this.options.opacity)}}),i.imageOverlay=function(e,t,n){return new i.ImageOverlay(e,t,n)},i.Icon=i.Class.extend({options:{className:""},initialize:function(e){i.setOptions(this,e)},createIcon:function(e){return this._createIcon("icon",e)},createShadow:function(e){return this._createIcon("shadow",e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var r;return!t||t.tagName!=="IMG"?r=this._createImg(n):r=this._createImg(n,t),this._setIconStyles(r,e),r},_setIconStyles:function(e,t){var n=this.options,r=i.point(n[t+"Size"]),s;t==="shadow"?s=i.point(n.shadowAnchor||n.iconAnchor):s=i.point(n.iconAnchor),!s&&r&&(s=r.divideBy(2,!0)),e.className="leaflet-marker-"+t+" "+n.className,s&&(e.style.marginLeft=-s.x+"px",e.style.marginTop=-s.y+"px"),r&&(e.style.width=r.x+"px",e.style.height=r.y+"px")},_createImg:function(e,n){return n=n||t.createElement("img"),n.src=e,n},_getIconUrl:function(e){return i.Browser.retina&&this.options[e+"RetinaUrl"]?this.options[e+"RetinaUrl"]:this.options[e+"Url"]}}),i.icon=function(e){return new i.Icon(e)},i.Icon.Default=i.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(e){var t=e+"Url";if(this.options[t])return this.options[t];i.Browser.retina&&e==="icon"&&(e+="-2x");var n=i.Icon.Default.imagePath;if(!n)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return n+"/marker-"+e+".png"}}),i.Icon.Default.imagePath=function(){var e=t.getElementsByTagName("script"),n=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/,r,i,s,o,u;for(r=0,i=e.length;r<i;r++){s=e[r].src,o=s.match(n);if(o)return u=s.split(n)[0],(u?u+"/":"")+"images"}}(),i.Marker=i.Class.extend({includes:i.Mixin.Events,options:{icon:new i.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(e,t){i.setOptions(this,t),this._latlng=i.latLng(e)},onAdd:function(e){this._map=e,e.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),e.options.zoomAnimation&&e.options.markerZoomAnimation&&e.on("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),e.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=i.latLng(e),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update(),this},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){if(this._icon){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=this._map,n=t.options.zoomAnimation&&t.options.markerZoomAnimation,r=n?"leaflet-zoom-animated":"leaflet-zoom-hide",s=e.icon.createIcon(this._icon),o=!1;s!==this._icon&&(this._icon&&this._removeIcon(),o=!0,e.title&&(s.title=e.title),e.alt&&(s.alt=e.alt)),i.DomUtil.addClass(s,r),e.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),e.riseOnHover&&i.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var u=e.icon.createShadow(this._shadow),a=!1;u!==this._shadow&&(this._removeShadow(),a=!0),u&&i.DomUtil.addClass(u,r),this._shadow=u,e.opacity<1&&this._updateOpacity();var f=this._map._panes;o&&f.markerPane.appendChild(this._icon),u&&a&&f.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&i.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(e){i.DomUtil.setPosition(this._icon,e),this._shadow&&i.DomUtil.setPosition(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon.style.zIndex=this._zIndex+e},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(!this.options.clickable)return;var e=this._icon,t=["dblclick","mousedown","mouseover","mouseout","contextmenu"];i.DomUtil.addClass(e,"leaflet-clickable"),i.DomEvent.on(e,"click",this._onMouseClick,this),i.DomEvent.on(e,"keypress",this._onKeyPress,this);for(var n=0;n<t.length;n++)i.DomEvent.on(e,t[n],this._fireMouseEvent,this);i.Handler.MarkerDrag&&(this.dragging=new i.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())},_onMouseClick:function(e){var t=this.dragging&&this.dragging.moved();(this.hasEventListeners(e.type)||t)&&i.DomEvent.stopPropagation(e);if(t)return;if((!this.dragging||!this.dragging._enabled)&&this._map.dragging&&this._map.dragging.moved())return;this.fire(e.type,{originalEvent:e,latlng:this._latlng})},_onKeyPress:function(e){e.keyCode===13&&this.fire("click",{originalEvent:e,latlng:this._latlng})},_fireMouseEvent:function(e){this.fire(e.type,{originalEvent:e,latlng:this._latlng}),e.type==="contextmenu"&&this.hasEventListeners(e.type)&&i.DomEvent.preventDefault(e),e.type!=="mousedown"?i.DomEvent.stopPropagation(e):i.DomEvent.preventDefault(e)},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){i.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&i.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),i.marker=function(e,t){return new i.Marker(e,t)},i.DivIcon=i.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(e){var n=e&&e.tagName==="DIV"?e:t.createElement("div"),r=this.options;return r.html!==!1?n.innerHTML=r.html:n.innerHTML="",r.bgPos&&(n.style.backgroundPosition=-r.bgPos.x+"px "+ -r.bgPos.y+"px"),this._setIconStyles(n,"icon"),n},createShadow:function(){return null}}),i.divIcon=function(e){return new i.DivIcon(e)},i.Map.mergeOptions({closePopupOnClick:!0}),i.Popup=i.Class.extend({includes:i.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(e,t){i.setOptions(this,e),this._source=t,this._animated=i.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(e){this._map=e,this._container||this._initLayout();var t=e.options.fadeAnimation;t&&i.DomUtil.setOpacity(this._container,0),e._panes.popupPane.appendChild(this._container),e.on(this._getEvents(),this),this.update(),t&&i.DomUtil.setOpacity(this._container,1),this.fire("open"),e.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(e){return e.addLayer(this),this},openOn:function(e){return e.openPopup(this),this},onRemove:function(e){e._panes.popupPane.removeChild(this._container),i.Util.falseFn(this._container.offsetWidth),e.off(this._getEvents(),this),e.options.fadeAnimation&&i.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),e.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=i.latLng(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},update:function(){if(!this._map)return;this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan()},_getEvents:function(){var e={viewreset:this._updatePosition};this._animated&&(e.zoomanim=this._zoomAnimation);if("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)e.preclick=this._close;return this.options.keepInView&&(e.moveend=this._adjustPan),e},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var e="leaflet-popup",t=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=i.DomUtil.create("div",t),r;this.options.closeButton&&(r=this._closeButton=i.DomUtil.create("a",e+"-close-button",n),r.href="#close",r.innerHTML="&#215;",i.DomEvent.disableClickPropagation(r),i.DomEvent.on(r,"click",this._onCloseButtonClick,this));var s=this._wrapper=i.DomUtil.create("div",e+"-content-wrapper",n);i.DomEvent.disableClickPropagation(s),this._contentNode=i.DomUtil.create("div",e+"-content",s),i.DomEvent.disableScrollPropagation(this._contentNode),i.DomEvent.on(s,"contextmenu",i.DomEvent.stopPropagation),this._tipContainer=i.DomUtil.create("div",e+"-tip-container",n),this._tip=i.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(!this._content)return;if(typeof this._content=="string")this._contentNode.innerHTML=this._content;else{while(this._contentNode.hasChildNodes())this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width="",t.whiteSpace="nowrap";var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+"px",t.whiteSpace="",t.height="";var r=e.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&r>s?(t.height=s+"px",i.DomUtil.addClass(e,o)):i.DomUtil.removeClass(e,o),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(!this._map)return;var e=this._map.latLngToLayerPoint(this._latlng),t=this._animated,n=i.point(this.options.offset);t&&i.DomUtil.setPosition(this._container,e),this._containerBottom=-n.y-(t?0:e.y),this._containerLeft=-Math.round(this._containerWidth/2)+n.x+(t?0:e.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"},_zoomAnimation:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);i.DomUtil.setPosition(this._container,t)},_adjustPan:function(){if(!this.options.autoPan)return;var e=this._map,t=this._container.offsetHeight,n=this._containerWidth,r=new i.Point(this._containerLeft,-t-this._containerBottom);this._animated&&r._add(i.DomUtil.getPosition(this._container));var s=e.layerPointToContainerPoint(r),o=i.point(this.options.autoPanPadding),u=i.point(this.options.autoPanPaddingTopLeft||o),a=i.point(this.options.autoPanPaddingBottomRight||o),f=e.getSize(),l=0,c=0;s.x+n+a.x>f.x&&(l=s.x+n-f.x+a.x),s.x-l-u.x<0&&(l=s.x-u.x),s.y+t+a.y>f.y&&(c=s.y+t-f.y+a.y),s.y-c-u.y<0&&(c=s.y-u.y),(l||c)&&e.fire("autopanstart").panBy([l,c])},_onCloseButtonClick:function(e){this._close(),i.DomEvent.stop(e)}}),i.popup=function(e,t){return new i.Popup(e,t)},i.Map.include({openPopup:function(e,t,n){this.closePopup();if(!(e instanceof i.Popup)){var r=e;e=(new i.Popup(n)).setLatLng(t).setContent(r)}return e._isOpen=!0,this._popup=e,this.addLayer(e)},closePopup:function(e){if(!e||e===this._popup)e=this._popup,this._popup=null;return e&&(this.removeLayer(e),e._isOpen=!1),this}}),i.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(e,t){var n=i.point(this.options.icon.options.popupAnchor||[0,0]);return n=n.add(i.Popup.prototype.options.offset),t&&t.offset&&(n=n.add(t.offset)),t=i.extend({offset:n},t),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),e instanceof i.Popup?(i.setOptions(e,t),this._popup=e):this._popup=(new i.Popup(t,this)).setContent(e),this},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(e){this._popup.setLatLng(e.latlng)}}),i.LayerGroup=i.Class.extend({initialize:function(e){this._layers={};var t,n;if(e)for(t=0,n=e.length;t<n;t++)this.addLayer(e[t])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return e?e in this._layers||this.getLayerId(e)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this._map=e,this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e),this._map=null},addTo:function(e){return e.addLayer(this),this},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];for(var t in this._layers)e.push(this._layers[t]);return e},setZIndex:function(e){return this.invoke("setZIndex",e)},getLayerId:function(e){return i.stamp(e)}}),i.layerGroup=function(e){return new i.LayerGroup(e)},i.FeatureGroup=i.LayerGroup.extend({includes:i.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(e){return this.hasLayer(e)?this:("on"in e&&e.on(i.FeatureGroup.EVENTS,this._propagateEvent,this),i.LayerGroup.prototype.addLayer.call(this,e),this._popupContent&&e.bindPopup&&e.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.off(i.FeatureGroup.EVENTS,this._propagateEvent,this),i.LayerGroup.prototype.removeLayer.call(this,e),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:e})):this},bindPopup:function(e,t){return this._popupContent=e,this._popupOptions=t,this.invoke("bindPopup",e,t)},openPopup:function(e){for(var t in this._layers){this._layers[t].openPopup(e);break}return this},setStyle:function(e){return this.invoke("setStyle",e)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var e=new i.LatLngBounds;return this.eachLayer(function(t){e.extend(t instanceof i.Marker?t.getLatLng():t.getBounds())}),e},_propagateEvent:function(e){e=i.extend({layer:e.target,target:this},e),this.fire(e.type,e)}}),i.featureGroup=function(e){return new i.FeatureGroup(e)},i.Path=i.Class.extend({includes:[i.Mixin.Events],statics:{CLIP_PADDING:function(){var t=i.Browser.mobile?1280:2e3,n=(t/Math.max(e.outerWidth,e.outerHeight)-1)/2;return Math.max(0,Math.min(.5,n))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(e){i.setOptions(this,e)},onAdd:function(e){this._map=e,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),e.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){e._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,i.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),e.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(e){return i.setOptions(this,e),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),i.Map.include({_updatePathViewport:function(){var e=i.Path.CLIP_PADDING,t=this.getSize(),n=i.DomUtil.getPosition(this._mapPane),r=n.multiplyBy(-1)._subtract(t.multiplyBy(e)._round()),s=r.add(t.multiplyBy(1+e*2)._round());this._pathViewport=new i.Bounds(r,s)}}),i.Path.SVG_NS="http://www.w3.org/2000/svg",i.Browser.svg=!!t.createElementNS&&!!t.createElementNS(i.Path.SVG_NS,"svg").createSVGRect,i.Path=i.Path.extend({statics:{SVG:i.Browser.svg},bringToFront:function(){var e=this._map._pathRoot,t=this._container;return t&&e.lastChild!==t&&e.appendChild(t),this},bringToBack:function(){var e=this._map._pathRoot,t=this._container,n=e.firstChild;return t&&n!==t&&e.insertBefore(t,n),this},getPathString:function(){},_createElement:function(e){return t.createElementNS(i.Path.SVG_NS,e)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&i.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),!this.options.clickable&&!this.options.pointerEvents&&this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var e=this.getPathString();e||(e="M0 0"),this._path.setAttribute("d",e)},_initEvents:function(){if(this.options.clickable){(i.Browser.svg||!i.Browser.vml)&&i.DomUtil.addClass(this._path,"leaflet-clickable"),i.DomEvent.on(this._container,"click",this._onMouseClick,this);var e=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"];for(var t=0;t<e.length;t++)i.DomEvent.on(this._container,e[t],this._fireMouseEvent,this)}},_onMouseClick:function(e){if(this._map.dragging&&this._map.dragging.moved())return;this._fireMouseEvent(e)},_fireMouseEvent:function(e){if(!this.hasEventListeners(e.type))return;var t=this._map,n=t.mouseEventToContainerPoint(e),r=t.containerPointToLayerPoint(n),s=t.layerPointToLatLng(r);this.fire(e.type,{latlng:s,layerPoint:r,containerPoint:n,originalEvent:e}),e.type==="contextmenu"&&i.DomEvent.preventDefault(e),e.type!=="mousemove"&&i.DomEvent.stopPropagation(e)}}),i.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=i.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&i.Browser.any3d?(i.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):i.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(e){var t=this.getZoomScale(e.zoom),n=this._getCenterOffset(e.center)._multiplyBy(-t)._add(this._pathViewport.min);this._pathRoot.style[i.DomUtil.TRANSFORM]=i.DomUtil.getTranslateString(n)+" scale("+t+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(this._pathZooming)return;this._updatePathViewport();var e=this._pathViewport,t=e.min,n=e.max,r=n.x-t.x,s=n.y-t.y,o=this._pathRoot,u=this._panes.overlayPane;i.Browser.mobileWebkit&&u.removeChild(o),i.DomUtil.setPosition(o,t),o.setAttribute("width",r),o.setAttribute("height",s),o.setAttribute("viewBox",[t.x,t.y,r,s].join(" ")),i.Browser.mobileWebkit&&u.appendChild(o)}}),i.Path.include({bindPopup:function(e,t){if(e instanceof i.Popup)this._popup=e;else{if(!this._popup||t)this._popup=new i.Popup(t,this);this._popup.setContent(e)}return this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(e){return this._popup&&(e=e||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:e})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(e){this._popup.setLatLng(e.latlng),this._map.openPopup(this._popup)}}),i.Browser.vml=!i.Browser.svg&&function(){try{var e=t.createElement("div");e.innerHTML='<v:shape adj="1"/>';var n=e.firstChild;return n.style.behavior="url(#default#VML)",n&&typeof n.adj=="object"}catch(r){return!1}}(),i.Path=i.Browser.svg||!i.Browser.vml?i.Path:i.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return t.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(e){return t.createElement("<lvml:"+e+' class="lvml">')}}catch(e){return function(e){return t.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var e=this._container=this._createElement("shape");i.DomUtil.addClass(e,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&i.DomUtil.addClass(e,"leaflet-clickable"),e.coordsize="1 1",this._path=this._createElement("path"),e.appendChild(this._path),this._map._pathRoot.appendChild(e)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var e=this._stroke,t=this._fill,n=this.options,r=this._container;r.stroked=n.stroke,r.filled=n.fill,n.stroke?(e||(e=this._stroke=this._createElement("stroke"),e.endcap="round",r.appendChild(e)),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=i.Util.isArray(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",n.lineCap&&(e.endcap=n.lineCap.replace("butt","flat")),n.lineJoin&&(e.joinstyle=n.lineJoin)):e&&(r.removeChild(e),this._stroke=null),n.fill?(t||(t=this._fill=this._createElement("fill"),r.appendChild(t)),t.color=n.fillColor||n.color,t.opacity=n.fillOpacity):t&&(r.removeChild(t),this._fill=null)},_updatePath:function(){var e=this._container.style;e.display="none",this._path.v=this.getPathString()+" ",e.display=""}}),i.Map.include(i.Browser.svg||!i.Browser.vml?{}:{_initPathRoot:function(){if(this._pathRoot)return;var e=this._pathRoot=t.createElement("div");e.className="leaflet-vml-container",this._panes.overlayPane.appendChild(e),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}),i.Browser.canvas=function(){return!!t.createElement("canvas").getContext}(),i.Path=i.Path.SVG&&!e.L_PREFER_CANVAS||!i.Browser.canvas?i.Path:i.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(e){return i.setOptions(this,e),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(e){e.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this.fire("remove"),this._map=null},_requestUpdate:function(){this._map&&!i.Path._updateRequest&&(i.
    Path._updateRequest=i.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){i.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var e=this.options;e.stroke&&(this._ctx.lineWidth=e.weight,this._ctx.strokeStyle=e.color),e.fill&&(this._ctx.fillStyle=e.fillColor||e.color)},_drawPath:function(){var e,t,n,r,s,o;this._ctx.beginPath();for(e=0,n=this._parts.length;e<n;e++){for(t=0,r=this._parts[e].length;t<r;t++)s=this._parts[e][t],o=(t===0?"move":"line")+"To",this._ctx[o](s.x,s.y);this instanceof i.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(this._checkIfEmpty())return;var e=this._ctx,t=this.options;this._drawPath(),e.save(),this._updateStyle(),t.fill&&(e.globalAlpha=t.fillOpacity,e.fill()),t.stroke&&(e.globalAlpha=t.opacity,e.stroke()),e.restore()},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(e){this._containsPoint(e.layerPoint)&&this.fire("click",e)},_onMouseMove:function(e){if(!this._map||this._map._animatingZoom)return;this._containsPoint(e.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",e)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",e))}}),i.Map.include(i.Path.SVG&&!e.L_PREFER_CANVAS||!i.Browser.canvas?{}:{_initPathRoot:function(){var e=this._pathRoot,n;e||(e=this._pathRoot=t.createElement("canvas"),e.style.position="absolute",n=this._canvasCtx=e.getContext("2d"),n.lineCap="round",n.lineJoin="round",this._panes.overlayPane.appendChild(e),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(this._pathZooming)return;this._updatePathViewport();var e=this._pathViewport,t=e.min,n=e.max.subtract(t),r=this._pathRoot;i.DomUtil.setPosition(r,t),r.width=n.x,r.height=n.y,r.getContext("2d").translate(-t.x,-t.y)}}),i.LineUtil={simplify:function(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=this._reducePoints(e,n),e=this._simplifyDP(e,n),e},pointToSegmentDistance:function(e,t,n){return Math.sqrt(this._sqClosestPointOnSegment(e,t,n,!0))},closestPointOnSegment:function(e,t,n){return this._sqClosestPointOnSegment(e,t,n)},_simplifyDP:function(e,t){var r=e.length,i=typeof Uint8Array!=n+""?Uint8Array:Array,s=new i(r);s[0]=s[r-1]=1,this._simplifyDPStep(e,s,t,0,r-1);var o,u=[];for(o=0;o<r;o++)s[o]&&u.push(e[o]);return u},_simplifyDPStep:function(e,t,n,r,i){var s=0,o,u,a;for(u=r+1;u<=i-1;u++)a=this._sqClosestPointOnSegment(e[u],e[r],e[i],!0),a>s&&(o=u,s=a);s>n&&(t[o]=1,this._simplifyDPStep(e,t,n,r,o),this._simplifyDPStep(e,t,n,o,i))},_reducePoints:function(e,t){var n=[e[0]];for(var r=1,i=0,s=e.length;r<s;r++)this._sqDist(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<s-1&&n.push(e[s-1]),n},clipSegment:function(e,t,n,r){var i=r?this._lastCode:this._getBitCode(e,n),s=this._getBitCode(t,n),o,u,a;this._lastCode=s;for(;;){if(!(i|s))return[e,t];if(i&s)return!1;o=i||s,u=this._getEdgeIntersection(e,t,o,n),a=this._getBitCode(u,n),o===i?(e=u,i=a):(t=u,s=a)}},_getEdgeIntersection:function(e,t,n,r){var s=t.x-e.x,o=t.y-e.y,u=r.min,a=r.max;if(n&8)return new i.Point(e.x+s*(a.y-e.y)/o,a.y);if(n&4)return new i.Point(e.x+s*(u.y-e.y)/o,u.y);if(n&2)return new i.Point(a.x,e.y+o*(a.x-e.x)/s);if(n&1)return new i.Point(u.x,e.y+o*(u.x-e.x)/s)},_getBitCode:function(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n},_sqDist:function(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r},_sqClosestPointOnSegment:function(e,t,n,r){var s=t.x,o=t.y,u=n.x-s,a=n.y-o,f=u*u+a*a,l;return f>0&&(l=((e.x-s)*u+(e.y-o)*a)/f,l>1?(s=n.x,o=n.y):l>0&&(s+=u*l,o+=a*l)),u=e.x-s,a=e.y-o,r?u*u+a*a:new i.Point(s,o)}},i.Polyline=i.Path.extend({initialize:function(e,t){i.Path.prototype.initialize.call(this,t),this._latlngs=this._convertLatLngs(e)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var e=0,t=this._latlngs.length;e<t;e++)this._originalPoints[e]=this._map.latLngToLayerPoint(this._latlngs[e])},getPathString:function(){for(var e=0,t=this._parts.length,n="";e<t;e++)n+=this._getPathPartStr(this._parts[e]);return n},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._latlngs=this._convertLatLngs(e),this.redraw()},addLatLng:function(e){return this._latlngs.push(i.latLng(e)),this.redraw()},spliceLatLngs:function(){var e=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),e},closestLayerPoint:function(e){var t=Infinity,n=this._parts,r,s,o=null;for(var u=0,a=n.length;u<a;u++){var f=n[u];for(var l=1,c=f.length;l<c;l++){r=f[l-1],s=f[l];var h=i.LineUtil._sqClosestPointOnSegment(e,r,s,!0);h<t&&(t=h,o=i.LineUtil._sqClosestPointOnSegment(e,r,s))}}return o&&(o.distance=Math.sqrt(t)),o},getBounds:function(){return new i.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(e,t){var n,r,s=t?e:[];for(n=0,r=e.length;n<r;n++){if(i.Util.isArray(e[n])&&typeof e[n][0]!="number")return;s[n]=i.latLng(e[n])}return s},_initEvents:function(){i.Path.prototype._initEvents.call(this)},_getPathPartStr:function(e){var t=i.Path.VML;for(var n=0,r=e.length,s="",o;n<r;n++)o=e[n],t&&o._round(),s+=(n?"L":"M")+o.x+" "+o.y;return s},_clipPoints:function(){var e=this._originalPoints,t=e.length,n,r,s;if(this.options.noClip){this._parts=[e];return}this._parts=[];var o=this._parts,u=this._map._pathViewport,a=i.LineUtil;for(n=0,r=0;n<t-1;n++){s=a.clipSegment(e[n],e[n+1],u,n);if(!s)continue;o[r]=o[r]||[],o[r].push(s[0]);if(s[1]!==e[n+1]||n===t-2)o[r].push(s[1]),r++}},_simplifyPoints:function(){var e=this._parts,t=i.LineUtil;for(var n=0,r=e.length;n<r;n++)e[n]=t.simplify(e[n],this.options.smoothFactor)},_updatePath:function(){if(!this._map)return;this._clipPoints(),this._simplifyPoints(),i.Path.prototype._updatePath.call(this)}}),i.polyline=function(e,t){return new i.Polyline(e,t)},i.PolyUtil={},i.PolyUtil.clipPolygon=function(e,t){var n,r=[1,4,2,8],s,o,u,a,f,l,c,h,p=i.LineUtil;for(s=0,l=e.length;s<l;s++)e[s]._code=p._getBitCode(e[s],t);for(u=0;u<4;u++){c=r[u],n=[];for(s=0,l=e.length,o=l-1;s<l;o=s++)a=e[s],f=e[o],a._code&c?f._code&c||(h=p._getEdgeIntersection(f,a,c,t),h._code=p._getBitCode(h,t),n.push(h)):(f._code&c&&(h=p._getEdgeIntersection(f,a,c,t),h._code=p._getBitCode(h,t),n.push(h)),n.push(a));e=n}return e},i.Polygon=i.Polyline.extend({options:{fill:!0},initialize:function(e,t){i.Polyline.prototype.initialize.call(this,e,t),this._initWithHoles(e)},_initWithHoles:function(e){var t,n,r;if(e&&i.Util.isArray(e[0])&&typeof e[0][0]!="number"){this._latlngs=this._convertLatLngs(e[0]),this._holes=e.slice(1);for(t=0,n=this._holes.length;t<n;t++)r=this._holes[t]=this._convertLatLngs(this._holes[t]),r[0].equals(r[r.length-1])&&r.pop()}e=this._latlngs,e.length>=2&&e[0].equals(e[e.length-1])&&e.pop()},projectLatlngs:function(){i.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[];if(!this._holes)return;var e,t,n,r;for(e=0,n=this._holes.length;e<n;e++){this._holePoints[e]=[];for(t=0,r=this._holes[e].length;t<r;t++)this._holePoints[e][t]=this._map.latLngToLayerPoint(this._holes[e][t])}},setLatLngs:function(e){return e&&i.Util.isArray(e[0])&&typeof e[0][0]!="number"?(this._initWithHoles(e),this.redraw()):i.Polyline.prototype.setLatLngs.call(this,e)},_clipPoints:function(){var e=this._originalPoints,t=[];this._parts=[e].concat(this._holePoints);if(this.options.noClip)return;for(var n=0,r=this._parts.length;n<r;n++){var s=i.PolyUtil.clipPolygon(this._parts[n],this._map._pathViewport);s.length&&t.push(s)}this._parts=t},_getPathPartStr:function(e){var t=i.Polyline.prototype._getPathPartStr.call(this,e);return t+(i.Browser.svg?"z":"x")}}),i.polygon=function(e,t){return new i.Polygon(e,t)},function(){function e(e){return i.FeatureGroup.extend({initialize:function(e,t){this._layers={},this._options=t,this.setLatLngs(e)},setLatLngs:function(t){var n=0,r=t.length;this.eachLayer(function(e){n<r?e.setLatLngs(t[n++]):this.removeLayer(e)},this);while(n<r)this.addLayer(new e(t[n++],this._options));return this},getLatLngs:function(){var e=[];return this.eachLayer(function(t){e.push(t.getLatLngs())}),e}})}i.MultiPolyline=e(i.Polyline),i.MultiPolygon=e(i.Polygon),i.multiPolyline=function(e,t){return new i.MultiPolyline(e,t)},i.multiPolygon=function(e,t){return new i.MultiPolygon(e,t)}}(),i.Rectangle=i.Polygon.extend({initialize:function(e,t){i.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=i.latLngBounds(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}}),i.rectangle=function(e,t){return new i.Rectangle(e,t)},i.Circle=i.Path.extend({initialize:function(e,t,n){i.Path.prototype.initialize.call(this,n),this._latlng=i.latLng(e),this._mRadius=t},options:{fill:!0},setLatLng:function(e){return this._latlng=i.latLng(e),this.redraw()},setRadius:function(e){return this._mRadius=e,this.redraw()},projectLatlngs:function(){var e=this._getLngRadius(),t=this._latlng,n=this._map.latLngToLayerPoint([t.lat,t.lng-e]);this._point=this._map.latLngToLayerPoint(t),this._radius=Math.max(this._point.x-n.x,1)},getBounds:function(){var e=this._getLngRadius(),t=this._mRadius/40075017*360,n=this._latlng;return new i.LatLngBounds([n.lat-t,n.lng-e],[n.lat+t,n.lng+e])},getLatLng:function(){return this._latlng},getPathString:function(){var e=this._point,t=this._radius;return this._checkIfEmpty()?"":i.Browser.svg?"M"+e.x+","+(e.y-t)+"A"+t+","+t+",0,1,1,"+(e.x-.1)+","+(e.y-t)+" z":(e._round(),t=Math.round(t),"AL "+e.x+","+e.y+" "+t+","+t+" 0,"+23592600)},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(i.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var e=this._map._pathViewport,t=this._radius,n=this._point;return n.x-t>e.max.x||n.y-t>e.max.y||n.x+t<e.min.x||n.y+t<e.min.y}}),i.circle=function(e,t,n){return new i.Circle(e,t,n)},i.CircleMarker=i.Circle.extend({options:{radius:10,weight:2},initialize:function(e,t){i.Circle.prototype.initialize.call(this,e,null,t),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){i.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(e){return i.Circle.prototype.setLatLng.call(this,e),this._popup&&this._popup._isOpen&&this._popup.setLatLng(e),this},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius}}),i.circleMarker=function(e,t){return new i.CircleMarker(e,t)},i.Polyline.include(i.Path.CANVAS?{_containsPoint:function(e,t){var n,r,s,o,u,a,f,l=this.options.weight/2;i.Browser.touch&&(l+=10);for(n=0,o=this._parts.length;n<o;n++){f=this._parts[n];for(r=0,u=f.length,s=u-1;r<u;s=r++){if(!t&&r===0)continue;a=i.LineUtil.pointToSegmentDistance(e,f[s],f[r]);if(a<=l)return!0}}return!1}}:{}),i.Polygon.include(i.Path.CANVAS?{_containsPoint:function(e){var t=!1,n,r,s,o,u,a,f,l;if(i.Polyline.prototype._containsPoint.call(this,e,!0))return!0;for(o=0,f=this._parts.length;o<f;o++){n=this._parts[o];for(u=0,l=n.length,a=l-1;u<l;a=u++)r=n[u],s=n[a],r.y>e.y!=s.y>e.y&&e.x<(s.x-r.x)*(e.y-r.y)/(s.y-r.y)+r.x&&(t=!t)}return t}}:{}),i.Circle.include(i.Path.CANVAS?{_drawPath:function(){var e=this._point;this._ctx.beginPath(),this._ctx.arc(e.x,e.y,this._radius,0,Math.PI*2,!1)},_containsPoint:function(e){var t=this._point,n=this.options.stroke?this.options.weight/2:0;return e.distanceTo(t)<=this._radius+n}}:{}),i.CircleMarker.include(i.Path.CANVAS?{_updateStyle:function(){i.Path.prototype._updateStyle.call(this)}}:{}),i.GeoJSON=i.FeatureGroup.extend({initialize:function(e,t){i.setOptions(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=i.Util.isArray(e)?e:e.features,n,r,s;if(t){for(n=0,r=t.length;n<r;n++)s=t[n],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(t[n]);return this}var o=this.options;if(o.filter&&!o.filter(e))return;var u=i.GeoJSON.geometryToLayer(e,o.pointToLayer,o.coordsToLatLng,o);return u.feature=i.GeoJSON.asFeature(e),u.defaultOptions=u.options,this.resetStyle(u),o.onEachFeature&&o.onEachFeature(e,u),this.addLayer(u)},resetStyle:function(e){var t=this.options.style;t&&(i.Util.extend(e.options,e.defaultOptions),this._setLayerStyle(e,t))},setStyle:function(e){this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){typeof t=="function"&&(t=t(e.feature)),e.setStyle&&e.setStyle(t)}}),i.extend(i.GeoJSON,{geometryToLayer:function(e,t,n,r){var s=e.type==="Feature"?e.geometry:e,o=s.coordinates,u=[],a,f,l,c;n=n||this.coordsToLatLng;switch(s.type){case"Point":return a=n(o),t?t(e,a):new i.Marker(a);case"MultiPoint":for(l=0,c=o.length;l<c;l++)a=n(o[l]),u.push(t?t(e,a):new i.Marker(a));return new i.FeatureGroup(u);case"LineString":return f=this.coordsToLatLngs(o,0,n),new i.Polyline(f,r);case"Polygon":if(o.length===2&&!o[1].length)throw new Error("Invalid GeoJSON object.");return f=this.coordsToLatLngs(o,1,n),new i.Polygon(f,r);case"MultiLineString":return f=this.coordsToLatLngs(o,1,n),new i.MultiPolyline(f,r);case"MultiPolygon":return f=this.coordsToLatLngs(o,2,n),new i.MultiPolygon(f,r);case"GeometryCollection":for(l=0,c=s.geometries.length;l<c;l++)u.push(this.geometryToLayer({geometry:s.geometries[l],type:"Feature",properties:e.properties},t,n,r));return new i.FeatureGroup(u);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(e){return new i.LatLng(e[1],e[0],e[2])},coordsToLatLngs:function(e,t,n){var r,i,s,o=[];for(i=0,s=e.length;i<s;i++)r=t?this.coordsToLatLngs(e[i],t-1,n):(n||this.coordsToLatLng)(e[i]),o.push(r);return o},latLngToCoords:function(e){var t=[e.lng,e.lat];return e.alt!==n&&t.push(e.alt),t},latLngsToCoords:function(e){var t=[];for(var n=0,r=e.length;n<r;n++)t.push(i.GeoJSON.latLngToCoords(e[n]));return t},getFeature:function(e,t){return e.feature?i.extend({},e.feature,{geometry:t}):i.GeoJSON.asFeature(t)},asFeature:function(e){return e.type==="Feature"?e:{type:"Feature",properties:{},geometry:e}}});var o={toGeoJSON:function(){return i.GeoJSON.getFeature(this,{type:"Point",coordinates:i.GeoJSON.latLngToCoords(this.getLatLng())})}};i.Marker.include(o),i.Circle.include(o),i.CircleMarker.include(o),i.Polyline.include({toGeoJSON:function(){return i.GeoJSON.getFeature(this,{type:"LineString",coordinates:i.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),i.Polygon.include({toGeoJSON:function(){var e=[i.GeoJSON.latLngsToCoords(this.getLatLngs())],t,n,r;e[0].push(e[0][0]);if(this._holes)for(t=0,n=this._holes.length;t<n;t++)r=i.GeoJSON.latLngsToCoords(this._holes[t]),r.push(r[0]),e.push(r);return i.GeoJSON.getFeature(this,{type:"Polygon",coordinates:e})}}),function(){function e(e){return function(){var t=[];return this.eachLayer(function(e){t.push(e.toGeoJSON().geometry.coordinates)}),i.GeoJSON.getFeature(this,{type:e,coordinates:t})}}i.MultiPolyline.include({toGeoJSON:e("MultiLineString")}),i.MultiPolygon.include({toGeoJSON:e("MultiPolygon")}),i.LayerGroup.include({toGeoJSON:function(){var t=this.feature&&this.feature.geometry,n=[],r;if(t&&t.type==="MultiPoint")return e("MultiPoint").call(this);var s=t&&t.type==="GeometryCollection";return this.eachLayer(function(e){e.toGeoJSON&&(r=e.toGeoJSON(),n.push(s?r.geometry:i.GeoJSON.asFeature(r)))}),s?i.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),i.geoJson=function(e,t){return new i.GeoJSON(e,t)},i.DomEvent={addListener:function(e,t,n,r){var s=i.stamp(n),o="_leaflet_"+t+s,u,a,f;return e[o]?this:(u=function(t){return n.call(r||e,t||i.DomEvent._getEvent())},i.Browser.pointer&&t.indexOf("touch")===0?this.addPointerListener(e,t,u,s):(i.Browser.touch&&t==="dblclick"&&this.addDoubleTapListener&&this.addDoubleTapListener(e,u,s),"addEventListener"in e?t==="mousewheel"?(e.addEventListener("DOMMouseScroll",u,!1),e.addEventListener(t,u,!1)):t==="mouseenter"||t==="mouseleave"?(a=u,f=t==="mouseenter"?"mouseover":"mouseout",u=function(t){if(!i.DomEvent._checkMouse(e,t))return;return a(t)},e.addEventListener(f,u,!1)):t==="click"&&i.Browser.android?(a=u,u=function(e){return i.DomEvent._filterClick(e,a)},e.addEventListener(t,u,!1)):e.addEventListener(t,u,!1):"attachEvent"in e&&e.attachEvent("on"+t,u),e[o]=u,this))},removeListener:function(e,t,n){var r=i.stamp(n),s="_leaflet_"+t+r,o=e[s];return o?(i.Browser.pointer&&t.indexOf("touch")===0?this.removePointerListener(e,t,r):i.Browser.touch&&t==="dblclick"&&this.removeDoubleTapListener?this.removeDoubleTapListener(e,r):"removeEventListener"in e?t==="mousewheel"?(e.removeEventListener("DOMMouseScroll",o,!1),e.removeEventListener(t,o,!1)):t==="mouseenter"||t==="mouseleave"?e.removeEventListener(t==="mouseenter"?"mouseover":"mouseout",o,!1):e.removeEventListener(t,o,!1):"detachEvent"in e&&e.detachEvent("on"+t,o),e[s]=null,this):this},stopPropagation:function(e){return e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,i.DomEvent._skipped(e),this},disableScrollPropagation:function(e){var t=i.DomEvent.stopPropagation;return i.DomEvent.on(e,"mousewheel",t).on(e,"MozMousePixelScroll",t)},disableClickPropagation:function(e){var t=i.DomEvent.stopPropagation;for(var n=i.Draggable.START.length-1;n>=0;n--)i.DomEvent.on(e,i.Draggable.START[n],t);return i.DomEvent.on(e,"click",i.DomEvent._fakeStop).on(e,"dblclick",t)},preventDefault:function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this},stop:function(e){return i.DomEvent.preventDefault(e).stopPropagation(e)},getMousePosition:function(e,t){if(!t)return new i.Point(e.clientX,e.clientY);var n=t.getBoundingClientRect();return new i.Point(e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop)},getWheelDelta:function(e){var t=0;return e.wheelDelta&&(t=e.wheelDelta/120),e.detail&&(t=-e.detail/3),t},_skipEvents:{},_fakeStop:function(e){i.DomEvent._skipEvents[e.type]=!0},_skipped:function(e){var t=this._skipEvents[e.type];return this._skipEvents[e.type]=!1,t},_checkMouse:function(e,t){var n=t.relatedTarget;if(!n)return!0;try{while(n&&n!==e)n=n.parentNode}catch(r){return!1}return n!==e},_getEvent:function(){var t=e.event;if(!t){var n=arguments.callee.caller;while(n){t=n.arguments[0];if(t&&e.Event===t.constructor)break;n=n.caller}}return t},_filterClick:function(e,t){var n=e.timeStamp||e.originalEvent.timeStamp,r=i.DomEvent._lastClick&&n-i.DomEvent._lastClick;if(r&&r>100&&r<500||e.target._simulatedClick&&!e._simulated){i.DomEvent.stop(e);return}return i.DomEvent._lastClick=n,t(e)}},i.DomEvent.on=i.DomEvent.addListener,i.DomEvent.off=i.DomEvent.removeListener,i.Draggable=i.Class.extend({includes:i.Mixin.Events,statics:{START:i.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(e,t){this._element=e,this._dragStartTarget=t||e},enable:function(){if(this._enabled)return;for(var e=i.Draggable.START.length-1;e>=0;e--)i.DomEvent.on(this._dragStartTarget,i.Draggable.START[e],this._onDown,this);this._enabled=!0},disable:function(){if(!this._enabled)return;for(var e=i.Draggable.START.length-1;e>=0;e--)i.DomEvent.off(this._dragStartTarget,i.Draggable.START[e],this._onDown,this);this._enabled=!1,this._moved=!1},_onDown:function(e){this._moved=!1;if(e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)return;i.DomEvent.stopPropagation(e);if(i.Draggable._disabled)return;i.DomUtil.disableImageDrag(),i.DomUtil.disableTextSelection();if(this._moving)return;var n=e.touches?e.touches[0]:e;this._startPoint=new i.Point(n.clientX,n.clientY),this._startPos=this._newPos=i.DomUtil.getPosition(this._element),i.DomEvent.on(t,i.Draggable.MOVE[e.type],this._onMove,this).on(t,i.Draggable.END[e.type],this._onUp,this)},_onMove:function(e){if(e.touches&&e.touches.length>1){this._moved=!0;return}var n=e.touches&&e.touches.length===1?e.touches[0]:e,r=new i.Point(n.clientX,n.clientY),s=r.subtract(this._startPoint);if(!s.x&&!s.y)return;if(i.Browser.touch&&Math.abs(s.x)+Math.abs(s.y)<3)return;i.DomEvent.preventDefault(e),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=i.DomUtil.getPosition(this._element).subtract(s),i.DomUtil.addClass(t.body,"leaflet-dragging"),this._lastTarget=e.target||e.srcElement,i.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,i.Util.cancelAnimFrame(this._animRequest),this._animRequest=i.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)},_updatePosition:function(){this.fire("predrag"),i.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){i.DomUtil.removeClass(t.body,"leaflet-dragging"),this._lastTarget&&(i.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var e in i.Draggable.MOVE)i.DomEvent.off(t,i.Draggable.MOVE[e],this._onMove).off(t,i.Draggable.END[e],this._onUp);i.DomUtil.enableImageDrag(),i.DomUtil.enableTextSelection(),this._moved&&this._moving&&(i.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),i.Handler=i.Class.extend({initialize:function(e){this._map=e},enable:function(){if(this._enabled)return;this._enabled=!0,this.addHooks()},disable:function(){if(!this._enabled)return;this._enabled=!1,this.removeHooks()},enabled:function(){return!!this._enabled}}),i.Map.mergeOptions({dragging:!0,inertia:!i.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:Infinity,inertiaThreshold:i.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),i.Map.Drag=i.Handler.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new i.Draggable(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),e.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),e.on("viewreset",this._onViewReset,this),e.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var e=this._map;e._panAnim&&e._panAnim.stop(),e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var e=this._lastTime=+(new Date),t=this._lastPos=this._draggable._newPos;this._positions.push(t),this._times.push(e),e-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var e=this._map.getSize()._divideBy(2),t=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,s=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(s+n)?i:s;this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=+(new Date)-this._lastTime,s=!n.inertia||r>n.inertiaThreshold||!this._positions[0];t.fire("dragend",e);if(s)t.fire("moveend");else{var o=this._lastPos.subtract(this._positions[0]),u=(this._lastTime+r-this._times[0])/1e3,a=n.easeLinearity,f=o.multiplyBy(a/u),l=f.distanceTo([0,0]),c=Math.min(n.inertiaMaxSpeed,l),h=f.multiplyBy(c/l),p=c/(n.inertiaDeceleration*a),d=h.multiplyBy(-p/2).round();!d.x||!d.y?t.fire("moveend"):(d=t._limitOffset(d,t.options.maxBounds),i.Util.requestAnimFrame(function(){t.panBy(d,{duration:p,easeLinearity:a,noMoveStart:!0})}))}}}),i.Map.addInitHook("addHandler","dragging",i.Map.Drag),i.Map.mergeOptions({doubleClickZoom:!0}),i.Map.DoubleClickZoom=i.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom()+(e.originalEvent.shiftKey?-1:1);t.options.doubleClickZoom==="center"?t.setZoom(n):t.setZoomAround(e.containerPoint,n)}}),i.Map.addInitHook("addHandler","doubleClickZoom",i.Map.DoubleClickZoom),i.Map.mergeOptions({scrollWheelZoom:!0}),i.Map.ScrollWheelZoom=i.Handler.extend({addHooks:function(){i.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),i.DomEvent.on(this._map._container,"MozMousePixelScroll",i.DomEvent.preventDefault),this._delta=0},removeHooks:function(){i.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),i.DomEvent.off(this._map._container,"MozMousePixelScroll",i.DomEvent.preventDefault)},_onWheelScroll:function(e){var t=i.DomEvent.getWheelDelta(e);this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||(this._startTime=+(new Date));var n=Math.max(40-(+(new Date)-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i.bind(this._performZoom,this),n),i.DomEvent.preventDefault(e),i.DomEvent.stopPropagation(e)},_performZoom:function(){var e=this._map,t=this._delta,n=e.getZoom();t=t>0?Math.ceil(t):Math.floor(t),t=Math.max(Math.min(t,4),-4),t=e._limitZoom(n+t)-n,this._delta=0,this._startTime=null;if(!t)return;e.options.scrollWheelZoom==="center"?e.setZoom(n+t):e.setZoomAround(this._lastMousePos,n+t)}}),i.Map.addInitHook("addHandler","scrollWheelZoom",i.Map.ScrollWheelZoom),i.extend(i.DomEvent,{_touchstart:i.Browser.msPointer?"MSPointerDown":i.Browser.pointer?"pointerdown":"touchstart",_touchend:i.Browser.msPointer?"MSPointerUp":i.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(e,n,r){function p(e){var t;i.Browser.pointer?(h.push(e.pointerId),t=h.length):t=e.touches.length;if(t>1)return;var n=Date.now(),r=n-(s||n);a=e.touches?e.touches[0]:e,o=r>0&&r<=u,s=n}function d(e){if(i.Browser.pointer){var t=h.indexOf(e.pointerId);if(t===-1)return;h.splice(t,1)}if(o){if(i.Browser.pointer){var r={},u;for(var f in a)u=a[f],typeof u=="function"?r[f]=u.bind(a):r[f]=u;a=r}a.type="dblclick",n(a),s=null}}var s,o=!1,u=250,a,f="_leaflet_",l=this._touchstart,c=this._touchend,h=[];e[f+l+r]=p,e[f+c+r]=d;var v=i.Browser.pointer?t.documentElement:e;return e.addEventListener(l,p,!1),v.addEventListener(c,d,!1),i.Browser.pointer&&v.addEventListener(i.DomEvent.POINTER_CANCEL,d,!1),this},removeDoubleTapListener:function(e,n){var r="_leaflet_";return e.removeEventListener(this._touchstart,e[r+this._touchstart+n],!1),(i.Browser.pointer?t.documentElement:e).removeEventListener(this._touchend,e[r+this._touchend+n],!1),i.Browser.pointer&&t.documentElement.removeEventListener(i.DomEvent.POINTER_CANCEL,e[r+this._touchend+n],!1),this}}),i.extend(i.DomEvent,{POINTER_DOWN:i.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:i.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:i.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:i.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(e,t,n,r){switch(t){case"touchstart":return this.addPointerListenerStart(e,t,n,r);case"touchend":return this.addPointerListenerEnd(e,t,n,r);case"touchmove":return this.addPointerListenerMove(e,t,n,r);default:throw"Unknown touch event type"}},addPointerListenerStart:function(e,n,r,s){var o="_leaflet_",u=this._pointers,a=function(e){i.DomEvent.preventDefault(e);var t=!1;for(var n=0;n<u.length;n++)if(u[n].pointerId===e.pointerId){t=!0;break}t||u.push(e),e.touches=u.slice(),e.changedTouches=[e],r(e)};e[o+"touchstart"+s]=a,e.addEventListener(this.POINTER_DOWN,a,!1);if(!this._pointerDocumentListener){var f=function(e){for(var t=0;t<u.length;t++)if(u[t].pointerId===e.pointerId){u.splice(t,1);break}};t.documentElement.addEventListener(this.POINTER_UP,f,!1),t.documentElement.addEventListener(this.POINTER_CANCEL,f,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(e,t,n,r){function o(e){if((e.pointerType===e.MSPOINTER_TYPE_MOUSE||e.pointerType==="mouse")&&e.buttons===0)return;for(var t=0;t<s.length;t++)if(s[t].pointerId===e.pointerId){s[t]=e;break}e.touches=s.slice(),e.changedTouches=[e],n(e)}var i="_leaflet_",s=this._pointers;return e[i+"touchmove"+r]=o,e.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(e,t,n,r){var i="_leaflet_",s=this._pointers,o=function(e){for(var t=0;t<s.length;t++)if(s[t].pointerId===e.pointerId){s.splice(t,1);break}e.touches=s.slice(),e.changedTouches=[e],n(e)};return e[i+"touchend"+r]=o,e.addEventListener(this.POINTER_UP,o,!1),e.addEventListener(this.POINTER_CANCEL,o,!1),this},removePointerListener:function(e,t,n){var r="_leaflet_",i=e[r+t+n];switch(t){case"touchstart":e.removeEventListener(this.POINTER_DOWN,i,!1);break;case"touchmove":e.removeEventListener(this.POINTER_MOVE,i,!1);break;case"touchend":e.removeEventListener(this.POINTER_UP,i,!1),e.removeEventListener(this.POINTER_CANCEL,i,!1)}return this}}),i.Map.mergeOptions({touchZoom:i.Browser.touch&&!i.Browser.android23,bounceAtZoomLimits:!0}),i.Map.TouchZoom=i.Handler.extend({addHooks:function(){i.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){i.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(e){var n=this._map;if(!e.touches||e.touches.length!==2||n._animatingZoom||this._zooming)return;var r=n.mouseEventToLayerPoint(e.touches[0]),s=n.mouseEventToLayerPoint(e.touches[1]),o=n._getCenterLayerPoint();this._startCenter=r.add(s)._divideBy(2),this._startDist=r.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=o.subtract(this._startCenter),n._panAnim&&n._panAnim.stop(),i.DomEvent.on(t,"touchmove",this._onTouchMove,this).on(t,"touchend",this._onTouchEnd,this),i.DomEvent.preventDefault(e)},_onTouchMove:function(e){var t=this._map;if(!e.touches||e.touches.length!==2||!this._zooming)return;var n=t.mouseEventToLayerPoint(e.touches[0]),r=t.mouseEventToLayerPoint(e.touches[1]);this._scale=n.distanceTo(r)/this._startDist,this._delta=n._add(r)._divideBy(2)._subtract(this._startCenter);if(this._scale===1)return;if(!t.options.bounceAtZoomLimits)if(t.getZoom()===t.getMinZoom()&&this._scale<1||t.getZoom()===t.getMaxZoom()&&this._scale>1)return;this._moved||(i.DomUtil.addClass(t._mapPane,"leaflet-touching"),t.fire("movestart").fire("zoomstart"),this._moved=!0),i.Util.cancelAnimFrame(this._animRequest),this._animRequest=i.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),i.DomEvent.preventDefault(e)},_updateOnMove:function(){var e=this._map,t=this._getScaleOrigin(),n=e.layerPointToLatLng(t),r=e.getScaleZoom(this._scale);e._animateZoom(n,r,this._startCenter,this._scale,this._delta,!1,!0)},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}var e=this._map;this._zooming=!1,i.DomUtil.removeClass(e._mapPane,"leaflet-touching"),i.Util.cancelAnimFrame(this._animRequest),i.DomEvent.off(t,"touchmove",this._onTouchMove).off(t,"touchend",this._onTouchEnd);var n=this._getScaleOrigin(),r=e.layerPointToLatLng(n),s=e.getZoom(),o=e.getScaleZoom(this._scale)-s,u=o>0?Math.ceil(o):Math.floor(o),a=e._limitZoom(s+u),f=e.getZoomScale(a)/this._scale;e._animateZoom(r,a,n,f)},_getScaleOrigin:function(){var e=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(e)}}),i.Map.addInitHook("addHandler","touchZoom",i.Map.TouchZoom),i.Map.mergeOptions({tap:!0,tapTolerance:15}),i.Map.Tap=i.Handler.extend({addHooks:function(){i.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){i.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(e){if(!e.touches)return;i.DomEvent.preventDefault(e),this._fireClick=!0;if(e.touches.length>1){this._fireClick=!1,clearTimeout(this._holdTimeout);return}var n=e.touches[0],r=n.target;this._startPos=this._newPos=new i.Point(n.clientX,n.clientY),r.tagName&&r.tagName.toLowerCase()==="a"&&i.DomUtil.addClass(r,"leaflet-active"),this._holdTimeout=setTimeout(i.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",n))},this),1e3),i.DomEvent.on(t,"touchmove",this._onMove,this).on(t,"touchend",this._onUp,this
)},_onUp:function(e){clearTimeout(this._holdTimeout),i.DomEvent.off(t,"touchmove",this._onMove,this).off(t,"touchend",this._onUp,this);if(this._fireClick&&e&&e.changedTouches){var n=e.changedTouches[0],r=n.target;r&&r.tagName&&r.tagName.toLowerCase()==="a"&&i.DomUtil.removeClass(r,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",n)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(e){var t=e.touches[0];this._newPos=new i.Point(t.clientX,t.clientY)},_simulateEvent:function(n,r){var i=t.createEvent("MouseEvents");i._simulated=!0,r.target._simulatedClick=!0,i.initMouseEvent(n,!0,!0,e,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),r.target.dispatchEvent(i)}}),i.Browser.touch&&!i.Browser.pointer&&i.Map.addInitHook("addHandler","tap",i.Map.Tap),i.Map.mergeOptions({boxZoom:!0}),i.Map.BoxZoom=i.Handler.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._moved=!1},addHooks:function(){i.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){i.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(e){this._moved=!1;if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;i.DomUtil.disableTextSelection(),i.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(e),i.DomEvent.on(t,"mousemove",this._onMouseMove,this).on(t,"mouseup",this._onMouseUp,this).on(t,"keydown",this._onKeyDown,this)},_onMouseMove:function(e){this._moved||(this._box=i.DomUtil.create("div","leaflet-zoom-box",this._pane),i.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var t=this._startLayerPoint,n=this._box,r=this._map.mouseEventToLayerPoint(e),s=r.subtract(t),o=new i.Point(Math.min(r.x,t.x),Math.min(r.y,t.y));i.DomUtil.setPosition(n,o),this._moved=!0,n.style.width=Math.max(0,Math.abs(s.x)-4)+"px",n.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),i.DomUtil.enableTextSelection(),i.DomUtil.enableImageDrag(),i.DomEvent.off(t,"mousemove",this._onMouseMove).off(t,"mouseup",this._onMouseUp).off(t,"keydown",this._onKeyDown)},_onMouseUp:function(e){this._finish();var t=this._map,n=t.mouseEventToLayerPoint(e);if(this._startLayerPoint.equals(n))return;var r=new i.LatLngBounds(t.layerPointToLatLng(this._startLayerPoint),t.layerPointToLatLng(n));t.fitBounds(r),t.fire("boxzoomend",{boxZoomBounds:r})},_onKeyDown:function(e){e.keyCode===27&&this._finish()}}),i.Map.addInitHook("addHandler","boxZoom",i.Map.BoxZoom),i.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),i.Map.Keyboard=i.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(e){this._map=e,this._setPanOffset(e.options.keyboardPanOffset),this._setZoomOffset(e.options.keyboardZoomOffset)},addHooks:function(){var e=this._map._container;e.tabIndex===-1&&(e.tabIndex="0"),i.DomEvent.on(e,"focus",this._onFocus,this).on(e,"blur",this._onBlur,this).on(e,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var e=this._map._container;i.DomEvent.off(e,"focus",this._onFocus,this).off(e,"blur",this._onBlur,this).off(e,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(this._focused)return;var n=t.body,r=t.documentElement,i=n.scrollTop||r.scrollTop,s=n.scrollLeft||r.scrollLeft;this._map._container.focus(),e.scrollTo(s,i)},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomOffset:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){i.DomEvent.on(t,"keydown",this._onKeyDown,this)},_removeHooks:function(){i.DomEvent.off(t,"keydown",this._onKeyDown,this)},_onKeyDown:function(e){var t=e.keyCode,n=this._map;if(t in this._panKeys){if(n._panAnim&&n._panAnim._inProgress)return;n.panBy(this._panKeys[t]),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds)}else{if(!(t in this._zoomKeys))return;n.setZoom(n.getZoom()+this._zoomKeys[t])}i.DomEvent.stop(e)}}),i.Map.addInitHook("addHandler","keyboard",i.Map.Keyboard),i.Handler.MarkerDrag=i.Handler.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||(this._draggable=new i.Draggable(e,e)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),i.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),i.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var e=this._marker,t=e._shadow,n=i.DomUtil.getPosition(e._icon),r=e._map.layerPointToLatLng(n);t&&i.DomUtil.setPosition(t,n),e._latlng=r,e.fire("move",{latlng:r}).fire("drag")},_onDragEnd:function(e){this._marker.fire("moveend").fire("dragend",e)}}),i.Control=i.Class.extend({options:{position:"topright"},initialize:function(e){i.setOptions(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return i.DomUtil.addClass(t,"leaflet-control"),n.indexOf("bottom")!==-1?r.insertBefore(t,r.firstChild):r.appendChild(t),this},removeFrom:function(e){var t=this.getPosition(),n=e._controlCorners[t];return n.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(e),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),i.control=function(e){return new i.Control(e)},i.Map.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.removeFrom(this),this},_initControlPos:function(){function r(r,s){var o=t+r+" "+t+s;e[r+s]=i.DomUtil.create("div",o,n)}var e=this._controlCorners={},t="leaflet-",n=this._controlContainer=i.DomUtil.create("div",t+"control-container",this._container);r("top","left"),r("top","right"),r("bottom","left"),r("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),i.Control.Zoom=i.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(e){var t="leaflet-control-zoom",n=i.DomUtil.create("div",t+" leaflet-bar");return this._map=e,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,t+"-in",n,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,t+"-out",n,this._zoomOut,this),this._updateDisabled(),e.on("zoomend zoomlevelschange",this._updateDisabled,this),n},onRemove:function(e){e.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(e){this._map.zoomIn(e.shiftKey?3:1)},_zoomOut:function(e){this._map.zoomOut(e.shiftKey?3:1)},_createButton:function(e,t,n,r,s,o){var u=i.DomUtil.create("a",n,r);u.innerHTML=e,u.href="#",u.title=t;var a=i.DomEvent.stopPropagation;return i.DomEvent.on(u,"click",a).on(u,"mousedown",a).on(u,"dblclick",a).on(u,"click",i.DomEvent.preventDefault).on(u,"click",s,o).on(u,"click",this._refocusOnMap,o),u},_updateDisabled:function(){var e=this._map,t="leaflet-disabled";i.DomUtil.removeClass(this._zoomInButton,t),i.DomUtil.removeClass(this._zoomOutButton,t),e._zoom===e.getMinZoom()&&i.DomUtil.addClass(this._zoomOutButton,t),e._zoom===e.getMaxZoom()&&i.DomUtil.addClass(this._zoomInButton,t)}}),i.Map.mergeOptions({zoomControl:!0}),i.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new i.Control.Zoom,this.addControl(this.zoomControl))}),i.control.zoom=function(e){return new i.Control.Zoom(e)},i.Control.Attribution=i.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(e){i.setOptions(this,e),this._attributions={}},onAdd:function(e){this._container=i.DomUtil.create("div","leaflet-control-attribution"),i.DomEvent.disableClickPropagation(this._container);for(var t in e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return e.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(e){e.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){if(!e)return;return this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this},removeAttribution:function(e){if(!e)return;return this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(!this._map)return;var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(", ")),this._container.innerHTML=n.join(" | ")},_onLayerAdd:function(e){e.layer.getAttribution&&this.addAttribution(e.layer.getAttribution())},_onLayerRemove:function(e){e.layer.getAttribution&&this.removeAttribution(e.layer.getAttribution())}}),i.Map.mergeOptions({attributionControl:!0}),i.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new i.Control.Attribution).addTo(this))}),i.control.attribution=function(e){return new i.Control.Attribution(e)},i.Control.Scale=i.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(e){this._map=e;var t="leaflet-control-scale",n=i.DomUtil.create("div",t),r=this.options;return this._addScales(r,t,n),e.on(r.updateWhenIdle?"moveend":"move",this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=i.DomUtil.create("div",t+"-line",n)),e.imperial&&(this._iScale=i.DomUtil.create("div",t+"-line",n))},_update:function(){var e=this._map.getBounds(),t=e.getCenter().lat,n=6378137*Math.PI*Math.cos(t*Math.PI/180),r=n*(e.getNorthEast().lng-e.getSouthWest().lng)/180,i=this._map.getSize(),s=this.options,o=0;i.x>0&&(o=r*(s.maxWidth/i.x)),this._updateScales(s,o)},_updateScales:function(e,t){e.metric&&t&&this._updateMetric(t),e.imperial&&t&&this._updateImperial(t)},_updateMetric:function(e){var t=this._getRoundNum(e);this._mScale.style.width=this._getScaleWidth(t/e)+"px",this._mScale.innerHTML=t<1e3?t+" m":t/1e3+" km"},_updateImperial:function(e){var t=e*3.2808399,n=this._iScale,r,i,s;t>5280?(r=t/5280,i=this._getRoundNum(r),n.style.width=this._getScaleWidth(i/r)+"px",n.innerHTML=i+" mi"):(s=this._getRoundNum(t),n.style.width=this._getScaleWidth(s/t)+"px",n.innerHTML=s+" ft")},_getScaleWidth:function(e){return Math.round(this.options.maxWidth*e)-10},_getRoundNum:function(e){var t=Math.pow(10,(Math.floor(e)+"").length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),i.control.scale=function(e){return new i.Control.Scale(e)},i.Control.Layers=i.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(e,t,n){i.setOptions(this,n),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var r in e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){return this._initLayout(),this._update(),e.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(e){e.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._update(),this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._update(),this},removeLayer:function(e){var t=i.stamp(e);return delete this._layers[t],this._update(),this},_initLayout:function(){var e="leaflet-control-layers",t=this._container=i.DomUtil.create("div",e);t.setAttribute("aria-haspopup",!0),i.Browser.touch?i.DomEvent.on(t,"click",i.DomEvent.stopPropagation):i.DomEvent.disableClickPropagation(t).disableScrollPropagation(t);var n=this._form=i.DomUtil.create("form",e+"-list");if(this.options.collapsed){i.Browser.android||i.DomEvent.on(t,"mouseover",this._expand,this).on(t,"mouseout",this._collapse,this);var r=this._layersLink=i.DomUtil.create("a",e+"-toggle",t);r.href="#",r.title="Layers",i.Browser.touch?i.DomEvent.on(r,"click",i.DomEvent.stop).on(r,"click",this._expand,this):i.DomEvent.on(r,"focus",this._expand,this),i.DomEvent.on(n,"click",function(){setTimeout(i.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=i.DomUtil.create("div",e+"-base",n),this._separator=i.DomUtil.create("div",e+"-separator",n),this._overlaysList=i.DomUtil.create("div",e+"-overlays",n),t.appendChild(n)},_addLayer:function(e,t,n){var r=i.stamp(e);this._layers[r]={layer:e,name:t,overlay:n},this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex))},_update:function(){if(!this._container)return;this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var e=!1,t=!1,n,r;for(n in this._layers)r=this._layers[n],this._addItem(r),t=t||r.overlay,e=e||!r.overlay;this._separator.style.display=t&&e?"":"none"},_onLayerChange:function(e){var t=this._layers[i.stamp(e.layer)];if(!t)return;this._handlingClick||this._update();var n=t.overlay?e.type==="layeradd"?"overlayadd":"overlayremove":e.type==="layeradd"?"baselayerchange":null;n&&this._map.fire(n,t)},_createRadioElement:function(e,n){var r='<input type="radio" class="leaflet-control-layers-selector" name="'+e+'"';n&&(r+=' checked="checked"'),r+="/>";var i=t.createElement("div");return i.innerHTML=r,i.firstChild},_addItem:function(e){var n=t.createElement("label"),r,s=this._map.hasLayer(e.layer);e.overlay?(r=t.createElement("input"),r.type="checkbox",r.className="leaflet-control-layers-selector",r.defaultChecked=s):r=this._createRadioElement("leaflet-base-layers",s),r.layerId=i.stamp(e.layer),i.DomEvent.on(r,"click",this._onInputClick,this);var o=t.createElement("span");o.innerHTML=" "+e.name,n.appendChild(r),n.appendChild(o);var u=e.overlay?this._overlaysList:this._baseLayersList;return u.appendChild(n),n},_onInputClick:function(){var e,t,n,r=this._form.getElementsByTagName("input"),i=r.length;this._handlingClick=!0;for(e=0;e<i;e++)t=r[e],n=this._layers[t.layerId],t.checked&&!this._map.hasLayer(n.layer)?this._map.addLayer(n.layer):!t.checked&&this._map.hasLayer(n.layer)&&this._map.removeLayer(n.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){i.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),i.control.layers=function(e,t,n){return new i.Control.Layers(e,t,n)},i.PosAnimation=i.Class.extend({includes:i.Mixin.Events,run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._newPos=t,this.fire("start"),e.style[i.DomUtil.TRANSITION]="all "+(n||.25)+"s cubic-bezier(0,0,"+(r||.5)+",1)",i.DomEvent.on(e,i.DomUtil.TRANSITION_END,this._onTransitionEnd,this),i.DomUtil.setPosition(e,t),i.Util.falseFn(e.offsetWidth),this._stepTimer=setInterval(i.bind(this._onStep,this),50)},stop:function(){if(!this._inProgress)return;i.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),i.Util.falseFn(this._el.offsetWidth)},_onStep:function(){var e=this._getPos();if(!e){this._onTransitionEnd();return}this._el._leaflet_pos=e,this.fire("step")},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var t,n,r,s=this._el,o=e.getComputedStyle(s);if(i.Browser.any3d){r=o[i.DomUtil.TRANSFORM].match(this._transformRe);if(!r)return;t=parseFloat(r[1]),n=parseFloat(r[2])}else t=parseFloat(o.left),n=parseFloat(o.top);return new i.Point(t,n,!0)},_onTransitionEnd:function(){i.DomEvent.off(this._el,i.DomUtil.TRANSITION_END,this._onTransitionEnd,this);if(!this._inProgress)return;this._inProgress=!1,this._el.style[i.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end")}}),i.Map.include({setView:function(e,t,r){t=t===n?this._zoom:this._limitZoom(t),e=this._limitCenter(i.latLng(e),t,this.options.maxBounds),r=r||{},this._panAnim&&this._panAnim.stop();if(this._loaded&&!r.reset&&r!==!0){r.animate!==n&&(r.zoom=i.extend({animate:r.animate},r.zoom),r.pan=i.extend({animate:r.animate},r.pan));var s=this._zoom!==t?this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom):this._tryAnimatedPan(e,r.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(e,t),this},panBy:function(e,t){e=i.point(e).round(),t=t||{};if(!e.x&&!e.y)return this;this._panAnim||(this._panAnim=new i.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire("movestart");if(t.animate!==!1){i.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var n=this._getMapPanePos().subtract(e);this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){i.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._floor();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)}}),i.PosAnimation=i.DomUtil.TRANSITION?i.PosAnimation:i.PosAnimation.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=i.DomUtil.getPosition(e),this._offset=t.subtract(this._startPos),this._startTime=+(new Date),this.fire("start"),this._animate()},stop:function(){if(!this._inProgress)return;this._step(),this._complete()},_animate:function(){this._animId=i.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var e=+(new Date)-this._startTime,t=this._duration*1e3;e<t?this._runFrame(this._easeOut(e/t)):(this._runFrame(1),this._complete())},_runFrame:function(e){var t=this._startPos.add(this._offset.multiplyBy(e));i.DomUtil.setPosition(this._el,t),this.fire("step")},_complete:function(){i.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(e){return 1-Math.pow(1-e,this._easeOutPower)}}),i.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),i.DomUtil.TRANSITION&&i.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&i.DomUtil.TRANSITION&&i.Browser.any3d&&!i.Browser.android23&&!i.Browser.mobileOpera,this._zoomAnimated&&i.DomEvent.on(this._mapPane,i.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),i.Map.include(i.DomUtil.TRANSITION?{_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;n=n||{};if(!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r),s=this._getCenterLayerPoint()._add(i);return n.animate!==!0&&!this.getSize().contains(i)?!1:(this.fire("movestart").fire("zoomstart"),this._animateZoom(e,t,s,r,null,!0),!0)},_animateZoom:function(e,t,n,r,s,o,u){u||(this._animatingZoom=!0),i.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=e,this._animateToZoom=t,i.Draggable&&(i.Draggable._disabled=!0),i.Util.requestAnimFrame(function(){this.fire("zoomanim",{center:e,zoom:t,origin:n,scale:r,delta:s,backwards:o})},this)},_onZoomTransitionEnd:function(){this._animatingZoom=!1,i.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),i.Draggable&&(i.Draggable._disabled=!1)}}:{}),i.TileLayer.include({_animateZoom:function(e){this._animating||(this._animating=!0,this._prepareBgBuffer());var t=this._bgBuffer,n=i.DomUtil.TRANSFORM,r=e.delta?i.DomUtil.getTranslateString(e.delta):t.style[n],s=i.DomUtil.getScaleString(e.scale,e.origin);t.style[n]=e.backwards?s+" "+r:r+" "+s},_endZoomAnim:function(){var e=this._tileContainer,t=this._bgBuffer;e.style.visibility="",e.parentNode.appendChild(e),i.Util.falseFn(t.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var e=this._map;e&&!e._animatingZoom&&!e.touchZoom._zooming&&(this._bgBuffer.innerHTML="",this._bgBuffer.style[i.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var e=this._tileContainer,t=this._bgBuffer,n=this._getLoadedTilesPercentage(t),r=this._getLoadedTilesPercentage(e);if(t&&n>.5&&r<.5){e.style.visibility="hidden",this._stopLoadingImages(e);return}t.style.visibility="hidden",t.style[i.DomUtil.TRANSFORM]="",this._tileContainer=t,t=this._bgBuffer=e,this._stopLoadingImages(t),clearTimeout(this._clearBgBufferTimer)},_getLoadedTilesPercentage:function(e){var t=e.getElementsByTagName("img"),n,r,i=0;for(n=0,r=t.length;n<r;n++)t[n].complete&&i++;return i/r},_stopLoadingImages:function(e){var t=Array.prototype.slice.call(e.getElementsByTagName("img")),n,r,s;for(n=0,r=t.length;n<r;n++)s=t[n],s.complete||(s.onload=i.Util.falseFn,s.onerror=i.Util.falseFn,s.src=i.Util.emptyImageUrl,s.parentNode.removeChild(s))}}),i.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:Infinity,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(e){e=this._locateOptions=i.extend(this._defaultLocateOptions,e);if(!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var t=i.bind(this._handleGeolocationResponse,this),n=i.bind(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,n,e):navigator.geolocation.getCurrentPosition(t,n,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){var t=e.code,n=e.message||(t===1?"permission denied":t===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:t,message:"Geolocation error: "+n+"."})},_handleGeolocationResponse:function(e){var t=e.coords.latitude,n=e.coords.longitude,r=new i.LatLng(t,n),s=180*e.coords.accuracy/40075017,o=s/Math.cos(i.LatLng.DEG_TO_RAD*t),u=i.latLngBounds([t-s,n-o],[t+s,n+o]),a=this._locateOptions;if(a.setView){var f=Math.min(this.getBoundsZoom(u),a.maxZoom);this.setView(r,f)}var l={latlng:r,bounds:u,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]=="number"&&(l[c]=e.coords[c]);this.fire("locationfound",l)}})}(window,document),!function(e,t,n){t[e]=n(e,t)}("bean",this,function(e,t){var n=window,r=t[e],i=/over|out/,s=/[^\.]*(?=\..*)\.|.*/,o=/\..*/,u="addEventListener",a="attachEvent",f="removeEventListener",l="detachEvent",c=document||{},h=c.documentElement||{},p=h[u],d=p?u:a,v=Array.prototype.slice,m=/click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,g=/mouse.*(wheel|scroll)/i,y=/^text/i,b=/^touch|^gesture/i,w={one:1},E=function(e,t,n){for(n=0;n<t.length;n++)e[t[n]]=1;return e}({},("click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange error abort scroll "+(p?"show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend MSPointerUp MSPointerDown MSPointerCancel MSPointerMove MSPointerOver MSPointerOut message readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ":"")).split(" ")),S=function(){function e(e,t){while((t=t.parentNode)!==null)if(t===e)return!0;return!1}function t(t){var n=t.relatedTarget;return n?n!==this&&n.prefix!=="xul"&&!/document/.test(this.toString())&&!e(this,n):n===null}return{mouseenter:{base:"mouseover",condition:t},mouseleave:{base:"mouseout",condition:t},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),x=function(){var e="altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which".split(" "),t=e.concat("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")),n=t.concat("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis".split(" ")),r=e.concat("char charCode key keyCode keyIdentifier keyLocation".split(" ")),s=e.concat(["data"]),o=e.concat("touches targetTouches changedTouches scale rotation".split(" ")),u="preventDefault",a=function(e){return function(){e[u]?e[u]():e.returnValue=!1}},f="stopPropagation",l=function(e){return function(){e[f]?e[f]():e.cancelBubble=!0}},p=function(e){return function(){e[u](),e[f](),e.stopped=!0}},d=function(e,t,n){var r,i;for(r=n.length;r--;)i=n[r],!(i in t)&&i in e&&(t[i]=e[i])};return function(v,w){var E={originalEvent:v,isNative:w};if(!v)return E;var S,x=v.type,T=v.target||v.srcElement;E[u]=a(v),E[f]=l(v),E.stop=p(E),E.target=T&&T.nodeType===3?T.parentNode:T;if(w){if(x.indexOf("key")!==-1)S=r,E.keyCode=v.which||v.keyCode;else if(m.test(x)){S=t,E.rightClick=v.which===3||v.button===2,E.pos={x:0,y:0};if(v.pageX||v.pageY)E.clientX=v.pageX,E.clientY=v.pageY;else if(v.clientX||v.clientY)E.clientX=v.clientX+c.body.scrollLeft+h.scrollLeft,E.clientY=v.clientY+c.body.scrollTop+h.scrollTop;i.test(x)&&(E.relatedTarget=v.relatedTarget||v[(x==="mouseover"?"from":"to")+"Element"])}else b.test(x)?S=o:g.test(x)?S=n:y.test(x)&&(S=s);d(v,E,S||e)}return E}}(),T=function(e,t){return!p&&!t&&(e===c||e===n)?h:e},N=function(){function e(e,t,n,r,i){this.element=e,this.type=t,this.handler=n,this.original=r,this.namespaces=i,this.custom=S[t],this.isNative=E[t]&&e[d],this.eventType=p||this.isNative?t:"propertychange",this.customType=!p&&!this.isNative&&t,this.target=T(e,this.isNative),this.eventSupport=this.target[d]}return e.prototype={inNamespaces:function(e){var t,n;if(!e)return!0;if(!this.namespaces)return!1;for(t=e.length;t--;)for(n=this.namespaces.length;n--;)if(e[t]===this.namespaces[n])return!0;return!1},matches:function(e,t,n){return this.element===e&&(!t||this.original===t)&&(!n||this.handler===n)}},e}(),C=function(){var e={},t=function(n,r,i,s,o){if(!r||r==="*")for(var u in e)u.charAt(0)==="$"&&t(n,u.substr(1),i,s,o);else{var a=0,f,l=e["$"+r],c=n==="*";if(!l)return;for(f=l.length;a<f;a++)if(c||l[a].matches(n,i,s))if(!o(l[a],l,a,r))return}},n=function(t,n,r){var i,s=e["$"+n];if(s)for(i=s.length;i--;)if(s[i].matches(t,r,null))return!0;return!1},r=function(e,n,r){var i=[];return t(e,n,r,null,function(e){return i.push(e)}),i},i=function(t){return(e["$"+t.type]||(e["$"+t.type]=[])).push(t),t},s=function(n){t(n.element,n.type,null,n.handler,function(t,n,r){return n.splice(r,1),n.length===0&&delete e["$"+t.type],!1})},o=function(){var t,n=[];for(t in e)t.charAt(0)==="$"&&(n=n.concat(e[t]));return n};return{has:n,get:r,put:i,del:s,entries:o}}(),k=p?function(e,t,n,r){e[r?u:f](t,n,!1)}:function(e,t,n,r,i){i&&r&&e["_on"+i]===null&&(e["_on"+i]=0),e[r?a:l]("on"+t,n)},L=function(e,t,r){return function(i){return i=x(i||((this.ownerDocument||this.document||this).parentWindow||n).event,!0),t.apply(e,[i].concat(r))}},A=function(e,t,r,i,s,o){return function(u){if(i?i.apply(this,arguments):p?!0:u&&u.propertyName==="_on"+r||!u)u&&(u=x(u||((this.ownerDocument||this.document||this).parentWindow||n).event,o)),t.apply(e,u&&(!s||s.length===0)?arguments:v.call(arguments,u?0:1).concat(s))}},O=function(e,t,n,r,i){return function(){e(t,n,i),r.apply(this,arguments)}},M=function(e,t,n,r){var i,s,u,a=t&&t.replace(o,""),f=C.get(e,a,n);for(i=0,s=f.length;i<s;i++)f[i].inNamespaces(r)&&((u=f[i]).eventSupport&&k(u.target,u.eventType,u.handler,!1,u.type),C.del(u))},_=function(e,t,n,r,i){var u,a=t.replace(o,""),f=t.replace(s,"").split(".");if(C.has(e,a,n))return e;a==="unload"&&(n=O(M,e,a,n,r)),S[a]&&(S[a].condition&&(n=A(e,n,a,S[a].condition,!0)),a=S[a].base||a),u=C.put(new N(e,a,n,r,f[0]&&f)),u.handler=u.isNative?L(e,u.handler,i):A(e,u.handler,a,!1,i,!1),u.eventSupport&&k(u.target,u.eventType,u.handler,!0,u.customType)},D=function(e,t,n){return function(r){var i,s,o=typeof e=="string"?n(e,this):e;for(i=r.target;i&&i!==this;i=i.parentNode)for(s=o.length;s--;)if(o[s]===i)return t.apply(i,arguments)}},P=function(e,t,n){var r,i,u,a,f,l=M,c=t&&typeof t=="string";if(c&&t.indexOf(" ")>0){t=t.split(" ");for(f=t.length;f--;)P(e,t[f],n);return e}u=c&&t.replace(o,""),u&&S[u]&&(u=S[u].type);if(!t||c){if(a=c&&t.replace(s,""))a=a.split(".");l(e,u,n,a)}else if(typeof t=="function")l(e,null,t);else for(r in t)t.hasOwnProperty(r)&&P(e,r,t[r]);return e},H=function(e,t,n,r,i){var s,o,u,a,f=n,l=n&&typeof n=="string";if(t&&!n&&typeof t=="object")for(s in t)t.hasOwnProperty(s)&&H.apply(this,[e,s,t[s]]);else{a=arguments.length>3?v.call(arguments,3):[],o=(l?n:t).split(" "),l&&(n=D(t,f=r,i))&&(a=v.call(a,1)),this===w&&(n=O(P,e,t,n,f));for(u=o.length;u--;)_(e,o[u],n,f,a)}return e},B=function(){return H.apply(w,arguments)},j=p?function(e,t,r){var i=c.createEvent(e?"HTMLEvents":"UIEvents");i[e?"initEvent":"initUIEvent"](t,!0,!0,n,1),r.dispatchEvent(i)}:function(e,t,n){n=T(n,e),e?n.fireEvent("on"+t,c.createEventObject()):n["_on"+t]++},F=function(e,t,n){var r,i,u,a,f,l=t.split(" ");for(r=l.length;r--;){t=l[r].replace(o,"");if(a=l[r].replace(s,""))a=a.split(".");if(!a&&!n&&e[d])j(E[t],t,e);else{f=C.get(e,t),n=[!1].concat(n);for(i=0,u=f.length;i<u;i++)f[i].inNamespaces(a)&&f[i].handler.apply(e,n)}}return e},I=function(e,t,n){var r=0,i=C.get(t,n),s=i.length;for(;r<s;r++)i[r].original&&H(e,i[r].type,i[r].original);return e},q={add:H,one:B,remove:P,clone:I,fire:F,noConflict:function(){return t[e]=r,this}};if(n[a]){var R=function(){var e,t=C.entries();for(e in t)t[e].type&&t[e].type!=="unload"&&P(t[e].element,t[e].type);n[l]("onunload",R),n.CollectGarbage&&n.CollectGarbage()};n[a]("onunload",R)}return q});var html4={};html4.atype={NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10},html4.ATTRIBS={"*::class":9,"*::dir":0,"*::id":4,"*::lang":0,"*::onclick":2,"*::ondblclick":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::style":3,"*::title":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::rel":0,"a::rev":0,"a::shape":0,"a::tabindex":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::tabindex":0,"area::target":10,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur"
    :2,"button::onfocus":2,"button::tabindex":0,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,"del::cite":1,"del::datetime":0,"dir::compact":0,"div::align":0,"dl::compact":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::onreset":2,"form::onsubmit":2,"form::target":10,"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::ismap":0,"input::maxlength":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::readonly":0,"input::size":0,"input::src":1,"input::tabindex":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"ol::compact":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"p::align":0,"pre::width":0,"q::cite":1,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::size":0,"select::tabindex":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::cols":0,"textarea::disabled":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::readonly":0,"textarea::rows":0,"textarea::tabindex":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"ul::compact":0,"ul::type":0},html4.eflags={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128},html4.ELEMENTS={a:0,abbr:0,acronym:0,address:0,applet:16,area:2,b:0,base:18,basefont:18,bdo:0,big:0,blockquote:0,body:49,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,dd:1,del:0,dfn:0,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,font:0,form:0,frame:18,frameset:16,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:49,hr:2,html:49,i:0,iframe:4,img:2,input:2,ins:0,isindex:18,kbd:0,label:0,legend:0,li:1,link:18,map:0,menu:0,meta:18,nobr:0,noembed:4,noframes:20,noscript:20,object:16,ol:0,optgroup:0,option:1,p:1,param:18,pre:0,q:0,s:0,samp:0,script:84,select:0,small:0,span:0,strike:0,strong:0,style:148,sub:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,title:24,tr:1,tt:0,u:0,ul:0,"var":0},html4.ueffects={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2},html4.URIEFFECTS={"a::href":2,"area::href":2,"blockquote::cite":0,"body::background":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0},html4.ltypes={UNSANDBOXED:2,SANDBOXED:1,DATA:0},html4.LOADERTYPES={"a::href":2,"area::href":2,"blockquote::cite":2,"body::background":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2};var html=function(e){function o(e){e=t(e);if(n.hasOwnProperty(e))return n[e];var r=e.match(i);return r?String.fromCharCode(parseInt(r[1],10)):(r=e.match(s))?String.fromCharCode(parseInt(r[1],16)):""}function u(e,t){return o(t)}function f(e){return e.replace(a,"")}function c(e){return e.replace(l,u)}function y(e){return e.replace(h,"&amp;").replace(d,"&lt;").replace(v,"&gt;").replace(m,"&#34;").replace(g,"&#61;")}function b(e){return e.replace(p,"&amp;$1").replace(d,"&lt;").replace(v,"&gt;")}function S(n){return function(i,s){i=String(i);var o=null,u=!1,a=[],l=void 0,h=void 0,p=void 0;n.startDoc&&n.startDoc(s);while(i){var d=i.match(u?w:E);i=i.substring(d[0].length);if(u){if(d[1]){var v=t(d[1]),m;if(d[2]){var g=d[3];switch(g.charCodeAt(0)){case 34:case 39:g=g.substring(1,g.length-1)}m=c(f(g))}else m=v;a.push(v,m)}else if(d[4]){h!==void 0&&(p?n.startTag&&n.startTag(l,a,s):n.endTag&&n.endTag(l,s));if(p&&h&(e.eflags.CDATA|e.eflags.RCDATA)){o===null?o=t(i):o=o.substring(o.length-i.length);var y=o.indexOf("</"+l);y<0&&(y=i.length),y&&(h&e.eflags.CDATA?n.cdata&&n.cdata(i.substring(0,y),s):n.rcdata&&n.rcdata(b(i.substring(0,y)),s),i=i.substring(y))}l=h=p=void 0,a.length=0,u=!1}}else if(d[1])n.pcdata&&n.pcdata(d[0],s);else if(d[3])p=!d[2],u=!0,l=t(d[3]),h=e.ELEMENTS.hasOwnProperty(l)?e.ELEMENTS[l]:void 0;else if(d[4])n.pcdata&&n.pcdata(d[4],s);else if(d[5]&&n.pcdata){var S=d[5];n.pcdata(S==="<"?"&lt;":S===">"?"&gt;":"&amp;",s)}}n.endDoc&&n.endDoc(s)}}function x(t){var n,r;return S({startDoc:function(e){n=[],r=!1},startTag:function(i,s,o){if(r)return;if(!e.ELEMENTS.hasOwnProperty(i))return;var u=e.ELEMENTS[i];if(u&e.eflags.FOLDABLE)return;if(u&e.eflags.UNSAFE){r=!(u&e.eflags.EMPTY);return}s=t(i,s);if(s){u&e.eflags.EMPTY||n.push(i),o.push("<",i);for(var a=0,f=s.length;a<f;a+=2){var l=s[a],c=s[a+1];c!==null&&c!==void 0&&o.push(" ",l,'="',y(c),'"')}o.push(">")}},endTag:function(t,i){if(r){r=!1;return}if(!e.ELEMENTS.hasOwnProperty(t))return;var s=e.ELEMENTS[t];if(!(s&(e.eflags.UNSAFE|e.eflags.EMPTY|e.eflags.FOLDABLE))){var o;if(s&e.eflags.OPTIONAL_ENDTAG)for(o=n.length;--o>=0;){var u=n[o];if(u===t)break;if(!(e.ELEMENTS[u]&e.eflags.OPTIONAL_ENDTAG))return}else for(o=n.length;--o>=0;)if(n[o]===t)break;if(o<0)return;for(var a=n.length;--a>o;){var u=n[a];e.ELEMENTS[u]&e.eflags.OPTIONAL_ENDTAG||i.push("</",u,">")}n.length=o,i.push("</",t,">")}},pcdata:function(e,t){r||t.push(e)},rcdata:function(e,t){r||t.push(e)},cdata:function(e,t){r||t.push(e)},endDoc:function(e){for(var t=n.length;--t>=0;)e.push("</",n[t],">");n.length=0}})}function N(t,n,i){var s=[];return x(function(s,o){for(var u=0;u<o.length;u+=2){var a=o[u],f=o[u+1],l=null,c;if((c=s+"::"+a,e.ATTRIBS.hasOwnProperty(c))||(c="*::"+a,e.ATTRIBS.hasOwnProperty(c)))l=e.ATTRIBS[c];if(l!==null)switch(l){case e.atype.NONE:break;case e.atype.SCRIPT:case e.atype.STYLE:f=null;break;case e.atype.ID:case e.atype.IDREF:case e.atype.IDREFS:case e.atype.GLOBAL_NAME:case e.atype.LOCAL_NAME:case e.atype.CLASSES:f=i?i(f):f;break;case e.atype.URI:var h=(""+f).match(T);h?!h[1]||r.test(h[1])?f=n&&n(f):f=null:f=null;break;case e.atype.URI_FRAGMENT:f&&"#"===f.charAt(0)?(f=i?i(f):f,f&&(f="#"+f)):f=null;break;default:f=null}else f=null;o[u+1]=f}return o})(t,s),s.join("")}var t;"script"==="SCRIPT".toLowerCase()?t=function(e){return e.toLowerCase()}:t=function(e){return e.replace(/[A-Z]/g,function(e){return String.fromCharCode(e.charCodeAt(0)|32)})};var n={lt:"<",gt:">",amp:"&",nbsp:"Â ",quot:'"',apos:"'"},r=/^(?:https?|mailto|data)$/i,i=/^#(\d+)$/,s=/^#x([0-9A-Fa-f]+)$/,a=/\0/g,l=/&(#\d+|#x[0-9A-Fa-f]+|\w+);/g,h=/&/g,p=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,d=/</g,v=/>/g,m=/\"/g,g=/\=/g,w=new RegExp("^\\s*(?:(?:([a-z][a-z-]*)(\\s*=\\s*(\"[^\"]*\"|'[^']*'|(?=[a-z][a-z-]*\\s*=)|[^>\"'\\s]*))?)|(/?>)|[\\s\\S][^a-z\\s>]*)","i"),E=new RegExp("^(?:&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);|<!--[\\s\\S]*?-->|<!\\w[^>]*>|<\\?[^>*]*>|<(/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))","i"),T=new RegExp("^(?:([^:/?#]+):)?");return{escapeAttrib:y,makeHtmlSanitizer:x,makeSaxParser:S,normalizeRCData:b,sanitize:N,unescapeEntities:c}}(html4),html_sanitize=html.sanitize;typeof window!="undefined"&&(window.html=html,window.html_sanitize=html_sanitize),html4.ATTRIBS["*::style"]=0,html4.ELEMENTS.style=0,html4.ATTRIBS["a::target"]=0,html4.ELEMENTS.video=0,html4.ATTRIBS["video::src"]=0,html4.ATTRIBS["video::poster"]=0,html4.ATTRIBS["video::controls"]=0,html4.ELEMENTS.audio=0,html4.ATTRIBS["audio::src"]=0,html4.ATTRIBS["video::autoplay"]=0,html4.ATTRIBS["video::controls"]=0;var Mustache=typeof module!="undefined"&&module.exports||{};(function(e){function a(e){return u.test(e)}function p(e){return String(e).replace(/[&<>"'\/]/g,function(e){return h[e]||e})}function d(e,t,n,r){r=r||"<template>";var i=t.split("\n"),s=Math.max(n-3,0),o=Math.min(i.length,n+3),u=i.slice(s,o),a;for(var f=0,l=u.length;f<l;++f)a=f+s+1,u[f]=(a===n?" >> ":"    ")+u[f];return e.template=t,e.line=n,e.file=r,e.message=[r+":"+n,u.join("\n"),"",e.message].join("\n"),e}function v(e,t,n){if(e===".")return t[t.length-1];var r=e.split("."),i=r.length-1,s=r[i],o,u,a=t.length,f,l;while(a){l=t.slice(0),u=t[--a],f=0;while(f<i){u=u[r[f++]];if(u==null)break;l.push(u)}if(u&&typeof u=="object"&&s in u){o=u[s];break}}return typeof o=="function"&&(o=o.call(l[l.length-1])),o==null?n:o}function m(e,t,n,r){var i="",u=v(e,t);if(r){if(u==null||u===!1||s(u)&&u.length===0)i+=n()}else if(s(u))o(u,function(e){t.push(e),i+=n(),t.pop()});else if(typeof u=="object")t.push(u),i+=n(),t.pop();else if(typeof u=="function"){var a=t[t.length-1],f=function(e){return S(e,a)};i+=u.call(a,n(),f)||""}else u&&(i+=n());return i}function g(t,n){n=n||{};var r=n.tags||e.tags,i=r[0],s=r[r.length-1],o=['var buffer = "";',"\nvar line = 1;","\ntry {",'\nbuffer += "'],u=[],l=!1,c=!1,h=function(){if(l&&!c&&!n.space)while(u.length)o.splice(u.pop(),1);else u=[];l=!1,c=!1},p=[],v,m,g,y=function(e){r=f(e).split(/\s+/),m=r[0],g=r[r.length-1]},b=function(e){o.push('";',v,'\nvar partial = partials["'+f(e)+'"];',"\nif (partial) {","\n  buffer += render(partial,stack[stack.length - 1],partials);","\n}",'\nbuffer += "')},w=function(e,r){var i=f(e);if(i==="")throw d(new Error("Section name may not be empty"),t,N,n.file);p.push({name:i,inverted:r}),o.push('";',v,'\nvar name = "'+i+'";',"\nvar callback = (function () {","\n  return function () {",'\n    var buffer = "";','\nbuffer += "')},E=function(e){w(e,!0)},S=function(e){var r=f(e),i=p.length!=0&&p[p.length-1].name;if(!i||r!=i)throw d(new Error('Section named "'+r+'" was never opened'),t,N,n.file);var s=p.pop();o.push('";',"\n    return buffer;","\n  };","\n})();"),s.inverted?o.push("\nbuffer += renderSection(name,stack,callback,true);"):o.push("\nbuffer += renderSection(name,stack,callback);"),o.push('\nbuffer += "')},x=function(e){o.push('";',v,'\nbuffer += lookup("'+f(e)+'",stack,"");','\nbuffer += "')},T=function(e){o.push('";',v,'\nbuffer += escapeHTML(lookup("'+f(e)+'",stack,""));','\nbuffer += "')},N=1,C,k;for(var L=0,A=t.length;L<A;++L)if(t.slice(L,L+i.length)===i){L+=i.length,C=t.substr(L,1),v="\nline = "+N+";",m=i,g=s,l=!0;switch(C){case"!":L++,k=null;break;case"=":L++,s="="+s,k=y;break;case">":L++,k=b;break;case"#":L++,k=w;break;case"^":L++,k=E;break;case"/":L++,k=S;break;case"{":s="}"+s;case"&":L++,c=!0,k=x;break;default:c=!0,k=T}var O=t.indexOf(s,L);if(O===-1)throw d(new Error('Tag "'+i+'" was not closed properly'),t,N,n.file);var M=t.substring(L,O);k&&k(M);var _=0;while(~(_=M.indexOf("\n",_)))N++,_++;L=O+s.length-1,i=m,s=g}else{C=t.substr(L,1);switch(C){case'"':case"\\":c=!0,o.push("\\"+C);break;case"\r":break;case"\n":u.push(o.length),o.push("\\n"),h(),N++;break;default:a(C)?u.push(o.length):c=!0,o.push(C)}}if(p.length!=0)throw d(new Error('Section "'+p[p.length-1].name+'" was not closed properly'),t,N,n.file);h(),o.push('";',"\nreturn buffer;","\n} catch (e) { throw {error: e, line: line}; }");var D=o.join("").replace(/buffer \+= "";\n/g,"");return n.debug&&(typeof console!="undefined"&&console.log?console.log(D):typeof print=="function"&&print(D)),D}function y(e,t){var n="view,partials,stack,lookup,escapeHTML,renderSection,render",r=g(e,t),i=new Function(n,r);return function(n,r){r=r||{};var s=[n];try{return i(n,r,s,v,p,m,S)}catch(o){throw d(o.error,e,o.line,t.file)}}}function w(){b={}}function E(e,t){return t=t||{},t.cache!==!1?(b[e]||(b[e]=y(e,t)),b[e]):y(e,t)}function S(e,t,n){return E(e)(t,n)}e.name="mustache.js",e.version="0.5.0-dev",e.tags=["{{","}}"],e.parse=g,e.compile=E,e.render=S,e.clearCache=w,e.to_html=function(e,t,n,r){var i=S(e,t,n);if(typeof r!="function")return i;r(i)};var t=Object.prototype.toString,n=Array.isArray,r=Array.prototype.forEach,i=String.prototype.trim,s;n?s=n:s=function(e){return t.call(e)==="[object Array]"};var o;r?o=function(e,t,n){return r.call(e,t,n)}:o=function(e,t,n){for(var r=0,i=e.length;r<i;++r)t.call(n,e[r],r,e)};var u=/^\s*$/,f;if(i)f=function(e){return e==null?"":i.call(e)};else{var l,c;a("Â ")?(l=/^\s+/,c=/\s+$/):(l=/^[\s\xA0]+/,c=/[\s\xA0]+$/),f=function(e){return e==null?"":String(e).replace(l,"").replace(c,"")}}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},b={}})(Mustache),function(e,t,n){t[e]=n()}("reqwest",this,function(){function handleReadyState(e,t,n){return function(){if(e._aborted)return n(e.request);e.request&&e.request[readyState]==4&&(e.request.onreadystatechange=noop,twoHundo.test(e.request.status)?t(e.request):n(e.request))}}function setHeaders(e,t){var n=t.headers||{},r;n.Accept=n.Accept||defaultHeaders.accept[t.type]||defaultHeaders.accept["*"],!t.crossOrigin&&!n[requestedWith]&&(n[requestedWith]=defaultHeaders.requestedWith),n[contentType]||(n[contentType]=t.contentType||defaultHeaders.contentType);for(r in n)n.hasOwnProperty(r)&&e.setRequestHeader(r,n[r])}function setCredentials(e,t){typeof t.withCredentials!="undefined"&&typeof e.withCredentials!="undefined"&&(e.withCredentials=!!t.withCredentials)}function generalCallback(e){lastValue=e}function urlappend(e,t){return e+(/\?/.test(e)?"&":"?")+t}function handleJsonp(e,t,n,r){var i=uniqid++,s=e.jsonpCallback||"callback",o=e.jsonpCallbackName||reqwest.getcallbackPrefix(i),u=new RegExp("((^|\\?|&)"+s+")=([^&]+)"),a=r.match(u),f=doc.createElement("script"),l=0,c=navigator.userAgent.indexOf("MSIE 10.0")!==-1;return a?a[3]==="?"?r=r.replace(u,"$1="+o):o=a[3]:r=urlappend(r,s+"="+o),win[o]=generalCallback,f.type="text/javascript",typeof f.onreadystatechange!="undefined"&&!c&&(f.event="onclick",f.htmlFor=f.id="_reqwest_"+i),f.onload=f.onreadystatechange=function(){if(f[readyState]&&f[readyState]!=="complete"&&f[readyState]!=="loaded"||l)return!1;f.onload=f.onreadystatechange=null,f.onclick&&f.onclick(),e.success&&e.success(lastValue),lastValue=undefined,head.removeChild(f),l=1},f.src=r,f.async=!0,head.appendChild(f),{abort:function(){f.onload=f.onreadystatechange=null,e.error&&e.error({},"Request is aborted: timeout",{}),lastValue=undefined,head.removeChild(f),l=1}}}function getRequest(e,t){var n=this.o,r=(n.method||"GET").toUpperCase(),i=typeof n=="string"?n:n.url,s=n.processData!==!1&&n.data&&typeof n.data!="string"?reqwest.toQueryString(n.data):n.data||null,o;return(n.type=="jsonp"||r=="GET")&&s&&(i=urlappend(i,s),s=null),n.type=="jsonp"?handleJsonp(n,e,t,i):(o=xhr(),o.open(r,i,!0),setHeaders(o,n),setCredentials(o,n),o.onreadystatechange=handleReadyState(this,e,t),n.before&&n.before(o),o.send(s),o)}function Reqwest(e,t){this.o=e,this.fn=t,init.apply(this,arguments)}function setType(e){var t=e.match(/\.(json|jsonp|html|xml)(\?|$)/);return t?t[1]:"js"}function init(o,fn){function complete(e){o.timeout&&clearTimeout(self.timeout),self.timeout=null;while(self._completeHandlers.length>0)self._completeHandlers.shift()(e)}function success(resp){var r=resp.responseText;if(r)switch(type){case"json":try{resp=win.JSON?win.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r;break;case"xml":resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML}self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp);while(self._fulfillmentHandlers.length>0)self._fulfillmentHandlers.shift()(resp);complete(resp)}function error(e,t,n){self._responseArgs.resp=e,self._responseArgs.msg=t,self._responseArgs.t=n,self._erred=!0;while(self._errorHandlers.length>0)self._errorHandlers.shift()(e,t,n);complete(e)}this.url=typeof o=="string"?o:o.url,this.timeout=null,this._fulfilled=!1,this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this,type=o.type||setType(this.url);fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){self.abort()},o.timeout)),o.success&&this._fulfillmentHandlers.push(function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push(function(){o.error.apply(o,arguments)}),o.complete&&this._completeHandlers.push(function(){o.complete.apply(o,arguments)}),this.request=getRequest.call(this,success,error)}function reqwest(e,t){return new Reqwest(e,t)}function normalize(e){return e?e.replace(/\r?\n/g,"\r\n"):""}function serial(e,t){var n=e.name,r=e.tagName.toLowerCase(),i=function(e){e&&!e.disabled&&t(n,normalize(e.attributes.value&&e.attributes.value.specified?e.value:e.text))},s,o,u,a;if(e.disabled||!n)return;switch(r){case"input":/reset|button|image|file/i.test(e.type)||(s=/checkbox/i.test(e.type),o=/radio/i.test(e.type),u=e.value,(!s&&!o||e.checked)&&t(n,normalize(s&&u===""?"on":u)));break;case"textarea":t(n,normalize(e.value));break;case"select":if(e.type.toLowerCase()==="select-one")i(e.selectedIndex>=0?e.options[e.selectedIndex]:null);else for(a=0;e.length&&a<e.length;a++)e.options[a].selected&&i(e.options[a])}}function eachFormElement(){var e=this,t,n,r=function(t,n){var r,i,s;for(r=0;r<n.length;r++){s=t[byTag](n[r]);for(i=0;i<s.length;i++)serial(s[i],e)}};for(n=0;n<arguments.length;n++)t=arguments[n],/input|select|textarea/i.test(t.tagName)&&serial(t,e),r(t,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var e={};return eachFormElement.apply(function(t,n){t in e?(e[t]&&!isArray(e[t])&&(e[t]=[e[t]]),e[t].push(n)):e[t]=n},arguments),e}var win=window,doc=document,twoHundo=/^20\d$/,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",head=doc[byTag]("head")[0],uniqid=0,callbackPrefix="reqwest_"+ +(new Date),lastValue,xmlHttpRequest="XMLHttpRequest",noop=function(){},isArray=typeof Array.isArray=="function"?Array.isArray:function(e){return e instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",requestedWith:xmlHttpRequest,accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"}},xhr=win[xmlHttpRequest]?function(){return new XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")};return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(e,t){return this._fulfilled?e(this._responseArgs.resp):this._erred?t(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(e),this._errorHandlers.push(t)),this},always:function(e){return this._fulfilled||this._erred?e(this._responseArgs.resp):this._completeHandlers.push(e),this},fail:function(e){return this._erred?e(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(e),this}},reqwest.serializeArray=function(){var e=[];return eachFormElement.apply(function(t,n){e.push({name:t,value:n})},arguments),e},reqwest.serialize=function(){if(arguments.length===0)return"";var e,t,n=Array.prototype.slice.call(arguments,0);return e=n.pop(),e&&e.nodeType&&n.push(e)&&(e=null),e&&(e=e.type),e=="map"?t=serializeHash:e=="array"?t=reqwest.serializeArray:t=serializeQueryString,t.apply(null,n)},reqwest.toQueryString=function(e){var t="",n,r=encodeURIComponent,i=function(e,n){t+=r(e)+"="+r(n)+"&"},s,o;if(isArray(e))for(n=0;e&&n<e.length;n++)i(e[n].name,e[n].value);else for(s in e){if(!Object.hasOwnProperty.call(e,s))continue;o=e[s];if(isArray(o))for(n=0;n<o.length;n++)i(s,o[n]);else i(s,e[s])}return t.replace(/&$/,"").replace(/%20/g,"+")},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(e,t){return e&&(e.type&&(e.method=e.type)&&delete e.type,e.dataType&&(e.type=e.dataType),e.jsonpCallback&&(e.jsonpCallbackName=e.jsonpCallback)&&delete e.jsonpCallback,e.jsonp&&(e.jsonpCallback=e.jsonp)),new Reqwest(e,t)},reqwest}),wax=wax||{},wax.attribution=function(){var e={},t=document.createElement("div");return t.className="map-attribution",e.content=function(e){return typeof e=="undefined"?t.innerHTML:(t.innerHTML=wax.u.sanitize(e),this)},e.element=function(){return t},e.init=function(){return this},e},wax=wax||{},wax.bwdetect=function(e,t){function a(){wax.bw=-1;var e=new Image;e.src=s;var t=!0,i=setTimeout(function(){t&&wax.bw==-1&&(n.bw(0),t=!1)},r);e.onload=function(){t&&wax.bw==-1&&(clearTimeout(i),n.bw(1),t=!1)}}var n={},r=e.threshold||400,s="http://a.tiles.mapbox.com/mapbox/1.0.0/blue-marble-topo-bathy-jul/0/0/0.png?preventcache="+ +(new Date),o=1,u=e.auto===undefined?!0:e.auto;return n.bw=function(e){if(!arguments.length)return o;var n=o;wax.bwlisteners&&wax.bwlisteners.length&&function(){listeners=wax.bwlisteners,wax.bwlisteners=[];for(i=0;i<listeners;i++)listeners[i](e)}(),wax.bw=e,o!=(o=e)&&t(e)},n.add=function(){return u&&a(),this},wax.bw==-1?(wax.bwlisteners=wax.bwlisteners||[],wax.bwlisteners.push(n.bw)):wax.bw!==undefined?n.bw(wax.bw):n.add(),n},wax.formatter=function(x){var formatter={},f;if(x&&typeof x=="string")try{eval("f = "+x)}catch(e){console&&console.log(e)}else x&&typeof x=="function"?f=x:f=function(){};return formatter.format=function(e,t){try{return wax.u.sanitize(f(e,t))}catch(n){console&&console.log(n)}},formatter},wax.gi=function(e,t){function s(e){return e>=93&&e--,e>=35&&e--,e-=32,e}t=t||{};var n={},r=t.resolution||4,i=t.tileSize||256;return n.grid_tile=function(){return e},n.getKey=function(t,n){if(!e||!e.grid)return;if(n<0||t<0)return;if(Math.floor(n)>=i||Math.floor(t)>=i)return;return s(e.grid[Math.floor(n/r)].charCodeAt(Math.floor(t/r)))},n.gridFeature=function(t,n){var r=this.getKey(t,n),i=e.keys;if(i&&i[r]&&e.data[i[r]])return e.data[i[r]]},n.tileFeature=function(t,n,r){if(!e)return;var i=wax.u.offset(r);return feature=this.gridFeature(t-i.left,n-i.top),feature},n},wax.gm=function(){function o(e){return typeof e=="string"&&(e=[e]),function(r){if(!r)return;var i=new RegExp(n.tileRegexp()),s=i.exec(r);if(!s)return;return e[parseInt(s[2],10)%e.length].replace(/\{z\}/g,s[1]).replace(/\{x\}/g,s[2]).replace(/\{y\}/g,s[3])}}var e=4,t={},n={},r,i,s=function(e){if(e)return e.replace(/(\.png|\.jpg|\.jpeg)(\d*)/,".grid.json")};return n.tileRegexp=function(){var e=r.tiles[0],t=e.indexOf("?");t!==-1&&(e=e.substr(0,t)),e=e.replace(/[\(\)\?\$\*\+\^]/g,"."),e.indexOf("https")===0?e=e.replace(":443","[:0-9]*"):e.indexOf("http")===0&&(e=e.replace(":80","[:0-9]*"));var n="";if(r.tiles.length>1){var i=r.tiles[0],s=r.tiles[1];for(var o=0;o<i.length;++o)i.charAt(o)!=s.charAt(o)?n+=".":n+=e.charAt(o)||""}else n=e;return n.replace(/\{x\}/,"(\\d+)").replace(/\{y\}/,"(\\d+)").replace(/\{z\}/,"(\\d+)")},n.formatter=function(e){return arguments.length?(i=wax.formatter(e),n):i},n.template=function(e){return arguments.length?(i=wax.template(e),n):i},n.gridUrl=function(e){return arguments.length?(e?s=typeof e=="function"?e:o(e):s=function(){return null},n):s},n.getGrid=function(t,r){var o=s(t);return!i||!o?r(null,null):(wax.request.get(o,function(t,n){if(t)return r(t,null);r(null,wax.gi(n,{formatter:i,resolution:e}))}),n)},n.tilejson=function(t){return arguments.length?(t.template?n.template(t.template):t.formatter?n.formatter(t.formatter):i=undefined,n.gridUrl(t.grids),t.resolution&&(e=t.resolution),r=t,n):r},n},wax=wax||{},wax.hash=function(e){function i(){return location.hash.substring(1)}function s(e){var t=window.location;t.replace(t.toString().replace(t.hash||/$/,"#"+e))}function o(t){var n=t.split("/");for(var r=0;r<n.length;r++){n[r]=Number(n[r]);if(isNaN(n[r]))return!0}if(n.length<3)return!0;n.length==3&&e.setCenterZoom(n)}function u(){var n=e.getCenterZoom();t!==n&&(t=n,s(t))}function a(e){if(e===t)return;o(t=e)&&u()}e=e||{};var t,n={},r=90-1e-8,f=wax.u.throttle(u,500);return n.add=function(){return a(i()),e.bindChange(f),n},n.remove=function(){return e.unbindChange(f),n},n},wax=wax||{},wax.interaction=function(){function v(t){var n=o(),r=new RegExp(e.tileRegexp());for(var i=0;i<n.length;i++)if(t){var s=n[i][0]<=t.y&&n[i][0]+256>t.y&&n[i][1]<=t.x&&n[i][1]+256>t.x;if(s&&r.exec(n[i][2].src))return n[i][2]}return!1}function m(){return r?(window.clearTimeout(r),r=null,!0):!1}function g(r){if(n)return;var i=r.type!="MSPointerMove"?r:r.originalEvent,s=wax.u.eventoffset(i);t.screen_feature(s,function(n){n?bean.fire(t,"on",{parent:f(),data:n,formatter:e.formatter().format,e:r}):bean.fire(t,"off")})}function y(e){n=!0;var r=e.type!="MSPointerDown"?e:e.originalEvent;i=wax.u.eventoffset(r),e.type==="mousedown"?(bean.add(document.body,"click",E),bean.add(document.body,"mouseup",b)):e.type==="touchstart"&&e.touches.length===1?(bean.fire(t,"off"),bean.add(f(),p)):e.originalEvent.type==="MSPointerDown"&&e.originalEvent.touches&&e.originalEvent.touches.length===1&&(bean.fire(t,"off"),bean.add(f(),d))}function b(){n=!1}function w(){bean.remove(f(),p),bean.remove(f(),d),n=!1}function E(e){var o={},u=e.type!="MSPointerMove"&&e.type!="MSPointerUp"?e:e.originalEvent,a=wax.u.eventoffset(u);n=!1;for(var l in u)o[l]=u[l];return o.changedTouches=[],bean.remove(document.body,"mouseup",E),bean.remove(f(),p),bean.remove(f(),d),e.type==="touchend"?t.click(e,i):a&&(o.type==="MSPointerMove"||o.type==="MSPointerUp"?t.click(o,a):Math.round(a.y/s)===Math.round(i.y/s)&&Math.round(a.x/s)===Math.round(i.x/s)&&(r?m():r=window.setTimeout(function(){r=null,t.click(o,a)},150))),E}var e=wax.gm(),t={},n=!1,r=null,i,s=4,o,u,a,f,l,c,h={mousemove:g,touchstart:y,mousedown:y},p={touchend:E,touchmove:E,touchcancel:w},d={MSPointerUp:E,MSPointerMove:E,MSPointerCancel:w};return t.click=function(n,r){t.screen_feature(r,function(r){r&&bean.fire(t,"on",{parent:f(),data:r,formatter:e.formatter().format,e:n})})},t.screen_feature=function(t,n){var r=v(t);r||n(null),e.getGrid(r.src,function(e,i){if(e||!i)return n(null);var s=i.tileFeature(t.x,t.y,r);n(s)})},t.attach=function(e){return arguments.length?(u=e,t):u},t.detach=function(e){return arguments.length?(a=e,t):a},t.map=function(e){return arguments.length?(l=e,u&&u(l),bean.add(f(),h),bean.add(f(),"touchstart",y),bean.add(f(),"MSPointerDown",y),t):l},t.grid=function(e){return arguments.length?(o=e,t):o},t.remove=function(e){return a&&a(l),bean.remove(f(),h),bean.fire(t,"remove"),t},t.tilejson=function(n){return arguments.length?(e.tilejson(n),t):e.tilejson()},t.formatter=function(){return e.formatter()},t.on=function(e,n){return bean.add(t,e,n),t},t.off=function(e,n){return bean.remove(t,e,n),t},t.gridmanager=function(n){return arguments.length?(e=n,t):e},t.parent=function(e){return f=e,t},t};var wax=wax||{};wax.location=function(){function t(e){if(e.e.type==="mousemove"||!e.e.type)return;var t=e.formatter({format:"location"},e.data);t&&(window.location.href=t)}var e={};return e.events=function(){return{on:t}},e};var wax=wax||{};wax.request={cache:{},locks:{},promises:{},get:function(e,t){if(this.cache[e])return t(this.cache[e][0],this.cache[e][1]);this.promises[e]=this.promises[e]||[],this.promises[e].push(t);if(this.locks[e])return;var n=this;this.locks[e]=!0,reqwest({url:e+(~e.indexOf("?")?"&":"?")+"callback=grid",type:"jsonp",jsonpCallback:"callback",success:function(t){n.locks[e]=!1,n.cache[e]=[null,t];for(var r=0;r<n.promises[e].length;r++)n.promises[e][r](n.cache[e][0],n.cache[e][1])},error:function(t){n.locks[e]=!1,n.cache[e]=[t,null];for(var r=0;r<n.promises[e].length;r++)n.promises[e][r](n.cache[e][0],n.cache[e][1])}})}},wax.template=function(e){var t={};return t.format=function(t,n){var r={};for(var i in n)r[i]=n[i];return t.format&&(r["__"+t.format+"__"]=!0),wax.u.sanitize(Mustache.to_html(e,r))},t};if(!wax)var wax={};wax.tilejson=function(e,t){reqwest({url:e+(~e.indexOf("?")?"&":"?")+"callback=grid",type:"jsonp",jsonpCallback:"callback",success:t,error:t})};var wax=wax||{};wax.u={offset:function(e){var t=e.offsetWidth||parseInt(e.style.width,10),n=e.offsetHeight||parseInt(e.style.height,10),r=document.body,i=0,s=0,o=function(e){if(e===r||e===document.documentElement)return;i+=e.offsetTop,s+=e.offsetLeft;var t=e.style.transform||e.style.WebkitTransform||e.style.OTransform||e.style.MozTransform||e.style.msTransform;if(t){var n;if(n=t.match(/translate\((.+)px, (.+)px\)/))i+=parseInt(n[2],10),s+=parseInt(n[1],10);else if(n=t.match(/translate3d\((.+)px, (.+)px, (.+)px\)/))i+=parseInt(n[2],10),s+=parseInt(n[1],10);else if(n=t.match(/matrix3d\(([\-\d,\s]+)\)/)){var o=n[1].split(",");i+=parseInt(o[13],10),s+=parseInt(o[12],10)}else if(n=t.match(/matrix\(.+, .+, .+, .+, (.+), (.+)\)/))i+=parseInt(n[2],10),s+=parseInt(n[1],10)}};if(typeof e.getBoundingClientRect!="undefined"){var u=document.body,a=e.ownerDocument.documentElement,f=document.clientTop||u.clientTop||0,l=document.clientLeft||u.clientLeft||0,c=window.pageYOffset||a.scrollTop,h=window.pageXOffset||a.scrollLeft,p=e.getBoundingClientRect();i=p.top+c-f,s=p.left+h-l}else{o(e);try{while(e=e.offsetParent)o(e)}catch(d){}}i+=r.offsetTop,s+=r.offsetLeft,i+=r.parentNode.offsetTop,s+=r.parentNode.offsetLeft;var v=document.defaultView?window.getComputedStyle(r.parentNode,null):r.parentNode.currentStyle;return r.parentNode.offsetTop!==parseInt(v.marginTop,10)&&!isNaN(parseInt(v.marginTop,10))&&(i+=parseInt(v.marginTop,10),s+=parseInt(v.marginLeft,10)),{top:i,left:s,height:n,width:t}},$:function(e){return typeof e=="string"?document.getElementById(e):e},eventoffset:function(e){var t=0,n=0;e||(e=window.event);if(e.type=="MSPointerMove"||e.type=="MSPointerDown"||e.type=="MSPointerUp")return{x:e.pageX+window.pageXOffset,y:e.pageY+window.pageYOffset};if(e.pageX||e.pageY)return{x:e.pageX,y:e.pageY};if(e.clientX||e.clientY)return{x:e.clientX,y:e.clientY};if(e.touches&&e.touches.length===1)return{x:e.touches[0].pageX,y:e.touches[0].pageY}},limit:function(e,t,n){var r;return function(){var i=this,s=arguments,o=function(){r=null,e.apply(i,s)};n&&clearTimeout(r);if(n||!r)r=setTimeout(o,t)}},throttle:function(e,t){return this.limit(e,t,!1)},sanitize:function(e){function t(e){if(/^(https?:\/\/|data:image)/.test(e))return e}function n(e){return e}return e?html_sanitize(e,t,n):""}},wax=wax||{},wax.leaf=wax.leaf||{},wax.leaf.hash=function(e){return wax.hash({getCenterZoom:function(){var t=e.getCenter(),n=e.getZoom(),r=Math.max(0,Math.ceil(Math.log(n)/Math.LN2));return[n,t.lat.toFixed(r),t.lng.toFixed(r)].join("/")},setCenterZoom:function(t){e.setView(new L.LatLng(t[1],t[2]),t[0])},bindChange:function(t){e.on("moveend",t)},unbindChange:function(t){e.off("moveend",t)}})},wax=wax||{},wax.leaf=wax.leaf||{},wax.leaf.interaction=function(){function r(){e=!0}function i(){return!e&&t?t:t=function(e){var t=[];for(var n in e)if(e[n]._tiles)for(var r in e[n]._tiles){var i=e[n]._tiles[r];if(i.src){var s=wax.u.offset(i);t.push([s.top,s.left,i])}}return t}(n._layers)}function s(e){if(!arguments.length)return n;n=e;var t=["moveend"];for(var i=0;i<t.length;i++)n.on(t[i],r)}function o(e){if(!arguments.length)return n;n=e;var t=["moveend"];for(var i=0;i<t.length;i++)n.off(t[i],r)}var e=!1,t,n;return wax.interaction().attach(s).detach(o).parent(function(){return n._container}).grid(i)},wax=wax||{},wax.leaf=wax.leaf||{},wax.leaf.connector=L.TileLayer.extend({initialize:function(e){e=e||{},e.minZoom=e.minzoom||0,e.maxZoom=e.maxzoom||22,L.TileLayer.prototype.initialize.call(this,e.tiles[0],e)}}),wax=wax||{},wax.g=wax.g||{},wax.g.attribution=function(e,t){t=t||{};var n,r={};return r.element=function(){return n.element()},r.
    appendTo=function(e){return wax.u.$(e).appendChild(n.element()),this},r.init=function(){return n=wax.attribution(),n.content(t.attribution),n.element().className="map-attribution map-g",this},r.init()},wax=wax||{},wax.g=wax.g||{},wax.g.bwdetect=function(e,t){t=t||{};var n=t.png||".png128",r=t.jpg||".jpg70";if(!e.mapTypes["mb-low"]){var i=e.mapTypes.mb,s={tiles:[],scheme:i.options.scheme,blankImage:i.options.blankImage,minzoom:i.minZoom,maxzoom:i.maxZoom,name:i.name,description:i.description};for(var o=0;o<i.options.tiles.length;o++)s.tiles.push(i.options.tiles[o].replace(".png",n).replace(".jpg",r));m.mapTypes.set("mb-low",new wax.g.connector(s))}return wax.bwdetect(t,function(t){e.setMapTypeId(t?"mb":"mb-low")})},wax=wax||{},wax.g=wax.g||{},wax.g.hash=function(e){return wax.hash({getCenterZoom:function(){var t=e.getCenter(),n=e.getZoom(),r=Math.max(0,Math.ceil(Math.log(n)/Math.LN2));return[n.toFixed(2),t.lat().toFixed(r),t.lng().toFixed(r)].join("/")},setCenterZoom:function(n){e.setCenter(new google.maps.LatLng(n[1],n[2])),e.setZoom(n[0])},bindChange:function(t){google.maps.event.addListener(e,"idle",t)},unbindChange:function(t){google.maps.event.removeListener(e,"idle",t)}})},wax=wax||{},wax.g=wax.g||{},wax.g.interaction=function(){function s(){e=!0}function o(){if(!e&&t)return t;t=[];var r=n.getZoom(),i=wax.u.offset(n.getDiv()),s=function(e){if(!e.interactive)return;for(var n in e.cache){if(n.split("/")[0]!=r)continue;var i=wax.u.offset(e.cache[n]);t.push([i.top,i.left,e.cache[n]])}};for(var o in n.mapTypes)s(n.mapTypes[o]);return n.overlayMapTypes.forEach(s),t}function u(e){if(!arguments.length)return n;n=e,r=google.maps.event.addListener(n,"tileloaded",s),i=google.maps.event.addListener(n,"idle",s)}function a(e){r&&google.maps.event.removeListener(r),i&&google.maps.event.removeListener(i)}var e=!1,t,n,r=null,i=null;return wax.interaction().attach(u).detach(a).parent(function(){return n.getDiv()}).grid(o)};var wax=wax||{};wax.g=wax.g||{},wax.g.connector=function(e){e=e||{},this.options={tiles:e.tiles,scheme:e.scheme||"xyz",blankImage:e.blankImage||"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},this.opacity=e.opacity||0,this.minZoom=e.minzoom||0,this.maxZoom=e.maxzoom||22,this.name=e.name||"",this.description=e.description||"",this.interactive=!0,this.tileSize=new google.maps.Size(256,256),this.cache={}},wax.g.connector.prototype.getTile=function(e,t,n){var r=t+"/"+e.x+"/"+e.y;if(!this.cache[r]){var i=this.cache[r]=new Image(256,256);this.cache[r].src=this.getTileUrl(e,t),this.cache[r].setAttribute("gTileKey",r),this.cache[r].setAttribute("style","opacity: "+this.opacity+"; filter: alpha(opacity="+this.opacity*100+");"),this.cache[r].onerror=function(){i.style.display="none"}}return this.cache[r]},wax.g.connector.prototype.releaseTile=function(e){var t=e.getAttribute("gTileKey");this.cache[t]&&delete this.cache[t],e.parentNode&&e.parentNode.removeChild(e)},wax.g.connector.prototype.getTileUrl=function(e,t){var n=Math.pow(2,t),r=this.options.scheme==="tms"?n-1-e.y:e.y,i=e.x%n;return i=i<0?e.x%n+n:i,r<0?this.options.blankImage:this.options.tiles[parseInt(i+r,10)%this.options.tiles.length].replace(/\{z\}/g,t).replace(/\{x\}/g,i).replace(/\{y\}/g,r)};var GeoJSON=function(e,t){var n=function(e,t,s){var o;switch(e.type){case"Point":t.position=new google.maps.LatLng(e.coordinates[1],e.coordinates[0]),o=new google.maps.Marker(t),s&&o.set("geojsonProperties",s);break;case"MultiPoint":o=[];for(var u=0;u<e.coordinates.length;u++)t.position=new google.maps.LatLng(e.coordinates[u][1],e.coordinates[u][0]),o.push(new google.maps.Marker(t));if(s)for(var a=0;a<o.length;a++)o[a].set("geojsonProperties",s);break;case"LineString":var f=[];for(var u=0;u<e.coordinates.length;u++){var l=e.coordinates[u],c=new google.maps.LatLng(l[1],l[0]);f.push(c)}t.path=f,o=new google.maps.Polyline(t),s&&o.set("geojsonProperties",s);break;case"MultiLineString":o=[];for(var u=0;u<e.coordinates.length;u++){var f=[];for(var h=0;h<e.coordinates[u].length;h++){var l=e.coordinates[u][h],c=new google.maps.LatLng(l[1],l[0]);f.push(c)}t.path=f,o.push(new google.maps.Polyline(t))}if(s)for(var a=0;a<o.length;a++)o[a].set("geojsonProperties",s);break;case"Polygon":var p=[],d,v;for(var u=0;u<e.coordinates.length;u++){var f=[];for(var h=0;h<e.coordinates[u].length;h++){var c=new google.maps.LatLng(e.coordinates[u][h][1],e.coordinates[u][h][0]);f.push(c)}u?u==1?(v=i(f),d==v?p.push(f.reverse()):p.push(f)):d==v?p.push(f.reverse()):p.push(f):(d=i(f),p.push(f))}t.paths=p,o=new google.maps.Polygon(t),s&&o.set("geojsonProperties",s);break;case"MultiPolygon":o=[];for(var u=0;u<e.coordinates.length;u++){var p=[],d,v;for(var h=0;h<e.coordinates[u].length;h++){var f=[];for(var a=0;a<e.coordinates[u][h].length-1;a++){var c=new google.maps.LatLng(e.coordinates[u][h][a][1],e.coordinates[u][h][a][0]);f.push(c)}h?h==1?(v=i(f),d==v?p.push(f.reverse()):p.push(f)):d==v?p.push(f.reverse()):p.push(f):(d=i(f),p.push(f))}t.paths=p,o.push(new google.maps.Polygon(t))}if(s)for(var a=0;a<o.length;a++)o[a].set("geojsonProperties",s);break;case"GeometryCollection":o=[];if(!e.geometries)o=r('Invalid GeoJSON object: GeometryCollection object missing "geometries" member.');else for(var u=0;u<e.geometries.length;u++)o.push(n(e.geometries[u],t,s||null));break;default:o=r('Invalid GeoJSON object: Geometry object must be one of "Point", "LineString", "Polygon" or "MultiPolygon".')}return o},r=function(e){return{type:"Error",message:e}},i=function(e){var t,n=0;for(var r=0;r<e.length-2;r++)n+=(e[r+1].lat()-e[r].lat())*(e[r+2].lng()-e[r].lng())-(e[r+2].lat()-e[r].lat())*(e[r+1].lng()-e[r].lng());return n>0?t=!0:t=!1,t},s,o=t||{};switch(e.type){case"FeatureCollection":if(!e.features)s=r('Invalid GeoJSON object: FeatureCollection object missing "features" member.');else{s=[];for(var u=0;u<e.features.length;u++)s.push(n(e.features[u].geometry,o,e.features[u].properties))}break;case"GeometryCollection":if(!e.geometries)s=r('Invalid GeoJSON object: GeometryCollection object missing "geometries" member.');else{s=[];for(var u=0;u<e.geometries.length;u++)s.push(n(e.geometries[u],o))}break;case"Feature":!e.properties||!e.geometry?s=r('Invalid GeoJSON object: Feature object missing "properties" or "geometry" member.'):s=n(e.geometry,o,e.properties);break;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":s=e.coordinates?s=n(e,o):r('Invalid GeoJSON object: Geometry object missing "coordinates" member.');break;default:s=r('Invalid GeoJSON object: GeoJSON object must be one of "Point", "LineString", "Polygon", "MultiPolygon", "Feature", "FeatureCollection" or "GeometryCollection".')}return s};(function(e,t,n){e.fn.jScrollPane=function(r){function i(r,i){function V(t){var i,o,g,y,w,E,x=!1,T=!1;s=t;if(u===n)w=r.scrollTop(),E=r.scrollLeft(),r.css({overflow:"hidden",padding:0}),a=r.innerWidth()+F,f=r.innerHeight(),r.width(a),u=e('<div class="jspPane" />').css("padding",j).append(r.children()),l=e('<div class="jspContainer" />').css({width:a+"px",height:f+"px"}).append(u).appendTo(r);else{r.css("width",""),x=s.stickToBottom&&mt(),T=s.stickToRight&&gt(),y=r.innerWidth()+F!=a||r.outerHeight()!=f,y&&(a=r.innerWidth()+F,f=r.innerHeight(),l.css({width:a+"px",height:f+"px"}));if(!y&&I==c&&u.outerHeight()==h){r.width(a);return}I=c,u.css("width",""),r.width(a),l.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}u.css("overflow","auto"),t.contentWidth?c=t.contentWidth:c=u[0].scrollWidth,h=u[0].scrollHeight,u.css("overflow",""),p=c/a,d=h/f,v=d>1,m=p>1,!m&&!v?(r.removeClass("jspScrollable"),u.css({top:0,width:l.width()-F}),bt(),St(),Tt(),rt()):(r.addClass("jspScrollable"),i=s.maintainPosition&&(b||S),i&&(o=dt(),g=vt()),J(),Q(),Y(),i&&(ht(T?c-a:o,!1),ct(x?h-f:g,!1)),Et(),yt(),kt(),s.enableKeyboardNavigation&&xt(),s.clickOnTrack&&nt(),Nt(),s.hijackInternalLinks&&Ct()),s.autoReinitialise&&!B?B=setInterval(function(){V(s)},s.autoReinitialiseDelay):!s.autoReinitialise&&B&&clearInterval(B),w&&r.scrollTop(0)&&ct(w,!1),E&&r.scrollLeft(0)&&ht(E,!1),r.trigger("jsp-initialised",[m||v])}function J(){v&&(l.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'),e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'),e('<div class="jspDragBottom" />'))),e('<div class="jspCap jspCapBottom" />'))),x=l.find(">.jspVerticalBar"),T=x.find(">.jspTrack"),g=T.find(">.jspDrag"),s.showArrows&&(L=e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",et(0,-1)).bind("click.jsp",wt),A=e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",et(0,1)).bind("click.jsp",wt),s.arrowScrollOnHover&&(L.bind("mouseover.jsp",et(0,-1,L)),A.bind("mouseover.jsp",et(0,1,A))),Z(T,s.verticalArrowPositions,L,A)),C=f,l.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){C-=e(this).outerHeight()}),g.hover(function(){g.addClass("jspHover")},function(){g.removeClass("jspHover")}).bind("mousedown.jsp",function(t){e("html").bind("dragstart.jsp selectstart.jsp",wt),g.addClass("jspActive");var n=t.pageY-g.position().top;return e("html").bind("mousemove.jsp",function(e){st(e.pageY-n,!1)}).bind("mouseup.jsp mouseleave.jsp",it),!1}),K())}function K(){T.height(C+"px"),b=0,N=s.verticalGutter+T.outerWidth(),u.width(a-N-F);try{x.position().left===0&&u.css("margin-left",N+"px")}catch(e){}}function Q(){m&&(l.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'),e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'),e('<div class="jspDragRight" />'))),e('<div class="jspCap jspCapRight" />'))),O=l.find(">.jspHorizontalBar"),M=O.find(">.jspTrack"),w=M.find(">.jspDrag"),s.showArrows&&(P=e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",et(-1,0)).bind("click.jsp",wt),H=e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",et(1,0)).bind("click.jsp",wt),s.arrowScrollOnHover&&(P.bind("mouseover.jsp",et(-1,0,P)),H.bind("mouseover.jsp",et(1,0,H))),Z(M,s.horizontalArrowPositions,P,H)),w.hover(function(){w.addClass("jspHover")},function(){w.removeClass("jspHover")}).bind("mousedown.jsp",function(t){e("html").bind("dragstart.jsp selectstart.jsp",wt),w.addClass("jspActive");var n=t.pageX-w.position().left;return e("html").bind("mousemove.jsp",function(e){ut(e.pageX-n,!1)}).bind("mouseup.jsp mouseleave.jsp",it),!1}),_=l.innerWidth(),G())}function G(){l.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){_-=e(this).outerWidth()}),M.width(_+"px"),S=0}function Y(){if(m&&v){var t=M.outerHeight(),n=T.outerWidth();C-=t,e(O).find(">.jspCap:visible,>.jspArrow").each(function(){_+=e(this).outerWidth()}),_-=n,f-=n,a-=t,M.parent().append(e('<div class="jspCorner" />').css("width",t+"px")),K(),G()}m&&u.width(l.outerWidth()-F+"px"),h=u.outerHeight(),d=h/f,m&&(D=Math.ceil(1/p*_),D>s.horizontalDragMaxWidth?D=s.horizontalDragMaxWidth:D<s.horizontalDragMinWidth&&(D=s.horizontalDragMinWidth),w.width(D+"px"),E=_-D,at(S)),v&&(k=Math.ceil(1/d*C),k>s.verticalDragMaxHeight?k=s.verticalDragMaxHeight:k<s.verticalDragMinHeight&&(k=s.verticalDragMinHeight),g.height(k+"px"),y=C-k,ot(b))}function Z(e,t,n,r){var i="before",s="after",o;t=="os"&&(t=/Mac/.test(navigator.platform)?"after":"split"),t==i?s=t:t==s&&(i=t,o=n,n=r,r=o),e[i](n)[s](r)}function et(e,t,n){return function(){return tt(e,t,this,n),this.blur(),!1}}function tt(t,n,r,i){r=e(r).addClass("jspActive");var u,a,f=!0,l=function(){t!==0&&o.scrollByX(t*s.arrowButtonSpeed),n!==0&&o.scrollByY(n*s.arrowButtonSpeed),a=setTimeout(l,f?s.initialDelay:s.arrowRepeatFreq),f=!1};l(),u=i?"mouseout.jsp":"mouseup.jsp",i=i||e("html"),i.bind(u,function(){r.removeClass("jspActive"),a&&clearTimeout(a),a=null,i.unbind(u)})}function nt(){rt(),v&&T.bind("mousedown.jsp",function(t){if(t.originalTarget===n||t.originalTarget==t.currentTarget){var r=e(this),i=r.offset(),u=t.pageY-i.top-b,a,l=!0,c=function(){var e=r.offset(),n=t.pageY-e.top-k/2,i=f*s.scrollPagePercent,d=y*i/(h-f);if(u<0)b-d>n?o.scrollByY(-i):st(n);else{if(!(u>0)){p();return}b+d<n?o.scrollByY(i):st(n)}a=setTimeout(c,l?s.initialDelay:s.trackClickRepeatFreq),l=!1},p=function(){a&&clearTimeout(a),a=null,e(document).unbind("mouseup.jsp",p)};return c(),e(document).bind("mouseup.jsp",p),!1}}),m&&M.bind("mousedown.jsp",function(t){if(t.originalTarget===n||t.originalTarget==t.currentTarget){var r=e(this),i=r.offset(),u=t.pageX-i.left-S,f,l=!0,h=function(){var e=r.offset(),n=t.pageX-e.left-D/2,i=a*s.scrollPagePercent,d=E*i/(c-a);if(u<0)S-d>n?o.scrollByX(-i):ut(n);else{if(!(u>0)){p();return}S+d<n?o.scrollByX(i):ut(n)}f=setTimeout(h,l?s.initialDelay:s.trackClickRepeatFreq),l=!1},p=function(){f&&clearTimeout(f),f=null,e(document).unbind("mouseup.jsp",p)};return h(),e(document).bind("mouseup.jsp",p),!1}})}function rt(){M&&M.unbind("mousedown.jsp"),T&&T.unbind("mousedown.jsp")}function it(){e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),g&&g.removeClass("jspActive"),w&&w.removeClass("jspActive")}function st(e,t){if(!v)return;e<0?e=0:e>y&&(e=y),t===n&&(t=s.animateScroll),t?o.animate(g,"top",e,ot):(g.css("top",e),ot(e))}function ot(e){e===n&&(e=g.position().top),l.scrollTop(0),b=e;var t=b===0,i=b==y,s=e/y,o=-s*(h-f);if(q!=t||U!=i)q=t,U=i,r.trigger("jsp-arrow-change",[q,U,R,z]);ft(t,i),u.css("top",o),r.trigger("jsp-scroll-y",[-o,t,i]).trigger("scroll")}function ut(e,t){if(!m)return;e<0?e=0:e>E&&(e=E),t===n&&(t=s.animateScroll),t?o.animate(w,"left",e,at):(w.css("left",e),at(e))}function at(e){e===n&&(e=w.position().left),l.scrollTop(0),S=e;var t=S===0,i=S==E,s=e/E,o=-s*(c-a);if(R!=t||z!=i)R=t,z=i,r.trigger("jsp-arrow-change",[q,U,R,z]);lt(t,i),u.css("left",o),r.trigger("jsp-scroll-x",[-o,t,i]).trigger("scroll")}function ft(e,t){s.showArrows&&(L[e?"addClass":"removeClass"]("jspDisabled"),A[t?"addClass":"removeClass"]("jspDisabled"))}function lt(e,t){s.showArrows&&(P[e?"addClass":"removeClass"]("jspDisabled"),H[t?"addClass":"removeClass"]("jspDisabled"))}function ct(e,t){var n=e/(h-f);st(n*y,t)}function ht(e,t){var n=e/(c-a);ut(n*E,t)}function pt(t,n,r){var i,o,u,c=0,h=0,p,d,v,m,g,y;try{i=e(t)}catch(b){return}o=i.outerHeight(),u=i.outerWidth(),l.scrollTop(0),l.scrollLeft(0);while(!i.is(".jspPane")){c+=i.position().top,h+=i.position().left,i=i.offsetParent();if(/^body|html$/i.test(i[0].nodeName))return}p=vt(),v=p+f,c<p||n?g=c-s.verticalGutter:c+o>v&&(g=c-f+o+s.verticalGutter),g&&ct(g,r),d=dt(),m=d+a,h<d||n?y=h-s.horizontalGutter:h+u>m&&(y=h-a+u+s.horizontalGutter),y&&ht(y,r)}function dt(){return-u.position().left}function vt(){return-u.position().top}function mt(){var e=h-f;return e>20&&e-vt()<10}function gt(){var e=c-a;return e>20&&e-dt()<10}function yt(){l.unbind(X).bind(X,function(e,t,n,r){var i=S,u=b;return o.scrollBy(n*s.mouseWheelSpeed,-r*s.mouseWheelSpeed,!1),i==S&&u==b})}function bt(){l.unbind(X)}function wt(){return!1}function Et(){u.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(e){pt(e.target,!1)})}function St(){u.find(":input,a").unbind("focus.jsp")}function xt(){function a(){var e=S,r=b;switch(t){case 40:o.scrollByY(s.keyboardSpeed,!1);break;case 38:o.scrollByY(-s.keyboardSpeed,!1);break;case 34:case 32:o.scrollByY(f*s.scrollPagePercent,!1);break;case 33:o.scrollByY(-f*s.scrollPagePercent,!1);break;case 39:o.scrollByX(s.keyboardSpeed,!1);break;case 37:o.scrollByX(-s.keyboardSpeed,!1)}return n=e!=S||r!=b,n}var t,n,i=[];m&&i.push(O[0]),v&&i.push(x[0]),u.focus(function(){r.focus()}),r.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(r){if(r.target!==this&&(!i.length||!e(r.target).closest(i).length))return;var s=S,o=b;switch(r.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:t=r.keyCode,a();break;case 35:ct(h-f),t=null;break;case 36:ct(0),t=null}return n=r.keyCode==t&&s!=S||o!=b,!n}).bind("keypress.jsp",function(e){return e.keyCode==t&&a(),!n}),s.hideFocus?(r.css("outline","none"),"hideFocus"in l[0]&&r.attr("hideFocus",!0)):(r.css("outline",""),"hideFocus"in l[0]&&r.attr("hideFocus",!1))}function Tt(){r.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function Nt(){if(location.hash&&location.hash.length>1){var t,n,r=escape(location.hash.substr(1));try{t=e("#"+r+', a[name="'+r+'"]')}catch(i){return}t.length&&u.find(r)&&(l.scrollTop()===0?n=setInterval(function(){l.scrollTop()>0&&(pt(t,!0),e(document).scrollTop(l.position().top),clearInterval(n))},50):(pt(t,!0),e(document).scrollTop(l.position().top)))}}function Ct(){if(e(document.body).data("jspHijack"))return;e(document.body).data("jspHijack",!0),e(document.body).delegate("a[href*=#]","click",function(n){var r=this.href.substr(0,this.href.indexOf("#")),i=location.href,s,o,u,a,f,l;location.href.indexOf("#")!==-1&&(i=location.href.substr(0,location.href.indexOf("#")));if(r!==i)return;s=escape(this.href.substr(this.href.indexOf("#")+1)),o;try{o=e("#"+s+', a[name="'+s+'"]')}catch(c){return}if(!o.length)return;u=o.closest(".jspScrollable"),a=u.data("jsp"),a.scrollToElement(o,!0),u[0].scrollIntoView&&(f=e(t).scrollTop(),l=o.offset().top,(l<f||l>f+e(t).height())&&u[0].scrollIntoView()),n.preventDefault()})}function kt(){var e,t,n,r,i,s=!1;l.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(o){var u=o.originalEvent.touches[0];e=dt(),t=vt(),n=u.pageX,r=u.pageY,i=!1,s=!0}).bind("touchmove.jsp",function(u){if(!s)return;var a=u.originalEvent.touches[0],f=S,l=b;return o.scrollTo(e+n-a.pageX,t+r-a.pageY),i=i||Math.abs(n-a.pageX)>5||Math.abs(r-a.pageY)>5,f==S&&l==b}).bind("touchend.jsp",function(e){s=!1}).bind("click.jsp-touchclick",function(e){if(i)return i=!1,!1})}function Lt(){var e=vt(),t=dt();r.removeClass("jspScrollable").unbind(".jsp"),r.replaceWith(W.append(u.children())),W.scrollTop(e),W.scrollLeft(t),B&&clearInterval(B)}var s,o=this,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q=!0,R=!0,U=!1,z=!1,W=r.clone(!1,!1).empty(),X=e.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";j=r.css("paddingTop")+" "+r.css("paddingRight")+" "+r.css("paddingBottom")+" "+r.css("paddingLeft"),F=(parseInt(r.css("paddingLeft"),10)||0)+(parseInt(r.css("paddingRight"),10)||0),e.extend(o,{reinitialise:function(t){t=e.extend({},s,t),V(t)},scrollToElement:function(e,t,n){pt(e,t,n)},scrollTo:function(e,t,n){ht(e,n),ct(t,n)},scrollToX:function(e,t){ht(e,t)},scrollToY:function(e,t){ct(e,t)},scrollToPercentX:function(e,t){ht(e*(c-a),t)},scrollToPercentY:function(e,t){ct(e*(h-f),t)},scrollBy:function(e,t,n){o.scrollByX(e,n),o.scrollByY(t,n)},scrollByX:function(e,t){var n=dt()+Math[e<0?"floor":"ceil"](e),r=n/(c-a);ut(r*E,t)},scrollByY:function(e,t){var n=vt()+Math[e<0?"floor":"ceil"](e),r=n/(h-f);st(r*y,t)},positionDragX:function(e,t){ut(e,t)},positionDragY:function(e,t){st(e,t)},animate:function(e,t,n,r){var i={};i[t]=n,e.animate(i,{duration:s.animateDuration,easing:s.animateEase,queue:!1,step:r})},getContentPositionX:function(){return dt()},getContentPositionY:function(){return vt()},getContentWidth:function(){return c},getContentHeight:function(){return h},getPercentScrolledX:function(){return dt()/(c-a)},getPercentScrolledY:function(){return vt()/(h-f)},getIsScrollableH:function(){return m},getIsScrollableV:function(){return v},getContentPane:function(){return u},scrollToBottom:function(e){st(y,e)},hijackInternalLinks:e.noop,destroy:function(){Lt()}}),V(i)}return r=e.extend({},e.fn.jScrollPane.defaults,r),e.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){r[this]=r[this]||r.speed}),this.each(function(){var t=e(this),n=t.data("jsp");n?n.reinitialise(r):(e("script",t).filter('[type="text/javascript"],:not([type])').remove(),n=new i(t,r),t.data("jsp",n))})},e.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:n,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}})(jQuery,this),function(e){function r(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=!0,o=0,u=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(i=n.wheelDelta/120),n.detail&&(i=-n.detail/3),u=i,n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS&&(u=0,o=-1*i),n.wheelDeltaY!==undefined&&(u=n.wheelDeltaY/120),n.wheelDeltaX!==undefined&&(o=-1*n.wheelDeltaX/120),r.unshift(t,i,o,u),(e.event.dispatch||e.event.handle).apply(this,r)}var t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var n=t.length;n;)e.event.fixHooks[t[--n]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],r,!1);else this.onmousewheel=r},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],r,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery),function(e){function a(){this===t.elem&&(t.pos=[-260,-260],t.elem=!1,n=3)}var t={pos:[-260,-260]},n=3,r=document,i=r.documentElement,s=r.body,o,u;e.event.special.mwheelIntent={setup:function(){var t=e(this).bind("mousewheel",e.event.special.mwheelIntent.handler);return this!==r&&this!==i&&this!==s&&t.bind("mouseleave",a),t=null,!0},teardown:function(){return e(this).unbind("mousewheel",e.event.special.mwheelIntent.handler).unbind("mouseleave",a),!0},handler:function(r,i){var s=[r.clientX,r.clientY];if(this===t.elem||Math.abs(t.pos[0]-s[0])>n||Math.abs(t.pos[1]-s[1])>n)return t.elem=this,t.pos=s,n=250,clearTimeout(u),u=setTimeout(function(){n=10},200),clearTimeout(o),o=setTimeout(function(){n=3},1500),r=e.extend({},r,{type:"mwheelIntent"}),e.event.handle.apply(this,arguments)}},e.fn.extend({mwheelIntent:function(e){return e?this.bind("mwheelIntent",e):this.trigger("mwheelIntent")},unmwheelIntent:function(e){return this.unbind("mwheelIntent",e)}}),e(function(){s=r.body,e(r).bind("mwheelIntent.mwheelIntentDefault",e.noop)})}(jQuery),function(e,t,n){function r(e,n){var r=t.createElement(e||"div"),i;for(i in n)r[i]=n[i];return r}function i(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function s(e,t,n,r){var i=["opacity",t,~~(e*100),n,r].join("-"),s=.01+n/r*100,o=Math.max(1-(1-e)/t*(100-s),e),u=h.substring(0,h.indexOf("Animation")).toLowerCase(),a=u&&"-"+u+"-"||"";return c[i]||(p.insertRule("@"+a+"keyframes "+i+"{"+"0%{opacity:"+o+"}"+s+"%{opacity:"+e+"}"+(s+.01)+"%{opacity:1}"+(s+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+o+"}"+"}",0),c[i]=1),i}function o(e,t){var r=e.style,i,s;if(r[t]!==n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(s=0;s<l.length;s++){i=l[s]+t;if(r[i]!==n)return i}}function u(e,t){for(var n in t)e.style[o(e,n)||n]=t[n];return e}function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]===n&&(e[i]=r[i])}return e}function f(e){var t={x:e.offsetLeft,y:e.offsetTop};while(e=e.offsetParent)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}var l=["webkit","Moz","ms","O"],c={},h,p=function(){var e=r("style");return i(t.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"},v=function m(e){if(!this.spin)return new m(e);this.opts=a(e||{},m.defaults,d)};v.defaults={},a(v.prototype,{spin:function(e){this.stop();var t=this,n=t.opts,i=t.el=u(r(0,{className:n.className}),{position:"relative",zIndex:n.zIndex}),s=n.radius+n.length+n.width,o,a;e&&(e.insertBefore(i,e.firstChild||null),a=f(e),o=f(i),u(i,{left:(n.left=="auto"?a.x-o.x+(e.offsetWidth>>1):n.left+s)+"px",top:(n.top=="auto"?a.y-o.y+(e.offsetHeight>>1):n.top+s)+"px"})),i.setAttribute("aria-role","progressbar"),t.lines(i,t.opts);if(!h){var l=0,c=n.fps,p=c/n.speed,d=(1-n.opacity)/(p*n.trail/100),v=p/n.lines;!function m(){l++;for(var e=n.lines;e;e--){var r=Math.max(1-(l+e*v)%p*d,n.opacity);t.opacity(i,n.lines-e,r,n)}t.timeout=t.el&&setTimeout(m,~~(1e3/c))}()}return t},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=n),this},lines:function(e,t){function n(e,n){return u(r(),{position:"absolute",width:t.length+t.width+"px",height:t.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*o+t.rotate)+"deg) translate("+t.radius+"px"+",0)",borderRadius:(t.width>>1)+"px"})}var o=0,a;for(;o<t.lines;o++)a=u(r(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:h&&s(t.opacity,t.trail,o,t.lines)+" "+1/t.speed+"s linear infinite"}),t.shadow&&i(a,u(n("#000","0 0 4px #000"),{top:"2px"})),i(e,i(a,n(t.color,"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),!function(){function e(e,t){return r("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}var t=u(r("group"),{behavior:"url(#default#VML)"});!o(t,"transform")&&t.adj?(p.addRule(".spin-vml","behavior:url(#default#VML)"),v.prototype.lines=function(t,n){function r(){return u(e("group",{coordsize:a+" "+a,coordorigin:-o+" "+ -o}),{width:a,height:a})}function s(t,s,a){i(l,i(u(r(),{rotation:360/n.lines*t+"deg",left:~~s}),i(u(e("roundrect",{arcsize:1}),{width:o,height:n.width,left:n.radius,top:-n.width>>1,filter:a}),e("fill",{color:n.color,opacity:n.opacity}),e("stroke",{opacity:0}))))}var o=n.length+n.width,a=2*o,f=-(n.width+n.length)*2+"px",l=u(r(),{position:"absolute",top:f,left:f}),c;if(n.shadow)for(c=1;c<=n.lines;c++)s(c,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(c=1;c<=n.lines;c++)s(c);return i(t,l)},v.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):h=o(t,"animation")}(),e.Spinner=v}(window,document);var LZMA=function(){function r(e,t){postMessage({action:3,callback_num:t,result:e})}function y(){return eo}function b(){}function w(){return to}function E(){}function S(){return no}function x(){}function T(e,t){return e.detailMessage=t,e}function N(){return ro}function C(){}function k(e,t){return e}function L(){return io}function A(){}function O(e,t){e[e.explicitLength++]=t}function M(e,t){e[e.explicitLength++]=t}function _(e){var t,n;return t=(n=e.join(""),e.length=e.explicitLength=0,n),e[e.explicitLength++]=t,t}function D(e,t){var n=new Array(t);if(e>0){var r=[null,0,!1,[0,0]][e];for(var i=0;i<t;++i)n[i]=r}return n}function P(){return this.arrayClass$}function H(e,t,n,r,i){var s;return s=D(i,r),I(),R(s,U,z),s.arrayClass$=e,s.typeId$=t,s.queryId$=n,s}function B(e,t,n,r){return I(),R(r,U,z),r.arrayClass$=e,r.typeId$=t,r.queryId$=n,r}function j(e,t,n){if(n!=null){if(e.queryId$>0&&!X(n.typeId$,e.queryId$))throw new nn;if(e.queryId$<0&&(n.typeMarker$==Zs||n.typeId$==2))throw new nn}return e[t]=n}function F(){}function I(){I=Zs,U=[],z=[],q(new F,U,z)}function q(e,t,n){var r=0,i;for(var s in e)if(i=e[s])t[r]=s,n[r]=i,++r}function R(e,t,n){I();for(var r=0,i=t.length;r<i;++r)e[t[r]]=n[r]}function W(e,t){return e&&!!K[e][t]}function X(e,t){return e&&K[e][t]}function V(e,t){if(e!=null&&!X(e.typeId$,t))throw new ln;return e}function $(e,t){return e!=null&&W(e.typeId$,t)}function J(e){return~~Math.max(Math.min(e,2147483647),-2147483648)}function Q(e){return e!=null&&W(e.typeId$,2)?e:k(new A,e)}function G(e,t){var n,r;return n=e[1]+t[1],r=e[0]+t[0],tt(r,n)}function Y(e,t,n){return t==0?e:n==0?e:G(e,tt(t*n,0))}function Z(e,t){return at(~~Math.max(Math.min(e[1]/4294967296,2147483647),-2147483648)&~~Math.max(Math.min(t[1]/4294967296,2147483647),-2147483648),ut(e)&ut(t))}function et(e,t){var n,r;return e[0]==t[0]&&e[1]==t[1]?0:(n=e[1]<0,r=t[1]<0,n&&!r?-1:!n&&r?1:mt(e,t)[1]<0?-1:1)}function tt(e,t){var n,r;t%=0x10000000000000000,e%=0x10000000000000000,n=t%4294967296,r=Math.floor(e/4294967296)*4294967296,t=t-n+r,e=e-r+n;while(e<0)e+=4294967296,t-=4294967296;while(e>4294967295)e-=4294967296,t+=4294967296;t%=0x10000000000000000;while(t>0x7fffffff00000000)t-=0x10000000000000000;while(t<-0x8000000000000000)t+=0x10000000000000000;return[e,t]}function nt(e,t){var n,r,i,s,o,u;if(t[0]==0&&t[1]==0)throw Gt(new Zt,"/ by zero");if(e[0]==0&&e[1]==0)return St(),Ot;if(rt(e,(St(),Nt)))return rt(t,kt)||rt(t,Ct)?Nt:(s=dt(e,1),n=pt(nt(s,t),1),o=mt(e,ft(t,n)),G(n,nt(o,t)));if(rt(t,Nt))return Ot;if(e[1]<0)return t[1]<0?nt(ct(e),ct(t)):ct(nt(ct(e),t));if(t[1]<0)return ct(nt(e,ct(t)));u=Ot,o=e;while(et(o,t)>=0)i=it(Math.floor(gt(o)/yt(t))),i[0]==0&&i[1]==0&&(i=kt),r=ft(i,t),u=G(u,i),o=mt(o,r);return u}function rt(e,t){return e[0]==t[0]&&e[1]==t[1]}function it(e){return isNaN(e)?(St(),Ot):e<-0x8000000000000000?(St(),Nt):e>=0x8000000000000000?(St(),Tt):e>0?tt(Math.floor(e),0):tt(Math.ceil(e),0)}function st(e){var t,n;return e>-129&&e<128?(t=e+128,n=(wt(),Et)[t],n==null&&(n=Et[t]=ot(e)),n):ot(e)}function ot(e){return e>=0?[e,0]:[e+4294967296,-4294967296]}function ut(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-4294967296,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function at(e,t){var n,r;return n=e*4294967296,r=t,t<0&&(r+=4294967296),[r,n]}function ft(e,t){var n,r,i,s,o,u,a,f,l;return e[0]==0&&e[1]==0?(St(),Ot):t[0]==0&&t[1]==0?(St(),Ot):rt(e,(St(),Nt))?lt(t):rt(t,Nt)?lt(e):e[1]<0?t[1]<0?ft(ct(e),ct(t)):ct(ft(ct(e),t)):t[1]<0?ct(ft(e,ct(t))):et(e,At)<0&&et(t,At)<0?tt((e[1]+e[0])*(t[1]+t[0]),0):(i=e[1]%281474976710656,s=e[1]-i,n=e[0]%65536,r=e[0]-n,a=t[1]%281474976710656,f=t[1]-a,o=t[0]%65536,u=t[0]-o,l=Ot,l=Y(l,s,o),l=Y(l,i,u),l=Y(l,i,o),l=Y(l,r,a),l=Y(l,r,u),l=Y(l,r,o),l=Y(l,n,f),l=Y(l,n,a),l=Y(l,n,u),l=Y(l,n,o),l)}function lt(e){return(ut(e)&1)==1?(St(),Nt):(St(),Ot)}function ct(e){var t,n;return rt(e,(St(),Nt))?Nt:(t=-e[1],n=-e[0],n>4294967295&&(n-=4294967296,t+=4294967296),n<0&&(n+=4294967296,t-=4294967296),[n,t])}function ht(e){return e<=30?1<<e:ht(30)*ht(e-30)}function pt(e,t){var n,r,i,s;return t&=63,rt(e,(St(),Nt))?t==0?e:Ot:e[1]<0?ct(pt(ct(e),t)):(s=ht(t),r=e[1]*s%0x10000000000000000,i=e[0]*s,n=i-i%4294967296,r+=n,i-=n,r>=0x8000000000000000&&(r-=0x10000000000000000),[i,r])}function dt(e,t){var n,r,i;return t&=63,i=ht(t),n=e[1]/i,r=Math.floor(e[0]/i),tt(r,n)}function vt(e,t){var n;return t&=63,n=dt(e,t),e[1]<0&&(n=G(n,pt((St(),Lt),63-t))),n}function mt(e,t){var n,r;return n=e[1]-t[1],r=e[0]-t[0],tt(r,n)}function gt(e){var t,n,r;return n=J(Math.log(e[1])/(St(),xt)),n<=48?e[1]+e[0]:(t=n-48,r=(1<<t)-1,e[1]+(e[0]-r))}function yt(e){var t,n,r;return n=J(Math.log(e[1])/(St(),xt)),n<=48?e[1]+e[0]:(t=n-48,r=(1<<t)-1,e[1]+(e[0]+r))}function bt(e){var t,n,r,i,s,o;if(e[0]==0&&e[1]==0)return"0";if(rt(e,(St(),Nt)))return"-9223372036854775808";if(e[1]<0)return"-"+bt(ct(e));n=e,i="";while(n[0]!=0||n[1]!=0){s=st(1e9),r=nt(n,s),t=""+ut(mt(n,ft(r,s))),n=r;if(n[0]!=0||n[1]!=0){o=9-t.length;for(;o>0;--o)t="0"+t}i=t+i}return i}function wt(){wt=Zs,Et=H(oo,0,9,256,0)}function St(){St=Zs,xt=Math.log(2),Tt=g,Nt=u,Ct=st(-1),kt=st(1),Lt=st(2),At=d,Ot=st(0)}function Mt(){return uo}function _t(){}function Dt(e,t){return Pt(e,t,0,t.length),e}function Pt(e,t,n,r){return e.buf=t,e.pos=n,e.count=n+r,e.count>t.length&&(e.count=t.length),e}function Ht(e){return e.pos>=e.count?-1:e.buf[e.pos++]&255}function Bt(e,t,n,r){return e.pos>=e.count?-1:(r=En(r,e.count-e.pos),On(e.buf,e.pos,t,n,r),e.pos+=r,r)}function jt(){return ao}function Ft(){}function It(){return lo}function qt(){}function Rt(e){return e.buf=H(fo,0,-1,32,1),e}function Ut(e,t){var n;if(t<=e.buf.length)return;t=wn(t,e.buf.length*2),n=H(fo,0,-1,t,1),On(e.buf,0,n,0,e.buf.length),e.buf=n}function zt(e){var t;return t=H(fo,0,-1,e.count,1),On(e.buf,0,t,0,e.count),t}function Wt(e,t){Ut(e,e.count+1),e.buf[e.count++]=t<<24>>24}function Xt(e,t,n,r){Ut(e,e.count+r),On(t,n,e.buf,e.count,r),e.count+=r}function Vt(){return co}function $t(){}function Jt(e,t){return e.detailMessage=t,e}function Kt(){return ho}function Qt(){}function Gt(e,t){return e.detailMessage=t,e}function Yt(){return vo}function Zt(){}function en(e,t){return e.detailMessage=t,e}function tn(){return mo}function nn
(){}function rn(e,t){var n;return n=new an,n.typeName=e+t,n}function sn(e,t){var n;return n=new an,n.typeName=e+t,n}function on(e,t){var n;return n=new an,n.typeName=e+t,n}function un(){return yo}function an(){}function fn(){return bo}function ln(){}function cn(){return po}function hn(){}function pn(e,t){return e.detailMessage=t,e}function dn(){return wo}function vn(){}function mn(){return Eo}function gn(){}function yn(){return So}function bn(){}function wn(e,t){return e>t?e:t}function En(e,t){return e<t?e:t}function Sn(){return To}function xn(){}function Tn(e,t){return t==null?!1:String(e)==t}function Nn(e,t,n,r,i){var s;for(s=t;s<n;++s)r[i++]=e.charCodeAt(s)}function Cn(){return No}function kn(e){var t;return e.data=(t=[],t.explicitLength=0,t),e}function Ln(){return Co}function An(){}function On(e,t,n,r,i){var s,o,u,a,f,l,c,h;if(e==null||n==null)throw new xn;c=(e.typeMarker$==Zs||e.typeId$==2?e.getClass$():so).typeName,u=(n.typeMarker$==Zs||n.typeId$==2?n.getClass$():so).typeName;if(c.charCodeAt(0)!=91||u.charCodeAt(0)!=91)throw en(new nn,"Must be array types");if(c.charCodeAt(1)!=u.charCodeAt(1))throw en(new nn,"Array types must match");h=e.length,a=n.length;if(t<0||r<0||i<0||t+i>h||r+i>a)throw new bn;if(c.charCodeAt(1)!=76&&c.charCodeAt(1)!=91||!!Tn(c,u))for(f=0;f<i;++f)n[r+f]=e[t+f];else{l=V(e,3),s=V(n,3);if((e==null?null:e)===(n==null?null:n)&&t<r){t+=i;for(o=r+i;o-->r;)j(s,o,l[--t])}else for(o=r+i;r<o;)j(s,r++,l[t++])}}function Mn(e,t){if(!Ti(t,1<<e.dictionarySize))throw T(new C,"unexpected failure");if(!ki(t,e.fb))throw T(new C,"unexpected failure");if(!Ci(t,e.matchFinder))throw T(new C,"unexpected failure");if(!Ni(t,e.lc,e.lp,e.pb))throw T(new C,"unexpected failure")}function _n(){return Zo}function Dn(){}function Pn(e){var t;try{return Ar(e.chunker)}catch(t){t=Q(t);if($(t,10))return!1;throw t}}function Hn(e,t,n,r,i){var s,o;if(!i)throw pn(new vn,"null mode");if(et(r,a)<0)throw pn(new vn,"invalid length "+bt(r));e.length_0=r,s=ci(new Di),Mn(i,s),s._writeEndMark=!0,Li(s,n);for(o=0;o<64;o+=8)Wt(n,ut(dt(r,o))&255);e.chunker=(s._needReleaseMFStream=!1,s._inStream=t,s._finished=!1,li(s),s._rangeEncoder.Stream=n,bi(s),pi(s),hi(s),s._lenEncoder._tableSize=s._numFastBytes+1-2,Wi(s._lenEncoder,1<<s._posStateBits),s._repMatchLenEncoder._tableSize=s._numFastBytes+1-2,Wi(s._repMatchLenEncoder,1<<s._posStateBits),s.nowPos64=f,undefined,kr(new Dr,s))}function Bn(){return eu}function jn(){}function Fn(e,t,n){var r;e.output=Rt(new $t);try{Hn(e,Dt(new Ft,t),e.output,st(t.length),n)}catch(r){throw r=Q(r),$(r,10)?T(new C,"impossible exception"):r}return e}function In(){return tu}function qn(){}function Rn(e){var t,n;try{return Ar(e.chunker)}catch(t){t=Q(t);if($(t,10))return n=t,e.exception=n,!1;throw t}}function Un(e,t,n){var r,i="",s,o,u,f;o=H(fo,0,-1,5,1);for(s=0;s<o.length;++s){u=Ht(t);if(u==-1)throw Jt(new Qt,"truncated input");o[s]=u<<24>>24}r=jr(new zr);if(!Ir(r,o))throw Jt(new Qt,"corrupted input");for(s=0;s<64;s+=8){u=Ht(t);if(u==-1)throw Jt(new Qt,"truncated input");u=u.toString(16),u.length==1&&(u="0"+u),i=u+""+i}i.toLowerCase()=="ffffffffffffffffff"||i==0?e.length_0=a:(f=parseInt(i,16),f>4294967295?e.length_0=a:e.length_0=it(f)),e.chunker=Hr(r,t,n,e.length_0)}function zn(){return nu}function Wn(){}function Xn(e,t){return e.output=Rt(new $t),Un(e,Dt(new Ft,t),e.output),e}function Vn(){return ru}function $n(){}function Jn(e,t,n,r){var i;e._keepSizeBefore=t,e._keepSizeAfter=n,i=t+n+r;if(e._bufferBase==null||e._blockSize!=i)e._bufferBase=null,e._blockSize=i,e._bufferBase=H(fo,0,-1,e._blockSize,1);e._pointerToLastSafePosition=e._blockSize-n}function Kn(e,t){return e._bufferBase[e._bufferOffset+e._pos+t]}function Qn(e,t,n,r){var i,s;e._streamEndWasReached&&e._pos+t+r>e._streamPos&&(r=e._streamPos-(e._pos+t)),++n,s=e._bufferOffset+e._pos+t;for(i=0;i<r&&e._bufferBase[s+i]==e._bufferBase[s+i-n];++i);return i}function Gn(e){return e._streamPos-e._pos}function Yn(e){var t,n,r;r=e._bufferOffset+e._pos-e._keepSizeBefore,r>0&&--r,n=e._bufferOffset+e._streamPos-r;for(t=0;t<n;++t)e._bufferBase[t]=e._bufferBase[r+t];e._bufferOffset-=r}function Zn(e){var t;++e._pos,e._pos>e._posLimit&&(t=e._bufferOffset+e._pos,t>e._pointerToLastSafePosition&&Yn(e),er(e))}function er(e){var t,n,r;if(e._streamEndWasReached)return;for(;;){r=-e._bufferOffset+e._blockSize-e._streamPos;if(r==0)return;t=Bt(e._stream,e._bufferBase,e._bufferOffset+e._streamPos,r);if(t==-1){e._posLimit=e._streamPos,n=e._bufferOffset+e._posLimit,n>e._pointerToLastSafePosition&&(e._posLimit=e._pointerToLastSafePosition-e._bufferOffset),e._streamEndWasReached=!0;return}e._streamPos+=t,e._streamPos>=e._pos+e._keepSizeAfter&&(e._posLimit=e._streamPos-e._keepSizeAfter)}}function tr(e,t){e._bufferOffset+=t,e._posLimit-=t,e._pos-=t,e._streamPos-=t}function nr(){return ko}function rr(){}function ir(){ir=Zs;var e,t,n;dr=H(xo,0,-1,256,1);for(e=0;e<256;++e){n=e;for(t=0;t<8;++t)(n&1)!=0?n=n>>>1^-306674912:n>>>=1;dr[e]=n}}function sr(e,t,n,r,i){var s,o,u;return t>1073741567?!1:(e._cutValue=16+(r>>1),u=~~((t+n+r+i)/2)+256,Jn(e,t+n,r+i,u),e._matchMaxLen=r,s=t+1,e._cyclicBufferSize!=s&&(e._son=H(xo,0,-1,(e._cyclicBufferSize=s)*2,1)),o=65536,e.HASH_ARRAY&&(o=t-1,o|=o>>1,o|=o>>2,o|=o>>4,o|=o>>8,o>>=1,o|=65535,o>16777216&&(o>>=1),e._hashMask=o,++o,o+=e.kFixHashSize),o!=e._hashSizeSum&&(e._hash=H(xo,0,-1,e._hashSizeSum=o,1)),!0)}function or(e,t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;if(e._pos+e._matchMaxLen<=e._streamPos)v=e._matchMaxLen;else{v=e._streamPos-e._pos;if(v<e.kMinMatchCheck)return ar(e),0}y=0,m=e._pos>e._cyclicBufferSize?e._pos-e._cyclicBufferSize:0,r=e._bufferOffset+e._pos,g=1,f=0,l=0,e.HASH_ARRAY?(S=dr[e._bufferBase[r]&255]^e._bufferBase[r+1]&255,f=S&1023,S^=(e._bufferBase[r+2]&255)<<8,l=S&65535,c=(S^dr[e._bufferBase[r+3]&255]<<5)&e._hashMask):c=e._bufferBase[r]&255^(e._bufferBase[r+1]&255)<<8,i=e._hash[e.kFixHashSize+c],e.HASH_ARRAY&&(s=e._hash[f],o=e._hash[1024+l],e._hash[f]=e._pos,e._hash[1024+l]=e._pos,s>m&&e._bufferBase[e._bufferOffset+s]==e._bufferBase[r]&&(t[y++]=g=2,t[y++]=e._pos-s-1),o>m&&e._bufferBase[e._bufferOffset+o]==e._bufferBase[r]&&(o==s&&(y-=2),t[y++]=g=3,t[y++]=e._pos-o-1,s=o),y!=0&&s==i&&(y-=2,g=1)),e._hash[e.kFixHashSize+c]=e._pos,w=(e._cyclicBufferPos<<1)+1,E=e._cyclicBufferPos<<1,p=d=e.kNumHashDirectBytes,e.kNumHashDirectBytes!=0&&i>m&&e._bufferBase[e._bufferOffset+i+e.kNumHashDirectBytes]!=e._bufferBase[r+e.kNumHashDirectBytes]&&(t[y++]=g=e.kNumHashDirectBytes,t[y++]=e._pos-i-1),n=e._cutValue;for(;;){if(i<=m||n--==0){e._son[w]=e._son[E]=0;break}a=e._pos-i,u=(a<=e._cyclicBufferPos?e._cyclicBufferPos-a:e._cyclicBufferPos-a+e._cyclicBufferSize)<<1,b=e._bufferOffset+i,h=p<d?p:d;if(e._bufferBase[b+h]==e._bufferBase[r+h]){while(++h!=v)if(e._bufferBase[b+h]!=e._bufferBase[r+h])break;if(g<h){t[y++]=g=h,t[y++]=a-1;if(h==v){e._son[E]=e._son[u],e._son[w]=e._son[u+1];break}}}(e._bufferBase[b+h]&255)<(e._bufferBase[r+h]&255)?(e._son[E]=i,E=u+1,i=e._son[E],d=h):(e._son[w]=i,w=u,i=e._son[w],p=h)}return ar(e),y}function ur(e){var t;e._bufferOffset=0,e._pos=0,e._streamPos=0,e._streamEndWasReached=!1,er(e);for(t=0;t<e._hashSizeSum;++t)e._hash[t]=0;e._cyclicBufferPos=0,tr(e,-1)}function ar(e){var t;++e._cyclicBufferPos>=e._cyclicBufferSize&&(e._cyclicBufferPos=0),Zn(e),e._pos==1073741823&&(t=e._pos-e._cyclicBufferSize,fr(e._son,e._cyclicBufferSize*2,t),fr(e._hash,e._hashSizeSum,t),tr(e,t))}function fr(e,t,n){var r,i;for(r=0;r<t;++r)i=e[r],i<=n?i=0:i-=n,e[r]=i}function lr(e,t){e.HASH_ARRAY=t>2,e.HASH_ARRAY?(e.kNumHashDirectBytes=0,e.kMinMatchCheck=4,e.kFixHashSize=66560):(e.kNumHashDirectBytes=2,e.kMinMatchCheck=3,e.kFixHashSize=0)}function cr(e,t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;do{if(e._pos+e._matchMaxLen<=e._streamPos)p=e._matchMaxLen;else{p=e._streamPos-e._pos;if(p<e.kMinMatchCheck){ar(e);continue}}d=e._pos>e._cyclicBufferSize?e._pos-e._cyclicBufferSize:0,r=e._bufferOffset+e._pos,e.HASH_ARRAY?(y=dr[e._bufferBase[r]&255]^e._bufferBase[r+1]&255,u=y&1023,e._hash[u]=e._pos,y^=(e._bufferBase[r+2]&255)<<8,a=y&65535,e._hash[1024+a]=e._pos,f=(y^dr[e._bufferBase[r+3]&255]<<5)&e._hashMask):f=e._bufferBase[r]&255^(e._bufferBase[r+1]&255)<<8,i=e._hash[e.kFixHashSize+f],e._hash[e.kFixHashSize+f]=e._pos,m=(e._cyclicBufferPos<<1)+1,g=e._cyclicBufferPos<<1,c=h=e.kNumHashDirectBytes,n=e._cutValue;for(;;){if(i<=d||n--==0){e._son[m]=e._son[g]=0;break}o=e._pos-i,s=(o<=e._cyclicBufferPos?e._cyclicBufferPos-o:e._cyclicBufferPos-o+e._cyclicBufferSize)<<1,v=e._bufferOffset+i,l=c<h?c:h;if(e._bufferBase[v+l]==e._bufferBase[r+l]){while(++l!=p)if(e._bufferBase[v+l]!=e._bufferBase[r+l])break;if(l==p){e._son[g]=e._son[s],e._son[m]=e._son[s+1];break}}(e._bufferBase[v+l]&255)<(e._bufferBase[r+l]&255)?(e._son[g]=i,g=s+1,i=e._son[g],h=l):(e._son[m]=i,m=s,i=e._son[m],c=l)}ar(e)}while(--t!=0)}function hr(){return Lo}function pr(){}function vr(e,t,n){var r;r=e._pos-t-1,r<0&&(r+=e._windowSize);for(;n!=0;--n)r>=e._windowSize&&(r=0),e._buffer[e._pos++]=e._buffer[r++],e._pos>=e._windowSize&&gr(e)}function mr(e,t){if(e._buffer==null||e._windowSize!=t)e._buffer=H(fo,0,-1,t,1);e._windowSize=t,e._pos=0,e._streamPos=0}function gr(e){var t;t=e._pos-e._streamPos;if(t==0)return;Xt(e._stream,e._buffer,e._streamPos,t),e._pos>=e._windowSize&&(e._pos=0),e._streamPos=e._pos}function yr(e,t){var n;return n=e._pos-t-1,n<0&&(n+=e._windowSize),e._buffer[n]}function br(e,t){t||(e._streamPos=0,e._pos=0)}function wr(e,t){e._buffer[e._pos++]=t,e._pos>=e._windowSize&&gr(e)}function Er(e){gr(e),e._stream=null}function Sr(e,t){gr(e),e._stream=null,e._stream=t}function xr(){return Ao}function Tr(){}function Nr(e){return e-=2,e<4?e:3}function Cr(e){return e<4?0:e<10?e-3:e-6}function kr(e,t){return e.encoder=t,e.decoder=null,e.alive=!0,e}function Lr(e,t){return e.decoder=t,e.encoder=null,e.alive=!0,e}function Ar(e){var t;if(!e.alive)throw new gn;t=!0;try{return e.encoder?Mr(e):Or(e),t=!1,e.alive}finally{t&&(e.alive=!1)}}function Or(e){var t;t=Br(e.decoder);if(t==-1)throw Jt(new Qt,"corrupted input");e.inBytesProcessed=a,e.outBytesProcessed=e.decoder.nowPos64;if(t==1||et(e.decoder.outSize,f)>=0&&et(e.decoder.nowPos64,e.decoder.outSize)>=0)Pr(e.decoder),e.alive=!1}function Mr(e){fi(e.encoder,e.encoder.processedInSize,e.encoder.processedOutSize,e.encoder.finished),e.inBytesProcessed=e.encoder.processedInSize[0],e.encoder.finished[0]&&(xi(e.encoder),e.alive=!1)}function _r(){return Oo}function Dr(){}function Pr(e){gr(e.m_OutWindow),Er(e.m_OutWindow),e.m_RangeDecoder.Stream=null}function Hr(e,t,n,r){return e.m_RangeDecoder.Stream=t,Sr(e.m_OutWindow,n),Fr(e),e.state=0,e.rep0=0,e.rep1=0,e.rep2=0,e.rep3=0,e.outSize=r,e.nowPos64=f,e.prevByte=0,Lr(new Dr,e)}function Br(e){var t,n,r,i,s,o;o=ut(e.nowPos64)&e.m_PosStateMask;if(xs(e.m_RangeDecoder,e.m_IsMatchDecoders,(e.state<<4)+o)==0)t=Gr(e.m_LiteralDecoder,ut(e.nowPos64),e.prevByte),e.state<7?e.prevByte=ti(t,e.m_RangeDecoder):e.prevByte=ni(t,e.m_RangeDecoder,yr(e.m_OutWindow,e.rep0)),wr(e.m_OutWindow,e.prevByte),e.state=Cr(e.state),e.nowPos64=G(e.nowPos64,l);else{if(xs(e.m_RangeDecoder,e.m_IsRepDecoders,e.state)==1)r=0,xs(e.m_RangeDecoder,e.m_IsRepG0Decoders,e.state)==0?xs(e.m_RangeDecoder,e.m_IsRep0LongDecoders,(e.state<<4)+o)==0&&(e.state=e.state<7?9:11,r=1):(xs(e.m_RangeDecoder,e.m_IsRepG1Decoders,e.state)==0?n=e.rep1:(xs(e.m_RangeDecoder,e.m_IsRepG2Decoders,e.state)==0?n=e.rep2:(n=e.rep3,e.rep3=e.rep2),e.rep2=e.rep1),e.rep1=e.rep0,e.rep0=n),r==0&&(r=Xr(e.m_RepLenDecoder,e.m_RangeDecoder,o)+2,e.state=e.state<7?8:11);else{e.rep3=e.rep2,e.rep2=e.rep1,e.rep1=e.rep0,r=2+Xr(e.m_LenDecoder,e.m_RangeDecoder,o),e.state=e.state<7?7:10,s=fs(e.m_PosSlotDecoder[Nr(r)],e.m_RangeDecoder);if(s>=4){i=(s>>1)-1,e.rep0=(2|s&1)<<i;if(s<14)e.rep0+=cs(e.m_PosDecoders,e.rep0-s-1,e.m_RangeDecoder,i);else{e.rep0+=Ts(e.m_RangeDecoder,i-4)<<4,e.rep0+=ls(e.m_PosAlignDecoder,e.m_RangeDecoder);if(e.rep0<0)return e.rep0==-1?1:-1}}else e.rep0=s}if(et(st(e.rep0),e.nowPos64)>=0||e.rep0>=e.m_DictionarySizeCheck)return-1;vr(e.m_OutWindow,e.rep0,r),e.nowPos64=G(e.nowPos64,st(r)),e.prevByte=yr(e.m_OutWindow,0)}return 0}function jr(e){var t;e.m_OutWindow=new Tr,e.m_RangeDecoder=new Ls,e.m_IsMatchDecoders=H(Mo,0,-1,192,1),e.m_IsRepDecoders=H(Mo,0,-1,12,1),e.m_IsRepG0Decoders=H(Mo,0,-1,12,1),e.m_IsRepG1Decoders=H(Mo,0,-1,12,1),e.m_IsRepG2Decoders=H(Mo,0,-1,12,1),e.m_IsRep0LongDecoders=H(Mo,0,-1,192,1),e.m_PosSlotDecoder=H(_o,0,7,4,0),e.m_PosDecoders=H(Mo,0,-1,114,1),e.m_PosAlignDecoder=as(new ps,4),e.m_LenDecoder=Vr(new Kr),e.m_RepLenDecoder=Vr(new Kr),e.m_LiteralDecoder=new ei;for(t=0;t<4;++t)e.m_PosSlotDecoder[t]=as(new ps,6);return e}function Fr(e){var t;br(e.m_OutWindow,!1),Cs(e.m_IsMatchDecoders),Cs(e.m_IsRep0LongDecoders),Cs(e.m_IsRepDecoders),Cs(e.m_IsRepG0Decoders),Cs(e.m_IsRepG1Decoders),Cs(e.m_IsRepG2Decoders),Cs(e.m_PosDecoders),Yr(e.m_LiteralDecoder);for(t=0;t<4;++t)Cs(e.m_PosSlotDecoder[t].Models);$r(e.m_LenDecoder),$r(e.m_RepLenDecoder),Cs(e.m_PosAlignDecoder.Models),Ns(e.m_RangeDecoder)}function Ir(e,t){var n,r,i,s,o,u,a;if(t.length<5)return!1;a=t[0]&255,i=a%9,u=~~(a/9),s=u%5,o=~~(u/5),n=0;for(r=0;r<4;++r)n+=(t[1+r]&255)<<r*8;return Rr(e,i,s,o)?qr(e,n):!1}function qr(e,t){return t<0?!1:(e.m_DictionarySize!=t&&(e.m_DictionarySize=t,e.m_DictionarySizeCheck=wn(e.m_DictionarySize,1),mr(e.m_OutWindow,wn(e.m_DictionarySizeCheck,4096))),!0)}function Rr(e,t,n,r){var i;return t>8||n>4||r>4?!1:(Qr(e.m_LiteralDecoder,n,t),i=1<<r,Wr(e.m_LenDecoder,i),Wr(e.m_RepLenDecoder,i),e.m_PosStateMask=i-1,!0)}function Ur(){return Do}function zr(){}function Wr(e,t){for(;e.m_NumPosStates<t;++e.m_NumPosStates)e.m_LowCoder[e.m_NumPosStates]=as(new ps,3),e.m_MidCoder[e.m_NumPosStates]=as(new ps,3)}function Xr(e,t,n){var r;return xs(t,e.m_Choice,0)==0?fs(e.m_LowCoder[n],t):(r=8,xs(t,e.m_Choice,1)==0?r+=fs(e.m_MidCoder[n],t):r+=8+fs(e.m_HighCoder,t),r)}function Vr(e){return e.m_Choice=H(Mo,0,-1,2,1),e.m_LowCoder=H(_o,0,7,16,0),e.m_MidCoder=H(_o,0,7,16,0),e.m_HighCoder=as(new ps,8),e}function $r(e){var t;Cs(e.m_Choice);for(t=0;t<e.m_NumPosStates;++t)Cs(e.m_LowCoder[t].Models),Cs(e.m_MidCoder[t].Models);Cs(e.m_HighCoder.Models)}function Jr(){return Po}function Kr(){}function Qr(e,t,n){var r,i;if(e.m_Coders!=null&&e.m_NumPrevBits==n&&e.m_NumPosBits==t)return;e.m_NumPosBits=t,e.m_PosMask=(1<<t)-1,e.m_NumPrevBits=n,i=1<<e.m_NumPrevBits+e.m_NumPosBits,e.m_Coders=H(Ho,0,4,i,0);for(r=0;r<i;++r)e.m_Coders[r]=ri(new si)}function Gr(e,t,n){return e.m_Coders[((t&e.m_PosMask)<<e.m_NumPrevBits)+((n&255)>>>8-e.m_NumPrevBits)]}function Yr(e){var t,n;n=1<<e.m_NumPrevBits+e.m_NumPosBits;for(t=0;t<n;++t)Cs(e.m_Coders[t].m_Decoders)}function Zr(){return Bo}function ei(){}function ti(e,t){var n;n=1;do n=n<<1|xs(t,e.m_Decoders,n);while(n<256);return n<<24>>24}function ni(e,t,n){var r,i,s;s=1;do{i=n>>7&1,n<<=1,r=xs(t,e.m_Decoders,(1+i<<8)+s),s=s<<1|r;if(i!=r){while(s<256)s=s<<1|xs(t,e.m_Decoders,s);break}}while(s<256);return s<<24>>24}function ri(e){return e.m_Decoders=H(Mo,0,-1,768,1),e}function ii(){return jo}function si(){}function oi(){oi=Zs;var e,t,n,r;Pi=H(fo,0,-1,2048,1),e=2,Pi[0]=0,Pi[1]=1;for(r=2;r<22;++r){n=1<<(r>>1)-1;for(t=0;t<n;++t,++e)Pi[e]=r<<24>>24}}function ui(e,t){var n,r,i,s;e._optimumEndIndex=t,i=e._optimum[t].PosPrev,r=e._optimum[t].BackPrev;do e._optimum[t].Prev1IsChar&&(is(e._optimum[i]),e._optimum[i].PosPrev=i-1,e._optimum[t].Prev2&&(e._optimum[i-1].Prev1IsChar=!1,e._optimum[i-1].PosPrev=e._optimum[t].PosPrev2,e._optimum[i-1].BackPrev=e._optimum[t].BackPrev2)),s=i,n=r,r=e._optimum[s].BackPrev,i=e._optimum[s].PosPrev,e._optimum[s].BackPrev=n,e._optimum[s].PosPrev=t,t=s;while(t>0);return e.backRes=e._optimum[0].BackPrev,e._optimumCurrentIndex=e._optimum[0].PosPrev,e._optimumCurrentIndex}function ai(e){var t;e._state=0,e._previousByte=0;for(t=0;t<4;++t)e._repDistances[t]=0}function fi(e,t,n,r){var i,s,o,u,a,c,p,d,v,m,g,y,b,w,E;t[0]=f,n[0]=f,r[0]=!0,e._inStream&&(e._matchFinder._stream=e._inStream,ur(e._matchFinder),e._needReleaseMFStream=!0,e._inStream=null);if(e._finished)return;e._finished=!0,w=e.nowPos64;if(rt(e.nowPos64,f)){if(Gn(e._matchFinder)==0){di(e,ut(e.nowPos64));return}Ei(e),b=ut(e.nowPos64)&e._posStateMask,Os(e._rangeEncoder,e._isMatch,(e._state<<4)+b,0),e._state=Cr(e._state),o=Kn(e._matchFinder,-e._additionalOffset),Yi(Ji(e._literalEncoder,ut(e.nowPos64),e._previousByte),e._rangeEncoder,o),e._previousByte=o,--e._additionalOffset,e.nowPos64=G(e.nowPos64,l)}if(Gn(e._matchFinder)==0){di(e,ut(e.nowPos64));return}for(;;){p=vi(e,ut(e.nowPos64)),m=e.backRes,b=ut(e.nowPos64)&e._posStateMask,s=(e._state<<4)+b;if(p==1&&m==-1)Os(e._rangeEncoder,e._isMatch,s,0),o=Kn(e._matchFinder,-e._additionalOffset),E=Ji(e._literalEncoder,ut(e.nowPos64),e._previousByte),e._state<7?Yi(E,e._rangeEncoder,o):(v=Kn(e._matchFinder,-e._repDistances[0]-1-e._additionalOffset),Zi(E,e._rangeEncoder,v,o)),e._previousByte=o,e._state=Cr(e._state);else{Os(e._rangeEncoder,e._isMatch,s,1);if(m<4){Os(e._rangeEncoder,e._isRep,e._state,1),m==0?(Os(e._rangeEncoder,e._isRepG0,e._state,0),p==1?Os(e._rangeEncoder,e._isRep0Long,s,0):Os(e._rangeEncoder,e._isRep0Long,s,1)):(Os(e._rangeEncoder,e._isRepG0,e._state,1),m==1?Os(e._rangeEncoder,e._isRepG1,e._state,0):(Os(e._rangeEncoder,e._isRepG1,e._state,1),Os(e._rangeEncoder,e._isRepG2,e._state,m-2))),p==1?e._state=e._state<7?9:11:(Ri(e._repMatchLenEncoder,e._rangeEncoder,p-2,b),e._state=e._state<7?8:11),u=e._repDistances[m];if(m!=0){for(c=m;c>=1;--c)e._repDistances[c]=e._repDistances[c-1];e._repDistances[0]=u}}else{Os(e._rangeEncoder,e._isRep,e._state,0),e._state=e._state<7?7:10,Ri(e._lenEncoder,e._rangeEncoder,p-2,b),m-=4,y=Oi(m),d=Nr(p),vs(e._posSlotEncoder[d],e._rangeEncoder,y),y>=4&&(a=(y>>1)-1,i=(2|y&1)<<a,g=m-i,y<14?bs(e._posEncoders,i-y-1,e._rangeEncoder,a,g):(Ms(e._rangeEncoder,g>>4,a-4),gs(e._posAlignEncoder,e._rangeEncoder,g&15),++e._alignPriceCount)),u=m;for(c=3;c>=1;--c)e._repDistances[c]=e._repDistances[c-1];e._repDistances[0]=u,++e._matchPriceCount}e._previousByte=Kn(e._matchFinder,p-1-e._additionalOffset)}e._additionalOffset-=p,e.nowPos64=G(e.nowPos64,st(p));if(e._additionalOffset==0){e._matchPriceCount>=128&&pi(e),e._alignPriceCount>=16&&hi(e),t[0]=e.nowPos64,n[0]=Ds(e._rangeEncoder);if(Gn(e._matchFinder)==0){di(e,ut(e.nowPos64));return}if(et(mt(e.nowPos64,w),h)>=0){e._finished=!1,r[0]=!1;return}}}}function li(e){var t,n;e._matchFinder||(t=(ir(),new pr),n=4,e._matchFinderType==0&&(n=2),lr(t,n),e._matchFinder=t),$i(e._literalEncoder,e._numLiteralPosStateBits,e._numLiteralContextBits);if(e._dictionarySize==e._dictionarySizePrev&&e._numFastBytesPrev==e._numFastBytes)return;sr(e._matchFinder,e._dictionarySize,4096,e._numFastBytes,274),e._dictionarySizePrev=e._dictionarySize,e._numFastBytesPrev=e._numFastBytes}function ci(e){var t;oi(),e._repDistances=H(xo,0,-1,4,1),e._optimum=H(Fo,0,6,4096,0),e._rangeEncoder=(As(),new Is),e._isMatch=H(Mo,0,-1,192,1),e._isRep=H(Mo,0,-1,12,1),e._isRepG0=H(Mo,0,-1,12,1),e._isRepG1=H(Mo,0,-1,12,1),e._isRepG2=H(Mo,0,-1,12,1),e._isRep0Long=H(Mo,0,-1,192,1),e._posSlotEncoder=H(Io,0,8,4,0),e._posEncoders=H(Mo,0,-1,114,1),e._posAlignEncoder=ds(new Ss,4),e._lenEncoder=Ui(new Vi),e._repMatchLenEncoder=Ui(new Vi),e._literalEncoder=new Gi,e._matchDistances=H(xo,0,-1,548,1),e._posSlotPrices=H(xo,0,-1,256,1),e._distancesPrices=H(xo,0,-1,512,1),e._alignPrices=H(xo,0,-1,16,1),e.reps=H(xo,0,-1,4,1),e.repLens=H(xo,0,-1,4,1),e.processedInSize=H(qo,0,-1,1,3),e.processedOutSize=H(qo,0,-1,1,3),e.finished=H(Ro,0,-1,1,2),e.properties=H(fo,0,-1,5,1),e.tempPrices=H(xo,0,-1,128,1);for(t=0;t<4096;++t)e._optimum[t]=new us;for(t=0;t<4;++t)e._posSlotEncoder[t]=ds(new Ss,6);return e}function hi(e){var t;for(t=0;t<16;++t)e._alignPrices[t]=ys(e._posAlignEncoder,t);e._alignPriceCount=0}function pi(e){var t,n,r,i,s,o,u,a;for(i=4;i<128;++i)o=Oi(i),r=(o>>1)-1,t=(2|o&1)<<r,e.tempPrices[i]=ws(e._posEncoders,t-o-1,r,i-t);for(s=0;s<4;++s){n=e._posSlotEncoder[s],u=s<<6;for(o=0;o<e._distTableSize;++o)e._posSlotPrices[u+o]=ms(n,o);for(o=14;o<e._distTableSize;++o)e._posSlotPrices[u+o]+=(o>>1)-1-4<<6;a=s*128;for(i=0;i<4;++i)e._distancesPrices[a+i]=e._posSlotPrices[u+i];for(;i<128;++i)e._distancesPrices[a+i]=e._posSlotPrices[u+Oi(i)]+e.tempPrices[i]}e._matchPriceCount=0}function di(e,t){Si(e),Ai(e,t&e._posStateMask),_s(e._rangeEncoder)}function vi(e,t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G;if(e._optimumEndIndex!=e._optimumCurrentIndex)return d=e._optimum[e._optimumCurrentIndex].PosPrev-e._optimumCurrentIndex,e.backRes=e._optimum[e._optimumCurrentIndex].BackPrev,e._optimumCurrentIndex=e._optimum[e._optimumCurrentIndex].PosPrev,d;e._optimumCurrentIndex=e._optimumEndIndex=0,e._longestMatchWasFound?(p=e._longestMatchLength,e._longestMatchWasFound=!1):p=Ei(e),L=e._numDistancePairs,C=Gn(e._matchFinder)+1;if(C<2)return e.backRes=-1,1;C>273&&(C=273),R=0;for(l=0;l<4;++l)e.reps[l]=e._repDistances[l],e.repLens[l]=Qn(e._matchFinder,-1,e.reps[l],273),e.repLens[l]>e.repLens[R]&&(R=l);if(e.repLens[R]>=e._numFastBytes)return e.backRes=R,d=e.repLens[R],wi(e,d-1),d;if(p>=e._numFastBytes)return e.backRes=e._matchDistances[L-1]+4,wi(e,p-1),p;a=Kn(e._matchFinder,-1),y=Kn(e._matchFinder,-e._repDistances[0]-1-1);if(p<2&&a!=y&&e.repLens[R]<2)return e.backRes=-1,1;e._optimum[0].State=e._state,H=t&e._posStateMask,e._optimum[1].Price=(As(),qs[e._isMatch[(e._state<<4)+H]>>>2])+ts(Ji(e._literalEncoder,t,e._previousByte),e._state>=7,y,a),is(e._optimum[1]),b=qs[2048-e._isMatch[(e._state<<4)+H]>>>2],q=b+qs[2048-e._isRep[e._state]>>>2],y==a&&(U=q+yi(e,e._state,H),U<e._optimum[1].Price&&(e._optimum[1].Price=U,ss(e._optimum[1]))),h=p>=e.repLens[R]?p:e.repLens[R];if(h<2)return e.backRes=e._optimum[1].BackPrev,1;e._optimum[1].PosPrev=0,e._optimum[0].Backs0=e.reps[0],e._optimum[0].Backs1=e.reps[1],e._optimum[0].Backs2=e.reps[2],e._optimum[0].Backs3=e.reps[3],c=h;do e._optimum[c--].Price=268435455;while(c>=2);for(l=0;l<4;++l){I=e.repLens[l];if(I<2)continue;j=q+gi(e,l,e._state,H);do s=j+zi(e._repMatchLenEncoder,I-2,H),_=e._optimum[I],s<_.Price&&(_.Price=s,_.PosPrev=0,_.BackPrev=l,_.Prev1IsChar=!1);while(--I>=2)}N=b+qs[e._isRep[e._state]>>>2],c=e.repLens[0]>=2?e.repLens[0]+1:2;if(c<=p){A=0;while(c>e._matchDistances[A])A+=2;for(;;++c){f=e._matchDistances[A+1],s=N+mi(e,f,c,H),_=e._optimum[c],s<_.Price&&(_.Price=s,_.PosPrev=0,_.BackPrev=f+4,_.Prev1IsChar=!1);if(c==e._matchDistances[A]){A+=2;if(A==L)break}}}n=0;for(;;){++n;if(n==h)return ui(e,n);w=Ei(e),L=e._numDistancePairs;if(w>=e._numFastBytes)return e._longestMatchLength=w,e._longestMatchWasFound=!0,ui(e,n);++t,P=e._optimum[n].PosPrev,e._optimum[n].Prev1IsChar?(--P,e._optimum[n].Prev2?(W=e._optimum[e._optimum[n].PosPrev2].State,e._optimum[n].BackPrev2<4?W=W<7?8:11:W=W<7?7:10):W=e._optimum[P].State,W=Cr(W)):W=e._optimum[P].State,P==n-1?e._optimum[n].BackPrev==0?W=W<7?9:11:W=Cr(W):(e._optimum[n].Prev1IsChar&&e._optimum[n].Prev2?(P=e._optimum[n].PosPrev2,D=e._optimum[n].BackPrev2,W=W<7?8:11):(D=e._optimum[n].BackPrev,D<4?W=W<7?8:11:W=W<7?7:10),M=e._optimum[P],D<4?D==0?(e.reps[0]=M.Backs0,e.reps[1]=M.Backs1,e.reps[2]=M.Backs2,e.reps[3]=M.Backs3):D==1?(e.reps[0]=M.Backs1,e.reps[1]=M.Backs0,e.reps[2]=M.Backs2,e.reps[3]=M.Backs3):D==2?(e.reps[0]=M.Backs2,e.reps[1]=M.Backs0,e.reps[2]=M.Backs1,e.reps[3]=M.Backs3):(e.reps[0]=M.Backs3,e.reps[1]=M.Backs0,e.reps[2]=M.Backs1,e.reps[3]=M.Backs2):(e.reps[0]=D-4,e.reps[1]=M.Backs0,e.reps[2]=M.Backs1,e.reps[3]=M.Backs2)),e._optimum[n].State=W,e._optimum[n].Backs0=e.reps[0],e._optimum[n].Backs1=e.reps[1],e._optimum[n].Backs2=e.reps[2],e._optimum[n].Backs3=e.reps[3],u=e._optimum[n].Price,a=Kn(e._matchFinder,-1),y=Kn(e._matchFinder,-e.reps[0]-1-1),H=t&e._posStateMask,r=u+qs[e._isMatch[(W<<4)+H]>>>2]+ts(Ji(e._literalEncoder,t,Kn(e._matchFinder,-2)),W>=7,y,a),x=e._optimum[n+1],E=!1,r<x.Price&&(x.Price=r,x.PosPrev=n,x.BackPrev=-1,x.Prev1IsChar=!1,E=!0),b=u+qs[2048-e._isMatch[(W<<4)+H]>>>2],q=b+qs[2048-e._isRep[W]>>>2],y==a&&!(x.PosPrev<n&&x.BackPrev==0)&&(U=q+(qs[e._isRepG0[W]>>>2]+qs[e._isRep0Long[(W<<4)+H]>>>2]),U<=x.Price&&(x.Price=U,x.PosPrev=n,x.BackPrev=0,x.Prev1IsChar=!1,E=!0)),k=Gn(e._matchFinder)+1,k=4095-n<k?4095-n:k,C=k;if(C<2)continue;C>e._numFastBytes&&(C=e._numFastBytes);if(!E&&y!=a){V=En(k-1,e._numFastBytes),m=Qn(e._matchFinder,0,e.reps[0],V);if(m>=2){X=Cr(W),B=t+1&e._posStateMask,T=r+qs[2048-e._isMatch[(X<<4)+B]>>>2]+qs[2048-e._isRep[X]>>>2],O=n+1+m;while(h<O)e._optimum[++h].Price=268435455;s=T+($=zi(e._repMatchLenEncoder,m-2,B),$+gi(e,0,X,B)),_=e._optimum[O],s<_.Price&&(_.Price=s,_.PosPrev=n+1,_.BackPrev=0,_.Prev1IsChar=!0,_.Prev2=!1)}}z=2;for(F=0;F<4;++F){v=Qn(e._matchFinder,-1,e.reps[F],C);if(v<2)continue;g=v;do{while(h<n+v)e._optimum[++h].Price=268435455;s=q+(J=zi(e._repMatchLenEncoder,v-2,H),J+gi(e,F,W,H)),_=e._optimum[n+v],s<_.Price&&(_.Price=s,_.PosPrev=n,_.BackPrev=F,_.Prev1IsChar=!1)}while(--v>=2);v=g,F==0&&(z=v+1);if(v<k){V=En(k-1-v,e._numFastBytes),m=Qn(e._matchFinder,v,e.reps[F],V);if(m>=2){X=W<7?8:11,B=t+v&e._posStateMask,i=q+(K=zi(e._repMatchLenEncoder,v-2,H),K+gi(e,F,W,H))+qs[e._isMatch[(X<<4)+B]>>>2]+ts(Ji(e._literalEncoder,t+v,Kn(e._matchFinder,v-1-1)),!0,Kn(e._matchFinder,v-1-(e.reps[F]+1)),Kn(e._matchFinder,v-1)),X=Cr(X),B=t+v+1&e._posStateMask,S=i+qs[2048-e._isMatch[(X<<4)+B]>>>2],T=S+qs[2048-e._isRep[X]>>>2],O=v+1+m;while(h<n+O)e._optimum[++h].Price=268435455;s=T+(Q=zi(e._repMatchLenEncoder,m-2,B),Q+gi(e,0,X,B)),_=e._optimum[n+O],s<_.Price&&(_.Price=s,_.PosPrev=n+v+1,_.BackPrev=0,_.Prev1IsChar=!0,_.Prev2=!0,_.PosPrev2=n,_.BackPrev2=F)}}}if(w>C){w=C;for(L=0;w>e._matchDistances[L];L+=2);e._matchDistances[L]=w,L+=2}if(w>=z){N=b+qs[e._isRep[W]>>>2];while(h<n+w)e._optimum[++h].Price=268435455;A=0;while(z>e._matchDistances[A])A+=2;for(v=z;;++v){o=e._matchDistances[A+1],s=N+mi(e,o,v,H),_=e._optimum[n+v],s<_.Price&&(_.Price=s,_.PosPrev=n,_.BackPrev=o+4,_.Prev1IsChar=!1);if(v==e._matchDistances[A]){if(v<k){V=En(k-1-v,e._numFastBytes),m=Qn(e._matchFinder,v,o,V);if(m>=2){X=W<7?7:10,B=t+v&e._posStateMask,i=s+qs[e._isMatch[(X<<4)+B]>>>2]+ts(Ji(e._literalEncoder,t+v,Kn(e._matchFinder,v-1-1)),!0,Kn(e._matchFinder,v-(o+1)-1),Kn(e._matchFinder,v-1)),X=Cr(X),B=t+v+1&e._posStateMask,S=i+qs[2048-e._isMatch[(X<<4)+B]>>>2],T=S+qs[2048-e._isRep[X]>>>2],O=v+1+m;while(h<n+O)e._optimum[++h].Price=268435455;s=T+(G=zi(e._repMatchLenEncoder,m-2,B),G+gi(e,0,X,B)),_=e._optimum[n+O],s<_.Price&&(_.Price=s,_.PosPrev=n+v+1,_.BackPrev=0,_.Prev1IsChar=!0,_.Prev2=!0,_.PosPrev2=n,_.BackPrev2=o+4)}}A+=2;if(A==L)break}}}}}function mi(e,t,n,r){var i,s;return i=Nr(n),t<128?s=e._distancesPrices[i*128+t]:s=e._posSlotPrices[(i<<6)+Mi(t)]+e._alignPrices[t&15],s+zi(e._lenEncoder,n-2,r)}function gi(e,t,n,r){var i;return t==0?(i=(As(),qs[e._isRepG0[n]>>>2]),i+=qs[2048-e._isRep0Long[(n<<4)+r]>>>2]):(i=(As(),qs[2048-e._isRepG0[n]>>>2]),t==1?i+=qs[e._isRepG1[n]>>>2]:(i+=qs[2048-e._isRepG1[n]>>>2],i+=Bs(e._isRepG2[n],t-2))),i}function yi(e,t,n){return(As(),qs[e._isRepG0[t]>>>2])+qs[e._isRep0Long[(t<<4)+n]>>>2]}function bi(e){var t;ai(e),Ps(e._rangeEncoder),js(e._isMatch),js(e._isRep0Long),js(e._isRep),js(e._isRepG0),js(e._isRepG1),js(e._isRepG2),js(e._posEncoders),Ki(e._literalEncoder);for(t=0;t<4;++t)Cs(e._posSlotEncoder[t].Models);ji(e._lenEncoder,1<<e._posStateBits),ji(e._repMatchLenEncoder,1<<e._posStateBits),Cs(e._posAlignEncoder.Models),e._longestMatchWasFound=!1,e._optimumEndIndex=0,e._optimumCurrentIndex=0,e._additionalOffset=0}function wi(e,t){t>0&&(cr(e._matchFinder,t),e._additionalOffset+=t)}function Ei(e){var t;return t=0,e._numDistancePairs=or(e._matchFinder,e._matchDistances),e._numDistancePairs>0&&(t=e._matchDistances[e._numDistancePairs-2],t==e._numFastBytes&&(t+=Qn(e._matchFinder,t-1,e._matchDistances[e._numDistancePairs-1],273-t))),++e._additionalOffset,t}function Si(e){!!e._matchFinder&&e._needReleaseMFStream&&(e._matchFinder._stream=null,e._needReleaseMFStream=!1)}function xi(e){Si(e),e._rangeEncoder.Stream=null}function Ti(e,t){var n;if(t<1||t>536870912)return!1;e._dictionarySize=t;for(n=0;t>1<<n;++n);return e._distTableSize=n*2,!0}function Ni(e,t,n,r){return n<0||n>4||t<0||t>8||r<0||r>4?!1:(e._numLiteralPosStateBits=n,e._numLiteralContextBits=t,e._posStateBits=r,e._posStateMask=(1<<e._posStateBits)-1,!0)}function Ci(e,t){var n;return t<0||t>2?!1:(n=e._matchFinderType,e._matchFinderType=t,!!e._matchFinder&&n!=e._matchFinderType&&(e._dictionarySizePrev=-1,e._matchFinder=null),!0)}function ki(e,t){return t<5||t>273?!1:(e._numFastBytes=t,!0)}function Li(e,t){var n;e.properties[0]=(e._posStateBits*5+e._numLiteralPosStateBits)*9+e._numLiteralContextBits<<24>>24;for(n=0;n<4;++n)e.properties[1+n]=e._dictionarySize>>8*n<<24>>24;Xt(t,e.properties,0,5)}function Ai(e,t){var n;if(!e._writeEndMark)return;Os(e._rangeEncoder,e._isMatch,(e._state<<4)+t,1),Os(e._rangeEncoder,e._isRep,e._state,0),e._state=e._state<7?7:10,Ri(e._lenEncoder,e._rangeEncoder,0,t),n=Nr(2),vs(e._posSlotEncoder[n],e._rangeEncoder,63),Ms(e._rangeEncoder,67108863,26),gs(e._posAlignEncoder,e._rangeEncoder,15)}function Oi(e){return e<2048?Pi[e]:e<2097152?Pi[e>>10]+20:Pi[e>>20]+40}function Mi(e){return e<131072?Pi[e>>6]+12:e<134217728?Pi[e>>16]+32:Pi[e>>26]+52}function _i(){return Uo}function Di(){}function Hi(e,t,n,r){n<8?(Os(t,e._choice,0,0),vs(e._lowCoder[r],t,n)):(n-=8,Os(t,e._choice,0,1),n<8?(Os(t,e._choice,1,0),vs(e._midCoder[r],t,n)):(Os(t,e._choice,1,1),vs(e._highCoder,t,n-8)))}function Bi(e){var t;e._choice=H(Mo,0,-1,2,1),e._lowCoder=H(Io,0,8,16,0),e._midCoder=H(Io,0,8,16,0),e._highCoder=ds(new Ss,8);for(t=0;t<16;++t)e._lowCoder[t]=ds(new Ss,3),e._midCoder[t]=ds(new Ss,3);return e}function ji(e,t){var n;js(e._choice);for(n=0;n<t;++n)Cs(e._lowCoder[n].Models),Cs(e._midCoder[n].Models);Cs(e._highCoder.Models)}function Fi(e,t,n,r,i){var s,o,u,a,f;s=(As(),qs[e._choice[0]>>>2]),o=qs[2048-e._choice[0]>>>2],u=o+qs[e._choice[1]>>>2],a=o+qs[2048-e._choice[1]>>>2],f=0;for(f=0;f<8;++f){if(f>=n)return;r[i+f]=s+ms(e._lowCoder[t],f)}for(;f<16;++f){if(f>=n)return;r[i+f]=u+ms(e._midCoder[t],f-8)}for(;f<n;++f)r[i+f]=a+ms(e._highCoder,f-8-8)}function Ii(){return Vo}function qi(){}function Ri(e,t,n,r){Hi(e,t,n,r),--e._counters[r]==0&&(Fi(e,r,e._tableSize,e._prices,r*272),e._counters[r]=e._tableSize)}function Ui(e){return Bi(e),e._prices=H(xo,0,-1,4352,1),e._counters=H(xo,0,-1,16,1),e}function zi(e,t,n){return e._prices[n*272+t]}function Wi(e,t){var n;for(n=0;n<t;++n)Fi(e,n,e._tableSize,e._prices,n*272),e._counters[n]=e._tableSize}function Xi(){return $o}function Vi(){}function $i(e,t,n){var r,i;if(e.m_Coders!=null&&e.m_NumPrevBits==n&&e.m_NumPosBits==t)return;e.m_NumPosBits=t,e.m_PosMask=(1<<t)-1,e.m_NumPrevBits=n,i=1<<e.m_NumPrevBits+e.m_NumPosBits,e.m_Coders=H(zo,0,5,i,0);for(r=0;r<i;++r)e.m_Coders[r]=es(new rs)}function Ji(e,t,n){return e.m_Coders[((t&e.m_PosMask)<<e.m_NumPrevBits)+((n&255)>>>8-e.m_NumPrevBits)]}function Ki(e){var t,n;n=1<<e.m_NumPrevBits+e.m_NumPosBits;for(t=0;t<n;++t)js(e.m_Coders[t].m_Encoders)}function Qi(){return Wo}function Gi(){}function Yi(e,t,n){var r,i,s;i=1;for(s=7;s>=0;--s)r=n>>s&1,Os(t,e.m_Encoders,i,r),i=i<<1|r}function Zi(e,t,n,r){var i,s,o,u,a,f;s=1,a=!0;for(o=7;o>=0;--o)i=r>>o&1,f=s,a&&(u=n>>o&1,f+=1+u<<8,a=u==i),Os(t,e.m_Encoders,f,i),s=s<<1|i}function es(e){return e.m_Encoders=H(Mo,0,-1,768,1),e}function ts(e,t,n,r){var i,s,o,u,a;a=0,s=1,o=7;if(t)for(;o>=0;--o){u=n>>o&1,i=r>>o&1,a+=Bs(e.m_Encoders[(1+u<<8)+s],i),s=s<<1|i;if(u!=i){--o;break}}for(;o>=0;--o)i=r>>o&1,a+=Bs(e.m_Encoders[s],i),s=s<<1|i;return a}function ns(){return Xo}function rs(){}function is(e){e.BackPrev=-1,e.Prev1IsChar=!1}function ss(e){e.BackPrev=0,e.Prev1IsChar=!1}function os(){return Jo}function us(){}function as(e,t){return e.NumBitLevels=t,e.Models=H(Mo,0,-1,1<<t,1),e}function fs(e,t){var n,r;r=1;for(n=e.NumBitLevels;n!=0;--n)r=(r<<1)+xs(t,e.Models,r);return r-(1<<e.NumBitLevels)}function ls(e,t){var n,r,i,s;i=1,s=0;for(r=0;r<e.NumBitLevels;++r)n=xs(t,e.Models,i),i<<=1,i+=n,s|=n<<r;return s}function cs(e,t,n,r){var i,s,o,u;o=1,u=0;for(s=0;s<r;++s)i=xs(n,e,t+o),o<<=1,o+=i,u|=i<<s;return u}function hs(){return Ko}function ps(){}function ds(e,t){return e.NumBitLevels=t,e.Models=H(Mo,0,-1,1<<t,1),e}function vs(e,t,n){var r,i,s;s=1;for(i=e.NumBitLevels;i!=0;)--i,r=n>>>i&1,Os(t,e.Models,s,r),s=s<<1|r}function ms(e,t){var n,r,i,s;s=0,i=1;for(r=e.NumBitLevels;r!=0;)--r,n=t>>>r&1,s+=Bs(e.Models[i],n),i=(i<<1)+n;return s}function gs(e,t,n){var r,i,s;s=1;for(i=0;i<e.NumBitLevels;++i)r=n&1,Os(t,e.Models,s,r),s=s<<1|r,n>>=1}function ys(e,t){var n,r,i,s;s=0,i=1;for(r=e.NumBitLevels;r!=0;--r)n=t&1,t>>>=1,s+=Bs(e.Models[i],n),i=i<<1|n;return s}function bs(e,t,n,r,i){var s,o,u;u=1;for(o=0;o<r;++o)s=i&1,Os(n,e,t+u,s),u=u<<1|s,i>>=1}function ws(e,t,n,r){var i,s,o,u;u=0,o=1;for(s=n;s!=0;--s)i=r&1,r>>>=1,u+=(As(),qs[((e[t+o]-i^-i)&2047)>>>2]),o=o<<1|i;return u}function Es(){return Qo}function Ss(){}function xs(e,t
    ,n){var r,i;return i=t[n],r=(e.Range>>>11)*i,(e.Code^-2147483648)<(r^-2147483648)?(e.Range=r,t[n]=i+(2048-i>>>5)<<16>>16,(e.Range&-16777216)==0&&(e.Code=e.Code<<8|Ht(e.Stream),e.Range<<=8),0):(e.Range-=r,e.Code-=r,t[n]=i-(i>>>5)<<16>>16,(e.Range&-16777216)==0&&(e.Code=e.Code<<8|Ht(e.Stream),e.Range<<=8),1)}function Ts(e,t){var n,r,i;r=0;for(n=t;n!=0;--n)e.Range>>>=1,i=e.Code-e.Range>>>31,e.Code-=e.Range&i-1,r=r<<1|1-i,(e.Range&-16777216)==0&&(e.Code=e.Code<<8|Ht(e.Stream),e.Range<<=8);return r}function Ns(e){var t;e.Code=0,e.Range=-1;for(t=0;t<5;++t)e.Code=e.Code<<8|Ht(e.Stream)}function Cs(e){var t;for(t=0;t<e.length;++t)e[t]=1024}function ks(){return Go}function Ls(){}function As(){As=Zs;var e,t,n,r;qs=H(xo,0,-1,512,1);for(t=8;t>=0;--t){r=1<<9-t-1,e=1<<9-t;for(n=r;n<e;++n)qs[n]=(t<<6)+(e-n<<6>>>9-t-1)}}function Os(e,t,n,r){var i,s;s=t[n],i=(e.Range>>>11)*s,r==0?(e.Range=i,t[n]=s+(2048-s>>>5)<<16>>16):(e.Low=G(e.Low,Z(st(i),m)),e.Range-=i,t[n]=s-(s>>>5)<<16>>16),(e.Range&-16777216)==0&&(e.Range<<=8,Hs(e))}function Ms(e,t,n){var r;for(r=n-1;r>=0;--r)e.Range>>>=1,(t>>>r&1)==1&&(e.Low=G(e.Low,st(e.Range))),(e.Range&-16777216)==0&&(e.Range<<=8,Hs(e))}function _s(e){var t;for(t=0;t<5;++t)Hs(e)}function Ds(e){return G(G(st(e._cacheSize),e._position),c)}function Ps(e){e._position=f,e.Low=f,e.Range=-1,e._cacheSize=1,e._cache=0}function Hs(e){var t,n;t=ut(vt(e.Low,32));if(t!=0||et(e.Low,v)<0){e._position=G(e._position,st(e._cacheSize)),n=e._cache;do Wt(e.Stream,n+t),n=255;while(--e._cacheSize!=0);e._cache=ut(e.Low)>>>24}++e._cacheSize,e.Low=pt(Z(e.Low,p),8)}function Bs(e,t){return As(),qs[((e-t^-t)&2047)>>>2]}function js(e){As();var t;for(t=0;t<e.length;++t)e[t]=1024}function Fs(){return Yo}function Is(){}function Rs(e){var t,n,r,i,s;t=kn(new An);for(n=0;n<e.length;++n){r=e[n]&255;if((r&128)==0){if(r==0)throw pn(new vn,"invalid UTF-8");M(t.data,String.fromCharCode(r&65535))}else if((r&224)==192){if(n+1>=e.length)throw pn(new vn,"invalid UTF-8");i=e[++n]&255;if((i&192)!=128)throw pn(new vn,"invalid UTF-8");O(t.data,String.fromCharCode((r&31)<<6&65535|i&63))}else{if((r&240)!=224)throw pn(new vn,"invalid UTF-8");if(n+2>=e.length)throw pn(new vn,"invalid UTF-8");i=e[++n]&255;if((i&192)!=128)throw pn(new vn,"invalid UTF-8");s=e[++n]&255;if((s&192)!=128)throw pn(new vn,"invalid UTF-8");M(t.data,String.fromCharCode(((r&15)<<12|(i&63)<<6|s&63)&65535))}}return _(t.data)}function Us(e){var t,n,r,i,s,o,u;n=(u=e.length,o=H(go,0,-1,u,1),Nn(e,0,u,o,0),o),i=0;for(s=0;s<e.length;++s)t=n[s],t>=1&&t<=127?++i:t==0||t>=128&&t<=2047?i+=2:i+=3;r=H(fo,0,-1,i,1),i=0;for(s=0;s<e.length;++s)t=n[s],t>=1&&t<=127?r[i++]=t<<24>>24:t==0||t>=128&&t<=2047?(r[i++]=(192|t>>6&31)<<24>>24,r[i++]=(128|t&63)<<24>>24):(r[i++]=(224|t>>12&15)<<24>>24,r[i++]=(128|t>>6&63)<<24>>24,r[i++]=(128|t&63)<<24>>24);return r}function zs(e){return e}function Ws(e){return e[1]+e[0]}function Xs(){function l(){var s;i=(new Date).getTime();while(Pn(t.c)){n=Ws(t.c.chunker.inBytesProcessed)/Ws(t.c.length_0);if((new Date).getTime()-i>200)return f?f(n):typeof u!="undefined"&&r(n,u),setTimeout(l,0),!1}f?f(1):typeof u!="undefined"&&r(1,u),s=zt(t.c.output).slice(0),a?a(s):typeof u!="undefined"&&postMessage({action:e,callback_num:u,result:s})}var t=zs(new Ks),n,i,s=arguments[0],o=arguments[1],u,a,f;typeof arguments[2]=="function"?(a=arguments[2],typeof arguments[3]=="function"&&(f=arguments[3])):u=arguments[2],t.mode=su(o),t.c=Fn(new qn,Us(s),t.mode),f?f(0):typeof u!="undefined"&&r(0,u),setTimeout(l,1)}function Vs(){function c(){var i;s=(new Date).getTime();while(Rn(e.d)){n=Ws(e.d.chunker.decoder.nowPos64)/Ws(e.d.length_0);if((new Date).getTime()-s>200)return l?l(n):typeof a!="undefined"&&r(n,a),setTimeout(c,0),!1}l?l(1):typeof a!="undefined"&&r(1,a),i=Rs(zt(e.d.output)),f?f(i):typeof a!="undefined"&&postMessage({action:t,callback_num:a,result:i})}var e=zs(new Ks),n,i,s,o,u=arguments[0],a,f,l;typeof arguments[1]=="function"?(f=arguments[1],typeof arguments[2]=="function"&&(l=arguments[2])):a=arguments[1],i=B(fo,0,-1,u),e.d=Xn(new $n,i),l?l(0):typeof a!="undefined"&&r(0,a),setTimeout(c,0)}function $s(e){Xs(e),Vs(e)}function Js(){return iu}function Ks(){}function Gs(){!!$stats&&$stats({moduleName:i,subSystem:"startup",evtGroup:"moduleStartup",millis:(new Date).getTime(),type:"onModuleLoadStart",className:"org.dellroad.lzma.demo.client.LZMADemo"})}function Ys(e,t,n){i=t,s=n;if(e)try{Gs()}catch(r){e(t)}else Gs()}function Zs(){}var e=1,t=2,n=3,i,s,o,u=[0,-0x8000000000000000],a=[4294967295,-4294967296],f=[0,0],l=[1,0],c=[4,0],h=[4096,0],p=[16777215,0],d=[16777216,0],v=[4278190080,0],m=[4294967295,0],g=[4294967295,0x7fffffff00000000];o=b.prototype={},o.getClass$=y,o.typeMarker$=Zs,o.typeId$=1,o=E.prototype=new b,o.getClass$=w,o.typeId$=3,o.detailMessage=null,o=x.prototype=new E,o.getClass$=S,o.typeId$=4,o=C.prototype=new x,o.getClass$=N,o.typeId$=5,o=A.prototype=new C,o.getClass$=L,o.typeId$=6,o=F.prototype=new b,o.getClass$=P,o.typeId$=0,o.arrayClass$=null,o.length=0,o.queryId$=0;var U,z,K=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1,10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1,11:1},{2:1},{2:1},{2:1},{4:1},{5:1},{6:1},{7:1},{8:1},{9:1}],Et,xt,Tt,Nt,Ct,kt,Lt,At,Ot;o=_t.prototype=new b,o.getClass$=Mt,o.typeId$=0,o=Ft.prototype=new _t,o.getClass$=jt,o.typeId$=0,o.buf=null,o.count=0,o.pos=0,o=qt.prototype=new b,o.getClass$=It,o.typeId$=0,o=$t.prototype=new qt,o.getClass$=Vt,o.typeId$=0,o.buf=null,o.count=0,o=Qt.prototype=new x,o.getClass$=Kt,o.typeId$=7,o=Zt.prototype=new C,o.getClass$=Yt,o.typeId$=8,o=nn.prototype=new C,o.getClass$=tn,o.typeId$=9,o=an.prototype=new b,o.getClass$=un,o.typeId$=0,o.typeName=null,o=ln.prototype=new C,o.getClass$=fn,o.typeId$=12,o=hn.prototype=new b,o.getClass$=cn,o.typeId$=0,o=vn.prototype=new C,o.getClass$=dn,o.typeId$=13,o=gn.prototype=new C,o.getClass$=mn,o.typeId$=14,o=bn.prototype=new C,o.getClass$=yn,o.typeId$=15,o=xn.prototype=new C,o.getClass$=Sn,o.typeId$=16,o=String.prototype,o.getClass$=Cn,o.typeId$=2,o=An.prototype=new b,o.getClass$=Ln,o.typeId$=0,o=Dn.prototype=new hn,o.getClass$=_n,o.typeId$=0,o.dictionarySize=0,o.fb=0,o.lc=0,o.lp=0,o.matchFinder=0,o.pb=0,o=jn.prototype=new b,o.getClass$=Bn,o.typeId$=0,o.chunker=null,o=qn.prototype=new jn,o.getClass$=In,o.typeId$=0,o.output=null,o=Wn.prototype=new b,o.getClass$=zn,o.typeId$=0,o.chunker=null,o.exception=null,o.length_0=f,o=$n.prototype=new Wn,o.getClass$=Vn,o.typeId$=0,o.output=null,o=rr.prototype=new b,o.getClass$=nr,o.typeId$=0,o._blockSize=0,o._bufferBase=null,o._bufferOffset=0,o._keepSizeAfter=0,o._keepSizeBefore=0,o._pointerToLastSafePosition=0,o._pos=0,o._posLimit=0,o._stream=null,o._streamEndWasReached=!1,o._streamPos=0,o=pr.prototype=new rr,o.getClass$=hr,o.typeId$=0,o.HASH_ARRAY=!0,o._cutValue=255,o._cyclicBufferPos=0,o._cyclicBufferSize=0,o._hash=null,o._hashMask=0,o._hashSizeSum=0,o._matchMaxLen=0,o._son=null,o.kFixHashSize=66560,o.kMinMatchCheck=4,o.kNumHashDirectBytes=0;var dr;o=Tr.prototype=new b,o.getClass$=xr,o.typeId$=0,o._buffer=null,o._pos=0,o._stream=null,o._streamPos=0,o._windowSize=0,o=Dr.prototype=new b,o.getClass$=_r,o.typeId$=0,o.alive=!1,o.decoder=null,o.encoder=null,o=zr.prototype=new b,o.getClass$=Ur,o.typeId$=0,o.m_DictionarySize=-1,o.m_DictionarySizeCheck=-1,o.m_PosStateMask=0,o.nowPos64=f,o.outSize=f,o.prevByte=0,o.rep0=0,o.rep1=0,o.rep2=0,o.rep3=0,o.state=0,o=Kr.prototype=new b,o.getClass$=Jr,o.typeId$=0,o.m_NumPosStates=0,o=ei.prototype=new b,o.getClass$=Zr,o.typeId$=0,o.m_Coders=null,o.m_NumPosBits=0,o.m_NumPrevBits=0,o.m_PosMask=0,o=si.prototype=new b,o.getClass$=ii,o.typeId$=17,o=Di.prototype=new b,o.getClass$=_i,o.typeId$=0,o._additionalOffset=0,o._alignPriceCount=0,o._dictionarySize=4194304,o._dictionarySizePrev=-1,o._distTableSize=44,o._finished=!1,o._inStream=null,o._longestMatchLength=0,o._longestMatchWasFound=!1,o._matchFinder=null,o._matchFinderType=1,o._matchPriceCount=0,o._needReleaseMFStream=!1,o._numDistancePairs=0,o._numFastBytes=32,o._numFastBytesPrev=-1,o._numLiteralContextBits=3,o._numLiteralPosStateBits=0,o._optimumCurrentIndex=0,o._optimumEndIndex=0,o._posStateBits=2,o._posStateMask=3,o._previousByte=0,o._state=0,o._writeEndMark=!1,o.backRes=0,o.nowPos64=f;var Pi;o=qi.prototype=new b,o.getClass$=Ii,o.typeId$=0,o=Vi.prototype=new qi,o.getClass$=Xi,o.typeId$=0,o._tableSize=0,o=Gi.prototype=new b,o.getClass$=Qi,o.typeId$=0,o.m_Coders=null,o.m_NumPosBits=0,o.m_NumPrevBits=0,o.m_PosMask=0,o=rs.prototype=new b,o.getClass$=ns,o.typeId$=18,o=us.prototype=new b,o.getClass$=os,o.typeId$=19,o.BackPrev=0,o.BackPrev2=0,o.Backs0=0,o.Backs1=0,o.Backs2=0,o.Backs3=0,o.PosPrev=0,o.PosPrev2=0,o.Prev1IsChar=!1,o.Prev2=!1,o.Price=0,o.State=0,o=ps.prototype=new b,o.getClass$=hs,o.typeId$=20,o.Models=null,o.NumBitLevels=0,o=Ss.prototype=new b,o.getClass$=Es,o.typeId$=21,o.Models=null,o.NumBitLevels=0,o=Ls.prototype=new b,o.getClass$=ks,o.typeId$=0,o.Code=0,o.Range=0,o.Stream=null,o=Is.prototype=new b,o.getClass$=Fs,o.typeId$=0,o.Low=f,o.Range=0,o.Stream=null,o._cache=0,o._cacheSize=0,o._position=f;var qs;o=Ks.prototype=new b,o.getClass$=Js,o.typeId$=0,o.c=null,o.d=null;var Qs,eo=sn("java.lang.","Object"),to=sn("java.lang.","Throwable"),no=sn("java.lang.","Exception"),ro=sn("java.lang.","RuntimeException"),io=sn("com.google.gwt.core.client.","JavaScriptException"),so=sn("com.google.gwt.core.client.","JavaScriptObject$"),oo=rn("","[[D"),uo=sn("java.io.","InputStream"),ao=sn("java.io.","ByteArrayInputStream"),fo=rn("","[B"),lo=sn("java.io.","OutputStream"),co=sn("java.io.","ByteArrayOutputStream"),ho=sn("java.io.","IOException"),po=sn("java.lang.","Enum"),vo=sn("java.lang.","ArithmeticException"),mo=sn("java.lang.","ArrayStoreException"),go=rn("","[C"),yo=sn("java.lang.","Class"),bo=sn("java.lang.","ClassCastException"),wo=sn("java.lang.","IllegalArgumentException"),Eo=sn("java.lang.","IllegalStateException"),So=sn("java.lang.","IndexOutOfBoundsException"),xo=rn("","[I"),To=sn("java.lang.","NullPointerException"),No=sn("java.lang.","String"),Co=sn("java.lang.","StringBuilder"),ko=sn("org.dellroad.lzma.client.SevenZip.Compression.LZ.","InWindow"),Lo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZ.","BinTree"),Ao=sn("org.dellroad.lzma.client.SevenZip.Compression.LZ.","OutWindow"),Oo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Chunker"),Mo=rn("","[S"),_o=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","BitTreeDecoder;"),Do=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder"),Po=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder$LenDecoder"),Ho=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder$LiteralDecoder$Decoder2;"),Bo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder$LiteralDecoder"),jo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder$LiteralDecoder$Decoder2"),Fo=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$Optimal;"),Io=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","BitTreeEncoder;"),qo=rn("","[J"),Ro=rn("","[Z"),Uo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder"),zo=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LiteralEncoder$Encoder2;"),Wo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LiteralEncoder"),Xo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LiteralEncoder$Encoder2"),Vo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LenEncoder"),$o=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LenPriceTableEncoder"),Jo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$Optimal"),Ko=sn("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","BitTreeDecoder"),Qo=sn("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","BitTreeEncoder"),Go=sn("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","Decoder"),Yo=sn("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","Encoder"),Zo=on("org.dellroad.lzma.client.","CompressionMode"),eu=sn("org.dellroad.lzma.client.","LZMACompressor"),tu=sn("org.dellroad.lzma.client.","LZMAByteArrayCompressor"),nu=sn("org.dellroad.lzma.client.","LZMADecompressor"),ru=sn("org.dellroad.lzma.client.","LZMAByteArrayDecompressor"),iu=sn("org.dellroad.lzma.demo.client.","LZMADemo");Ys(function(){},"lzma_demo","");var su=function(){function t(e){return!isNaN(parseFloat(e))&&isFinite(e)}var e=[{dictionarySize:16,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dictionarySize:20,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dictionarySize:19,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:20,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:21,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:22,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:23,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:24,fb:255,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:25,fb:255,matchFinder:1,lc:3,lp:0,pb:2}];return function(n){return t(n)?n<1?n=1:n>9&&(n=9):n=1,e[n-1]}}();return{compress:Xs,decompress:Vs}}();this.LZMA=LZMA,root.Mustache=Mustache,function(){function GeometryView(){}function Map(e){var t=this;this.options=_.defaults(e,{ajax:window.$?window.$.ajax:reqwest.compat,pngParams:["map_key","api_key","cache_policy","updated_at"],gridParams:["map_key","api_key","cache_policy","updated_at"],cors:this.isCORSSupported(),btoa:this.isBtoaSupported()?this._encodeBase64Native:this._encodeBase64,MAX_GET_SIZE:2033,force_cors:!1,instanciateCallback:function(){return"_cdbc_"+cartodb.uniqueCallbackName(JSON.stringify(t.toJSON()))}}),this.layerToken=null,this.urls=null,this.silent=!1,this.interactionEnabled=[],this._layerTokenQueue=[],this._timeout=-1,this._queue=[],this._waiting=!1,this.lastTimeUpdated=null,this._refreshTimer=-1}function NamedMap(e,t){var n=this;Map.call(this,t),this.options.pngParams.push("auth_token"),this.options.gridParams.push("auth_token"),this.endPoint=Map.BASE_URL+"/named/"+e.name,this.JSONPendPoint=Map.BASE_URL+"/named/"+e.name+"/jsonp",this.layers=_.clone(e.layers)||[];for(var r=0;r<this.layers.length;++r){var i=this.layers[r];i.options=i.options||{hidden:!1},i.options.layer_name=i.layer_name}this.named_map=e,this.stat_tag=e.stat_tag;var s=e.auth_token||t.auth_token;s&&this.setAuthToken(s)}function LayerDefinition(e,t){var n=this;Map.call(this,t),this.endPoint=Map.BASE_URL,this.setLayerDefinition(e,{silent:!0})}function SubLayer(e,t){this._parent=e,this._position=t,this._added=!0,this._bindInteraction(),Backbone.Model&&(this.infowindow=new Backbone.Model(this._parent.getLayer(this._position).infowindow),this.infowindow.bind("change",function(){var e=this._parent.getLayer(this._position);e.infowindow=this.infowindow.toJSON(),this._parent.setLayer(this._position,e)},this))}function CartoDBLayerCommon(){this.visible=!0}var $=root.$,jQuery=root.jQuery,L=root.L,Mustache=root.Mustache,Backbone=root.Backbone,_=root._;(function(){var e=this,t=e.cdb={};t.VERSION="3.11.23",t.DEBUG=!1,t.CARTOCSS_VERSIONS={"2.0.0":"","2.1.0":""},t.CARTOCSS_DEFAULT_VERSION="2.1.1",t.CDB_HOST={http:"api.cartocdn.com",https:"cartocdn.global.ssl.fastly.net"},e.cdb.config={},e.cdb.core={},e.cdb.geo={},e.cdb.geo.ui={},e.cdb.geo.geocoder={},e.cdb.ui={},e.cdb.ui.common={},e.cdb.vis={},e.cdb.decorators={},e.JST=e.JST||{},e.cartodb=t,t.files=["../vendor/jquery.min.js","../vendor/underscore-min.js","../vendor/json2.js","../vendor/backbone.js","../vendor/leaflet.js","../vendor/wax.cartodb.js","../vendor/GeoJSON.js","../vendor/jscrollpane.js","../vendor/mousewheel.js","../vendor/mwheelIntent.js","../vendor/spin.js","../vendor/lzma.js","core/decorator.js","core/config.js","core/log.js","core/profiler.js","core/template.js","core/model.js","core/view.js","geo/geocoder.js","geo/geometry.js","geo/map.js","geo/ui/text.js","geo/ui/annotation.js","geo/ui/image.js","geo/ui/share.js","geo/ui/zoom.js","geo/ui/zoom_info.js","geo/ui/legend.js","geo/ui/switcher.js","geo/ui/infowindow.js","geo/ui/header.js","geo/ui/search.js","geo/ui/layer_selector.js","geo/ui/mobile.js","geo/ui/tiles_loader.js","geo/ui/infobox.js","geo/ui/tooltip.js","geo/ui/fullscreen.js","geo/layer_definition.js","geo/common.js","geo/leaflet/leaflet_base.js","geo/leaflet/leaflet_plainlayer.js","geo/leaflet/leaflet_tiledlayer.js","geo/leaflet/leaflet_wmslayer.js","geo/leaflet/leaflet_cartodb_layergroup.js","geo/leaflet/leaflet_cartodb_layer.js","geo/leaflet/leaflet.js","geo/gmaps/gmaps_base.js","geo/gmaps/gmaps_baselayer.js","geo/gmaps/gmaps_plainlayer.js","geo/gmaps/gmaps_tiledlayer.js","geo/gmaps/gmaps_cartodb_layergroup.js","geo/gmaps/gmaps_cartodb_layer.js","geo/gmaps/gmaps.js","ui/common/dialog.js","ui/common/share.js","ui/common/notification.js","ui/common/table.js","ui/common/dropdown.js","vis/vis.js","vis/overlays.js","vis/layers.js","api/layers.js","api/sql.js","api/vis.js"],t.init=function(n){var r=t.Class=function(){};_.extend(r.prototype,Backbone.Events),t._loadJST(),e.cdb.god=new Backbone.Model,n&&n()},t.load=function(e,n){var r=0,i=function(){var s=document.createElement("script");s.src=e+t.files[r],document.body.appendChild(s),++r,r==t.files.length?n&&(s.onload=n):s.onload=i};i()}})(),cdb.decorators.elder=function(){var e=Backbone.Router.extend,t=function(e,t){var n=null;if(this.parent!=null){var r=this.parent;this.parent=this.parent.parent;var t=Array.prototype.slice.call(arguments,1);r.hasOwnProperty(e)?n=r[e].apply(this,t):(t.splice(0,0,e),n=r.elder.apply(this,t)),this.parent=r}return n},n=function(n,r){var i=e.call(this,n,r);return i.prototype.parent=this.prototype,i.prototype.elder=function(e){var n=Array.prototype.slice.call(arguments,1);return e?(n.splice(0,0,e),t.apply(this,n)):i.prototype.parent},i},r=function(e){e.extend=n,e.prototype.elder=function(){},e.prototype.parent=null};return r}(),cdb.decorators.elder(Backbone.Model),cdb.decorators.elder(Backbone.View),cdb.decorators.elder(Backbone.Collection),window.JSON||(window.JSON={stringify:function(e){if(typeof e=="number"||typeof e=="boolean")return e.toString();if(typeof e=="string")return'"'+e.toString()+'"';if(_.isArray(e)){var t="[";for(var n in e)n>0&&(t+=", "),t+=JSON.stringify(e[n]);return t+="]",t}var t="{";for(var r in e)e.hasOwnProperty(r)&&(t+='"'+r+'": '+JSON.stringify(e[r]));return t+="}",t},parse:function(param){return eval(param)}}),function(){Config=Backbone.Model.extend({VERSION:2,initialize:function(){this.modules=new Backbone.Collection,this.modules.bind("add",function(e){this.trigger("moduleLoaded")},this)},REPORT_ERROR_URL:"/api/v0/error",ERROR_TRACK_ENABLED:!1,getSqlApiUrl:function(){var e=this.get("sql_api_protocol")+"://"+this.get("user_name")+"."+this.get("sql_api_domain")+":"+this.get("sql_api_port");return e}}),cdb.config=new Config,cdb.config.set({cartodb_attributions:"CartoDB <a href='http://cartodb.com/attributions' target='_blank'>attribution</a>",cartodb_logo_link:"http://www.cartodb.com"})}(),function(){cdb.core.Error=Backbone.Model.extend({url:cdb.config.REPORT_ERROR_URL,initialize:function(){this.set({browser:JSON.stringify($.browser)})}}),cdb.core.ErrorList=Backbone.Collection.extend({model:cdb.core.Error,enableTrack:function(){var e=window.onerror;window.onerror=function(t,n,r){cdb.errors.create({msg:t,url:n,line:r}),e&&e.apply(window,arguments)}}}),cdb.errors=new cdb.core.ErrorList,cdb.config.ERROR_TRACK_ENABLED&&cdb.errors.enableTrack();var e=function(){};e.prototype.error=function(){},e.prototype.log=function(){};if(typeof console!="undefined"){_console=console;try{_console.log.apply(_console,["cartodb.js "+cartodb.VERSION])}catch(t){_console=new e}}else _console=new e;cdb.core.Log=Backbone.Model.extend({error:function(){_console.error.apply(_console,arguments),cdb.config.ERROR_TRACK_ENABLED&&cdb.errors.create({msg:Array.prototype.slice.call(arguments).join("")})},log:function(){_console.log.apply(_console,arguments)},info:function(){_console.log.apply(_console,arguments)},debug:function(){_console.log.apply(_console,arguments)}})}(),cdb.log=new cdb.core.Log({tag:"cdb"}),function(e){function n(){}function r(e){this.t0=null,this.name=e,this.count=0}var t=1024;n.metrics={},n._backend=null,n.get=function(e){return n.metrics[e]||{max:0,min:Number.MAX_VALUE,avg:0,total:0,count:0,last:0,history:typeof Float32Array!="undefined"?new Float32Array(t):[]}},n.backend=function(e){n._backend=e},n.new_value=function(e,r,i,s){i=i||"i";var o=n.metrics[e]=n.get(e);o.max=Math.max(o.max,r),o.min=Math.min(o.min,r),o.total+=r,++o.count,o.avg=o.total/o.count,o.history[o.count%t]=r;if(!s)n._backend&&n._backend([i,e,r]);else{var u=(new Date).getTime();u-o.last>1e3&&(n._backend&&n._backend([i,e,o.avg]),o.last=u)}},n.print_stats=function(){for(k in n.metrics){var e=n.metrics[k];console.log(" === "+k+" === "),console.log(" max: "+e.max),console.log(" min: "+e.min),console.log(" avg: "+e.avg),console.log(" count: "+e.count),console.log(" total: "+e.total)}},r.prototype={start:function(){return this.t0=+(new Date),this},_elapsed:function(){return+(new Date)-this.t0},end:function(e){this.t0!==null&&(n.new_value(this.name,this._elapsed(),"t",e),this.t0=null)},inc:function(e){e=e===undefined?1:e,n.new_value(this.name,e,"i")},dec:function(e){e=e===undefined?1:e,n.new_value(this.name,e,"d")},mark:function(){++this.count;if(this.t0===null){this.start();return}var e=this._elapsed();e>1&&(n.new_value(this.name,this.count),this.count=0,this.start())}},n.metric=function(e){return new r(e)},e.Profiler=n}(cdb.core),cdb.core.Template=Backbone.Model.extend({initialize:function(){this.bind("change",this._invalidate),this._invalidate()},url:function(){return this.get("template_url")},parse:function(e){return{template:e}},_invalidate:function(){this.compiled=null,this.get("template_url")&&this.fetch()},compile:function(){var e=this.get("type")||"underscore",t=cdb.core.Template.compilers[e];return t?t(this.get("template")):(cdb.log.error("can't get rendered for "+e),null)},render:function(e){var t=this.compiled=this.compiled||this.get("compiled")||this.compile(),n=t(e);return n},asFunction:function(){return _.bind(this.render,this)}},{compilers:{underscore:_.template,mustache:typeof Mustache=="undefined"?null:Mustache.compile},compile:function(e,t){var n=new cdb.core.Template({template:e,type:t||"underscore"});return _.bind(n.render,n)}}),cdb.core.TemplateList=Backbone.Collection.extend({model:cdb.core.Template,getTemplate:function(e){this.namespace&&(e=this.namespace+e);var t=this.find(function(t){return t.get("name")===e});return t?_.bind(t.render,t):(cdb.log.error(e+" not found"),null)}}),cdb.templates=new cdb.core.TemplateList,cdb._loadJST=function(){typeof window.JST!==undefined&&cdb.templates.reset(_(JST).map(function(e,t){return{name:t,compiled:e}}))},function(){cdb._debugCallbacks=function(e){var t=e._callbacks;for(var n in t){var r=t[n];console.log(" * ",n);var i=r.tail;while((r=r.next)!==i)console.log("    - ",r.context,r.context&&r.context.el||"none")}};var e=cdb.core.Model=Backbone.Model.extend({initialize:function(e){return _.bindAll(this,"fetch","save","retrigger"),Backbone.Model.prototype.initialize.call(this,e)},fetch:function(e){var t=this;this.trigger("loadModelStarted"),$.when(this.elder("fetch",e)).done(function(e){t.trigger("loadModelCompleted",e)}).fail(function(e){t.trigger("loadModelFailed",e)})},setIdAttribute:function(e){this.idAttribute=e},retrigger:function(e,t,n){n||(n=e);var r=this;t.bind&&t.bind(e,function(){r.trigger(n)},r)},save:function(e,t){var n=this;(!t||!t.silent)&&this.trigger("saving");var r=Backbone.Model.prototype.save.apply(this,arguments);return $.when(r).done(function(){(!t||!t.silent)&&n.trigger("saved")}).fail(function(){(!t||!t.silent)&&n.trigger("errorSaving")}),r}})}(),function(){var e=cdb.core.View=Backbone.View.extend({classLabel:"cdb.core.View",constructor:function(t){this._models=[],this._subviews={},Backbone.View.call(this,t),e.viewCount++,e.views[this.cid]=this,this._created_at=new Date,cdb.core.Profiler.new_value("total_views",e.viewCount)},add_related_model:function(e){if(!e)throw"added non valid model";this._models.push(e)},addView:function(e){this._subviews[e.cid]=e,e._parent=this},removeView:function(e){delete this._subviews[e.cid]},clearSubViews:function(){_(this._subviews).each(function(e){e.clean()}),this._subviews={}},clean:function(){var t=this;return this.trigger("clean"),this.clearSubViews(),this._parent&&(this._parent.removeView(this),this._parent=null),this.remove(),this.unbind(),this.model&&this.model.unbind&&this.model.unbind(null,null,this),_(this._models).each(function(e){e.unbind(null,null,t)}),this._models=[],e.viewCount--,delete e.views[this.cid],this},getTemplate:function(e){return this.options.template?_.template(this.options.template):cdb.templates.getTemplate(e)},show:function(){this.$el.show()},hide:function(){this.$el.hide()},retrigger:function(e,t,n){n||(n=e);var r=this;t.bind&&t.bind(e,function(){r.trigger(n)},r),this.add_related_model(t)},killEvent:function(e){e&&e.preventDefault&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation()},cleanTooltips:function(){this.$(".tipsy").remove()}},{viewCount:0,views:{},extendEvents:function(e){return function(){return _.extend(e,this.constructor.__super__.events)}},runChecker:function(){_.each(cdb.core.View.views,function(e){_.each(e,function(t,n){n!=="_parent"&&e.hasOwnProperty(n)&&t instanceof cdb.core.View&&e._subviews[t.cid]===undefined&&(console.log("========="),console.log("untracked view: "),console.log(t.el),console.log("parent"),console.log(e.el),console.log(" "))})})}})}(),cdb.geo.geocoder.YAHOO={keys:{app_id:"nLQPTdTV34FB9L3yK2dCXydWXRv3ZKzyu_BdCSrmCBAM1HgGErsCyCbBbVP2Yg--"},geocode:function(e,t){e=e.toLowerCase().replace(/Ã©/g,"e").replace(/Ã¡/g,"a").replace(/Ã­/g,"i").replace(/Ã³/g,"o").replace(/Ãº/g,"u").replace(/ /g,"+");var n="";location.protocol.indexOf("http")===-1&&(n="http:"),$.getJSON(n+"//query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('SELECT * FROM json WHERE url="http://where.yahooapis.com/geocode?q='+e+"&appid="+this.keys.app_id+'&flags=JX"')+"&format=json&callback=?",function(e){var n=[];if(e&&e.query&&e.query.results&&e.query.results.json&&e.query.results.json.ResultSet&&e.query.results.json.ResultSet.Found!="0"){var r;_.isArray(e.query.results.json.ResultSet.Results)?r=e.query.results.json.ResultSet.Results:r=[e.query.results.json.ResultSet.Results];for(var i in r){var s=r[i],o;o={lat:s.latitude,lon:s.longitude},s.boundingbox&&(o.boundingbox=s.boundingbox),n.push(o)}}t(n)})}},cdb.geo.geocoder.NOKIA={keys:{app_id:"KuYppsdXZznpffJsKT24",app_code:"A7tBPacePg9Mj_zghvKt9Q"},geocode:function(e,t){e=e.toLowerCase().replace(/Ã©/g,"e").replace(/Ã¡/g,"a").replace(/Ã­/g,"i").replace(/Ã³/g,"o").replace(/Ãº/g,"u").replace(/ /g,"+");var n="";location.protocol.indexOf("http")===-1&&(n="http:"),$.getJSON(n+"//places.nlp.nokia.com/places/v1/discover/search/?q="+encodeURIComponent(e)+"&app_id="+this.keys.app_id+"&app_code="+this.keys.app_code+"&Accept-Language=en-US&at=0,0&callback=?",function(e){var n=[];if(e&&e.results&&e.results.items&&e.results.items.length>0){var r=e.results.items;for(var i in r){var s=r[i],o;o={lat:s.position[0],lon:s.position[1]},s.bbox&&(o.boundingbox={north:s.bbox[3],south:s.bbox[1],east:s.bbox[2],west:s.bbox[0]}),n.push(o)}}t(n)})}},cdb.geo.Geometry=cdb.core.Model.extend({isPoint:function(){var e=this.get("geojson").type;return e&&e.toLowerCase()==="point"?!0:!1}}),cdb.geo.Geometries=Backbone.Collection.extend({}),_.extend(GeometryView.prototype,Backbone.Events,{edit:function(){throw new Error("to be implemented")}}),cdb.geo.MapLayer=cdb.core.Model.extend({defaults:{visible:!0,type:"Tiled"},isEqual:function(e){var t=this.toJSON(),n=e.toJSON(),r=["id","order"];_.each(r,function(e){delete t[e],delete n[e],t.options&&delete t.options[e],n.options&&delete n.options[e]});var i=t.type?t.type:t.options.type,s=n.type?n.type:n.options.type;if(i&&i===s){if(i==="Tiled"){var o=t.urlTemplate?t.urlTemplate:t.options.urlTemplate,u=n.urlTemplate?n.urlTemplate:n.options.urlTemplate;return o===u?!0:!1}if(i==="WMS"){var o=t.urlTemplate?t.urlTemplate:t.options.urlTemplate,u=n.urlTemplate?n.urlTemplate:n.options.urlTemplate,a=t.layers?t.layers:t.options.layers,f=n.layers?n.layers:n.options.layers;return o===u&&a===f?!0:!1}var l=t.base_type?t.base_type:t.options.base_type,c=n.base_type?n.base_type:n.options.base_type;return l?_.isEqual(t,n)?!0:!1:!0}return!1}}),cdb.geo.TileLayer=cdb.geo.MapLayer.extend({getTileLayer:function(){}}),cdb.geo.GMapsBaseLayer=cdb.geo.MapLayer.extend({OPTIONS:["roadmap","satellite","terrain","custom"],defaults:{type:"GMapsBase",base_type:"gray_roadmap",style:null}}),cdb.geo.WMSLayer=cdb.geo.MapLayer.extend({defaults:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1}}),cdb.geo.PlainLayer=cdb.geo.MapLayer.extend({defaults:{type:"Plain",base_type:"plain",className:"plain",color:"#FFFFFF",image:""}}),cdb.geo.TorqueLayer=cdb.geo.MapLayer.extend({defaults:{type:"torque",visible:!0}}),cdb.geo.CartoDBLayer=cdb.geo.MapLayer.extend({defaults:{attribution:"CartoDB",type:"CartoDB",active:!0,query:null,opacity:.99,interactivity:null,interaction:!0,debug:!1,tiler_domain:"cartodb.com",tiler_port:"80",tiler_protocol:"http",sql_api_domain:"cartodb.com",sql_api_port:"80",sql_api_protocol:"http",extra_params:{},cdn_url:null,maxZoom:28},activate:function(){this.set({active:!0,opacity:.99,visible:!0})},deactivate:function(){this.set({active:!1,opacity:0,visible:!1})},invalidate:function(){var e=this.get("extra_params")||e;e.cache_buster=(new Date).getTime(),this.set("extra_params",e),this.trigger("change",this)},toggle:function(){this.get("active")?this.deactivate():this.activate()}}),cdb.geo.CartoDBGroupLayer=cdb.geo.MapLayer.extend({defaults:{visible:!0,type:"layergroup"}}),cdb.geo.CartoDBNamedMapLayer=cdb.geo.MapLayer.extend({defaults:{visible:!0,type:"namedmap"}}),cdb.geo.Layers=Backbone.Collection.extend({model:cdb.geo.MapLayer,initialize:function(){this.comparator=function(e){return parseInt(e.get("order"),10)},this.bind("add",this._assignIndexes)},_assignIndexes:function(e,t,n){function i(e){var t=e.get("type");return r[t]||0}var r={torque:100},s=0;n&&n.at!==undefined&&(s=n.at),s===0&&(this.models[0].set({order:0}),++s);for(var o=s;o<this.size();++o){var u=this.models[o-1],a=u.get("order")-i(u);this.models[o].set({order:i(this.models[o])+a+1})}}}),cdb.geo.Map=cdb.core.Model.extend({defaults:{center:[0,0],zoom:3,minZoom:0,maxZoom:40,scrollwheel:!0,provider:"leaflet"},initialize:function(){this.layers=new cdb.geo.Layers,this.layers.bind("reset",function(){this.layers.size()>=1&&this._adjustZoomtoLayer(this.layers.models[0])},this),this.geometries=new cdb.geo.Geometries},setView:function(e,t){this.set({center:e,zoom:t},{silent:!0}),this.trigger("set_view")},setZoom:function(e){this.set({zoom:e})},enableScrollWheel:function(){this.set({scrollwheel:!0})},disableScrollWheel:function(){this.set({scrollwheel:!1})},getZoom:function(){return this.get("zoom")},setCenter:function(e){this.set({center:e})},setOptions:function(e){if(typeof e!="object"||e.length){if(this.options.debug)throw e+" options has to be an object";return}_.defaults(this.options,e)},getViewBounds:function(){return this.has("view_bounds_sw")&&this.has("view_bounds_ne")?[this.get("view_bounds_sw"),this.get("view_bounds_ne")]:null},getLayerAt:function(e){return this.layers.at(e)},getLayerByCid:function(e){return this.layers.getByCid(e)},_adjustZoomtoLayer:function(e){var t=e.get("maxZoom"),n=e.get("minZoom");_.isNumber(t)&&(this.get("zoom")>t?this.set({zoom:t,maxZoom:t}):this.set("maxZoom",t)),_.isNumber(n)&&(this.get("zoom")<n?this.set({minZoom:n,zoom:n}):this.set("minZoom",n))},addLayer:function(e,t){return this.layers.size()==0&&this._adjustZoomtoLayer(e),this.layers.add(e,t),this.trigger("layerAdded"),this.layers.length===1&&this.trigger("firstLayerAdded"),e.cid},removeLayer:function(e){this.layers.remove(e)},removeLayerByCid:function(e){var t=this.layers.getByCid(e);t?this.removeLayer(t):cdb.log.error("There's no layer with cid = "+e+".")},removeLayerAt:function(e){var t=this.layers.at(e);t?this.removeLayer(t):cdb.log.error("There's no layer in that position.")},clearLayers:function(){while(this.layers.length>0)this.removeLayer(this.layers.at(0))},getBaseLayer:function(){return this.layers.at(0)},isBaseLayerAdded:function(e){var t=this.getBaseLayer();return t&&e.isEqual(t)},getLayerTemplate:function(){var e=this.getBaseLayer();if(e&&e.get("options"))return e.get("options").urlTemplate},updateAttribution:function(e,t){var n=this.get("attribution")||[];e&&(n=_.without(n,e)),t&&(_.contains(n,t)||n.push(t)),this.set({attribution:n})},addGeometry:function(e){this.geometries.add(e)},removeGeometry:function(e){this.geometries.remove(e)},setBounds:function(e){this.attributes.view_bounds_sw=[e[0][0],e[0][1]],this.attributes.view_bounds_ne=[
    e[1][0],e[1][1]],this.trigger("change:view_bounds_ne",this)},fitBounds:function(e,t){var n=this.getBoundsZoom(e,t);if(n===null)return;var r=cdb.geo.Map.latlngToMercator(e[0],n),i=cdb.geo.Map.latlngToMercator(e[1],n),s=cdb.geo.Map.mercatorToLatLng({x:(r[0]+i[0])*.5,y:(r[1]+i[1])*.5},n);this.set({center:s,zoom:n})},getBoundsZoom:function(e,t){if(t.x===0||t.y===0)return null;var n=[t.x,t.y],r=this.get("minZoom")||0,i=this.get("maxZoom")||24,s=e[1],o=e[0],u=[],a,f,l=!0;do r++,a=cdb.geo.Map.latlngToMercator(s,r),f=cdb.geo.Map.latlngToMercator(o,r),u[0]=Math.abs(a[0]-f[0]),u[1]=Math.abs(f[1]-a[1]),l=u[0]<=n[0]||u[1]<=n[1];while(l&&r<=i);return l?null:r-1}},{latlngToMercator:function(e,t){var n=new L.LatLng(e[0],e[1]),r=L.CRS.EPSG3857.latLngToPoint(n,t);return[r.x,r.y]},mercatorToLatLng:function(e,t){var n=L.CRS.EPSG3857.pointToLatLng(e,t);return[n.lat,n.lng]}}),cdb.geo.MapView=cdb.core.View.extend({initialize:function(){if(this.options.map===undefined)throw"you should specify a map model";this.map=this.options.map,this.add_related_model(this.map),this.add_related_model(this.map.layers),this.autoSaveBounds=!1,this.layers={},this.geometries={},this.bind("clean",this._removeLayers,this)},render:function(){return this},addInfowindow:function(e){this.addOverlay(e)},addOverlay:function(e){e&&(this.$el.append(e.render().el),this.addView(e))},getInfoWindows:function(){var e=[];for(var t in this._subviews)this._subviews[t]instanceof cdb.geo.ui.Infowindow&&e.push(this._subviews[t]);return e},showBounds:function(e){throw"to be implemented"},_setModelProperty:function(e){this._unbindModel(),this.map.set(e);if(e.center!==undefined||e.zoom!==undefined){var t=this.getBounds();this.map.set({view_bounds_sw:t[0],view_bounds_ne:t[1]}),this.autoSaveBounds&&this._saveLocation()}this._bindModel()},_bindModel:function(){this._unbindModel(),this.map.bind("change:view_bounds_sw",this._changeBounds,this),this.map.bind("change:view_bounds_ne",this._changeBounds,this),this.map.bind("change:zoom",this._setZoom,this),this.map.bind("change:scrollwheel",this._setScrollWheel,this),this.map.bind("change:center",this._setCenter,this),this.map.bind("change:attribution",this._setAttribution,this)},_unbindModel:function(){this.map.unbind("change:view_bounds_sw",null,this),this.map.unbind("change:view_bounds_ne",null,this),this.map.unbind("change:zoom",null,this),this.map.unbind("change:scrollwheel",null,this),this.map.unbind("change:center",null,this),this.map.unbind("change:attribution",null,this)},_changeBounds:function(){var e=this.map.getViewBounds();e&&this.showBounds(e)},showBounds:function(e){this.map.fitBounds(e,this.getSize())},_setAttribution:function(e,t){this.setAttribution(e)},_addLayers:function(){var e=this;this._removeLayers(),this.map.layers.each(function(t){e._addLayer(t)})},_removeLayers:function(e){for(var t in this.layers){var n=this.layers[t];n.remove(),delete this.layers[t]}},_removeLayer:function(e){var t=this.layers[e.cid];t&&(t.remove(),delete this.layers[e.cid])},_swicthLayerView:function(e,t,n){this._removeLayer(e),this._addLayer(e,this.map.layers,n)},_removeGeometry:function(e){var t=this.geometries[e.cid];delete this.layers[layer.cid]},getLayerByCid:function(e){var t=this.layers[e];return t||cdb.log.debug("layer with cid "+e+" can't be get"),t},_setZoom:function(e,t){throw"to be implemented"},_setCenter:function(e,t){throw"to be implemented"},_addLayer:function(e,t,n){throw"to be implemented"},_addGeomToMap:function(e){throw"to be implemented"},_removeGeomFromMap:function(e){throw"to be implemented"},setAutoSaveBounds:function(){var e=this;this.autoSaveBounds=!0},_saveLocation:_.debounce(function(){this.map.save(null,{silent:!0})},1e3),_addGeometry:function(e){var t=this._addGeomToMap(e);this.geometries[e.cid]=t},_removeGeometry:function(e){var t=this.geometries[e.cid];this._removeGeomFromMap(t),delete this.geometries[e.cid]}},{_getClass:function(e){var t=cdb.geo.LeafletMapView;return e==="googlemaps"&&(typeof google!="undefined"&&typeof google.maps!="undefined"?t=cdb.geo.GoogleMapsMapView:cdb.log.error("you must include google maps library _before_ include cdb")),t},create:function(e,t){var n=cdb.geo.MapView._getClass(t.get("provider"));return new n({el:e,map:t})}}),cdb.geo.ui.Text=cdb.core.View.extend({className:"cartodb-overlay overlay-text",events:{click:"stopPropagation"},default_options:{},stopPropagation:function(e){e.stopPropagation()},initialize:function(){_.defaults(this.options,this.default_options),this.template=this.options.template;var e=this;$(window).on("map_resized",function(){e._place()}),$(window).on("resize",function(){e._place()})},_applyStyle:function(){var e=this.model.get("style"),t=e["box-color"],n=e["box-opacity"],r=e["box-width"],i=e["font-family-name"];this.$text=this.$el.find(".text"),this.$text.css(e),this.$text.css("font-size",e["font-size"]+"px"),this.$el.css("z-index",e["z-index"]);var s="";i=="Droid Sans"?s="droid":i=="Vollkorn"?s="vollkorn":i=="Open Sans"?s="open_sans":i=="Roboto"&&(s="roboto");var o="rgba("+parseInt(t.slice(-6,-4),16)+","+parseInt(t.slice(-4,-2),16)+","+parseInt(t.slice(-2),16)+", "+n+" )";this.$el.removeClass("droid").removeClass("vollkorn").removeClass("roboto").removeClass("open_sans"),this.$el.addClass(s),this.$el.css({backgroundColor:o,maxWidth:r})},_place:function(e){var t=e||this.model.get("extra"),n=this.model.get("y"),r=this.model.get("x"),i=t.bottom-this.$el.height(),s=t.right-this.$el.width(),o=t.top_percentage,u=t.left_percentage,a="auto",f="auto",l=0,c=0,h=t.width,p=t.height,d=t.portrait_dominant_side,v=t.landscape_dominant_side;d==="bottom"&&i<=250?(n="auto",f=i):o>45&&o<55&&(n="50%",l=-p/2),v==="right"&&s<=250?(r="auto",a=s):u>45&&u<55&&(r="50%",c=-h/2),this.$el.css({marginLeft:c,marginTop:l,top:n,left:r,right:a,bottom:f})},show:function(e){this.$el.fadeIn(150,function(){e&&e()})},hide:function(e){this.$el.fadeOut(150,function(){e&&e()})},render:function(){this.$el.html(this.template(_.extend(this.model.attributes,{text:this.model.attributes.extra.rendered_text})));var e=this;return setTimeout(function(){e._applyStyle(),e._place(),e.show()},900),this}}),cdb.geo.ui.Annotation=cdb.core.View.extend({className:"cartodb-overlay overlay-annotation",defaults:{minZoom:0,maxZoom:40,style:{textAlign:"left",zIndex:5,color:"#ffffff",fontSize:"13",fontFamilyName:"Helvetica",boxColor:"#333333",boxOpacity:.7,boxPadding:10,lineWidth:50,lineColor:"#333333"}},template:cdb.core.Template.compile('<div class="content">    <div class="text widget_text">{{{ text }}}</div>    <div class="stick"><div class="ball"></div></div>    </div>',"mustache"),events:{click:"stopPropagation"},stopPropagation:function(e){e.stopPropagation()},initialize:function(){this.template=this.options.template||this.template,this.mapView=this.options.mapView,this.mobileEnabled=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this._cleanStyleProperties(this.options.style),_.defaults(this.options.style,this.defaults.style),this._setupModels(),this._bindMap()},_setupModels:function(){this.model=new cdb.core.Model({display:!0,hidden:!1,text:this.options.text,latlng:this.options.latlng,minZoom:this.options.minZoom||this.defaults.minZoom,maxZoom:this.options.maxZoom||this.defaults.maxZoom}),this.model.on("change:display",this._onChangeDisplay,this),this.model.on("change:text",this._onChangeText,this),this.model.on("change:latlng",this._place,this),this.model.on("change:minZoom",this._applyZoomLevelStyle,this),this.model.on("change:maxZoom",this._applyZoomLevelStyle,this),this.style=new cdb.core.Model(this.options.style),this.style.on("change",this._applyStyle,this),this.add_related_model(this.style)},_bindMap:function(){this.mapView.map.bind("change",this._place,this),this.mapView.map.bind("change:zoom",this._applyZoomLevelStyle,this),this.mapView.bind("zoomstart",this.hide,this),this.mapView.bind("zoomend",this.show,this)},_unbindMap:function(){this.mapView.map.unbind("change",this._place,this),this.mapView.map.unbind("change:zoom",this._applyZoomLevelStyle,this),this.mapView.unbind("zoomstart",this.hide,this),this.mapView.unbind("zoomend",this.show,this)},_onChangeDisplay:function(){this.model.get("display")?this.show():this.hide()},_onChangeText:function(e){this.$el.find(".text").html(this.model.get("text"))},_getStandardPropertyName:function(e){if(!e)return;var t=e.split("-");if(t.length===1)return e;if(t.length===2)return t[0]+t[1].slice(0,1).toUpperCase()+t[1].slice(1)},_cleanStyleProperties:function(e){var t={};_.each(e,function(e,n){t[this._getStandardPropertyName(n)]=e},this),this.options.style=t},_belongsToCanvas:function(){var e=this.options.device==="mobile"?!0:!1;return e===this.mobileEnabled},show:function(e){if(this.model.get("hidden")||!this._belongsToCanvas())return;var t=this;this.$el.css({opacity:0,display:"inline-table"}),this.$el.stop().animate({opacity:1},{duration:150,complete:function(){e&&e()}})},hide:function(e){this.$el.stop().fadeOut(150,function(){e&&e()})},_place:function(){var e=this.model.get("latlng"),t=this.style.get("lineWidth"),n=this.style.get("textAlign"),r=this.mapView.latLonToPixel(e);if(r){var i=r.y-this.$el.height()/2,s=r.x+t;n==="right"&&(s=r.x-this.$el.width()-t-this.$el.find(".ball").width()),this.$el.css({top:i,left:s})}},setMinZoom:function(e){this.model.set("minZoom",e)},setMaxZoom:function(e){this.model.set("maxZoom",e)},setPosition:function(e){this.model.set("latlng",e)},setText:function(e){this.model.set("text",e)},setStyle:function(e,t){var n=this._getStandardPropertyName(e);n&&this.style.set(n,t)},_applyStyle:function(){var e=this.style.get("color"),t=this.style.get("textAlign"),n=this.style.get("boxColor"),r=this.style.get("boxOpacity"),i=this.style.get("boxPadding"),s=this.style.get("lineWidth"),o=this.style.get("lineColor"),u=this.style.get("fontFamilyName");this.$text=this.$el.find(".text"),this.$text.css({color:e,textAlign:t}),this.$el.find(".content").css("padding",i),this.$text.css("font-size",this.style.get("fontSize")+"px"),this.$el.css("z-index",this.style.get("zIndex")),this.$el.find(".stick").css({width:s,left:-s});var a="";u=="Droid Sans"?a="droid":u=="Vollkorn"?a="vollkorn":u=="Open Sans"?a="open_sans":u=="Roboto"&&(a="roboto"),this.$el.removeClass("droid").removeClass("vollkorn").removeClass("roboto").removeClass("open_sans"),this.$el.addClass(a),t==="right"?(this.$el.addClass("align-right"),this.$el.find(".stick").css({left:"auto",right:-s})):this.$el.removeClass("align-right"),this._place(),this._applyZoomLevelStyle()},_getRGBA:function(e,t){return"rgba("+parseInt(e.slice(-6,-4),16)+","+parseInt(e.slice(-4,-2),16)+","+parseInt(e.slice(-2),16)+","+t+" )"},_applyZoomLevelStyle:function(){var e=this.style.get("boxColor"),t=this.style.get("boxOpacity"),n=this.style.get("lineColor"),r=this.model.get("minZoom"),i=this.model.get("maxZoom"),s=this.mapView.map.get("zoom");if(s>=r&&s<=i){var o=this._getRGBA(n,1),u=this._getRGBA(e,t);this.$el.find(".text").animate({opacity:1},150),this.$el.css("background-color",u),this.$el.find(".stick").css("background-color",o),this.$el.find(".ball").css("background-color",o),this.model.set("hidden",!1),this.model.set("display",!0)}else this.model.set("hidden",!0),this.model.set("display",!1)},clean:function(){this._unbindMap(),cdb.core.View.prototype.clean.call(this)},render:function(){this.$el.html(this.template(this.model.attributes));var e=this;return setTimeout(function(){e._applyStyle(),e._applyZoomLevelStyle(),e.show()},500),this}}),cdb.geo.ui.Image=cdb.geo.ui.Text.extend({className:"cartodb-overlay image-overlay",events:{click:"stopPropagation"},default_options:{},stopPropagation:function(e){e.stopPropagation()},initialize:function(){_.defaults(this.options,this.default_options),this.template=this.options.template;var e=this;$(window).on("map_resized",function(){e._place()}),$(window).on("resize",function(){e._place()})},_applyStyle:function(){var e=this.model.get("style"),t=e["box-color"],n=e["box-opacity"],r=e["box-width"];this.$text.css(e),this.$el.css("z-index",e["z-index"]);var i="rgba("+parseInt(t.slice(-6,-4),16)+","+parseInt(t.slice(-4,-2),16)+","+parseInt(t.slice(-2),16)+", "+n+" )";this.$el.css({backgroundColor:i}),this.$el.find("img").css({width:r})},render:function(){var e=this.model.get("extra").rendered_text;this.model.get("extra").has_default_image&&(e='<img src="'+this.model.get("extra").public_default_image_url+'" />'),this.$el.html(this.template(_.extend(this.model.attributes,{content:e}))),this.$text=this.$el.find(".text");var t=this;return setTimeout(function(){t._applyStyle(),t._place(),t.show()},900),this}}),cdb.geo.ui.Share=cdb.core.View.extend({className:"cartodb-share",events:{"click a":"_onClick"},default_options:{},initialize:function(){_.bindAll(this,"_onClick"),_.defaults(this.options,this.default_options),this.template=this.options.template},_applyStyle:function(){},_onClick:function(e){e.preventDefault(),e.stopPropagation(),this.dialog.show()},createDialog:function(){var e=this.options;e.template="",location.href?e.share_url=encodeURIComponent(location.href):e.share_url=e.url;var t=cdb.core.Template.compile(e.template||'      <div class="mamufas">      <div class="block modal {{modal_type}}">      <a href="#close" class="close">x</a>      <div class="head">      <h3>Share this map</h3>      </div>      <div class="content">      <div class="buttons">      <h4>Social</h4>      <ul>      <li><a class="facebook" target="_blank" href="{{ facebook_url }}">Share on Facebook</a></li>      <li><a class="twitter" href="{{ twitter_url }}" target="_blank">Share on Twitter</a></li>      <li><a class="link" href="{{ public_map_url }}" target="_blank">Link to this map</a></li>      </ul>      </div><div class="embed_code">      <h4>Embed this map</h4>      <textarea id="" name="" cols="30" rows="10">{{ code }}</textarea>      </div>      </div>      </div>      </div>      ',e.templateType||"mustache"),n=location.href;n=n.replace("public_map","embed_map");var r=n.replace("embed_map","public_map"),i="<iframe width='100%' height='520' frameborder='0' src='"+n+"' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>";this.dialog=new cdb.ui.common.ShareDialog({title:e.map.get("title"),description:e.map.get("description"),model:this.options.vis.map,code:i,url:e.url,public_map_url:r,share_url:e.share_url,template:t,target:$(".cartodb-share a"),size:$(document).width()>400?"":"small",width:$(document).width()>400?430:216}),$(".cartodb-map-wrapper").append(this.dialog.render().$el)},render:function(){return this.$el.html(this.template(_.extend(this.model.attributes))),this}}),cdb.geo.ui.Zoom=cdb.core.View.extend({className:"cartodb-zoom",events:{"click .zoom_in":"zoom_in","click .zoom_out":"zoom_out"},default_options:{timeout:0,msg:""},initialize:function(){this.map=this.model,_.defaults(this.options,this.default_options),this.template=this.options.template?this.options.template:cdb.templates.getTemplate("geo/zoom"),this.map.bind("change:zoom change:minZoom change:maxZoom",this._checkZoom,this)},render:function(){return this.$el.html(this.template(this.options)),this._checkZoom(),this},_checkZoom:function(){var e=this.map.get("zoom");this.$(".zoom_in")[e<this.map.get("maxZoom")?"removeClass":"addClass"]("disabled"),this.$(".zoom_out")[e>this.map.get("minZoom")?"removeClass":"addClass"]("disabled")},zoom_in:function(e){this.map.get("maxZoom")>this.map.getZoom()&&this.map.setZoom(this.map.getZoom()+1),e.preventDefault(),e.stopPropagation()},zoom_out:function(e){this.map.get("minZoom")<this.map.getZoom()&&this.map.setZoom(this.map.getZoom()-1),e.preventDefault(),e.stopPropagation()}}),cdb.geo.ui.ZoomInfo=cdb.core.View.extend({className:"cartodb-zoom-info",initialize:function(){this.model.bind("change:zoom",this.render,this)},render:function(){return this.$el.html(this.model.get("zoom")),this}}),cdb.geo.ui.LegendItemModel=cdb.core.Model.extend({defaults:{name:"Untitled",visible:!0,value:""}}),cdb.geo.ui.LegendItems=Backbone.Collection.extend({model:cdb.geo.ui.LegendItemModel}),cdb.geo.ui.LegendItem=cdb.core.View.extend({tagName:"li",initialize:function(){_.bindAll(this,"render"),this.template=this.options.template?_.template(this.options.template):cdb.templates.getTemplate("geo/legend")},render:function(){var e;this.model.get("type")=="image"&&this.model.get("value")?e="url( "+this.model.get("value")+")":e=this.model.get("value");var t=_.extend(this.model.toJSON(),{value:e});return this.$el.html(this.template(t)),this.$el}}),cdb.geo.ui.Legend=cdb.core.View.extend({className:"cartodb-legend",events:{dragstart:"_stopPropagation",mousedown:"_stopPropagation",touchstart:"_stopPropagation",MSPointerDown:"_stopPropagation",dblclick:"_stopPropagation",mousewheel:"_stopPropagation",DOMMouseScroll:"_stopPropagation",dbclick:"_stopPropagation",click:"_stopPropagation"},initialize:function(){_.bindAll(this,"render","show","hide"),_.defaults(this.options,this.default_options),this.map=this.options.map,this._setupModel(),this._setupItems(),this._updateLegendType()},_stopPropagation:function(e){e.stopPropagation()},_setupModel:function(){this.model||(this.model=new cdb.geo.ui.LegendModel({type:this.options.type||cdb.geo.ui.LegendModel.prototype.defaults.type,title:this.options.title||cdb.geo.ui.LegendModel.prototype.defaults.title,show_title:this.options.show_title||cdb.geo.ui.LegendModel.prototype.defaults.show_title,template:this.options.template||cdb.geo.ui.LegendModel.prototype.defaults.template})),this.add_related_model(this.model),this.model.bind("change",this._updateLegendType,this)},_updateLegendType:function(){var e=this.model.get("type");this.legend_name=this._capitalize(e)+"Legend";if(e=="none"||e==null)this.legend_name=null,this.model.set({type:"none"},{silent:!0});else if(!cdb.geo.ui[this.legend_name]){this.legend_name=null,this.model.set({type:this.model.previous("type")},{silent:!0});return}this._refresh()},_refresh:function(){var e=this;this.view&&this.view.clean();var t=this.model.get("type"),n=this.model.get("title"),r=this.model.get("show_title"),i=this.model.get("template");t&&this.legend_name?(this.view=new cdb.geo.ui[this.legend_name]({model:this.model}),this.$el.removeClass(),this.$el.addClass(this.className+" "+this.model.get("type")),this.show()):(this.hide(),this.$el.removeClass(),this.$el.addClass(this.className+" none")),this.render()},_setupItems:function(){var e=this;this.items=this.model.items,this.options.data&&this.items.reset(this.options.data),this.items.bind("add remove change:value change:name",this.render,this)},show:function(e){var t=this.model.get("type");t&&t!="none"&&this.$el.show()},hide:function(e){this.model.get("type")&&this.$el.hide()},_capitalize:function(e){if(e&&_.isString(e))return e.charAt(0).toUpperCase()+e.slice(1)},render:function(){return this.view&&(this.model.get("template")?(this.$el.html(this.view.render().$el.html()),this.$el.removeClass(this.model.get("type")),this.$el.addClass("wrapper")):this.$el.html(this.view.render().$el.html())),this}}),cdb.geo.ui.DebugLegend=cdb.core.View.extend({}),cdb.geo.ui.BaseLegend=cdb.core.View.extend({_bindModel:function(){this.model.bind("change:template change:title change:show_title",this.render,this)},addTo:function(e){$(e).html(this.render().$el)},setTitle:function(e){this.model.set("title",e)},showTitle:function(){this.model.set("show_title",!0)},hideTitle:function(){this.model.set("show_title",!1)}}),cdb.geo.ui.NoneLegend=cdb.geo.ui.BaseLegend.extend({}),cdb.geo.ui.Legend.None=cdb.core.View.extend({}),cdb.geo.ui.ChoroplethLegend=cdb.geo.ui.BaseLegend.extend({className:"choropleth-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul><li class="min">		<%= leftLabel %></li><li class="max">		<%= rightLabel %></li><li class="graph count_<%= buckets_count %>">	<div class="colors"><%= colors %>\n	</div></li></ul>'),initialize:function(){this.items=this.model.items},_generateColorList:function(){var e="";if(this.model.get("colors"))return _.map(this.model.get("colors"),function(e){return'\n	<div class="quartile" style="background-color:'+e+'"></div>'}).join("");for(var t=2;t<this.items.length;t++){var n=this.items.at(t).get("value");e+='\n	<div class="quartile" style="background-color:'+n+'"></div>'}return e},setLeftLabel:function(e){this.model.set("leftLabel",e)},setRightLabel:function(e){this.model.set("rightLabel",e)},setColors:function(e){this.model.set("colors",e)},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else if(this.items.length>=2){this.leftLabel=this.items.at(0),this.rightLabel=this.items.at(1);var t=this.model.get("leftLabel")||this.leftLabel.get("value"),n=this.model.get("rightLabel")||this.rightLabel.get("value"),r=this._generateColorList(),i=_.extend(this.model.toJSON(),{leftLabel:t,rightLabel:n,colors:r,buckets_count:r.length});this.$el.html(this.template(i))}return this}}),cdb.geo.ui.DensityLegend=cdb.geo.ui.BaseLegend.extend({className:"density-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul><li class="min">	<%= leftLabel %></li><li class="max">	<%= rightLabel %></li><li class="graph count_<%= buckets_count %>">	<div class="colors"><%= colors %>\n	</div></li></ul>'),initialize:function(){this.items=this.model.items},setLeftLabel:function(e){this.model.set("leftLabel",e)},setRightLabel:function(e){this.model.set("rightLabel",e)},setColors:function(e){this.model.set("colors",e)},_generateColorList:function(){var e="";if(this.model.get("colors"))return _.map(this.model.get("colors"),function(e){return'\n		<div class="quartile" style="background-color:'+e+'"></div>'}).join("");for(var t=2;t<this.items.length;t++){var n=this.items.at(t).get("value");e+='\n		<div class="quartile" style="background-color:'+n+'"></div>'}return e},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else if(this.items.length>=2){this.leftLabel=this.items.at(0),this.rightLabel=this.items.at(1);var t=this.model.get("leftLabel")||this.leftLabel.get("value"),n=this.model.get("rightLabel")||this.rightLabel.get("value"),r=this._generateColorList(),i=_.extend(this.model.toJSON(),{leftLabel:t,rightLabel:n,colors:r,buckets_count:r.length});this.$el.html(this.template(i))}return this}}),cdb.geo.ui.Legend.Density=cdb.geo.ui.DensityLegend.extend({type:"density",className:"cartodb-legend density",initialize:function(){this.items=this.options.items,this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1,leftLabel:this.options.left||this.options.leftLabel,rightLabel:this.options.right||this.options.rightLabel,colors:this.options.colors,buckets_count:this.options.colors?this.options.colors.length:0,items:this.options.items}),this._bindModel()},_bindModel:function(){this.model.bind("change:colors change:template change:title change:show_title change:colors change:leftLabel change:rightLabel",this.render,this)},_generateColorList:function(){return _.map(this.model.get("colors"),function(e){return'<div class="quartile" style="background-color:'+e+'"></div>'}).join("")},render:function(){var e=_.extend(this.model.toJSON(),{colors:this._generateColorList()});return this.$el.html(this.template(e)),this}}),cdb.geo.ui.IntensityLegend=cdb.geo.ui.BaseLegend.extend({className:"intensity-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul><li class="min">	<%= leftLabel %></li><li class="max">	<%= rightLabel %></li><li class="graph"></li></ul>'),initialize:function(){this.items=this.model.items},_bindModel:function(){this.model.bind("change:template",this.render,this)},setColor:function(e){this.model.set("color",e)},setLeftLabel:function(e){this.model.set("leftLabel",e)},setRightLabel:function(e){this.model.set("rightLabel",e)},_hexToRGB:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},_rgbToHex:function(e,t,n){function r(e){var t=e.toString(16);return t.length==1?"0"+t:t}return"#"+r(e)+r(t)+r(n)},_calculateMultiply:function(e,t){var n=this._hexToRGB(e);if(n){var r=n.r,i=n.g,s=n.b;for(var o=0;o<=t;o++)r=Math.round(r*n.r/255),i=Math.round(i*n.g/255),s=Math.round(s*n.b/255);return this._rgbToHex(r,i,s)}return"#ffffff"},_renderGraph:function(e){var t="";t+="background: <%= color %>;",t+="background: -moz-linear-gradient(left, <%= color %> 0%, <%= right %> 100%);",t+="background: -webkit-gradient(linear, left top, right top, color-stop(0%,<%= color %>), color-stop(100%,<%= right %>));",t+="background: -webkit-linear-gradient(left, <%= color %> 0%,<%= right %> 100%);",t+="background: -o-linear-gradient(left, <%= color %> 0%,<%= right %> 100%);",t+="background: -ms-linear-gradient(left, <%= color %> 0%,<%= right %> 100%)",t+="background: linear-gradient(to right, <%= color %> 0%,<%= right %> 100%);",t+="filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='<%= color %>', endColorstr='<%= right %>',GradientType=1 );",t+="background-image: -ms-linear-gradient(left, <%= color %> 0%,<%= right %> 100%)";var n=_.template(t),r=this._calculateMultiply(e,4);this.$el.find(".graph").attr("style",n({color:e,right:r}))},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else if(this.items.length>=3){this.leftLabel=this.items.at(0),this.rightLabel=this.items.at(1);var t=this.model.get("color")||this.items.at(2).get("value"),n=this.model.get("leftLabel")||this.leftLabel.get("value"),r=this.model.get("rightLabel")||this.rightLabel.get("value"),i=_.extend(this.model.toJSON(),{color:t,leftLabel:n,rightLabel:r});this.$el.html(this.template(i)),this._renderGraph(t)}return this}}),cdb.geo.ui.CategoryLegend=cdb.geo.ui.BaseLegend.extend({className:"category-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul></ul>'),initialize:function(){this.items=this.model.items},_bindModel:function(){this.model.bind("change:title change:show_title change:template",this.render,this)},_renderItems:function(){this.items.each(this._renderItem,this)},_renderItem:function(e){view=new cdb.geo.ui.LegendItem({model:e,className:e.get("value")&&e.get("value").indexOf("http")>=0||e.get("type")&&e.get("type")=="image"?"bkg":"",template:'		<div class="bullet" style="background: <%= value %>"></div> <%= name || ((name === false) ? "false": "null") %>'}),this.$el.find("ul").append(view.render())},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else this.$el.html(this.template(this.model.toJSON())),this.items.length>0?this._renderItems():this.$el.html('<div class="warning">The category legend is empty</div>');return this}}),cdb.geo.ui.Legend.Category=cdb.geo.ui.CategoryLegend.extend({className:"cartodb-legend category",type:"category",initialize:function(){this.items=new cdb.geo.ui.LegendItems(this.options.data),this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1}),this._bindModel()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this._renderItems(),this}}),cdb.geo.ui.ColorLegend=cdb.geo.ui.BaseLegend.extend({className:"color-legend",type:"color",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul></ul>'),initialize:function(){this.items=this.model.items},_renderItems:function(){this.items.each(this._renderItem,this)},_renderItem:function(e){view=new cdb.geo.ui.LegendItem({model:e,className:e.get("value")&&e.get("value").indexOf("http")>=0?"bkg":"",template:'		<div class="bullet" style="background: <%= value %>"></div> <%= name || ((name === false) ? "false": "null") %>'}),this.$el.find("ul").append(view.render())},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.items.length>0?this._renderItems():this.$el.html('<div class="warning">The color legend is empty</div>'),this}}),cdb.geo.ui.Legend.Color=cdb.geo.ui.Legend.Category.extend({}),cdb.geo.ui.StackedLegend=cdb.core.View.extend({events:{dragstart:"_stopPropagation",mousedown:"_stopPropagation",touchstart:"_stopPropagation",MSPointerDown:"_stopPropagation",dblclick:"_stopPropagation",mousewheel:"_stopPropagation",DOMMouseScroll:"_stopPropagation",dbclick:"_stopPropagation",click:"_stopPropagation"},className:"cartodb-legend-stack",initialize:function(){_.each(this.options.legends,this._setupBinding,this)},_stopPropagation:function(e){e.stopPropagation()},getLegendByIndex:function(e){if(!this._layerByIndex){this._layerByIndex={};var t=this.options.legends;for(var n=0;n<t.length;++n){var r=t[n];this._layerByIndex[r.options.index]=r}}return this._layerByIndex[e]},_setupBinding:function(e){e.model.bind("change:type",this._checkVisibility,this),this.add_related_model(e.model)},_checkVisibility:function(){var e=_.some(this.options.legends,function(e){return e.model.get("type")&&(e.model.get("type")!="none"||e.model.get("template"))},this);e?this.show():this.hide(),_.each(this.options.legends,function(e){var t=e.model.get("type");t&&t!="none"?e.show():e.hide()},this)},_renderItems:function(){_.each(this.options.legends,function(e){this.$el.append(e.render().$el)},this)},show:function(){this.$el.show()},hide:function(){this.$el.hide()},addTo:function(e){$(e).html(this.render().$el)},render:function(){return this._renderItems(),this._checkVisibility(),this}}),cdb.geo.ui.Legends=Backbone.Collection.extend({model:cdb.geo.ui.LegendModel}),cdb.geo.ui.Legend.Stacked=cdb.geo.ui.StackedLegend.extend({initialize:function(){if(this.options.legends){var e=_.map(this.options.legends,function(e){return e.model});this.legendItems=new cdb.geo.ui.Legends(e),this.legendItems.bind("add remove change",this.render,this)}else if(this.options.data){var e=_.map(this.options.data,function(e){return new cdb.geo.ui.LegendModel(e)});this.legendItems=new cdb.geo.ui.Legends(e),this.legendItems.bind("add remove change",this.render,this)}},_capitalize:function(e){if(e&&_.isString(e))return e.charAt(0).toUpperCase()+e.slice(1)},render:function(){return this.$el.empty(),this.legends=[],this.legendItems&&this.legendItems.length>0&&this.legendItems.each(this._renderLegend,this),this},_renderLegend:function(e){var t=e.get("type");t||(t="custom"),t=this._capitalize(t);var n=new cdb.geo.ui.Legend[t](e.attributes);this.legends.push(n),e.get("visible")!==!1&&this.$el.append(n.render().$el)},getLegendAt:function(e){return this.legends[e]},addLegend:function(e){var t=new cdb.geo.ui.LegendModel(e);this.legendItems.push(t)},removeLegendAt:function(e){var t=this.legendItems.at(e);this.legendItems.remove(t)}}),cdb.geo.ui.LegendModel=cdb.core.Model.extend({defaults:{type:null,show_title:!1,title:"",template:""},initialize:function(){this.items=new cdb.geo.ui.LegendItems(this.get("items")),this.items.bind("add remove reset change",function(){this.set({items:this.items.toJSON()})},this),this.bind("change:items",this._onUpdateItems,this),this.bind("change:title change:show_title",this._onUpdateTitle,this),this.bind("change:template",this._onUpdateTemplate,this)},_onUpdateTemplate:function(){this.template=this.get("template")},_onUpdateTitle:function(){this.title=this.get("title"),this.show_title=this.get("show_title")},_onUpdateItems:function(){var e=this.get("items");this.items.reset(e)}}),cdb.geo.ui.CustomLegend=cdb.geo.ui.BaseLegend.extend({className:"custom-legend",type:"custom",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul></ul>'),initialize:function(){this.items=this.model.items},setData:function(e){this.items=new cdb.geo.ui.LegendItems(e),this.model.items=this.items,this.model.set("items",e)},_renderItems:function(){this.items.each(this._renderItem,this)},_renderItem:function(e){view=new cdb.geo.ui.LegendItem({model:e,className:e.get("value")&&e.get("value").indexOf("http")>=0?"bkg":"",template:'		<div class="bullet" style="background:<%= value %>"></div>\n		<%= name || "null" %>'}),this.$el.find("ul").append(view.render())},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else this.$el.html(this.template(this.model.toJSON())),this.items.length>0?this._renderItems():this.$el.html('<div class="warning">The legend is empty</div>');return this}}),cdb.geo.ui.Legend.Custom=cdb.geo.ui.CustomLegend
    .extend({className:"cartodb-legend custom",type:"custom",initialize:function(){this.items=new cdb.geo.ui.LegendItems(this.options.data||this.options.items),this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1,items:this.items.models}),this._bindModel()},_bindModel:function(){this.model.bind("change:items change:template change:title change:show_title",this.render,this)}}),cdb.geo.ui.BubbleLegend=cdb.geo.ui.BaseLegend.extend({className:"bubble-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul><li>	<%= min %></li><li class="graph">		<div class="bubbles"></div></li><li>	<%= max %></li></ul>'),initialize:function(){this.items=this.model.items},_bindModel:function(){this.model.bind("change:template change:title change:show_title change:color change:min change:max",this.render,this)},setColor:function(e){this.model.set("color",e)},setMinValue:function(e){this.model.set("min",e)},setMaxValue:function(e){this.model.set("max",e)},_renderGraph:function(e){this.$el.find(".graph").css("background",e)},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON())),this.$el.removeClass("bubble-legend")}else{var t=this.model.get("color")||(this.items.length>=3?this.items.at(2).get("value"):"");if(this.items.length>=3){var n=this.model.get("min")||this.items.at(0).get("value"),r=this.model.get("max")||this.items.at(1).get("value"),i=_.extend(this.model.toJSON(),{min:n,max:r});this.$el.html(this.template(i))}this._renderGraph(t)}return this}}),cdb.geo.ui.Legend.Bubble=cdb.geo.ui.BubbleLegend.extend({className:"cartodb-legend bubble",type:"bubble",initialize:function(){this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,min:this.options.min,max:this.options.max,color:this.options.color,show_title:this.options.title?!0:!1}),this.add_related_model(this.model),this._bindModel()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this._renderGraph(this.model.get("color")),this}}),cdb.geo.ui.Legend.Choropleth=cdb.geo.ui.ChoroplethLegend.extend({type:"choropleth",className:"cartodb-legend choropleth",initialize:function(){this.items=this.options.items,this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1,leftLabel:this.options.left||this.options.leftLabel,rightLabel:this.options.right||this.options.rightLabel,colors:this.options.colors,buckets_count:this.options.colors?this.options.colors.length:0}),this.add_related_model(this.model),this._bindModel()},_bindModel:function(){this.model.bind("change:template change:title change:show_title change:colors change:leftLabel change:rightLabel",this.render,this)},_generateColorList:function(){return _.map(this.model.get("colors"),function(e){return'		<div class="quartile" style="background-color:'+e+'"></div>'}).join("")},render:function(){var e=_.extend(this.model.toJSON(),{colors:this._generateColorList()});return this.$el.html(this.template(e)),this}}),cdb.geo.ui.Legend.Intensity=cdb.geo.ui.IntensityLegend.extend({className:"cartodb-legend intensity",type:"intensity",initialize:function(){this.items=this.options.items,this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1,color:this.options.color,leftLabel:this.options.left||this.options.leftLabel,rightLabel:this.options.right||this.options.rightLabel}),this.add_related_model(this.model),this._bindModel()},_bindModel:function(){this.model.bind("change:title change:show_title change:color change:leftLabel change:rightLabel",this.render,this)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this._renderGraph(this.model.get("color")),this}}),cdb.geo.ui.SwitcherItemModel=Backbone.Model.extend({}),cdb.geo.ui.SwitcherItems=Backbone.Collection.extend({model:cdb.geo.ui.SwitcherItemModel}),cdb.geo.ui.SwitcherItem=cdb.core.View.extend({tagName:"li",events:{"click a":"select"},initialize:function(){_.bindAll(this,"render"),this.template=cdb.templates.getTemplate("templates/map/switcher/item"),this.parent=this.options.parent,this.model.on("change:selected",this.render)},select:function(e){e.preventDefault(),this.parent.toggle(this);var t=this.model.get("callback");t&&t()},render:function(){return this.model.get("selected")==1?this.$el.addClass("selected"):this.$el.removeClass("selected"),this.$el.html(this.template(this.model.toJSON())),this.$el}}),cdb.geo.ui.Switcher=cdb.core.View.extend({id:"switcher",default_options:{},initialize:function(){this.map=this.model,this.add_related_model(this.model),_.bindAll(this,"render","show","hide","toggle"),_.defaults(this.options,this.default_options),this.collection&&(this.model.collection=this.collection),this.template=this.options.template?this.options.template:cdb.templates.getTemplate("geo/switcher")},show:function(){this.$el.fadeIn(250)},hide:function(){this.$el.fadeOut(250)},toggle:function(e){this.collection&&this.collection.each(function(e){e.set("selected",!e.get("selected"))})},render:function(){var e=this;return this.model!=undefined&&this.$el.html(this.template(this.model.toJSON())),this.collection&&this.collection.each(function(t){var n=new cdb.geo.ui.SwitcherItem({parent:e,className:t.get("className"),model:t});e.$el.find("ul").append(n.render())}),this}}),cdb.geo.ui.InfowindowModel=Backbone.Model.extend({SYSTEM_COLUMNS:["the_geom","the_geom_webmercator","created_at","updated_at","cartodb_id","cartodb_georef_status"],defaults:{template_name:"infowindow_light",latlng:[0,0],offset:[28,0],maxHeight:180,autoPan:!0,template:"",content:"",visibility:!1,alternative_names:{},fields:null},clearFields:function(){this.set({fields:[]})},saveFields:function(e){e=e||"old_fields",this.set(e,_.clone(this.get("fields")))},fieldCount:function(){var e=this.get("fields");return e?e.length:0},restoreFields:function(e,t){t=t||"old_fields";var n=this.get(t);e&&(n=n.filter(function(t){return _.contains(e,t.name)})),n&&n.length&&this._setFields(n),this.unset(t)},_cloneFields:function(){return _(this.get("fields")).map(function(e){return _.clone(e)})},_setFields:function(e){e.sort(function(e,t){return e.position-t.position}),this.set({fields:e})},sortFields:function(){this.get("fields").sort(function(e,t){return e.position-t.position})},_addField:function(e,t){var n=$.Deferred();if(!this.containsField(e)){var r=this.get("fields");r?(t=t===undefined?r.length:t,r.push({name:e,title:!0,position:t})):(t=t===undefined?0:t,this.set("fields",[{name:e,title:!0,position:t}],{silent:!0}))}return n.resolve(),n.promise()},addField:function(e,t){var n=this;return $.when(this._addField(e,t)).then(function(){n.sortFields(),n.trigger("change:fields"),n.trigger("add:fields")}),this},getFieldProperty:function(e,t){if(this.containsField(e)){var n=this.get("fields")||[],r=_.indexOf(_(n).pluck("name"),e);return n[r][t]}return null},setFieldProperty:function(e,t,n){if(this.containsField(e)){var r=this._cloneFields()||[],i=_.indexOf(_(r).pluck("name"),e);r[i][t]=n,this._setFields(r)}return this},getAlternativeName:function(e){return this.get("alternative_names")&&this.get("alternative_names")[e]},setAlternativeName:function(e,t){var n=this.get("alternative_names")||[];n[e]=t,this.set({alternative_names:n}),this.trigger("change:alternative_names")},getFieldPos:function(e){var t=this.getFieldProperty(e,"position");return t==undefined?Number.MAX_VALUE:t},containsAlternativeName:function(e){var t=this.get("alternative_names")||[];return t[e]},containsField:function(e){var t=this.get("fields")||[];return _.contains(_(t).pluck("name"),e)},removeField:function(e){if(this.containsField(e)){var t=this._cloneFields()||[],n=_.indexOf(_(t).pluck("name"),e);n>=0&&t.splice(n,1),this._setFields(t),this.trigger("remove:fields")}return this},updateContent:function(e){var t=this.get("fields");this.set("content",cdb.geo.ui.InfowindowModel.contentForFields(e,t))}},{contentForFields:function(e,t,n){n=n||{};var r=[];for(var i=0;i<t.length;++i){var s=t[i],o=String(e[s.name]);(n.empty_fields||e[s.name]!==undefined&&o!="")&&r.push({title:s.title?s.name:null,value:e[s.name],index:i?i:null})}return r.length===0&&r.push({title:null,value:"No data available",index:i?i:null,type:"empty"}),{fields:r,data:e}}}),cdb.geo.ui.Infowindow=cdb.core.View.extend({className:"cartodb-infowindow",spin_options:{lines:10,length:0,width:4,radius:6,corners:1,rotate:0,color:"rgba(0,0,0,0.5)",speed:1,trail:60,shadow:!1,hwaccel:!0,className:"spinner",zIndex:2e9,top:"auto",left:"auto",position:"absolute"},events:{"click .close":"_closeInfowindow","touchstart .close":"_closeInfowindow","MSPointerDown .close":"_closeInfowindow",dragstart:"_checkOrigin",mousedown:"_checkOrigin",touchstart:"_checkOrigin",MSPointerDown:"_checkOrigin",dblclick:"_stopPropagation",DOMMouseScroll:"_stopBubbling",MozMousePixelScroll:"_stopBubbling",mousewheel:"_stopBubbling",dbclick:"_stopPropagation",click:"_stopPropagation"},initialize:function(){var e=this;_.bindAll(this,"render","setLatLng","_setTemplate","_updatePosition","_update","toggle","show","hide"),this.mapView=this.options.mapView,this.options.template&&this.model.set("template",this.options.template),this.model.get("template")?this._compileTemplate():this._setTemplate(),this.model.bind("change:content",this.render,this),this.model.bind("change:template_name",this._setTemplate,this),this.model.bind("change:latlng",this._update,this),this.model.bind("change:visibility",this.toggle,this),this.model.bind("change:template",this._compileTemplate,this),this.model.bind("change:alternative_names",this.render,this),this.model.bind("change:width",this.render,this),this.model.bind("change:maxHeight",this.render,this),this.mapView.map.bind("change",this._updatePosition,this),this.mapView.bind("zoomstart",function(){e.hide(!0)}),this.mapView.bind("zoomend",function(){e.show(!0)}),this.add_related_model(this.mapView.map),this.$el.hide()},render:function(){if(this.template){var e=this.$(".cartodb-popup-content");e.length>0&&e.data()!=null&&e.data().jsp&&e.data().jsp.destroy();var t=_.map(this.model.attributes.content.fields,function(e){return _.clone(e)}),n=this.model.get("content")?this.model.get("content").data:{};if(this.model.get("template_name")){var r=_.clone(this.model.attributes.template_name);t=this._fieldsToString(t,r)}var i={};_.each(this.model.get("content").fields,function(e){i[e.title]=e.value});var s=_.extend({content:{fields:t,data:n}},i);this.$el.html(this.template(s)),this.model.get("width")&&this.$(".cartodb-popup").css("width",this.model.get("width")+"px"),this.$(".cartodb-popup .cartodb-popup-content").css("max-height",this.model.get("maxHeight")+"px");var o=this;setTimeout(function(){var e=o.$(".cartodb-popup-content").outerHeight();o.model.get("maxHeight")<=e&&o.$(".cartodb-popup-content").jScrollPane({maintainPosition:!1,verticalDragMinHeight:20})},1),this._checkLoading(),this._loadCover(),this.isLoadingData()||(this.model.trigger("domready",this,this.$el),this.trigger("domready",this,this.$el))}return this},_getModelTemplate:function(){return this.model.get("template_name")},_setTemplate:function(){this.model.get("template_name")&&(this.template=cdb.templates.getTemplate(this._getModelTemplate()),this.render())},_compileTemplate:function(){var e=this.model.get("template")?this.model.get("template"):cdb.templates.getTemplate(this._getModelTemplate());typeof e!="function"?this.template=(new cdb.core.Template({template:e,type:this.model.get("template_type")||"mustache"})).asFunction():this.template=e,this.render()},_checkOrigin:function(e){var t=$(e.target).closest(".jspVerticalBar").length>0&&e.type!="touchstart";t||e.stopPropagation()},_fieldsToString:function(e,t){var n=[];if(e&&e.length>0){var r=this;n=_.map(e,function(e,n){return r._sanitizeField(e,t,e.index||n)})}return n},_sanitizeField:function(e,t,n){if(e.value==null||e.value==undefined)e.value="";var r=this.model.getAlternativeName(e.title);e.title&&r?e.title=r:e.title&&(e.title=e.title.replace(/_/g," "));var i=e.value.toString();return!e.type&&n==0&&e.value.length>35&&t&&t.search("_header_")!=-1&&(i=e.value.substr(0,32)+"..."),!e.type&&n==1&&e.value.length>35&&t&&t.search("_header_with_image")!=-1&&(i=e.value.substr(0,32)+"..."),this._isValidURL(e.value)&&(i="<a href='"+e.value+"' target='_blank'>"+i+"</a>"),n==0&&t.search("_header_with_image")!=-1&&(i=e.value),e.value=i,e},isLoadingData:function(){var e=this.model.get("content");return e.fields&&e.fields.length==1&&e.fields[0].type==="loading"},_checkLoading:function(){this.isLoadingData()?this._startSpinner():this._stopSpinner()},_stopSpinner:function(){this.spinner&&this.spinner.stop()},_startSpinner:function(e){this._stopSpinner();var e=this.$el.find(".loading");if(e){var t=this.model.get("template_name").search("dark")!=-1;t?this.spin_options.color="#FFF":this.spin_options.color="rgba(0,0,0,0.5)",this.spinner=(new Spinner(this.spin_options)).spin(),e.append(this.spinner.el)}},_containsCover:function(){return this.$el.find(".cartodb-popup.header").attr("data-cover")?!0:!1},_getCoverURL:function(){var e=this.model.get("content");return e&&e.fields&&e.fields.length>0?(e.fields[0].value||"").toString():!1},_loadCover:function(){if(!this._containsCover())return;var e=this,t=this.$(".cover"),n=this.$(".shadow"),r=this._getCoverURL();if(!this._isValidURL(r)){n.hide(),cdb.log.info("Header image url not valid");return}var i=document.getElementById("spinner"),s={lines:9,length:4,width:2,radius:4,corners:1,rotate:0,color:"#ccc",speed:1,trail:60,shadow:!0,hwaccel:!1,zIndex:2e9},o=(new Spinner(s)).spin(i),u=t.find("img");u.hide(function(){this.remove()}),u=$("<img />").attr("src",r),t.append(u),u.load(function(){o.stop();var e=u.width(),n=u.height(),r=t.width(),i=t.height(),s=n/e,a=i/r;if(e>r&&n>i)if(s<a)u.css({height:i});else{var f=n/(e/r);u.css({width:r,top:"50%",position:"absolute","margin-top":-1*parseInt(f,10)/2})}else{var f=n/(e/r);u.css({width:r,top:"50%",position:"absolute","margin-top":-1*parseInt(f,10)/2})}u.fadeIn(300)}).error(function(){o.stop()})},_isValidURL:function(e){if(e){var t=/^(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-|]*[\w@?^=%&amp;\/~+#-])?$/;return String(e).match(t)!=null?!0:!1}return!1},toggle:function(){this.model.get("visibility")?this.show():this.hide()},_stopBubbling:function(e){e.preventDefault(),e.stopPropagation()},_stopPropagation:function(e){e.stopPropagation()},setLoading:function(){return this.model.set({content:{fields:[{title:null,alternative_name:null,value:"Loading content...",index:null,type:"loading"}],data:{}}}),this},setError:function(){return this.model.set({content:{fields:[{title:null,alternative_name:null,value:"There has been an error...",index:null,type:"error"}],data:{}}}),this},setLatLng:function(e){return this.model.set("latlng",e),this},_closeInfowindow:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.model.get("visibility")&&(this.model.set("visibility",!1),this.trigger("close"))},showInfowindow:function(){this.model.set("visibility",!0)},show:function(e){var t=this;this.model.get("visibility")&&(t.$el.css({left:-5e3}),t._update(e))},isHidden:function(){return!this.model.get("visibility")},hide:function(e){(e||!this.model.get("visibility"))&&this._animateOut()},_update:function(e){if(!this.isHidden()){var t=0;if(!e)var t=this.adjustPan();this._updatePosition(),this._animateIn(t)}},_animateIn:function(e){!$.browser.msie||$.browser.msie&&parseInt($.browser.version)>8?(this.$el.css({marginBottom:"-10px",display:"block",opacity:0}),this.$el.delay(e).animate({opacity:1,marginBottom:0},300)):this.$el.show()},_animateOut:function(){if(!$.browser.msie||$.browser.msie&&parseInt($.browser.version)>8){var e=this;this.$el.animate({marginBottom:"-10px",opacity:"0",display:"block"},180,function(){e.$el.css({display:"none"})})}else this.$el.hide()},_updatePosition:function(){if(this.isHidden())return;var e=this.model.get("offset");pos=this.mapView.latLonToPixel(this.model.get("latlng")),x=this.$el.position().left,y=this.$el.position().top,containerHeight=this.$el.outerHeight(!0),containerWidth=this.$el.width(),left=pos.x-e[0],size=this.mapView.getSize(),bottom=-1*(pos.y-e[1]-size.y),this.$el.css({bottom:bottom,left:left})},adjustPan:function(e){var t=this.model.get("offset");if(!this.model.get("autoPan")||this.isHidden())return;var n=this.$el.position().left,r=this.$el.position().top,i=this.$el.outerHeight(!0)+15,s=this.$el.width(),o=this.mapView.latLonToPixel(this.model.get("latlng")),u={x:0,y:0};size=this.mapView.getSize(),wait_callback=0,o.x-t[0]<0&&(u.x=o.x-t[0]-10),o.x-t[0]+s>size.x&&(u.x=o.x+s-size.x-t[0]+10),o.y-i<0&&(u.y=o.y-i-10),o.y-i>size.y&&(u.y=o.y+i-size.y);if(u.x||u.y)this.mapView.panBy(u),wait_callback=300;return wait_callback}}),cdb.geo.ui.Header=cdb.core.View.extend({className:"cartodb-header",initialize:function(){var e=this.model.get("extra");this.model.set({title:e.title,description:this._setLinksTarget(e.description),show_title:e.show_title,show_description:e.show_description},{silent:!0})},show:function(){var e=this.model.get("title")&&this.model.get("show_title"),t=this.model.get("description")&&this.model.get("show_description");if(e||t){var n=this;this.$el.show(),e&&n.$title.show(),t&&n.$description.show()}},_setLinksTarget:function(e){if(!e)return e;var t=new RegExp(/<(a)([^>]+)>/g);return e.replace(t,'<$1 target="_blank"$2>')},render:function(){return this.$el.html(this.options.template(this.model.attributes)),this.$title=this.$el.find(".content div.title"),this.$description=this.$el.find(".content div.description"),this.model.get("show_title")||this.model.get("show_description")?this.show():this.hide(),this}}),cdb.geo.ui.Search=cdb.core.View.extend({className:"cartodb-searchbox",events:{"click input[type='text']":"_focus","submit form":"_submit",click:"_stopPropagation",dblclick:"_stopPropagation",mousedown:"_stopPropagation"},initialize:function(){},render:function(){return this.$el.html(this.options.template(this.options)),this},_stopPropagation:function(e){e.stopPropagation()},_focus:function(e){e.preventDefault(),$(e.target).focus()},_showLoader:function(){this.$("span.loader").show()},_hideLoader:function(){this.$("span.loader").hide()},_submit:function(e){e.preventDefault();var t=this,n=this.$("input.text").val();this._showLoader(),cdb.geo.geocoder.NOKIA.geocode(n,function(e){if(e.length>0){var n=!0;if(!e[0].boundingbox||e[0].boundingbox.south==e[0].boundingbox.north||e[0].boundingbox.east==e[0].boundingbox.west)n=!1;n&&e[0].boundingbox?t.model.setBounds([[parseFloat(e[0].boundingbox.south),parseFloat(e[0].boundingbox.west)],[parseFloat(e[0].boundingbox.north),parseFloat(e[0].boundingbox.east)]]):e[0].lat&&e[0].lon&&(t.model.setCenter([e[0].lat,e[0].lon]),t.model.setZoom(10))}t._hideLoader()})}}),cdb.geo.ui.LayerSelector=cdb.core.View.extend({className:"cartodb-layer-selector-box",events:{click:"_openDropdown",dblclick:"killEvent",mousedown:"killEvent"},initialize:function(){this.map=this.options.mapView.map,this.mapView=this.options.mapView,this.mapView.bind("click zoomstart drag",function(){this.dropdown&&this.dropdown.hide()},this),this.add_related_model(this.mapView),this.layers=[]},render:function(){return this.$el.html(this.options.template(this.options)),this.dropdown=new cdb.ui.common.Dropdown({className:"cartodb-dropdown border",template:this.options.dropdown_template,target:this.$el.find("a"),speedIn:300,speedOut:200,position:"position",tick:"right",vertical_position:"down",horizontal_position:"right",vertical_offset:7,horizontal_offset:13}),cdb.god&&cdb.god.bind("closeDialogs",this.dropdown.hide,this.dropdown),this.$el.append(this.dropdown.render().el),this._getLayers(),this._setCount(),this},_getLayers:function(){var e=this;this.layers=[],_.each(this.map.layers.models,function(t){if(t.get("type")=="layergroup"||t.get("type")==="namedmap"){var n=e.mapView.getLayerByCid(t.cid);for(var r=0;r<n.getLayerCount();++r){var i=n.getLayer(r),s=new cdb.core.Model(i);s.set("order",r),s.set("type","layergroup"),s.set("visible",!n.getSubLayer(r).get("hidden")),s.bind("change:visible",function(e){this.trigger("change:visible",e.get("visible"),e.get("order"),e)},e),e.options.layer_names?s.set("layer_name",e.options.layer_names[r]):s.set("layer_name",i.options.layer_name);var o=e._createLayer("LayerViewFromLayerGroup",{model:s,layerView:n,layerIndex:r});o.bind("switchChanged",e._setCount,e),e.layers.push(o)}}else if(t.get("type")==="CartoDB"||t.get("type")==="torque"){var o=e._createLayer("LayerView",{model:t});o.bind("switchChanged",e._setCount,e),e.layers.push(o),o.model.bind("change:visible",function(e){this.trigger("change:visible",e.get("visible"),e.get("order"),e)},e)}})},_createLayer:function(e,t){var n=new cdb.geo.ui[e](t);return this.$("ul").append(n.render().el),this.addView(n),n},_setCount:function(){var e=0;for(var t=0,n=this.layers.length;t<n;++t){var r=this.layers[t];r.model.get("visible")&&e++}this.$(".count").text(e),this.trigger("switchChanged",this)},_openDropdown:function(){this.dropdown.open()}}),cdb.geo.ui.LayerView=cdb.core.View.extend({tagName:"li",defaults:{template:'      <a class="layer" href="#/change-layer"><%= layer_name %></a>      <a href="#switch" class="right <%= visible ? "enabled" : "disabled" %> switch"><span class="handle"></span></a>    '},events:{click:"_onSwitchClick"},initialize:function(){this.model.has("visible")||this.model.set("visible",!1),this.model.bind("change:visible",this._onSwitchSelected,this),this.add_related_model(this.model),this._onSwitchSelected(),this.template=this.options.template?cdb.templates.getTemplate(this.options.template):_.template(this.defaults.template)},render:function(){var e=_.clone(this.model.attributes);return e.layer_name=e.layer_name||e.table_name,this.$el.append(this.template(e)),this},_onSwitchSelected:function(){var e=this.model.get("visible");this.$el.find(".switch").removeClass(e?"disabled":"enabled").addClass(e?"enabled":"disabled"),this.trigger("switchChanged")},_onSwitchClick:function(e){this.killEvent(e),this.model.set("visible",!this.model.get("visible"))}}),cdb.geo.ui.LayerViewFromLayerGroup=cdb.geo.ui.LayerView.extend({_onSwitchSelected:function(){cdb.geo.ui.LayerView.prototype._onSwitchSelected.call(this);var e=this.options.layerView.getSubLayer(this.options.layerIndex),t=this.model.get("visible");t?e.show():e.hide()}}),cdb.geo.ui.MobileLayer=cdb.core.View.extend({events:{"click h3":"_toggle",dblclick:"_stopPropagation"},tagName:"li",className:"cartodb-mobile-layer has-toggle",template:cdb.core.Template.compile("<% if (show_title) { %><h3><%= layer_name %><% } %><a href='#' class='toggle<%= toggle_class %>'></a></h3>"),_stopPropagation:function(e){e.stopPropagation()},initialize:function(){_.defaults(this.options,this.default_options),this.model.bind("change:visible",this._onChangeVisible,this)},_onChangeVisible:function(){this.$el.find(".legend")[this.model.get("visible")?"fadeIn":"fadeOut"](150),this.$el[this.model.get("visible")?"removeClass":"addClass"]("hidden"),this.trigger("change_visibility",this)},_toggle:function(e){e.preventDefault(),e.stopPropagation();if(this.options.hide_toggle)return;this.model.set("visible",!this.model.get("visible"))},_renderLegend:function(){if(!this.options.show_legends)return;if(this.model.get("legend")&&(this.model.get("legend").type=="none"||!this.model.get("legend").type))return;if(this.model.get("legend")&&this.model.get("legend").items&&this.model.get("legend").items.length==0)return;this.$el.addClass("has-legend");var e=new cdb.geo.ui.Legend(this.model.get("legend"));e.undelegateEvents(),this.$el.append(e.render().$el)},_truncate:function(e,t){return e.substr(0,t-1)+(e.length>t?"&hellip;":"")},render:function(){var e=this.model.get("layer_name");e=e?this._truncate(e,23):"untitled";var t=_.extend(this.model.attributes,{layer_name:this.options.show_title?e:"",toggle_class:this.options.hide_toggle?" hide":""});return this.$el.html(this.template(_.extend(t,{show_title:this.options.show_title}))),this.options.hide_toggle&&this.$el.removeClass("has-toggle"),this.model.get("visible")||this.$el.addClass("hidden"),this.model.get("legend")&&this._renderLegend(),this._onChangeVisible(),this}}),cdb.geo.ui.Mobile=cdb.core.View.extend({className:"cartodb-mobile",events:{"click .cartodb-attribution-button":"_onAttributionClick","click .toggle":"_toggle","click .fullscreen":"_toggleFullScreen","click .backdrop":"_onBackdropClick","dblclick .aside":"_stopPropagation","dragstart .aside":"_checkOrigin","mousedown .aside":"_checkOrigin","touchstart .aside":"_checkOrigin","MSPointerDown .aside":"_checkOrigin"},initialize:function(){_.bindAll(this,"_toggle","_reInitScrollpane"),_.defaults(this.options,this.default_options),this.hasLayerSelector=!1,this.mobileEnabled=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.visibility_options=this.options.visibility_options||{},this.mapView=this.options.mapView,this.map=this.mapView.map,this.template=this.options.template?this.options.template:cdb.templates.getTemplate("geo/zoom"),this.overlays=this.options.overlays,this._setupModel(),window.addEventListener("orientationchange",_.bind(this.doOnOrientationChange,this)),this._addWheelEvent()},_addWheelEvent:function(){var e=this,t=this.options.mapView;$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.mozFullScreenElement&&!document.msFullscreenElement&&t.options.map.set("scrollwheel",!1),t.invalidateSize()})},_setupModel:function(){this.model=new Backbone.Model({open:!1,layer_count:0}),this.model.on("change:open",this._onChangeOpen,this),this.model.on("change:layer_count",this._onChangeLayerCount,this)},_checkOrigin:function(e){var t=$(e.target).closest(".jspVerticalBar").length>0&&e.type!="touchstart";t||e.stopPropagation()},_stopPropagation:function(e){e.stopPropagation()},_onBackdropClick:function(e){e.preventDefault(),e.stopPropagation(),this.$el.find(".backdrop").fadeOut(250),this.$el.find(".cartodb-attribution").fadeOut(250)},_onAttributionClick:function(e){e.preventDefault(),e.stopPropagation(),this.$el.find(".backdrop").fadeIn(250),this.$el.find(".cartodb-attribution").fadeIn(250)},_toggle:function(e){e.preventDefault(),e.stopPropagation(),this.model.set("open",!this.model.get("open"))},_toggleFullScreen:function(e){e.stopPropagation(),e.preventDefault();var t=window.document,n=$("#map > div")[0],r=n.requestFullscreen||n.mozRequestFullScreen||n.webkitRequestFullScreen,i=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen,s=this.options.mapView;!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement?(r.call(n),s&&s.options.map.set("scrollwheel",!0)):i.call(t)},_open:function(){var e=this.$el.find(".aside").width();this.$el.find(".cartodb-header").animate({right:e},200),this.$el.find(".aside").animate({right:0},200),this.$el.find(".cartodb-attribution-button").animate({right:e+parseInt(this.$el.find(".cartodb-attribution-button").css("right"))},200),this.$el.find(".cartodb-attribution").animate({right:e+parseInt(this.$el.find(".cartodb-attribution-button").css("right"))},200),this._initScrollPane()},_close:function(){this.$el.find(".cartodb-header").animate({right:0},200),this.$el.find(".aside").animate({right:-this.$el.find(".aside").width()},200),this.$el.find(".cartodb-attribution-button").animate({right:20},200),this.$el.find(".cartodb-attribution").animate({right:20},200)},default_options:{timeout:0,msg:""},_stopPropagation:function(e){e.stopPropagation()},doOnOrientationChange:function(){switch(window.orientation){case-90:case 90:this.recalc("landscape");break;default:this.recalc("portrait")}},recalc:function(e){var t=$(".legends > div.cartodb-legend-stack").height();this.$el.hasClass("open")&&t<100&&!this.$el.hasClass("torque")?(this.$el.css("height",t),this.$el.find(".top-shadow").hide(),this.$el.find(".bottom-shadow").hide()):this.$el.hasClass("open")&&t<100&&this.$el.hasClass("legends")&&this.$el.hasClass("torque")&&(this.$el.css("height",t+$(".legends > div.torque").height()),this.$el.find(".top-shadow").hide(),this.$el.find(".bottom-shadow").hide())},_onChangeLayerCount:function(){var e=this.model.get("layer_count"),t=e+" layer"+(e!=1?"s":"");this.$el.find(".aside .layer-container > h3").html(t)},_onChangeOpen:function(){this.model.get("open")?this._open():this._close()},_createLayer:function(e,t){return new cdb.geo.ui[e](t)},_getLayers:function(){this.layers=[],this.options.layerView?this._getLayersFromLayerView():_.each(this.map.layers.models,this._getLayer,this)},_getLayersFromLayerView:function(){if(this.options.layerView&&this.options.layerView.model.get("type")=="layergroup")this.layers=_.map(this.options.layerView.layers,function(t,n){var r=new cdb.core.Model(t);return r.set("order",n),r.set("type","layergroup"),r.set("visible",t.visible),r.set("layer_name",t.options.layer_name),e=this._createLayer("LayerViewFromLayerGroup",{model:r,layerView:this.options.layerView,layerIndex:n}),e.model},this);else if(this.options.layerView&&this.options.layerView.model.get("type")=="torque"){var e=this._createLayer("LayerView",{model:this.options.layerView.model});this.layers.push(e.model)}},_getLayer:function(e){if(e.get("type")=="layergroup"||e.get("type")==="namedmap"){var t=this.mapView.getLayerByCid(e.cid);for(var n=0;n<t.getLayerCount();++n){var r=t.getLayer(n),i=new cdb.core.Model(r);i.set("order",n),i.set("type","layergroup"),i.set("visible",r.visible),i.set("layer_name",r.options.layer_name),layerView=this._createLayer("LayerViewFromLayerGroup",{model:i,layerView:t,layerIndex:n}),this.layers.push(layerView.model)}}else if(e.get("type")==="CartoDB"||e.get("type")==="torque")e.get("type")==="torque"&&e.on("change:visible",this._toggleSlider,this),this.layers.push(e)},_toggleSlider:function(e){e.get("visible")?(this.$el.addClass("with-torque"),this.slider.show()):(this.$el.removeClass("with-torque"),this.slider.hide())},_reInitScrollpane:function(){this.$(".scrollpane").data("jsp")&&this.$(".scrollpane").data("jsp").reinitialise()},_bindOrientationChange:function(){var e=this,t=function(){$(".cartodb-mobile .scrollpane").css("max-height",e.$el.height()-30),$(".cartodb-mobile .scrollpane").data("jsp")&&$(".cartodb-mobile .scrollpane").data("jsp").reinitialise()};window.addEventListener?window.addEventListener("orientationchange",_.bind(t)):window.attachEvent("orientationchange",t,this)},_renderOverlays:function(){var e=!1,t=!1,n=!1;_.each(this.overlays,function(r){!this.visibility_options.search&&r.type=="search"&&this.visibility_options.search!==!1&&this.visibility_options.search!=="false"&&(this._addSearch(),e=!0),!this.visibility_options.zoomControl&&r.type=="zoom"&&this.visibility_options.zoomControl!=="false"&&(this._addZoom(),t=!0),r.type=="fullscreen"&&!this.mobileEnabled&&this._addFullscreen(),r.type=="header"&&this._addHeader(r),r.type=="layer_selector"&&(n=!0)},this);var r=this.visibility_options.search==="true"||this.visibility_options.search===!0,i=this.visibility_options.zoomControl==="true"||this.visibility_options.zoomControl===!0,s=this.visibility_options.layer_selector;!e&&r&&this._addSearch(),!t&&i&&this._addZoom();if(s||n&&s==undefined)this.hasLayerSelector=!0},_initScrollPane:function(){if(this.$scrollpane)return;var e=this,t=this.$el.height();this.$scrollpane=this.$el.find(".scrollpane"),setTimeout(function(){e.$scrollpane.css("max-height",t-60),e.$scrollpane.jScrollPane({showArrows:!0})},500)},_addZoom:function(){var e=cdb.core.Template.compile('    <a href="#zoom_in" class="zoom_in">+</a>    <a href="#zoom_out" class="zoom_out">-</a>    <div class="info"></div>',"mustache"),t=new cdb.geo.ui.Zoom({model:this.options.map,template:e});this.$el.append(t.render().$el),this.$el.addClass("with-zoom")},_addFullscreen:function(){this.visibility_options.fullscreen!=0&&(this.hasFullscreen=!0,this.$el.addClass("with-fullscreen"))},_addSearch:function(){this.hasSearch=!0;var e=cdb.core.Template.compile('      <form>      <span class="loader"></span>      <input type="text" class="text" placeholder="Search for places..." value="" />      <input type="submit" class="submit" value="" />      </form>      ',"mustache"),t=new cdb.geo.ui.Search({template:e,model:this.mapView.map});this.$el.find(".aside").prepend(t.render().$el),this.$el.find(".cartodb-searchbox").show(),this.$el.addClass("with-search")},_addHeader:function(e){this.hasHeader=!0,this.$header=this.$el.find(".cartodb-header");var t=_.template('<div class="hgroup"><% if (show_title) { %><div class="title"><%= title %></div><% } %><% if (show_description) { %><div class="description"><%= description %><% } %></div></div>'
),n=e.options.extra,r=!1,i=!1,s=!1;if(n){if(this.visibility_options.title||this.visibility_options.title!=0&&n.show_title)r=!0,i=!0;if(this.visibility_options.description||this.visibility_options.description!=0&&n.show_description)r=!0,s=!0;var o=t({title:n.title,show_title:i,description:n.description,show_description:s});r&&(this.$el.addClass("with-header"),this.$header.find(".content").append(o))}},_addAttributions:function(){var e="";this.options.mapView.$el.find(".leaflet-control-attribution").hide(),this.options.layerView?(e=this.options.layerView.model.get("attribution"),this.$el.find(".cartodb-attribution").append(e)):this.options.map.get("attribution")&&(e=this.options.map.get("attribution"),_.each(e,function(e){var t=$("<li></li>"),n=t.html(e);this.$el.find(".cartodb-attribution").append(t)},this)),e&&this.$el.find(".cartodb-attribution-button").fadeIn(250)},_renderLayers:function(){var e=this.visibility_options.legends,t=this.layers.filter(function(e){return e.get("legend")&&e.get("legend").type!=="none"}),n=t.length?!0:!1;if(!this.hasLayerSelector&&!e)return;if(!this.hasLayerSelector&&!n)return;if(this.layers.length==0)return;if(this.layers.length==1&&!n)return;this.$el.addClass("with-layers"),this.model.set("layer_count",0),this.hasSearch||this.$el.find(".aside .layer-container").prepend("<h3></h3>"),_.each(this.layers,this._renderLayer,this)},_renderLayer:function(e){var t=e.get("legend")&&e.get("legend").type!==""&&e.get("legend").type!=="none";if(!this.hasLayerSelector&&!t)return;if(!this.hasLayerSelector&&!e.get("visible"))return;var n=this.layers.length==1||!this.hasLayerSelector,r=!0;this.visibility_options&&this.visibility_options.legends!==undefined&&(r=this.visibility_options.legends);var i=new cdb.geo.ui.MobileLayer({model:e,show_legends:r,show_title:this.hasLayerSelector?!0:!1,hide_toggle:n});this.$el.find(".aside .layers").append(i.render().$el),i.bind("change_visibility",this._reInitScrollpane,this),this.model.set("layer_count",this.model.get("layer_count")+1)},_renderTorque:function(){this.options.torqueLayer&&(this.hasTorque=!0,this.slider=new cdb.geo.ui.TimeSlider({type:"time_slider",layer:this.options.torqueLayer,map:this.options.map,pos_margin:0,position:"none",width:"auto"}),this.slider.bind("time_clicked",function(){this.slider.toggleTime()},this),this.$el.find(".torque").append(this.slider.render().$el),this.options.torqueLayer.hidden?this.slider.hide():this.$el.addClass("with-torque"))},render:function(){return this._bindOrientationChange(),this.$el.html(this.template(this.options)),this._renderOverlays(),this._addAttributions(),this.$header=this.$el.find(".cartodb-header"),this.$header.show(),this._getLayers(),this._renderLayers(),this._renderTorque(),this}}),cdb.geo.ui.TilesLoader=cdb.core.View.extend({className:"cartodb-tiles-loader",default_options:{animationSpeed:500},initialize:function(){_.defaults(this.options,this.default_options),this.isVisible=0,this.template=this.options.template?this.options.template:cdb.templates.getTemplate("geo/tiles_loader")},render:function(){return this.$el.html($(this.template(this.options))),this},show:function(e){if(this.isVisible)return;!$.browser.msie||$.browser.msie&&$.browser.version.indexOf("9.")!=0?this.$el.fadeTo(this.options.animationSpeed,1):this.$el.show(),this.isVisible++},hide:function(e){this.isVisible--;if(this.isVisible>0)return;this.isVisible=0,!$.browser.msie||$.browser.msie&&$.browser.version.indexOf("9.")==0?this.$el.stop(!0).fadeTo(this.options.animationSpeed,0):this.$el.hide()},visible:function(){return this.isVisible>0}}),cdb.geo.ui.InfoBox=cdb.core.View.extend({className:"cartodb-infobox",defaults:{pos_margin:20,position:"bottom|right",width:200},initialize:function(){var e=this;_.defaults(this.options,this.defaults),this.options.layer&&this.enable(),this.setTemplate(this.options.template||this.defaultTemplate,"mustache")},setTemplate:function(e){this.template=cdb.core.Template.compile(e,"mustache")},enable:function(){this.options.layer&&this.options.layer.on("featureOver",function(e,t,n,r){this.render(r).show()},this).on("featureOut",function(){this.hide()},this)},disable:function(){this.options.layer&&this.options.layer.off(null,null,this)},setPosition:function(e){var t={};e.indexOf("top")!==-1?t.top=this.options.pos_margin:e.indexOf("bottom")!==-1&&(t.bottom=this.options.pos_margin),e.indexOf("left")!==-1?t.left=this.options.pos_margin:e.indexOf("right")!==-1&&(t.right=this.options.pos_margin),this.$el.css(t)},render:function(e){return this.$el.html(this.template(e)),this.options.width&&this.$el.css("width",this.options.width),this.options.position&&this.setPosition(this.options.position),this}}),cdb.geo.ui.Tooltip=cdb.geo.ui.InfoBox.extend({defaultTemplate:"<p>{{text}}</p>",className:"cartodb-tooltip",defaults:{vertical_offset:0,horizontal_offset:0,position:"top|center"},initialize:function(){this.options.template=this.options.template||this.defaultTemplate,cdb.geo.ui.InfoBox.prototype.initialize.call(this),this._filter=null,this.showing=!1,this.showhideTimeout=null},setLayer:function(e){return this.options.layer=e,this},setFilter:function(e){return this._filter=e,this},setFields:function(e){return this.options.fields=e,this},setAlternativeNames:function(e){this.options.alternative_names=e},enable:function(){this.options.layer&&(this.options.layer.unbind(null,null,this),this.options.layer.on("mouseover",function(e,t,n,r){if(this.options.fields){var i=["fields","content"];this.options.omit_columns&&(i=i.concat(this.options.omit_columns));var s=cdb.geo.ui.InfowindowModel.contentForFields(r,this.options.fields,{empty_fields:this.options.empty_fields});r.content=_.omit(r,i),r.fields=s.fields;var o=this.options.alternative_names;if(o)for(var u=0;u<r.fields.length;++u){var a=r.fields[u];a.title=o[a.title]||a.title}}this.show(n,r),this.showing=!0},this).on("mouseout",function(){this.showing&&(this.hide(),this.showing=!1)},this),this.add_related_model(this.options.layer))},disable:function(){this.options.layer&&this.options.layer.unbind(null,null,this),this.hide(),this.showing=!1},_visibility:function(){var e=this;clearTimeout(this.showhideTimeout),this.showhideTimeout=setTimeout(e._showing?function(){e.$el.fadeIn(100)}:function(){e.$el.fadeOut(200)},50)},hide:function(){this._showing&&(this._showing=!1,this._visibility())},show:function(e,t){return this._filter&&!this._filter(t)?this:(this.render(t),this.setPosition(e),this._showing||(this._showing=!0,this._visibility()),this)},setPosition:function(e){var t={left:0,top:0},n=this.options.position,r=this.$el,i=r.innerHeight(),s=r.innerWidth();n.indexOf("top")!==-1?t.top=-i:n.indexOf("middle")!==-1&&(t.top=-(i/2)),n.indexOf("left")!==-1?t.left=-s:n.indexOf("center")!==-1&&(t.left=-(s/2)),t.top+=this.options.vertical_offset,t.left+=this.options.horizontal_offset,r.css({top:e.y+t.top,left:e.x+t.left})},render:function(e){return this.$el.html(this.template(e)),this}}),cdb.ui.common.FullScreen=cdb.core.View.extend({tagName:"div",className:"cartodb-fullscreen",events:{"click a":"_toggleFullScreen"},initialize:function(){_.bindAll(this,"render"),_.defaults(this.options,this.default_options),this._addWheelEvent()},_addWheelEvent:function(){var e=this,t=this.options.mapView;$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.mozFullScreenElement&&!document.msFullscreenElement&&e.model.get("allowWheelOnFullscreen")&&t.options.map.set("scrollwheel",!1),t.invalidateSize()})},_toggleFullScreen:function(e){e.stopPropagation(),e.preventDefault();var t=window.document,n=t.documentElement;this.options.doc&&(n=$(this.options.doc)[0]);var r=n.requestFullscreen||n.mozRequestFullScreen||n.webkitRequestFullScreen,i=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen,s=this.options.mapView;!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement?(r.call(n),s&&this.model.get("allowWheelOnFullscreen")&&s.options.map.set("scrollwheel",!0)):i.call(t)},render:function(){var e=this.$el,t=_.extend(this.options);return e.html(this.options.template(t)),this}}),Map.BASE_URL="/api/v1/map",Map.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",LayerDefinition.layerDefFromSubLayers=function(e){if(!e||e.length===undefined)throw new Error("sublayers should be an array");var t={version:"1.0.0",stat_tag:"API",layers:[]};for(var n=0;n<e.length;++n)t.layers.push({type:"cartodb",options:e[n]});return t},Map.prototype={isCORSSupported:function(){return"withCredentials"in new XMLHttpRequest},isBtoaSupported:function(){return typeof window["btoa"]=="function"},getLayerCount:function(){return this.layers.length},_encodeBase64Native:function(e){return btoa(e)},getLayerIndexByNumber:function(e){var t={},n=0;for(var r=0;r<this.layers.length;++r){var i=this.layers[r];t[r]=n,i.options&&!i.options.hidden&&++n}return t[e]},getLayerNumberByIndex:function(e){var t=[];for(var n=0;n<this.layers.length;++n){var r=this.layers[n];r.options&&!r.options.hidden&&t.push(n)}return e>=t.length?-1:+t[e]},visibleLayers:function(){var e=[];for(var t=0;t<this.layers.length;++t){var n=this.layers[t];n.options.hidden||e.push(n)}return e},_encodeBase64:function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n,r,i,s,o,u,a,f,l=0,c=0,h="",p=[];if(!e)return e;do n=e.charCodeAt(l++),r=e.charCodeAt(l++),i=e.charCodeAt(l++),f=n<<16|r<<8|i,s=f>>18&63,o=f>>12&63,u=f>>6&63,a=f&63,p[c++]=t.charAt(s)+t.charAt(o)+t.charAt(u)+t.charAt(a);while(l<e.length);h=p.join("");var d=e.length%3;return(d?h.slice(0,d-3):h)+"===".slice(d||3)},_array2hex:function(e){var t=[];for(var n=0;n<e.length;++n)t.push(String.fromCharCode(e[n]+128));return this.options.btoa(t.join(""))},getLayerToken:function(e){function n(e,n){var r;while(r=t._layerTokenQueue.pop())r(e,n)}var t=this;clearTimeout(this._timeout),this._queue.push(n),this._layerTokenQueue.push(e),this._timeout=setTimeout(function(){t._getLayerToken(n)},4)},_requestFinished:function(){var e=this;this._waiting=!1,this.lastTimeUpdated=(new Date).getTime(),clearTimeout(this._refreshTimer),this._refreshTimer=setTimeout(function(){e.invalidate()},this.options.refreshTime||72e5);if(this._queue.length){var t=this._queue[this._queue.length-1];this._getLayerToken(t)}},_requestPOST:function(e,t){var n=this,r=this.options.ajax,i=cartodb.core.Profiler.metric("cartodb-js.layergroup.post.time").start();r({crossOrigin:!0,type:"POST",method:"POST",dataType:"json",contentType:"application/json",url:this._tilerHost()+this.endPoint+(e.length?"?"+e.join("&"):""),data:JSON.stringify(this.toJSON()),success:function(e){i.end(),0===n._queue.length&&t(e),n._requestFinished()},error:function(e){i.end(),cartodb.core.Profiler.metric("cartodb-js.layergroup.post.error").inc();var r={errors:["unknow error"]};e.status===0&&(r={errors:["connection error"]});try{r=JSON.parse(e.responseText)}catch(s){}0===n._queue.length&&t(null,r),n._requestFinished()}})},_getCompressor:function(e){var t=this;return this.options.compressor?this.options.compressor:(e=e||JSON.stringify(this.toJSON()),!this.options.force_compress&&e.length<this.options.MAX_GET_SIZE?function(e,t,n){n("config="+encodeURIComponent(e))}:function(e,n,r){e=JSON.stringify({config:e}),LZMA.compress(e,n,function(e){r("lzma="+encodeURIComponent(t._array2hex(e)))})})},_requestGET:function(e,t){var n=this,r=this.options.ajax,i=JSON.stringify(this.toJSON()),s=this._getCompressor(i),o=n.JSONPendPoint||n.endPoint;s(i,3,function(i){e.push(i);var s=cartodb.core.Profiler.metric("cartodb-js.layergroup.get.time").start(),u=n.options.dynamic_cdn?n._host():n._tilerHost();r({dataType:"jsonp",url:u+o+"?"+e.join("&"),jsonpCallback:n.options.instanciateCallback,cache:!!n.options.instanciateCallback,success:function(e){s.end(),0===n._queue.length&&(e.error?(cartodb.core.Profiler.metric("cartodb-js.layergroup.get.error").inc(),t(null,e.error)):t(e)),n._requestFinished()},error:function(e){s.end(),cartodb.core.Profiler.metric("cartodb-js.layergroup.get.error").inc();var r={errors:["unknow error"]};try{r=JSON.parse(xhr.responseText)}catch(i){}0===n._queue.length&&t(null,r),n._requestFinished()}})})},_getLayerToken:function(e){var t=this,n=[];e=e||function(){};if(this._waiting)return this;this._queue=[];if(!this.named_map&&this.visibleLayers().length===0){e(null);return}var r=this.options.extra_params||{},i=this.options.map_key||this.options.api_key||r.map_key||r.api_key;i&&n.push("map_key="+i);if(r.auth_token)if(_.isArray(r.auth_token))for(var s=0,o=r.auth_token.length;s<o;s++)n.push("auth_token[]="+r.auth_token[s]);else n.push("auth_token="+r.auth_token);this.stat_tag&&n.push("stat_tag="+this.stat_tag),this._waiting=!0;var u=null;return this._usePOST()?u=this._requestPOST:u=this._requestGET,u.call(this,n,e),this},_usePOST:function(){if(this.options.cors){if(this.options.force_cors)return!0;var e=JSON.stringify(this.toJSON());if(e.length<this.options.MAX_GET_SIZE)return!1}return!1},getLayer:function(e){return _.clone(this.layers[e])},invalidate:function(){this.layerToken=null,this.urls=null,this.onLayerDefinitionUpdated()},setLayer:function(e,t){if(e<this.getLayerCount()&&e>=0){if(t.options.hidden){var n=this.interactionEnabled[e];n&&(t.interaction=!0,this.setInteraction(e,!1))}else this.layers[e].interaction&&(this.setInteraction(e,!0),delete this.layers[e].interaction);this.layers[e]=_.clone(t)}return this.invalidate(),this},getTiles:function(e){var t=this;return t.layerToken?(e&&e(t._layerGroupTiles(t.layerToken,t.options.extra_params)),this):(this.getLayerToken(function(n,r){if(n){t.layerToken=n.layergroupid;if(n.cdn_url){var i=t.options.cdn_url=t.options.cdn_url||{};i.http=n.cdn_url.http||i.http,i.https=n.cdn_url.https||i.https}t.urls=t._layerGroupTiles(n.layergroupid,t.options.extra_params),e&&e(t.urls)}else{if(t.visibleLayers().length===0){e&&e({tiles:[Map.EMPTY_GIF],grids:[]});return}e&&e(null,r)}}),this)},isHttps:function(){return this.options.tiler_protocol==="https"},_layerGroupTiles:function(e,t){var n=this.options.subdomains||["0","1","2","3"];this.isHttps()&&(n=[null]);var r="/{z}/{x}/{y}",i=[],s=[],o=this._encodeParams(t,this.options.pngParams);for(var u=0;u<n.length;++u){var a=n[u],f=this._host(a)+Map.BASE_URL+"/"+e;s.push(f+r+".png"+(o?"?"+o:""));var l=this._encodeParams(t,this.options.gridParams);for(var c=0;c<this.layers.length;++c)i[c]=i[c]||[],i[c].push(f+"/"+c+r+".grid.json"+(l?"?"+l:""))}return{tiles:s,grids:i}},_cleanInteractivity:function(e){if(!e)return;typeof e=="string"&&(e=e.split(","));for(var t=0;t<e.length;++t)e[t]=e[t].replace(/ /g,"");return e},onLayerDefinitionUpdated:function(){},setSilent:function(e){this.silent=e},_definitionUpdated:function(){if(this.silent)return;this.invalidate()},_tileJSONfromTiles:function(e,t,n){function i(e){var t=[];for(var n=0;n<e.length;++n)t.push(e[n].replace("{s}",r[n%r.length]));return t}n=n||{};var r=n.subdomains||["0","1","2","3"];return{tilejson:"2.0.0",scheme:"xyz",grids:i(t.grids[e]),tiles:i(t.tiles),formatter:function(e,t){return t}}},getTileJSON:function(e,t){e=e==undefined?0:e;var n=this;this.getTiles(function(r){if(!r){t(null);return}t&&t(n._tileJSONfromTiles(e,r))})},_encodeParams:function(e,t){if(!e)return"";var n=[];t=t||_.keys(e);for(var r in t){var i=t[r],s=e[i];if(s)if(_.isArray(s))for(var o=0,u=s.length;o<u;o++)n.push(i+"[]="+encodeURIComponent(s[o]));else{var a=encodeURIComponent(s);a=a.replace(/%7Bx%7D/g,"{x}").replace(/%7By%7D/g,"{y}").replace(/%7Bz%7D/g,"{z}"),n.push(i+"="+a)}}return n.join("&")},_tilerHost:function(){var e=this.options;return e.tiler_protocol+"://"+(e.user_name?e.user_name+".":"")+e.tiler_domain+(e.tiler_port!=""?":"+e.tiler_port:"")},_host:function(e){var t=this.options;if(t.no_cdn)return this._tilerHost();var n=t.tiler_protocol+"://";e&&(n+=e+".");var r=t.cdn_url||cdb.CDB_HOST;if(!r.http&&!r.https)throw new Error("cdn_host should contain http and/or https entries");return n+=r[t.tiler_protocol]+"/"+t.user_name,n},getTooltipData:function(e){return this.layers[e].tooltip},getInfowindowData:function(e){var t,n=this.layers[e].infowindow;return!n&&this.options.layer_definition&&(t=this.options.layer_definition.layers[e])&&(n=t.infowindow),n&&n.fields&&n.fields.length>0?n:null},containInfowindow:function(){var e=this.options.layer_definition.layers;for(var t=0;t<e.length;++t){var n=e[t].infowindow;if(n&&n.fields&&n.fields.length>0)return!0}return!1},containTooltip:function(){var e=this.options.layer_definition.layers;for(var t=0;t<e.length;++t){var n=e[t].tooltip;if(n&&n.fields&&n.fields.length)return!0}return!1},getSubLayer:function(e){var t=this.layers[e];return t.sub=t.sub||new SubLayer(this,e),t.sub},getSubLayerCount:function(){return this.getLayerCount()},getSubLayers:function(){var e=[];for(var t=0;t<this.getSubLayerCount();++t)e.push(this.getSubLayer(t));return e}},NamedMap.prototype=_.extend({},Map.prototype,{setAuthToken:function(e){if(!this.isHttps())throw new Error("https must be used when auth_token is set");return this.options.extra_params=this.options.extra_params||{},this.options.extra_params.auth_token=e,this.invalidate(),this},setParams:function(e,t){var n;arguments.length===2?(n={},n[e]=t):n=e,this.named_map.params||(this.named_map.params={});for(var r in n)n[r]===undefined||n[r]===null?delete this.named_map.params[r]:this.named_map.params[r]=n[r];return this.invalidate(),this},toJSON:function(){var e=this.named_map.params||{};for(var t=0;t<this.layers.length;++t){var n=this.layers[t];e["layer"+t]=n.options.hidden?0:1}return e},containInfowindow:function(){var e=this.layers||[];for(var t=0;t<e.length;++t){var n=e[t].infowindow;if(n&&n.fields&&n.fields.length>0)return!0}return!1},containTooltip:function(){var e=this.layers||[];for(var t=0;t<e.length;++t){var n=e[t].tooltip;if(n)return!0}return!1},_attributesUrl:function(e,t){var n=this.options.dynamic_cdn?this._host():this._tilerHost(),r=[n,Map.BASE_URL.slice(1),this.layerToken,e,"attributes",t].join("/"),i=this.options.extra_params||{},s=i.auth_token;if(s)if(_.isArray(s)){var o=[];for(var u=0,a=s.length;u<a;u++)o.push("auth_token[]="+s[u]);r+="?"+o.join("&")}else r+="?auth_token="+s;return r},fetchAttributes:function(e,t,n,r){var i=this.options.ajax,s=cartodb.core.Profiler.metric("cartodb-js.named_map.attributes.time").start();i({dataType:"jsonp",url:this._attributesUrl(e,t),jsonpCallback:"_cdbi_layer_attributes",cache:!0,success:function(e){s.end(),r(e)},error:function(e){s.end(),cartodb.core.Profiler.metric("cartodb-js.named_map.attributes.error").inc(),r(null)}})},setSQL:function(e){throw new Error("SQL is read-only in NamedMaps")},setCartoCSS:function(e){throw new Error("cartocss is read-only in NamedMaps")},getCartoCSS:function(){throw new Error("cartocss can't be accessed in NamedMaps")},getSQL:function(){throw new Error("SQL can't be accessed in NamedMaps")},setLayer:function(e,t){var n={sql:1,cartocss:1,interactivity:1};for(var r in t.options)if(r in n)throw delete t.options[r],new Error(r+" is read-only in NamedMaps");return Map.prototype.setLayer.call(this,e,t)},removeLayer:function(e){throw new Error("sublayers are read-only in Named Maps")},createSubLayer:function(e,t){throw new Error("sublayers are read-only in Named Maps")},addLayer:function(e,t){throw new Error("sublayers are read-only in Named Maps")},getLayerIndexByNumber:function(e){return+e}}),LayerDefinition.prototype=_.extend({},Map.prototype,{setLayerDefinition:function(e,t){t=t||{},this.version=e.version||"1.0.0",this.stat_tag=e.stat_tag,this.layers=_.clone(e.layers),t.silent||this._definitionUpdated()},toJSON:function(){var e={};e.version=this.version,this.stat_tag&&(e.stat_tag=this.stat_tag),e.layers=[];var t=this.visibleLayers();for(var n=0;n<t.length;++n){var r=t[n];e.layers.push({type:"cartodb",options:{sql:r.options.sql,cartocss:r.options.cartocss,cartocss_version:r.options.cartocss_version||"2.1.0",interactivity:this._cleanInteractivity(r.options.interactivity)}})}return e},removeLayer:function(e){return e<this.getLayerCount()&&e>=0&&(this.layers.splice(e,1),this.interactionEnabled.splice(e,1),this._reorderSubLayers(),this.invalidate()),this},_reorderSubLayers:function(){for(var e=0;e<this.layers.length;++e){var t=this.layers[e];t.sub&&t.sub._setPosition(e)}},addLayer:function(e,t){t=t===undefined?this.getLayerCount():t;if(t<=this.getLayerCount()&&t>=0){if(!e.sql||!e.cartocss)throw new Error("layer definition should contain at least a sql and a cartocss");this.layers.splice(t,0,{type:"cartodb",options:e}),this._definitionUpdated()}return this},setInteractivity:function(e,t){t===undefined&&(t=e,e=0);if(e>=this.getLayerCount()&&e<0)throw new Error("layer does not exist");typeof t=="string"&&(t=t.split(","));for(var n=0;n<t.length;++n)t[n]=t[n].replace(/ /g,"");return this.layers[e].options.interactivity=t,this._definitionUpdated(),this},setQuery:function(e,t){t===undefined&&(t=e,e=0),this.layers[e].options.sql=t,this._definitionUpdated()},getQuery:function(e){return e=e||0,this.layers[e].options.sql},setCartoCSS:function(e,t,n){n===undefined&&(n=t,t=e,e=0),n=n||cartodb.CARTOCSS_DEFAULT_VERSION,this.layers[e].options.cartocss=t,this.layers[e].options.cartocss_version=n,this._definitionUpdated()},createSubLayer:function(e,t){return this.addLayer(e),this.getSubLayer(this.getLayerCount()-1)},_getSqlApi:function(e){e=e||{};var t=e.sql_api_port,n=e.sql_api_domain+(t?":"+t:""),r=e.sql_api_protocol,i="v1";n.indexOf("cartodb.com")!==-1&&(n="cartodb.com",i="v2");var s=new cartodb.SQL({user:e.user_name,protocol:r,host:n,version:i});return s},fetchAttributes:function(e,t,n,r){var i=this.getLayer(e),s=this._getSqlApi(this.options);n=_.map(n,function(e){return'"'+e+'"'}).join(",");var o=cartodb.core.Profiler.metric("cartodb-js.layergroup.attributes.time").start();s.execute("select {{{ fields }}} from ({{{ sql }}}) as _cartodbjs_alias where cartodb_id = {{{ cartodb_id }}}",{fields:n,cartodb_id:t,sql:i.options.sql},{cache:!0,jsonpCallback:"_cdbi_layer_attributes",jsonp:!0}).done(function(e){o.end();if(e.rows.length===0){r(null);return}r(e.rows[0])}).error(function(){o.end(),cartodb.core.Profiler.metric("cartodb-js.layergroup.attributes.error").inc(),r(null)})}}),SubLayer.prototype={remove:function(){this._check(),this._parent.removeLayer(this._position),this._unbindInteraction(),this._added=!1},toggle:function(){return this.get("hidden")?this.show():this.hide(),!this.get("hidden")},show:function(){this.get("hidden")&&this.set({hidden:!1})},hide:function(){this.get("hidden")||this.set({hidden:!0})},setSQL:function(e){return this.set({sql:e})},setCartoCSS:function(e){return this.set({cartocss:e})},setInteractivity:function(e){return this.set({interactivity:e})},getSQL:function(){return this.get("sql")},getCartoCSS:function(){return this.get("cartocss")},setInteraction:function(e){this._parent.setInteraction(this._position,e)},get:function(e){this._check();var t=this._parent.getLayer(this._position);return t.options[e]},set:function(e){this._check();var t=this._parent.getLayer(this._position),n=t.options;for(var r in e)n[r]=e[r];return this._parent.setLayer(this._position,t),this},unset:function(e){var t=this._parent.getLayer(this._position);delete t.options[e],this._parent.setLayer(this._position,t)},_check:function(){if(!this._added)throw"sublayer was removed"},_unbindInteraction:function(){if(!this._parent.off)return;this._parent.off(null,null,this)},_bindInteraction:function(){if(!this._parent.on)return;var e=this,t=function(t,n){n=n||t,e._parent.on(t,function(){var t=Array.prototype.slice.call(arguments);parseInt(t[t.length-1],10)==e._position&&e.trigger.apply(e,[n].concat(t))},e)};t("featureOver"),t("featureOut"),t("featureClick"),t("layermouseover","mouseover"),t("layermouseout","mouseout")},_setPosition:function(e){this._position=e}},_.extend(SubLayer.prototype,Backbone.Events),cartodb._makeCRCTable=function(){var e,t=[];for(var n=0;n<256;++n){e=n;for(var r=0;r<8;++r)e=e&1?3988292384^e>>>1:e>>>1;t[n]=e}return t},cartodb.crc32=function(e){var t=cartodb._crcTable||(cartodb._crcTable=cartodb._makeCRCTable()),n=-1;for(var r=0,i=e.length;r<i;++r)n=n>>>8^t[(n^e.charCodeAt(r))&255];return(n^-1)>>>0},cartodb.uniqueCallbackName=function(e){return cartodb._callback_c=cartodb._callback_c||0,++cartodb._callback_c,cartodb.crc32(e)+"_"+cartodb._callback_c},CartoDBLayerCommon.prototype={show:function(){this.setOpacity(this.options.previous_opacity===undefined?.99:this.options.previous_opacity),delete this.options.previous_opacity,this._interactionDisabled=!1,this.visible=!0},hide:function(){this.options.previous_opacity==undefined&&(this.options.previous_opacity=this.options.opacity),this.setOpacity(0),this._interactionDisabled=!0,this.visible=!1},toggle:function(){return this.isVisible()?this.hide():this.show(),this.isVisible()},isVisible:function(){return this.visible},setInteraction:function(e,t){t==undefined&&(t=e,e=0);var n;this.interactionEnabled[e]=t;if(!t)n=this.interaction[e],n&&(n.remove(),this.interaction[e]=null);else if(this.urls){var r=this.getLayerIndexByNumber(+e),i=this._tileJSONfromTiles(r,this.urls);n=this.interaction[e],n&&n.remove();var s=this;this.interaction[e]=this.interactionClass().map(this.options.map).tilejson(i).on("on",function(t){if(s._interactionDisabled)return;t.layer=+e,s._manageOnEvents(s.options.map,t)}).on("off",function(t){if(s._interactionDisabled)return;t=t||{},t.layer=+e,s._manageOffEvents(s.options.map,t)})}return this},setOptions:function(e){if(typeof e!="object"||e.length)throw new Error(e+" options must be an object");_.extend(this.options,e);var e=this.options;this.options.query=this.options.query||"select * from "+this.options.table_name,this.options.query_wrapper&&(this.options.query=_.template(this.options.query_wrapper)({sql:this.options.query})),this.setSilent(!0),e.interaction&&this.setInteraction(e.interaction),e.opacity&&this.setOpacity(e.opacity),e.query&&this.setQuery(e.query.replace(/\{\{table_name\}\}/g,this.options.table_name)),e.tile_style&&this.setCartoCSS(e.tile_style.replace(new RegExp(e.table_name,"g"),"layer0")),e.cartocss&&this.setCartoCSS(e.cartocss),e.interactivity&&this.setInteractivity(e.interactivity),e.visible?this.show():this.hide(),this.setSilent(!1),this._definitionUpdated()},_getLayerDefinition:function(){var e={},t=this.options,n,r,i;n=t.query||"select * from "+t.table_name,t.query_wrapper&&(n=_.template(t.query_wrapper)({sql:n})),r=t.tile_style,i=t.cartocss_version||"2.1.0";for(var s in t.extra_params){var o=t.extra_params[s];e[s]=o.replace?o.replace(/\{\{table_name\}\}/g,t.table_name):o}return n=n.replace(/\{\{table_name\}\}/g,t.table_name),r=r.replace(/\{\{table_name\}\}/g,t.table_name),r=r.replace(new RegExp(t.table_name,"g"),"layer0"),{sql:n,cartocss:r,cartocss_version:i,params:e,interactivity:t.interactivity}},error:function(e){},tilesOk:function(){},_clearInteraction:function(){for(var e in this.interactionEnabled)this.interactionEnabled.hasOwnProperty(e)&&this.interactionEnabled[e]&&this.setInteraction(e,!1)},_reloadInteraction:function(){for(var e in this.interactionEnabled)this.interactionEnabled.hasOwnProperty(e)&&this.interactionEnabled[e]&&(this.setInteraction(e,!1),this.setInteraction(e,!0))},_checkTiles:function(){var e={z:4,x:6,y:6},t=this,n=new Image,r=this._tileJSON();getTiles(function(n){var r=n.tiles[0].replace(/\{z\}/g,e.z).replace(/\{x\}/g,e.x).replace(/\{y\}/g,e.y);this.options.ajax({method:"get",url:r,crossDomain:!0,success:function(){t.tilesOk(),clearTimeout(i)},error:function(e,n,r){clearTimeout(i),t.error(e.responseText&&JSON.parse(e.responseText))}})});var i=setTimeout(function(){clearTimeout(i),t.error("tile timeout")},3e4)}},cdb.geo.common={},cdb.geo.common.CartoDBLogo={isWadusAdded:function(e,t){var n=[],r=new RegExp("\\b"+t+"\\b"),i=e.getElementsByTagName("*");for(var s=0,o=i.length;s<o;s++)r.test(i[s].className)&&n.push(i[s]);return n.length>0},isRetinaBrowser:function(){return"devicePixelRatio"in window&&window.devicePixelRatio>1||"matchMedia"in window&&window.matchMedia("(min-resolution:144dpi)")&&window.matchMedia("(min-resolution:144dpi)").matches},addWadus:function(e,t,n){var r=this;setTimeout(function(){if(!r.isWadusAdded(n,"cartodb-logo")){var t=document.createElement("div"),i=r.isRetinaBrowser();t.setAttribute("class","cartodb-logo"),t.setAttribute("style","position:absolute; bottom:0; left:0; display:block; border:none; z-index:1000000;");var s=location.protocol.indexOf("https")===-1?"http":"https",o=cdb.config.get("cartodb_logo_link");t.innerHTML="<a href='"+o+"' target='_blank'><img width='71' height='29' src='"+s+"://cartodb.s3.amazonaws.com/static/new_logo"+(i?"@2x":"")+".png' style='position:absolute; bottom:"+(e.bottom||0)+"px; left:"+(e.left||0)+"px; display:block; width:71px!important; height:29px!important; border:none; outline:none;' alt='CartoDB' title='CartoDB' />",n.appendChild(t)}},t||0)}},function(){var e=function(e,t,n){this.leafletLayer=t,this.leafletMap=n,this.model=e,this.model.bind("change",this._modelUpdated,this),this.type=e.get("type")||e.get("kind"),this.type=this.type.toLowerCase()};_.extend(e.prototype,Backbone.Events),_.extend(e.prototype,{remove:function(){this.leafletMap.removeLayer(this.leafletLayer),this.model.unbind(null,null,this),this.unbind()},reload:function(){this.leafletLayer.redraw()}}),cdb.geo.LeafLetLayerView=e}(),function(){if(typeof L=="undefined")return;var e=L.Class.extend({includes:L.Mixin.Events,initialize:function(e,t){cdb.geo.LeafLetLayerView.call(this,e,this,t)},onAdd:function(){this.redraw()},onRemove:function(){var e=this.leafletMap.getContainer();e.style.background="none"},_modelUpdated:function(){this.redraw()},redraw:function(){var e=this.leafletMap.getContainer();e.style.backgroundColor=this.model.get("color")||"#FFF";if(this.model.get("image")){var t="transparent url("+this.model.get("image")+") repeat center center";e.style.background=t}}});_.extend(e.prototype,cdb.geo.LeafLetLayerView.prototype),cdb.geo.LeafLetPlainLayerView=e}(),function(){if(typeof L=="undefined")return;var e=L.TileLayer.extend({initialize:function(e,t){L.TileLayer.prototype.initialize.call(this,e.get("urlTemplate"),{tms:e.get("tms"),attribution:e.get("attribution"),minZoom:e.get("minZomm"),maxZoom:e.get("maxZoom"),subdomains:e.get("subdomains")||"abc",errorTileUrl:e.get("errorTileUrl"),opacity:e.get("opacity")}),cdb.geo.LeafLetLayerView.call(this,e,this,t)}});_.extend(e.prototype,cdb.geo.LeafLetLayerView.prototype,{_modelUpdated:function(){_.defaults(this.leafletLayer.options,_.clone(this.model.attributes)),this.leafletLayer.options.subdomains=this.model.get("subdomains")||"abc",this.leafletLayer.options.attribution=this.model.get("attribution"),this.leafletLayer.options.maxZoom=this.model.get("maxZoom"),this.leafletLayer.options.minZoom=this.model.get("minZoom"),this.leafletLayer.setUrl(this.model.get("urlTemplate"))}}),cdb.geo.LeafLetTiledLayerView=e}(),function(){if(typeof L=="undefined")return;var e=L.TileLayer.WMS.extend({initialize:function(e,t){L.TileLayer.WMS.prototype.initialize.call(this,e.get("urlTemplate"),{attribution:e.get("attribution"),layers:e.get("layers"),format:e.get("format"),transparent:e.get("transparent"),minZoom:e.get("minZomm"),maxZoom:e.get("maxZoom"),subdomains:e.get("subdomains")||"abc",errorTileUrl:e.get("errorTileUrl"),opacity:e.get("opacity")}),cdb.geo.LeafLetLayerView.call(this,e,this,t)}});_.extend(e.prototype,cdb.geo.LeafLetLayerView.prototype,{_modelUpdated:function(){_.defaults(this.leafletLayer.options,_.clone(this.model.attributes)),this.leafletLayer.setUrl(this.model.get("urlTemplate"))}}),cdb.geo.LeafLetWMSLayerView=e}(),function(){function e(e){var t=e.extend({includes:[cdb.geo.LeafLetLayerView.prototype,Backbone.Events],initialize:function(t,n){var r=this,i=[];t.attributes.attribution=cdb.config.get("cartodb_attributions");var s=_.clone(t.attributes);s.map=n;var o=s.featureOver,u=s.featureOut,a=s.featureClick,f,l=-1;s.featureOver=function(e,t,n,s,u){i[u]||r.trigger("layerenter",e,t,n,s,u),i[u]=1,o&&o.apply(this,arguments),r.featureOver&&r.featureOver.apply(r,arguments),e.timeStamp===f&&clearTimeout(l),l=setTimeout(function(){r.trigger("mouseover",e,t,n,s,u),r.trigger("layermouseover",e,t,n,s,u)},0),f=e.timeStamp},s.featureOut=function(e,t){i[t]&&r.trigger("layermouseout",t),i[t]=0,_.any(i)||r.trigger("mouseout"),u&&u.apply(this,arguments),r.featureOut&&r.featureOut.apply(r,arguments)},s.featureClick=_.debounce(function(){a&&a.apply(r,arguments),r.featureClick&&r.featureClick.apply(r,arguments)},10),e.prototype.initialize.call(this,s),cdb.geo.LeafLetLayerView.call(this,t,this,n)},featureOver:function(e,t,n,r,i){this.trigger("featureOver",e,[t.lat,t.lng],n,r,i)},featureOut:function(e,t){this.trigger("featureOut",e,t)},featureClick
    :function(e,t,n,r,i){this.trigger("featureClick",e,[t.lat,t.lng],n,r,i)},error:function(e){this.trigger("error",e?e.errors:"unknown error"),this.model.trigger("error",e?e.errors:"unknown error")},ok:function(e){this.model.trigger("tileOk")},onLayerDefinitionUpdated:function(){this.__update()}});return t}if(typeof L=="undefined")return;L.CartoDBGroupLayerBase=L.TileLayer.extend({interactionClass:wax.leaf.interaction,includes:[cdb.geo.LeafLetLayerView.prototype,CartoDBLayerCommon.prototype],options:{opacity:.99,attribution:"CartoDB",debug:!1,visible:!0,added:!1,tiler_domain:"cartodb.com",tiler_port:"80",tiler_protocol:"http",sql_api_domain:"cartodb.com",sql_api_port:"80",sql_api_protocol:"http",maxZoom:30,extra_params:{},cdn_url:null,subdomains:null},initialize:function(e){e=e||{},L.Util.setOptions(this,e);if(!e.layer_definition&&!e.sublayers)throw new Error("cartodb-leaflet needs at least the layer_definition or sublayer list");e.layer_definition||(this.options.layer_definition=LayerDefinition.layerDefFromSubLayers(e.sublayers)),LayerDefinition.call(this,this.options.layer_definition,this.options),this.fire=this.trigger,CartoDBLayerCommon.call(this),L.TileLayer.prototype.initialize.call(this),this.interaction=[],this.addProfiling()},addProfiling:function(){this.bind("tileloadstart",function(e){var t=this.tileStats||(this.tileStats={});t[e.tile.src]=cartodb.core.Profiler.metric("cartodb-js.tile.png.load.time").start()});var e=function(e){var t=this.tileStats&&this.tileStats[e.tile.src];t&&t.end()};this.bind("tileload",e),this.bind("tileerror",function(t){cartodb.core.Profiler.metric("cartodb-js.tile.png.error").inc(),e(t)})},getTileUrl:function(e){var t="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this._adjustTilePoint(e);var n=[t];this.tilejson&&(n=this.tilejson.tiles);var r=(e.x+e.y)%n.length;return L.Util.template(n[r],L.Util.extend({z:this._getZoomForUrl(),x:e.x,y:e.y},this.options))},setOpacity:function(e){if(isNaN(e)||e>1||e<0)throw new Error(e+" is not a valid value");this.options.opacity=Math.min(e,.99),this.options.visible&&(L.TileLayer.prototype.setOpacity.call(this,this.options.opacity),this.fire("updated"))},onAdd:function(e){var t=this;this.options.map=e,this.options.cartodb_logo!=0&&cdb.geo.common.CartoDBLogo.addWadus({left:8,bottom:8},0,e._container),this.__update(function(){var n=L.stamp(t);if(!e._layers[n])return;L.TileLayer.prototype.onAdd.call(t,e),t.fire("added"),t.options.added=!0})},onRemove:function(e){this.options.added&&(this.options.added=!1,L.TileLayer.prototype.onRemove.call(this,e))},__update:function(e){var t=this;this.fire("updated"),this.fire("loading");var n=this.options.map;this.getTiles(function(n,r){n?(t.tilejson=n,t.setUrl(t.tilejson.tiles[0]),t._reloadInteraction(),t.ok&&t.ok(),e&&e()):(t.error&&t.error(r),e&&e())})},_checkLayer:function(){if(!this.options.added)throw new Error("the layer is not still added to the map")},setAttribution:function(e){this._checkLayer(),this.map.attributionControl.removeAttribution(this.options.attribution),this.options.attribution=e,this.map.attributionControl.addAttribution(this.options.attribution),this.options.attribution=this.options.attribution,this.tilejson.attribution=this.options.attribution,this.fire("updated")},_manageOnEvents:function(e,t){var n=this._findPos(e,t),r=e.layerPointToLatLng(n),i=t.e.type.toLowerCase(),s=e.layerPointToContainerPoint(n);switch(i){case"mousemove":if(this.options.featureOver)return this.options.featureOver(t.e,r,s,t.data,t.layer);break;case"click":case"touchend":case"mspointerup":this.options.featureClick&&this.options.featureClick(t.e,r,s,t.data,t.layer);break;default:}},_manageOffEvents:function(e,t){if(this.options.featureOut)return this.options.featureOut&&this.options.featureOut(t.e,t.layer)},_findPos:function(e,t){var n=0,r=0,i=e.getContainer(),s,o;t.e.changedTouches&&t.e.changedTouches.length>0?(s=t.e.changedTouches[0].clientX+window.scrollX,o=t.e.changedTouches[0].clientY+window.scrollY):(s=t.e.clientX,o=t.e.clientY);if(i.offsetParent){do n+=i.offsetLeft,r+=i.offsetTop;while(i=i.offsetParent);return e.containerPointToLayerPoint(new L.Point(s-n,o-r))}var u=i.getBoundingClientRect(),a=new L.Point(t.e.clientX-u.left-i.clientLeft-window.scrollX,t.e.clientY-u.top-i.clientTop-window.scrollY);return e.containerPointToLayerPoint(a)}}),L.CartoDBGroupLayer=L.CartoDBGroupLayerBase.extend({includes:[LayerDefinition.prototype]}),L.NamedMap=L.CartoDBGroupLayerBase.extend({includes:[cdb.geo.LeafLetLayerView.prototype,NamedMap.prototype,CartoDBLayerCommon.prototype],initialize:function(e){e=e||{},L.Util.setOptions(this,e);if(!e.named_map&&!e.sublayers)throw new Error("cartodb-leaflet needs at least the named_map");NamedMap.call(this,this.options.named_map,this.options),this.fire=this.trigger,CartoDBLayerCommon.call(this),L.TileLayer.prototype.initialize.call(this),this.interaction=[],this.addProfiling()}}),cdb.geo.LeafLetCartoDBLayerGroupView=e(L.CartoDBGroupLayer),cdb.geo.LeafLetCartoDBNamedMapView=e(L.NamedMap)}(),function(){if(typeof L=="undefined")return;L.CartoDBLayer=L.CartoDBGroupLayer.extend({options:{query:"SELECT * FROM {{table_name}}",opacity:.99,attribution:"CartoDB",debug:!1,visible:!0,added:!1,extra_params:{},layer_definition_version:"1.0.0"},initialize:function(e){L.Util.setOptions(this,e);if(!e.table_name||!e.user_name||!e.tile_style)throw"cartodb-leaflet needs at least a CartoDB table name, user_name and tile_style";L.CartoDBGroupLayer.prototype.initialize.call(this,{layer_definition:{version:this.options.layer_definition_version,layers:[{type:"cartodb",options:this._getLayerDefinition(),infowindow:this.options.infowindow}]}}),this.setOptions(this.options)},setQuery:function(e,t){t===undefined&&(t=e,e=0),t=t||"select * from "+this.options.table_name,LayerDefinition.prototype.setQuery.call(this,e,t)},isVisible:function(){return this.visible},isAdded:function(){return this.options.added}});var e=L.CartoDBLayer.extend({initialize:function(e,t){var n=this;_.bindAll(this,"featureOut","featureOver","featureClick"),e.attributes.attribution=cdb.config.get("cartodb_attributions");var r=_.clone(e.attributes);r.map=t;var i=r.featureOver,s=r.featureOut,o=r.featureClick;r.featureOver=function(){i&&i.apply(this,arguments),n.featureOver&&n.featureOver.apply(this,arguments)},r.featureOut=function(){s&&s.apply(this,arguments),n.featureOut&&n.featureOut.apply(this,arguments)},r.featureClick=function(){o&&o.apply(this,arguments),n.featureClick&&n.featureClick.apply(r,arguments)},e.bind("change:visible",function(){n.model.get("visible")?n.show():n.hide()},this),L.CartoDBLayer.prototype.initialize.call(this,r),cdb.geo.LeafLetLayerView.call(this,e,this,t)},_modelUpdated:function(){var e=_.clone(this.model.attributes);this.leafletLayer.setOptions(e)},featureOver:function(e,t,n,r){this.trigger("featureOver",e,[t.lat,t.lng],n,r,0)},featureOut:function(e){this.trigger("featureOut",e,0)},featureClick:function(e,t,n,r){this.trigger("featureClick",e,[t.lat,t.lng],n,r,0)},reload:function(){this.model.invalidate()},error:function(e){this.trigger("error",e?e.error:"unknown error"),this.model.trigger("tileError",e?e.error:"unknown error")},tilesOk:function(e){this.model.trigger("tileOk")},includes:[cdb.geo.LeafLetLayerView.prototype,Backbone.Events]});cdb.geo.LeafLetLayerCartoDBView=e}(),function(){if(typeof L=="undefined")return;cdb.geo.LeafletMapView=cdb.geo.MapView.extend({initialize:function(){_.bindAll(this,"_addLayer","_removeLayer","_setZoom","_setCenter","_setView"),cdb.geo.MapView.prototype.initialize.call(this);var e=this,t=this.map.get("center"),n={zoomControl:!1,center:new L.LatLng(t[0],t[1]),zoom:this.map.get("zoom"),minZoom:this.map.get("minZoom"),maxZoom:this.map.get("maxZoom")};this.map.get("bounding_box_ne");if(!this.options.map_object)this.map_leaflet=new L.Map(this.el,n),this.map_leaflet.attributionControl.setPrefix(""),this.map.get("scrollwheel")==0&&this.map_leaflet.scrollWheelZoom.disable();else{this.map_leaflet=this.options.map_object,this.setElement(this.map_leaflet.getContainer());var r=e.map_leaflet.getCenter();e._setModelProperty({center:[r.lat,r.lng]}),e._setModelProperty({zoom:e.map_leaflet.getZoom()}),e.map.unset("view_bounds_sw",{silent:!0}),e.map.unset("view_bounds_ne",{silent:!0})}this.map.bind("set_view",this._setView,this),this.map.layers.bind("add",this._addLayer,this),this.map.layers.bind("remove",this._removeLayer,this),this.map.layers.bind("reset",this._addLayers,this),this.map.layers.bind("change:type",this._swicthLayerView,this),this.map.geometries.bind("add",this._addGeometry,this),this.map.geometries.bind("remove",this._removeGeometry,this),this._bindModel(),this._addLayers(),this.map_leaflet.on("layeradd",function(t){this.trigger("layeradd",t,e)},this),this.map_leaflet.on("zoomstart",function(){e.trigger("zoomstart")}),this.map_leaflet.on("click",function(t){e.trigger("click",t.originalEvent,[t.latlng.lat,t.latlng.lng])}),this.map_leaflet.on("dblclick",function(t){e.trigger("dblclick",t.originalEvent)}),this.map_leaflet.on("zoomend",function(){e._setModelProperty({zoom:e.map_leaflet.getZoom()}),e.trigger("zoomend")},this),this.map_leaflet.on("move",function(){var t=e.map_leaflet.getCenter();e._setModelProperty({center:[t.lat,t.lng]})}),this.map_leaflet.on("drag",function(){var t=e.map_leaflet.getCenter();e._setModelProperty({center:[t.lat,t.lng]}),e.trigger("drag")},this),this.map.bind("change:maxZoom",function(){L.Util.setOptions(e.map_leaflet,{maxZoom:e.map.get("maxZoom")})},this),this.map.bind("change:minZoom",function(){L.Util.setOptions(e.map_leaflet,{minZoom:e.map.get("minZoom")})},this),this.trigger("ready");var i=this.map.getViewBounds();i&&this.showBounds(i)},clean:function(){L.DomEvent.off(window,"resize",this.map_leaflet._onResize,this.map_leaflet);for(var e in this.layers){var t=this.layers[e];t.remove(),delete this.layers[e]}cdb.core.View.prototype.clean.call(this)},_setScrollWheel:function(e,t){t?this.map_leaflet.scrollWheelZoom.enable():this.map_leaflet.scrollWheelZoom.disable()},_setZoom:function(e,t){this._setView()},_setCenter:function(e,t){this._setView()},_setView:function(){this.map_leaflet.setView(this.map.get("center"),this.map.get("zoom")||0)},_addGeomToMap:function(e){var t=cdb.geo.LeafletMapView.createGeometry(e);return t.geom.addTo(this.map_leaflet),t},_removeGeomFromMap:function(e){this.map_leaflet.removeLayer(e.geom)},createLayer:function(e){return cdb.geo.LeafletMapView.createLayer(e,this.map_leaflet)},_addLayer:function(e,t,n){var r=this,i,s;s=cdb.geo.LeafletMapView.createLayer(e,this.map_leaflet);if(!s)return;var o=!n||n.index===undefined||n.index===_.size(this.layers);if(!o)for(var u in this.layers)this.map_leaflet.removeLayer(this.layers[u]);this.layers[e.cid]=s,o?(cdb.geo.LeafletMapView.addLayerToMap(s,r.map_leaflet),s.setZIndex&&s.setZIndex(e.get("order"))):this.map.layers.each(function(e){var t=r.layers[e.cid];t&&(cdb.geo.LeafletMapView.addLayerToMap(t,r.map_leaflet),t.setZIndex&&t.setZIndex(e.get("order")))});var a=e.get("attribution");if(a){var f=this.map.get("attribution")||[];_.contains(f,a)||f.push(a),this.map.set({attribution:f})}return(n==undefined||!n.silent)&&this.trigger("newLayerView",s,e,this),s},pixelToLatLon:function(e){var t=this.map_leaflet.containerPointToLatLng([e[0],e[1]]);return t},latLonToPixel:function(e){var t=this.map_leaflet.latLngToLayerPoint(new L.LatLng(e[0],e[1]));return this.map_leaflet.layerPointToContainerPoint(t)},getBounds:function(){var e=this.map_leaflet.getBounds(),t=e.getSouthWest(),n=e.getNorthEast();return[[t.lat,t.lng],[n.lat,n.lng]]},setAttribution:function(e){},getSize:function(){return this.map_leaflet.getSize()},panBy:function(e){this.map_leaflet.panBy(new L.Point(e.x,e.y))},setCursor:function(e){$(this.map_leaflet.getContainer()).css("cursor",e)},getNativeMap:function(){return this.map_leaflet},invalidateSize:function(){this.map_leaflet.invalidateSize({pan:!1}),this.map_leaflet.setView(this.map.get("center"),this.map.get("zoom")||0,{animate:!1})}},{layerTypeMap:{tiled:cdb.geo.LeafLetTiledLayerView,wms:cdb.geo.LeafLetWMSLayerView,cartodb:cdb.geo.LeafLetLayerCartoDBView,carto:cdb.geo.LeafLetLayerCartoDBView,plain:cdb.geo.LeafLetPlainLayerView,gmapsbase:cdb.geo.LeafLetPlainLayerView,layergroup:cdb.geo.LeafLetCartoDBLayerGroupView,namedmap:cdb.geo.LeafLetCartoDBNamedMapView,torque:function(e,t){return new cdb.geo.LeafLetTorqueLayer(e,t)}},createLayer:function(e,t){var n=null,r=this.layerTypeMap[e.get("type").toLowerCase()];if(r)try{n=new r(e,t)}catch(i){cdb.log.error("MAP: error creating layer"+e.get("type")+" "+i)}else cdb.log.error("MAP: "+e.get("type")+" can't be created");return n},addLayerToMap:function(e,t,n){t.addLayer(e.leafletLayer),n!==undefined&&v.setZIndex&&v.setZIndex(n)},createGeometry:function(e){return e.isPoint()?new cdb.geo.leaflet.PointView(e):new cdb.geo.leaflet.PathView(e)}}),L.Icon.Default.imagePath=function(){var e=document.getElementsByTagName("script"),t=/\/?cartodb[\-\._]?([\w\-\._]*)\.js\??/,n,r,i,s;for(n=0,r=e.length;n<r;n++){i=e[n].src,s=i.match(t);if(s){var o=i.split("/");return delete o[o.length-1],o.join("/")+"themes/css/images"}}}()}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e,t,n){this.gmapsLayer=t,this.map=this.gmapsMap=n,this.model=e,this.model.bind("change",this._update,this),this.type=e.get("type")||e.get("kind"),this.type=this.type.toLowerCase()};_.extend(e.prototype,Backbone.Events),_.extend(e.prototype,{_searchLayerIndex:function(){var e=this,t=-1;return this.gmapsMap.overlayMapTypes.forEach(function(n,r){n==e&&(t=r)}),t},remove:function(){if(!this.isBase){var e=this,t=this._searchLayerIndex();t>=0?this.gmapsMap.overlayMapTypes.removeAt(t):this.gmapsLayer.setMap&&this.gmapsLayer.setMap(null),this.model.unbind(null,null,this),this.unbind()}},refreshView:function(){var e=this;if(this.isBase){var t="_baseLayer";this.gmapsMap.setMapTypeId(null),this.gmapsMap.mapTypes.set(t,this.gmapsLayer),this.gmapsMap.setMapTypeId(t)}else{var n=this._searchLayerIndex();n>=0&&this.gmapsMap.overlayMapTypes.setAt(n,this)}},reload:function(){this.refreshView()},_update:function(){this.refreshView()}}),cdb.geo.GMapsLayerView=e}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e,t){cdb.geo.GMapsLayerView.call(this,e,null,t)};_.extend(e.prototype,cdb.geo.GMapsLayerView.prototype,{_update:function(){var e=this.model,t={roadmap:google.maps.MapTypeId.ROADMAP,gray_roadmap:google.maps.MapTypeId.ROADMAP,dark_roadmap:google.maps.MapTypeId.ROADMAP,hybrid:google.maps.MapTypeId.HYBRID,satellite:google.maps.MapTypeId.SATELLITE,terrain:google.maps.MapTypeId.TERRAIN};this.gmapsMap.setOptions({mapTypeId:t[e.get("base_type")]}),this.gmapsMap.setOptions({styles:e.get("style")||DEFAULT_MAP_STYLE})},remove:function(){}}),cdb.geo.GMapsBaseLayerView=e}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e,t){this.color=e.get("color"),cdb.geo.GMapsLayerView.call(this,e,this,t)};_.extend(e.prototype,cdb.geo.GMapsLayerView.prototype,{_update:function(){this.color=this.model.get("color"),this.refreshView()},getTile:function(e,t,n){var r=document.createElement("div");return r.style.width=this.tileSize.x,r.style.height=this.tileSize.y,r["background-color"]=this.color,r},tileSize:new google.maps.Size(256,256),maxZoom:100,minZoom:0,name:"plain layer",alt:"plain layer"}),cdb.geo.GMapsPlainLayerView=e}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e,t){cdb.geo.GMapsLayerView.call(this,e,this,t),this.tileSize=new google.maps.Size(256,256),this.opacity=1,this.isPng=!0,this.maxZoom=22,this.minZoom=0,this.name="cartodb tiled layer",google.maps.ImageMapType.call(this,this)};_.extend(e.prototype,cdb.geo.GMapsLayerView.prototype,google.maps.ImageMapType.prototype,{getTileUrl:function(e,t){var n=e.y,r=1<<t;if(n<0||n>=r)return null;var i=e.x;if(i<0||i>=r)i=(i%r+r)%r;this.model.get("tms")&&(n=r-n-1);var s=this.model.get("urlTemplate");return s.replace("{x}",i).replace("{y}",n).replace("{z}",t)}}),cdb.geo.GMapsTiledLayerView=e}(),function(){function s(e,t){var r=Math.round(t*100);r>=99?e.style.filter=n:e.style.filter="alpha(opacity="+t+");"}function o(){}function u(e){var t=function(t,n){var r=this,i=[];_.bindAll(this,"featureOut","featureOver","featureClick"),t.attributes.attribution=cdb.config.get("cartodb_attributions");var s=_.clone(t.attributes);s.map=n;var o=s.featureOver,u=s.featureOut,a=s.featureClick,f,l=-1;s.featureOver=function(e,t,n,s,u){i[u]||r.trigger("layerenter",e,t,n,s,u),i[u]=1,o&&o.apply(this,arguments),r.featureOver&&r.featureOver.apply(this,arguments),e.timeStamp===f&&clearTimeout(l),l=setTimeout(function(){r.trigger("mouseover",e,t,n,s,u),r.trigger("layermouseover",e,t,n,s,u)},0),f=e.timeStamp},s.featureOut=function(e,t){i[t]&&r.trigger("layermouseout",t),i[t]=0,_.any(i)||r.trigger("mouseout"),u&&u.apply(this,arguments),r.featureOut&&r.featureOut.apply(this,arguments)},s.featureClick=_.debounce(function(){a&&a.apply(this,arguments),r.featureClick&&r.featureClick.apply(s,arguments)},10),e.call(this,s),cdb.geo.GMapsLayerView.call(this,t,this,n)};return _.extend(t.prototype,cdb.geo.GMapsLayerView.prototype,e.prototype,{_update:function(){this.setOptions(this.model.attributes)},reload:function(){this.model.invalidate()},remove:function(){cdb.geo.GMapsLayerView.prototype.remove.call(this),this.clear()},featureOver:function(e,t,n,r,i){this.trigger("featureOver",e,[t.lat(),t.lng()],n,r,i)},featureOut:function(e,t){this.trigger("featureOut",e,t)},featureClick:function(e,t,n,r,i){this.trigger("featureClick",e,[t.lat(),t.lng()],n,r,i)},error:function(e){this.model&&(this.model.trigger("error",e?e.errors:"unknown error"),this.model.trigger("tileError",e?e.errors:"unknown error"))},ok:function(e){this.model.trigger("tileOk")},tilesOk:function(e){this.model.trigger("tileOk")},loading:function(){this.trigger("loading")},finishLoading:function(){this.trigger("load")}}),t}if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e){this.setMap(e)};e.prototype=new google.maps.OverlayView,e.prototype.draw=function(){},e.prototype.latLngToPixel=function(e){var t=this.getProjection();return t?t.fromLatLngToContainerPixel(e):[0,0]},e.prototype.pixelToLatLng=function(e){var t=this.getProjection();return t?t.fromContainerPixelToLatLng(e):[0,0]};var t={opacity:.99,attribution:"CartoDB",debug:!1,visible:!0,added:!1,tiler_domain:"cartodb.com",tiler_port:"80",tiler_protocol:"http",sql_api_domain:"cartodb.com",sql_api_port:"80",sql_api_protocol:"http",extra_params:{},cdn_url:null,subdomains:null},n="progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)",r=function(n){this.options=_.defaults(n,t),this.tiles=0,this.tilejson=null,this.interaction=[];if(!n.named_map&&!n.sublayers)throw new Error("cartodb-gmaps needs at least the named_map");this.options.cartodb_logo!=0&&cdb.geo.common.CartoDBLogo.addWadus({left:74,bottom:8},2e3,this.options.map.getDiv()),wax.g.connector.call(this,n),_.extend(this.options,n),this.projector=new e(n.map),NamedMap.call(this,this.options.named_map,this.options),CartoDBLayerCommon.call(this),this.update()},i=function(n){this.options=_.defaults(n,t),this.tiles=0,this.tilejson=null,this.interaction=[];if(!n.layer_definition&&!n.sublayers)throw new Error("cartodb-leaflet needs at least the layer_definition or sublayer list");n.layer_definition||(n.layer_definition=LayerDefinition.layerDefFromSubLayers(n.sublayers)),this.options.cartodb_logo!=0&&cdb.geo.common.CartoDBLogo.addWadus({left:74,bottom:8},2e3,this.options.map.getDiv()),wax.g.connector.call(this,n),_.extend(this.options,n),this.projector=new e(n.map),LayerDefinition.call(this,n.layer_definition,this.options),CartoDBLayerCommon.call(this),this.update()};o.prototype.setOpacity=function(e){if(isNaN(e)||e>1||e<0)throw new Error(e+" is not a valid value, should be in [0, 1] range");this.opacity=this.options.opacity=e;for(var t in this.cache){var n=this.cache[t];n.style.opacity=e,s(n,e)}},o.prototype.setAttribution=function(){},o.prototype.getTile=function(e,t,n){var r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",i=this,o="ActiveXObject"in window,u=o&&!document.addEventListener;this.options.added=!0;if(this.tilejson===null){var a=t+"/"+e.x+"/"+e.y,f=this.cache[a]=new Image(256,256);return f.src=r,f.setAttribute("gTileKey",a),f.style.opacity=this.options.opacity,f}var l=wax.g.connector.prototype.getTile.call(this,e,t,n);u&&s(l,this.options.opacity),l.style.opacity=this.options.opacity,this.tiles===0&&this.loading&&this.loading(),this.tiles++;var c=cartodb.core.Profiler.metric("cartodb-js.tile.png.load.time").start(),h=function(){c.end(),i.tiles--,i.tiles===0&&i.finishLoading&&i.finishLoading()};return l.onload=h,l.onerror=function(){cartodb.core.Profiler.metric("cartodb-js.tile.png.error").inc(),h()},l},o.prototype.onAdd=function(){},o.prototype.clear=function(){this._clearInteraction(),self.finishLoading&&self.finishLoading()},o.prototype.update=function(e){var t=this;this.loading&&this.loading(),this.getTiles(function(n,r){n?(t.tilejson=n,t.options.tiles=n.tiles,t.tiles=0,t.cache={},t._reloadInteraction(),t.refreshView(),t.ok&&t.ok(),e&&e()):t.error&&t.error(r)})},o.prototype.refreshView=function(){var e=this,t=this.options.map;t.overlayMapTypes.forEach(function(n,r){if(n==e){t.overlayMapTypes.setAt(r,e);return}})},o.prototype.onLayerDefinitionUpdated=function(){this.update()},o.prototype._checkLayer=function(){if(!this.options.added)throw new Error("the layer is not still added to the map")},o.prototype._findPos=function(e,t){var n,r;n=curtop=0;var i=e.getDiv(),s,o;t.e.changedTouches&&t.e.changedTouches.length>0?(s=t.e.changedTouches[0].clientX+window.scrollX,o=t.e.changedTouches[0].clientY+window.scrollY):(s=t.e.clientX,o=t.e.clientY);do n+=i.offsetLeft,curtop+=i.offsetTop;while(i=i.offsetParent);return new google.maps.Point(s-n,o-curtop)},o.prototype._manageOffEvents=function(e,t){if(this.options.featureOut)return this.options.featureOut&&this.options.featureOut(t.e,t.layer)},o.prototype._manageOnEvents=function(e,t){var n=this._findPos(e,t),r=this.projector.pixelToLatLng(n),i=t.e.type.toLowerCase();switch(i){case"mousemove":if(this.options.featureOver)return this.options.featureOver(t.e,r,n,t.data,t.layer);break;case"click":case"touchend":case"mspointerup":this.options.featureClick&&this.options.featureClick(t.e,r,n,t.data,t.layer);break;default:}},i.Projector=e,i.prototype=new wax.g.connector,_.extend(i.prototype,LayerDefinition.prototype,o.prototype,CartoDBLayerCommon.prototype),i.prototype.interactionClass=wax.g.interaction,r.prototype=new wax.g.connector,_.extend(r.prototype,NamedMap.prototype,o.prototype,CartoDBLayerCommon.prototype),r.prototype.interactionClass=wax.g.interaction,cdb.geo.CartoDBLayerGroupGMaps=i,cdb.geo.CartoDBNamedMapGMaps=r,cdb.geo.GMapsCartoDBLayerGroupView=u(i),cdb.geo.GMapsCartoDBNamedMapView=u(r),cdb.geo.CartoDBNamedMapGMaps=r}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e){this.setMap(e)};e.prototype=new google.maps.OverlayView,e.prototype.draw=function(){},e.prototype.latLngToPixel=function(e){var t=this.getProjection();return t?t.fromLatLngToContainerPixel(e):[0,0]},e.prototype.pixelToLatLng=function(e){var t=this.getProjection();return t?t.fromContainerPixelToLatLng(e):[0,0]};var t=function(e){var t={query:"SELECT * FROM {{table_name}}",opacity:.99,attribution:"CartoDB",opacity:1,debug:!1,visible:!0,added:!1,extra_params:{},layer_definition_version:"1.0.0"};this.options=_.defaults(e,t);if(!e.table_name||!e.user_name||!e.tile_style)throw"cartodb-gmaps needs at least a CartoDB table name, user_name and tile_style";this.options.layer_definition={version:this.options.layer_definition_version,layers:[{type:"cartodb",options:this._getLayerDefinition(),infowindow:this.options.infowindow}]},cdb.geo.CartoDBLayerGroupGMaps.call(this,this.options),this.setOptions(this.options)};_.extend(t.prototype,cdb.geo.CartoDBLayerGroupGMaps.prototype),t.prototype.setQuery=function(e,t){t===undefined&&(t=e,e=0),t=t||"select * from "+this.options.table_name,LayerDefinition.prototype.setQuery.call(this,e,t)},cdb.geo.CartoDBLayerGMaps=t;var n=function(e,t){var n=this;_.bindAll(this,"featureOut","featureOver","featureClick"),e.attributes.attribution=cdb.config.get("cartodb_attributions");var r=_.clone(e.attributes);r.map=t;var i=r.featureOver,s=r.featureOut,o=r.featureClick;r.featureOver=function(){i&&i.apply(this,arguments),n.featureOver&&n.featureOver.apply(this,arguments)},r.featureOut=function(){s&&s.apply(this,arguments),n.featureOut&&n.featureOut.apply(this,arguments)},r.featureClick=function(){o&&o.apply(this,arguments),n.featureClick&&n.featureClick.apply(r,arguments)},cdb.geo.CartoDBLayerGMaps.call(this,r),cdb.geo.GMapsLayerView.call(this,e,this,t)};cdb.geo.GMapsCartoDBLayerView=n,_.extend(n.prototype,cdb.geo.CartoDBLayerGMaps.prototype,cdb.geo.GMapsLayerView.prototype,{_update:function(){this.setOptions(this.model.attributes)},reload:function(){this.model.invalidate()},remove:function(){cdb.geo.GMapsLayerView.prototype.remove.call(this),this.clear()},featureOver:function(e,t,n,r){this.trigger("featureOver",e,[t.lat(),t.lng()],n,r,0)},featureOut:function(e){this.trigger("featureOut",e)},featureClick:function(e,t,n,r,i){this.trigger("featureClick",e,[t.lat(),t.lng()],n,r,0)},error:function(e){this.model&&(this.model.trigger("error",e?e.error:"unknown error"),this.model.trigger("tileError",e?e.error:"unknown error"))},tilesOk:function(e){this.model.trigger("tileOk")},loading:function(){this.trigger("loading")},finishLoading:function(){this.trigger("load")}})}();if(typeof google!="undefined"&&typeof google.maps!="undefined"){var DEFAULT_MAP_STYLE=[{stylers:[{saturation:-65},{gamma:1.52}]},{featureType:"administrative",stylers:[{saturation:-95},{gamma:2.26}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"simplified"},{saturation:-99},{gamma:2.22}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{saturation:-55}]}];cdb.geo.GoogleMapsMapView=cdb.geo.MapView.extend({layerTypeMap:{tiled:cdb.geo.GMapsTiledLayerView,cartodb:cdb.geo.GMapsCartoDBLayerView,carto:cdb.geo.GMapsCartoDBLayerView,plain:cdb.geo.GMapsPlainLayerView,gmapsbase:cdb.geo.GMapsBaseLayerView,layergroup:cdb.geo.GMapsCartoDBLayerGroupView,namedmap:cdb.geo.GMapsCartoDBNamedMapView,torque:function(e,t){return new cdb.geo.GMapsTorqueLayerView(e,t)},wms:cdb.geo.LeafLetWMSLayerView},initialize:function(){_.bindAll(this,"_ready"),this._isReady=!1;var e=this;cdb.geo.MapView.prototype.initialize.call(this);var t=this.map.getViewBounds();t&&this.showBounds(t);var n=this.map.get("center");if(!this.options.map_object)this.map_googlemaps=new google.maps.Map(this.el,{center:new google.maps.LatLng(n[0],n[1]),zoom:this.map.get("zoom"),minZoom:this.map.get("minZoom"),maxZoom:this.map.get("maxZoom"),disableDefaultUI:!0,scrollwheel:this.map.get("scrollwheel"),mapTypeControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"white",tilt:0}),this.map.bind("change:maxZoom",function(){e.map_googlemaps.setOptions({maxZoom:e.map.get("maxZoom")})},this),this.map.bind("change:minZoom",function(){e.map_googlemaps.setOptions({minZoom:e.map.get("minZoom")})},this);else{this.map_googlemaps=this.options.map_object,this.setElement(this.map_googlemaps.getDiv());var r=e.map_googlemaps.getCenter();e._setModelProperty({center:[r.lat(),r.lng()]}),e._setModelProperty({zoom:e.map_googlemaps.getZoom()}),e.map.unset("view_bounds_sw",{silent:!0}),e.map.unset("view_bounds_ne",{silent:!0})}this.map.geometries.bind("add",this._addGeometry,this),this.map.geometries.bind("remove",this._removeGeometry,this),this._bindModel(),this._addLayers(),google.maps.event.addListener(this.map_googlemaps,"center_changed",function(){var t=e.map_googlemaps.getCenter();e._setModelProperty({center:[t.lat(),t.lng()]})}),google.maps.event.addListener(this.map_googlemaps,"zoom_changed",function(){e._setModelProperty({zoom:e.map_googlemaps.getZoom()})}),google.maps.event.addListener(this.map_googlemaps,"click",function(t){e.trigger("click",t,[t.latLng.lat(),t.latLng.lng()])}),google.maps.event.addListener(this.map_googlemaps,"dblclick",function(t){e.trigger("dblclick",t)}),this.map.layers.bind("add",this._addLayer,this),this.map.layers.bind("remove",this._removeLayer,this),this.map.layers.bind("reset",this._addLayers,this),this.map.layers.bind("change:type",this._swicthLayerView,this),this.projector=new cdb.geo.CartoDBLayerGroupGMaps.Projector(this.map_googlemaps),this.projector.draw=this._ready},_ready:function(){this.projector.draw=function(){},this.trigger("ready"),this._isReady=!0},_setScrollWheel:function(e,t){this.map_googlemaps.setOptions({scrollwheel:t})},_setZoom:function(e,t){t=t||0,this.map_googlemaps.setZoom(t)},_setCenter:function(e,t){var n=new google.maps.LatLng(t[0],t[1]);this.map_googlemaps.setCenter(n)},createLayer:function(e){var t,n=this.layerTypeMap[e.get("type").toLowerCase()];if(n)try{t=new n(e,this.map_googlemaps)}catch(r){cdb.log.error("MAP: error creating layer"+e.get("type")+" "+r)}else cdb.log.error("MAP: "+e.get("type")+" can't be created");return t},_addLayer:function(e,t,n){n=n||{};var r=this,i,s;s=this.createLayer(e);if(!s)return;this.layers[e.cid]=s;if(s){var o=_(this.layers).filter(function(e){return!!e.getTile}).length-1,u=_.keys(this.layers).length===1||n&&n.index===0;if(u&&!n.no_base_layer){var a=s.model;a.get("type")==="GMapsBase"?s._update():(s.isBase=!0,s._update())}else o-=1,o=Math.max(0,o),s.getTile?(s.gmapsLayer||cdb.log.error("gmaps layer can't be null"),r.map_googlemaps.overlayMapTypes.setAt(o,s.gmapsLayer)):s.gmapsLayer.setMap(r.map_googlemaps);(n===undefined||!n.silent)&&this.trigger("newLayerView",s,e,this)}else cdb.log.error("layer type not supported");var f=e.get("attribution");if(f){var l=this.map.get("attribution")||[];_.contains(l,f)||l.push(f),this.map.set({attribution:l})}return s},pixelToLatLon:function(e){return this.projector.fromContainerPixelToLatLng(new google.maps.Point(e[0],e[1]))},latLonToPixel:function(e){return this.projector.latLngToPixel(new google.maps.LatLng(e[0],e[1]))},getSize:function(){return{x:this.$el.width(),y:this.$el.height()}},panBy:function(e){var t=this.map.get("center"),n=this.latLonToPixel(t);e.x+=n.x,e.y+=n.y;var r=this.projector.pixelToLatLng(e);this.map.setCenter([r.lat(),r.lng()])},getBounds:function(){if(this._isReady){var e=this.map_googlemaps.getBounds(),t=e.getSouthWest(),n=e.getNorthEast();return[[t.lat(),t.lng()],[n.lat(),n.lng()]]}return[[0,0],[0,0]]},setAttribution:function(e){var t=document.getElementById("cartodb-gmaps-attribution"),n=e.get("attribution").join(", ");t&&t.parentNode.removeChild(t);var r=this.map_googlemaps.getDiv(),i=document.createElement("div");i.setAttribute("id","cartodb-gmaps-attribution"),i.setAttribute("class","gmaps"),r.appendChild(i),i.innerHTML=n},setCursor:function(e){this.map_googlemaps.setOptions({draggableCursor:e})},_addGeomToMap:function(e){var t=cdb.geo.GoogleMapsMapView.createGeometry(e);if(t.geom.length)for(var n=0;n<t.geom.length;++n)t.geom[n].setMap(this.map_googlemaps);else t.geom.setMap(this.map_googlemaps);return t},_removeGeomFromMap:function(e){if(e.geom.length)for(var t=0;t<e.geom.length;++t)e.geom[t].setMap(null);else e.geom.setMap(null)},getNativeMap:function(){return this.map_googlemaps},invalidateSize:function(){google.maps.event.trigger(this.map_googlemaps,"resize")}},{addLayerToMap:function(e,t,n){n=n||0,e||cdb.log.error("gmaps layer can't be null"),e.getTile?t.overlayMapTypes.setAt(n,e):e.setMap(t)},createGeometry:function(e){return e.isPoint()?new cdb.geo.gmaps.PointView(e):new cdb.geo.gmaps.PathView(e)}})}cdb.ui.common.Dialog=cdb.core.View.extend({tagName:"div",className:"dialog",events:{"click .ok":"_ok","click .cancel":"_cancel","click .close":"_cancel"},default_options:{title:"title",description:"",ok_title:"Ok",cancel_title:"Cancel",width:300,height:200,clean_on_hide:!1,enter_to_confirm:!1,template_name:"common/views/dialog_base",ok_button_classes:"button green",cancel_button_classes:"",modal_type:"",modal_class:"",include_footer:!0,additionalButtons:[]},initialize:function(){_.defaults(this.options,this
    .default_options),_.bindAll(this,"render","_keydown"),$(document).bind("keydown",this._keydown),this.bind("clean",this._reClean),this.template_base=this.options.template_base?_.template(this.options.template_base):cdb.templates.getTemplate(this.options.template_name)},render:function(){var e=this.$el;return e.html(this.template_base(this.options)),e.find(".modal").css({width:this.options.width}),this.render_content&&this.$(".content").append(this.render_content()),this.options.modal_class&&this.$el.addClass(this.options.modal_class),this},_keydown:function(e){e.keyCode===27?this._cancel():e.keyCode===13&&this.options.enter_to_confirm&&this._ok()},appendToBody:function(){return $("body").append(this.render().el),this},_ok:function(e){e&&e.preventDefault(),this.ok&&this.ok(this.result),this.hide()},_cancel:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.cancel&&this.cancel(),this.hide()},hide:function(){this.$el.hide(),this.options.clean_on_hide&&this.clean()},open:function(){this.$el.show()},_reClean:function(){$(document).unbind("keydown",this._keydown)}}),cdb.ui.common.ShareDialog=cdb.ui.common.Dialog.extend({tagName:"div",className:"cartodb-share-dialog",events:{"click .ok":"_ok","click .cancel":"_cancel","click .close":"_cancel",click:"_stopPropagation",dblclick:"_stopPropagation",mousedown:"_stopPropagation"},default_options:{title:"",description:"",ok_title:"Ok",cancel_title:"Cancel",width:300,height:200,clean_on_hide:!1,enter_to_confirm:!1,template_name:"common/views/dialog_base",ok_button_classes:"button green",cancel_button_classes:"",modal_type:"",modal_class:"",include_footer:!0,additionalButtons:[]},initialize:function(){_.defaults(this.options,this.default_options),_.bindAll(this,"render","_keydown"),this.isOpen=!1;var e=this;this.options.target&&this.options.target.on("click",function(t){t.preventDefault(),t.stopPropagation(),e.open()}),$(document).bind("keydown",this._keydown),this.bind("clean",this._reClean)},_stopPropagation:function(e){e.stopPropagation()},_stripHTML:function(e,t){t=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var n=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;return!e||typeof e!="string"?"":e.replace(n,function(e,n){return t.indexOf("<"+n.toLowerCase()+">")>-1?e:""})},open:function(){var e=this;this.$el.show(0,function(){e.isOpen=!0})},hide:function(){var e=this;this.$el.hide(0,function(){e.isOpen=!1}),this.options.clean_on_hide&&this.clean()},toggle:function(){this.isOpen?this.hide():this.open()},_truncateTitle:function(e,t){return e.substr(0,t-1)+(e.length>t?"â€¦":"")},render:function(){var e=this.$el,t=this.options.title,n=this.options.description,r=this._stripHTML(this.options.description),i=this.options.share_url,s,o;this.$el.addClass(this.options.size);var u=t+": "+r,a;t&&r?a=this._truncateTitle(t+": "+r,112)+" %23map ":t?a=this._truncateTitle(t,112)+" %23map":r?a=this._truncateTitle(r,112)+" %23map":a="%23map",this.options.facebook_url?s=this.options.facebook_url:s="http://www.facebook.com/sharer.php?u="+i+"&text="+u,this.options.twitter_url?o=this.options.twitter_url:o="https://twitter.com/share?url="+i+"&text="+a;var f=_.extend(this.options,{facebook_url:s,twitter_url:o});return e.html(this.options.template(f)),e.find(".modal").css({width:this.options.width}),this.render_content&&this.$(".content").append(this.render_content()),this.options.modal_class&&this.$el.addClass(this.options.modal_class),this.options.disableLinks&&this.$el.find("a").attr("target",""),this}}),cdb.ui.common.Notification=cdb.core.View.extend({tagName:"div",className:"dialog",events:{"click .close":"hide"},default_options:{timeout:0,msg:"",hideMethod:"",duration:"normal"},initialize:function(){this.closeTimeout=-1,_.defaults(this.options,this.default_options),this.template=this.options.template?_.template(this.options.template):cdb.templates.getTemplate("common/notification"),this.$el.hide()},render:function(){var e=this.$el;return e.html(this.template(this.options)),this.render_content&&this.$(".content").append(this.render_content()),this},hide:function(e){var t=this;e&&e.preventDefault(),clearTimeout(this.closeTimeout),this.options.hideMethod!=""&&this.$el.is(":visible")?this.$el[this.options.hideMethod](this.options.duration,"swing",function(){t.$el.html(""),t.trigger("notificationDeleted"),t.remove()}):(this.$el.hide(),t.$el.html(""),t.trigger("notificationDeleted"),t.remove())},open:function(e,t){this.render(),this.$el.show(e,t),this.options.timeout&&(this.closeTimeout=setTimeout(_.bind(this.hide,this),this.options.timeout))}}),cdb.ui.common.Row=cdb.core.Model.extend({}),cdb.ui.common.TableData=Backbone.Collection.extend({model:cdb.ui.common.Row,fetched:!1,initialize:function(){var e=this;this.bind("reset",function(){e.fetched=!0})},getCell:function(e,t){var n=this.at(e);return n?n.get(t):null},isEmpty:function(){return this.length===0}}),cdb.ui.common.TableProperties=cdb.core.Model.extend({columnNames:function(){return _.map(this.get("schema"),function(e){return e[0]})},columnName:function(e){return this.columnNames()[e]}}),cdb.ui.common.RowView=cdb.core.View.extend({tagName:"tr",initialize:function(){this.model.bind("change",this.render,this),this.model.bind("destroy",this.clean,this),this.model.bind("remove",this.clean,this),this.model.bind("change",this.triggerChange,this),this.model.bind("sync",this.triggerSync,this),this.model.bind("error",this.triggerError,this),this.add_related_model(this.model),this.order=this.options.order},triggerChange:function(){this.trigger("changeRow")},triggerSync:function(){this.trigger("syncRow")},triggerError:function(){this.trigger("errorRow")},valueView:function(e,t){return t},render:function(){var e=this,t=this.model,n="",r=0,i;this.options.row_header?i='<td class="rowHeader" data-x="'+r+'">':i='<td class="EmptyRowHeader" data-x="'+r+'">';var s=e.valueView("","");s.html&&(s=s[0].outerHTML),i+=s,i+="</td>",r++,n+=i;var o=this.order||_.keys(t.attributes),u="",a=t.attributes;for(var f=0,l=o.length;f<l;++f){var c=o[f],h=a[c];if(h!==undefined){var i='<td id="cell_'+t.id+"_"+c+'" data-x="'+r+'">',s=e.valueView(c,h);s.html&&(s=s[0].outerHTML),i+=s,i+="</td>",r++,u+=i}}return n+=u,this.$el.html(n).attr("id","row_"+t.id),this},getCell:function(e){var t=e;return this.options.row_header&&++e,this.$("td:eq("+e+")")},getTableView:function(){return this.tableView}}),cdb.ui.common.Table=cdb.core.View.extend({tagName:"table",rowView:cdb.ui.common.RowView,events:{"click td":"_cellClick","dblclick td":"_cellDblClick"},default_options:{},initialize:function(){var e=this;_.defaults(this.options,this.default_options),this.dataModel=this.options.dataModel,this.rowViews=[],this.setDataSource(this.dataModel),this.model.bind("change",this.render,this),this.model.bind("change:dataSource",this.setDataSource,this),this.bind("clean",this.clear_rows,this),this.add_related_model(this.dataModel),this.add_related_model(this.model),this.model.bind("removing:row",function(){e.rowsBeingDeleted=e.rowsBeingDeleted?e.rowsBeingDeleted+1:1,e.rowDestroying()}),this.model.bind("remove:row",function(){e.rowsBeingDeleted>0&&(e.rowsBeingDeleted--,e.rowDestroyed(),e.dataModel.length==0&&e.emptyTable())})},headerView:function(e){return e[0]},setDataSource:function(e){this.dataModel&&this.dataModel.unbind(null,null,this),this.dataModel=e,this.dataModel.bind("reset",this._renderRows,this),this.dataModel.bind("error",this._renderRows,this),this.dataModel.bind("add",this.addRow,this)},_renderHeader:function(){var e=this,t=$("<thead>"),n=$("<tr>");return this.options.row_header?n.append($("<th>").append(e.headerView(["","header"]))):n.append($("<th>").append(e.headerView(["","header"]))),_(this.model.get("schema")).each(function(t){n.append($("<th>").append(e.headerView(t)))}),t.append(n),t},clear_rows:function(){this.$("tfoot").remove(),this.$("tr.noRows").remove();var e=null;while(e=this.rowViews.pop())e.unbind(null,null,this),e.clean();this.rowViews=[]},addRow:function(e,t,n){var r=this,i=new r.rowView({model:e,order:this.model.columnNames(),row_header:this.options.row_header});i.tableView=this,i.bind("clean",function(){var e=_.indexOf(r.rowViews,i);r.rowViews.splice(e,1);for(var t=e;t<r.rowViews.length;++t)r.rowViews[t].$el.attr("data-y",t)},this),i.bind("changeRow",this.rowChanged,this),i.bind("saved",this.rowSynched,this),i.bind("errorSaving",this.rowFailed,this),i.bind("saving",this.rowSaving,this),this.retrigger("saving",i),i.render();if(n&&n.index!==undefined&&n.index!=r.rowViews.length){i.$el.insertBefore(r.rowViews[n.index].$el),r.rowViews.splice(n.index,0,i);for(var s=n.index;s<r.rowViews.length;++s)r.rowViews[s].$el.attr("data-y",s)}else i.$el.attr("data-y",r.rowViews.length),r.$el.append(i.el),r.rowViews.push(i);this.trigger("createRow")},rowChanged:function(){},rowSynched:function(){},rowFailed:function(){},rowSaving:function(){},rowDestroying:function(){},rowDestroyed:function(){},emptyTable:function(){},isEmptyTable:function(){return this.dataModel.length===0&&this.dataModel.fetched},_renderRows:function(){this.clear_rows();if(!this.isEmptyTable())if(this.dataModel.fetched){var e=this;this.dataModel.each(function(t){e.addRow(t)})}else this._renderLoading();else this._renderEmpty()},_renderLoading:function(){},_renderEmpty:function(){},addEmptyTableInfo:function(){},render:function(){var e=this;return e.$el.html(e._renderHeader()),e._renderRows(),this},getCell:function(e,t){return this.options.row_header&&++t,this.rowViews[t].getCell(e)},_cellClick:function(e,t){t=t||"cellClick",e.preventDefault();var n=$(e.currentTarget||e.target),r=parseInt(n.attr("data-x"),10),i=parseInt(n.parent().attr("data-y"),10);this.trigger(t,e,n,r,i)},_cellDblClick:function(e){this._cellClick(e,"cellDblClick")}}),cdb.ui.common.Dropdown=cdb.core.View.extend({tagName:"div",className:"dropdown",events:{"click ul li a":"_fireClick"},default_options:{width:160,speedIn:150,speedOut:300,vertical_position:"down",horizontal_position:"right",tick:"right",vertical_offset:0,horizontal_offset:0},initialize:function(){_.bindAll(this,"open","hide","_handleClick","_keydown"),_.defaults(this.options,this.default_options),this.options.template_base?this.template_base=cdb.templates.getTemplate(this.options.template_base):this.options.template&&(this.template_base=this.options.template),$(this.options.target).bind({click:this._handleClick}),$(document).bind("keydown",this._keydown),this.isOpen=!1},render:function(){var e=this.$el;return e.html(this.template_base(this.options)).css({width:this.options.width}),this},_handleClick:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.isOpen?this.hide():this.open()},_keydown:function(e){e.keyCode===27&&this.hide()},hide:function(){this.isOpen=!1,this.$el.hide()},show:function(){this.$el.css({display:"block",opacity:1}),this.isOpen=!0},open:function(e,t){var n=t&&$(t)||this.options.target;this.options.target=n;var r=n[this.options.position||"offset"](),i=n.outerWidth(),s=n.outerHeight(),o=this.$el.outerWidth(),u=this.$el.outerHeight(),a=this;this.$el.css({top:r.top+parseInt(a.options.vertical_position=="up"?-u-10-a.options.vertical_offset:s+10-a.options.vertical_offset),left:r.left+parseInt(a.options.horizontal_position=="left"?a.options.horizontal_offset-15:i-o+15-a.options.horizontal_offset)}).addClass((this.options.vertical_position=="up"?"vertical_top":"vertical_bottom")+" "+(this.options.horizontal_position=="right"?"horizontal_right":"horizontal_left")+" "+"tick_"+this.options.tick),this.show(),this.isOpen=!0},_fireClick:function(e){this.trigger("optionClicked",e,this.el)}}),function(){var e={},t={_types:{},register:function(e,n){t._types[e]=n},create:function(e,n,r){var i=t._types[e];if(!i){cdb.log.error("Overlay: "+e+" does not exist");return}r.options=typeof r.options=="string"?JSON.parse(r.options):r.options,r.options=r.options||{};var s=i(r,n);return s?(s.type=e,s):!1}};cdb.vis.Overlay=t;var n={_types:{},register:function(e,t){this._types[e]=t},create:function(e,t,n){if(!e)return cdb.log.error("creating a layer without type"),null;var r=this._types[e.toLowerCase()],i={};return i.type=e,_.extend(i,n,n.options),new r(t,i)},moduleForLayer:function(e){return e.toLowerCase()==="torque"?"torque":null},modulesForLayers:function(e){var t=_(e).map(function(e){return n.moduleForLayer(e.type||e.kind)});return _.compact(_.uniq(t))}};cdb.vis.Layers=n;var r=cdb.vis.Loader={queue:[],current:undefined,_script:null,head:null,loadScript:function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.async=!0,r.head||(r.head=document.getElementsByTagName("head")[0]),setTimeout(function(){r.head.appendChild(t)},0),t},get:function(e,t){r._script?r.queue.push([e,t]):(r.current=t,r._script=r.loadScript(e+(~e.indexOf("?")?"&":"?")+"callback=vizjson"))},getPath:function(e){var t=document.getElementsByTagName("script"),n=/\/?cartodb[\-\._]?([\w\-\._]*)\.js\??/;for(i=0,len=t.length;i<len;i++){src=t[i].src,matches=src.match(n);if(matches){var r=src.split("/");return delete r[r.length-1],r.join("/")+e}}return null},loadModule:function(e){var t="cartodb.mod."+e+(cartodb.DEBUG?".uncompressed.js":".js"),n=this.getPath(t);n||cartodb.log.error("can't find cartodb.js file"),r.loadScript(n)}};window.vizjson=function(e){r.current&&r.current(e),r.head.removeChild(r._script),r._script=null;var t=r.queue.shift();t&&r.get(t[0],t[1])},cartodb.moduleLoad=function(e,t){cartodb[e]=t,cartodb.config.modules.add({name:t})};var s=cdb.core.View.extend({initialize:function(){_.bindAll(this,"loadingTiles","loadTiles","_onResize"),this.https=!1,this.overlays=[],this.moduleChecked=!1,this.layersLoading=0,this.options.mapView&&(this.mapView=this.options.mapView,this.map=this.mapView.map),window.addEventListener?window.addEventListener("orientationchange",_.bind(this.doOnOrientationChange,this)):window.attachEvent("orientationchange",this.doOnOrientationChange,this)},doOnOrientationChange:function(){},checkModules:function(e){var t=n.modulesForLayers(e);return _.every(_.map(t,function(e){return cartodb[e]!==undefined}))},loadModules:function(e,t){function u(){i.checkModules(e)&&(cdb.config.unbind("moduleLoaded",u),t())}var i=this,s=n.modulesForLayers(e);for(var o=0;o<s.length;++o)r.loadModule(s[o]);cdb.config.bind("moduleLoaded",u),_.defer(u)},_addLayers:function(e,t){for(var n=0;n<e.length;++n){var r=e[n];this.loadLayer(r,t)}},addLegends:function(e,t){this.legends=new cdb.geo.ui.StackedLegend({legends:this.createLegendView(e)}),t||this.mapView.addOverlay(this.legends)},_setLayerOptions:function(e){var t=[],t=_.map(this.getLayers().slice(1),function(e){return e.getSubLayers?e.getSubLayers():e});t=_.flatten(t);for(i=0;i<Math.min(e.sublayer_options.length,t.length);++i){var n=e.sublayer_options[i],r=t[i],s=this.legends&&this.legends.getLegendByIndex(i);s&&s[n.visible?"show":"hide"]();if(r.model&&r.model.get("type")==="torque"){if(n.visible===!1){r.model.set("visible",!1);var o=this.getOverlay("time_slider");o&&o.hide()}}else n.visible===!1&&r.hide()}},_addOverlays:function(e,t){e=_.sortBy(e,function(e){return e.order==null?1e3:e.order}),this._createOverlays(e,t)},addTimeSlider:function(e){e&&this.addOverlay({type:"time_slider",layer:e})},_setupSublayers:function(e,t){t.sublayer_options=[],_.each(e.slice(1),function(e){e.type==="layergroup"?_.each(e.options.layer_definition.layers,function(e){t.sublayer_options.push({visible:e.visible!==undefined?e.visible:!0})}):e.type==="namedmap"?_.each(e.options.named_map.layers,function(e){t.sublayer_options.push({visible:e.visible!==undefined?e.visible:!0})}):e.type==="torque"&&t.sublayer_options.push({visible:e.options.visible!==undefined?e.options.visible:!0})})},load:function(e,t){var n=this;if(typeof e=="string"){var r=e;return cdb.vis.Loader.get(r,function(e){e?n.load(e,t):n.throwError("error fetching viz.json file")}),this}if(!this.checkModules(e.layers))return this.moduleChecked?(n.throwError("modules couldn't be loaded"),this):(this.moduleChecked=!0,this.loadModules(e.layers,function(){n.load(e,t)}),this);window&&window.location.protocol&&window.location.protocol==="https:"&&(this.https=!0),e.https&&(this.https=e.https),t=t||{},this._applyOptions(e,t);var i=!!_.find(e.overlays,function(e){return e.type==="logo"&&e.options.display});this.cartodb_logo=t.cartodb_logo!==undefined?t.cartodb_logo:i,this.mobile?this.cartodb_logo=!1:!i&&t.cartodb_logo===undefined&&(this.cartodb_logo=!0);var s=t.scrollwheel===undefined?e.scrollwheel:t.scrollwheel;e.maxZoom||(e.maxZoom=20),e.minZoom||(e.minZoom=0);var o={title:e.title,description:e.description,maxZoom:e.maxZoom,minZoom:e.minZoom,legends:e.legends,scrollwheel:s,provider:e.map_provider};e.bounding_box_sw&&e.bounding_box_ne&&(o.bounding_box_sw=e.bounding_box_sw,o.bounding_box_ne=e.bounding_box_ne);if(e.bounds)o.view_bounds_sw=e.bounds[0],o.view_bounds_ne=e.bounds[1];else{var u=e.center;typeof u=="string"&&(u=$.parseJSON(u)),o.center=u||[0,0],o.zoom=e.zoom==undefined?4:e.zoom}var a=new cdb.geo.Map(o);this.map=a,this.updated_at=e.updated_at||(new Date).getTime();var f=this.$el.outerHeight();f===0&&(this.mapConfig=o,$(window).bind("resize",this._onResize));var l=$("<div>").css({position:"relative",width:"100%",height:"100%"});this.container=l;var c=$("<div>").addClass("cartodb-map-wrapper").css({position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%"});l.append(c),this.$el.append(l);var h=new cdb.geo.MapView.create(c,a);this.mapView=h,this._addLayers(e.layers,t),(t.legends||t.legends===undefined&&this.map.get("legends")!==!1)&&this.addLegends(e.layers,this.mobile_enabled);if(t.time_slider){var p=_(this.getLayers()).filter(function(e){return e.model.get("type")==="torque"});p&&p.length&&(this.torqueLayer=p[0],!this.mobile_enabled&&this.torqueLayer&&this.addTimeSlider(this.torqueLayer))}return t.sublayer_options||this._setupSublayers(e.layers,t),t.sublayer_options&&this._setLayerOptions(t),this.mobile_enabled&&(t.legends===undefined&&(t.legends=this.legends?!0:!1),this.addMobile(e.overlays,e.layers,t)),this._addOverlays(e.overlays,t),_.defer(function(){n.trigger("done",n,n.getLayers())}),this},_addFullScreen:function(){this.addOverlay({options:{allowWheelOnFullscreen:!0},type:"fullscreen"})},_createOverlays:function(e,t){_.each(e,function(e){var n=e.type;if(this.mobile_enabled&&n==="zoom")return;if(this.mobile_enabled&&n==="header")return;if(n==="image"||n==="text"||n==="annotation"){var r=e.options.device=="mobile"?!0:!1;if(this.mobile!==r)return;if(!t[n]&&t[n]!==undefined)return}var i=this.addOverlay(e);i&&n in t&&t[n]===!1&&i.hide();var s=e.options;(n=="share"&&t.shareable||n=="share"&&i.model.get("display")&&t["shareable"]==undefined)&&i.show(),(n=="layer_selector"&&t[n]||n=="layer_selector"&&i.model.get("display")&&t[n]==undefined)&&i.show(),(n=="fullscreen"&&t[n]||n=="fullscreen"&&i.model.get("display")&&t[n]==undefined)&&i.show(),!this.mobile_enabled&&(n=="search"&&t[n]||n=="search"&&s.display&&t[n]==undefined)&&i.show();if(!this.mobile_enabled&&n==="header"){var o=i.model;t.title!==undefined&&o.set("show_title",t.title),t.description!==undefined&&o.set("show_description",t.description),(o.get("show_title")||o.get("show_description"))&&$(".cartodb-map-wrapper").addClass("with_header"),i.render()}},this)},addMobile:function(e,t,n){var r,i=t[1];i.options&&i.options.layer_definition?r=i.options.layer_definition.layers:i.options&&i.options.named_map&&i.options.named_map.layers&&(r=i.options.named_map.layers),this.addOverlay({type:"mobile",layers:r,overlays:e,options:n,torqueLayer:this.torqueLayer})},createLegendView:function(e){var t=[];for(var n=e.length-1;n>=0;--n){var r=e[n];if(r.legend){r.legend.data=r.legend.items;var i=r.legend;if(i.items&&i.items.length||i.template)r.legend.index=n,t.push(new cdb.geo.ui.Legend(r.legend))}r.options&&r.options.layer_definition?t=t.concat(this.createLegendView(r.options.layer_definition.layers)):r.options&&r.options.named_map&&r.options.named_map.layers&&(t=t.concat(this.createLegendView(r.options.named_map.layers)))}return t},addOverlay:function(e){e.map=this.map;var n=t.create(e.type,this,e);return n&&(e.type=="loader"&&(this.loader=n),this.mapView.addOverlay(n),this.overlays.push(n),n.bind("clean",function(){for(var e in this.overlays){var t=this.overlays[e];if(n.cid===t.cid){this.overlays.splice(e,1);return}}},this),e.type=="header"),n},_applyOptions:function(e,t){function n(t){if(!e.overlays)return null;for(var n=0;n<e.overlays.length;++n)if(e.overlays[n].type===t)return e.overlays[n]}function r(t){if(!e.overlays)return;for(var n=0;n<e.overlays.length;++n)if(e.overlays[n].type===t){e.overlays.splice(n,1);return}}t=t||{},t=_.defaults(t,{tiles_loader:!0,loaderControl:!0,infowindow:!0,tooltip:!0,time_slider:!0}),e.overlays=e.overlays||[],e.layers=e.layers||[],this.infowindow=t.infowindow,this.tooltip=t.tooltip,t.https&&(this.https=!0),this.mobile=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.mobile_enabled=t.mobile_layout&&this.mobile||t.force_mobile;if(t.force_mobile===!1||t.force_mobile==="false")this.mobile_enabled=!1;t.title||(e.title=null),t.description||(e.description=null),t.tiles_loader||r("loader"),t.loaderControl||r("loader"),!this.mobile_enabled&&t.search&&(n("search")||e.overlays.push({type:"search",order:3}));if(t.title&&e.title||t.description&&e.description)n("header")||e.overlays.unshift({type:"header",order:1,shareable:t.shareable?!0:!1,url:e.url,options:{extra:{title:e.title,description:e.description,show_title:t.title,show_description:t.description}}});t.layer_selector&&(n("layer_selector")||e.overlays.push({type:"layer_selector"})),t.shareable&&!this.mobile_enabled&&(n("share")||e.overlays.push({type:"share",order:2,url:e.url})),this.mobile_enabled&&(r("logo"),r("share")),this.mobile&&r("zoom");var i=parseInt(t.zoom);isNaN(i)||(e.zoom=i,e.bounds=null);var s=parseFloat(t.center_lat),o=parseFloat(t.center_lon);!isNaN(s)&&!isNaN(o)&&(e.center=[s,o],e.bounds=null),t.center!==undefined&&(e.center=t.center,e.bounds=null);var u=parseFloat(t.sw_lat),a=parseFloat(t.sw_lon),f=parseFloat(t.ne_lat),l=parseFloat(t.ne_lon);!isNaN(u)&&!isNaN(a)&&!isNaN(f)&&!isNaN(l)&&(e.bounds=[[u,a],[f,l]]);if(e.layers.length>1){var c=t.auth_token;for(var h=1;h<e.layers.length;++h){var p=e.layers[h].options;p.no_cdn=t.no_cdn,p.force_cors=t.force_cors,c&&(p.auth_token=c)}}},setMapPosition:function(){},createLayer:function(e,t){var r=n.create(e.type||e.kind,this,e);return this.mapView.createLayer(r)},_getSqlApi:function(e){e=e||{};var t=e.sql_api_port,n=e.sql_api_domain+(t?":"+t:""),r=e.sql_api_protocol,i="v1";n.indexOf("cartodb.com")!==-1&&(r="http",n="cartodb.com",i="v2");var s=new cartodb.SQL({user:e.user_name,protocol:r,host:n,version:i});return s},addTooltip:function(e){if(!e||!e.containTooltip||!e.containTooltip())return;for(var t=0;t<e.getLayerCount();++t){var n=e.getTooltipData(t);if(n){if(!e.tooltip){var r=new cdb.geo.ui.Tooltip({layer:e,template:n.template,position:"bottom|right",vertical_offset:10,horizontal_offset:4,fields:n.fields,omit_columns:["cartodb_id"]});e.tooltip=r,this.mapView.addOverlay(r)}e.setInteraction(t,!0)}}e.tooltip&&e.bind("featureOver",function(t,n,r,i,s){var o=e.getTooltipData(s);o?(e.tooltip.setTemplate(o.template),e.tooltip.setFields(o.fields),e.tooltip.setAlternativeNames(o.alternative_names),e.tooltip.enable()):e.tooltip.disable()})},addInfowindow:function(e){if(!e.containInfowindow||!e.containInfowindow())return;var n=this.mapView,r="featureClick",i=null;for(var s=0;s<e.getLayerCount();++s)if(e.getInfowindowData(s)){i||(i=t.create("infowindow",this,e.getInfowindowData(s),!0),n.addInfowindow(i));var o=e.getLayerNumberByIndex(s);e.setInteraction(o,!0)}if(!i)return;i.bind("close",function(){for(var t=0;t<e.getLayerCount();++t){var n=e.tooltip;n&&n.setFilter(null)}}),e.bind(r,function(t,n,r,s,o){var u=e.getInfowindowData(o);if(!u)return;var a=_.pluck(u.fields,"name"),f=s.cartodb_id;e.fetchAttributes(o,f,a,function(e){var t=_.defaults({offset:u.offset,width:u.width,maxHeight:u.maxHeight},cdb.geo.ui.InfowindowModel.prototype.defaults);i.model.set({fields:u.fields,template:u.template,template_type:u.template_type,alternative_names:u.alternative_names,offset:t.offset,width:t.width,maxHeight:t.maxHeight}),e?(i.model.updateContent(e),i.adjustPan()):i.setError()}),i.setLatLng(n).setLoading().showInfowindow(),e.tooltip&&e.tooltip.setFilter(function(e){return e.cartodb_id!==f}).hide()});var u=[];e.bind("mouseover",function(){n.setCursor("pointer")}),e.bind("mouseout",function(e,t){n.setCursor("auto")}),e.infowindow=i.model},loadLayer:function(e,t){var r=this.map,i=this.mapView,s=r.addLayer(n.create(e.type||e.kind,this,e),t),o=i.getLayerByCid(s);if(!o){this.throwError("layer can't be created",r.layers.getByCid(s));return}o&&this.infowindow&&o.containInfowindow&&o.containInfowindow()&&this.addInfowindow(o),o&&this.tooltip&&o.containTooltip&&o.containTooltip()&&this.addTooltip(o);if(o){var u=this,a=function(){u.loadingTiles(t)},f=function(){u.loadTiles(t)};o.bind("loading",a),o.bind("load",f)}return o},loadingTiles:function(){this.loader&&this.loader.show(),this.layersLoading===0&&this.trigger("loading"),this.layersLoading++},loadTiles:function(){this.loader&&this.loader.hide(),this.layersLoading--,this.layersLoading<=0&&(this.layersLoading=0,this.trigger("load"))},throwError:function(e,t){cdb.log.error(e);var n=this;_.defer(function(){n.trigger("error",e,t)})},error:function(e){return this.bind("error",e)},done:function(e){return this.bind("done",e)},getNativeMap:function(){return this.mapView.getNativeMap()},getLayers:function(){var e=this;return _.compact(this.map.layers.map(function(t){return e.mapView.getLayerByCid(t.cid)}))},getOverlays:function(){return this.overlays},getOverlay:function(e){return _(this.overlays).find(function(t){return t.type==e})},getOverlaysByType:function(e){return _(this.overlays).filter(function(t){return t.type==e})},_onResize:function(){$(window).unbind("resize",this._onResize);var e=this;e.mapView.invalidateSize(),setTimeout(function(){var t=e.mapConfig;t.view_bounds_sw?e.mapView.map.setBounds([t.view_bounds_sw,t.view_bounds_ne]):e.mapView.map.set({center:t.center,zoom:t.zoom})},150)}},{addInfowindow:function(e,t,n,r){var i=_.defaults(r||{},{infowindowTemplate:cdb.vis.INFOWINDOW_TEMPLATE.light,templateType:"mustache",triggerEvent:"featureClick",templateName:"light",extraFields:[],cursorInteraction:!0});if(!e)throw new Error("map is not valid");if(!t)throw new Error("layer is not valid");if(!n&&n.length===undefined)throw new Error("fields should be a list of strings");var s=[];n=n.concat(i.extraFields);for(var o=0;o<n.length;++o)s.push({name:n,order:o});var u=new cdb.geo.ui.InfowindowModel({fields:s,template_name:i.templateName}),a=new cdb.geo.ui.Infowindow({model:u,mapView:e.viz.mapView,template:(new cdb.core.Template({template:i.infowindowTemplate,type:i.templateType})).asFunction()});e.viz.mapView.addInfowindow(a);try{t.setInteractivity(n)}catch(f){}return t.setInteraction(!0),t.bind(i.triggerEvent,function(e,t,r,i,s){var o=[],u;for(var f=0;f<n.length;++f){var l=n[f];(u=i[l])&&o.push({title:l,value:u,index:0})}a.model.set({content:{fields:o,data:i}}),a.setLatLng(t).showInfowindow(),a.adjustPan()},a),a.bind("clean",function(){t.unbind(i.triggerEvent,null,a)}),i.cursorInteraction&&cdb.vis.Vis.addCursorInteraction(e,t),a},addCursorInteraction:function(e,t){var n=e.viz.mapView;t.bind("mouseover",function(){n.setCursor("pointer")}),t.bind("mouseout",function(e,t){n.setCursor("auto")})},removeCursorInteraction:function(e,t){var n=e.viz.mapView;t.unbind(null,null,n)}});cdb.vis.INFOWINDOW_TEMPLATE={light:['<div class="cartodb-popup">','<a href="#close" class="cartodb-popup-close-button close">x</a>','<div class="cartodb-popup-content-wrapper">','<div class="cartodb-popup-content">',"{{#content.fields}}","{{#title}}<h4>{{title}}</h4>{{/title}}","{{#value}}",'<p {{#type}}class="{{ type }}"{{/type}}>{{{ value }}}</p>',"{{/value}}","{{^value}}",'<p class="empty">null</p>',"{{/value}}","{{/content.fields}}","</div>","</div>",'<div class="cartodb-popup-tip-container"></div>',"</div>"].join("")},cdb.vis.Vis=s}(),function(){cdb.vis.Overlay.register("logo",function(e,t){}),cdb.vis.Overlay.register("mobile",function(e,t){var n=cdb.core.Template.compile(e.template||'    <div class="backdrop"></div>    <div class="cartodb-header">      <div class="content">        <a href="#" class="fullscreen"></a>        <a href="#" class="toggle"></a>        </div>      </div>    </div>    <div class="aside">    <div class="layer-container">    <div class="scrollpane"><ul class="layers"></ul></div>    </div>    </div>    <div class="cartodb-attribution"></div>    <a href="#" class="cartodb-attribution-button"></a>    <div class="torque"></div>    ',e.templateType||"mustache"),r=new cdb.geo.ui.Mobile({template:n,mapView:t.mapView,overlays:e.overlays,layerView:e.layerView,visibility_options:e.options,torqueLayer:e.torqueLayer,map:e.map});return r.render()}),cdb.vis.Overlay.register("image",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'    <div class="content">    <div class="text widget_text">{{{ content }}}</div>    </div>',e.templateType||"mustache"),i=new cdb.geo.ui.Image({model:new cdb.core.Model(n),template:r});return i.render()}),cdb.vis.Overlay.register("text",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'    <div class="content">    <div class="text widget_text">{{{ text }}}</div>    </div>',e.templateType||"mustache"),i=new cdb.geo.ui.Text({model:new cdb.core.Model(n),template:r,className:"cartodb-overlay overlay-text "+n.device});return i.render()}),cdb.vis.Overlay.register("annotation",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'    <div class="content">    <div class="text widget_text">{{{ text }}}</div>    <div class="stick"><div class="ball"></div></div>    </div>',e.templateType||"mustache"),n=e.options,i=new cdb.geo.ui.Annotation({className:"cartodb-overlay overlay-annotation "+n.device,template:r,mapView:t.mapView,device:n.device,text:n.extra.rendered_text,minZoom:n.style["min-zoom"],maxZoom:n.style["max-zoom"],latlng:n.extra.latlng,style:n.style});return i.render()}),cdb.vis.Overlay.register("zoom_info",function(e,t){}),cdb.vis.Overlay.register("header",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'    <div class="content">    <div class="title">{{{ title }}}</div>    <div class="description">{{{ description }}}</div>    </div>',e.templateType||"mustache"),i=new cdb.geo.ui.Header({model:new cdb.core.Model(n),template:r});return i.render()}),cdb.vis.Overlay.register("zoom",function(e,t){if(!e.template){t.trigger("error","zoom template is empty");return}var n=new cdb.geo.ui.Zoom({model:e.map,template:cdb.core.Template.compile(e.template)});return n.render()}),cdb.vis.Overlay.register("loader",function(e){var t=new cdb.geo.ui.TilesLoader({template:cdb.core.Template.compile(e.template)});return t.render()}),cdb.vis.Overlay.register("time_slider",function(e,t){var n=new cdb.geo.ui.TimeSlider(e);return n.render()}),cdb.vis.Overlay.register("_header",function(e,t){function i(e,t){return e.substr(0,t-1)+(e.length>t?"â€¦":"")}var n=100;location.href?e.share_url=encodeURIComponent(location.href):e.share_url=e.url;var r=cdb.core.Template.compile(e.template||"      {{#title}}        <h1>          {{#url}}            <a href='#' onmousedown=\"window.open('{{url}}')\">{{title}}</a>          {{/url}}          {{^url}}            {{title}}          {{/url}}        </h1>      {{/title}}      {{#description}}<p>{{{description}}}</p>{{/description}}      {{#mobile_shareable}}        <div class='social'>          <a class='facebook' target='_blank'            href='http://www.facebook.com/sharer.php?u={{share_url}}&text=Map of {{title}}: {{description}}'>F</a>          <a class='twitter' href='https://twitter.com/share?url={{share_url}}&text={{twitter_title}}'           target='_blank'>T</a>        </div>      {{/mobile_shareable}}    ",e.templateType||"mustache"),s=e.map.get("title"),o=e.map.get("description"),u=s+": "+o,a;s&&o?a=i(s+": "+o,112)+" %23map ":s?a=i(s,112)+" %23map":o?a=i(o,112)+" %23map":a="%23map";var f=e.shareable=="false"||!e.shareable?null:e.shareable,l=f;l=l&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var c=new cdb.geo.ui.Header({title:s,description:o,facebook_title:u,twitter_title:a,url:e.url,share_url:e.share_url,mobile_shareable:l,shareable:f&&!l,template:r});return c.render()}),cdb.vis.Overlay.register("infowindow",function(e,t){if(_.size(e.fields)==0)return null;var n=new cdb.geo.ui.InfowindowModel({template:e.template,alternative_names:e.alternative_names,fields:e.fields,template_name:e.template_name}),r=e.templateType||"mustache",i=new cdb.geo.ui.Infowindow
({model:n,mapView:t.mapView,template:(new cdb.core.Template({template:e.template,type:r})).asFunction()});return i}),cdb.vis.Overlay.register("layer_selector",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'      <a href="#/change-visibility" class="layers">Visible layers<div class="count"></div></a>      ',e.templateType||"underscore"),i=cdb.core.Template.compile(e.template||'      <ul></ul><div class="tail"><span class="border"></span></div>      ',e.templateType||"underscore"),s=new cdb.geo.ui.LayerSelector({model:new cdb.core.Model(n),mapView:t.mapView,template:r,dropdown_template:i,layer_names:e.layer_names});return t.legends&&s.bind("change:visible",function(e,n,r){if(r.get("type")==="torque"){var i=t.getOverlay("time_slider");i&&i[e?"show":"hide"]()}if(r.get("type")==="layergroup"||r.get("type")==="torque"){var s=t.legends&&t.legends.getLegendByIndex(n);s&&s[e?"show":"hide"]()}}),s.render()}),cdb.vis.Overlay.register("fullscreen",function(e,t){var n=e.options;n.allowWheelOnFullscreen=!1;var r=cdb.core.Template.compile(e.template||'<a href="#"></a>',e.templateType||"mustache"),i=new cdb.ui.common.FullScreen({doc:"#map > div",model:new cdb.core.Model(n),mapView:t.mapView,template:r});return i.render()}),cdb.vis.Overlay.register("share",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'<a href="#"></a>',e.templateType||"mustache"),i=new cdb.geo.ui.Share({model:new cdb.core.Model(n),vis:t,map:t.map,template:r});return i.createDialog(),i.render()}),cdb.vis.Overlay.register("search",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'      <form>        <span class="loader"></span>        <input type="text" class="text" value="" />        <input type="submit" class="submit" value="" />      </form>    ',e.templateType||"mustache"),i=new cdb.geo.ui.Search({template:r,model:t.map});return i.render()}),cdb.vis.Overlay.register("tooltip",function(e,t){var n;if(!e.layer){var r=t.getLayers();r.length>1&&(n=r[1]),e.layer=n}if(!e.layer)throw new Error("layer is null");e.layer.setInteraction(!0);var i=new cdb.geo.ui.Tooltip(e);return i}),cdb.vis.Overlay.register("infobox",function(e,t){var n,r=t.getLayers();e.layer||(r.length>1&&(n=r[1]),e.layer=n);if(!e.layer)throw new Error("layer is null");e.layer.setInteraction(!0);var i=new cdb.geo.ui.InfoBox(e);return i})}(),function(){function n(e){for(var n in t)if(e.indexOf(n)!==-1)return e.replace(n,t[n]);return e}function r(e,t){t.infowindow&&t.infowindow.fields&&(t.interactivity?t.interactivity.indexOf("cartodb_id")===-1&&(t.interactivity=t.interactivity+",cartodb_id"):t.interactivity="cartodb_id"),e.https&&(t.tiler_protocol="https",t.tiler_port=443,t.sql_api_protocol="https",t.sql_api_port=443),t.cartodb_logo=e.cartodb_logo==undefined?t.cartodb_logo:e.cartodb_logo}var e=cdb.vis.Layers,t={"https://dnv9my2eseobd.cloudfront.net/":"http://a.tiles.mapbox.com/","https://maps.nlp.nokia.com/":"http://maps.nlp.nokia.com/","https://tile.stamen.com/":"http://tile.stamen.com/","https://{s}.maps.nlp.nokia.com/":"http://{s}.maps.nlp.nokia.com/","https://cartocdn_{s}.global.ssl.fastly.net/":"http://{s}.api.cartocdn.com/"};e.register("tilejson",function(e,t){var r=t.tiles[0];return r=e.https?r:n(r),new cdb.geo.TileLayer({urlTemplate:r})}),e.register("tiled",function(e,t){var r=t.urlTemplate;return r=e.https?r:n(r),t.urlTemplate=r,new cdb.geo.TileLayer(t)}),e.register("wms",function(e,t){return new cdb.geo.WMSLayer(t)}),e.register("gmapsbase",function(e,t){return new cdb.geo.GMapsBaseLayer(t)}),e.register("plain",function(e,t){return new cdb.geo.PlainLayer(t)}),e.register("background",function(e,t){return new cdb.geo.PlainLayer(t)});var i=function(e,t){return r(e,t),t.sublayers?(t.type="layergroup",new cdb.geo.CartoDBGroupLayer(t)):new cdb.geo.CartoDBLayer(t)};e.register("cartodb",i),e.register("carto",i),e.register("layergroup",function(e,t){return r(e,t),new cdb.geo.CartoDBGroupLayer(t)}),e.register("namedmap",function(e,t){return r(e,t),new cdb.geo.CartoDBNamedMapLayer(t)}),e.register("torque",function(e,t){return e.https&&t.sql_api_domain&&t.sql_api_domain.indexOf("cartodb.com")!==-1&&(t.sql_api_protocol="https",t.sql_api_port=443,t.tiler_protocol="https",t.tiler_port=443),t.cartodb_logo=e.cartodb_logo==undefined?t.cartodb_logo:e.cartodb_logo,new cdb.geo.TorqueLayer(t)})}(),function(){function e(){}function n(e){var t=e.host||"cartodb.com",n=e.protocol||"https";return n+"://"+e.user+"."+t+"/api/v1/viz/"+e.table+"/viz.json"}function r(e,t){var r=null;if(e.layers!==undefined||(e.kind||e.type)!==undefined){_.defer(function(){t(e)});return}e.table!==undefined&&e.user!==undefined?r=n(e):e.indexOf&&e.indexOf("http")===0&&(r=e),r?cdb.vis.Loader.get(r,t):_.defer(function(){t(null)})}_.extend(e.prototype,Backbone.Events,{done:function(e){return this.bind("done",e)},error:function(e){return this.bind("error",e)}}),cdb._Promise=e;var t={};cartodb.createLayer=function(t,n,i,s){var o=new e,u,a;i=i||{};if(t===undefined)throw new TypeError("map should be provided");if(n===undefined)throw new TypeError("layer should be provided");var f=arguments,l=f[f.length-1];return _.isFunction(l)&&(s=l),o.addTo=function(e,t){return o.on("done",function(){a.addLayerToMap(u,e,t)}),o},r(n,function(e){function c(){u=f.createLayer(n,{no_base_layer:!0});var e,r=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),a=i.mobile_layout&&r||i.force_mobile;if(!u)return o.trigger("error","layer not supported"),o;i.infowindow&&f.addInfowindow(u),i.tooltip&&f.addTooltip(u),i.legends&&f.addLegends([n],r&&i.mobile_layout||i.force_mobile),i.time_slider&&u.model.get("type")==="torque"&&(a||f.addTimeSlider(u),e=u),a&&(i.mapView=t.viz.mapView,f.addOverlay({type:"mobile",layerView:u,overlays:[],torqueLayer:e,options:i})),s&&s(u),o.trigger("done",u)}var n;if(!e){o.trigger("error");return}if(e.layers){e.layers.length<2&&o.trigger("error","visualization file does not contain layer info");var r=i.layerIndex===undefined?1:i.layerIndex;if(e.layers.length<=r){o.trigger("error","layerIndex out of bounds");return}n=e.layers[r]}else n=e;if(!n){o.trigger("error");return}i&&!_.isFunction(i)&&(n.options=n.options||{},_.extend(n.options,i)),i=_.defaults(i,{infowindow:!0,https:!1,legends:!0,time_slider:!0,tooltip:!0});if(typeof t.overlayMapTypes!="undefined")a=cdb.geo.GoogleMapsMapView;else{if(!(t instanceof L.Map||window.L&&t instanceof window.L.Map))return o.trigger("error","cartodb.js can't guess the map type"),o;a=cdb.geo.LeafletMapView}var f=t.viz;if(!f){var l=new a({map_object:t,map:new cdb.geo.Map});t.viz=f=new cdb.vis.Vis({mapView:l}),f.updated_at=e.updated_at,f.https=i.https}f.checkModules([n])?c():f.loadModules([n],function(){c()})}),o}}(),function(){function t(e){if(cartodb===this||window===this)return new t(e);if(!e.user)throw new Error("user should be provided");var n=new String(window.location.protocol);n=n.slice(0,n.length-1),n=="file"&&(n="https"),this.ajax=e.ajax||(typeof jQuery!="undefined"?jQuery.ajax:reqwest);if(!this.ajax)throw new Error("jQuery or reqwest should be loaded");this.options=_.defaults(e,{version:"v2",protocol:n,jsonp:typeof jQuery!="undefined"?!jQuery.support.cors:!1})}var e=this;e.cartodb=e.cartodb||{},t.prototype._host=function(){var e=this.options;if(e&&e.completeDomain)return e.completeDomain+"/api/"+e.version+"/sql";var t=e.host||"cartodb.com",n=e.protocol||"https";return n+"://"+e.user+"."+t+"/api/"+e.version+"/sql"},t.prototype.execute=function(e,t,n,r){var i=1024,s=new cartodb._Promise;if(!e)throw new TypeError("sql should not be null");var o=arguments,u=o[o.length-1];_.isFunction(u)&&(r=u),n=_.defaults(n||{},this.options);var a={type:"get",dataType:"json",crossDomain:!0};n.cache!==undefined&&(a.cache=n.cache),n.jsonp&&(delete a.crossDomain,n.jsonpCallback&&(a.jsonpCallback=n.jsonpCallback),a.dataType="jsonp");var f="156543.03515625",l="ST_MakeEnvelope(-20037508.5,-20037508.5,20037508.5,20037508.5,3857)";e=e.replace("!bbox!",l).replace("!pixel_width!",f).replace("!pixel_height!",f);var c=Mustache.render(e,t),h=c.length<i,p=["format","dp","api_key"];n.extra_params&&(p=p.concat(n.extra_params)),a.url=this._host();if(h){var d="q="+encodeURIComponent(c);for(var v in p){var m=p[v],g=n[m];g&&(d+="&"+m+"="+g)}a.url+="?"+d}else{var y={q:c};for(var v in p){var m=p[v],g=n[m];g&&(y[m]=g)}a.data=y,typeof jQuery!="undefined"?a.type="post":a.method="post"}var b=n.success,w=n.error;return b&&delete n.success,w&&delete w.success,a.error=function(e){var t=e.responseText||e.response,n=t&&JSON.parse(t);s.trigger("error",n&&n.error,e),w&&w(e)},a.success=function(e,t,n){t==undefined&&(t=e.status,n=e,e=JSON.parse(e.response)),s.trigger("done",e,t,n),b&&b(e,t,n),r&&r(e)},delete n.jsonp,this.ajax(_.extend(a,n)),s},t.prototype.getBounds=function(e,t,n,r){var i=new cartodb._Promise,s=arguments,o=s[s.length-1];_.isFunction(o)&&(r=o);var u="SELECT ST_XMin(ST_Extent(the_geom)) as minx,       ST_YMin(ST_Extent(the_geom)) as miny,       ST_XMax(ST_Extent(the_geom)) as maxx,       ST_YMax(ST_Extent(the_geom)) as maxy from ({{{ sql }}}) as subq";return e=Mustache.render(e,t),this.execute(u,{sql:e},n).done(function(e){if(e.rows&&e.rows.length>0&&e.rows[0].maxx!=null){var t=e.rows[0],n=-85.0511,s=85.0511,o=-179,u=179,a=function(e,t,n){return e<t?t:e>n?n:e},f=a(t.maxx,o,u),l=a(t.minx,o,u),c=a(t.maxy,n,s),h=a(t.miny,n,s),p=[[c,f],[h,l]];i.trigger("done",p),r&&r(p)}}).error(function(e){i.trigger("error",e)}),i},t.prototype.table=function(e){function a(){a.fetch.apply(a,arguments)}var t=e,n,r=[],i,s,o,u=this;return a.fetch=function(e){e=e||{};var t=arguments,n=t[t.length-1];_.isFunction(n)&&(callback=n,t.length===1&&(e={})),u.execute(a.sql(),e,callback)},a.sql=function(){var e="select";return r.length?e+=" "+r.join(",")+" ":e+=" * ",e+="from "+t,n&&(e+=" where "+n),i&&(e+=" limit "+i),s&&(e+=" order by "+s),o&&(e+=" "+o),e},a.filter=function(e){return n=e,a},a.order_by=function(e){return s=e,a},a.asc=function(){return o="asc",a},a.desc=function(){return o="desc",a},a.columns=function(e){return r=e,a},a.limit=function(e){return i=e,a},a},e.cartodb.SQL=t}(),function(){cartodb.createVis=function(e,t,n,r){if(!e)throw new TypeError("a DOM element should be provided");var i=arguments,s=i[i.length-1];_.isFunction(s)&&(r=s),e=typeof e=="string"?document.getElementById(e):e;var o=new cartodb.vis.Vis({el:e});return t&&(o.load(t,n),r&&o.done(r)),o}}(),cdb.$=$,cdb.L=L,cdb.Mustache=Mustache,cdb.Backbone=Backbone,cdb._=_}();for(var i in __prev)__prev[i]&&(window[i]=__prev[i])})();
/******************************************************************
*******************************************************************

Template Name: Treviso
Theme URI: http://themeforest.ninetofive.me/treviso/
Description: Responsive HTML5 Template
Author: ninetofive
Author URI: http://www.ninetofive.me
Version: 1.0
							
Designed & Handcrafted by Zan from ninetofive.me
									
*******************************************************************
******************************************************************/


$(document).ready(function() { 

	//Animated scrolling		   
	$('ul.mainmenu a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('ul.mainmenu li').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-200;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});

	// Scroll Down Link
	$('.scrolldown').click(function() {
		var targetOffset = $('div.blockquote').offset().top-80;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});

	// Menu Scroll Hide
	var nav = $('.menubar');
	var scroll = $('.menubar').attr('data-scroll');
	$(function(){
		$('.menubar').data('size','big');
		if (scroll == 'false') {
			nav.css({
				marginTop:'0px'
			});
		};
	});
	$(window).scroll(function(){
		if ($('body').scrollTop() > 0 && scroll == 'true') {
			if (nav.data('size') == 'big') {
				nav.data('size','small').stop().animate({
					marginTop:'0px'
				}, 300);
			}
		} else {
			if (nav.data('size') == 'small' && scroll == 'true') {
				nav.data('size','big').stop().animate({
					marginTop:'-80px'
				}, 300);
			}
			
		}
	});

	// Text Rotator
	$('.rotate').each(function(){
		var el = $(this);
		var text = $(this).html().split(",");
		el.html(text[0]);
		setInterval(function() {
			el.animate({
              textShadowBlur:20,
              opacity: 0
            }, 500 , function() {
              index = $.inArray(el.html(), text)
              if((index + 1) == text.length) index = -1
              el.text(text[index + 1]).animate({
                textShadowBlur:0,
                opacity: 1
              }, 500 );
            });
		}, 2000);
	});

	// Start Carousel
	$('#carousellatest').jcarousel();
	$('#carouselblog').jcarousel();

	// Carousel Hover
	$('div.section.block').hover(
		function () {
			$(this).children('div.hover').fadeIn('slow');
			$(this).children('div.content').fadeOut('slow');
		},
		function () {
			$(this).children('div.hover').fadeOut('slow');
			$(this).children('div.content').fadeIn('slow');
		}
	);

	// Services Icon Hover
	var original_text = $('p#services').text();
	var services_p = $('p#services');
	$('div.servicesitem').hover(
		function () {
			var text = $(this).children('.front').children('p').text();
			$(services_p).fadeOut(200,function(){ $(services_p).text(text).fadeIn(200); });
		},
		function () {
			$(services_p).fadeOut(200,function(){ $(services_p).text(original_text).fadeIn(200); });
		}
	);

	// Testimonials Icon Hover
	var original_t_text = $('p#testimonials').text();
	var testimonials_p = $('p#testimonials');
	$('div.logos img').hover(
		function () {
			var text = $(this).attr('data-text');
			$(testimonials_p).fadeOut(200,function(){ $(testimonials_p).text(text).fadeIn(200); });
		},
		function () {
			$(testimonials_p).fadeOut(200,function(){ $(testimonials_p).text(original_text).fadeIn(200); });
		}
	);

	// About Us Quote Hover
	$('div.quotefade').hover(
		function () {
			$(this).children('div.quotehover').fadeIn('slow');
		},
		function () {
			$(this).children('div.quotehover').fadeOut('slow');
		}
	);

	// Portfolio
	$(function(){
		$('ul.portfolio').mixitup({
			targetSelector: '.item',
			filterSelector: '.filter',
			easing: 'smooth',
			effects: ['fade'],
			layoutMode: 'grid',
			targetDisplayGrid: 'inline-block'
		});
	});

	// Blog Post Open
	$('a.openpost').click(function(){
		var id = $(this).attr('data-id');
		$('#snippets').hide();
		$('article.full[data-id="'+id+'"]').show();
		$('#postsfull').fadeIn();
	});
	$('a.backtoblog').click(function(){
		$('#postsfull').hide();
		$('article.full').hide();
		$('#snippets').fadeIn();
	});



});
/**
 * Created by rafaelcarrascal on 28/04/16.
 */

;
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */


(function(a){var b={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click",buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},c=!1;a(window).bind("load.jcarousel",function(){c=!0}),a.jcarousel=function(e,f){this.options=a.extend({},b,f||{}),this.locked=!1,this.autoStopped=!1,this.container=null,this.clip=null,this.list=null,this.buttonNext=null,this.buttonPrev=null,this.buttonNextState=null,this.buttonPrevState=null,f&&void 0!==f.rtl||(this.options.rtl="rtl"==(a(e).attr("dir")||a("html").attr("dir")||"").toLowerCase()),this.wh=this.options.vertical?"height":"width",this.lt=this.options.vertical?"top":this.options.rtl?"right":"left";for(var g="",h=e.className.split(" "),i=0;h.length>i;i++)if(-1!=h[i].indexOf("jcarousel-skin")){a(e).removeClass(h[i]),g=h[i];break}"UL"==e.nodeName.toUpperCase()||"OL"==e.nodeName.toUpperCase()?(this.list=a(e),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=a(e),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip")),0===this.clip.size()&&(this.clip=this.list.wrap("<div></div>").parent()),0===this.container.size()&&(this.container=this.clip.wrap("<div></div>").parent()),""!==g&&-1==this.container.parent()[0].className.indexOf("jcarousel-skin")&&this.container.wrap('<div class=" '+g+'"></div>'),this.buttonPrev=a(".jcarousel-prev",this.container),0===this.buttonPrev.size()&&null!==this.options.buttonPrevHTML&&(this.buttonPrev=a(this.options.buttonPrevHTML).appendTo(this.container)),this.buttonPrev.addClass(this.className("jcarousel-prev")),this.buttonNext=a(".jcarousel-next",this.container),0===this.buttonNext.size()&&null!==this.options.buttonNextHTML&&(this.buttonNext=a(this.options.buttonNextHTML).appendTo(this.container)),this.buttonNext.addClass(this.className("jcarousel-next")),this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"}),this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0),this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}),!this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null,k=this.list.children("li"),l=this;if(k.size()>0){var m=0,n=this.options.offset;k.each(function(){l.format(this,n++),m+=l.dimension(this,j)}),this.list.css(this.wh,m+100+"px"),f&&void 0!==f.size||(this.options.size=k.size())}this.container.css("display","block"),this.buttonNext.css("display","block"),this.buttonPrev.css("display","block"),this.funcNext=function(){return l.next(),!1},this.funcPrev=function(){return l.prev(),!1},this.funcResize=function(){l.resizeTimer&&clearTimeout(l.resizeTimer),l.resizeTimer=setTimeout(function(){l.reload()},100)},null!==this.options.initCallback&&this.options.initCallback(this,"init"),!c&&d.isSafari()?(this.buttons(!1,!1),a(window).bind("load.jcarousel",function(){l.setup()})):this.setup()};var d=a.jcarousel;d.fn=d.prototype={jcarousel:"0.2.9"},d.fn.extend=d.extend=a.extend,d.fn.extend({setup:function(){if(this.first=null,this.last=null,this.prevFirst=null,this.prevLast=null,this.animating=!1,this.timer=null,this.resizeTimer=null,this.tail=null,this.inTail=!1,!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var b=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null,this.animate(b,!1),a(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize),null!==this.options.setupCallback&&this.options.setupCallback(this)}},reset:function(){this.list.empty(),this.list.css(this.lt,"0px"),this.list.css(this.wh,"10px"),null!==this.options.initCallback&&this.options.initCallback(this,"reset"),this.setup()},reload:function(){if(null!==this.tail&&this.inTail&&this.list.css(this.lt,d.intval(this.list.css(this.lt))+this.tail),this.tail=null,this.inTail=!1,null!==this.options.reloadCallback&&this.options.reloadCallback(this),null!==this.options.visible){var a=this,b=Math.ceil(this.clipping()/this.options.visible),c=0,e=0;this.list.children("li").each(function(d){c+=a.dimension(this,b),a.first>d+1&&(e=c)}),this.list.css(this.wh,c+"px"),this.list.css(this.lt,-e+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0,this.buttons()},unlock:function(){this.locked=!1,this.buttons()},size:function(a){return void 0!==a&&(this.options.size=a,this.locked||this.buttons()),this.options.size},has:function(a,b){void 0!==b&&b||(b=a),null!==this.options.size&&b>this.options.size&&(b=this.options.size);for(var c=a;b>=c;c++){var d=this.get(c);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0},get:function(b){return a(">.jcarousel-item-"+b,this.list)},add:function(b,c){var e=this.get(b),f=0,g=a(c);if(0===e.length){var h,i=d.intval(b);for(e=this.create(b);;)if(h=this.get(--i),0>=i||h.length){0>=i?this.list.prepend(e):h.after(e);break}}else f=this.dimension(e);"LI"==g.get(0).nodeName.toUpperCase()?(e.replaceWith(g),e=g):e.empty().append(c),this.format(e.removeClass(this.className("jcarousel-item-placeholder")),b);var j=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null,k=this.dimension(e,j)-f;return b>0&&this.first>b&&this.list.css(this.lt,d.intval(this.list.css(this.lt))-k+"px"),this.list.css(this.wh,d.intval(this.list.css(this.wh))+k+"px"),e},remove:function(a){var b=this.get(a);if(b.length&&!(a>=this.first&&this.last>=a)){var c=this.dimension(b);this.first>a&&this.list.css(this.lt,d.intval(this.list.css(this.lt))+c+"px"),b.remove(),this.list.css(this.wh,d.intval(this.list.css(this.wh))-c+"px")}},next:function(){null===this.tail||this.inTail?this.scroll("both"!=this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||this.last!=this.options.size?this.first+this.options.scroll:1):this.scrollTail(!1)},prev:function(){null!==this.tail&&this.inTail?this.scrollTail(!0):this.scroll("both"!=this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||1!=this.first?this.first-this.options.scroll:this.options.size)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var b=d.intval(this.list.css(this.lt));b=a?b+this.tail:b-this.tail,this.inTail=!a,this.prevFirst=this.first,this.prevLast=this.last,this.animate(b)}},scroll:function(a,b){this.locked||this.animating||(this.pauseAuto(),this.animate(this.pos(a),b))},pos:function(a,b){var c=d.intval(this.list.css(this.lt));if(this.locked||this.animating)return c;"circular"!=this.options.wrap&&(a=1>a?1:this.options.size&&a>this.options.size?this.options.size:a);for(var m,e=this.first>a,f="circular"!=this.options.wrap&&1>=this.first?1:this.first,g=e?this.get(f):this.get(this.last),h=e?f:f-1,i=null,j=0,k=!1,l=0;e?--h>=a:a>++h;)i=this.get(h),k=!i.length,0===i.length&&(i=this.create(h).addClass(this.className("jcarousel-item-placeholder")),g[e?"before":"after"](i),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=h||h>this.options.size)&&(m=this.get(this.index(h)),m.length&&(i=this.add(h,m.clone(!0))))),g=i,l=this.dimension(i),k&&(j+=l),null!==this.first&&("circular"==this.options.wrap||h>=1&&(null===this.options.size||this.options.size>=h))&&(c=e?c+l:c-l);var n=this.clipping(),o=[],p=0,q=0;for(g=this.get(a-1),h=a;++p;){if(i=this.get(h),k=!i.length,0===i.length&&(i=this.create(h).addClass(this.className("jcarousel-item-placeholder")),0===g.length?this.list.prepend(i):g[e?"before":"after"](i),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=h||h>this.options.size)&&(m=this.get(this.index(h)),m.length&&(i=this.add(h,m.clone(!0))))),g=i,l=this.dimension(i),0===l)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");if("circular"!=this.options.wrap&&null!==this.options.size&&h>this.options.size?o.push(i):k&&(j+=l),q+=l,q>=n)break;h++}for(var r=0;o.length>r;r++)o[r].remove();j>0&&(this.list.css(this.wh,this.dimension(this.list)+j+"px"),e&&(c-=j,this.list.css(this.lt,d.intval(this.list.css(this.lt))-j+"px")));var s=a+p-1;if("circular"!=this.options.wrap&&this.options.size&&s>this.options.size&&(s=this.options.size),h>s)for(p=0,h=s,q=0;++p&&(i=this.get(h--),i.length)&&(q+=this.dimension(i),!(q>=n)););var t=s-p+1;if("circular"!=this.options.wrap&&1>t&&(t=1),this.inTail&&e&&(c+=this.tail,this.inTail=!1),this.tail=null,"circular"!=this.options.wrap&&s==this.options.size&&s-p+1>=1){var u=d.intval(this.get(s).css(this.options.vertical?"marginBottom":"marginRight"));q-u>n&&(this.tail=q-n-u)}for(b&&a===this.options.size&&this.tail&&(c-=this.tail,this.inTail=!0);a-->t;)c+=this.dimension(this.get(a));return this.prevFirst=this.first,this.prevLast=this.last,this.first=t,this.last=s,c},animate:function(b,c){if(!this.locked&&!this.animating){this.animating=!0;var d=this,e=function(){if(d.animating=!1,0===b&&d.list.css(d.lt,0),!d.autoStopped&&("circular"==d.options.wrap||"both"==d.options.wrap||"last"==d.options.wrap||null===d.options.size||d.last<d.options.size||d.last==d.options.size&&null!==d.tail&&!d.inTail)&&d.startAuto(),d.buttons(),d.notify("onAfterAnimation"),"circular"==d.options.wrap&&null!==d.options.size)for(var a=d.prevFirst;d.prevLast>=a;a++)null===a||a>=d.first&&d.last>=a||!(1>a||a>d.options.size)||d.remove(a)};if(this.notify("onBeforeAnimation"),this.options.animation&&c!==!1){var f=this.options.vertical?{top:b}:this.options.rtl?{right:b}:{left:b},g={duration:this.options.animation,easing:this.options.easing,complete:e};a.isFunction(this.options.animationStepCallback)&&(g.step=this.options.animationStepCallback),this.list.animate(f,g)}else this.list.css(this.lt,b+"px"),e()}},startAuto:function(a){if(void 0!==a&&(this.options.auto=a),0===this.options.auto)return this.stopAuto();if(null===this.timer){this.autoStopped=!1;var b=this;this.timer=window.setTimeout(function(){b.next()},1e3*this.options.auto)}},stopAuto:function(){this.pauseAuto(),this.autoStopped=!0},pauseAuto:function(){null!==this.timer&&(window.clearTimeout(this.timer),this.timer=null)},buttons:function(a,b){null==a&&(a=!this.locked&&0!==this.options.size&&(this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||this.last<this.options.size),this.locked||this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||!(this.last>=this.options.size)||(a=null!==this.tail&&!this.inTail)),null==b&&(b=!this.locked&&0!==this.options.size&&(this.options.wrap&&"last"!=this.options.wrap||this.first>1),this.locked||this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||1!=this.first||(b=null!==this.tail&&this.inTail));var c=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext),this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),null!==this.options.buttonNextCallback&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){c.options.buttonNextCallback(c,this,a)}).data("jcarouselstate",a)):null!==this.options.buttonNextCallback&&this.buttonNextState!=a&&this.options.buttonNextCallback(c,null,a),this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),b&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[b?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",b?!1:!0),null!==this.options.buttonPrevCallback&&this.buttonPrev.data("jcarouselstate")!=b&&this.buttonPrev.each(function(){c.options.buttonPrevCallback(c,this,b)}).data("jcarouselstate",b)):null!==this.options.buttonPrevCallback&&this.buttonPrevState!=b&&this.options.buttonPrevCallback(c,null,b),this.buttonNextState=a,this.buttonPrevState=b},notify:function(a){var b=null===this.prevFirst?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,b),this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,b,this.first),this.callback("itemFirstOutCallback",a,b,this.prevFirst)),this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,b,this.last),this.callback("itemLastOutCallback",a,b,this.prevLast)),this.callback("itemVisibleInCallback",a,b,this.first,this.last,this.prevFirst,this.prevLast),this.callback("itemVisibleOutCallback",a,b,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(b,c,d,e,f,g,h){if(null!=this.options[b]&&("object"==typeof this.options[b]||"onAfterAnimation"==c)){var i="object"==typeof this.options[b]?this.options[b][c]:this.options[b];if(a.isFunction(i)){var j=this;if(void 0===e)i(j,d,c);else if(void 0===f)this.get(e).each(function(){i(j,this,e,d,c)});else for(var k=function(a){j.get(a).each(function(){i(j,this,a,d,c)})},l=e;f>=l;l++)null===l||l>=g&&h>=l||k(l)}}},create:function(a){return this.format("<li></li>",a)},format:function(b,c){b=a(b);for(var d=b.get(0).className.split(" "),e=0;d.length>e;e++)-1!=d[e].indexOf("jcarousel-")&&b.removeClass(d[e]);return b.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c),b},className:function(a){return a+" "+a+(this.options.vertical?"-vertical":"-horizontal")},dimension:function(b,c){var e=a(b);if(null==c)return this.options.vertical?e.innerHeight()+d.intval(e.css("margin-top"))+d.intval(e.css("margin-bottom"))+d.intval(e.css("border-top-width"))+d.intval(e.css("border-bottom-width"))||d.intval(this.options.itemFallbackDimension):e.innerWidth()+d.intval(e.css("margin-left"))+d.intval(e.css("margin-right"))+d.intval(e.css("border-left-width"))+d.intval(e.css("border-right-width"))||d.intval(this.options.itemFallbackDimension);var f=this.options.vertical?c-d.intval(e.css("marginTop"))-d.intval(e.css("marginBottom")):c-d.intval(e.css("marginLeft"))-d.intval(e.css("marginRight"));return a(e).css(this.wh,f+"px"),this.dimension(e)},clipping:function(){return this.options.vertical?this.clip[0].offsetHeight-d.intval(this.clip.css("borderTopWidth"))-d.intval(this.clip.css("borderBottomWidth")):this.clip[0].offsetWidth-d.intval(this.clip.css("borderLeftWidth"))-d.intval(this.clip.css("borderRightWidth"))},index:function(a,b){return null==b&&(b=this.options.size),Math.round(((a-1)/b-Math.floor((a-1)/b))*b)+1}}),d.extend({defaults:function(c){return a.extend(b,c||{})},intval:function(a){return a=parseInt(a,10),isNaN(a)?0:a},windowLoaded:function(){c=!0},isSafari:function(){var a=navigator.userAgent.toLowerCase(),b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||[],c=b[1]||"";return"webkit"===c}}),a.fn.jcarousel=function(b){if("string"==typeof b){var c=a(this).data("jcarousel"),e=Array.prototype.slice.call(arguments,1);return c[b].apply(c,e)}return this.each(function(){var c=a(this).data("jcarousel");c?(b&&a.extend(c.options,b),c.reload()):a(this).data("jcarousel",new d(this,b))})}})(jQuery);
/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/


(function(e){function q(c,b,g,d,a){function k(){l.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");b&&w(b,g,d,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];r.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||r.css({display:"none",opacity:"0"});l.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+
(a.resizeContainer?"height":""));"list"==a.layoutMode?(n.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(n.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){r.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;a.filter=c;if("function"==typeof a.onMixStart){var f=a.onMixStart.call(this,
a);a=f?f:a}for(var h=a.transitionSpeed,f=0;2>f;f++){var j=0==f?j=a.prefix:"";a.transition[j+"transition"]="all "+h+"ms linear";a.transition[j+"transform"]=j+"translate3d(0,0,0)";a.perspective[j+"perspective"]=a.perspectiveDistance+"px";a.perspective[j+"perspective-origin"]=a.perspectiveOrigin}var s=a.targetSelector,r=d.find(s);r.each(function(){this.data={}});var l=r.parent();l.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");
"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");f="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<f.indexOf("fade")?"0":"",a.scale=-1<f.indexOf("scale")?"scale(.01)":"",a.rotateZ=
-1<f.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<f.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<f.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<f.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<f.indexOf("grayscale")?"grayscale(100%)":"");var n=e(),t=e(),u=[],q=!1;"string"===typeof c?u=y(c):(q=!0,e.each(c,function(a){u[a]=y(this)}));"or"==a.filterLogic?(""==u[0]&&u.shift(),1>u.length?t=t.add(d.find(s+":visible")):r.each(function(){var a=e(this);if(q){var b=0;e.each(u,function(){this.length?
a.is("."+this.join(", ."))&&b++:0<b&&b++});b==u.length?n=n.add(a):t=t.add(a)}else a.is("."+u.join(", ."))?n=n.add(a):t=t.add(a)})):(n=n.add(l.find(s+"."+u.join("."))),t=t.add(l.find(s+":not(."+u.join(".")+"):visible")));c=n.length;var v=e(),p=e(),m=e();t.each(function(){var a=e(this);"none"!=a.css("display")&&(v=v.add(a),m=m.add(a))});if(n.filter(":visible").length==c&&!v.length&&!b){if(a.origLayout==a.layoutMode)return k(),!1;if(1==n.length)return"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),
m.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),m.css("display",a.targetDisplayGrid)),k(),!1}a.origHeight=l.height();if(n.length){d.removeClass(a.failClass);n.each(function(){var a=e(this);"none"==a.css("display")?p=p.add(a):m=m.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),m.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),
m.css("display",a.targetDisplayGrid)),k(),!1;if(!window.atob)return k(),!1;r.css(a.clean);m.each(function(){this.data.origPos=e(this).offset()});"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),p.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));p.each(function(){this.data.showInterPos=e(this).offset()});v.each(function(){this.data.hideInterPos=e(this).offset()});m.each(function(){this.data.preInterPos=
e(this).offset()});"list"==a.layoutMode?m.css("display",a.targetDisplayList):m.css("display",a.targetDisplayGrid);b&&w(b,g,d,a);if(c=b)a:if(c=a.origSort,f=a.checkSort,c.length!=f.length)c=!1;else{for(j=0;j<f.length;j++)if(c[j].compare&&!c[j].compare(f[j])||c[j]!==f[j]){c=!1;break a}c=!0}if(c)return k(),!1;v.hide();p.each(function(){this.data.finalPos=e(this).offset()});m.each(function(){this.data.finalPrePos=e(this).offset()});a.newHeight=l.height();b&&w("reset",null,d,a);p.hide();m.css("display",
a.origDisplay);"block"==a.origDisplay?(d.addClass(a.listClass),p.css("display",a.targetDisplayList)):(d.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));a.resizeContainer&&l.css("height",a.origHeight+"px");c={};for(f=0;2>f;f++)j=0==f?j=a.prefix:"",c[j+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,c[j+"filter"]=a.blur+" "+a.grayscale;p.css(c);m.each(function(){var b=this.data,c=e(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-
b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var d={},f=0;2>f;f++){var j=0==f?j=a.prefix:"";d[j+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(d)});"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass)):(d.addClass(a.gridClass),d.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var d=0==c?d=a.prefix:"";b[d+"transition"]="all "+h+"ms ease-in-out";b.height=a.newHeight+
"px"}l.css(b)}v.css("opacity",a.fade);p.css("opacity",1);p.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition-property"]=f+"transform, "+f+"filter, opacity";c[f+"transition-timing-function"]=a.easing+", linear, linear";c[f+"transition-duration"]=h+"ms";c[f+"transition-delay"]="0";c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[f+"filter"]="none"}e(this).css("-webkit-transition",
"all "+h+"ms "+a.easingFallback).css(c)});m.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition"]="all "+h+"ms "+a.easing;c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}e(this).css("-webkit-transition","all "+h+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)d=0==c?d=a.prefix:"",b[d+"transition"]="all "+h+"ms "+
a.easing+", "+d+"filter "+h+"ms linear, opacity "+h+"ms linear",b[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[d+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;v.css(b);l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){if(-1<b.originalEvent.propertyName.indexOf("transform")||-1<b.originalEvent.propertyName.indexOf("opacity"))-1<s.indexOf(".")?e(b.target).hasClass(s.replace(".",""))&&k():e(b.target).is(s)&&k()})},10);a.failsafe=setTimeout(function(){a.mixing&&
k()},h+400)}else{a.resizeContainer&&l.css("height",a.origHeight+"px");if(!window.atob)return k(),!1;v=t;setTimeout(function(){l.css(a.perspective);if(a.resizeContainer){for(var b={},c=0;2>c;c++){var e=0==c?e=a.prefix:"";b[e+"transition"]="height "+h+"ms ease-in-out";b.height=a.minHeight+"px"}l.css(b)}r.css(a.transition);if(t.length){b={};for(c=0;2>c;c++)e=0==c?e=a.prefix:"",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;v.css(b);
l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){if(-1<b.originalEvent.propertyName.indexOf("transform")||-1<b.originalEvent.propertyName.indexOf("opacity"))d.addClass(a.failClass),k()})}else a.mixing=!1},10)}}function w(c,b,g,d){function a(b,a){var d=isNaN(1*b.attr(c))?b.attr(c).toLowerCase():1*b.attr(c),e=isNaN(1*a.attr(c))?a.attr(c).toLowerCase():1*a.attr(c);return d<e?-1:d>e?1:0}function k(a){"asc"==b?f.prepend(a).prepend(" "):f.append(a).append(" ")}g.find(d.targetSelector).wrapAll('<div class="mix_sorter"/>');
var f=g.find(".mix_sorter");d.origSort.length||f.find(d.targetSelector+":visible").each(function(){e(this).wrap("<s/>");d.origSort.push(e(this).parent().html().replace(/\s+/g,""));e(this).unwrap()});f.empty();if("reset"==c)e.each(d.startOrder,function(){f.append(this).append(" ")});else if("default"==c)e.each(d.origOrder,function(){k(this)});else if("random"==c){if(!d.newOrder.length){for(var h=d.startOrder.slice(),j=h.length,s=j;s--;){var r=parseInt(Math.random()*j),l=h[s];h[s]=h[r];h[r]=l}d.newOrder=
h}e.each(d.newOrder,function(){f.append(this).append(" ")})}else if("custom"==c)e.each(b,function(){k(this)});else{if("undefined"===typeof d.origOrder[0].attr(c))return console.log("No such attribute found. Terminating"),!1;d.newOrder.length||(e.each(d.origOrder,function(){d.newOrder.push(e(this))}),d.newOrder.sort(a));e.each(d.newOrder,function(){k(this)})}d.checkSort=[];f.find(d.targetSelector+":visible").each(function(b){var a=e(this);0==b&&a.attr("data-checksum","1");a.wrap("<s/>");d.checkSort.push(a.parent().html().replace(/\s+/g,
""));a.unwrap()});g.find(d.targetSelector).unwrap()}function y(c){c=c.replace(/\s{2,}/g," ");var b=c.split(" ");e.each(b,function(c){"all"==this&&(b[c]="mix_all")});""==b[0]&&b.shift();return b}var x={init:function(c){return this.each(function(){var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",
transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},
clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};c&&e.extend(b,c);this.config=b;e.support.touch="ontouchend"in document;e.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=e(this);var g=b.container,d;a:{d=g[0];for(var a=["Webkit","Moz","O","ms"],k=0;k<a.length;k++)if(a[k]+"Transition"in d.style){d=a[k];break a}d="transition"in d.style?"":!1}b.prefix=d;b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";g.find(b.targetSelector).each(function(){b.origOrder.push(e(this))});
if(b.sortOnLoad){var f;e.isArray(b.sortOnLoad)?(d=b.sortOnLoad[0],f=b.sortOnLoad[1],e(b.sortSelector+"[data-sort="+b.sortOnLoad[0]+"][data-order="+b.sortOnLoad[1]+"]").addClass("active")):(e(b.sortSelector+"[data-sort="+b.sortOnLoad+"]").addClass("active"),d=b.sortOnLoad,b.sortOnLoad="desc");w(d,f,g,b)}for(f=0;2>f;f++)d=0==f?d=b.prefix:"",b.transition[d+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[d+"perspective"]=b.perspectiveDistance+"px",b.perspective[d+"perspective-origin"]=
b.perspectiveOrigin;for(f=0;2>f;f++)d=0==f?d=b.prefix:"",b.clean[d+"transition"]="none";"list"==b.layoutMode?(g.addClass(b.listClass),b.origDisplay=b.targetDisplayList):(g.addClass(b.gridClass),b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;f=b.showOnLoad.split(" ");e.each(f,function(){e(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});g.find(b.targetSelector).addClass("mix_all");"all"==f[0]&&(f[0]="mix_all",b.showOnLoad="mix_all");var h=e();e.each(f,function(){h=h.add(e("."+
this))});h.each(function(){var a=e(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);a.css(b.transition)});setTimeout(function(){b.mixing=!0;h.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?h.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):h.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,
b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;e(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this),c=a.attr("data-sort"),d=a.attr("data-order");if(a.hasClass("active")){if("random"!=c)return!1}else e(b.sortSelector).removeClass("active"),a.addClass("active");g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))});q(b.filter,c,d,g,b)}});e(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this);if(!1==b.multiFilter)e(b.filterSelector).removeClass("active"),
a.addClass("active"),b.filter=a.attr("data-filter"),e(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active");else{var c=a.attr("data-filter");a.hasClass("active")?(a.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+c),"")):(a.addClass("active"),b.filter=b.filter+" "+c)}q(b.filter,null,null,g,b)}})})},toGrid:function(){return this.each(function(){var c=this.config;"grid"!=c.layoutMode&&(c.layoutMode="grid",q(c.filter,null,null,e(this),c))})},toList:function(){return this.each(function(){var c=
this.config;"list"!=c.layoutMode&&(c.layoutMode="list",q(c.filter,null,null,e(this),c))})},filter:function(c){return this.each(function(){var b=this.config;b.mixing||(e(b.filterSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+c+'"]').addClass("active"),q(c,null,null,e(this),b))})},sort:function(c){return this.each(function(){var b=this.config,g=e(this);if(!b.mixing){e(b.sortSelector).removeClass("active");if(e.isArray(c)){var d=c[0],a=c[1];e(b.sortSelector+'[data-sort="'+c[0]+'"][data-order="'+
c[1]+'"]').addClass("active")}else e(b.sortSelector+'[data-sort="'+c+'"]').addClass("active"),d=c,a="desc";g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))});q(b.filter,d,a,g,b)}})},multimix:function(c){return this.each(function(){var b=this.config,g=e(this);multiOut={filter:b.filter,sort:null,order:"desc",layoutMode:b.layoutMode};e.extend(multiOut,c);b.mixing||(e(b.filterSelector).add(b.sortSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),
"undefined"!==typeof multiOut.sort&&(e(b.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))})),b.layoutMode=multiOut.layoutMode,q(multiOut.filter,multiOut.sort,multiOut.order,g,b))})},remix:function(c){return this.each(function(){var b=this.config,g=e(this);b.origOrder=[];g.find(b.targetSelector).each(function(){var c=e(this);c.addClass("mix_all");b.origOrder.push(c)});!b.mixing&&"undefined"!==
typeof c&&(e(b.filterSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+c+'"]').addClass("active"),q(c,null,null,g,b))})}};e.fn.mixitup=function(c,b){if(x[c])return x[c].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof c||!c)return x.init.apply(this,arguments)};e.fn.removeStyle=function(c){return this.each(function(){var b=e(this);c=c.replace(/\s+/g,"");var g=c.split(",");e.each(g,function(){var c=RegExp(this.toString()+"[^;]+;?","g");b.attr("style",function(a,
b){if(b)return b.replace(c,"")})})})}})(jQuery);
(function() {


}).call(this);
/*! http://responsiveslides.com v1.54 by @viljamis */

(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//










