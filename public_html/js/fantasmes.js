var fantasmes;
var map;
var nFant = 3;

function fantasmesStart(mapa) {
    fantasmes=undefined;
    fantasmes = [nFant];
    for (var i = 0; i < nFant; i++) {
        var posOK = false, x, y;
        while (!posOK) {
            y = parseInt(Math.random() * mapa.length);
            x = parseInt(Math.random() * mapa[y].length);
            posOK = checkIfSpawnTrue(y, x, mapa);
            //alert(i + " " + y + " " + x + mapa[y][x]);
        }
        fantasmes[i] = {y: y, x: x, dir: parseInt(Math.random() * 4), id: i+1};

    }
    //fantasmes = [{y: 20, x: 10, dir:3, id:1}/*, {y: 1, x: 1, dir:1, id:2}*/]; //0:esquerra, 1:dreta, 2:adalt, 3:abaix
}

/*
function comprovarDireccionsFantasmes(fantasma) {
    var result=0;
    switch (fantasma.dir) {
        case 0:
            if (map[fantasma.y][fantasma.x - 1] === true) {
                    if(map[fantasma.y-1][fantasma.x] === true || map[fantasma.y+1][fantasma.x] === true){
                        var n=Math.random() * 3;
                        switch(n){
                            case 0:
                                return 0;
                                break;
                            case 1:
                                if(map[fantasma.y-1][fantasma.x] === true)
                                {return 2;}
                                break;
                            case 2:
                                if(map[fantasma.y+1][fantasma.x] === true)
                                {return 3;}
                                break;
                        }
                    }
                    else{
                        return 0;
                    }
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
            
        case 1:
            if (map[fantasma.y][fantasma.x + 1] === true) {
                if(map[fantasma.y-1][fantasma.x] === true || map[fantasma.y+1][fantasma.x] === true){
                        var n=Math.random() * 3;
                        switch(n){
                            case 0:
                                return 1;
                                break;
                            case 1:
                                if(map[fantasma.y-1][fantasma.x] === true)
                                {return 2;}
                                break;
                            case 2:
                                if(map[fantasma.y+1][fantasma.x] === true)
                                {return 3;}
                                break;
                        }
                    }
                    else{
                        return 1;
                    }
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
        case 2:
            if (map[fantasma.y - 1][fantasma.x] === true) {
                if(map[fantasma.y][fantasma.x-1] === true || map[fantasma.y][fantasma.x+1] === true){
                        var n=Math.random() * 3;
                        switch(n){
                            case 0:
                                return 2;
                                break;
                            case 1:
                                if(map[fantasma.y][fantasma.x-1] === true)
                                {return 0;}
                                break;
                            case 2:
                                if(map[fantasma.y][fantasma.x+1] === true)
                                {return 1;}
                                break;
                        }
                    }
                    else{
                        return 2;
                    }
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
            
        case 3:
            if (map[fantasma.y + 1][fantasma.x] === true) {
               if(map[fantasma.y][fantasma.x-1] === true || map[fantasma.y][fantasma.x+1] === true){
                        var n=Math.random() * 3;
                        switch(n){
                            case 0:
                                return 3;
                                break;
                            case 1:
                                if(map[fantasma.y][fantasma.x-1] === true)
                                {return 0;}
                                break;
                            case 2:
                                if(map[fantasma.y][fantasma.x+1] === true)
                                {return 1;}
                                break;
                        }
                    }
                    else{
                        return 3;
                    }
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
    }
    return result;
}
*/

 

/*
function comprovarDireccions(fantasma) {
    switch (fantasma.dir) {
        case 0:
            if (map[fantasma.y][fantasma.x - 1] === true) {
                return 0;
            } else if (map[fantasma.y + 1][fantasma.x] === true) {
                return 3;
            } else if (map[fantasma.y - 1][fantasma.x] === true) {
                return 2;
            } else if (map[fantasma.y][fantasma.x + 1] === true) {
                return 1;
            }
            break;
        case 1:
            if (map[fantasma.y][fantasma.x + 1] === true) {
                return 1;
            } else if (map[fantasma.y - 1][fantasma.x] === true) {
                return 2;
            } else if (map[fantasma.y + 1][fantasma.x] === true) {
                return 3;
            } else if (map[fantasma.y][fantasma.x - 1] === true) {
                return 0;
            }
            break;
        case 2:
            if (map[fantasma.y - 1][fantasma.x] === true) {
                return 2;
            } else if (map[fantasma.y][fantasma.x + 1] === true) {
                return 1;
            } else if (map[fantasma.y][fantasma.x - 1] === true) {
                return 0;
            } else if (map[fantasma.y + 1][fantasma.x] === true) {
                return 3;
            }
            break;
        case 3:
            if (map[fantasma.y + 1][fantasma.x] === true) {
                return 3;
            } else if (map[fantasma.y][fantasma.x - 1] === true) {
                return 0;
            } else if (map[fantasma.y][fantasma.x + 1] === true) {
                return 1;
            } else if (map[fantasma.y - 1][fantasma.x] === true) {
                return 2;
            }
            break;
    }
}*/
/*
function comprovarDireccionsFantasmes(fantasma) {
    var result=0;
    switch (fantasma.dir) {
        case 0:
            if (map[fantasma.y][fantasma.x - 1] === true) {
                return 0;
            } else {
                return triarDireccioFantasmes(fantasma);
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
            
        case 1:
            if (map[fantasma.y][fantasma.x + 1] === true) {
                return 1;
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
        case 2:
            if (map[fantasma.y - 1][fantasma.x] === true) {
                return 2;
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
            
        case 3:
            if (map[fantasma.y + 1][fantasma.x] === true) {
                return 3;
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
    }
    return result;
}
 */
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
function preguntaPosicioBuida(pos, fantasma){
    switch(pos){
        case 0:
            if (map[fantasma.y][fantasma.x - 1] === true) return true;
            break;
        case 1:
             if (map[fantasma.y][fantasma.x + 1] === true) return true;
            break;
        case 2:
             if (map[fantasma.y - 1][fantasma.x] === true) return true;
            break;
        case 3:
            if (map[fantasma.y + 1][fantasma.x] === true) return true;
            break;
        
    }
    return false;
}
function triarDireccioFantasmes(fantasma){
    var direccions = shuffle([0,1,2,3]);
    var y=fantasma.y;
    var x=fantasma.x;
    for(var i=0;i<direccions.length;i++){

        switch(direccions[i]){
            case 0: x=x-1;break;
            case 1: x=x+1;break;
            case 2: y=y-1;break;
            case 3: y=y+1;break;
        }
        if(checkIfSpawnTrue(y, x, map)){
            return direccions[i];
        }
    }
}

function comprovarDireccionsFantasmes(fantasma) {
    var result=0;
    switch (fantasma.dir) {
        case 0:
            if (map[fantasma.y][fantasma.x - 1] === true) {
                return 0;
            } else {
                return triarDireccioFantasmes(fantasma);
            }
            break;
            
        case 1:
            if (map[fantasma.y][fantasma.x + 1] === true) {
                return 1;
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
        case 2:
            if (map[fantasma.y - 1][fantasma.x] === true) {
                return 2;
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
            
        case 3:
            if (map[fantasma.y + 1][fantasma.x] === true) {
                return 3;
            } else {
                fantasma.dir = parseInt(Math.random() * 4);
                result=comprovarDireccionsFantasmes(fantasma);
            }
            break;
    }
    return result;
}

function movimentFantasmes() {
    for (var i = 0; i < fantasmes.length; i++) {
        map[fantasmes[i].y][fantasmes[i].x] = true;
        switch (comprovarDireccionsFantasmes(fantasmes[i])) {
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
    }
    return fantasmes;
}
function posFantasmes(mapa) {
    map = mapa;
    movimentFantasmes();
    for (var i = 0; i < fantasmes.length; i++) {
        // alert("y:"+ fantasmes[i].y +" x:"+ fantasmes[i].x);
        map[fantasmes[i].y][fantasmes[i].x] = fantasmes[i].id;
        //alert(fantasmes[i].y+" "+fantasmes[i].x);
    }
    return map;
}