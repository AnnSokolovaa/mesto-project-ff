import { popupImagebutton } from "..";
import { Editbutton, popupEdit, profileTitle, profileDescription } from "..";

export function EscapefromPopup(event) {
  if (event.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
} // @todo: Вывести карточки на страницу
export const showImage = function (evt) {
  const popupImage = document.querySelector(".popup__image");
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  document.addEventListener("keydown", EscapefromPopup);
  popupImagebutton.classList.add("popup_is-opened");
};
export function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", EscapefromPopup);
}
export function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", EscapefromPopup);
}
