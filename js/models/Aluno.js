class Aluno {
    constructor(nome, nota1, nota2, nota3, frequencia) {
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._nota3 = nota3;
        this._frequencia = frequencia;

        Object.freeze(this);
    }

    getMedia() {
        return (Number(this._nota1) + Number(this._nota2)) / 2
    }

    getAprovacao() {
        let media = this.getMedia()
        if (this._frequencia < 75)
            return "Reprovado por faltas"
        else {
            if (media >= 7)
                return "Aprovado"
            else if (media < 7 && media >= 3)
                return "Prova final"
            else
                return "Reprovado"
        }
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