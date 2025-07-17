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
    while (invitados.length >= 0) {
        if (!invitados.includes(buscar)){
            alert(`${buscar} no esta invitado a la fiesta.`)
            // return estaInvitado(); // Hay que descomentar esto para probar.
        }else if (invitados.includes(buscar)) {
            alert(`${buscar} está invitado a la fiesta!.`);
            invitados.pop(buscar);
            // return estaInvitado(); // Hay que descomentar esto para probar.
        } // Falla al ejecutar de nuevo la función porque el array se vuelve a foja cero.
    }
} // Esta haciendo cualquier cosa. Esta tardando 3 ciclos en ejecutar el pop porque el método a usar no es ese, hay que slicearlo y eliminar el elemento de ese índice.