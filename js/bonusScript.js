//Data una lista della spesa tramite prompt, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


const list = document.querySelector(".list");
let itemList = [];

while(true) {

    let input = prompt("Scrivi un prodotto per inserirlo nella lista, scrivi 'ok' per completare la lista");

    if (input === "ok" || input === ""){
        break;
    }

    itemList.push(input);

}


console.log(itemList);

let i = 0;
while (i < itemList.length) {

    console.log(itemList[i]);

    const element = `<li>${itemList[i]}</li>`

    list.innerHTML += element;

    i++;
}
