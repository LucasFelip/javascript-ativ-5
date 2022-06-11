class Aluno {
    constructor(nome, nota1, nota2, nota3) {
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._nota3 = nota3;
        this._media = (this._nota1 * this._nota2 * this._nota3) / 3;

        Object.freeze(this);
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

    get media() {
        return this._media;
    }

    get aprovação() {
        if (this._media >= 7) {
            return "Aprovado"
        }
        return "Resprovado"
    }
}