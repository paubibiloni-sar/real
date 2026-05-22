let vidaJugador = 100;
let decisioJugador = "";
let objectesInventari = [];

alert("Benvingut a l'aventura!");

// Vols jugar?
decisioJugador = prompt("Vols jugar? (si/no)");

if (decisioJugador == "no") {

    alert("Fi del joc");

} else {

    // Escollir entre riu o cova
    decisioJugador = prompt("Vols entrar al riu o a la cova?");

    // CAMÍ DEL RIU
    if (decisioJugador == "riu") {

        alert("Trobes una serp agressiva");

        decisioJugador = prompt("Vols lluitar o correr per la teva vida?");

        if (decisioJugador == "lluitar") {

            alert("Perds, te menja sencera");
            vidaJugador = 0;

        } else {

            alert("Has escapat!");
            alert("Has trobat la teva tribu, GUANYES");
        }

        // CAMÍ DE LA COVA
    } else {

        alert("Trobes un ós i has de lluitar");

        decisioJugador = prompt("Vols donar-li un cop de puny o cossa?");

        if (decisioJugador == "cop de puny") {

            alert("Mates l'ós");
            alert("Has trobat la teva tribu, GUANYES");

        } else {

            alert("L'ós et mata");
            vidaJugador = 0;
        }
    }
}

// Final del joc
if (vidaJugador <= 0) {

    alert("Mors");

} else {

    alert("Final feliç");
}