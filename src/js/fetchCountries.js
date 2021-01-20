// Функция, которая фетчит публичный API, где внутри динамический запрос с инпута

function fetchCounries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(data => data)
    .catch((error) => console.log('Что-то не так с запросом'));
}

// Экспорт функции во внешний код
export default fetchCounries;
