webpackJsonp([1],{101:function(t,e,r){"use strict";var n=r(0),i=r(102);n.Observable.fromEvent=i.fromEvent},102:function(t,e,r){"use strict";var n=r(103);e.fromEvent=n.FromEventObservable.create},103:function(t,e,r){"use strict";function n(t){return!!t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}function i(t){return!!t&&"function"==typeof t.on&&"function"==typeof t.off}function o(t){return!!t&&"[object NodeList]"===v.call(t)}function c(t){return!!t&&"[object HTMLCollection]"===v.call(t)}function s(t){return!!t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}var u=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},l=r(0),a=r(36),h=r(22),f=r(23),p=r(7),v=Object.prototype.toString,b=function(t){function e(e,r,n,i){t.call(this),this.sourceObj=e,this.eventName=r,this.selector=n,this.options=i}return u(e,t),e.create=function(t,r,n,i){return h.isFunction(n)&&(i=n,n=void 0),new e(t,r,i,n)},e.setupSubscription=function(t,r,u,l,a){var h;if(o(t)||c(t))for(var f=0,v=t.length;f<v;f++)e.setupSubscription(t[f],r,u,l,a);else if(s(t)){var b=t;t.addEventListener(r,u,a),h=function(){return b.removeEventListener(r,u)}}else if(i(t)){var d=t;t.on(r,u),h=function(){return d.off(r,u)}}else{if(!n(t))throw new TypeError("Invalid event target");var m=t;t.addListener(r,u),h=function(){return m.removeListener(r,u)}}l.add(new p.Subscription(h))},e.prototype._subscribe=function(t){var r=this.sourceObj,n=this.eventName,i=this.options,o=this.selector,c=o?function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];var n=a.tryCatch(o).apply(void 0,e);n===f.errorObject?t.error(f.errorObject.e):t.next(n)}:function(e){return t.next(e)};e.setupSubscription(r,n,c,t,i)},e}(l.Observable);e.FromEventObservable=b},104:function(t,e,r){"use strict";var n=r(0),i=r(38);n.Observable.prototype.filter=i.filter},105:function(t,e,r){"use strict";var n=r(0),i=r(106);n.Observable.prototype.takeUntil=i.takeUntil},106:function(t,e,r){"use strict";function n(t){return this.lift(new s(t))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(9),c=r(10);e.takeUntil=n;var s=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.notifier))},t}(),u=function(t){function e(e,r){t.call(this,e),this.notifier=r,this.add(c.subscribeToResult(this,r))}return i(e,t),e.prototype.notifyNext=function(t,e,r,n,i){this.complete()},e.prototype.notifyComplete=function(){},e}(o.OuterSubscriber)},107:function(t,e,r){"use strict";var n=r(0),i=r(108);n.Observable.prototype.repeat=i.repeat},108:function(t,e,r){"use strict";function n(t){return void 0===t&&(t=-1),0===t?new c.EmptyObservable:t<0?this.lift(new s(-1,this)):this.lift(new s(t-1,this))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(1),c=r(18);e.repeat=n;var s=function(){function t(t,e){this.count=t,this.source=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.count,this.source))},t}(),u=function(t){function e(e,r,n){t.call(this,e),this.count=r,this.source=n}return i(e,t),e.prototype.complete=function(){if(!this.isStopped){var e=this,r=e.source,n=e.count;if(0===n)return t.prototype.complete.call(this);n>-1&&(this.count=n-1),r.subscribe(this._unsubscribeAndRecycle())}},e}(o.Subscriber)},71:function(t,e,r){"use strict";function n(t){return _._37(0,[(t()(),_._15(0,0,null,null,3,"span",[],null,null,null,null,null)),_._14(1,278528,null,0,C.i,[_.y,_.z,_.n,_.M],{ngClass:[0,"ngClass"]},null),_._31(2,{currentChar:0,selectedChar:1}),(t()(),_._35(3,null,["",""]))],function(t,e){t(e,1,0,t(e,2,0,e.context.$implicit.isCurrent,e.context.$implicit.isSelected))},function(t,e){t(e,3,0,e.context.$implicit.value)})}function i(t){return _._37(0,[(t()(),_._15(0,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),_._35(-1,null,["Text editor based on Observables"])),(t()(),_._15(2,0,null,null,1,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(t()(),_._35(-1,null,[" Supports typing of letters and numbers. Basic text selection and cursor placement is also supported. "])),(t()(),_._15(4,0,null,null,3,"div",[["class","editor"]],null,null,null,null,null)),(t()(),_._15(5,0,null,null,2,"div",[["class","page noselect"],["id","page"]],null,null,null,null,null)),(t()(),_._10(16777216,null,null,1,null,n)),_._14(7,802816,null,0,C.j,[_.Y,_.V,_.y],{ngForOf:[0,"ngForOf"]},null),(t()(),_._15(8,0,null,null,2,"h4",[],null,null,null,null,null)),(t()(),_._15(9,0,null,null,1,"a",[["href","http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0"]],null,null,null,null,null)),(t()(),_._35(-1,null,["Read more here"]))],function(t,e){t(e,7,0,e.component.currentDocument.characters)},null)}function o(t){return _._37(0,[(t()(),_._15(0,0,null,null,1,"editor",[],null,null,null,i,g)),_._14(1,114688,null,0,O,[],null,null)],function(t,e){t(e,1,0)},null)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(){}return t}(),s=function(){function t(){}return t.spaceBar=32,t.enter=13,t.a=65,t.z=90,t.backSpace=8,t.zero=48,t.nine=57,t}(),u=function(){function t(t){this.isCurrent=!1,this.lineBreak=!1,this.placeHolder=!1,this.deleteChar=!1,this.isSelected=!1,t===s.enter?(this.value="\n",this.lineBreak=!0):-1===t?(this.value="",this.placeHolder=!0):t===s.backSpace?this.deleteChar=!0:this.value=String.fromCharCode(t).toLowerCase()}return t}(),l=function(){function t(){this.characters=[],this.firstSelectedCharacter=-1,this.currentChar=new u(-1),this.characters.push(this.currentChar),this.characters[0].isCurrent=!0}return t.prototype.deselectPreviousCharacter=function(){if(this.currentChar){var t=this.characters.indexOf(this.currentChar);this.characters[t].isCurrent=!1}},t.prototype.clearSelection=function(t){this.firstSelectedCharacter=-1,t&&(this.firstSelectedCharacter=this.characters.indexOf(t.character)),this.characters.forEach(function(t){return t.isSelected=!1})},t.prototype.edit=function(t,e){if(t.deleteChar){var r=this.characters.indexOf(this.currentChar);r>=1&&(this.characters.splice(r,1),this.characters.length>1?(this.characters[r-1].isCurrent=!0,this.currentChar=this.characters[r-1]):1===this.characters.length&&(this.characters[0].isCurrent=!0,this.currentChar=this.characters[0]))}else if(this.characters.splice(e,0,t),t.lineBreak){this.deselectPreviousCharacter();var n=new u(-1);this.characters.splice(e+1,0,n),this.placeCursor(n)}else this.placeCursor(t)},t.prototype.placeCursor=function(t){this.deselectPreviousCharacter();var e=this.characters.indexOf(t);this.characters[e].isCurrent=!0,this.currentChar=t},t.prototype.selectCharacter=function(t){for(var e=this.characters.indexOf(t),r=this.firstSelectedCharacter;r<=e;r++)this.characters[r].isSelected=!0},t.prototype.processInput=function(t,e){if("modify"===e){var r=this.characters.indexOf(this.currentChar);r<0&&(r=this.characters.length-1),this.edit(t,r+1)}"select"===e&&this.placeCursor(t),"range"===e&&this.selectCharacter(t)},t}(),a=r(0),h=(r.n(a),r(101)),f=(r.n(h),r(82)),p=(r.n(f),r(74)),v=(r.n(p),r(104)),b=(r.n(v),r(78)),d=(r.n(b),r(105)),m=(r.n(d),r(107)),y=(r.n(m),r(79)),O=(r.n(y),function(){function t(){this.currentDocument=new l}return t.prototype.isSuportedCharacter=function(t){return t>=s.a&&t<s.z||(t===s.enter||t===s.spaceBar||t===s.backSpace||t>=s.zero&&t<=s.nine)},t.prototype.getCharacterFromElement=function(t,e){var r=[].slice.call(this.editor.children).indexOf(t.target);return r>=0?{operation:e,character:this.currentDocument.characters[r],element:t}:null},t.prototype.ngOnInit=function(){var t=this;this.editor=document.getElementById("page"),this.keyUp=a.Observable.fromEvent(document,"keyup").filter(function(e){return t.isSuportedCharacter(e.which)}).map(function(t){return{operation:"modify",character:new u(t.which),element:t}}),this.mouseDown=a.Observable.fromEvent(this.editor,"mousedown").do(function(e){return t.currentDocument.clearSelection(t.getCharacterFromElement(e,"range"))}).flatMap(function(e){return a.Observable.fromEvent(t.editor,"mousemove")}).map(function(e){return t.getCharacterFromElement(e,"range")}).filter(function(t){return null!==t}).takeUntil(a.Observable.fromEvent(this.editor,"mouseup")).repeat(),this.click=a.Observable.fromEvent(this.editor,"click").map(function(e){return t.getCharacterFromElement(e,"select")}).filter(function(t){return null!==t}),this.keyDown=a.Observable.fromEvent(document,"keydown").filter(function(t){return t.which===s.spaceBar||t.which===s.backSpace}).map(function(t){return{element:t}}),this.keyUp.merge(this.click).merge(this.mouseDown).merge(this.keyDown).subscribe(function(e){t.currentDocument.processInput(e.character,e.operation),e.element.preventDefault()})},t}()),_=r(3),C=r(4),w=[],g=_._13({encapsulation:2,styles:w,data:{}}),E=_._11("editor",O,o,{},{},[]);r.d(e,"TextEditorModuleNgFactory",function(){return j});var S=r(3),x=r(4),k=r(17),j=S._12(c,[],function(t){return S._26([S._27(512,S.k,S._8,[[8,[E]],[3,S.k],S.E]),S._27(4608,x.m,x.l,[S.A,[2,x.t]]),S._27(512,x.c,x.c,[]),S._27(512,k.m,k.m,[[2,k.r],[2,k.k]]),S._27(512,c,c,[]),S._27(1024,k.i,function(){return[[{path:"",component:O}]]},[])])})},74:function(t,e,r){"use strict";var n=r(0),i=r(33);n.Observable.prototype.map=i.map},78:function(t,e,r){"use strict";var n=r(0),i=r(21);n.Observable.prototype.mergeMap=i.mergeMap,n.Observable.prototype.flatMap=i.mergeMap},79:function(t,e,r){"use strict";var n=r(0),i=r(35);n.Observable.prototype.merge=i.merge},82:function(t,e,r){"use strict";var n=r(0),i=r(83);n.Observable.prototype.do=i._do,n.Observable.prototype._do=i._do},83:function(t,e,r){"use strict";function n(t,e,r){return this.lift(new c(t,e,r))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(1);e._do=n;var c=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.nextOrObserver,this.error,this.complete))},t}(),s=function(t){function e(e,r,n,i){t.call(this,e);var c=new o.Subscriber(r,n,i);c.syncErrorThrowable=!0,this.add(c),this.safeSubscriber=c}return i(e,t),e.prototype._next=function(t){var e=this.safeSubscriber;e.next(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.next(t)},e.prototype._error=function(t){var e=this.safeSubscriber;e.error(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.error(t)},e.prototype._complete=function(){var t=this.safeSubscriber;t.complete(),t.syncErrorThrown?this.destination.error(t.syncErrorValue):this.destination.complete()},e}(o.Subscriber)}});
//# sourceMappingURL=bundle-webpack-lazy-loading.js.map