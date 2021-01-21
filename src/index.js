// Импорты
import debounce from 'lodash/debounce';
import './sass/styles.scss';
import { inputRef, resetRef, listContainerRef } from './js/refs';
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

  listContainerRef.addEventListener('click', takeSearhResults);
}

// Функция для подстановки результатов из выдачи
function takeSearhResults(event) {
  inputRef.value = event.target.textContent;

  clearContainer();

  fetchCountries(inputRef.value).then(updateCountriesList);

  listContainerRef.removeEventListener('click', takeSearhResults);
}

// Функция для очистки выдачи
function clearContainer() {
  listContainerRef.innerHTML = '';

  if ((window.location = '#')) {
    window.history.pushState('page', 'Title', '/');
  }
}
