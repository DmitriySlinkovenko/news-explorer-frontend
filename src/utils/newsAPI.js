let today = new Date();
const dateTo = today.toISOString().slice(0, 10);
function dateFrom() {
  let sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  let isoDate = sevenDaysAgo.toISOString().slice(0, 10);
  return isoDate;
}
const baseUrl = `https://nomoreparties.co/news/v2/everything?`;

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function getNews(userInput) {
  return fetch(
    `${baseUrl}q=${userInput}&from=${dateFrom()}&to=${dateTo}&sortBy=popularity&apiKey=5c724319d04e45dda194b7ce67e76564&pageSize=100`
  ).then((res) => checkResponse(res));
}

export { getNews };
