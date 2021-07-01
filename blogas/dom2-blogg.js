
function naujasIrasas (){
    // const antraste = document.getElementById('txtAntraste').value;
    const tekstas = document.getElementById('txtTekstas').value;

    var visasBlogas = document.getElementById('blogoIrasai');
    var naujaAntraste, naujasIrasas, atskyrimas;

    //be tarpinio kintamojo
    naujaAntraste = document.createElement ('p');
    visasBlogas.appendChild(naujaAntraste);
    naujaAntraste.textContent = document.getElementById('txtAntraste').value;

    //su tarpiniu kintumuoju "tekstas" 
    naujasIrasas = document.createElement('p');
    visasBlogas.appendChild(naujasIrasas);
    naujasIrasas.textContent = tekstas;

    atskyrimas = document.createElement('hr');
    visasBlogas.appendChild(atskyrimas);


}

function naujasIrasas2 (){
    
    var visasBlogas = document.getElementById('blogoIrasai');
    var blogoIrasas, irasoData, irasoAntraste, irasoTekstas, atskyrimas;
    var d = new Date(); 

    // d = getDate();
    atskyrimas = document.createElement('hr');
    visasBlogas.firstElementChild.prepend(atskyrimas); //atskyrimas prieš pirmą elementą


    blogoIrasas = document.createElement('div');
    atskyrimas.before(blogoIrasas); //naujas įrašas prieš atskyrimą
    blogoIrasas.className = 'irasas';

    irasoData = document.createElement('p');
    irasoData.className = 'dataLaikas';
    irasoAntraste = document.createElement('h2');
    irasoTekstas = document.createElement('p');
    blogoIrasas.appendChild (irasoData);
    blogoIrasas.appendChild(irasoAntraste);
    blogoIrasas.appendChild(irasoTekstas);

    // irasoAntraste.style--class

    irasoData.textContent = d;
    irasoAntraste.textContent = document.getElementById('txtAntraste').value;
    irasoTekstas.textContent = document.getElementById('txtTekstas').value;

    console.log(d);
}

function naujasIrasas3 () {
    
    let blogoIrasas;
    let visasBlogas = document.getElementById('blogoIrasai');

    isorinisIrasas.onload= function() {
        if (isorinisIrasas.status===200) {
            blogoIrasas = document.createElement('div');
            blogoIrasas.innerHTML = isorinisIrasas.responseText;
            visasBlogas.appendChild(this.responseText);
        }
    }
    console.log (blogoIrasas);
}

let isorinisIrasas= new XMLHttpRequest ();

isorinisIrasas.open('GET', 'DOM2-blog-new1.html', true);
isorinisIrasas.send(null);

document.getElementById("mygtukasIrasas").addEventListener("click", naujasIrasas2);
document.getElementById("mygtukasAdd").addEventListener("click", naujasIrasas3);
