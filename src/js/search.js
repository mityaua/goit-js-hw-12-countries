import { form, inputRef, resetRef, markupContainerRef } from './refs';
import debounce from 'lodash/debounce';
import fetchCountries from './fetchCountries';
import updateCountriesList from './update-countries';
import topbar from 'topbar';

// Слушатели событий на инпутах
inputRef.addEventListener('input', debounce(searchCountries, 500));
resetRef.addEventListener('click', clearContainer);
form.addEventListener('submit', event => {
  event.preventDefault();
});

// Функция для поиска
function searchCountries(event) {
  topbar.show();

  const searchQuery = event.target.value;

  clearContainer();

  fetchCountries(searchQuery).then(updateCountriesList);

  markupContainerRef.addEventListener('click', takeSearchResults);

  topbar.hide();
}

// Функция для подстановки результатов из выдачи
function takeSearchResults(event) {
  topbar.show();

  if (!event.target.classList.contains('js-list-title')) {
    return;
  }

  inputRef.value = event.target.textContent;

  clearContainer();

  fetchCountries(inputRef.value).then(updateCountriesList);

  inputRef.value = '';
  markupContainerRef.removeEventListener('click', takeSearchResults);

  topbar.hide();
}

// Функция для очистки выдачи
function clearContainer() {
  markupContainerRef.innerHTML = '';
}
