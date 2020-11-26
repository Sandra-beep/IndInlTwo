


var valueList = [];

// Funktionen som ska räkna ihop totala summan
function countTotal(event){
    
    // Stoppar sidan från att uppdatera sig
    event.preventDefault(); 

    // Väljer div id selectOption
    // Ger användaren möjlighet att välja plus eller minus 
    var options = document.querySelector( "#selectOption" )



    // If-egenskap med villkor, att om användaren väljer plustecknet, så kommer den att koppla till inkomster
    if( options.value==="+" ){

        // skapat en variabel som heter description som kopplar till input-fältet som heter description 
        var description = document.querySelector( "#description" ).value;

        // skapat en variabel som heter value, den kopplar till input-fältet som heter value.
        var value = document.querySelector( "#value" ).value;

        // Här vill vi att det som skrivs in ska pushas in i listan, konverterar value till siffra
        valueList.push(Number(value));

        // skapat en variabel som heter inkomstData, som sedan plockar upp klassen inkomstData, som är själva span-tagen där användaren skriver in egen text senare
        var inkomstData = document.querySelector( ".inkomstData" );

        // Vad händer här???
        inkomstData.innerText = value;

        // Skapat en variabel som heter "li", där vi skapar en list element direkt med js
        var li = document.createElement( "li" );

        // Denna kod säger att all text som skrivs, dvs från input-fältet från description och value ska skapa en punkt i punktlistan.
        li.innerText = description + ": " + value + " kr";

        // Skapat en variabel som heter ul, där den plockar fram klassen listIncomes
        var ul = document.querySelector( ".listIncomes" );

        // I varibeln/parent ul, vill vi lägga till en child, i detta fall variabeln li/punktlista. Dvs det som användaren skriver in från input-fälten description och value hamnar som en punkt under punktlistan ul.
        ul.appendChild(li);
    }

    // else if egenskap med villkoret att om man väljer minustecknet, så kommer den koppla till kostnader
    else if( options.value === "-" ){


        var description = document.querySelector( "#description" ).value;

        var value = document.querySelector( "#value" ).value;

        valueList.push( Number(-value) );

        var kostnadData = document.querySelector( ".kostnadData" );

        kostnadData.innerText = value;

        var li = document.createElement( "li" );

        li.innerText = description + ": " + value + " kr";

        var ul = document.querySelector( ".listCosts" );

        ul.appendChild( li );

    }

    var summa = 0;
    for (var i = 0; i<valueList.length; i++ ){
        summa += valueList[i];
    }

    var vinstSpan = document.querySelector ( ".vinstData" )

    vinstSpan.innerText = summa + " kr";

}

// Variabeln som heter btn, den väljer klassen add från html, dvs den plockar fram button tagen
var btn = document.querySelector( ".add" );

// Js egna kod där den "lyssnar" efter ett event
// När man klickar på knappen - Add new value, så tar den fram totala summan
btn.addEventListener( "click", countTotal );

