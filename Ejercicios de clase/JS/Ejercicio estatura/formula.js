function estatura() {
    // De esta manera obtenemos los valores que son entregados por los inputs
    var talla = document.getElementById("talla").value
    var edad = document.getElementById("edad").value
    // Con alert hacemos que muestre el resultado
    alert ((talla * 5) + (edad * 6) + 70)
}

