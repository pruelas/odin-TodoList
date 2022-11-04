(()=>{"use strict";var e={538:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const d=a},426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,'html{\n    height: 100%;\n    width: 100%;\n}\n\nbody{\n    height: inherit;\n    width:inherit;\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows:  min(100px, 200px) repeat(4, 1fr);\n    grid-template-areas: \n    "header header"\n    "sidebar content"\n    "sidebar content"\n    "sidebar content"\n    "sidebar content";\n    /* border: solid black 2px; */\n    background-color: rgb(255, 255, 255);\n}\n\ndiv.header{\n    grid-area: header;\n    background-image: linear-gradient(rgb(218, 218, 218), rgb(211, 211, 211));\n    /* border: solid black 1px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    font-weight: bold;\n    border-bottom: solid black 2px;\n}\n\ndiv.sidebar{\n    grid-area: sidebar;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(218, 218, 218);\n    height: 100%;\n    /* border: solid rgb(185, 39, 39) 1px; */\n    align-items: center;\n    overflow-x: visible;\n    border-right: solid black 2px;\n}\n\n.navigation{\n    margin-top: 1em;\n    display:grid;\n    /* gap: .7rem; */\n    margin-bottom: 1em;\n    width: 95%;\n    font-size: 1.2rem;\n}\n\n.navigation > .tabs{\n    display: flex;\n    padding: 1rem 0;\n    /* padding-left: .4rem; */\n    border-radius: 1rem;\n    border-bottom: solid white 1px;\n    align-content: center;\n    width: 100%;\n    /* text-align: center; */\n}\n\n.tabs > svg{\n    margin-left: .4rem;\n}\n\n.tabs > div{\n    /* border: solid red 1px; */\n    align-self: center;\n}\n\n#completed > div{\n    margin-left: .4rem;\n}\n\n.navigation > div:hover{\n    background-image: linear-gradient(rgb(141, 141, 141), rgb(94, 94, 94));;\n    border-radius: 1rem;\n}\n\n.selected{\n    background-image: linear-gradient(rgb(141, 141, 141), rgb(94, 94, 94));\n}\n\n.projectSidebar{\n    font-size:1.5rem;\n    font-weight: bold;\n    width: 90%;\n    padding-left: .2rem;\n    border-bottom:solid black 2px;\n}\n\n#projects{\n    /* position: relative; */\n    display: flex;\n    flex-direction: column;\n    /* border: solid red 1px; */\n    width: 95%;\n    max-height: 90%;\n    /* gap: .7rem; */\n    overflow-y: scroll;\n    /* overflow-x: visible; */\n    margin-bottom: .1rem;\n}\n\n.projectWrapper{\n    position: relative;\n    display:flex;\n    /* height: fit-content; */\n    /* flex-direction: row; */\n    /* width: 0; */\n    /* min-width: 100%; */\n    /* background-color: rgb(120, 78, 136); */\n    /* border: solid rgb(255, 255, 255) 1px; */\n    /* justify-content: space-between; */\n    /* overflow: hidden; */\n    /* background-image: linear-gradient(rgb(119, 75, 160), rgb(97, 63, 129)); */\n    padding: .7rem 0rem;\n    padding-left: .2rem;\n    margin-top: .1rem;\n    border-radius: 1rem;\n    align-items: center;\n    border-bottom: solid white 1px;\n    /* box-shadow: 1px 4px 1px 1px rgb(0, 0, 0); */\n}\n\n.projectWrapper:hover{\n    background-image: linear-gradient(rgb(141, 141, 141), rgb(94, 94, 94));\n}\n\n.title{\n    /* position: absolute; */\n    align-self: center;\n    width: 80%;\n    /* height: 100%; */\n    /* border: solid white 1px; */\n    /* padding: .5rem 0rem;\n    padding-left: .4rem;\n    margin-top: .1rem; */\n    border-radius: .2rem;\n    /* overflow:hidden; */\n    text-overflow: ellipsis;\n    word-break: break-word;\n}\n\n.title:hover{\n    /* position: absolute; */\n    /* align-self: center; */\n    /* align-self: baseline; */\n    /* overflow: visible; */\n    /* width: fit-content; */\n    /* border: 1px solid #eee; */\n    /* box-shadow: 0rem .1rem .1rem 0rem black; */\n    /* padding:inherit; */\n    /* white-space: normal; */\n    /* bottom: 5%; */\n    /* word-break: break-word; */\n    /* z-index:5; */\n    /* background-color:rgb(158, 130, 165); */\n}\n\n.projectIcon > svg{\n    /* align-self: center; */\n    /* border: solid white 1px; */\n    /* justify-self: center; */\n    margin-right: .2rem;\n}\n\n.projectWrapper .removeProjectButton{\n    position: absolute;\n    display: none;\n    right: .1rem;\n    align-items: center;\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n    font-size: .8rem;\n    font-weight: bold;\n    text-align: center;\n\t/* cursor: pointer; */\n\t/* outline: inherit; */\n    /* margin-right: .4rem; */\n}\n\n.projectWrapper:hover > .removeProjectButton{\n    display:block;\n    background-color: white;\n    padding: .4rem;\n    border-radius: 50%;\n}\n\n.projectWrapper button{\n    /* position: absolute; */\n    /* align-self: flex-end; */\n}\n\n#addProjectButton{\n    margin: .5rem 0;\n    padding: 1rem;\n    width: 90%;\n    font-size: 1rem;\n    background-image: linear-gradient(rgb(141, 141, 141), rgb(94, 94, 94));\n    border-radius: 2rem;\n}\n\n#addProjectButton:hover{\n    background-image: linear-gradient(rgb(94, 94, 94), rgb(94, 94, 94));\n}\n\ndiv#content{\n    grid-area: content;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    /* border: solid green 2px; */\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(240, 240, 240);\n}\n\n.contentWrapper{\n    width: 100%;\n    height: 100%;\n    background-color: rgb(240, 240, 240);\n    /* border: solid red 2px; */\n    display: flex;\n    flex-direction: column;\n    /* justify-self: center; */\n}\n\n.projectInfo{\n    position: relative;\n    display: flex;\n    /* border: solid green 2px; */\n    /* border-radius: 2rem; */\n    border: solid black 2px;\n    margin-top: 3rem;\n    padding: 1rem;\n    width: 95%;\n    align-self: center;\n    align-content: center;\n    margin-bottom: .4rem;\n    background-image: linear-gradient(rgb(235, 235, 235), rgb(240, 240, 240));\n}\n\n.projectTitle{\n    height: 100%;\n    /* border: solid greenyellow 2px; */\n    display: flex;\n    font-size: 3rem;\n    flex-grow: 1;\n    /* flex: 1 1 auto; */\n    margin-right: 4rem;\n    align-items: end;\n    word-break: break-word;\n}\n\n.projectDueDate{\n    display: flex;\n    /* border: solid limegreen 2px; */\n    height: 100%;\n    align-self: center;\n    font-size: 3rem;\n    /* align-items:end; */\n    /* text-align: center; */   \n    word-break: break-word;\n}\n\n.projectEdit{\n    margin-left: 2rem;\n    align-self: center;\n    font-size: 2rem;\n    height: 3rem;\n    width: 3rem;\n    /* border: solid black 1px; */\n    /* border-radius: 1rem; */\n}\n\n.projectEdit > svg{\n    height: 100%;\n    width: 100%;\n}\n\n.projectToDoItemsWrapper{\n    display: flex;\n    /* padding-top: .4rem; */\n    /* border: solid blue 1px; */\n    font-size: 2rem;\n    /* padding-left: 3rem; */\n    /* border-bottom: solid 2px black; */\n    width: 95%;\n    align-self: center;\n    align-items: center;\n    /* justify-items: center; */\n    padding: .4rem 0;\n}\n\n.projectToDoItemsLabel{\n    flex-grow: 1;\n}\n\n.addToDoItem{\n    /* align-self: center; */\n    display: flex;\n    right: .3rem;\n    /* height: 90%; */\n    /* justify-self: center; */\n    /* position: absolute; */\n    padding: .5rem;\n    background-image: linear-gradient(rgb(141, 141, 141), rgb(94, 94, 94));\n    border: solid black 1px;\n    border-radius: 2rem;\n}\n\n.addToDoItem:hover{\n    background-image: linear-gradient(rgb(94, 94, 94), rgb(94, 94, 94)) ;\n}\n\n#projectToDoItemsDiv{\n    display: flex;\n    flex-direction: column;\n    border: solid black 1px;\n    border-top: solid black 2px;\n    /* justify-content: center; */\n    align-self: center;\n    width: 95%;\n    max-height: 95%;\n    overflow: scroll;\n    margin-bottom: 1rem;\n}\n\n.toDoItem{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    /* border: solid brown 1px; */\n    padding: .7rem;\n    /* align-items: center; */\n    justify-content: center;\n    /* width: 100%; */\n    background-image: linear-gradient(rgb(235, 235, 235), rgb(204, 204, 204));\n    border-bottom: white solid 1px;\n    /* border-left: black solid 1px; */\n    /* border-right: black solid 1px; */\n}\n\n\n\n\n.priority{\n    height: 100%;\n}\n\n.high{\n    border: solid red 3px;\n}\n\n.low{\n    border: solid yellow 2px;\n}\n\n.toDoItemInfo{\n    display: flex;\n    flex-direction: row;\n    /* width: 100%; */\n    /* background-color: aliceblue; */\n}\n\n.toDoItemTitle{\n    /* border: solid violet 1px; */\n    /* width: 70%; */\n    flex-grow: 2;\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-left: 3rem;\n}\n\n.toDoItemDueDate{\n    /* border: solid orange 1px; */\n    /* width: 20%; */\n    flex-grow: 1;\n    font-size: 1.2rem;\n    font-weight: bold;\n    height: 100%;\n}\n\n.toDoItemDescription{\n    /* border: solid teal 1px; */\n    width: 95%;\n    margin-top: .2rem;\n    margin-left: 3rem;\n}\n\n.toDoItem .completeButton{\n    position: absolute;\n    left: .8rem;\n    /* align-content: center; */\n    /* justify-content: center;  */\n    padding: .5rem;\n    font-size: 1rem;\n    /* height: 50%; */\n    /* width: 50%; */\n    /* width: 2rem; */\n    border: solid black 2px;\n    background-color: white;\n    /* text-align: center; */\n    /* line-height: 50%; */\n    border-radius: 2rem;\n}\n\n.completeButton .svg{\n    height: 1rem;\n    width: 1rem;\n}\n\n.toDoItem .changeButtons{\n    display: none;\n    max-height: 100%;\n    width: fit-content;\n    position: absolute;\n    right: 1rem;\n    /* border: black solid 1px; */\n}\n\n.toDoItem:hover> .changeButtons{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n\n}\n\n.changeButtons .editButton{\n    display: flex;\n    max-width: 5rem;\n    align-content: center;\n    /* border: solid 1px pink; */\n}\n\n.changeButtons .svg{\n    width: 1rem;\n\n}\n\n.toDoItem .removeButton{\n    /* position: absolute; */\n    display: flex;\n    right: 1rem;\n    align-items: center;\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\t/* padding: 0; */\n\tfont: inherit;\n    font-size: .8rem;\n    /* font-weight: bold; */\n    text-align: center;\n    border: black solid 1px;\n\t/* cursor: pointer; */\n\t/* outline: inherit; */\n    /* margin-right: .4rem; */\n\n    /* display:flex; */\n    background-color: white;\n    padding: .4rem .5rem;\n    border-radius: 50%;\n    /* align-items: center; */\n    justify-items: center;\n}\n\n/* .changeButtons{\n    display:none;\n\n} */\n\n\n/* .toDoItem:hover > .removeButton{\n    display:flex;\n    background-color: white;\n    padding: .4rem;\n    border-radius: 50%;\n    align-items: center;\n    justify-items: center;\n} */\n\n/* div#projectForm{\n    display: none;\n} */\n\n.projectForm{\n    position: absolute;\n    border: rgb(221, 0, 0) solid 1px;\n    display: flex;\n    align-self: center;\n    justify-self: center;\n    /* top: 15vh; */\n    background-color: rgba(170, 170, 170, 0.616);\n    /* z-index: 1; */\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n}\n.addProjectForm{\n    background-color: rgb(255, 255, 255);\n    border: solid black 1px;\n    height: fit-content;\n    width: fit-content;\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 2vmin;\n    box-shadow: 1px 1px 1px 1px black;\n    border-radius: 1rem;\n}\n\n.addProjectForm> h1{\n    font-size: 1.5em;\n    font-weight: bolder;\n    border-bottom: solid black 1px;\n    margin-bottom: .5rem;\n}\n\n.addProjectForm > label{\n    margin-top: .8em;\n}\n\n.addProjectForm > input{\n    font-size: 1rem;\n}\n\n.addProjectForm > button{\n    margin-top: .8em;\n    padding: 1em;\n}\n\ndiv#toDoItemForm{\n    position: absolute;\n    border: rgb(221, 0, 0) solid 1px;\n    display: flex;\n    align-self: center;\n    justify-self: center;\n    /* top: 15vh; */\n    background-color: rgba(167, 167, 167, 0.575);\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n}\n\n.addToDoItemForm{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n    padding: 4rem 7rem;\n    background-color: rgb(255, 255, 255);\n    gap: .5rem;\n    border-radius: .5rem;\n    font-size: 2vmin;\n    box-shadow: 1px 1px 1px 1px black;\n}\n\n.addToDoItemForm > h1{\n    font-size: 1.5em;\n    font-weight: bolder;\n    border-bottom: solid black 1px;\n    margin-bottom: 1rem;\n}\n\n.addToDoItemForm > button{\n    margin-top: 1rem;\n    padding: 1rem;\n    background-image: linear-gradient(rgb(141, 141, 141), rgb(114, 114, 114));\n    border-radius: 2rem;\n    border:none;\n}\n\n.addToDoItemForm > button:hover{\n    background-image: linear-gradient(rgb(94, 94, 94), rgb(94, 94, 94));;\n}\n\n.priority{\n    display: flex;\n    /* flex-direction: column; */\n    justify-content: center;\n    gap: 1rem;\n}\n\nfooter{\n    display: none;\n}\n',""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var l=e[d],c=o.base?l[0]+o.base:l[0],s=i[c]||0,m="".concat(c," ").concat(s);i[c]=s+1;var g=t(m),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)n[g].references++,n[g].updater(p);else{var u=r(p,o);o.byIndex=d,n.splice(d,0,{identifier:m,updater:u,references:1})}a.push(m)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var l=o(e,r),c=0;c<i.length;c++){var s=t(i[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),d=t(565),l=t.n(d),c=t(216),s=t.n(c),m=t(589),g=t.n(m),p=t(538),u={};u.styleTagTransform=g(),u.setAttributes=l(),u.insert=a().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=s(),n()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;var b=t(426),f={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}f.styleTagTransform=g(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),n()(b.Z,f),b.Z&&b.Z.locals&&b.Z.locals;var v=function(e,n,t,o,r){var i=e,a=n,d=t,l=o,c=!1,s=r;return{getTitle:function(){return i},getDescription:function(){return a},getDueDate:function(){return d},getPriority:function(){return l},getCompleted:function(){return c},getProject:function(){return s},changeTitle:function(e){i=e},changeDescription:function(e){a=e},changeDueDate:function(e){d=e},changePriority:function(e){l=e},changeCompleted:function(e){c=0==e},changeProject:function(e){s=e}}},x=function(e,n){var t=e,o=n,r=[],i=0;return{getTitle:function(){return t},getDueDate:function(){return o},getToDoItems:function(){return r},changeDueDate:function(e){o=e},addToDoItem:function(e){r.push(e)},checkCompleted:function(){return r.length==i},completeToDoItem:function(e){r[e].changeCompleted(),0==r[e].getCompleted?i-=1:i+=1},deleteToDoItem:function(e){delete r[e]}}};function y(e,n){var t,o,r,i,a,d,l,c,s,m;n.innerHTML="";for(var g=0;g<e.length;g++)void 0!==e[g]&&(t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),l=document.createElement("button"),c=document.createElement("div"),s=document.createElement("div"),m=document.createElement("button"),o.className="priority",t.className="toDoItem",r.className="toDoItemInfo",i.className="toDoItemTitle",a.className="toDoItemDueDate",d.className="toDoItemDescription",l.className="completeButton",c.className="changeButtons",s.className="editButton",m.className="removeButton",i.textContent="Title: "+e[g].getTitle(),a.textContent="Due Date: "+e[g].getDueDate(),d.textContent=" Description: "+e[g].getDescription(),"high"==e[g].getPriority()?o.classList.add("high"):o.classList.add("low"),l.innerHTML="",s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24px" height="24px"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg>',m.textContent="X",m.setAttribute("data-index",g),m.onclick=function(){E(this,n.getAttribute("data-projectIndex"))},r.append(i,a),c.append(s,m),t.append(o,l,r,d,c),n.append(t))}function w(e){console.log("projectLoad"),A();var n=document.getElementById("content"),t=document.createElement("div"),o=document.createElement("div"),r=(document.createElement("div"),document.createElement("div")),i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div");t.className="contentWrapper",o.className="projectInfo",i.className="projectDueDate",r.className="projectTitle",a.className="projectEdit",d.className="projectToDoItemsWrapper",l.className="projectToDoItemsLabel",c.className="addToDoItem",e.classList.add("selected");var m=e.getAttribute("data-index");s.id="projectToDoItemsDiv",s.setAttribute("data-projectIndex",m),r.textContent="Project: "+I[m].getTitle(),i.textContent="Due Date: "+I[m].getDueDate(),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24px" height="24px"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg>',a.setAttribute("data-index",m),a.onclick=function(){console.log("edit Project")},y(I[m].getToDoItems(),s),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" height="24px" width = "24px" viewBox="0 0 512 512" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g><path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/></g></svg>',c.setAttribute("data-index",m),c.onclick=function(){!function(e){console.log("hereTODOITEMADD");var n=document.getElementById("toDoItemForm");n.style.visibility="visible",n.setAttribute("data-projectIndex",e.getAttribute("data-index")),console.log(document.querySelector("[data-projectIndex = '"+n.getAttribute("data-projectIndex")+"']")),console.log(e,e.getAttribute("data-index"),n.getAttribute("data-projectIndex"))}(this)},l.textContent="ToDo Items",o.append(r,i,a),d.append(l,c),t.append(o,d,s),n.append(t)}function D(){A(),document.getElementById("content").innerHTML="Home Load"}function j(){var e,n,t,o,r=document.getElementById("projects");r.innerHTML="";for(var i=0;i<I.length;i++)console.log(i),void 0!==I[i]?(console.log("in if statement "+h(I[i])),e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("button"),e.className="projectWrapper tabs",n.className="projectIcon",t.className="title",o.className="removeProjectButton",e.setAttribute("data-index",i),e.onclick=function(){w(this)},n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24px" height="24px"><path d="M17.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h11c2.481,0,4.5,2.019,4.5,4.5v15c0,2.481-2.019,4.5-4.5,4.5ZM6.5,1c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5H6.5Zm11.5,4.5c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5ZM8.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Z"/></svg>',t.textContent=I[i].getTitle(),o.textContent="X",o.setAttribute("data-index",i),o.onclick=function(e){var n;e.stopPropagation(),n=this,console.log(n.getAttribute("data-index")),delete I[n.getAttribute("data-index")],console.log("deleting project"),document.getElementById("projectSidebar").innerHTML="",j()},e.append(n,t,o),r.appendChild(e)):console.log("skipped")}var I=[],k=document.getElementById("addToDoItemForm");k.addEventListener("submit",(function(e){console.log("addToDoItem");var n=document.getElementById("toDoItemForm");n.style.visibility="hidden";var t=document.getElementById("projectToDoItemsDiv");console.log(t),document.querySelector("[data-projectIndex = '"+n.getAttribute("data-projectIndex")+"']"),I[n.getAttribute("data-projectIndex")].addToDoItem(new v(k.elements.title.value,k.elements.description.value,k.elements.dueDate.value,k.elements.priority.value)),y(I[n.getAttribute("data-projectIndex")].getToDoItems(),t),e.preventDefault()}));var T=document.getElementById("addProjectForm");function E(e,n){console.log(e+"  "+n),I[n].deleteToDoItem(e.getAttribute("data-index")),console.log("deleting toDoItem");var t=document.getElementById("projectToDoItemsDiv");y(I[n].getToDoItems(),t)}function A(){document.getElementById("content").innerHTML="",Array.from(document.getElementsByClassName("tabs")).forEach((function(e){e.classList.remove("selected")}))}T.addEventListener("submit",(function(e){console.log("here2"),document.getElementById("projectForm").style.visibility="hidden",I.push(new x(T.elements.title.value,T.elements.dueDate.value)),console.log(T.elements.dueDate.value),j(),e.preventDefault()})),document.getElementById("content"),D(),document.getElementById("addProjectButton").onclick=function(){console.log("here"),console.log(I),document.getElementById("projectForm").style.visibility="visible"},Array.from(document.getElementsByClassName("tabs")).forEach((function(e){"home"===e.id?e.addEventListener("click",(function(n){D(),e.classList.add("selected")})):"completed"===e.id&&e.addEventListener("click",(function(n){A(),document.getElementById("content").innerHTML="Completed Load",console.log("completed + selected"),e.classList.add("selected")}))})),document.body.addEventListener("click",(function(e){var n=document.getElementById("projectForm");"addProjectForm"!==e.target.className&&"addProject"!==e.target.className&&e.target instanceof HTMLDivElement&&"hidden"!==n.style.visibility&&(n.style.visibility="hidden")})),document.body.addEventListener("click",(function(e){var n=document.getElementById("toDoItemForm");"addToDoItemForm"!==e.target.className&&"priority"!==e.target.className&&e.target instanceof HTMLDivElement&&"hidden"!==n.style.visibility&&(n.style.visibility="hidden")}))})()})();