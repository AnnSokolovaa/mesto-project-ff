(()=>{"use strict";var t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function r(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(o){var r,c,u,a;r=t,c=o,u=n[o],a=function(t,o){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(c),(c="symbol"==e(a)?a:String(a))in r?Object.defineProperty(r,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[c]=u})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}t.d({},{g:()=>m});var n={baseUrl:"https://nomoreparties.co/v1/cohort-magistr-2",headers:{authorization:"8883cffe-7e09-492f-8029-89217bdff786","Content-Type":"application/json"}};function c(t){"Escape"===t.key&&a(document.querySelector(".popup_is-opened"))}function u(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function a(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function i(t,e,o,r,n){var c=m.cloneNode(!0);c.querySelector(".card__title").textContent=t.name,c.querySelector(".card__image").src=t.link,c.querySelector(".card__image").alt=t.name,c.querySelector(".card__like-count").textContent=t.likes.length,c.querySelector(".places__item").setAttribute("_id","".concat(t._id));var a=c.querySelector(".card__delete-button");a.addEventListener("click",(function(o){e.setAttribute("_id",t._id),u(e.closest(".popup"))})),n!=t.owner._id&&a.classList.add("card__delete-button-hidden");var i=c.querySelector(".card__like-button");return t.likes.some((function(t){return t._id===n}))&&i.classList.add("card__like-button_is-active"),i.addEventListener("click",o),c.querySelector(".card__image").addEventListener("click",r),c}function l(t){var e=t.target.closest(".places__item");(function(t){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(t._id),r({method:t.add?"PUT":"DELETE"},n)).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).catch((function(t){return console.log("Ошибка ".concat(t))}))})({_id:e.getAttribute("_id"),add:!t.target.classList.contains("card__like-button_is-active")}).then((function(o){t.target.classList.toggle("card__like-button_is-active"),e.querySelector(".card__like-count").textContent=o.likes.length}))}var s,p=function(t,e,o){var r=e.validity;r.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),r.valid?function(t,e,o){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(o.inputErrorClass),r.classList.remove(o.errorClass),r.textContent=""}(t,e,o):function(t,e,o,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.add(r.inputErrorClass),n.classList.add(r.errorClass),n.textContent=o}(t,e,e.validationMessage,o)},d=function(t){return t.some((function(t){return!t.validity.valid}))},_=function(t,e,o){console.log(d(t)),d(t)?(e.disabled=!0,e.classList.add(o.inactiveButtonClass)):(e.disabled=!1,e.classList.remove(o.inactiveButtonClass))},f=function(t,e){var o=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);_(o,r,e),o.forEach((function(o){p(t,o,e)}))},m=document.querySelector("#card-template").content,y=function(t){var e=document.querySelector(".popup__image");e.src=t.target.src,e.alt=t.target.alt,u(k)},v=document.querySelector(".places__list"),b=document.querySelector(".profile__edit-button"),S=document.querySelector(".popup_type_edit"),g=document.querySelector(".profile__image-edit-button"),h=document.querySelector(".profile__add-button"),q=document.querySelector(".popup_type_new-card"),E=document.querySelector(".popup_type_avatar"),k=document.querySelector(".popup_type_image"),C={titleClass:".profile__title",descriptionClass:".profile__description",avatarClass:".profile__image"},L={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},j=document.querySelector(C.titleClass),O=document.querySelector(C.descriptionClass);function P(t,e){var o=document.querySelector(e.titleClass),r=document.querySelector(e.descriptionClass),n=document.querySelector(e.avatarClass);o.textContent=t.name,r.textContent=t.about,n.style="background-image: url(".concat(t.avatar,");")}function A(t){t.textContent=t.getAttribute("default")}function w(t,e){var o=t.target.querySelector(".popup__button");e?o.textContent="Сохранение...":A(o)}s=C,Promise.all([fetch("".concat(n.baseUrl,"/users/me"),n).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).catch((function(t){return console.log("Ошибка ".concat(t.status))})),fetch("".concat(n.baseUrl,"/cards"),n).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).catch((function(t){return console.log("Ошибка ".concat(t))}))]).then((function(t){var e=t[0];P(e,s),t[1].forEach((function(t){v.append(i(t,T,l,y,e._id))})),document.querySelectorAll(".popup__button").forEach(A)})),h.addEventListener("click",(function(){u(q)})),b.addEventListener("click",(function(){var t=document.querySelector(".popup__input_type_name"),e=document.querySelector(".popup__input_type_description");t.value=j.textContent,e.value=O.textContent,f(D,L),u(S)})),g.addEventListener("click",(function(){u(E)})),document.querySelectorAll(".popup__close").forEach((function(t){t.addEventListener("click",(function(t){a(t.target.closest(".popup"))}))})),document.querySelectorAll(".popup").forEach((function(t){t.classList.add("popup_is-animated"),t.addEventListener("click",(function(t){t.target.classList.contains("popup")&&a(t.target)}))}));var x=document.querySelector(".popup_type_new-card .popup__form"),D=document.querySelector(".popup_type_edit .popup__form"),U=document.querySelector(".popup_type_avatar .popup__form"),T=document.querySelector(".popup_type_delete .popup__form"),B=document.querySelector(".popup__input_type_name"),N=document.querySelector(".popup__input_type_description"),J=document.querySelector(".popup__input_type_card-name"),M=document.querySelector(".popup__input_type_url"),H=document.querySelector(".popup__input_type_avatar_url");D.addEventListener("submit",(function(t){t.preventDefault(),w(t,!0),function(t){return fetch("".concat(n.baseUrl,"/users/me"),r({method:"PATCH",body:JSON.stringify({name:t.name,about:t.about})},n)).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).catch((function(t){return console.log("Ошибка ".concat(t))}))}({name:B.value,about:N.value}).then((function(e){P(e,C),B.value="",N.value="",a(t.target.closest(".popup")),w(t,!1)}))})),x.addEventListener("submit",(function(t){t.preventDefault();var e={name:J.value,link:M.value};w(t,!0),function(t){return fetch("".concat(n.baseUrl,"/cards"),r({method:"POST",body:JSON.stringify({name:t.name,link:t.link})},n)).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).catch((function(t){return console.log("Ошибка ".concat(t))}))}(e).then((function(e){v.prepend(i(e,T,l,y,e.owner._id)),J.value="",M.value="",a(t.target.closest(".popup")),w(t,!1)})),f(x,L)})),U.addEventListener("submit",(function(t){t.preventDefault();var e={avatar:H.value};w(t,!0),function(t){return fetch("".concat(n.baseUrl,"/users/me/avatar"),r({method:"PATCH",body:JSON.stringify({avatar:t.avatar})},n)).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).catch((function(t){return console.log("Ошибка ".concat(t))}))}(e).then((function(e){P(e,C),H.value="",a(t.target.closest(".popup")),w(t,!1)}))})),T.addEventListener("submit",(function(t){var e,o,c=t.target.getAttribute("_id"),u=(e=c,o=document.querySelectorAll(".card"),Array.from(o).filter((function(t){return t.getAttribute("_id")===e}))[0]);t.preventDefault(),w(t,!0),function(t){return fetch("".concat(n.baseUrl,"/cards/").concat(t._id),r({method:"DELETE"},n)).catch((function(t){return console.log("Ошибка ".concat(t))}))}({_id:u.getAttribute("_id")}).then((function(){u.remove(),a(t.target.closest(".popup")),w(t,!1)}))})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var o=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);_(o,r,e),o.forEach((function(n){n.addEventListener("input",(function(){p(t,n,e),_(o,r,e)}))}))}(e,t)}))}(L)})();