// for (var i=0; i<3; i++)
//    for(var j=0; j<3; j++)
//       grille[i][j] = 0;  


var case1 = document.getElementById("1");
var case2 = document.getElementById("2");
var case3 = document.getElementById("3");
var case4 = document.getElementById("4");
var case5 = document.getElementById("5");
var case6 = document.getElementById("6");
var case7 = document.getElementById("7");
var case8 = document.getElementById("8");
var case9 = document.getElementById("9");

case1.addEventListener("click", couleur1);
case2.addEventListener("click", couleur2);
case3.addEventListener("click", couleur3);
case4.addEventListener("click", couleur4);
case5.addEventListener("click", couleur5);
case6.addEventListener("click", couleur6);
case7.addEventListener("click", couleur7);
case8.addEventListener("click", couleur8);
case9.addEventListener("click", couleur9);

var joueur = true;
var joueurActif = 1;
        // fonction pour chgt de joueur 
function changementJoueur() {
    if (joueur == true) {
        joueurActif = 1;
        joueur = false;
    }else {
        joueurActif = 2;
        joueur = true;
    }
};

changementJoueur()
function couleur1() {
    if (joueurActif == 1) {
        case1.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case1.style.backgroundColor = "red";
        changementJoueur();
    } 
};

function couleur2() {
    if (joueurActif == 1) {
        case2.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case2.style.backgroundColor = "red";
        changementJoueur();
    } 
};

function couleur3() {
    if (joueurActif == 1) {
        case3.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case3.style.backgroundColor = "red";
        changementJoueur();
    } 
};

function couleur4() {
    if (joueurActif == 1) {
        case4.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case4.style.backgroundColor = "red";
        changementJoueur();
    } 
};

function couleur5() {
    if (joueurActif == 1) {
        case5.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case5.style.backgroundColor = "red";
        changementJoueur();
    } 
};

function couleur6() {
    if (joueurActif == 1) {
        case6.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case6.style.backgroundColor = "red";
        changementJoueur();
    } 
};
function couleur7() {
    if (joueurActif == 1) {
        case7.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case7.style.backgroundColor = "red";
        changementJoueur();
    } 
};
function couleur8() {
    if (joueurActif == 1) {
        case8.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case8.style.backgroundColor = "red";
        changementJoueur();
    } 
};
function couleur9() {
    if (joueurActif == 1) {
        case9.style.backgroundColor = "yellow";
        changementJoueur();
    }else {
        case9.style.backgroundColor = "red";
        changementJoueur();
    } 
};