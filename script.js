let who=["Mi pajaro ","Mi perro ", "Mi gato ", "Mi caballo "];
let accion=["se comio ","tiro ","quebro ","ataco "];
let what=["mi auto ", "mi tarea ","mi vida ", "mi notebook "]
let when=["ayer ", "antes de ayer ", "el otro dia ", "la semana pasada "];


let x = ()=>Math.floor(Math.random()*4);

function onLoad(){

    let frase;

    frase = who[x()]+accion[x()]+what[x()]+when[x()];

    
    /* let frase= who[Math.floor(Math.random()*4)] + accion[Math.floor(Math.random()*4)]+
    what[Math.floor(Math.random()*4)]+when[Math.floor(Math.random()*4)]; */
    return frase;

}

//console.log(onLoad());
document.getElementById("frase").innerHTML=onLoad();