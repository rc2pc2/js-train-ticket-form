
//  ? - recupero l'elemento al quale dovrò aggiungere un ascoltatore di eventi
//  ? - aggiungo un event lister legato al click di questo elemento
    // § - calcolo il costo del biglietto, con le eventualità legate all'età
    // § - lo restituisco in pagina nel luogo prefissato

const generateTicketButton = document.querySelector('button');
const distanceInputElement = document.getElementById('user-distance');
const ageSelectElement = document.getElementById('select-age');
const outputElement = document.getElementById('output') ;

// console.log(distanceInputElement.value);

generateTicketButton.addEventListener('click', function(){
    // console.log('2');

    const selectAge = parseInt(ageSelectElement.value);
    console.log(selectAge);

    if ( parseInt(distanceInputElement.value) > 0
        || isNaN(parseInt(distanceInputElement.value)) ){
        let price = parseInt(distanceInputElement.value) * 0.233;

        if (selectAge === 1 ){
            price = price - (price * 0.194);

        } else if ( selectAge === 2) {
            price = price - (price * 0.377);
        }

        outputElement.innerHTML = 'The price of your ticket is: ' + price.toFixed(2) + '€';
    } else {
        outputElement.innerHTML = "It is not possible to generate a ticket with negative distance";
    }

});

const resetButton = document.querySelector('button.reset-button');

resetButton.addEventListener('click', function(){
    distanceInputElement.value = "";
    ageSelectElement.value = "";
    outputElement.innerHTML = '<span class="italic-font">Generate a new ticket to see its price!</span>'
});

console.log('3');
