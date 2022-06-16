class Aluno {
    constructor(nome, nota1, nota2, nota3, ch, faltas) {
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._nota3 = nota3;
        this._ch = ch;
        this._faltas = faltas;

        Object.freeze(this);
    }

    getMedia() {
        return (Number(this._nota1) + Number(this._nota2)) / 2
    }

    getMediaFinal() {
        let media = this.getMedia()
        if (media < 7 && media >= 3)
            return (media + Number(this._nota3)) / 2
        else
            return media
    }

    getFrequencia() {
        return ((Number(this._faltas) * 100) / Number(this._ch))
    }

    getAprovacao() {
        let media = this.getMediaFinal()
        let frequencia = this.getFrequencia();
        if (frequencia > 25)
            return "Reprovado por faltas"
        else {
            if (media >= 7)
                return "Aprovado"
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