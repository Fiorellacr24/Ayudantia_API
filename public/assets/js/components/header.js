'use strict';

const Header = () => {
    const header = $('<header><div class="container"></div></header>');
    const title = $('<h1 class="align-center">Ficha</h1>');

    header.append(title);

    return header;
}