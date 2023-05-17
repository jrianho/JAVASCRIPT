function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");// ASIGNA EL NOMBRE PELICULA INGRESADO
    filter = input.value.toUpperCase();//CONVIERTE EN MAYUSCULA
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");//ASIGNA TODAS LAS FILAS DE LA TABLA A ARRAYS
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];//RECORRE TODAS LAS COLUMNAS 1 (NOMBRE PELICULA) EN TODAS LAS FILAS
    if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) { //BUSCA NOMBRE PELICULA EN LA TABLA COLUMNA 0
        tr[i].style.display = ""; 
        } else {
        tr[i].style.display = "none";
        }
    }       
    }
}  