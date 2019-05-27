/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function r(){r=function(){};q.Symbol||(q.Symbol=u)}function v(a,b){this.s=a;p(this,"description",{configurable:!0,writable:!0,value:b})}
v.prototype.toString=function(){return this.s};var u=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new v("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function w(){r();var a=q.Symbol.iterator;a||(a=q.Symbol.iterator=q.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&p(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(m(this))}});w=function(){}}
function x(a){w();a={next:a};a[q.Symbol.iterator]=function(){return this};return a}function y(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}var z;if("function"==typeof Object.setPrototypeOf)z=Object.setPrototypeOf;else{var A;a:{var B={v:!0},C={};try{C.__proto__=B;A=C.v;break a}catch(a){}A=!1}z=A?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var D=z;
function E(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.w=0;this.g=null}function F(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}E.prototype.i=function(a){this.o=a};E.prototype.j=function(a){this.g={A:a,B:!0};this.b=this.w||this.m};E.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function G(a,b,c){a.b=c;return{value:b}}function H(a){this.C=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function I(a){this.a=new E;this.D=a}
I.prototype.i=function(a){F(this.a);if(this.a.c)return J(this,this.a.c.next,a,this.a.i);this.a.i(a);return K(this)};function L(a,b){F(a.a);var c=a.a.c;if(c)return J(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a["return"]);a.a["return"](b);return K(a)}I.prototype.j=function(a){F(this.a);if(this.a.c)return J(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return K(this)};
function J(a,b,c,d){try{var e=b.call(a.a.c,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.h=!1,e;var f=e.value}catch(g){return a.a.c=null,a.a.j(g),K(a)}a.a.c=null;d.call(a.a,f);return K(a)}function K(a){for(;a.a.b;)try{var b=a.D(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(c){a.a.o=void 0,a.a.j(c)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.B)throw b.A;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function M(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return L(a,b)};w();this[Symbol.iterator]=function(){return this}}function N(a,b){var c=new M(new I(b));D&&D(c,a.prototype);return c}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var O=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},P=function(a,b,c){return b instanceof Blob?[String(a),b,void 0!==c?c+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},Q=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},S=function(a){var b=y(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},T="object"===typeof window?window:"object"===typeof self?self:this,U=T.FormData,V=T.XMLHttpRequest&&T.XMLHttpRequest.prototype.send,W=T.Request&&T.fetch,X=T.navigator&&T.navigator.sendBeacon;r();var Y=T.Symbol&&Symbol.toStringTag;Y&&(Blob.prototype[Y]||(Blob.prototype[Y]="Blob"),"File"in T&&!File.prototype[Y]&&(File.prototype[Y]="File"));try{new File([],"")}catch(a){T.File=function(b,c,d){b=new Blob(b,d);d=d&&void 0!==d.lastModified?new Date(d.lastModified):new Date;Object.defineProperties(b,
{name:{value:c},lastModifiedDate:{value:d},lastModified:{value:+d},toString:{value:function(){return"[object File]"}}});Y&&Object.defineProperty(b,Y,{value:"File"});return b}}r();w();var Z=function(a){this.f=Object.create(null);if(!a)return this;var b=this;O(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type)if("file"===c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];O(d,function(e){b.append(c.name,e)})}else"select-multiple"===
c.type||"select-one"===c.type?O(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?c.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):c.value,b.append(c.name,d))})};k=Z.prototype;k.append=function(a,b,c){Q(arguments,2);var d=y(P.apply(null,arguments));a=d.next().value;b=d.next().value;c=d.next().value;d=this.f;d[a]||(d[a]=[]);d[a].push([b,c])};k["delete"]=function(a){Q(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var c=this,d,e,f,g,h,t;return N(b,function(l){switch(l.b){case 1:d=c.f,f=new H(d);case 2:var n;a:{for(n=f;0<n.l.length;){var R=n.l.pop();if(R in n.C){n=R;break a}}n=null}if(null==(e=n)){l.b=0;break}g=y(d[e]);h=g.next();case 5:if(h.done){l.b=2;break}t=h.value;return G(l,[e,S(t)],6);case 6:h=g.next(),l.b=5}})};k.forEach=function(b,c){Q(arguments,1);for(var d=y(this),e=d.next();!e.done;e=d.next()){var f=y(e.value);e=f.next().value;f=f.next().value;
b.call(c,f,e,this)}};k.get=function(b){Q(arguments,1);var c=this.f;b=String(b);return c[b]?S(c[b][0]):null};k.getAll=function(b){Q(arguments,1);return(this.f[String(b)]||[]).map(S)};k.has=function(b){Q(arguments,1);return String(b)in this.f};k.keys=function c(){var d=this,e,f,g,h,t;return N(c,function(l){1==l.b&&(e=y(d),f=e.next());if(3!=l.b){if(f.done){l.b=0;return}g=f.value;h=y(g);t=h.next().value;return G(l,t,3)}f=e.next();l.b=2})};k.set=function(c,d,e){Q(arguments,2);var f=P.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function d(){var e=this,f,g,h,t,l;return N(d,function(n){1==n.b&&(f=y(e),g=f.next());if(3!=n.b){if(g.done){n.b=0;return}h=g.value;t=y(h);t.next();l=t.next().value;return G(n,l,3)}g=f.next();n.b=2})};Z.prototype._asNative=function(){for(var d=new U,e=y(this),f=e.next();!f.done;f=e.next()){var g=y(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};Z.prototype._blob=function(){for(var d="----formdata-polyfill-"+Math.random(),e=[],f=y(this),g=f.next();!g.done;g=
f.next()){var h=y(g.value);g=h.next().value;h=h.next().value;e.push("--"+d+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};Z.prototype[Symbol.iterator]=function(){return this.entries()};Z.prototype.toString=function(){return"[object FormData]"};
Y&&(Z.prototype[Y]="FormData");if(V){var aa=T.XMLHttpRequest.prototype.setRequestHeader;T.XMLHttpRequest.prototype.setRequestHeader=function(d,e){"content-type"===d.toLowerCase()&&(this.u=!0);return aa.call(this,d,e)};T.XMLHttpRequest.prototype.send=function(d){d instanceof Z?(d=d._blob(),this.u||this.setRequestHeader("Content-Type",d.type),V.call(this,d)):V.call(this,d)}}if(W){var ba=T.fetch;T.fetch=function(d,e){e&&e.body&&e.body instanceof Z&&(e.body=e.body._blob());return ba.call(this,d,e)}}X&&
(T.navigator.sendBeacon=function(d,e){e instanceof Z&&(e=e._asNative());return X.call(this,d,e)});T.FormData=Z};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var accordion = function accordion() {
  var accordionHeadings = document.querySelectorAll('.accordion-heading'),
      accordionBlocks = document.querySelectorAll('.accordion-block');
  accordionBlocks.forEach(function (item) {
    item.style.display = 'none';
    item.classList.add('animated');
    item.classList.add('fadeIn');
  }); //   accordionHeadings.__proto__.forEach = [].__proto__.forEach;

  var activePanel;
  accordionHeadings.forEach(function (item, i, accordionHeadings) {
    item.addEventListener('click', function (e) {
      //show new thingy;
      this.classList.add('ui-accordion-header-active');
      this.nextElementSibling.classList.add('ui-accordion-content-active');
      this.nextElementSibling.style.display = 'block'; //hide old thingy

      if (activePanel) {
        activePanel.classList.remove('ui-accordion-header-active');
        activePanel.nextElementSibling.classList.remove('ui-accordion-content-active');
        activePanel.nextElementSibling.style.display = 'none';
      } //update thingy


      activePanel = activePanel === this ? 0 : this;
    });
  });
};

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/feedbackSlider.js":
/*!****************************************!*\
  !*** ./src/js/parts/feedbackSlider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var feedbackSlider = function feedbackSlider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.feedback-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');
  slides.forEach(function (item) {
    item.classList.add('animated');
  });

  var showSlides = function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
    slides.forEach(function (item) {
      item.classList.remove('fadeInLeft');
      item.classList.add('fadeInRight');
    });
  };

  showSlides(slideIndex);

  var plusSlides = function plusSlides(n) {
    showSlides(slideIndex += n);
  };

  prev.addEventListener('click', function () {
    plusSlides(-1);
    slides[slideIndex - 1].classList.remove('fadeInRight');
    slides[slideIndex - 1].classList.add('fadeInLeft');
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  setInterval(plusSlides, 15000, 1);
};

module.exports = feedbackSlider;

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var filter = function filter() {
  var filtersWrapper = document.querySelector('.portfolio-menu'),
      filters = filtersWrapper.querySelectorAll('li'),
      portfolioNo = document.querySelector('.portfolio-no'),
      blocksAll = document.querySelectorAll('.portfolio-wrapper .all'),
      blocksLovers = document.querySelectorAll('.portfolio-wrapper .lovers'),
      blocksChef = document.querySelectorAll('.portfolio-wrapper .chef'),
      blocksGirl = document.querySelectorAll('.portfolio-wrapper .girl'),
      blocksGuy = document.querySelectorAll('.portfolio-wrapper .guy');

  var show = function show(blocks) {
    blocksAll.forEach(function (item) {
      item.style.display = 'none';
    });
    blocks.forEach(function (item) {
      item.style.display = 'block';
    });
    portfolioNo.style.display = 'none';
  };

  var showPortfolioNo = function showPortfolioNo() {
    blocksAll.forEach(function (item) {
      item.style.display = 'none';
    });
    portfolioNo.style.display = 'block';
  };

  var changeStyle = function changeStyle(filterHeader) {
    filters.forEach(function (item) {
      item.classList.remove('active');
    });
    filterHeader.classList.add('active');
  };

  var blocks = [blocksAll, blocksLovers, blocksChef, blocksGirl, blocksGuy];

  var _loop = function _loop(i) {
    filters[i].addEventListener('click', function () {
      show(blocks[i]);
      changeStyle(filters[i]);
    });
  };

  for (var i = 0; i < 5; i++) {
    _loop(i);
  }

  filters[5].addEventListener('click', function () {
    showPortfolioNo();
    changeStyle(filters[5]);
  });
  filters[6].addEventListener('click', function () {
    showPortfolioNo();
    changeStyle(filters[6]);
  });
};

module.exports = filter;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var form = function form() {
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  var formDesign = document.querySelector('.popup-design form'),
      inputDesign = formDesign.getElementsByTagName('input'),
      inputName = inputDesign[1],
      inputPhone = inputDesign[2],
      inputMail = inputDesign[3],
      commentDesign = formDesign.getElementsByTagName('textarea')[0],
      statusMessage = document.createElement('div');
  var formConsult = document.querySelector('.popup-consultation form'),
      inputConsult = formConsult.getElementsByTagName('input'),
      inputNameConsult = inputConsult[0],
      inputPhoneConsult = inputConsult[1];
  var formMain = document.querySelector('.consultation form'),
      inputMain = formMain.getElementsByTagName('input'),
      inputNameMain = inputMain[0],
      inputPhoneMain = inputMain[1],
      commentMain = inputMain[3]; // let modalDesign = document.querySelector('.popup-design');

  commentDesign.classList.add('message');
  commentMain.classList.add('message');

  var nameValidation = function nameValidation(input) {
    input.addEventListener('input', function () {
      input.value = input.value.replace(/[A-z\d]/g, "");
    });
  };

  nameValidation(inputName);
  nameValidation(inputNameConsult);
  nameValidation(inputNameMain);

  var phoneValidation = function phoneValidation(input) {
    input.addEventListener('input', function () {
      input.value = input.value.replace(/[^0-9+]/g, ""); // input.value = input.value.replace(/(?<!^)\+/g, "");

      if (input.value.length > 12) {
        input.value = input.value.substr(0, 12);
      }
    });
  };

  phoneValidation(inputPhone);
  phoneValidation(inputPhoneConsult);
  phoneValidation(inputPhoneMain);

  var commentValidation = function commentValidation(input) {
    input.addEventListener('input', function () {
      input.value = input.value.replace(/[A-z]/g, "");
    });
  };

  commentValidation(commentDesign);
  commentValidation(commentMain);

  var sendForm = function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);
      var formData = new FormData(elem);

      var postData = function postData(data) {
        return fetch('server.php', {
          method: 'POST',
          body: data
        });
      };

      var clearInput = function clearInput(elem) {
        var input = elem.getElementsByTagName('input');
        var comment = elem.getElementsByClassName('.message');

        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }

        comment.value = '';
      };

      postData(formData).then(function () {
        statusMessage.innerHTML = "<img src='img/ajax-loader.gif'>";
        statusMessage.style.cssText = "text-align: center; padding-top: 20px;";
      }).then(function () {
        statusMessage.innerHTML = message.success; // modalDesign.style.display = 'none';
        // statusMessage.innerHTML = "<img src='img/success.jpg'>";
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput(elem));
    });
  };

  sendForm(formDesign);
  sendForm(formConsult);
  sendForm(formMain);
};

module.exports = form;

/***/ }),

/***/ "./src/js/parts/mainSlider.js":
/*!************************************!*\
  !*** ./src/js/parts/mainSlider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mainSlider = function mainSlider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.main-slider-item');
  slides.forEach(function (item) {
    item.classList.add('animated');
    item.classList.add('fadeInDown');
  });

  var showSlides = function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    slides.forEach(function (item) {
      item.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
  };

  showSlides(slideIndex);

  var plusSlides = function plusSlides(n) {
    showSlides(slideIndex += n);
  };

  setInterval(plusSlides, 5000, 1);
};

module.exports = mainSlider;

/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menu = function menu(trigger, boxBody) {
  var button = {
    'element': document.querySelector(trigger),
    'active': false
  };
  var box = document.querySelector(boxBody);

  var activateButton = function activateButton() {
    if (button.active === false) {
      button.active = true;
      box.style.display = 'block';
    } else {
      button.active = false;
      box.style.display = 'none';
    }
  };

  window.addEventListener('resize', function () {
    if (document.body.clientWidth <= 991) {
      if (button.active === true) {
        button.active = false;
        box.style.display = 'none';
      }

      button.element.addEventListener('click', activateButton);
    } else {
      if (button.active === true) {
        button.active = false;
        box.style.display = 'none';
      }

      button.element.removeEventListener('click', activateButton);
    }
  });
};

module.exports = menu;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var modals = function modals() {
  var modalDesign = document.querySelector('.popup-design'),
      modalConsult = document.querySelector('.popup-consultation'),
      modalGift = document.querySelector('.popup-gift'),
      gift = document.querySelector('.fixed-gift'),
      body = document.querySelector('body');

  var modalOpen = function modalOpen(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  var modalClose = function modalClose(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  modalDesign.classList.add('animated');
  modalDesign.classList.add('fadeIn');
  modalConsult.classList.add('animated');
  modalConsult.classList.add('fadeIn');
  gift.classList.add('animated');
  modalGift.classList.add('animated');
  modalGift.classList.add('fadeIn');
  var clickBtn = false;
  body.addEventListener('click', function (event) {
    clickBtn = true;

    if (event.target.classList.contains('button-design')) {
      modalOpen(modalDesign);
    }

    if (event.target.classList.contains('button-consultation')) {
      modalOpen(modalConsult);
    }

    if (event.target.classList.contains('fixed-gift')) {
      modalOpen(modalGift);
      gift.style.display = 'none';
    }

    if (event.target.classList.contains('popup-design') || event.target.classList.contains('popup-close')) {
      modalClose(modalDesign);
    }

    if (event.target.classList.contains('popup-consultation') || event.target.classList.contains('popup-close')) {
      modalClose(modalConsult);
    }

    if (event.target.classList.contains('popup-gift') || event.target.classList.contains('popup-close')) {
      modalClose(modalGift);
      gift.style.display = 'block';
    }
  });
  window.addEventListener('scroll', function () {
    if (window.innerHeight + Math.abs(body.getBoundingClientRect().top) >= document.body.offsetHeight && !clickBtn) {
      modalOpen(modalGift);
      gift.style.display = 'none';
    } // console.log(window.scrollY);

  });
  setTimeout(function (modal) {
    if (modalDesign.style.display == '' && modalConsult.style.display == '' && modalGift.style.display == '') {
      modalOpen(modalConsult);
    }
  }, 60000);
};

module.exports = modals;

/***/ }),

/***/ "./src/js/parts/sizes.js":
/*!*******************************!*\
  !*** ./src/js/parts/sizes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sizes = function sizes() {
  var sizesWrapper = document.querySelector('.sizes-wrapper'),
      sizesBlock = document.querySelectorAll('.sizes-block'),
      imgBlock = document.querySelectorAll('.sizes-block img'); // sizesBlock[0].addEventListener('mouseover', () => {
  //     sizesBlock[0].innerHTML = "<img class=size-1 src=img/sizes-1-1.png alt>";    
  // });

  console.log(imgBlock); // for (let i = 0; i < sizesBlock.length; i++) {
  //     sizesBlock[i].addEventListener('mouseover', () => {
  //         sizesBlock[i].innerHTML = `<img class=size-${i+1} src=img/sizes-${i+1}-1.png alt>`;
  //     });
  //     sizesBlock[i].addEventListener('mouseout', () => {
  //         sizesBlock[i].innerHTML = `<img class=size-${i+1} src=img/sizes-${i+1}.png alt>`;
  //     });
  // }
  // sizesBlock[0].addEventListener('mouseout', () => {
  //     // sizesBlock[0].innerHTML = "<img class=size-1 src=img/sizes-1.png alt><p class=size>40x50</p><p class=starting-price>5 290 руб.</p><p class=final-price>3 670 руб.</p>";  
  //     console.log('out');
  // });
  // sizesWrapper.addEventListener('click', (event) => {
  //     // console.log("OPA");
  //     for (let i = 0; i < sizesBlock.length + 1; i++) {
  //         if (event.target.classList.contains('sizes-block') && event.target == sizesBlock[i - 1]) {
  //             console.log("OPANA");
  //         }
  //     }
  // });
  // function changeImg(source) {
  //     imgBlock.src = source;
  // }
  // console.log(imgBlock[0].src);
  // imgBlock[0].onMouseOver = changeImg('img/sizes-1-1.png' );
  // console.log(imgBlock[0].src);
  // imgBlock[0].addEventListener('click', () => {
  //     changeImg('img/sizes-1-1.png' );
  // });
};

module.exports = sizes;

/***/ }),

/***/ "./src/js/parts/styles.js":
/*!********************************!*\
  !*** ./src/js/parts/styles.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var styles = function styles() {
  var btn = document.querySelector('.button-styles'),
      stylesBlocks = document.querySelectorAll('.styles-2'),
      blocks = document.querySelectorAll('.col-xs-offset-1');
  var classes = blocks[0].className;
  btn.addEventListener('click', function () {
    stylesBlocks.forEach(function (item) {
      item.classList.value = '';
      item.classList.value = classes;
    });
    btn.style.display = 'none';
  });
};

module.exports = styles;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// require('es6-promise').polyfill();
__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var mainSlider = __webpack_require__(/*! ./parts/mainSlider.js */ "./src/js/parts/mainSlider.js"),
      feedbackSlider = __webpack_require__(/*! ./parts/feedbackSlider.js */ "./src/js/parts/feedbackSlider.js"),
      modals = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
      accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
      sizes = __webpack_require__(/*! ./parts/sizes.js */ "./src/js/parts/sizes.js"),
      menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js"),
      styles = __webpack_require__(/*! ./parts/styles.js */ "./src/js/parts/styles.js"),
      filter = __webpack_require__(/*! ./parts/filter.js */ "./src/js/parts/filter.js");

  mainSlider();
  feedbackSlider();
  modals();
  form();
  accordion();
  sizes();
  menu('.burger', '.burger-menu');
  styles();
  filter();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map