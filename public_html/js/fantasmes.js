var fantasmes;
var map;
var nFant = 3;
//crea el spawn pels fantasmes
function fantasmesStart(mapa) {
    fantasmes=undefined;
    fantasmes = [nFant];
    for (var i = 0; i < nFant; i++) {
        var posOK = false, x, y;
        while (!posOK) {
            y = parseInt(Math.random() * mapa.length);
            x = parseInt(Math.random() * mapa[y].length);
            posOK = checkIfSpawnTrue(y, x, mapa);
        }
        fantasmes[i] = {y: y, x: x, dir: parseInt(Math.random() * 4), id: i+1};

    }
}

//barreja el arrey de la seguent direccio del fantasma perque sigui 100% aleatori
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//retorna la direccio contraria a la que va perque tornar enrere sigui l'ultima opcio
function retornarDireccioContraria(dir){
    switch(dir){
        case 0: return 1;
        case 1: return 0;
        case 2: return 3;
        case 3: return 2;
    }
}
//quan troba una cruilla decideix quina direccio prendre
function cruillaTrobada(fantasma){
    var direccions = shuffle([0,1,2,3]);
    var a = direccions.indexOf(retornarDireccioContraria(fantasma.dir));
    var direccioContraria=direccions[a];
    direccions.splice(a, 1);
    var y,x;
    for(var i=0;i<direccions.length;i++){
    y=fantasma.y;
    x=fantasma.x;
        switch(direccions[i]){
            case 0: x--;break;
            case 1: x++;break;
            case 2: y--;break;
            case 3: y++;break;
        }
        if(checkIfSpawnTrue(y, x, map)){
            return direccions[i];
        }
    }
    return direccioContraria;
}
//mira si el seguent pas es un espai en blanc o una pared(true o false)
function comprovarSeguentPas(fantasma) {
    var result=0;
    switch (fantasma.dir) {
        case 0:
            if (checkIfSpawnTrue(fantasma.y, fantasma.x-1, map)) {
                if(checkIfSpawnTrue(fantasma.y-1, fantasma.x, map)||checkIfSpawnTrue(fantasma.y+1, fantasma.x, map)){
                    return cruillaTrobada(fantasma);
                }else{
                return 0;
                }
            } else {
                return cruillaTrobada(fantasma);
            }
            break;
            
        case 1:
            if (checkIfSpawnTrue(fantasma.y, fantasma.x-1, map)) {
                if(checkIfSpawnTrue(fantasma.y-1, fantasma.x, map)||checkIfSpawnTrue(fantasma.y+1, fantasma.x, map)){
                    return cruillaTrobada(fantasma);
                }else{
                return 1;
                }
            } else {
                return cruillaTrobada(fantasma);
            }
            break;
        case 2:
            if (checkIfSpawnTrue(fantasma.y-1, fantasma.x, map)) {
                if(checkIfSpawnTrue(fantasma.y, fantasma.x-1, map)||checkIfSpawnTrue(fantasma.y, fantasma.x+1, map)){
                    return cruillaTrobada(fantasma);
                }else{
                return 2;
                }
            } else {
                return cruillaTrobada(fantasma);
            }
            break;
            
        case 3:
            if (checkIfSpawnTrue(fantasma.y+1, fantasma.x, map)) {
                if(checkIfSpawnTrue(fantasma.y, fantasma.x-1, map)||checkIfSpawnTrue(fantasma.y, fantasma.x+1, map)){
                    return cruillaTrobada(fantasma);
                }else{
                return 3;
                }
            } else {
                return cruillaTrobada(fantasma);
            }
            break;
    }
    return result;
}
//un cop decidida la direccio es fa el moviment
function movimentFantasmes(mapa) {
    map = mapa;
    for (var i = 0; i < fantasmes.length; i++) {
        map[fantasmes[i].y][fantasmes[i].x] = true;
        switch (comprovarSeguentPas(fantasmes[i])) {
            case 0:
                fantasmes[i].dir = 0;
                fantasmes[i].x--;
                break;
            case 1:
                fantasmes[i].dir = 1;
                fantasmes[i].x++;
                break;
            case 2:
                fantasmes[i].dir = 2;
                fantasmes[i].y--;
                break;
            case 3:
                fantasmes[i].dir = 3;
                fantasmes[i].y++;
                break;
        }
        map[fantasmes[i].y][fantasmes[i].x] = fantasmes[i].id;
    }
    return mapa;
}
function getFantasmes(){
    return fantasmes;
}