class RegistraView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(registra) {
            return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>NOTA 1</th>
                     <th>NOTA 2</th>
                    <th>NOTA 3</th>
                    <th>MEDIA</th>
                    <th>SITUAÇÃO</th>
                </tr>
            </thead>
            <tbody>
                ${registra.getItens().map(item => `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.nota1}</td>
                        <td>${item.nota2}</td>
                        <td>${item.nota3}</td>
                        <td>${item.getMedia()}</td>
                        <td>${item.getAprovacao()}</td>             
                    </tr>
               `).join('')}
            <tbody>
            <tfoot>
            </tfoot>
        </table>`;
    }

    update(registra) {
        this._elemento.innerHTML = 
                      this._template(registra);
    }
}