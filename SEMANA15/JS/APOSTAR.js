function apostar() {
    var a=Math.round(Math.random()*10);// funcion randon numero de 1 a 10 azar
    document.getElementById("RESULTADO").value=a;
    var b=document.getElementById("APOSTADO").value;
    //validar si acepto numero
    if (a==b){
        document.getElementById("SALIDA").value="GANO";
    }else{
        document.getElementById("SALIDA").value="PERDIO";
    }
}
function cancel() {
    document.getElementById("APOSTADO").value="";
    document.getElementById("RESULTADO").value="";
    document.getElementById("SALIDA").value="";
}