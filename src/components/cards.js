import { cardTemplate } from "..";

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
// @todo: Функция создания карточки
export function createCard(card, onDelete, likeAdd, showImage) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", onDelete);
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", likeAdd);
  const imageArea = cardElement.querySelector(".card__image");
  imageArea.addEventListener("click", showImage);
  return cardElement;
}

export function likeAdd(event) {
  event.target.classList.toggle("card__like-button_is-active");
}
// @todo: Функция удаления карточки
export function deleteCard(event) {
  event.target.closest(".places__item").remove();
}
