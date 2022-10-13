//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const itemList = ["latte", "pane", "frutta", "carne", "pasta"];
console.log(itemList);

// Prelevare elemento html
const list = document.querySelector(".list");

// Inizio ciclo while per creare gli elementi della lista
let i = 0;
while (i < itemList.length) {

    console.log(itemList[i], "lista while");

    const element = `<li>${itemList[i]}</li>`

    list.innerHTML += element;

    i++;
}

// Bonus, creare la lista della spesa con prompt
