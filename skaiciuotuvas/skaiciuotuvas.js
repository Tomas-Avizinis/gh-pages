var sk1=0, sk2, rezultatas;

function eil1rodymas(){
	document.getElementById('ekr1eilute').textContent = sk1;
}

function skIvedimas(skaicius) {
sk1= sk1*10 + Number(skaicius.textContent); 
eil1rodymas();
}

function cancelEntry(){
	if (sk1 >= 0) {sk1=Math.floor(sk1/10);}
	else {sk1=Math.ceil(sk1/10);}
	eil1rodymas();
}

function C(){
	sk1=0;	
	eil1rodymas();
}

function keistiZenkla () {
	sk1=sk1*-1;	
	eil1rodymas();
}