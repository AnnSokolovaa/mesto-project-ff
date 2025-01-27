// @todo: Темплейт карточки

import { createCard, deleteCard, likeAdd } from "./components/card.js";
import { initialCards } from "./components/cards.js";
import {
  closeModal,
  openModal,
  closePopupByOverlay,
} from "./components/modal.js";
import "./styles/index.css";
import { enableValidation } from "./components/validation.js";
export const cardTemplate = document.querySelector("#card-template").content;

const showImage = function (evt) {
  const popupImage = document.querySelector(".popup__image");
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  openModal(popupBigImage);
};
// @todo: DOM узлы

const cardsContainer = document.querySelector(".places__list");
export const editButton = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".popup_type_edit");
const addButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup_type_new-card");
const popupBigImage = document.querySelector(".popup_type_image");
export const profileTitle = document.querySelector(".profile__title");
const profileImage = document.querySelector(".profile__image");
export const profileDescription = document.querySelector(
  ".profile__description"
);

const newCardTitle = document.querySelector(".popup__input_type_card-name");
const newCardLink = document.querySelector(".popup__input_type_url");

addButton.addEventListener("click", function (event) {
  newCardTitle.value = "";
  newCardLink.value = "";
  openModal(popupAddCard);
});
editButton.addEventListener("click", function (event) {
  openModal(popupEdit);
  document
    .querySelector(".popup__input_type_name")
    .setAttribute("value", profileTitle.textContent);
  document
    .querySelector(".popup__input_type_description")
    .setAttribute("value", profileDescription.textContent);
});

const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach(function (btn) {
  btn.addEventListener("click", function (evt) {
    closeModal(evt.target.closest(".popup"));
  });
});

const Popups = document.querySelectorAll(".popup");
Popups.forEach(function (popup) {
  popup.classList.add("popup_is-animated");
  popup.addEventListener("click", closePopupByOverlay());
});

// Находим форму в DOM
const formEditElement = document.querySelector(".popup_type_edit .popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector(".popup__input_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".popup__input_type_description"); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormEditSubmit(evt) {
  evt.preventDefault();

  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  fetch("https://nomoreparties.co/v1/cohort-magistr-2/users/me", {
    method: "PATCH",
    headers: {
      authorization: "8883cffe-7e09-492f-8029-89217bdff786",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value,
    }),
  })
    .then((res) => res.json())
    .then(({ name, about }) => {
      profileTitle.textContent = name; // Вставьте новые значения с помощью textContent
      profileDescription.textContent = about; // Вставьте новые значения с помощью textContent
      closeModal(evt.target.closest(".popup"));
      nameInput.value = "";
      jobInput.value = "";
    });
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  fetch("https://nomoreparties.co/v1/cohort-magistr-2/cards", {
    method: "POST",
    headers: {
      authorization: "8883cffe-7e09-492f-8029-89217bdff786",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newCardTitle.value,
      link: newCardLink.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      
      cardsContainer.prepend(
        createCard(res, deleteCard, likeAdd, showImage, true)
      );
      closeModal(evt.target.closest(".popup"));
      newCardTitle.value = "";
      newCardLink.value = "";
    })
    .catch(res => {
      console.log(`Ошибка ${res.message}`)
    });
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
const formAdd = document.querySelector(".popup_type_new-card .popup__form");
formEditElement.addEventListener("submit", handleFormEditSubmit);
formAdd.addEventListener("submit", handleFormSubmitAdd);

// Вызовем функцию
enableValidation();

const getProfile = fetch(
  "https://nomoreparties.co/v1/cohort-magistr-2/users/me",
  {
    headers: {
      authorization: "8883cffe-7e09-492f-8029-89217bdff786",
    },
  }
).then((res) => res.json());
const getCards = fetch("https://nomoreparties.co/v1/cohort-magistr-2/cards", {
  headers: {
    authorization: "8883cffe-7e09-492f-8029-89217bdff786",
  },
}).then((res) => res.json());
const promises = [getProfile, getCards];
Promise.all(promises).then(([profile, cards]) => {
  profileTitle.textContent = profile.name; // Вставьте новые значения с помощью textContent
  profileDescription.textContent = profile.about;
  profileImage.style = `background-image:url( ${profile.avatar})`;
  console.log(profile);

  cards.forEach(function (card) {
    cardsContainer.append(createCard(card, deleteCard, likeAdd, showImage, card.owner._id === profile._id));
  });
});
