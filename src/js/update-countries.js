// Импорт шаблона для списка стран
import countriesTpl from '../templates/countries-list.hbs';
import countryTpl from '../templates/country-item.hbs';

// Нотификация
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

// DOM
const listContainerRef = document.querySelector('.result-container');

// Функция, обновляющая список в DOM
function updateCountriesList(data) {
  const markupAll = countriesTpl(data);
  const markupOne = countryTpl(data);

  if (data.length === 1) {
    listContainerRef.insertAdjacentHTML('beforeend', markupOne);
    return;
  }

  if (data.length > 10) {
    alert({
      type: 'error',
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 3000,
    });
    return;
  }

  listContainerRef.insertAdjacentHTML('beforeend', markupAll);
}

// Экспорт функции во внешний код
export default updateCountriesList;
