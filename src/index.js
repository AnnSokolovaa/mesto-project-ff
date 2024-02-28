// @todo: Темплейт карточки
import {
  createCard,
  deleteCard,
  initialCards,
  likeAdd,
} from "./components/cards.js";
import { closeModal, openModal, showImage } from "./components/modal.js";
import "./styles/index.css";
export const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardsContainer = document.querySelector(".places__list");
initialCards.forEach(function (card) {
  cardsContainer.append(createCard(card, deleteCard, likeAdd, showImage));
});

export const Editbutton = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".popup_type_edit");
const addButton = document.querySelector(".profile__add-button");
const popupAddbutton = document.querySelector(".popup_type_new-card");
export const popupImagebutton = document.querySelector(".popup_type_image");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
const newCardTitle = document.querySelector(".popup__input_type_card-name");
const newCardLink = document.querySelector(".popup__input_type_url");

addButton.addEventListener("click", function (event) {
  openModal(popupAddbutton);
});
Editbutton.addEventListener("click", function (event) {
  openModal(popupEdit);
  document
    .querySelector(".popup__input_type_name")
    .setAttribute("placeholder", profileTitle.textContent);
  document
    .querySelector(".popup__input_type_description")
    .setAttribute("placeholder", profileDescription.textContent);
});

const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach(function (btn) {
  btn.addEventListener("click", function (evt) {
    closeModal(evt.target.closest(".popup"));
  });
});

const Popups = document.querySelectorAll(".popup");

Popups.forEach(function (btn) {
  btn.classList.add("popup_is-animated");
  btn.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup")) {
      closeModal(event.target);
    }
  });
});

// Находим форму в DOM
const formElement = document.querySelector(".popup_type_edit .popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector(".popup__input_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".popup__input_type_description"); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault();
  closeModal();

  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  profileTitle.textContent = nameInput.value; // Вставьте новые значения с помощью textContent
  profileDescription.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  nameInput.value = "";
  jobInput.value = "";
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  closeModal();
  const Newcard = {
    name: newCardTitle.value,
    link: newCardLink.value,
  };
  cardsContainer.prepend(createCard(Newcard, deleteCard));
  newCardTitle.value = "";
  newCardLink.value = "";
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
const formAdd = document.querySelector(".popup_type_new-card .popup__form");
formElement.addEventListener("submit", handleFormSubmit);
formAdd.addEventListener("submit", handleFormSubmitAdd);
