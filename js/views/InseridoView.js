class InseridoView extends View {
    constructor(elemento) {
        super(elemento);
    }

    _template(inserido) {
            return `
        <table class="table table-hover table-bordered mt-5">
            <thead>
                <th>NOME</th>
                <th>PROVA 1</th>
                <th>PROVA 2</th>
                <th>PROVA FINAL</th>
                <th>MÉDIA</th>
                <th>SITUAÇÃO</th>
            </thead>

            <tbody>
                ${inserido.getItens().map(item => `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.nota1}</td>
                        <td>${item.nota2}</td>
                        <td>${item.nota3}</td>
                        <td>${item.getMedia()}</td>
                        <td>${item.getAprovacao()}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3">Média Total</td>
                <td>
                    ${(inserido.getItens().reduce((total, item) => 
                                                total + item.getMedia(), 0.0)).toFixed(2)}
                </td>
            </tfoot>
        </table>
        `
    }

    update(inserido) {
        this._elemento.innerHTML =
            this._template(inserido);
    }
}