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


function estaInvitado() {
    while (invitados.length > 0) {
        let buscar = prompt("Ingrese el nombre: ")
        if (!invitados.includes(buscar)){
            alert(`${buscar} no esta invitado a la fiesta.`)
            console.log(invitados);
        }else {
            alert(`${buscar} está invitado a la fiesta!.`);
            x = invitados.indexOf(buscar)
            invitados.splice(x, 1); // Splice no está en el contenido, otra solución era mandarlo al principio o final del array y eliminarlo con shift o pop.
            console.log(invitados);
        }
    }
    alert("No hay más invitados para buscar."); 
}

armarLista();
estaInvitado();

// Otra forma pero sin eliminar los elementos del array:

// function estaInvitado() {
//     let buscar = prompt("Ingrese el nombre: ")
//     if (invitados.includes(buscar)) {
//         alert(`${buscar} está invitado a la fiesta!.`)
//     }else {
//         alert(`${buscar} no esta invitado a la fiesta.`)
//     }
// }

// armarLista();
// estaInvitado();