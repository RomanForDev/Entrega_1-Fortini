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
    while (invitados.length > 0) { //chequear el número porque esta haciendo mal los ciclos.
        if (!invitados.includes(buscar)){
            alert(`${buscar} no esta invitado a la fiesta.`)
            console.log(invitados);
            return estaInvitado(); // Hay que descomentar esto para probar.
        }else if (invitados.includes(buscar)) {
            alert(`${buscar} está invitado a la fiesta!.`);
            x = invitados.indexOf(buscar)
            invitados.splice(x, 1);
            console.log(invitados);
            return estaInvitado(); // Hay que descomentar esto para probar.
        // } else if (invitados.length < 1) {
        //     alert("Ya han ingresado todos los invitados!")
        //     break;
        // }
    }} // ver si con un do while no queda mejor. No esta ejecutando el último else if por el número en línea 33 pero la función se corta igual
}

/// prueba con do while ///

// function estaInvitado() {
//     let buscar = prompt("Ingrese el nombre: ")
//     while (invitados.length > 0) { //chequear el número porque esta haciendo mal los ciclos.
//         if (!invitados.includes(buscar)){
//             alert(`${buscar} no esta invitado a la fiesta.`)
//             return estaInvitado(); // Hay que descomentar esto para probar.
//         }else if (invitados.includes(buscar)) {
//             alert(`${buscar} está invitado a la fiesta!.`);
//             x = invitados.indexOf(buscar)
//             invitados.splice(x, 1);
//             return estaInvitado(); // Hay que descomentar esto para probar.
        // } else {
        //     alert("Ya han ingresado todos los invitados!")
        //     break;
//         }
//     } // ver si con un do while no queda mejor. No esta ejecutando el último else if por el número en línea 33 pero la función se corta igual
// }

// function estaInvitado() {
//     let buscar = prompt("Ingrese el nombre: ")
//     do {
//         if (!invitados.includes(buscar)){
//             alert(`${buscar} no esta invitado a la fiesta.`)
//             return estaInvitado(); // Hay que descomentar esto para probar.
//         }else if (invitados.includes(buscar)) {
//             alert(`${buscar} está invitado a la fiesta!.`);
//             x = invitados.indexOf(buscar)
//             invitados.splice(x, 1);
//             return estaInvitado()
//         }} while (invitados.length > 0)
//             alert("Ya han ingresado todos los invitados!")
//     }

// armarLista();
// estaInvitado();
console.log(invitados.length);