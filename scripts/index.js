// @todo: Темплейт карточки
const userTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");
// @todo: Функция создания карточки
function addCard(name, link, resetButton) {
  const cardElement = userTemplate.cloneNode(true);
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", resetButton);
  return cardElement;
}

// @todo: Функция удаления карточки
function resetButton(event) {
  event.target.closest(".places__item").remove();
}
// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
  cardList.append(addCard(item.name, item.link, resetButton));
});
