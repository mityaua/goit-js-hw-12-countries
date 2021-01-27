// Импорты
import { form, inputRef, resetRef, markupContainerRef } from './js/refs';

import debounce from 'lodash/debounce';
import './sass/styles.scss';
import fetchCountries from './js/fetchCountries';
import updateCountriesList from './js/update-countries';

// Слушатели событий на инпутах
inputRef.addEventListener('input', debounce(searchCountries, 500));
resetRef.addEventListener('click', clearContainer);
form.addEventListener('submit', event => {
  event.preventDefault();
});

// Функция для поиска
function searchCountries(event) {
  // event.preventDefault();

  const searchQuery = event.target.value;

  clearContainer();

  fetchCountries(searchQuery).then(updateCountriesList);

  // markupContainerRef.addEventListener('click', takeSearchResults);
}

// Функция для подстановки результатов из выдачи (снять слушатель после отрисовки выше!)
// function takeSearchResults(event) {
//   inputRef.value = event.target.textContent;

//   clearContainer();

//   fetchCountries(inputRef.value).then(updateCountriesList);

//   markupContainerRef.removeEventListener('click', takeSearchResults);
// }

// Функция для очистки выдачи
function clearContainer() {
  markupContainerRef.innerHTML = '';
}
