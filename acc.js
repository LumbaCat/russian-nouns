class Mot {
  constructor(fr, ru) {
  	this.fr = fr;
	this.ru = ru;
	
  }
}

var sections = new Array(15);
for (var i = 0; i < 15; i++)
{
	sections[i] = new Array();
}


function construireListes(){
	sections[0].push(new Mot("un accord","соглашение"));
	sections[0].push(new Mot("une affaire","сделка"));
	sections[0].push(new Mot("un agent","агент"));
	sections[0].push(new Mot("une aide","помощь"));
	sections[0].push(new Mot("un amour","любовь"));
	sections[0].push(new Mot("une année","год"));
	sections[0].push(new Mot("un appel","вызов"));
	sections[0].push(new Mot("un arbre","дерево"));
	sections[0].push(new Mot("un argent","деньги"));
	sections[0].push(new Mot("une arme","оружие"));
	sections[0].push(new Mot("une armée","армия"));
	sections[0].push(new Mot("une attention","внимание"));
	sections[0].push(new Mot("un avenir","будущее"));
	sections[0].push(new Mot("un avion","самолет"));
	sections[0].push(new Mot("un avis","обзор"));
	sections[0].push(new Mot("une balle","мяч"));
	sections[0].push(new Mot("un bateau","лодка"));
	sections[0].push(new Mot("un bébé","ребенок"));
	sections[0].push(new Mot("un besoin","необходимость"));
	sections[0].push(new Mot("un bois","дерево"));
	sections[1].push(new Mot("une boîte","коробка"));
	sections[1].push(new Mot("un bonheur","счастье"));
	sections[1].push(new Mot("un bonjour","привет"));
	sections[1].push(new Mot("un bord","край"));
	sections[1].push(new Mot("une bouche","рот"));
	sections[1].push(new Mot("un boulot","работа"));
	sections[1].push(new Mot("un bout","побережье"));
	sections[1].push(new Mot("un bras","рука"));
	sections[1].push(new Mot("un bruit","шум"));
	sections[1].push(new Mot("un bureau","офис"));
	sections[1].push(new Mot("un café","кофе"));
	sections[1].push(new Mot("un camp","лагерь"));
	sections[1].push(new Mot("un capitaine","капитан"));
	sections[1].push(new Mot("une carte","карта"));
	sections[1].push(new Mot("une cause","причина"));
	sections[1].push(new Mot("une chambre","комната"));
	sections[1].push(new Mot("une chance","шанс"));
	sections[1].push(new Mot("un chat","кот"));
	sections[1].push(new Mot("un chef","лидер"));
	sections[1].push(new Mot("un chemin","путь"));
	sections[2].push(new Mot("un chéri","заветная"));
	sections[2].push(new Mot("un cheval","лошадь"));
	sections[2].push(new Mot("un cheveu","волосы"));
	sections[2].push(new Mot("un chien","собака"));
	sections[2].push(new Mot("un choix","выбор"));
	sections[2].push(new Mot("une chose","что-то"));
	sections[2].push(new Mot("un ciel","небо"));
	sections[2].push(new Mot("une classe","класс"));
	sections[2].push(new Mot("un client","клиент"));
	sections[2].push(new Mot("un cœur","сердце"));
	sections[2].push(new Mot("un coin","угол"));
	sections[2].push(new Mot("un colonel","полковник"));
	sections[2].push(new Mot("un compte","счет"));
	sections[2].push(new Mot("une confiance","доверие"));
	sections[2].push(new Mot("un copain","приятель"));
	sections[2].push(new Mot("un corps","тело"));
	sections[2].push(new Mot("un côté","сторона"));
	sections[2].push(new Mot("une couleur","цвет"));
	sections[2].push(new Mot("un coup","удар"));
	sections[2].push(new Mot("une cour","суд"));
	sections[3].push(new Mot("un courant","ток"));
	sections[3].push(new Mot("un cours","курс"));
	sections[3].push(new Mot("une cuisine","кухня"));
	sections[3].push(new Mot("une dame","дама"));
	sections[3].push(new Mot("un début","начало"));
	sections[3].push(new Mot("une dent","зуб"));
	sections[3].push(new Mot("un départ","начало"));
	sections[3].push(new Mot("un dieu","бог"));
	sections[3].push(new Mot("un docteur","врач"));
	sections[3].push(new Mot("un doigt","палец"));
	sections[3].push(new Mot("un dollar","доллар"));
	sections[3].push(new Mot("un doute","сомнения"));
	sections[3].push(new Mot("un droit","право"));
	sections[3].push(new Mot("une droite","право"));
	sections[3].push(new Mot("une école","школа"));
	sections[3].push(new Mot("un effet","эффект"));
	sections[3].push(new Mot("une église","церковь"));
	sections[3].push(new Mot("un endroit","место"));
	sections[3].push(new Mot("un enfant","ребенка"));
	sections[3].push(new Mot("un ennemi","враг"));
	sections[4].push(new Mot("une envie","желание"));
	sections[4].push(new Mot("une épaule","плечо"));
	sections[4].push(new Mot("une époque","время"));
	sections[4].push(new Mot("une équipe","команда"));
	sections[4].push(new Mot("une erreur","ошибка"));
	sections[4].push(new Mot("un escalier","лестница"));
	sections[4].push(new Mot("une espèce","вид"));
	sections[4].push(new Mot("un esprit","дух"));
	sections[4].push(new Mot("un état","состояние"));
	sections[4].push(new Mot("un être","существо"));
	sections[4].push(new Mot("un exemple","пример"));
	sections[4].push(new Mot("une face","лицо"));
	sections[4].push(new Mot("une façon","способ"));
	sections[4].push(new Mot("une faim","голод"));
	sections[4].push(new Mot("un fait","факт"));
	sections[4].push(new Mot("une famille","семья"));
	sections[4].push(new Mot("une faute","неисправность"));
	sections[4].push(new Mot("une femme","женщина"));
	sections[4].push(new Mot("une fenêtre","окно"));
	sections[4].push(new Mot("une fête","праздник"));
	sections[5].push(new Mot("une fille","дочь"));
	sections[5].push(new Mot("un film","фильм"));
	sections[5].push(new Mot("une fleur","цветок"));
	sections[5].push(new Mot("un flic","полицейский"));
	sections[5].push(new Mot("une fois","раз"));
	sections[5].push(new Mot("un fond","фон"));
	sections[5].push(new Mot("une force","сила"));
	sections[5].push(new Mot("une forme","форма"));
	sections[5].push(new Mot("un français","французский"));
	sections[5].push(new Mot("un frère","брат"));
	sections[5].push(new Mot("un front","передний"));
	sections[5].push(new Mot("un garçon","мальчик"));
	sections[5].push(new Mot("une garde","охранник"));
	sections[5].push(new Mot("un gars","парень"));
	sections[5].push(new Mot("une gauche","левый"));
	sections[5].push(new Mot("un général","общий"));
	sections[5].push(new Mot("un genre","своего рода"));
	sections[5].push(new Mot("un geste","жест"));
	sections[5].push(new Mot("un gosse","ребенок"));
	sections[5].push(new Mot("un goût","вкус"));
	sections[6].push(new Mot("un gouvernement","правительство"));
	sections[6].push(new Mot("un grand","большой"));
	sections[6].push(new Mot("un groupe","группа"));
	sections[6].push(new Mot("une guerre","война"));
	sections[6].push(new Mot("une gueule","рот"));
	sections[6].push(new Mot("une habitude","привычка"));
	sections[6].push(new Mot("un haut","высокая"));
	sections[6].push(new Mot("une heure","час"));
	sections[6].push(new Mot("une histoire","история"));
	sections[6].push(new Mot("un homme","человек"));
	sections[6].push(new Mot("un honneur","честь"));
	sections[6].push(new Mot("un hôtel","отель"));
	sections[6].push(new Mot("une idée","идея"));
	sections[6].push(new Mot("une image","фотография"));
	sections[6].push(new Mot("une impression","впечатление"));
	sections[6].push(new Mot("un instant","мгновенным"));
	sections[6].push(new Mot("un intérêt","интерес"));
	sections[6].push(new Mot("un intérieur","интерьер"));
	sections[6].push(new Mot("une jambe","нога"));
	sections[6].push(new Mot("un jardin","сад"));
	sections[7].push(new Mot("une joie","радость"));
	sections[7].push(new Mot("un jour","однажды"));
	sections[7].push(new Mot("un journal","газета"));
	sections[7].push(new Mot("une journée","день"));
	sections[7].push(new Mot("une langue","язык"));
	sections[7].push(new Mot("une lettre","письмо"));
	sections[7].push(new Mot("une lèvre","губы"));
	sections[7].push(new Mot("un lieu","место"));
	sections[7].push(new Mot("une ligne","линия"));
	sections[7].push(new Mot("un livre","книга"));
	sections[7].push(new Mot("un long","длинный"));
	sections[7].push(new Mot("une lumière","свет"));
	sections[7].push(new Mot("une madame","дама"));
	sections[7].push(new Mot("une main","рука"));
	sections[7].push(new Mot("une maison","дом"));
	sections[7].push(new Mot("un maître","мастер"));
	sections[7].push(new Mot("une maman","мама"));
	sections[7].push(new Mot("une manière","способ"));
	sections[7].push(new Mot("une marche","прогулка"));
	sections[7].push(new Mot("un mari","муж"));
	sections[8].push(new Mot("un mariage","свадьба"));
	sections[8].push(new Mot("un matin","утром"));
	sections[8].push(new Mot("un médecin","врач"));
	sections[8].push(new Mot("un merci","благодарственное"));
	sections[8].push(new Mot("une merde","дерьмо"));
	sections[8].push(new Mot("une mère","мать"));
	sections[8].push(new Mot("un mètre","метр"));
	sections[8].push(new Mot("un milieu","средний"));
	sections[8].push(new Mot("un million","миллион"));
	sections[8].push(new Mot("une minute","минута"));
	sections[8].push(new Mot("un mois","месяц"));
	sections[8].push(new Mot("un moment","момент"));
	sections[8].push(new Mot("un monde","мир"));
	sections[8].push(new Mot("un monsieur","джентльмен"));
	sections[8].push(new Mot("un mort","мертвый"));
	sections[8].push(new Mot("un mouvement","движение"));
	sections[8].push(new Mot("un moyen","способ"));
	sections[8].push(new Mot("une musique","музыка"));
	sections[8].push(new Mot("un noir","черный"));
	sections[8].push(new Mot("un nouveau","новый"));
	sections[9].push(new Mot("une nuit","ночь"));
	sections[9].push(new Mot("un numéro","номер"));
	sections[9].push(new Mot("une odeur","запах"));
	sections[9].push(new Mot("un oeil","посмотреть"));
	sections[9].push(new Mot("un oiseau","птица"));
	sections[9].push(new Mot("une ombre","тень"));
	sections[9].push(new Mot("un oncle","дядя"));
	sections[9].push(new Mot("un ordre","заказ"));
	sections[9].push(new Mot("une oreille","ухо"));
	sections[9].push(new Mot("une paix","мир"));
	sections[9].push(new Mot("un papa","папа"));
	sections[9].push(new Mot("un papier","бумага"));
	sections[9].push(new Mot("un parent","родитель"));
	sections[9].push(new Mot("une parole","слово"));
	sections[9].push(new Mot("une part","первый"));
	sections[9].push(new Mot("une partie","часть"));
	sections[9].push(new Mot("un passage","проход"));
	sections[9].push(new Mot("un passé","прошлое"));
	sections[9].push(new Mot("un patron","босс"));
	sections[9].push(new Mot("un pays","страна"));
	sections[10].push(new Mot("une peau","кожа"));
	sections[10].push(new Mot("une peine","предложение"));
	sections[10].push(new Mot("une pensée","мысль"));
	sections[10].push(new Mot("un père","отец"));
	sections[10].push(new Mot("une personne","человек"));
	sections[10].push(new Mot("un petit","небольшой"));
	sections[10].push(new Mot("un peuple","люди"));
	sections[10].push(new Mot("une peur","страх"));
	sections[10].push(new Mot("une photo","фото"));
	sections[10].push(new Mot("une pièce","комната"));
	sections[10].push(new Mot("un pied","фут"));
	sections[10].push(new Mot("une pierre","камень"));
	sections[10].push(new Mot("une place","место"));
	sections[10].push(new Mot("un plaisir","удовольствие"));
	sections[10].push(new Mot("un plan","план"));
	sections[10].push(new Mot("une poche","карман"));
	sections[10].push(new Mot("un point","точка"));
	sections[10].push(new Mot("une police","полиция"));
	sections[10].push(new Mot("une porte","дверь"));
	sections[10].push(new Mot("un pouvoir","мощность"));
	sections[11].push(new Mot("un premier","первый"));
	sections[11].push(new Mot("une présence","присутствие"));
	sections[11].push(new Mot("un présent","подарок"));
	sections[11].push(new Mot("un président","президент"));
	sections[11].push(new Mot("un prince","принц"));
	sections[11].push(new Mot("une prison","тюрьма"));
	sections[11].push(new Mot("un prix","цена"));
	sections[11].push(new Mot("un problème","проблема"));
	sections[11].push(new Mot("un professeur","профессор"));
	sections[11].push(new Mot("un propos","о"));
	sections[11].push(new Mot("une putain","шлюха,"));
	sections[11].push(new Mot("un quartier","окрестности"));
	sections[11].push(new Mot("une question","вопрос"));
	sections[11].push(new Mot("une raison","причина"));
	sections[11].push(new Mot("un rapport","отчет"));
	sections[11].push(new Mot("un regard","посмотреть"));
	sections[11].push(new Mot("une réponse","ответить"));
	sections[11].push(new Mot("un reste","отдых"));
	sections[11].push(new Mot("un retard","задержка"));
	sections[11].push(new Mot("un retour","возвращение"));
	sections[12].push(new Mot("un rêve","сон"));
	sections[12].push(new Mot("un revoir","отзыв"));
	sections[12].push(new Mot("une robe","платье"));
	sections[12].push(new Mot("une route","дорога"));
	sections[12].push(new Mot("une salle","комната"));
	sections[12].push(new Mot("un salut","привет"));
	sections[12].push(new Mot("un sang","кровь"));
	sections[12].push(new Mot("une scène","сцена"));
	sections[12].push(new Mot("une seconde","вторая"));
	sections[12].push(new Mot("un secret","секрет"));
	sections[12].push(new Mot("une sécurité","безопасность"));
	sections[12].push(new Mot("un seigneur","лордом"));
	sections[12].push(new Mot("une semaine","неделя"));
	sections[12].push(new Mot("un sens","смысл"));
	sections[12].push(new Mot("un sentiment","чувство"));
	sections[12].push(new Mot("un service","обслуживание"));
	sections[12].push(new Mot("un siècle","столетие"));
	sections[12].push(new Mot("un signe","знак"));
	sections[12].push(new Mot("un silence","тишина"));
	sections[12].push(new Mot("une situation","ситуация"));
	sections[13].push(new Mot("une soeur","сестра"));
	sections[13].push(new Mot("un soir","вечер"));
	sections[13].push(new Mot("une soirée","вечер"));
	sections[13].push(new Mot("un soldat","солдат"));
	sections[13].push(new Mot("un soleil","солнце"));
	sections[13].push(new Mot("une sorte","вид"));
	sections[13].push(new Mot("un sourire","улыбка"));
	sections[13].push(new Mot("un souvenir","память"));
	sections[13].push(new Mot("une suite","набор"));
	sections[13].push(new Mot("un sujet","предмет"));
	sections[13].push(new Mot("une table","стол"));
	sections[13].push(new Mot("un téléphone","телефон"));
	sections[13].push(new Mot("un temps","время"));
	sections[13].push(new Mot("une terre","земля"));
	sections[13].push(new Mot("une tête","голова"));
	sections[13].push(new Mot("un tour","тур"));
	sections[13].push(new Mot("un tout","в целом"));
	sections[13].push(new Mot("un train","поезд"));
	sections[13].push(new Mot("un travail","работа"));
	sections[13].push(new Mot("un travers","через а"));
	sections[14].push(new Mot("un trou","отверстие"));
	sections[14].push(new Mot("un truc","что-то"));
	sections[14].push(new Mot("un type","тип"));
	sections[14].push(new Mot("un vent","ветер"));
	sections[14].push(new Mot("un ventre","живот"));
	sections[14].push(new Mot("une vérité","правда"));
	sections[14].push(new Mot("un verre","стекло"));
	sections[14].push(new Mot("un vieux","старый"));
	sections[14].push(new Mot("un village","деревня"));
	sections[14].push(new Mot("une ville","город"));
	sections[14].push(new Mot("un visage","лицо"));
	sections[14].push(new Mot("une voiture","автомобиль"));
	sections[14].push(new Mot("une voix","голос"));
	sections[14].push(new Mot("un voyage","поездка"));
	
}

construireListes()



//afficher(mots);
var ops = new Array(sections.length);
var opInner = ["section 1", "section 2", "section 3",
				"section 4", "section 5", "section 6",
				"section 7", "section 8", "section 9",
				"section 10", "section 11", "section 12",
				"section 13", "section 14", "section 15"];            

for (var i=0; i<ops.length; i++){
	ops[i] = document.createElement("option");
    ops[i].value = i;
    ops[i].innerHTML  = opInner[i];
    document.getElementById("sections").appendChild(ops[i]);
}

var ops2 = new Array(2);
var op2Inner = ["Français", "Russe"];           

for (var i=0; i<ops2.length; i++){
    ops2[i] = document.createElement("option");
    ops2[i].value = i+1;
    ops2[i].innerHTML  = op2Inner[i];
    document.getElementById("mode").appendChild(ops2[i]);
}



function nbAlea(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
  }

function condition(tableau){
	var result = 1;
	for(var i=0; i<tableau.length; i++){
		for(var j=0; j<tableau.length; j++){
			if(i != j){
				if(tableau[i] == tableau[j]){
					result = 0;
				}
			}	
		}
	}
	return result;
}

var ks = new Array();
function unicite(k, ks){
	var retour = 0;
	var indic = 0;
	for (var i = 0; i<ks.length; i++){
		if (k == ks[i]){
			indic++;
		}
	}
	if(indic > 0){
		retour = 1;
	}
	return retour;
}

var marche = 0
function commencer(){
	if (marche == 0){
		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		do{
			var k = nbAlea(0, sections[section].length-1);
		}while(unicite(k, ks)&&(ks.length<20));
		if(ks.length>19){
			ks=[];
		}
		ks.push(k);
		

		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

		// empêcher de rajouter des radiobox
		marche = 1;
	}else{
		var start = document.getElementById("start");
		var suppr = document.getElementById("coeur");
		start.removeChild(suppr); 

		// ajout <coeur>
		var coeur = document.createElement("ul");
		coeur.setAttribute("id", "coeur");
		document.getElementById("start").appendChild(coeur);

		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		do{
			var k = nbAlea(0, sections[section].length-1);
		}while(unicite(k, ks)&&(ks.length<20));
		if(ks.length>19){
			ks=[];
		}
		ks.push(k);
		
		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

	}
}


function rootCommencer(){
	// ajout <p>
	var p = document.getElementById('consignes')
	p.innerHTML  = "<i> Selectionnez la bonne traduction et changez de section après 20 bonnes réponses.</i>";

	document.getElementById('sol').innerHTML = "";
	document.getElementById('score').innerHTML = "";
	document.getElementById('reponse').innerHTML = "";
	document.getElementById('points').innerHTML = 0;
	document.getElementById('tour').innerHTML = 0;

	commencer();
}


function radioboxes(section, mode, k){

	// récupération mot
	var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;

	// 5 nb aleatoires entre 1 et 5
	var radioValue = new Array(5);

	//defini la place de la trad correcte
	var bonneRep = nbAlea(0, 4);
	radioValue[bonneRep] = k;
	
	do{
		for(var i=0; i<radioValue.length; i++){
			if(i != bonneRep){
				radioValue[i] = nbAlea(0, sections[section].length-1);
			}
		}
		
	}while (condition(radioValue) == 0);
		// ajout <radio>
		var radios = new Array(5);
		var radioId = ["a", "b", "c", "d", "e"];  
		var radioLabel = new Array(5); 

		for(var i=0; i<radioLabel.length; i++){
			radioLabel[i] = (mode == 1)?  sections[section][radioValue[i]].ru : sections[section][radioValue[i]].fr;
		}


		
		var divs = new Array(5);

		for (var i=0; i<radios.length; i++){
			radios[i] = document.createElement("button");
			radios[i].setAttribute("class", "styled");
			radios[i].setAttribute("onclick", "verifier(this.id)");

			radios[i].setAttribute("id", radioId[i]);
			radios[i].setAttribute("value", radioValue[i]);
			radios[i].setAttribute("name", "selection");

			
			radios[i].innerHTML  = radioLabel[i];

			divs[i] = document.createElement("div");
			divs[i].setAttribute("class", "formu");
			divs[i].appendChild(radios[i]);
			

			document.getElementById("coeur").appendChild(divs[i]);
		}

		// ajout <button>
		arreter= document.createElement("button");
		arreter.setAttribute("onclick", "document.location.reload(false)");
		arreter.setAttribute("class", "styledArret");
		arreter.innerHTML  = "Arrêter";
		document.getElementById("coeur").appendChild(arreter);

}


function verifier(id) {
		var bouton = document.getElementById(id);
		var tour = document.getElementById('tour').innerHTML;
		var points = document.getElementById('points').innerHTML;
		var k = document.getElementById('reponse').innerHTML;
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var valeur = bouton.value;
		
		var motFr = sections[section][k].fr;
		var motRu = sections[section][k].ru;

		tour++;
		document.getElementById('tour').innerHTML = tour;
		document.getElementById('sol').innerHTML = (mode == 1)? `${motFr} = ${motRu}.` : `${motRu} = ${motFr}.`;
		if(k == valeur){
			document.getElementById('sol').setAttribute("class", "vert");
			points++;
			document.getElementById('points').innerHTML = points;
		}else{
			document.getElementById('sol').setAttribute("class", "rouge");
		}
		document.getElementById('score').innerHTML = `${points} / ${tour} essais`;

		if(points > 19){
			if(points == tour){
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Félicitation! Vous avez le<br>score parfait!`;
			}else{
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Bravo! Votre score est <br>supérieur à 20.`;
			}
		}
		
		commencer();
}

var voir = 0;
function voirMots(){
	if(voir%2 == 0){
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var tableauFr = new Array(sections[section].length+1);
		var tableauRu = new Array(sections[section].length+1);

		tableauFr[0]="Français";
		tableauRu[0]="Russe";
		for(var i=1; i<sections[section].length+1; i++){
			tableauFr[i]=sections[section][i-1].fr;
			tableauRu[i]=sections[section][i-1].ru;
		}
		
		var table = document.createElement("table");
		table.setAttribute("id", "tb");

		for (var i = 0; i<sections[section].length+1; i++){
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");

			construireTab();
			
			tr.appendChild(td1);
			
			tr.appendChild(td2);

			table.appendChild(tr);
		}
		document.getElementById("table").appendChild(table);

		var v = document.getElementById("voir");
		v.innerHTML = "Cacher";

	}else{
		var tb = document.getElementById("tb");
		document.getElementById("table").removeChild(tb);

		var v = document.getElementById("voir");
		v.innerHTML = "Voir mots";
	}
	voir++;

	function construireTab() {
		if (i == 0) {
			if (mode == 1) {
				td1.innerHTML = tableauFr[i];
				td1.setAttribute("class", "francaisTitre");
				td2.innerHTML = tableauRu[i];
				td2.setAttribute("class", "russeTitre");
			}
			else {
				td1.innerHTML = tableauRu[i];
				td1.setAttribute("class", "russeTitre");
				td2.innerHTML = tableauFr[i];
				td2.setAttribute("class", "francaisTitre");
			}
		}
		else if (mode == 1) {
			td1.innerHTML = tableauFr[i];
			td1.setAttribute("class", "francais");
			td2.innerHTML = tableauRu[i];
			td2.setAttribute("class", "russe");
		}
		else {
			td1.innerHTML = tableauRu[i];
			td1.setAttribute("class", "russe");
			td2.innerHTML = tableauFr[i];
			td2.setAttribute("class", "francais");
		}
	}
}





