'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Componentes
    wrapper.append(Header());
    wrapper.append(fichaUsuario());
    
    root.append(wrapper);
};

const state = {
    users: null
};

$( _ => {

    getJSON('https://randomuser.me/api/', (err, json) => {
        if (err) { return alert(err.message);}

        state.users = json.results[0];
        console.log(state.users);

        const root = $('.root');
        render(root);
    });

});