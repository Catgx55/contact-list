function agregar(agregarContacto){
    contactos.push(agregarContacto);

}

function eliminar(eliminarContacto){
    contactos.pop(eliminarContacto);
}

function elimanar2(eliminarContacto1){
    contactos.shift(eliminarContacto1);
    return eliminarContacto1
}

function listaContactos(){
    for(let i = 0; i < contactos.length; i++){
        console.log(contactos[i]);
    }
}

const contactos = ["Cesar Trujillo", "Andy Trujillo", "Henry Trujillo", "Henry Giraldo",];
listaContactos();
console.log(" ");
agregar("Maria Torres");
listaContactos();