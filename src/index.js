// Импорт библиотек и стилей
import debounce from 'lodash/debounce';
import './sass/styles.scss';

// Импорт функций
import fetchCountries from './js/fetchCountries';
import updateCountriesList from './js/update-countries';

// Элементы в DOM
const inputRef = document.querySelector('.search-input');
const resetRef = document.querySelector('input[type="reset"]');
const listContainerRef = document.querySelector('.markup-container');

// Слушатель события на интпутах
inputRef.addEventListener('input', debounce(serchCountries, 500));
resetRef.addEventListener('click', () => {
  listContainerRef.innerHTML = '';
})

// Функция для поиска
function serchCountries(event) {
  const input = event.target;
  const searchQuery = input.value;

  listContainerRef.innerHTML = '';

  fetchCountries(searchQuery).then(updateCountriesList);
}

