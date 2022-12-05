$(".slider").slick({
  dots: true,
  infinite: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// кнопки

const btnScrolToApp = document.querySelector(".btn_intro");
const btnScrolToAppSection2 = document.querySelector(".opport_btn");
const sectionApp = document.querySelector(".application");
const projectLink = document.querySelector(".project_link");
const sectionFeedback = document.querySelector(".feedback");
const btnFooter = document.querySelector(".btn_footer");
const sectionHeader = document.querySelector(".header");
const openPopupFeedback = document.querySelector(".btn_feedback");
const closePopupFeedback = document.querySelector(".popup_close");
const popupFeedback = document.querySelector(".popup_feedback");
const openPopupApp = document.querySelector(".btn_app");
const closePopupApp = document.querySelector(".popup_close_app");
const popupApp = document.querySelector(".popup_app");
const openPopupCall = document.querySelector(".footer_link");
const closePopupCall = document.querySelector(".popup_close_footer_call");
const popupCall = document.querySelector(".popup_footer_call");

btnScrolToApp.addEventListener("click", function () {
  sectionApp.scrollIntoView({ behavior: "smooth" });
});

btnScrolToAppSection2.addEventListener("click", function () {
  sectionApp.scrollIntoView({ behavior: "smooth" });
});

btnFooter.addEventListener("click", function () {
  sectionHeader.scrollIntoView({ behavior: "smooth" });
});

// фунция для попап Обратная связь

openPopupFeedback.addEventListener("click", function (e) {
  e.preventDefault();
  popupFeedback.classList.add("active");
});

closePopupFeedback.addEventListener("click", () => {
  popupFeedback.classList.remove("active");
});

// фунция для попап Регистрация

openPopupApp.addEventListener("click", function (e) {
  e.preventDefault();
  popupApp.classList.add("active");
});

closePopupApp.addEventListener("click", () => {
  popupApp.classList.remove("active");
});

// фунция для попап Заказ звонка

openPopupCall.addEventListener("click", function (e) {
  e.preventDefault();
  popupCall.classList.add("active");
});

closePopupCall.addEventListener("click", () => {
  popupCall.classList.remove("active");
});
