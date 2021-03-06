// Импорт шаблона для списка стран
import countriesTpl from '../templates/countries-list.hbs';
import countryTpl from '../templates/country-item.hbs';
import { markupContainerRef } from './refs';
import alert from './notify';

// Функция, обновляющая выдачу стран в DOM
function updateCountriesList(data) {
  const markupAll = countriesTpl(data);
  const markupOne = countryTpl(data);

  if (data.status === 404) {
    alert({
      type: 'notice',
      text: 'Nothing found ☹',
      delay: 2000,
      width: '300px',
      maxTextHeight: null,
    });
  }

  if (data.length === 1) {
    markupContainerRef.insertAdjacentHTML('beforeend', markupOne);
    return;
  }

  if (data.length > 10) {
    alert({
      type: 'error',
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 2000,
      maxTextHeight: null,
    });
    return;
  }

  markupContainerRef.insertAdjacentHTML('beforeend', markupAll);
}

// Экспорт функции во внешний код
export default updateCountriesList;
