/**
 * Descripción
 * @method Nombre de la función
 * @param {string} input 
 * @param {number} valor
 * @return Valor que retorna
 */

/* conversion de unidades metros yardas pies y pulgadas*/

function convertirUnidades(id,valor){
    if(isNaN(valor)){
        alert("se ingreso un valor incorrecto: "+id)
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
        document.getElementById("metro").value = "";
        
    }else if(id === "metro"){
        document.getElementById("pulgada").value = valor*39.3701
        document.getElementById("pie").value = valor*3.28084
        document.getElementById("yarda").value = valor*1.09361

    }else if(id === "pie"){
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor / 3;
        document.getElementById("metro").value = valor * 0.3048;

    }else if(id === "yarda"){
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;
        document.getElementById("metro").value = valor * 0.9144;
    }

    else if(id === "pulgada"){
       document.getElementById("pie").value = valor / 12;
       document.getElementById("yarda").value = valor / 36;
       document.getElementById("metro").value = valor * 0.0254; 
    }
}

function convertirGR(id){

    let grad , rad;

    if (id === "grados"){
        grad = document.getElementById("grados").value ;
        rad = grad * Math.PI / 180; ;
    } else {
        rad = document.getElementById("radianes").value;
        grad = rad * 180 / Math.PI ; 
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad; 
}