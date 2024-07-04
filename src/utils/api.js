const baseUrl = "http://localhost:3002";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => checkResponse(res));
}

function addItem({ name, description, urlToImage, title, publishedAt }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
      urlToImage,
      title,
      publishedAt,
    }),
  }).then(checkResponse);
}

function removeItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

export { getItems, addItem, removeItem, checkResponse };
