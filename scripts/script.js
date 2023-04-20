const bookingButton = document.querySelector('.booking-button');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close');
const hotelSearch = document.querySelector('.hotel-search');

const adultNumberInput = document.querySelector('.adults');
const childrenNumberInput = document.querySelector('.children');
const adultNumberButtonMinus = document.querySelector('.minus-left');
const adultNumberButtonPlus = document.querySelector('.plus-left');
const childrenNumberButtonMinus = document.querySelector('.minus-right');
const childrenNumberButtonPlus = document.querySelector('.plus-right');



if (bookingButton) {
    bookingButton.addEventListener('click', function (importantEvent) {
        importantEvent.preventDefault();
        modal.classList.add('modal-container-open');
    });
    modalCloseButton.addEventListener('click', function (importantEvent) {
        modal.classList.remove('modal-container-open');
    });
}

if (hotelSearch) {
    hotelSearch.addEventListener('click', function (importantEvent) {
        importantEvent.preventDefault();
        modal.classList.add('modal-container-open');
    });
    modalCloseButton.addEventListener('click', function (importantEvent) {
        modal.classList.remove('modal-container-open');
    });
}


if (adultNumberInput) {
  adultNumberButtonMinus.addEventListener('click', () => {
    if (adultNumberInput.value > 1) {
      adultNumberInput.value--;
    }
  });
  adultNumberButtonPlus.addEventListener('click', () => {
    adultNumberInput.value++;
  });
}

if (childrenNumberInput) {
  childrenNumberButtonMinus.addEventListener('click', () => {
    if (childrenNumberInput.value > 0) {
      childrenNumberInput.value--;
    }
  });
  childrenNumberButtonPlus.addEventListener('click', () => {
    childrenNumberInput.value++;
  });
}
