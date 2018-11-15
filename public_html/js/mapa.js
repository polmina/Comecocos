var fantasmes, map, jugadorViu, puntuacio, imgJugador, augmentarPuntuacio=0;
function createMap() {
    //map=undefined;
    map = [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,true,true,true,true,true,true,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,false],
        [false,true,false,false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,false,true,false],
        [false,true,false,false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true ,false,false,false,false,true,false],
        [false,true,false,false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,false,true,false],
        [false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false],
        [false,true,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,true,false],
        [false,true,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,true,false],
        [false,true,true,true,true,true,true,false,false,true,true,true,true,false,false,true,true,true,true,false,false,true,true,true,true,true,true,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,true,true,true,true,true,true,true,true,true,true,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false],
        [false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,false,false],
        [false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,true,true,true,true,true,true,true,true,true,true,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false],
        [false,true,true,true,true,true,true,true,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,false],
        [false,true,false,false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,false,true,false],
        [false,true,false,false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,false,true,false],
        [false,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,true,true,true,false],
        [false,false,false,true,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false],
        [false,false,false,true,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false],
        [false,true,true,true,true,true,true,false,false,true,true,true,true,false,false,true,true,true,true,false,false,true,true,true,true,true,true,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]   
        
    ];
    imgJugador=document.getElementById("jugador");
}
//reseteja el mapa 
function mapReset(){
    puntuacio=0;
    jugadorViu=true;
    createMap();
    jugadorStart(map);
    fantasmesStart(map);
    printMap(map);

}
//agrega al mapa el moviment del jugador i dels fantasmes
function prepMap(){
    
    map = movimentJugador(map);
    map = movimentFantasmes(map);

    return map;
}
//pinta el mapa, mou els divs pel tabler
function pintaMapa(){
    var jugador=getJugador();
    var basex=800;
    var basey=200;
    document.getElementById("jugador").style.left =basex+ ((jugador.x)*20)+"px";
    document.getElementById("jugador").style.top =basey+ ((jugador.y)*20)+"px";
    var fantasmes=getFantasmes();
    
    document.getElementById("vermell").style.left =basex+  ((fantasmes[0].x)*20)+"px";
    document.getElementById("vermell").style.top =basey+  ((fantasmes[0].y)*20)+"px";
    
    document.getElementById("blau").style.left = basex+ ((fantasmes[1].x)*20)+"px";
    document.getElementById("blau").style.top =basey+  ((fantasmes[1].y)*20)+"px";
    
    document.getElementById("groc").style.left = basex+ ((fantasmes[2].x)*20)+"px";
    document.getElementById("groc").style.top = basey+ ((fantasmes[2].y)*20)+"px";
    

    
}//dibuixa el mapa en consola i fa l'espera
async function printMap(map) {
    var string;
    while(jugadorViu){
    string="";
    map=prepMap();
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[1].length; j++) {
            switch(map[i][j]){
                case true:
                    string+=' ';
                    break;
                case false:
                    string+='H';
                    break;
                default:
                    string+=map[i][j];
                    break;
            }
            string+=" ";
        }
        string+='\n';
    }
    pintaMapa();
    console.log(string);
    await sleep(200);
    console.clear();
    augmentarPuntuacio++;
    if(augmentarPuntuacio===4){
        augmentarPuntuacio=0;
        puntuacio+=100;
        document.getElementById('puntuacio').innerHTML=puntuacio;
    }
    
    //console.clear();
    }
    document.cookie = "puntuacio="+puntuacio;//si la partida acaba posa la cookie amb la puntuacio
    }
function setJugadorViu(valor){
    jugadorViu=valor;
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}//comprova si una cel·la en concret esta buida
function checkIfSpawnTrue(y, x, mapaPos) {
    if (mapaPos[y][x] === true)
        return true;
    else
        return false;
}