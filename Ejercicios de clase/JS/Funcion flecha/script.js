document.addEventListener('DOMContentLoaded',function(){
    const formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", function(evnt){
        evnt.preventDefault(); //Esto evita que el formulario se reenvie y se recargue la pagina
        const numero = document.getElementById('numero').value;
        const resultado = factorial(numero);
        const parrafoResultado = document.getElementById('miParrafo');
        parrafoResultado.textContent= `El resultado es ${resultado}`;
    });
})

const factorial = (x) => {
    fact = 1;
    for (var i =1; i<= x; i++){
        fact=fact*i;
    }
    return fact;
};

function factorial2(n){
    if (n==0 || n==1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial2(4))