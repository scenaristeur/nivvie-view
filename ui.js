 function completeUi(){
	var paramDiv=document.getElementById('paramDiv');
	var x = document.createElement("SELECT");
    x.setAttribute("id", "mySelectPeriod");
    paramDiv.appendChild(x);

    var z = document.createElement("option");
    z.setAttribute("value", "2015");
    var t = document.createTextNode("2015");
    z.appendChild(t);
    document.getElementById("mySelectPeriod").appendChild(z);
	    var z = document.createElement("option");
    z.setAttribute("value", "2014");
    var t = document.createTextNode("2014");
    z.appendChild(t);
    document.getElementById("mySelectPeriod").appendChild(z);
	    var z = document.createElement("option");
    z.setAttribute("value", "2013");
    var t = document.createTextNode("2013");
    z.appendChild(t);
    document.getElementById("mySelectPeriod").appendChild(z);
	    var z = document.createElement("option");
    z.setAttribute("value", "2012");
    var t = document.createTextNode("2012");
    z.appendChild(t);
    document.getElementById("mySelectPeriod").appendChild(z);
	    var z = document.createElement("option");
    z.setAttribute("value", "2011");
    var t = document.createTextNode("2011");
    z.appendChild(t);
    document.getElementById("mySelectPeriod").appendChild(z);
	
	
	var x = document.createElement("SELECT");
    x.setAttribute("id", "mySelectTest");
    paramDiv.appendChild(x);

    var z = document.createElement("option");
    z.setAttribute("value", "");
    var t = document.createTextNode("Familles Test");
    z.appendChild(t);
    document.getElementById("mySelectTest").appendChild(z);
	    var z = document.createElement("option");
    z.setAttribute("value", "2");
	z.setAttribute("selected", "true");
    var t = document.createTextNode("couple 1.5SMIC, deux enfants");
    z.appendChild(t);
    document.getElementById("mySelectTest").appendChild(z);
	    var z = document.createElement("option");
    z.setAttribute("value", "1");
    var t = document.createTextNode("couple 4 enfants");
    z.appendChild(t);
    document.getElementById("mySelectTest").appendChild(z);
	
	
 }


function addSection(where) {
    var main = document.getElementById("section0");
    var cntr = (main.datacntr || 0) + 1;
    main.datacntr = cntr;
    
    var clone = main.cloneNode(true);
    clone.id = "section" + cntr;
    where.parentNode.insertBefore(clone, where);    
	
}

function simulation(){
var test=false;
var numtest="";
var mySelectTest=this.$.mySelectTest.value;
if (mySelectTest!=""){
	test=true;
	numtest=mySelectTest;
}else {
	test=false;
	}
occupAvant=document.getElementById('occupationAvant').value;
occupPere=document.getElementById('occupationPere').value;
occupMere=document.getElementById('occupationMere').value;

console.log(occupAvant+" "+occupPere+" "+occupMere);
	
period=document.getElementById('mySelectPeriod').value;
document.getElementById('result').innerHTML="Traitement des informations";
	var situation={};
	var main = document.getElementById("section0");
	var cntr = (main.datacntr || 0); 
	var nbEnfants=cntr+1;
	console.log(nbEnfants +" enfants");
	
	var pereName = document.getElementById("pereName").value;
	var pereSalaire = document.getElementById("pereSalaire").value;
	var pereNaissance = document.getElementById("pereNaissance").value;
	var mereName = document.getElementById("mereName").value;
	var mereSalaire = document.getElementById("mereSalaire").value;
	var mereNaissance = document.getElementById("mereNaissance").value;
	
	var loyerAvant = document.getElementById("loyerAvantInput").value;
	var loyerMere = document.getElementById("loyerMereInput").value;
	var loyerPere = document.getElementById("loyerPereInput").value;
	
	var sectionEnfants=document.getElementsByClassName("sectionEnfant");
	
	if (pereName==""){
			test=true;
	}
	if (numtest==1){
		console.log("test1");
		pereName='pereTest';
		pereSalaire='24000';
		pereNaissance='1977-05-14';
		mereName='mereTest';
		mereSalaire='24000';
		mereNaissance='1978-10-11';
		loyerAvant='8160';
		loyerMere='8160';
		loyerPere='6360';
	}else if (numtest==2){
		console.log("test2");
		pereName='pereTest';
		pereSalaire='23884.378';
		pereNaissance='1977-05-14';
		mereName='mereTest';
		mereSalaire='23884.378';
		mereNaissance='1978-10-11';
		loyerAvant='12614';
		loyerMere='8963';
		loyerPere='4977';
	
	}
	
		
	console.log(pereName+" "+pereSalaire+" "+pereNaissance+" "+mereName+" "+mereSalaire+" "+mereNaissance);
	console.log(sectionEnfants);
	
	var pere = new Individu(pereName,pereNaissance,pereSalaire);
	situation['pere'] = pere;
	var mere = new Individu(mereName,mereNaissance,mereSalaire);
	situation['mere'] = mere;
	
var enfants=[];
	
	var sectionEnfantslength = sectionEnfants.length;
	for (var i = 0; i < sectionEnfantslength; i++) {
		var sectionEnfant=sectionEnfants[i];
		var prenomEnfant=sectionEnfant.children[0].value;
		var dateNaissanceEnfant=sectionEnfant.children[1].value;
		console.log(prenomEnfant +" "+dateNaissanceEnfant);
		var enfant=new Individu(prenomEnfant,dateNaissanceEnfant,0);
		enfants.push(enfant);
	}
	
	if (test){
		enfants=[];
			if (numtest==1){
		var enfant=new Individu('Enfant1','2000-08-23',0);
		enfants.push(enfant);
				var enfant=new Individu('Enfant2','2004-07-02',0);
		enfants.push(enfant);
				var enfant=new Individu('Enfant3','2007-02-08',0);
		enfants.push(enfant);
				var enfant=new Individu('Enfant4','2011-01-27',0);
		enfants.push(enfant);
			}else
				if (numtest==2){
				var enfant=new Individu('Enfant1','2011-08-23',0);
		enfants.push(enfant);
				var enfant=new Individu('Enfant2','2011-07-02',0);
		enfants.push(enfant);
			}
	}
	situation['enfants'] = enfants;
	situation['loyerAvant']=loyerAvant;
	situation['loyerMere']=loyerMere;
	situation['loyerPere']=loyerPere;

	console.log(situation);
	var calcul=new Calcul(situation);
	calcul.execute();

	
}

var mode="calculate" ;// mode de connexion a l'API : simulate ou calculate
// var mode="simulate" 
var period="2015";
var variables=["revdisp","irpp","nivvie_net","uc","mini","pfam","aides_logement","csg","aides_logement","salaire_imposable","csg"]; //psoc
var proportionPA=[13.5,11.5,10,8.8,8,7.2];
var occupAvant;
var occupPere;
var occupMere;

 

function Scenario(test_case,period){
    this.test_case=test_case;
        this.period=period;
}

function Famille(parents,enfants){
    this.parents=parents;
    this.enfants=enfants;
}

function Foyer_fiscal(declarants,personnes_a_charge){
    this.declarants=declarants;
    this.personnes_a_charge=personnes_a_charge;
}

function Individu(id, date_naissance,salaire_de_base) {
    this.id = id;
     this.date_naissance = date_naissance;
     this.salaire_de_base=salaire_de_base;
}


function Menage(personne_de_reference){
    this.personne_de_reference=personne_de_reference;
}


function Test_case(familles,foyers_fiscaux,individus,menages){
    this.familles=familles;
    this.foyers_fiscaux=foyers_fiscaux;
    this.individus=individus;
    this.menages=menages;
}


function DataToSend(scenarios){
    this.scenarios=scenarios;
}
/*
function DataToSendToCalculate(scenarios){
    this.scenarios=scenarios;
	 this.variables=["revdisp","irpp","nivvie_net","uc","af"];
}*/

function Calcul(situation){

	this.situation=situation;
	this.pere=situation['pere'];
	this.mere=situation['mere'];
	this.enfants=situation['enfants'];
	this.loyerAvant=situation['loyerAvant'];
	this.loyerMere=situation['loyerMere'];
	this.loyerPere=situation['loyerPere'];
	console.log(this.pere);
	console.log(this.mere);
	console.log(this.enfants);
	console.log( "loyers "+this.loyerAvant+" "+this.loyerMere+" "+this.loyerPere);
	
	//COMMUN
	var individus=new Array();
		individus.push(this.pere);
		individus.push(this.mere);
			for (var i = 0; i < this.enfants.length; i++) {
				individus.push(this.enfants[i]);
			}
			
	var familles=new Array();
	var parentsArray=new Array();
	var enfantsArray=new Array();
		parentsArray.push(this.pere.id);
		parentsArray.push(this.mere.id);
			for (var i = 0; i < this.enfants.length; i++) {
				enfantsArray.push(this.enfants[i].id);
			}
	var famille0=new Famille(parentsArray,enfantsArray);
		familles.push(famille0);
		//FF
	var foyers_fiscaux=new Array();
	var declarantsArray=new Array();
	var PACArray=new Array();
		declarantsArray.push(this.pere.id);
		declarantsArray.push(this.mere.id);
			for (var i = 0; i < this.enfants.length; i++) {
				PACArray.push(this.enfants[i].id);
			}
	var foyer_fiscal0=new Foyer_fiscal(declarantsArray,PACArray);
		foyers_fiscaux.push(foyer_fiscal0);
	//MENAGES
	var menages=new Array();
	var enfants0=new Array();
		for (var i = 0; i < this.enfants.length; i++) {
			enfants0.push(this.enfants[i].id);
		}
	var menage0=new Menage(this.pere.id);
		menage0.conjoint=this.mere.id;
		menage0.loyer=this.loyerAvant;
		menage0.enfants=enfants0;
		menage0.statut_occupation_logement=occupAvant;


	menages.push(menage0);

	
	
	//MERE
	var individusM=new Array();
		individusM.push(this.mere);
			for (var i = 0; i < this.enfants.length; i++) {
				individusM.push(this.enfants[i]);
			}
	var famillesM=new Array();
	var parentsArrayM=new Array();
	var enfantsArrayM=new Array();
		parentsArrayM.push(this.mere.id);
			for (var i = 0; i < this.enfants.length; i++) {
				enfantsArrayM.push(this.enfants[i].id);
			}
	var famille0M=new Famille(parentsArrayM,enfantsArrayM);
		famillesM.push(famille0M);
		//FF
	var foyers_fiscauxM=new Array();
	var declarantsArrayM=new Array();
	var PACArrayM=new Array();
		declarantsArrayM.push(this.mere.id);
			for (var i = 0; i < this.enfants.length; i++) {
				PACArrayM.push(this.enfants[i].id);
			}
	var foyer_fiscal0M=new Foyer_fiscal(declarantsArrayM,PACArrayM);
		foyers_fiscauxM.push(foyer_fiscal0M);
	//MENAGES
	var menagesM=new Array();
	var enfants0M=new Array();
		for (var i = 0; i < this.enfants.length; i++) {
			enfants0M.push(this.enfants[i].id);
		}
	var menage0M=new Menage(this.mere.id);
		menage0M.enfants=enfants0M;
		menage0M.loyer=this.loyerMere;
		menage0M.statut_occupation_logement=occupMere;

	menagesM.push(menage0M);
	
	
	
	//PERE
	var individusP=new Array();
		individusP.push(this.pere);
	var famillesP=new Array();
	var parentsArrayP=new Array();
	var enfantsArrayP=new Array();	
		parentsArrayP.push(this.pere.id);
	var famille0P=new Famille(parentsArrayP,enfantsArrayP);
		famillesP.push(famille0P);
//FF
	var foyers_fiscauxP=new Array();
	var declarantsArrayP=new Array();
	var PACArrayP=new Array();
		declarantsArrayP.push(this.pere.id);
	var foyer_fiscal0P=new Foyer_fiscal(declarantsArrayP,PACArrayP);
		foyers_fiscauxP.push(foyer_fiscal0P);
	//MENAGES
	var menagesP=new Array();
	var enfants0P=new Array();
	var menage0P=new Menage(this.pere.id);
	menage0P.enfants=enfants0P;
	menage0P.loyer=this.loyerPere;
	menage0P.statut_occupation_logement=occupPere;
	menagesP.push(menage0P);
	
	
		var test_case0=new Test_case(familles,foyers_fiscaux,individus,menages);
console.log(test_case0);
console.log(JSON.stringify(test_case0));


var test_case1=new Test_case(famillesM,foyers_fiscauxM,individusM,menagesM);
console.log(test_case1);
console.log(JSON.stringify(test_case1));

var test_case2=new Test_case(famillesP,foyers_fiscauxP,individusP,menagesP);
console.log(test_case2);
console.log(JSON.stringify(test_case2));
	
	var scenarios=new Array();
	var scenario0=new Scenario(test_case0,period);
	scenarios.push(scenario0);
	var scenario1=new Scenario(test_case1,period);
	scenarios.push(scenario1);
	var scenario2=new Scenario(test_case2,period);
	scenarios.push(scenario2);
	
	//EXECUTION
	this.execute = function() {
  //  if (this.peutParler) {
      console.log("execution " + this.situation );
	  var dataTemp=dataTemp=new DataToSend(scenarios);
	  var url = "https://api.openfisca.fr/api/1/simulate";
	  if (mode=="calculate"){
		dataTemp.variables=variables;
		url = "https://api.openfisca.fr/api/1/calculate";
	  }
	  
dataSend= JSON.stringify(dataTemp);
//console.log(data);
console.log(JSON.stringify(dataSend));

var http = new XMLHttpRequest();

http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/json");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
        var myArr = JSON.parse(http.responseText); 
		/*myArr.loyerAvant=this.loyerAvant;
		myArr.loyerMere=this.loyerMere;
		myArr.loyerPere=this.loyerPere;*/
			document.getElementById('result').innerHTML="";
        console.log(myArr);
        console.log("requete OK");
			  if (mode=="calculate"){
			  afficheCalculate(myArr);}
			  else{
				afficheSimulate(myArr);  
			  }
      //  resAf=myArr.value[0].af['2015-01'];
       // console.log(resAf);
    }else {
		console.log(http.status);
		console.log(http);
		document.getElementById('result').innerHTML="ERREUR : "+http.responseText;
	}
};
http.send(dataSend);

reinitialisation();
   // }
  };
}




function reinitialisation(){
	dataSend="";
	individus=new Array();
	individusM=new Array();
	individusP=new Array();
}

function afficheCalculate(result){
	console.log(result);
	/*this.loyerAvant=result['loyerAvant'];
	this.loyerPere=result['loyerPere'];
	this.loyerMere=result['loyerMere'];
	console.log("LOYYYER : "+loyerAvant);*/
	for (var key in result) {
		if (result.hasOwnProperty(key)) {
			var valeur=result[key];
			console.log(key+" :");
			console.log(valeur);
			if ((key=="value")){
				var coeffTab=[1,1.4,0.4];
				var compteurCoeff=0;
				var nbPac=0;
				var paBareme=0;
									
				var divResult=document.getElementById("result");
				var  tbl =document.createElement("TABLE");
				var tblBody = document.createElement("tbody");
				tbl.appendChild(tblBody);
				divResult.appendChild(tbl);
				tbl.setAttribute("border", "2");
				
				var row1 = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode(""); 
				cell.appendChild(cellText);
				row1.appendChild(cell);
				var cell = document.createElement("td");    
				var cellText = document.createTextNode( "Avant séparation"); 
				cell.appendChild(cellText);
				row1.appendChild(cell);
				var cell = document.createElement("td");    
				var cellText = document.createTextNode( "Mere avec enfants"); 
				cell.appendChild(cellText);
				row1.appendChild(cell);
				var cell = document.createElement("td");    
				var cellText = document.createTextNode( "Pere sans enfants"); 
				cell.appendChild(cellText);
				row1.appendChild(cell);
				tblBody.appendChild(row1);
						 
				var rowUCADULTES = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("UC ADULTES (1er ad =1, ad suivant=0.5) "); 
				cell.appendChild(cellText);
				rowUCADULTES.appendChild(cell);	
				tblBody.appendChild(rowUCADULTES);
				
				var rowUCENFANTS = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("UC ENFANTS (0.3/enfant) (traiter + de 14)  coeff1.4 & 0.4"); 
				cell.appendChild(cellText);
				rowUCENFANTS.appendChild(cell);	
				tblBody.appendChild(rowUCENFANTS);
				
				var rowUCTotal = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("UC Total"); 
				cell.appendChild(cellText);
				rowUCTotal.appendChild(cell);	
				tblBody.appendChild(rowUCTotal);
				
				var rowSalaireImposable = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Salaires imposables (salaire_imposable)"); 
				cell.appendChild(cellText);
				rowSalaireImposable.appendChild(cell);	
				tblBody.appendChild(rowSalaireImposable);
				
				var rowPfam = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Prestations familiales (pfam)"); 
				cell.appendChild(cellText);
				rowPfam.appendChild(cell);	
				tblBody.appendChild(rowPfam);
				
				var rowMinSoc = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Minima sociaux (mini)"); 
				cell.appendChild(cellText);
				rowMinSoc.appendChild(cell);	
				tblBody.appendChild(rowMinSoc);
				
				var rowAlog = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Allocations Logement (aides_logement) "); 
				cell.appendChild(cellText);
				rowAlog.appendChild(cell);	
				tblBody.appendChild(rowAlog);
				
				var rowIRPPE = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("IR & PPE (irpp) "); 
				cell.appendChild(cellText);
				rowIRPPE.appendChild(cell);	
				tblBody.appendChild(rowIRPPE);
				
				var rowCSGCRDS = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("CSG & CRDS (?)"); 
				cell.appendChild(cellText);
				rowCSGCRDS.appendChild(cell);	
				tblBody.appendChild(rowCSGCRDS);
				
				var rowPaCalculee = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Pension Alimentaire calculée (Barème ministère de la justice)"); 
				cell.appendChild(cellText);
				rowPaCalculee.appendChild(cell);	
				tblBody.appendChild(rowPaCalculee);

				var rowRevenuDisponible = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Revenu Disponible (calcul / donnees OpenFisca : revdisp )"); 
				cell.appendChild(cellText);
				rowRevenuDisponible.appendChild(cell);	
				tblBody.appendChild(rowRevenuDisponible);

				var rowCoutEnfants = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Coût estimé des enfants (calcul / donnees OpenFisca )"); 
				cell.appendChild(cellText);
				rowCoutEnfants.appendChild(cell);	
				tblBody.appendChild(rowCoutEnfants);
				
				var rowPECPublique = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Prise en charge publique du coût des enfants (?) "); 
				cell.appendChild(cellText);
				rowPECPublique.appendChild(cell);	
				tblBody.appendChild(rowPECPublique);

				var rowCoutPriveEnfants = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Cout Privé des enfants (?) "); 
				cell.appendChild(cellText);
				rowCoutPriveEnfants.appendChild(cell);	
				tblBody.appendChild(rowCoutPriveEnfants);

				var rowNiveauDevie = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Niveau de vie (calcul / nivvie_net) "); 
				cell.appendChild(cellText);
				rowNiveauDevie.appendChild(cell);	
				tblBody.appendChild(rowNiveauDevie);
				
				var rowNdvEvo = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Evolution du niveau de vie"); 
				cell.appendChild(cellText);
				rowNdvEvo.appendChild(cell);	
				tblBody.appendChild(rowNdvEvo);
				
				var rowCoutNetEnfants = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Cout net des enfants en % du niveau de vie avant séparation"); 
				cell.appendChild(cellText);
				rowCoutNetEnfants.appendChild(cell);	
				tblBody.appendChild(rowCoutNetEnfants);
				
				var rowLoyerAnnuel = document.createElement("tr");
				var cell = document.createElement("td");    
				var cellText = document.createTextNode("Loyer annuel estimé"); 
				cell.appendChild(cellText);
				rowLoyerAnnuel.appendChild(cell);	
				tblBody.appendChild(rowLoyerAnnuel);
				
				
				
				//AJOUT DES RESULTATS
				for (var i = 0; i < valeur.length; i++) {
					var resultTestcase=valeur[i];
					//UC ADULTES
					var UCA=0;
					var nbDec=resultTestcase.foyers_fiscaux[0].declarants.length;
					if (nbDec==1){
						UCA=1;
					}else{
						UCA=1+(nbDec-1)*.5;
					}
					var cell = document.createElement("td");    
					var cellText = document.createTextNode( UCA); 
					cell.appendChild(cellText);			
					rowUCADULTES.appendChild(cell);
					
					//UC ENFANTS
					var UCE=0;	
					coeff=coeffTab[compteurCoeff];

					//TODO verifier l'age : au dessus de 14 ans 0.5UC
					var pac=resultTestcase.foyers_fiscaux[0].personnes_a_charge;
					if (typeof pac != 'undefined'){
						if(pac.length>nbPac){
							nbPac=pac.length; // si aucune pers a charge, on recupere le nbre avant séparation
						}
					}
					UCE=nbPac*0.3*coeff;					
					var cell = document.createElement("td");    
					var cellText = document.createTextNode( UCE); 
					cell.appendChild(cellText);			
					rowUCENFANTS.appendChild(cell);
					
					//UC Total
					var UCTot=(UCA+UCE).toFixed(2);
					var cell = document.createElement("td");    
					var cellText = document.createTextNode( UCTot); 
					cell.appendChild(cellText);			
					rowUCTotal.appendChild(cell);
					
					//SALAIRES IMPOSABLES
					var salaireImposableTot=0;
					var individus=resultTestcase.individus;
					//console.log(individus);
					for (var j = 0; j < individus.length; j++) {
						var individu=individus[j];
					var sal=individu.salaire_imposable[period];
						console.log(individu.id+" "+sal);
						salaireImposableTot+=sal;
					}
					salaireImposableTot=salaireImposableTot.toFixed(2)
					var cell = document.createElement("td");    
					var cellText = document.createTextNode( salaireImposableTot); 
					cell.appendChild(cellText);			
					rowSalaireImposable.appendChild(cell);
					
					//Prestations Familiales
					var pfam=resultTestcase.familles[0].pfam[period].toFixed(2);
					
					var cell = document.createElement("td");    
					var cellText = document.createTextNode( pfam); 
					cell.appendChild(cellText);			
					rowPfam.appendChild(cell);
					
					//MINIMA SOCIAUX
					var mini=resultTestcase.familles[0].mini[period].toFixed(2);
					//CALCUL A FAIRE
					var cell = document.createElement("td");    
					var cellText = document.createTextNode( "CALCUL A FAIRE : "+mini); 
					cell.appendChild(cellText);			
					rowMinSoc.appendChild(cell);
					
					//ALLOCATIONS Logement
					var alog=resultTestcase.familles[0].aides_logement[period].toFixed(2);
					var cell = document.createElement("td");    
					var cellText = document.createTextNode( alog); 
					cell.appendChild(cellText);	
					rowAlog.appendChild(cell);
					
					
					//IR
					
					var irpp=resultTestcase.foyers_fiscaux[0].irpp[period].toFixed(2);
					console.log(irpp);
					var cell = document.createElement("td");    
					var cellText = document.createTextNode(irpp); 
					cell.appendChild(cellText);			
					rowIRPPE.appendChild(cell);
					
					// CSG
					//var irpp=resultTestcase.foyers_fiscaux[0].irpp[period].toFixed(2);
					//console.log(irpp);
					var csgTot=0;
					var individus=resultTestcase.individus;
					//console.log(individus);
					for (var j = 0; j < individus.length; j++) {
						var individu=individus[j];
											console.log(individu.csg);
						var csgVar=individu.csg[period];
						console.log(individu.id+" "+csgVar);
						csgTot+=csgVar;
					}
					csgTot=csgTot.toFixed(2);
					var cell = document.createElement("td");    
					var cellText = document.createTextNode(csgTot); 
					cell.appendChild(cellText);			
					rowCSGCRDS.appendChild(cell);
					
					//PENSION ALIMENTAIRE CALCULEE

					if(compteurCoeff==0){
						var salaireAnnuel=resultTestcase.individus[0].salaire_imposable[period];
						var salaireMensuel=salaireAnnuel/12;
						var salaireMoinsMiniVital=salaireMensuel-514;
						console.log(salaireMoinsMiniVital);
						var nbEnfants=resultTestcase.familles[0].enfants.length;
						var taux=proportionPA[nbEnfants-1];
						var paParEnfant=salaireMoinsMiniVital*taux/100;
						paBareme=paParEnfant*nbEnfants*12;
						console.log(nbEnfants+" "+taux);		
						
						var cell = document.createElement("td");    
						var cellText = document.createTextNode(0); 
						cell.appendChild(cellText);			
						rowPaCalculee.appendChild(cell);
					}else if(compteurCoeff==1){ //pension perçue par la mère
						var cell = document.createElement("td");    
						var cellText = document.createTextNode(paBareme); 
						cell.appendChild(cellText);			
						rowPaCalculee.appendChild(cell);
					}else if(compteurCoeff==2){ //pension versée par le père
						paBareme*=-1
						var cell = document.createElement("td");   					
						var cellText = document.createTextNode(paBareme); 
						cell.appendChild(cellText);			
						rowPaCalculee.appendChild(cell);
					}
					
					//REVENU Disponible
					var rdispoCalcul=0;
					if(compteurCoeff==0){
						rdispoCalcul=(parseFloat(salaireImposableTot)+parseFloat(pfam)+parseFloat(mini)+parseFloat(alog)+parseFloat(irpp)+parseFloat(csgTot)).toFixed(2);
					}else{
						rdispoCalcul=(parseFloat(salaireImposableTot)+parseFloat(pfam)+parseFloat(mini)+parseFloat(alog)+parseFloat(irpp)+parseFloat(csgTot)+parseFloat(paBareme)).toFixed(2);
					}
					var cell = document.createElement("td"); 
					var revdisp=resultTestcase.menages[0].revdisp[period].toFixed(2);
					var cellText = document.createTextNode(rdispoCalcul+" ("+revdisp+")"); 
					cell.appendChild(cellText);			
					rowRevenuDisponible.appendChild(cell);
					
					//COUT ENTRETIEN ESTIME
					var coutEstimeCalc=(UCE/UCTot*rdispoCalcul).toFixed(2);
					var coutEst=(UCE/UCTot*revdisp).toFixed(2);
					var cell = document.createElement("td"); 
					var cellText = document.createTextNode(coutEstimeCalc+" ("+coutEst+")"); 
					cell.appendChild(cellText);	
					
					rowCoutEnfants.appendChild(cell);
					
					//NIVEAU DE VIE
					var nivVieCalcul=(rdispoCalcul/UCTot).toFixed(2);
					var cell = document.createElement("td"); 
					
					var nivvie_net=resultTestcase.menages[0].nivvie_net[period].toFixed(2);
					var cellText = document.createTextNode(nivVieCalcul+" ("+nivvie_net+")"); 
					cell.appendChild(cellText);			
					rowNiveauDevie.appendChild(cell);
					
					//LOYER ANNUEL ESTIME
					var loyerAnnuel=0;
					if(compteurCoeff==0){
						loyerAnnuel=this.loyerAvant;
					}else if(compteurCoeff==1){
						loyerAnnuel=this.loyerMere;
					}else if(compteurCoeff==2){
						loyerAnnuel=this.loyerPere;
					}
					console.log(loyerAnnuel);
					var loyerAnnuel=resultTestcase.menages[0].loyer;
					var cell = document.createElement("td"); 
					var cellText = document.createTextNode(loyerAnnuel); 
					cell.appendChild(cellText);			
					rowLoyerAnnuel.appendChild(cell);
					
					
					
					
				compteurCoeff++;
				}
				
				
			}
		}
	}

}

function afficheCalculate1(result){
	var divResult=document.getElementById("result");
	    var resultFormate='';
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
		  var valeur=result[key];
		  resultFormate+=key + " -> " + valeur+"</br>";
		  console.log(key+" :");
		  console.log(valeur);
		  if ((key=="value")){
			  var  tbl =document.createElement("TABLE");
			// tableau.setAttribute("id","resultat");
			  var tblBody = document.createElement("tbody");
			 // resultFormate+=tableau;
			 var row1 = document.createElement("tr");
			 	var cell = document.createElement("td");    
                var cellText = document.createTextNode( "Avant séparation"); 
                cell.appendChild(cellText);
                row1.appendChild(cell);
				var cell = document.createElement("td");    
                var cellText = document.createTextNode( "Mere avec enfants"); 
                cell.appendChild(cellText);
                row1.appendChild(cell);
				var cell = document.createElement("td");    
                var cellText = document.createTextNode( "Pere sans enfants"); 
                cell.appendChild(cellText);
                row1.appendChild(cell);
			 tblBody.appendChild(row1);
			 
			 var row = document.createElement("tr");
			  var rowIRPP = document.createElement("tr");
			  var rowNivVie_net = document.createElement("tr");
			   var rowUc = document.createElement("tr");
			    var rowPsoc = document.createElement("tr");
			  	for (var i = 0; i < valeur.length; i++) {
					var cell = document.createElement("td");  
					var resultTestcase=valeur[i];
					//var menage=resultTestcase.menages;
					
					var revdisp=resultTestcase.menages[0].revdisp[period].toFixed(2);
                    var cellText = document.createTextNode( "revenuDisp : "+revdisp); 
					cell.appendChild(cellText);
					row.appendChild(cell);

				  var irpp=resultTestcase.foyers_fiscaux[0].irpp[period].toFixed(2);
				  console.log(irpp);
				  var cell = document.createElement("td");    
                  var cellText = document.createTextNode( "IRPP : "+irpp); 
                cell.appendChild(cellText);			
                rowIRPP.appendChild(cell);
				
					var nivvie_net=resultTestcase.menages[0].nivvie_net[period].toFixed(2);
					var cell = document.createElement("td"); 
                    var cellText = document.createTextNode( "Niveau de vie Net : "+nivvie_net); 
					cell.appendChild(cellText);
					rowNivVie_net.appendChild(cell);
					
					var uc=resultTestcase.menages[0].uc[period].toFixed(2);
					var cell = document.createElement("td"); 
                    var cellText = document.createTextNode( "Unité de consommation : "+uc); 
					cell.appendChild(cellText);
					rowUc.appendChild(cell);
				
				var psoc=resultTestcase.familles[0].psoc[period].toFixed(2);
					var cell = document.createElement("td"); 
                    var cellText = document.createTextNode( "Total Prestations Sociales : "+psoc); 
					cell.appendChild(cellText);
					rowPsoc.appendChild(cell);
					
				
			//  resultFormate+= "revenuDisp : "+revdisp+"</br>";
			  console.log(revdisp+" "+irpp);
				}
				
				tblBody.appendChild(rowUc);
				tblBody.appendChild(rowIRPP);
				tblBody.appendChild(row);
				tblBody.appendChild(rowNivVie_net);
				tblBody.appendChild(rowPsoc);
				
				 tbl.appendChild(tblBody);
        // put <table> in the <body>
        divResult.appendChild(tbl);
		 tbl.setAttribute("border", "2");
		  }
	  }
	}
	
//divResult.innerHTML=JSON.stringify(resultFormate);
}




function afficheSimulate(result){
    var resultFormate='';
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        if ((key=="params") || (key=="value")){
            resultFormate+=key + " -> " + result[key]+"</br>";
            var jsonObj=result[key];
                for (var keyObj in jsonObj) {
                var values=jsonObj[keyObj];
                    resultFormate+="-"+keyObj + " -> " + values+"</br>";

                    if (keyObj=="children"){
                        for (var tropDeCles in values){
                            var child=values[tropDeCles];
                                resultFormate+=tropDeCles + " ~~> " + child+"</br>";
                                var children=child.children;
                                resultFormate+=".............-> " + children+"</br>";
                                for (var param in children){
                                        resultFormate+="**************> " + children[param]+"</br>";
                                        var last=children[param];
                                            for (var dernier in last){
                                                    resultFormate+="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~> " + last[dernier]+"</br>";
                                            }
                                }

                        }
                    }
                }

        }else{
            resultFormate+=key + " -> " + result[key]+"</br>";
        }   
      }
}
console.log(resultFormate);

var divResult=document.getElementById("result");
divResult.innerHTML=JSON.stringify(resultFormate);
};

error=function(result){
console.log(result);
};



