// Импорты
import debounce from 'lodash/debounce';
import './sass/styles.scss';
import { inputRef, resetRef, markupContainerRef } from './js/refs';
import fetchCountries from './js/fetchCountries';
import updateCountriesList from './js/update-countries';

// Слушатель события на интпутах
inputRef.addEventListener('input', debounce(serchCountries, 500));
resetRef.addEventListener('click', clearContainer);

// Функция для поиска
function serchCountries(event) {
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
