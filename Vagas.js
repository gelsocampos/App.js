class ListaDeVagas {

    constructor(empresa, vaga, requisitos, salario, localizacao) {
        this.vagas = [

            {
                this.empresa: empresa,
                this.vaga: vaga,
                this.requisitos: requisitos,
                this.salario: salario,
                this.localizacao: localizacao
            }
            exibirDetalhes() {
                console.log(
                    `Empresa: ${this.empresa}, Vaga: ${this.vaga}, Requisitos: ${this.requisitos.join(
        ];
    }

    adicionarVaga(vaga) {
        
        this.vagas.push(vaga);
    }

    removerVaga(vaga) {
        this.vagas = this.vagas.filter(item => item !== vaga);
    }

    listarVagas() {
        return this.vagas;
    }
}

module.exports = ListaDeVagas;