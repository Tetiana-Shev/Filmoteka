!function(){function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in a)return a[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var a,o;t(e.exports,"register",(function(){return a}),(function(t){return a=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var a;t(e.exports,"getBundleURL",(function(){return a}),(function(t){return a=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.cfba6baa.js","7VDdD":"file_not_found.886b5e99.jpg","2hvCh":"index.dcdacb90.js"}')),i("9h1VZ"),i("cVYaS"),i("fJHat");var c,r=i("2oYM3"),u=(r=i("2oYM3"),i("bpxeT")),l=i("2TvXO"),s=(r=i("2oYM3"),i("eQLRL")),d=i("hRbC3"),p=i("ijwS8");c=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("7VDdD");var f=d.default.tags,m=f.WATCHED,b=f.QUEUE,v=(f.NOT_ADDED,"add"),_="delete",y={body:document.querySelector("body"),showBackdrop:document.querySelector("[data-detail-modal]"),modalDetail:document.querySelector(".modal-detal__container"),closeModalBtn:document.querySelector(".modal-detail__cross-frame"),movieInfo:document.querySelector(".movie-data"),modalDetailBackdrop:document.querySelector(".modal-detail__backdrop"),gallery:document.querySelector(".gallery"),pagination:document.querySelector(".pagination")};function g(){return h.apply(this,arguments)}function h(){return(h=e(u)(e(l).mark((function t(){var n,a,o;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.default.currentlyOpenedFilm.filmData.id,t.next=3,r.default.getMovieTrailer(n);case 3:return a=t.sent,o=a.results.find((function(t){return"Trailer"===t.type})),t.abrupt("return",null==o?void 0:o.key);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=e(u)(e(l).mark((function t(n){var a,o,i;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.moviePoster,o=n.youTubeBtn,t.next=3,g();case 3:(i=t.sent)&&(a.addEventListener("click",p.openModalTrailer),o.classList.remove("visually-hidden"),a.style.cursor="pointer",d.default.currentlyOpenedFilm.movieTrailerKey=i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){y.modalDetailBackdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",k),y.modalDetailBackdrop.removeEventListener("click",w)}function k(t){"Escape"===t.code&&L()}function w(t){t.target===y.modalDetailBackdrop&&L()}function S(){return(S=e(u)(e(l).mark((function t(n){var a,o,i,c;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.buttonWatched,o=n.buttonQueue,i=n.id,t.next=3,d.default.searchFilmInCollection(i);case 3:(c=t.sent)===m?(a.textContent="Remove from watched",a.dataset.action=_,a.classList.add("button-active"),o.textContent="Add to queue",o.dataset.action=v,o.classList.remove("button-active")):c===b?(a.textContent="Add to watched",a.dataset.action=v,a.classList.remove("button-active"),o.textContent="Remove from queue",o.dataset.action=_,o.classList.add("button-active")):(a.textContent="Add to watched",a.dataset.action=v,a.classList.remove("button-active"),o.textContent="Add to queue",o.dataset.action=v,o.classList.remove("button-active"));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(t){return T.apply(this,arguments)}function T(){return(T=e(u)(e(l).mark((function t(n){var a,o,i,c;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.target,document.querySelector(".modal-detal__container"),o=document.querySelector(".button-queue"),i=a.dataset.action,c=o.dataset.action,i!==v||c!==v){t.next=18;break}return t.prev=6,t.next=9,d.default.addFilmToCollection(m);case 9:a.dataset.action=_,a.textContent="Remove from watched",a.classList.add("button-active"),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(6);case 16:t.next=37;break;case 18:if(i!==v||c!==_){t.next=31;break}return t.next=21,d.default.deleteFilmFromCollection(d.default.currentlyOpenedFilm.filmData.id);case 21:return t.next=23,d.default.addFilmToCollection(m);case 23:a.dataset.action=_,a.textContent="Remove from watched",a.classList.add("button-active"),o.textContent="Add to queue",o.dataset.action=v,o.classList.remove("button-active"),t.next=37;break;case 31:if(i!==_){t.next=37;break}return t.next=34,d.default.deleteFilmFromCollection(d.default.currentlyOpenedFilm.filmData.id);case 34:a.dataset.action=v,a.textContent="Add to watched",a.classList.remove("button-active");case 37:case"end":return t.stop()}}),t,null,[[6,14]])})))).apply(this,arguments)}function F(t){return C.apply(this,arguments)}function C(){return(C=e(u)(e(l).mark((function t(n){var a,o,i,c;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.target,document.querySelector(".modal-detal__container"),o=document.querySelector(".button-watched"),i=o.dataset.action,(c=a.dataset.action)!==v||i!==v){t.next=18;break}return t.prev=6,t.next=9,d.default.addFilmToCollection(b);case 9:a.dataset.action=_,a.textContent="Remove from queue",a.classList.add("button-active"),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(6);case 16:t.next=42;break;case 18:if(c!==v||i!==_){t.next=36;break}return t.next=21,d.default.deleteFilmFromCollection(d.default.currentlyOpenedFilm.filmData.id);case 21:return t.prev=21,t.next=24,d.default.addFilmToCollection(b);case 24:a.dataset.action=_,a.textContent="Remove from queue",a.classList.add("button-active"),o.textContent="Add to watched",o.dataset.action=v,o.classList.remove("button-active"),t.next=34;break;case 32:t.prev=32,t.t1=t.catch(21);case 34:t.next=42;break;case 36:if(c!==_){t.next=42;break}return t.next=39,d.default.deleteFilmFromCollection(d.default.currentlyOpenedFilm.filmData.id);case 39:a.dataset.action=v,a.textContent="Add to queue",a.classList.remove("button-active");case 42:case"end":return t.stop()}}),t,null,[[6,14],[21,32]])})))).apply(this,arguments)}var E=function(t){var n=t.id,a=t.poster_path,o=t.title,i=t.vote_average,r=t.vote_count,u=t.popularity,l=t.original_title,s=t.genres,d=t.overview;return' <div class="modal-detail__cross-frame">\n      <i class="fa-solid fa-xmark"></i>\n    </div>\n  <div class="movie-poster">\n  <img\n            class="movie-image" data-id="'.concat(n,'"\n            src = "').concat(a?"https://image.tmdb.org/t/p/w500/".concat(a):e(c),'"\n            alt=""\n          />\n          <div class="modal-detail__youtube visually-hidden" data-modal-youtube>\n      <i class="fa-brands fa-youtube"></i>\n    </div>\n          </div>\n           <div class="movie-data">\n          <h2 class="data__title">').concat(o,'</h2>\n          <ul class="data__list list">\n            <li class="list__item">\n              <p class="data__item">Vote / Votes\n              </p>\n              <p class="data__info">\n                <span class="data__span data__span--orange">').concat(i,'</span>\n                <span data__span--divider> / </span>\n                <span class="data__span">').concat(r,'</span>\n              </p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Popularity</p>\n              <p class="data__info">').concat(u,'</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Original Title</p>\n              <p class="data__info data__info--upper">').concat(l,'</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Genre</p>\n              <p class="data__info">').concat(s.map((function(t){return t.name})).join(", "),'</p>\n            </li>\n          </ul>\n          <p class="data__about">About</p>\n          <p class="data__about-text">').concat(d,'</p>\n  <div class="buttons">\n        <button\n          type="button"\n          class="modal-detail__button button-watched"\n          data-click="addToWached"\n          data-action="add"\n        >\n          Add to watched\n        </button>\n        <button\n          type="button"\n          data-action="add"\n          class="modal-detail__button button-queue"\n          data-click="addToQueue"\n        >\n          Add to queue\n        </button>\n      </div>\n    </div>')},D=(s=i("eQLRL"),r=i("2oYM3"),s=i("eQLRL"),document.querySelector(".pagination"));function O(t,e){if(0!==e&&1!==e){var n="",a=document.documentElement.scrollWidth,o="",i=1!=t?'<button type="button" class="pagination_button pagination_button-arrow" data-page="'.concat(t-1,'"><i class="fa-solid fa-arrow-left"></i></button>'):"",c=t!=e?'<button type="button" class="pagination_button pagination_button-arrow" data-page="'.concat(t+1,'"><i class="fa-solid fa-arrow-right"></i></button>'):"",r='<button type="button" class="pagination_button" data-page="1">1</button>',u='<button type="button" class="pagination_button" data-page="'.concat(e,'">').concat(e,"</button>"),l='<button type="button" class="pagination_button pagination_button-points">...</button>';if(a<768){n+=i;for(var s=t-2;s<=t+2;s++)o=s,s!==t?s<=e&&s>0&&(n+='<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>")):n+='<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=c}if(a>=768){if(e<=9){n+=i;for(var d=1;d<=e;d++)o=d,n+=d!==t?'<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>"):'<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=c}if(e>=10){if(t<=5){n+=i;for(var p=1;p<=7;p++)o=p,n+=p!==t?'<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>"):'<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=l+u+c}if(t>e-5){n+=i+r+l;for(var f=e-6;f<=e;f++)o=f,n+=f!==t?'<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>"):'<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=c}if(t>5&&t<=e-5){n+=i+r+l;for(var m=t-2;m<=t+2;m++)o=m,n+=m!==t?'<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>"):'<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=l+u+c}}}D.innerHTML=n}else D.innerHTML=""}D.addEventListener("click",(function(t){"BUTTON"===t.target.nodeName&&function(t){document.body.scrollIntoView();var e=Number(t.dataset.page);""===r.default.searchParams.query?((0,s.spinnerPlay)(),r.default.getFilmsPopular(e).then((function(t){P(t.results)})).finally((function(){return(0,s.spinnerStop)()}))):((0,s.spinnerPlay)(),r.default.getFilmsSearched(r.default.searchParams.query,e).then((function(t){P(t.results)})).finally((function(){return(0,s.spinnerStop)()})))}(t.target)}));var R=i("aFT3d");(0,s.spinnerPlay)(),r.default.getFilmsPopular().then((function(t){P(t.results)})).finally((function(){return(0,s.spinnerStop)()}));var B=document.querySelector(".gallery"),P=function(t){var n=t.map((function(t){var n,a=t.poster_path,o=t.original_title,i=t.genre_ids,r=t.release_date,u=t.id,l=t.vote_average,s=i.map(R.default);return s.length>2&&(s="".concat(s[0],", ").concat(s[1],", Other")),n=a?"https://image.tmdb.org/t/p/w500/".concat(a):e(c),'<div class="film__card" data-id='.concat(u,'>\n        <a class="film__link link" href="" onclick="event.preventDefault()">\n          <img class="film__img" src=').concat(n,' alt="" data-id=').concat(u,' loading="lazy"/>\n          <div class="film__info">\n            <h3 class="film__title">\n              ').concat(o,'\n            </h3>\n            <div class="film__details">\n          <div class="film__genre">').concat(s,'</div>\n          <div class="film__year">').concat(r.substr(0,4),'</div>\n          <div class="film__rating">').concat(l.toFixed(1),"</div>\n          </div>\n          </div>\n        </a>\n      </div>")})).join("");B.innerHTML=n,O(r.default.page,r.default.total_pages)};B.addEventListener("click",(function(t){var e=t.target;if(!e.classList.contains("gallery")){(0,s.spinnerPlay)();var n=e.closest("[data-id]").getAttribute("data-id");r.default.getFilmsById(n).then((function(t){y.showBackdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");var e,n=E(t);y.modalDetail.innerHTML=n,d.default.currentlyOpenedFilm.filmData=t,function(t){S.apply(this,arguments)}({buttonWatched:(e={closeModalBtn:document.querySelector(".modal-detail__cross-frame"),modalDetail:document.querySelector("[data-detail-modal]"),moviePoster:document.querySelector(".movie-poster"),movieInfo:document.querySelector(".movie-data"),buttonWatched:document.querySelector(".button-watched"),buttonQueue:document.querySelector(".button-queue"),youTubeBtn:document.querySelector(".modal-detail__youtube")}).buttonWatched,buttonQueue:e.buttonQueue,id:t.id}),function(t){x.apply(this,arguments)}({moviePoster:e.moviePoster,youTubeBtn:e.youTubeBtn}),e.closeModalBtn.addEventListener("click",L),e.buttonWatched.addEventListener("click",q),e.buttonQueue.addEventListener("click",F)})).catch((function(t){return console.log(t)})).finally((function(){document.body.classList.add("modal-open"),document.addEventListener("keydown",k),y.modalDetailBackdrop.addEventListener("click",w),(0,s.spinnerStop)()}))}}));s=i("eQLRL");var A=i("h6c0i");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var e=t.currentTarget.elements.searchQuery.value.trim().toLowerCase();""===e?((0,s.spinnerPlay)(),r.default.getFilmsPopular().then((function(t){P(t.results)})).finally((function(){return(0,s.spinnerStop)()}))):((0,s.spinnerPlay)(),r.default.getFilmsSearched(e).then((function(t){0===t.results.length&&A.Notify.failure("No movies found for your search!",{position:"center-center",background:"#ff001b",fontFamily:"Roboto"}),P(t.results)})).finally((function(){return(0,s.spinnerStop)()})))}));var H="light-theme",M="dark-theme",N=document.querySelector("body"),Q=document.querySelector("#theme-switch-toggle");localStorage.Theme===M&&(N.classList.add(M),Q.checked=!0),N.addEventListener("change",(function(t){t.target.checked?(N.classList.remove(H),N.classList.add(M),localStorage.setItem("Theme",M)):(N.classList.remove(M),N.classList.add(H),localStorage.setItem("Theme",H))})),i("XJkyI"),i("your5"),i("fDiVl"),i("ghI91"),i("aZhHc"),i("ijwS8"),i("2NTPx"),i("2oYM3")}();
//# sourceMappingURL=index.cfba6baa.js.map
