// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardsContainer = document.querySelector(".places__list");
// @todo: Функция создания карточки
function createCard(name, link, onDelete) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", onDelete);
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(event) {
  event.target.closest(".places__item").remove();
}
// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
  cardsContainer.append(createCard(item.name, item.link, deleteCard));
});
