async function fetchJson(url) {
  const response = await fetch(url)
  const obj = await response.json()
  return obj
}


async function getChefBirthday(id) {
  const ricetta = await fetchJson(`https://dummyjson.com/recipes/{id}`);
  const chef = await fetchJson(`https://dummyjson.com/users/{userId}`);
  return {...ricetta, chef};
}

getChefBirthday(1)
  .then(ricetta => console.log("Data di nascita dello chef:", ricetta))
  .catch(error => console.error("Errore:", error.message));