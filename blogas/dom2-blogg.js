
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
  
  const visasBlogas = document.getElementById('blogoIrasai');
  let blogoIrasas, irasoData, irasoAntraste, irasoTekstas, atskyrimas;
  let d = new Date(); 

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
}


let isorinisIrasas= new XMLHttpRequest ();
let naujasTekstas;

isorinisIrasas.onload= function() {
  if (isorinisIrasas.status===200) {
    naujasTekstas=isorinisIrasas.responseText;
  } 
}

function naujasIrasas3 () {
  let blogoIrasas, irasoTekstas, atskyrimas;

  const visasBlogas = document.getElementById('blogoIrasai');

  atskyrimas = document.createElement('hr');
  visasBlogas.firstElementChild.prepend(atskyrimas);

  blogoIrasas = document.createElement('div');
  atskyrimas.before(blogoIrasas); //naujas įrašas prieš atskyrimą
  blogoIrasas.className = 'irasas';

  
  irasoTekstas = document.createElement('p');
  blogoIrasas.appendChild(irasoTekstas);

  // irasoAntraste.style--class

  irasoTekstas.textContent = naujasTekstas;
}

function irasoSaugojimas() {
  let xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'blogoIrasai.php', true); 
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Response
      var response = this.responseText;
    }
  };

  let d = new Date();
  let pavadinimas=document.getElementById('txtAntraste').value;
  let tekstas= document.getElementById('txtTekstas').value;

  let irasas = {date: d, title: pavadinimas , tekstas: tekstas};
  xhttp.send(JSON.stringify(irasas));
}

isorinisIrasas.open('GET', 'DOM2-blog-new1.html', true);
isorinisIrasas.send(null);

document.getElementById('mygtukasIrasas').addEventListener('click', naujasIrasas2);
document.getElementById('mygtukasAdd').addEventListener('click', naujasIrasas3);
document.getElementById('mygtukasSave').addEventListener('click', irasoSaugojimas);
