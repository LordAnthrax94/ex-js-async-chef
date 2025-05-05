async function fetchJson(url) {
  const response = await fetch(url)
  const obj = await response.json()
  return obj
}


async function getChefBirthday(id) {
  const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
  const chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`); 
  return chef.birthDate;
}

(async () =>{
  try{
    const compleanno = await getChefBirthday(1)
    console.log("Data di nascita dello chef:", compleanno);    
  }catch(error){
    console.error("Errore:", error.message);
  }
  console.log('Fine Codice!');
  
})();

// getChefBirthday(1)
//   .then(birthDate => console.log("Data di nascita dello chef:", birthDate))
//   .catch(error => console.error("Errore:", error.message));

