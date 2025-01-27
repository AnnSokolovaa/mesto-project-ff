import { cardTemplate } from "..";

export function createCard(card, onDelete, likeAdd, showImage, owned, like) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;
  cardElement.querySelector(".places__item").setAttribute("_id", card._id);
  const likeButtonCount = cardElement.querySelector(".card__like-count");
  likeButtonCount.textContent = card.likes.length;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", onDelete);
  if (!owned) {deleteButton.classList.add("card__delete-button-disabled")}
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
  const card = event.target.closest(".places__item");
  fetch(`https://nomoreparties.co/v1/cohort-magistr-2/cards/${card.getAttribute("_id")}`, {
    method: 'DELETE',
    headers: {
      authorization: "8883cffe-7e09-492f-8029-89217bdff786",
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {card.remove()});
}
