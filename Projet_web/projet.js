const joueurA = document.querySelector('.joueurA');
const joueurB = document.querySelector('.joueurB');
const joueurC = document.querySelector('.joueurC');
const joueurD = document.querySelector('.joueurD');
const changeA = document.querySelector('.changeA');
const changeB = document.querySelector('.changeB');
const changeC = document.querySelector('.changeC');
const changeD = document.querySelector('.changeD');
const J1 = document.querySelector('.J1');
const J2 = document.querySelector('.J2');
const J3 = document.querySelector('.J3');
const J4 = document.querySelector('.J4');
const J33 = document.querySelector('.J33');
const J44 = document.querySelector('.J44');
const J333 = document.querySelector('.J333');
const J444 = document.querySelector('.J444');
const J3333 = document.querySelector('.J3333');
const J4444 = document.querySelector('.J4444');
const J33333 = document.querySelector('.J33333');
const J44444 = document.querySelector('.J44444');

const inputJoueur1 = document.querySelector('.joueur1');
const inputJoueur2 = document.querySelector('.joueur2');
const inputJoueur3 = document.querySelector('.joueur3');
const inputJoueur4 = document.querySelector('.joueur4');
const deckJ1 = document.querySelector('.deckJ1');
const deckJ2 = document.querySelector('.deckJ2');
const deckJ3 = document.querySelector('.deckJ3');
const deckJ4 = document.querySelector('.deckJ4');
const deckJ11 = document.querySelector('.deckJ11');
const deckJ22 = document.querySelector('.deckJ22');
const deckJ33 = document.querySelector('.deckJ33');
const deckJ44 = document.querySelector('.deckJ44');
const deckJ111 = document.querySelector('.deckJ111');
const deckJ222 = document.querySelector('.deckJ222');
const deckJ333 = document.querySelector('.deckJ333');
const deckJ444 = document.querySelector('.deckJ444');
const deckJ1111 = document.querySelector('.deckJ1111');
const deckJ2222 = document.querySelector('.deckJ2222');
const deckJ3333 = document.querySelector('.deckJ3333');
const deckJ4444= document.querySelector('.deckJ4444');

const compteurJoueur=document.querySelector('.compteurJoueur')


function Afficher(){
	
	const Hidden=document.getElementsByClassName('page1');	
	const Look=document.getElementsByClassName('MegaDiv');
	
	
	
	 	Hidden[0].style.display='none';
		Look[0].style.display='block';
		

}

function Afficher2()	{
	
	divShow = document.getElementById('divamontrer1');
	divShow1 = document.getElementById('divamontrer2');
 	divShow2 = document.getElementById('divamontrer3');
	divShow3 = document.getElementById('divamontrer4');
	divShowC = document.getElementById('divamontrerC');
 	divShowD = document.getElementById('divamontrerD');
	

		divShow.style.display = 'block';
		divShow1.style.display = 'block';
		divShow2.style.display = 'none';
		divShow3.style.display = 'none';
		divShowC.style.display = 'none';
		divShowD.style.display = 'none';
		document.querySelector('.compteurJoueur').value = "2";


 
}

function Afficher3()	{

	divShow = document.getElementById('divamontrer1');
	divShow1 = document.getElementById('divamontrer2');
	divShow2 = document.getElementById('divamontrer3');
 	divShow3 = document.getElementById('divamontrer4');
 	divShowC = document.getElementById('divamontrerC');
 	divShowD = document.getElementById('divamontrerD');
 
		divShow.style.display = 'block';
		divShow1.style.display = 'block';
		divShow2.style.display = 'block';
		divShow3.style.display = 'none';
		divShowC.style.display = 'block';
		divShowD.style.display = 'none';
		J3.style.display = 'block';
		J33.style.display = 'block';
		J333.style.display = 'block';
		J3333.style.display = 'block';
		J33333.style.display = 'block';
		J4.style.display = 'none';
		J44.style.display = 'none';
		J444.style.display = 'none';
		J4444.style.display = 'none';
		J44444.style.display = 'none';
		document.querySelector('.compteurJoueur').value = "3"; 

}

function Afficher4()	{

	divShow = document.getElementById('divamontrer1');
	divShow1 = document.getElementById('divamontrer2');
	divShow2 = document.getElementById('divamontrer3');
	divShow3 = document.getElementById('divamontrer4');
	divShowC = document.getElementById('divamontrerC');
	divShowD = document.getElementById('divamontrerD');
	
 
		divShow.style.display = 'block';
		divShow1.style.display = 'block';
		divShow2.style.display = 'block';
		divShow3.style.display = 'block';
		divShowC.style.display = 'block';
		divShowD.style.display = 'block';
		J3.style.display = 'block';
		J33.style.display = 'block';
		J333.style.display = 'block';
		J3333.style.display = 'block';
		J33333.style.display = 'block';
		J4.style.display = 'block';
		J44.style.display = 'block';
		J444.style.display = 'block';
		J4444.style.display = 'block';
		J44444.style.display = 'block';
		document.querySelector('.compteurJoueur').value = "4";

 
}


const changeValue1 =
      (value, element) => element.innerHTML = value ;
      
inputJoueur1.addEventListener(
  'keyup',
  evt => changeValue1(evt.target.value, joueurA)
);

const changeValue2 =
      (value, element) => element.innerHTML = value ;
      
inputJoueur2.addEventListener(
  'keyup',
  evt => changeValue2(evt.target.value, joueurB)
);

const changeValue3 =
    (value, element) => element.innerHTML = value ;
      
inputJoueur3.addEventListener(
   'keyup',
  	evt => changeValue3(evt.target.value, joueurC)
);

const changeValue4 =
    (value, element) => element.innerHTML = value ;
      
inputJoueur4.addEventListener(
   'keyup',
    evt => changeValue4(evt.target.value, joueurD)
);

const changeValue5 =
    (value, element) => element.innerHTML = value ;
      
inputJoueur1.addEventListener(
   'keyup',
    evt => changeValue5(evt.target.value, changeA)
);

const changeValue6 =
    (value, element) => element.innerHTML = value ;
      
inputJoueur2.addEventListener(
   'keyup',
    evt => changeValue6(evt.target.value, changeB)
);

const changeValue7 =
    (value, element) => element.innerHTML = value ;
      
inputJoueur3.addEventListener(
   'keyup',
    evt => changeValue7(evt.target.value, changeC)
);


const changeValue8 =
    (value, element) => element.innerHTML = value ;
      
inputJoueur4.addEventListener(
   'keyup',
    evt => changeValue8(evt.target.value, changeD)
);

fetch('https://deckofcardsapi.com/api/deck/733roygw023n/shuffle/?deck_count=1')
		.then(response => response.json())

		.then(data => {console.log(data)});

		
function Augmente1(){
		const question1 = document.querySelector('.question1');
		const gagne1 = document.querySelector('.gagne1');
		const perdu1 = document.querySelector('.perdu1');
		question1.style.display = 'block';
		gagne1.style.display = 'none';
		perdu1.style.display = 'none';	
		
}
function NextA(){
		const tourA = document.querySelector('.tourA');
		const tourB = document.querySelector('.tourB');
		tourA.style.display = 'none';
		tourB.style.display = 'block';
		const gagne1 = document.querySelector('.gagne1');
		const perdu1 = document.querySelector('.perdu1');
		const question1 = document.querySelector('.question1');	
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=1')
		.then(response => response.json())

		.then(data => {console.log(data.cards[0]);

		const carte=data.cards[0].image	;
		const carte_compareA=data.cards[0]	;
		deckJ1.src = carte;
		
		
			if (((carte_compareA.suit== "DIAMONDS") || (carte_compareA.suit== "HEARTS")) && (document.querySelector('.bouton').value === "Rouge")) {
			
				gagne1.style.display = 'block';	
				question1.style.display = 'none';
			}
			
			else if (((carte_compareA.suit== "SPADES") || (carte_compareA.suit== "CLUBS"))	&& (document.querySelector('.bouton').value === "Noir")) {
			
				gagne1.style.display = 'block';	
				question1.style.display = 'none';
			}
			
			else {
			
				perdu1.style.display = 'block';	
				question1.style.display = 'none';
				}
				
		});
	
}


function NextB(){
		const question1 = document.querySelector('.question1');
		const tourA = document.querySelector('.tourA');
		const tourC = document.querySelector('.tourC');
		const tourB = document.querySelector('.tourB');
		const gagne1 = document.querySelector('.gagne1');
		const perdu1 = document.querySelector('.perdu1');
		const gagne2 = document.querySelector('.gagne2');
		const perdu2 = document.querySelector('.perdu2');
		
		tourB.style.display = 'none';
		tourA.style.display = 'none';
		
		question1.style.display = 'none';	
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=1')
		.then(response => response.json())

		.then(data => {console.log(data.cards[0]);

		const carte=data.cards[0].image	;
		const carte_compareB=data.cards[0]	;
		deckJ2.src = carte;
		
		if (((carte_compareB.suit== "DIAMONDS") || (carte_compareB.suit== "HEARTS")) && (document.querySelector('.bouton').value === "Rouge")) {
				
				if(compteurJoueur.value>="3"){
				tourC.style.display = 'block';
				gagne1.style.display = 'block';	
				question1.style.display = 'none';
				}
				else {
				question1.style.display = 'none';
				tourC.style.display = 'none';
				gagne2.style.display = 'block';
				}
			}
			
			else if (((carte_compareB.suit== "SPADES") || (carte_compareB.suit== "CLUBS"))	&& (document.querySelector('.bouton').value === "Noir")) {
				if(compteurJoueur.value>="3"){
				tourC.style.display = 'block';
				gagne1.style.display = 'block';	
				question1.style.display = 'none';
				}
				else {
				question1.style.display = 'none';
				tourC.style.display = 'none';
				gagne2.style.display = 'block';
				}
			}
			
			else {
				if(compteurJoueur.value>="3"){
				tourC.style.display = 'block';
				perdu1.style.display = 'block';	
				question1.style.display = 'none';
				}
				else {
				question1.style.display = 'none';
				tourC.style.display = 'none';
				perdu2.style.display = 'block';
				}
				}
		
		});

}
function NextC(){
		const question1 = document.querySelector('.question1');
		const tourA = document.querySelector('.tourA');
		const tourB = document.querySelector('.tourB');
		const tourC = document.querySelector('.tourC');
		const tourD = document.querySelector('.tourD');
		const gagne1 = document.querySelector('.gagne1');
		const perdu1 = document.querySelector('.perdu1');
		const gagne2 = document.querySelector('.gagne2');
		const perdu2 = document.querySelector('.perdu2');
		
		tourC.style.display = 'none';
		tourA.style.display = 'none';
		tourB.style.display = 'none';
		
		question1.style.display = 'none';
		
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=1')
		.then(response => response.json())

		.then(data => {console.log(data.cards[0]);

		const carte=data.cards[0].image	;
		const carte_compareC=data.cards[0];
		deckJ3.src = carte;
		
		if (((carte_compareC.suit== "DIAMONDS") || (carte_compareC.suit== "HEARTS")) && (document.querySelector('.bouton').value === "Rouge")) {
				
				console.log("ici")
				if(compteurJoueur.value>"3"){
				tourD.style.display = 'block';
				gagne1.style.display = 'block';	
				question1.style.display = 'none';
				}
				else {
				question1.style.display = 'none';
				tourD.style.display = 'none';
				gagne2.style.display = 'block';
				}
			}
			
			else if (((carte_compareC.suit== "SPADES") || (carte_compareC.suit== "CLUBS"))	&& (document.querySelector('.bouton').value === "Noir")) {
				if(compteurJoueur.value>"3"){
				tourD.style.display = 'block';
				gagne1.style.display = 'block';	
				question1.style.display = 'none';
				}
				else {
				question1.style.display = 'none';
				tourD.style.display = 'none';
				gagne2.style.display = 'block';
				}
			}
			
			else {
				if(compteurJoueur.value>"3"){
				tourD.style.display = 'block';
				perdu1.style.display = 'block';	
				question1.style.display = 'none';
				}
				else {
				question1.style.display = 'none';
				tourD.style.display = 'none';
				perdu2.style.display = 'block';
				}
				}
		
		});

}

function NextD(){
		const question1 = document.querySelector('.question1');
		const gagne2 = document.querySelector('.gagne2');
		const perdu2 = document.querySelector('.perdu2');
		
		
		
		question1.style.display = 'none';
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=1')
		.then(response => response.json())

		.then(data => {console.log(data.cards[0]);

		const carte=data.cards[0].image	;
		const carte_compareD=data.cards[0];
		deckJ4.src = carte;
		
		if (((carte_compareD.suit== "DIAMONDS") || (carte_compareD.suit== "HEARTS")) && (document.querySelector('.bouton').value === "Rouge")) {

				gagne2.style.display = 'block';	
				question1.style.display = 'none';
			}
			
			else if (((carte_compareD.suit== "SPADES") || (carte_compareD.suit== "CLUBS"))	&& (document.querySelector('.bouton').value === "Noir")) {

				gagne2.style.display = 'block';	
				question1.style.display = 'none';
			}
			
			else {
				perdu2.style.display = 'block';	
				question1.style.display = 'none';
				}
				
		});
		
}

function Augmente2(){
		const question2 = document.querySelector('.question2');
		const gagne2 = document.querySelector('.gagne2');
		const perdu2 = document.querySelector('.perdu2');
		question2.style.display = 'block';
		gagne2.style.display = 'none';
		perdu2.style.display = 'none';
		
}


function NextAA(){
		const question2 = document.querySelector('.question2');
		const tourAA = document.querySelector('.tourAA');
		const tourBB = document.querySelector('.tourBB');
		const gagne2 = document.querySelector('.gagne2');
		const perdu2 = document.querySelector('.perdu2');
		
		tourAA.style.display = 'none';
		tourBB.style.display = 'block';	
		question2.style.display = 'none';
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=2')
		.then(response => response.json())

		.then(data => {console.log(data.cards[1]);

		const carte=data.cards[1].image	;
		const carte_compareAA=data.cards[1]	;
		const carteA=data.cards[0]	;
		deckJ11.src = carte;
		
		if ((carte_compareAA.value < carteA.value) && (document.querySelector('.bouton').value === "Moins")) {
				console.log(data.value);
				gagne2.style.display = 'block';	
			}
			
			else if ((carte_compareAA.value > carteA.value) && (document.querySelector('.bouton').value === "Plus")) {
			
				
				gagne2.style.display = 'block';	
			}
			
			else {
				
				perdu2.style.display = 'block';	
				
				}
		
		
		});

}


function NextBB(){
		const question2 = document.querySelector('.question2');
		const tourAA = document.querySelector('.tourAA');
		const tourCC = document.querySelector('.tourCC');
		const tourBB = document.querySelector('.tourBB');
		const gagne2 = document.querySelector('.gagne2');
		const gagne3 = document.querySelector('.gagne3');
		const perdu3 = document.querySelector('.perdu3');
		const perdu2 = document.querySelector('.perdu2');
		
		tourBB.style.display = 'none';
		tourAA.style.display = 'none';
		
		question2.style.display = 'none';
					
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=2')
		.then(response => response.json())

		.then(data => {console.log(data.cards[1]);

		const carte=data.cards[1].image	;
		const carte_compareBB=data.cards[1]	;
		const carteB=data.cards[0];
		deckJ22.src = carte;
		
		if ((carte_compareBB.value < carteB.value) && (document.querySelector('.bouton').value === "Moins")) {
				if(compteurJoueur.value>="3"){
					tourCC.style.display = 'block';
					gagne2.style.display = 'block';
				}
				else {
					tourCC.style.display = 'none';
					gagne3.style.display = 'block';
				}
					
				
			}
			
			else if ((carte_compareBB.value > carteB.value) && (document.querySelector('.bouton').value === "Plus")) {
				if(compteurJoueur.value>="3"){
					tourCC.style.display = 'block';
					gagne2.style.display = 'block';
				}
				else {
					tourCC.style.display = 'none';
					gagne3.style.display = 'block';
				}
			}
			
			else {
				if(compteurJoueur.value>="3"){
					tourCC.style.display = 'block';
					perdu2.style.display = 'block';
				}
				else {
					tourCC.style.display = 'none';
					perdu3.style.display = 'block';
				}
				}
		});

}
function NextCC(){
		const question2 = document.querySelector('.question2');
		const tourAA = document.querySelector('.tourAA');
		const tourBB = document.querySelector('.tourBB');
		const tourCC = document.querySelector('.tourCC');
		const tourDD = document.querySelector('.tourDD');
		const gagne2 = document.querySelector('.gagne2');
		const gagne3 = document.querySelector('.gagne3');
		const perdu3 = document.querySelector('.perdu3');
		const perdu2 = document.querySelector('.perdu2');
		
		tourCC.style.display = 'none';
		tourAA.style.display = 'none';
		tourBB.style.display = 'none';
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=2')
		.then(response => response.json())

		.then(data => {console.log(data.cards[1]);

		const carte=data.cards[1].image	;
		const carte_compareCC=data.cards[1];
		const carteC=data.cards[0];
		deckJ33.src = carte;
		
		if ((carte_compareCC.value < carteC.value) && (document.querySelector('.bouton').value === "Moins")) {
				if(compteurJoueur.value>"3"){
					tourDD.style.display = 'block';
					gagne2.style.display = 'block';
					question2.style.display = 'none';
				}
				else {
					tourDD.style.display = 'none';
					gagne3.style.display = 'block';
					question3.style.display = 'none';
				}
					
				
			}
			
			else if ((carte_compareCC.value > carteC.value) && (document.querySelector('.bouton').value === "Plus")) {
				if(compteurJoueur.value>"3"){
					tourDD.style.display = 'block';
					gagne2.style.display = 'block';
					question2.style.display = 'none';
				}
				else {
					tourDD.style.display = 'none';
					gagne3.style.display = 'block';
					question2.style.display = 'none';
				}
			}
			
			else {
				if(compteurJoueur.value>"3"){
					tourDD.style.display = 'block';
					perdu2.style.display = 'block';
					question2.style.display = 'none';
				}
				else {
					tourDD.style.display = 'none';
					perdu3.style.display = 'block';
					question2.style.display = 'none';
				}
				}
				
		});
		

}
function NextDD(){
		const question2 = document.querySelector('.question2');
		const gagne3 = document.querySelector('.gagne3');
		const perdu3 = document.querySelector('.perdu3');
		
		
		question2.style.display = 'none';	
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=2')
		.then(response => response.json())

		.then(data => {console.log(data.cards[1]);

		const carte=data.cards[1].image	;
		deckJ44.src = carte;
		const carte_compareDD=data.cards[1];
		const carteD=data.cards[0];
		
		if ((carte_compareDD.value < carteD.value) && (document.querySelector('.bouton').value === "Moins")) {
				
				
				gagne3.style.display = 'block';	
			}
			
			else if ((carte_compareDD.value > carteD.value) && (document.querySelector('.bouton').value === "Plus")) {
		
				
				gagne3.style.display = 'block';	
			}
			
			else {
				
				perdu3.style.display = 'block';	
				
				}
		});

}

function Augmente3(){
		const question3 = document.querySelector('.question3');
		const gagne3 = document.querySelector('.gagne3');
		const perdu3 = document.querySelector('.perdu3');
		question3.style.display = 'block';
		gagne3.style.display = 'none';
		perdu3.style.display = 'none';
		
}

function NextAAA(){
		const question3 = document.querySelector('.question3');
		const tourAAA = document.querySelector('.tourAAA');
		const tourBBB = document.querySelector('.tourBBB');
		const gagne3 = document.querySelector('.gagne3');
		const perdu3 = document.querySelector('.perdu3');
		
		tourAAA.style.display = 'none';
		tourBBB.style.display = 'block';
		question3.style.display = 'none'
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=3')
		.then(response => response.json())

		.then(data => {console.log(data.cards[2]);

		const carte=data.cards[2].image	;
		deckJ111.src = carte;
		const carte_compareAAA=data.cards[2]	;
		const carteAA=data.cards[1];
		const carteA=data.cards[0];
		
		if (((carteA.value<carte_compareAAA.value < carteAA.value)||(carteA.value > carte_compareAAA.value > carteAA.value)) && (document.querySelector('.bouton').value === "Interieur")) {
				console.log(data.value);
				gagne3.style.display = 'block';	
			}
			
			else if (((carteA.value<carte_compareAAA.value && carte_compareAAA> carteAA.value)||(carteA.value>carte_compareAAA.value && carte_compareAAA< carteAA.value)) && (document.querySelector('.bouton').value === "Exterieur")) {
		
				
				gagne3.style.display = 'block';	
			}
			
			else {
				
				perdu3.style.display = 'block';	
				
				}
		});

}


function NextBBB(){
		const question3 = document.querySelector('.question3');
		const tourAAA = document.querySelector('.tourAAA');
		const tourCCC = document.querySelector('.tourCCC');
		const tourBBB = document.querySelector('.tourBBB');
		const gagne3 = document.querySelector('.gagne3');
		const perdu3 = document.querySelector('.perdu3');
		const gagne4 = document.querySelector('.gagne4');
		const perdu4 = document.querySelector('.perdu4');
		
		tourBBB.style.display = 'none';
		tourAAA.style.display = 'none';
		
		
		question3.style.display = 'none';
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=3')
		.then(response => response.json())

		.then(data => {console.log(data.cards[2]);

		const carte=data.cards[2].image	;
		deckJ222.src = carte;
		const carte_compareBBB=data.cards[2]	;
		const carteBB=data.cards[1];
		const carteB=data.cards[0];
		
		if (((carteB.value<carte_compareBBB.value < carteBB.value)||(carteB.value > carte_compareBBB.value > carteBB.value)) && (document.querySelector('.bouton').value === "Interieur")) {
				if(compteurJoueur.value>="3"){
					tourCCC.style.display = 'block';
					gagne3.style.display = 'block';
				}
				else {
					tourCCC.style.display = 'none';
					gagne4.style.display = 'block';
						}	
			}
			
			else if (((carteB.value<carte_compareBBB.value && carte_compareBBB> carteBB.value)||(carteB.value>carte_compareBBB.value && carte_compareBBB< carteBB.value)) && (document.querySelector('.bouton').value === "Exterieur")) {
			
				
				if(compteurJoueur.value>="3"){
					tourCCC.style.display = 'block';
					gagne3.style.display = 'block';
				}
				else {
					tourCCC.style.display = 'none';
					gagne4.style.display = 'block';
				}
			}
			
			else {
				
				if(compteurJoueur.value>="3"){
					tourCCC.style.display = 'block';
					perdu3.style.display = 'block';
				}
				else {
					tourCCC.style.display = 'none';
					perdu4.style.display = 'block';
				}	
				}
		});

}
function NextCCC(){
		const question3 = document.querySelector('.question3');
		const tourAAA = document.querySelector('.tourAAA');
		const tourBBB = document.querySelector('.tourBBB');
		const tourCCC = document.querySelector('.tourCCC');
		const tourDDD = document.querySelector('.tourDDD');
		const gagne3 = document.querySelector('.gagne3');
		const gagne4 = document.querySelector('.gagne4');
		const perdu4 = document.querySelector('.perdu4');
		const perdu3 = document.querySelector('.perdu3');
		
		tourCCC.style.display = 'none';
		tourAAA.style.display = 'none';
		tourBBB.style.display = 'none';
		
		question3.style.display = 'none';
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=3')
		.then(response => response.json())

		.then(data => {console.log(data.cards[2]);

		const carte=data.cards[2].image	;
		deckJ333.src = carte;
		const carte_compareCCC=data.cards[2]	;
		const carteCC=data.cards[1];
		const carteC=data.cards[0];
		
		if (((carteC.value<carte_compareCCC.value < carteCC.value)||(carteC.value > carte_compareCCC.value > carteCC.value)) && (document.querySelector('.bouton').value === "Interieur")) {
				if(compteurJoueur.value>="3"){
					tourDDD.style.display = 'block';
					gagne3.style.display = 'block';
				}
				else {
					tourCCC.style.display = 'none';
					gagne4.style.display = 'block';
						}	
			}
			
			else if (((carteC.value<carte_compareCCC.value && carte_compareCCC> carteCC.value)||(carteC.value>carte_compareCCC.value && carte_compareCCC< carteCC.value)) && (document.querySelector('.bouton').value === "Exterieur")) {
			
				
				if(compteurJoueur.value>="3"){
					tourDDD.style.display = 'block';
					gagne3.style.display = 'block';
				}
				else {
					tourDDD.style.display = 'none';
					gagne4.style.display = 'block';
				}
			}
			
			else {
				
				if(compteurJoueur.value>="3"){
					tourDDD.style.display = 'block';
					perdu3.style.display = 'block';
				}
				else {
					tourDDD.style.display = 'none';
					perdu4.style.display = 'block';
				}	
				}
		});
		

}
function NextDDD(){
		const question3 = document.querySelector('.question3');
		const gagne4 = document.querySelector('.gagne4');
		const perdu4 = document.querySelector('.perdu4');
		
		
		question3.style.display = 'none';
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=3')
		.then(response => response.json())

		.then(data => {console.log(data.cards[2]);

		const carte=data.cards[2].image	;
		deckJ444.src = carte;
		const carte_compareDDD=data.cards[2]	;
		const carteDD=data.cards[1];
		const carteD=data.cards[0];
		
		if (((carteD.value<carte_compareDDD.value < carteDD.value)||(carteD.value > carte_compareDDD.value > carteDD.value)) && (document.querySelector('.bouton').value === "Interieur")) {
				
				gagne4.style.display = 'block';	
			}
			
			else if (((carteD.value<carte_compareDDD.value && carte_compareDDD> carteDD.value)||(carteD.value>carte_compareDDD.value && carte_compareDDD< carteDD.value)) && (document.querySelector('.bouton').value === "Exterieur")) {
	
				gagne4.style.display = 'block';	
			}
			
			else {
				
				perdu4.style.display = 'block';	
				
				}
		});
		
}

function Augmente4(){
		const question4 = document.querySelector('.question4');
		const gagne4 = document.querySelector('.gagne4');
		const perdu4 = document.querySelector('.perdu4');
		question4.style.display = 'block';
		gagne4.style.display = 'none';
		perdu4.style.display = 'none';
		
}

function NextAAAA(){
		const question4 = document.querySelector('.question4');
		const tourAAAA = document.querySelector('.tourAAAA');
		const tourBBBB = document.querySelector('.tourBBBB');
		const gagne4 = document.querySelector('.gagne4');
		const perdu4 = document.querySelector('.perdu4');
		const bouton =document.querySelector('.bouton');
		
		tourAAAA.style.display = 'none';
		tourBBBB.style.display = 'block';
		question4.style.display = 'none';
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=1')
		.then(response => response.json())

		.then(data => {console.log(data.cards[0]);

		const carte=data.cards[0].image;
		deckJ1111.src = carte;
		const carte_compareAAAA=data.cards[0];
		
		if (carte_compareAAAA.suit=="DIAMONDS" && bouton.value  === "Carreaux") {
				
				gagne4.style.display = 'block';	
			}
			
			else if (carte_compareAAAA.suit=="HEARTS" && bouton.value === "Coeur") {
			
				
				gagne4.style.display = 'block';	
			}
			
			else if (carte_compareAAAA.suit=="CLUBS" && bouton.value === "Trefle") {
			
				
				gagne4.style.display = 'block';	
			}
			
			else if (carte_compareAAAA.suit=="SPADES" && bouton.value === "Pique") {
			
				
				gagne4.style.display = 'block';	
			}
			
			else {
				
				perdu4.style.display = 'block';	
				
				}
		});	

}

function NextBBBB(){
		const question4 = document.querySelector('.question4');
		const tourAAAA = document.querySelector('.tourAAAA');
		const tourCCCC = document.querySelector('.tourCCCC');
		const tourBBBB = document.querySelector('.tourBBBB');
		const gagne4 = document.querySelector('.gagne4');
		const perdu4 = document.querySelector('.perdu4');
		const gagne5 = document.querySelector('.gagne5');
		const perdu5 = document.querySelector('.perdu5');
		const bouton =document.querySelector('.bouton');
		
		tourBBBB.style.display = 'none';
		tourAAAA.style.display = 'none';
		
		question4.style.display = 'none';
		
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=1')
		.then(response => response.json())

		.then(data => {console.log(data.cards[0]);

		const carte=data.cards[0].image;
		deckJ2222.src = carte;
		const carte_compareBBBB=data.cards[0];
		
		if (carte_compareBBBB.suit=="DIAMONDS" && bouton.value === "Carreaux") {
				if(compteurJoueur.value>="3"){
					tourCCCC.style.display = 'block';
					gagne4.style.display = 'block';
				}
				else {
					tourCCCC.style.display = 'none';
					gagne5.style.display = 'block';
				}
			}
			
			else if (carte_compareBBBB.suit=="HEARTS" && bouton.value === "Coeur") {
				if(compteurJoueur.value>="3"){
					tourCCCC.style.display = 'block';
					gagne4.style.display = 'block';
				}
				else {
					tourCCCC.style.display = 'none';
					gagne5.style.display = 'block';
				}	
			}
			
			else if (carte_compareBBBB.suit=="CLUBS" && bouton.value === "Trefle") {
			
				if(compteurJoueur.value>="3"){
					tourCCCC.style.display = 'block';
					gagne4.style.display = 'block';
				}
				else {
					tourCCCC.style.display = 'none';
					gagne5.style.display = 'block';
				}	
			}
			
			else if (carte_compareBBBB.suit=="SPADES" && bouton.value === "Pique") {
			
				if(compteurJoueur.value>="3"){
					tourCCCC.style.display = 'block';
					gagne4.style.display = 'block';
				}
				else {
					tourCCCC.style.display = 'none';
					gagne5.style.display = 'block';
				}	
			}
			
			else {
				if(compteurJoueur.value>="3"){
					tourCCCC.style.display = 'block';
					perdu4.style.display = 'block';
				}
				else {
					tourCCCC.style.display = 'none';
					perdu5.style.display = 'block';
				}	
				
				}
		});

}
function NextCCCC(){
		const question4 = document.querySelector('.question4');
		const tourAAAA = document.querySelector('.tourAAAA');
		const tourBBBB = document.querySelector('.tourBBBB');
		const tourCCCC = document.querySelector('.tourCCCC');
		const tourDDDD = document.querySelector('.tourDDDD');
		const gagne4 = document.querySelector('.gagne4');
		const perdu4 = document.querySelector('.perdu4');
		const gagne5 = document.querySelector('.gagne5');
		const perdu5 = document.querySelector('.perdu5');
		const bouton =document.querySelector('.bouton');
		
		tourCCCC.style.display = 'none';
		tourAAAA.style.display = 'none';
		tourBBBB.style.display = 'none';
		
		
		question4.style.display = 'none';
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=1')
		.then(response => response.json())

		.then(data => {console.log(data.cards[0]);

		const carte=data.cards[0].image	;
		deckJ3333.src = carte;
		
			const carte_compareCCCC=data.cards[0]	;
		
		if (carte_compareCCCC.suit=="DIAMONDS" && bouton.value === "Carreaux") {
				if(compteurJoueur.value>="3"){
					tourDDDD.style.display = 'block';
					gagne4.style.display = 'block';
				}
				else {
					tourDDDD.style.display = 'none';
					gagne5.style.display = 'block';
				}
			}
			
			else if (carte_compareCCCC.suit=="HEARTS" && bouton.value === "Coeur") {
				if(compteurJoueur.value>="3"){
					tourDDDD.style.display = 'block';
					gagne4.style.display = 'block';
				}
				else {
					tourDDDD.style.display = 'none';
					gagne5.style.display = 'block';
				}	
			}
			
			else if (carte_compareCCCC.suit=="CLUBS" && bouton.value === "Trefle") {
			
				if(compteurJoueur.value>="3"){
					tourDDDD.style.display = 'block';
					gagne4.style.display = 'block';
				}
				else {
					tourDDDD.style.display = 'none';
					gagne5.style.display = 'block';
				}	
			}
			
			else if (carte_compareCCCC.suit=="SPADES" && bouton.value === "Pique") {
			
				if(compteurJoueur.value>="3"){
					tourDDDD.style.display = 'block';
					gagne4.style.display = 'block';
				}
				else {
					tourDDDD.style.display = 'none';
					gagne5.style.display = 'block';
				}	
			}
			
			else {
				if(compteurJoueur.value>="3"){
					tourDDDD.style.display = 'block';
					perdu4.style.display = 'block';
				}
				else {
					tourDDDD.style.display = 'none';
					perdu5.style.display = 'block';
				}	
				
				}
		});
		

}
function NextDDDD(){
		const question4 = document.querySelector('.question4');
		const gagne5 = document.querySelector('.gagne5');
		const perdu5 = document.querySelector('.perdu5');
		const bouton =document.querySelector('.bouton');
		
		
		question4.style.display = 'none';	
		fetch('https://deckofcardsapi.com/api/deck/733roygw023n/draw/?count=1')
		.then(response => response.json())

		.then(data => {console.log(data.cards[0]);

		const carte=data.cards[0].image	;
		deckJ4444.src = carte;
		
		const carte_compareDDDD=data.cards[0]	;
		
		if (carte_compareDDDD.suit=="DIAMONDS" && bouton.value === "Carreaux") {
				
				gagne5.style.display = 'block';	
			}
			
			else if (carte_compareDDDD.suit=="HEARTS" && bouton.value === "Coeur") {
			
				
				gagne5.style.display = 'block';	
			}
			
			else if (carte_compareDDDD.suit=="CLUBS" && bouton.value === "Trefle") {
			
				
				gagne5.style.display = 'block';	
			}
			
			else if (carte_compareDDDD.suit=="SPADES" && bouton.value === "Pique") {
			
				
				gagne5.style.display = 'block';	
			}
			
			else {
				
				perdu5.style.display = 'block';	
				
				}
		});
		
}

function Augmente5(){
	const termine = document.querySelector('.termine');
	const gagne5 = document.querySelector('.gagne5');
	const perdu5 = document.querySelector('.perdu5');
	gagne5.style.display = 'none';
	perdu5.style.display = 'none';
	termine.style.display = 'block';
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