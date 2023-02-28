
document.getElementById('boton').addEventListener ('click', alternar);

document.getElementById('boton_ocultar').addEventListener ('click', ocultar);

function mostrar () { 
    document.getElementById("demo").innerHTML = "Hobbies: Navegar, jugar al tennis, viajar, leer libros.";
    document.getElementById("demo").style.display = 'block';
}

function ocultar () { 
    document.getElementById("demo").innerHTML = "A continuación haciendo click en Informacion adicional podrán ver mis hobbies.";
    document.getElementById("demo").style.display = 'none';
}

function alternar () {
if (document.getElementById("demo").style.display == 'none'){
    mostrar ();
    } else {
        ocultar();
    }
}