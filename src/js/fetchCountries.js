// Функция, которая фетчит публичный API
function fetchCounries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(`Smth wrong with request ${error}`));
}

// Экспорт функции во внешний код
export default fetchCounries;
