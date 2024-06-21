const apiKey = "de4f97bf9a2a44eb82eae426ffef087f";
let today = new Date();
const dateTo = today.toISOString().slice(0, 10);
function dateFrom() {
  let sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  let isoDate = sevenDaysAgo.toISOString().slice(0, 10);
  return isoDate;
}
const baseUrl = `https://newsapi.org/v2`;

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function getNews(userInput) {
  return fetch(
    `${baseUrl}/everything?q=${userInput}&from=${dateFrom()}&to=${dateTo}&apiKey=${apiKey}`
  ).then((res) => checkResponse(res));
}

export { getNews };
