!function(a){a.fn.appear=function(g,f){var d=a.extend({data:void 0,one:!0,accX:0,accY:0},f);return this.each(function(){var e=a(this);if(e.appeared=!1,!g)return void e.trigger("appear",d.data);var c=a(window),h=function(){if(!e.is(":visible"))return void(e.appeared=!1);var b=c.scrollLeft(),h=c.scrollTop(),k=e.offset(),a=k.left,k=k.top,f=d.accX,g=d.accY,x=e.height(),s=c.height(),v=e.width(),t=c.width();h>k+x+g||k>h+s+g||b>a+v+f||a>b+t+f?e.appeared=!1:e.appeared||e.trigger("appear",d.data)},b=function(){if(e.appeared=!0,d.one){c.unbind("scroll",h);var b=a.inArray(h,a.fn.appear.checks);0>b||a.fn.appear.checks.splice(b,1)}g.apply(this,arguments)};d.one?e.one("appear",d.data,b):e.bind("appear",d.data,b);c.scroll(h);a.fn.appear.checks.push(h);h()})};a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var g=a.fn.appear.checks.length;if(0<g)for(;g--;)a.fn.appear.checks[g]()},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout);a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}});a.each("append prepend after before attr removeAttr addClass removeClass toggleClass remove css show hide".split(" "),function(g,f){var d=a.fn[f];d&&(a.fn[f]=function(){var f=d.apply(this,arguments);return a.fn.appear.run(),f})})}(jQuery);!function(a){a.fn.countTo=function(g){return g=g||{},a(this).each(function(){function f(c){c=d.formatter.call(h,c,d);b.text(c)}var d=a.extend({},a.fn.countTo.defaults,{from:a(this).data("from"),to:a(this).data("to"),speed:a(this).data("speed"),refreshInterval:a(this).data("refresh-interval"),decimals:a(this).data("decimals")},g),e=Math.ceil(d.speed/d.refreshInterval),c=(d.to-d.from)/e,h=this,b=a(this),q=0,l=d.from,k=b.data("countTo")||{};b.data("countTo",k);k.interval&&clearInterval(k.interval);k.interval=setInterval(function(){l+=c;q++;f(l);"function"==typeof d.onUpdate&&d.onUpdate.call(h,l);e>q||(b.removeData("countTo"),clearInterval(k.interval),l=d.to,"function"==typeof d.onComplete&&d.onComplete.call(h,l))},d.refreshInterval);f(l)})};a.fn.countTo.defaults={from:0,to:0,speed:1E3,refreshInterval:100,decimals:0,formatter:function(a,f){return a.toFixed(f.decimals)},onUpdate:null,onComplete:null}}(jQuery);(function(){var a,g;a=this.jQuery;g=a(window);a.fn.stick_in_parent=function(f){var d,e,c,h,b,q,l;null==f&&(f={});h=f.sticky_class;d=f.inner_scrolling;c=f.parent;e=f.offset_top;null==e&&(e=0);null==c&&(c=void 0);null==d&&(d=!0);null==h&&(h="is_stuck");b=function(b,f,q,l,x,s,v){var t,B,u,z,n,p,C,A,r,m;if(!b.data("sticky_kit")){b.data("sticky_kit",!0);p=b.parent();null!=c&&(p=p.closest(c));if(!p.length)throw"failed to find stick parent";t=u=!1;r=a("<div />");r.css("position",b.css("position"));C=function(){var c,h;c=parseInt(p.css("border-top-width"),10);h=parseInt(p.css("padding-top"),10);f=parseInt(p.css("padding-bottom"),10);q=p.offset().top+c+h;l=p.height();c=u?(u=!1,t=!1,b.insertAfter(r).css({position:"",top:"",width:"",bottom:""}),r.detach(),!0):void 0;x=b.offset().top-parseInt(b.css("margin-top"),10)-e;s=b.outerHeight(!0);v=b.css("float");r.css({width:b.outerWidth(!0),height:s,display:b.css("display"),"vertical-align":b.css("vertical-align"),"float":v});if(c)return m()};C();if(s!==l)return z=void 0,n=e,m=function(){var c,a,m,y;m=g.scrollTop();null!=z&&(a=m-z);z=m;u?(y=m+s+n>l+q,t&&!y&&(t=!1,b.css({position:"fixed",bottom:"",top:n}).trigger("sticky_kit:unbottom")),m<x&&(u=!1,n=e,"left"!==v&&"right"!==v||b.insertAfter(r),r.detach(),c={position:"",width:"",top:""},b.css(c).removeClass(h).trigger("sticky_kit:unstick")),d&&(c=g.height(),s>c&&!t&&(n-=a,n=Math.max(c-s,n),n=Math.min(e,n),u&&b.css({top:n+"px"})))):m>x&&(u=!0,c={position:"fixed",top:n},c.width="border-box"===b.css("box-sizing")?b.outerWidth()+"px":b.width()+"px",b.css(c).addClass(h).after(r),"left"!==v&&"right"!==v||r.append(b),b.trigger("sticky_kit:stick"));if(u&&(null==y&&(y=m+s+n>l+q),!t&&y))return t=!0,"static"===p.css("position")&&p.css({position:"relative"}),b.css({position:"absolute",bottom:f,top:"auto"}).trigger("sticky_kit:bottom")},A=function(){C();return m()},B=function(){g.off("scroll",m);a(document.body).off("sticky_kit:recalc",A);b.off("sticky_kit:detach",B);b.removeData("sticky_kit");b.css({position:"",bottom:"",top:""});p.position("position","");if(u)return b.insertAfter(r).removeClass(h),r.remove()},g.on("touchmove",m),g.on("scroll",m),g.on("resize",A),a(document.body).on("sticky_kit:recalc",A),b.on("sticky_kit:detach",B),setTimeout(m,0)}};q=0;for(l=this.length;q<l;q++)f=this[q],b(a(f));return this}}).call(this);!function(a){var g=function(f,d){this.el=a(f);this.options=a.extend({},a.fn.typed.defaults,d);this.text=this.el.text();this.typeSpeed=this.options.typeSpeed;this.startDelay=this.options.startDelay;this.backSpeed=this.options.backSpeed;this.backDelay=this.options.backDelay;this.strings=this.options.strings;this.arrayPos=this.strPos=0;this.string=this.strings[this.arrayPos];this.stopNum=0;this.loop=this.options.loop;this.loopCount=this.options.loopCount;this.curLoop=1;this.stopArray=!1===this.loop?this.strings.length-1:this.strings.length;this.build()};g.prototype={constructor:g,init:function(){var a=this;setTimeout(function(){a.typewrite(a.string,a.strPos)},a.startDelay)},build:function(){this.el.after('<span id="typed-cursor">|</span>');this.init()},typewrite:function(a,d){var e=Math.round(70*Math.random())+this.typeSpeed,c=this;setTimeout(function(){if(c.arrayPos<c.strings.length){if("^"===a.substr(d,1)){var h=a.substr(d+1).indexOf(" "),h=a.substr(d+1,h);a=a.replace("^"+h,"")}else h=0;setTimeout(function(){if(c.el.text(c.text+a.substr(0,d)),d>a.length&&c.arrayPos<c.stopArray){clearTimeout(b);c.options.onStringTyped();var b=setTimeout(function(){c.backspace(a,d)},c.backDelay)}else if(d++,c.typewrite(a,d),!1===c.loop&&c.arrayPos===c.stopArray&&d===a.length)b=c.options.callback(),clearTimeout(b)},h)}else!0===c.loop&&!1===c.loopCount?(c.arrayPos=0,c.init()):!1!==c.loopCount&&c.curLoop<c.loopCount&&(c.arrayPos=0,c.curLoop+=1,c.init())},e)},backspace:function(a,d){var e=Math.round(70*Math.random())+this.backSpeed,c=this;setTimeout(function(){if(c.el.text(c.text+a.substr(0,d)),d>c.stopNum)d--,c.backspace(a,d);else if(d<=c.stopNum){clearTimeout(h);var h=c.arrayPos+=1;c.typewrite(c.strings[c.arrayPos],d)}},e)}};a.fn.typed=function(f){return this.each(function(){var d=a(this),e=d.data("typed"),c="object"==typeof f&&f;e||d.data("typed",e=new g(this,c));"string"==typeof f&&e[f]()})};a.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,backDelay:500,loop:!1,loopCount:!1,callback:function(){},onStringTyped:function(){}}}(window.jQuery);!function(a){function g(c){var a="",b;for(b in c)c.hasOwnProperty(b)&&(a+=b+":"+c[b]+";");return a}var f=f||{},d=document.querySelectorAll.bind(document),e={duration:500,show:function(c){var a=document.createElement("div");a.className="waves-ripple";this.appendChild(a);var b,d,f,k={top:0,left:0};b=this&&this.ownerDocument;b=(d=b.documentElement,"undefined"!=typeof this.getBoundingClientRect&&(k=this.getBoundingClientRect()),f=null!==b&&b===b.window?b:9===b.nodeType&&b.defaultView,{top:k.top+f.pageYOffset-d.clientTop,left:k.left+f.pageXOffset-d.clientLeft});d=c.pageY-b.top-45;b=c.pageX-b.left-45;c="scale("+this.clientWidth/100*2.5+")";a.setAttribute("data-hold",Date.now());a.setAttribute("data-scale",c);a.setAttribute("data-x",b);a.setAttribute("data-y",d);b={top:d+"px",left:b+"px"};a.className+=" waves-notransition";a.setAttribute("style",g(b));a.className=a.className.replace("waves-notransition","");b["-webkit-transform"]=c;b["-moz-transform"]=c;b["-ms-transform"]=c;b["-o-transform"]=c;b.transform=c;b.opacity="1";b["-webkit-transition-duration"]=e.duration+"ms";b["-moz-transition-duration"]=e.duration+"ms";b["-o-transition-duration"]=e.duration+"ms";b["transition-duration"]=e.duration+"ms";a.setAttribute("style",g(b))},hide:function(){for(var c=this,a=(1.4*c.clientWidth,null),b=c.children.length,d=0;b>d;d++)-1===c.children[d].className.indexOf("waves-ripple")||(a=c.children[d]);if(!a)return!1;var f=a.getAttribute("data-x"),k=a.getAttribute("data-y"),w=a.getAttribute("data-scale"),b=500-(Date.now()-Number(a.getAttribute("data-hold")));0>b&&(b=0);setTimeout(function(){a.setAttribute("style",g({top:k+"px",left:f+"px",opacity:"0","-webkit-transition-duration":e.duration+"ms","-moz-transition-duration":e.duration+"ms","-o-transition-duration":e.duration+"ms","transition-duration":e.duration+"ms","-webkit-transform":w,"-moz-transform":w,"-ms-transform":w,"-o-transform":w,transform:w}));setTimeout(function(){try{c.removeChild(a)}catch(b){return!1}},e.duration)},b)},wrapInput:function(a){for(var d=0;d<a.length;d++){var b=a[d];if("input"===b.tagName.toLowerCase()){var e=b.parentNode;if("i"===e.tagName.toLowerCase()&&-1!==e.className.indexOf("waves-effect"))return!1;var f=document.createElement("i");f.className=b.className+" waves-input-wrapper";var g=b.getAttribute("style"),w="width:"+b.offsetWidth+"px;height:"+b.clientHeight+"px;";g||(g="");f.setAttribute("style",w+g);b.className="waves-button-input";b.removeAttribute("style");e.replaceChild(f,b);f.appendChild(b)}}}};f.displayEffect=function(a){a=a||{};"duration"in a&&(e.duration=a.duration);e.wrapInput(d(".waves-effect"));Array.prototype.forEach.call(d(".waves-effect"),function(a){a.addEventListener("mousedown",e.show,!1);a.addEventListener("mouseup",e.hide,!1);a.addEventListener("mouseleave",e.hide,!1)})};a.Waves=f}(window);
