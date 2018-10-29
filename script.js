const gameArea = document.getElementById("game-area"); // le seul élément du DOM dont on a besoin c'est l'élément parent de nos cases -> on récupérera l'enfant au clique.

var cellsStatus = [ ["vide", "vide", "vide"],
["vide", "vide", "vide"],
["vide", "vide", "vide"] ];

gameArea.addEventListener("click", function(event) {
    var clickedCellElmt;
    var clickedCellName;
    var clickedCellCoordX;
    var clickedCellCoordY;

    clickedCellElmt = document.getElementById(event.target.id); //enregistre l'élément enfant du DOM qui a été cliquée.
    clickedCellName = event.target.id; //renvoie l'id de la cellule cliquée sous forme de string
    clickedCellCoordX = parseInt(clickedCellName[1]); // récupère le 2eme caractère dans l'ID
    clickedCellCoordY = parseInt(clickedCellName[4]); // récupère le 5eme caractère dans l'ID
    console.log("X : " + clickedCellCoordX + ", Y : " + clickedCellCoordY);
    console.log("clickedCell : " + clickedCellName);

    console.log(cellsStatus);


    if (cellsStatus[clickedCellCoordX-1][clickedCellCoordY-1] == "vide"){
        if (joueurActif == 1) {
                clickedCellElmt.style.backgroundColor = "yellow";
                changementJoueur();
                cellsStatus[clickedCellCoordX-1][clickedCellCoordY-1] = "jaune";
                victoire();
            } else {
                clickedCellElmt.style.backgroundColor = "red";
                changementJoueur();
                cellsStatus[clickedCellCoordX-1][clickedCellCoordY-1] = "rouge";
                victoire();
            }
        
    }else {
        console.log("Choisir une autre case !")
    }


    function victoire() {
        if ((cellsStatus[0][0]== "jaune" && cellsStatus[1][0]== "jaune" &&  cellsStatus[2][0] == "jaune") ||
        (cellsStatus[0][1]== "jaune" && cellsStatus[1][1]== "jaune" &&  cellsStatus[2][1] == "jaune") || 
        (cellsStatus[0][2]== "jaune" && cellsStatus[1][2]== "jaune" &&  cellsStatus[2][2] == "jaune") || 
        (cellsStatus[0][0]== "jaune" && cellsStatus[0][1]== "jaune" &&  cellsStatus[0][2] == "jaune") || 
        (cellsStatus[1][0]== "jaune" && cellsStatus[1][1]== "jaune" &&  cellsStatus[1][2] == "jaune") || 
        (cellsStatus[2][0]== "jaune" && cellsStatus[2][1]== "jaune" &&  cellsStatus[2][2] == "jaune") || 
        (cellsStatus[0][0]== "jaune" && cellsStatus[1][1]== "jaune" &&  cellsStatus[2][2] == "jaune") || 
        (cellsStatus[2][0]== "jaune" && cellsStatus[1][1]== "jaune" &&  cellsStatus[0][2] == "jaune")) {
            console.log("Joueur Jaune win !!!");
        } else if ((cellsStatus[0][0]== "rouge" && cellsStatus [1][0]== "rouge" &&  cellsStatus [2][0] == "rouge") || 
        (cellsStatus[0][1]== "rouge" && cellsStatus [1][1]== "rouge" &&  cellsStatus [2][1]== "rouge") || 
        (cellsStatus[0][2]== "rouge" && cellsStatus [1][2]== "rouge" &&  cellsStatus [2][2]== "rouge") || 
        (cellsStatus[0][0]== "rouge" && cellsStatus [0][1]== "rouge" &&  cellsStatus [0][2]== "rouge") || 
        (cellsStatus[1][0]== "rouge" && cellsStatus [1][1]== "rouge" &&  cellsStatus [1][2]== "rouge") || 
        (cellsStatus[2][0]== "rouge" && cellsStatus [2][1]== "rouge" &&  cellsStatus [2][2]== "rouge") || 
        (cellsStatus[0][0]== "rouge" && cellsStatus [1][1]== "rouge" &&  cellsStatus [2][2]== "rouge") || 
        (cellsStatus[2][0]== "rouge" && cellsStatus [1][1]== "rouge" &&  cellsStatus [0][2] == "rouge")) {
            console.log("Joueur Rouge win !!!");
        } else if ((cellsStatus[0][0] != "vide" && cellsStatus[1][0] != "vide" &&  cellsStatus[2][0] != "vide") &&
        (cellsStatus[0][1] != "vide" && cellsStatus[1][1] != "vide" &&  cellsStatus[2][1] != "vide") &&
        (cellsStatus[0][2] != "vide" && cellsStatus[1][2] != "vide" &&  cellsStatus[2][2] != "vide") && 
        (cellsStatus[0][0] != "vide" && cellsStatus[0][1] != "vide" &&  cellsStatus[0][2] != "vide") && 
        (cellsStatus[1][0] != "vide" && cellsStatus[1][1] != "vide" &&  cellsStatus[1][2] != "vide") && 
        (cellsStatus[2][0] != "vide" && cellsStatus[2][1] != "vide" &&  cellsStatus[2][2] != "vide") && 
        (cellsStatus[0][0] != "vide" && cellsStatus[1][1] != "vide" &&  cellsStatus[2][2] != "vide") && 
        (cellsStatus[2][0] != "vide" && cellsStatus[1][1] != "vide" &&  cellsStatus[0][2] != "vide")) {
            console.log("Egalité !!!");
    }}
    });


var joueur = true ;
var joueurActif = 0;
function changementJoueur() {
    if (joueur == true) {
        joueurActif = 1;
        joueur = false;
    }else {
        joueurActif = 2;
        joueur = true;
    }
};

function reset() {
    for (var i=0; i<3; i++)
        for(var j=0; j<3; j++)
            cellsStatus[i][j] = "vide"; 
            console.log(cellsStatus);
            document.getElementById("x1-y1").style.backgroundColor = "";
            document.getElementById("x1-y2").style.backgroundColor = "";  
            document.getElementById("x1-y3").style.backgroundColor = "";  
            document.getElementById("x2-y1").style.backgroundColor = "";  
            document.getElementById("x2-y2").style.backgroundColor = "";  
            document.getElementById("x2-y3").style.backgroundColor = "";  
            document.getElementById("x3-y1").style.backgroundColor = "";  
            document.getElementById("x3-y2").style.backgroundColor = "";  
            document.getElementById("x3-y3").style.backgroundColor = "";  
};

document.getElementById("reset").addEventListener("click", reset);
