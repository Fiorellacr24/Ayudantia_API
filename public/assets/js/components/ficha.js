'use strict';

const fichaUsuario = () => {
    const parent = $('<div class="container"></div>');
    const ficha  = $('<div class="ficha"></div>');
    const nombre = $('<span>' + state.users.name.first +'</span><br>');
    const genero = $('<span>' + state.users.gender + '</span><br>');
    const ciudad = $('<span>'+ state.users.location.city +'</span><br>');
    const street = $('<span>'+ state.users.location.street +'</span><br>');
    const email  = $('<span>'+ state.users.email +'</span><br>');
    const cel    = $('<span>'+ state.users.cell +'</span><br>');

    ficha.append(nombre);
    ficha.append(genero);
    ficha.append(ciudad);
    ficha.append(street);
    ficha.append(email);
    ficha.append(cel);
    parent.append(ficha);
    
    return parent;
};

