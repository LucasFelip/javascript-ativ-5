class Aluno {
    constructor(nome, nota1, nota2, nota3) {
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._nota3 = nota3;

        Object.freeze(this);
    }

    getMedia() {
        return (this._nota1 * this._nota2 * this._nota3) / 3;
    }

    getAprovacao() {
        if (this._media > 7) {
            return "Aprovado"
        } else if (this._media >= 3 && this._media <= 7) {
            return "Prova final"
        }
        return "Reprovado"
    }

    get nome() {
        return this._nome;
    }

    get nota1() {
        return this._nota1;
    }

    get nota2() {
        return this._nota2;
    }

    get nota3() {
        return this._nota3;
    }
}