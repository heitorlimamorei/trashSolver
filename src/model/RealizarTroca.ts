export default class RealizarTrocaModel {
  #id: string;
  #nome: string;
  #descricao: string;
  #quemcriou: string;
  constructor(id: string, nome: string, descricao: string, quemcriou: string) {
    this.#id = id;
    this.#nome = nome;
    this.#descricao = descricao;
    this.#quemcriou = quemcriou;
  }
  static realizarTrocaEmBraco(){
    return new RealizarTrocaModel(
        '',
        '',
        '',
        ''
    )
  }
  get id(): string {
    return this.#id;
  }
  get nome(): string {
    return this.#nome;
  }
  get descricao(): string {
    return this.#descricao;
  }
  get quemcriou(): string {
    return this.#quemcriou;
  }
}
