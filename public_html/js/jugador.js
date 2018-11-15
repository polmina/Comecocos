var jugador;
//spawn del jugador, no para fins que troba una casella buida
function jugadorStart(mapa) {
        jugador=undefined;
        var posOK = false, x, y;
        while (!posOK) {
            y = parseInt(Math.random() * mapa.length);
            x = parseInt(Math.random() * mapa[y].length);
            posOK = checkIfSpawnTrue(y, x, mapa);
        }
        var temp=parseInt(Math.random() * 4);
        jugador = {y: y, x: x, dir: temp, dirDesitjada:temp, id: 0};
        
        
}
//Comprova si la seguent cel·la esta buida i decideix que fer
function comprovarDireccionsJugador(direccio) {
    switch (direccio) {
        case 0:
            if (map[jugador.y][jugador.x - 1] === true ) {
                return true;
            } 
            else if(map[jugador.y][jugador.x - 1]>0){
                return false;
            }
            break;
            
        case 1:
            if (map[jugador.y][jugador.x + 1] === true) {
                return true;
            } 
            else if(map[jugador.y][jugador.x + 1]>0){
                return false;
            }
            break;
        case 2:
            if (map[jugador.y - 1][jugador.x] === true) {
                return true;
            } 
            else if(map[jugador.y - 1][jugador.x]>0){
                return false;
            }
            break;
            
        case 3:
            if (map[jugador.y + 1][jugador.x] === true) {
                return true;
            } 
            else if(map[jugador.y + 1][jugador.x]>0){
                return false;
            }
            break;
    }
}
//quan apretes una direccio a cada torn calcula si es pot anar en aquella direccio
function comprovarDireccioDesitjadaJugador(dirDesitjada){
    switch (dirDesitjada) {
        case 0:
            if (map[jugador.y][jugador.x - 1] === true) {
                jugador.dir=dirDesitjada;
            } 
            break;
        case 1:
            if (map[jugador.y][jugador.x + 1] === true) {
                 jugador.dir=dirDesitjada;
            } 
            break;
        case 2:
            if (map[jugador.y - 1][jugador.x] === true) {
                jugador.dir=dirDesitjada;
            } 
            break;
            
        case 3:
            if (map[jugador.y + 1][jugador.x] === true) {
                 jugador.dir=dirDesitjada;
            } 
            break;
    }
}
//un Cop triada la direccio mou el jugador
function movimentJugador(mapa) {
        var moviment=true;
        map = mapa;
        comprovarDireccioDesitjadaJugador(jugador.dirDesitjada);
        moviment=comprovarDireccionsJugador(jugador.dir);
        if(moviment===true){
            map[jugador.y][jugador.x] = true;
            switch (jugador.dir) {
            case 0:
                jugador.x--;
                break;
            case 1:
                jugador.x++;
                break;
            case 2:
                jugador.y--;
                break;
            case 3:
                jugador.y++;
                break;
        }
        map[jugador.y][jugador.x] = jugador.id;
    }
    else if(moviment===false){
        alert("Has perdut");
        setJugadorViu(false);
        //mapReset();
    }
    return map;
}

//event

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    switch(charStr){
        case 'w':
            jugador.dirDesitjada=2;
            break;
        case 'a':
            jugador.dirDesitjada=0;
            break;
        case 's':
            jugador.dirDesitjada=3;
            break;
        case 'd':
            jugador.dirDesitjada=1;
            break;
    }
};
function getJugador(){
    return jugador;
}