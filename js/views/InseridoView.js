class InseridoView extends View {
    constructor(elemento) {
        super(elemento);
    }

    _template(inserido) {
            return `
        <table class="table table-hover table-bordered mt-3">
            <thead>
                <th>NOME</th>
                <th>PROVA 1</th>
                <th>PROVA 2</th>
                <th>SITUAÇÃO</th>
                <th>PROVA FINAL</th>
                <th>MÉDIA</th>
            </thead>

            <tbody>
                ${inserido.getItens().map(item => `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.nota1}</td>
                        <td>${item.nota2}</td>
                        <td>${item.getAprovacao()}</td>
                        <td>${item.nota3}</td>
                        <td>${item.getMediaFinal()}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="5">Média Total</td>
                <td>
                    ${inserido.getItens().reduce((total, item) => 
                                                item.getMediaFinal() + total, 0.0)}
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