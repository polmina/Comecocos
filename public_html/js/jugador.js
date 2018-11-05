var jugador;

function jugadorStart(mapa) {
        jugador=undefined;
        var posOK = false, x, y;
        while (!posOK) {
            y = parseInt(Math.random() * mapa.length);
            x = parseInt(Math.random() * mapa[y].length);
            posOK = checkIfSpawnTrue(y, x, mapa);
            //alert(i + " " + y + " " + x + mapa[y][x]);
        }
        jugador = {y: y, x: x, dir: parseInt(Math.random() * 4), id: 0};

    
//0:esquerra, 1:dreta, 2:adalt, 3:abaix
}
function comprovarDireccionsJugador() {
    switch (jugador.dir) {
        case 0:
            if (map[jugador.y][jugador.x - 1] === true) {
                return true;
            } 
            /*else if(map[jugador.y][jugador.x - 1]>0){
                return false;
            }*/
            break;
            
        case 1:
            if (map[jugador.y][jugador.x + 1] === true) {
                return true;
            } 
            /*else if(map[jugador.y][jugador.x + 1]>0){
                return false;
            }*/
            break;
        case 2:
            if (map[jugador.y - 1][jugador.x] === true) {
                return true;
            } 
            /*else if(map[jugador.y - 1][jugador.x]>0){
                return false;
            }*/
            break;
            
        case 3:
            if (map[jugador.y + 1][jugador.x] === true) {
                return true;
            } 
            /*else if(map[jugador.y + 1][jugador.x]>0){
                return false;
            }*/
            break;
    }
}
function movimentJugador() {
        var moviment=true;
        moviment=comprovarDireccionsJugador(jugador);
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
    }
    else if(moviment===false){
        alert("Has perdut");
        mapReset();
    }
            
}

function posJugador(mapa) {
    map = mapa;
    movimentJugador(); 
    map[jugador.y][jugador.x] = jugador.id;
    return map;
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    switch(charStr){
        case 'w':
            jugador.dir=2;
            break;
        case 'a':
            jugador.dir=0;
            break;
        case 's':
            jugador.dir=3;
            break;
        case 'd':
            jugador.dir=1;
            break;
    }
};