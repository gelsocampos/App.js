class Candidato {
  constructor(nome, áreaDeInteresse, habilidades, experiencia) {
    this.nome = nome;
    this.áreaDeInteresse = áreaDeInteresse;
    this.habilidades = habilidades;
    this.experiencia = experiencia;
  }

  exibirDetalhes() {
    console.log(
      `Candidato: ${this.nome}, área de Interesse: ${this.áreaDeInteresse}, Habilidades: ${this.habilidades.join(", ")}, Experiência: ${this.experiencia} anos.`
    );
  }
}



module.exports = Candidato;