class Registra {
    constructor() {
        this._itens = [];
    }

    adiciona(item) {
        this._itens.push(item);
    }

    getItens() {
        return [].concat(this._itens);
    }
}