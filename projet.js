function Afficher(){
	Go = document.getElementById('divamontrer');
		Go.style.display = 'block';

}

function Afficher2()	{
	
	divShow = document.getElementById('divamontrer1');
	divShow1 = document.getElementById('divamontrer2');
 	divShow2 = document.getElementById('divamontrer3');
	divShow3 = document.getElementById('divamontrer4');
	
		divShow.style.display = 'block';
		divShow1.style.display = 'block';
		divShow2.style.display = 'none';
		divShow3.style.display = 'none';
 
}

function Afficher3()	{

	divShow = document.getElementById('divamontrer1');
	divShow1 = document.getElementById('divamontrer2');
	divShow2 = document.getElementById('divamontrer3');
 	divShow3 = document.getElementById('divamontrer4');
 	
	
		divShow.style.display = 'block';
		divShow1.style.display = 'block';
		divShow2.style.display = 'block';
		divShow3.style.display = 'none';
 
}

function Afficher4()	{

	divShow = document.getElementById('divamontrer1');
	divShow1 = document.getElementById('divamontrer2');
	divShow2 = document.getElementById('divamontrer3');
	divShow3 = document.getElementById('divamontrer4');
 
		divShow.style.display = 'block';
		divShow1.style.display = 'block';
		divShow2.style.display = 'block';
		divShow3.style.display = 'block';
 
}

	
	
	



var vdate=document.getElementById("date");
var date=new Date;
var annee=date.getFullYear();
var mois=date.getMonth();
var jour=date.getDate();
vdate.innerHTML+=jour+'/'+mois+'/'+annee;

var vheure=document.getElementById("heure");
var heure=new Date()
var h=heure.getHours();
if (h<10) {h = "0" + h}
var m=heure.getMinutes();
if (m<10) {m = "0" + m}
var s=heure.getSeconds();
if (s<10) {s = "0" + s}
vheure.innerHTML+=h+':'+m+':'+s;