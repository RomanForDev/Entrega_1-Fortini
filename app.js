// Simulador de listado para una fiesta
// Simulador de calculadora para carrito de compras
// 

// listado fiesta

let invitados = [];

function armarLista() {
    let cantidad = parseInt(prompt("Indique cuantas personas va a invitar a la fiesta: "))
    for (let i = 0; i < cantidad; i++) {
        nombre = prompt("Ingrese el nombre de los invitados: ")
        invitados.push(nombre);
    }
    return console.log(invitados);
}

// function estaInvitado() {
//     let buscar = prompt("Ingrese el nombre: ")
//     if (invitados.includes(buscar)) {
//         alert(`${buscar} está invitado a la fiesta!.`)
//     }else {
//         alert(`${buscar} no esta invitado a la fiesta.`)
//     }
// }

armarLista();
estaInvitado();

function estaInvitado() {
    let buscar = prompt("Ingrese el nombre: ")
    while (invitados.length > 0) {
        if (invitados.includes(buscar)) {
            alert(`${buscar} está invitado a la fiesta!.`);
            invitados.pop(buscar);
        }else{
            alert(`${buscar} no esta invitado a la fiesta.`);
        } // Falla el else, queda en bucle hasta que completa el lenght del array.
    }
}