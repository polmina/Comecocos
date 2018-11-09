var fantasmes, map, jugadorViu, puntuacio
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
        [false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,false],
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

}
function mapReset(){
    puntuacio=0;
    jugadorViu=true;
    createMap();
    jugadorStart(map);
    fantasmesStart(map);
    printMap(map);

}
function prepMap(){
    
    map = movimentJugador(map);
    map = movimentFantasmes(map);

    return map;
}
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
    console.log(string);
    await sleep(300);
    console.clear();
    console.log("\n\n");
    }
    }
function setJugadorViu(valor){
    jugadorViu=valor;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function checkIfSpawnTrue(y, x, mapaPos) {
    if (mapaPos[y][x] === true)
        return true;
    else
        return false;
}