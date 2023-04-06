const bookingButton = document.querySelector('.booking-button');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close');
const hotelSearch = document.querySelector('.hotel-search');

if (bookingButton) {
  bookingButton.addEventListener('click', function (importantEvent) {
    importantEvent.preventDefault();
    modal.classList.add('modal-container-open');
  });
  modalCloseButton.addEventListener('click', function(importantEvent) {
    modal.classList.remove('modal-container-open');
  });
}

if (hotelSearch) {
  hotelSearch.addEventListener('click', function (importantEvent) {
    importantEvent.preventDefault();
    modal.classList.add('modal-container-open');
  });
  modalCloseButton.addEventListener('click', function(importantEvent) {
    modal.classList.remove('modal-container-open');
  });
}