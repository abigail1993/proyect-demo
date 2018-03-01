const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchForText;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchForText = searchField.value;
  getNews();
});

function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open(GET,`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=$(searchForText)&api-key=fb4276caa82d41ccb244b1c2ab6ffce9`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError () {
  console.log('Se ha presentado un error');
}

function addNews () {
  const data = JSON.parse(this.responseText);
  console.log(data);
}
