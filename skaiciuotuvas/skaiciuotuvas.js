var sk1='', sk2='', rezultatas;
var on=true;

function ijungti() {
	var ekranas=document.getElementById('ekranas');
	if (on) {
		ekranas.style.backgroundColor='#656565';
		ekranas.style.boxShadow='none'; 
		// ekranas.children.style.visibility='hidden'
		on=false} 
	else {
		ekranas.style.backgroundColor='#d5d6aB';
		ekranas.style.boxShadow='2px 0px 20px 2px #f5f6dB inset';
		// ekranas.children.style.visibility='visible'  	
		on=true}
}

function eil1rodymas(){
	document.getElementById('ekr1eilute').textContent = sk1;
}
function skIvedimas (skaicius) {
	if (sk1 ==0) {sk1=skaicius.textContent}
	else {sk1 += skaicius.textContent}
	eil1rodymas();
}


function cancelEntry(){
	if (sk1 != 0) {
	sk1 = sk1.slice(0, sk1.length-1);
	if (sk1.endsWith('.')) { 				//kad neliktu gale tik kablelis, nutrinam ir ji
		sk1 = sk1.slice(0, sk1.length-1);	
	}
	if (sk1 =='-') {sk1='0'}; //likusi tik '-' keicime i '0'
	if (sk1 =='') {sk1='0'}; 	//tuscia eilute keiciame i '0'
	}	
	eil1rodymas();
}


function C(){
	sk1='0';	
	eil1rodymas();
}

function keistiZenkla () {
if (sk1 !='0') {
	if (!(sk1.includes('-'))) {
		sk1='-' + sk1;	
}
else {
	sk1=sk1.slice(1, sk1.length)
}
}
	eil1rodymas();
}


function kablIvedimas (skaicius) {
if (!(sk1.includes('.'))) {
	sk1 += skaicius.textContent;} //kableli irasome tik jeigu jo skaiciuje nebuvo
}