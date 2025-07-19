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
    let buscar = prompt("Ingrese el nombre: ")
    while (invitados.length > 1) {
        if (!invitados.includes(buscar)){
            alert(`${buscar} no esta invitado a la fiesta.`)
            console.log(invitados);
            estaInvitado();
        }else if (invitados.includes(buscar)) {
            alert(`${buscar} está invitado a la fiesta!.`);
            x = invitados.indexOf(buscar)
            invitados.splice(x, 1); // Pa mi el problema es esto. Aguante python...
            console.log(invitados);
            estaInvitado();
        }
    }
    alert("No hay más invitados para buscar."); // Esto se ejecuta la misma cantidad de veces que se eliminó un invitado pese a estar fuera del ciclo. Why???????
    console.log(invitados);
}

armarLista();
estaInvitado();
console.log(invitados.length);

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