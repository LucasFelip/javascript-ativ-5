class InseridoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputNota1 = $('#nota1');
        this._inputNota2 = $('#nota2');
        this._inputNota3 = $('#nota3');
        this._inputFrequencia = $('#frequencia');

        // model
        this._inserido = new Inserido();

        // view
        this._inseridoView = new InseridoView($('#js-alunoView'));
        this._inseridoView.update(this._inserido);
    }

    adiciona(event) {
        event.preventDefault();

        let item = this._criaAluno();
        this._inserido.adiciona(item);
        this._inseridoView.update(this._inserido);
    }

    _criaAluno() {
        return new Aluno(
            this._inputNome.value,
            this._inputNota1.value,
            this._inputNota2.value,
            this._inputNota3.value,
            this._inputFrequencia.value,
        );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputNota1.value = '';
        this._inputNota2.value = '';
        this._inputNota3.value = '';
        this._inputFrequencia.value = '';

        this._inputNome.focus();
    }
}