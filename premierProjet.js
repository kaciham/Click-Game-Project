console.log("connecté !");
let titre = document.getElementById('titre');
console.log(titre);

let score =0;
console.log(score, "initialisation");
score++;
console.log(score, "aprés addition");

const cours ="JavaScript";
console.log(cours, "cours");

const btnRed =document.getElementById('btn-red');
console.log(btnRed, "Bouton Rouge");

const btnBlue =document.getElementById('btn-blue');
console.log(btnBlue, "Bouton Bleu");



btnRed.addEventListener('click',function(){
    console.log('cliqué rouge');
    compteurRed++;
    console.log(compteurRed,"red compteur après incrémentation");
    add();
})

btnBlue.addEventListener('click',function(){
    console.log('cliqué bleu');
    compteurBlue++;
    console.log(compteurBlue,"blue compteur après incrémentation");
    add();
})

let compteurRed=0;
console.log(compteurRed,"compteur au démarrage rouge");
let compteurBlue=0;
console.log(compteurBlue,"compteur au démarrage bleu");

let compteur = 0;

function add(){
    compteur++;
    console.log(compteur,"fonction incrémenté");
        titre.innerText = compteur;
}

let titre2 = document.getElementById('titre2');
let bouton = document.getElementById('bouton');

setTimeout (function(){
    btnBlue.remove();
    btnRed.remove();
    console.log("fin du chrono");
    titre2.style.display= 'block';
    bouton.style.display= 'block';
    if(titre.innerText !== "Go !"){
        titre2.innerText += " " + titre.innerText;
    }
    else {
        titre2.innerText += " " + "0";
    }
    titre.style.display= 'none';
    
},10000)

let reboot = bouton.addEventListener('click',function(){
    window.location.reload();
})
console.log(reboot);