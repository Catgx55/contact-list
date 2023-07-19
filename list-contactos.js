function agregar(agregarContacto){
    console.log("Agregando contatos: ");
    contactos.push(agregarContacto);
    //console.log("__________________________________ ");
}


function eliminar(agregarContacto){
    console.log("Eliminado Contactos: ");
    let index = contactos.indexOf(agregarContacto);
    if(index !== -1){
        contactos.splice(index,1);
    }
    //console.log("__________________________________ ");
}

function listaContactos(){
    console.log("Lista contactos: ");
    for(let i = 0; i < contactos.length; i++){
        console.log(i+1,". ", contactos[i]);
    }
    console.log("__________________________________ ");
}

const contactos = ["Cesar Trujillo", "Andy Trujillo", "Henry Trujillo", "Henry Giraldo",];

listaContactos()
agregar("Maria Torres");
listaContactos()
eliminar("Henry Trujillo");
listaContactos();