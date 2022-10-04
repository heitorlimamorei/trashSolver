export default class TrocasModel {
  #id: string;
  #nome: string;
  #trocaRealizadaId: string;
  #descricao: string;
  #listadeinteresses: string[];
  #tipo: string;
  #trocado: boolean;
  #quemcriou: string;
  #photourl: string;
  constructor(
    id: string,
    nome: string,
    trocaRealizadaId: string,
    descricao: string,
    listadeinteresses: string[],
    tipo: string,
    trocado: boolean,
    quemcriou: string,
    photourl: string
  ) {
    this.#id = id;
    this.#nome = nome;
    this.#trocaRealizadaId = trocaRealizadaId;
    this.#descricao = descricao;
    this.#listadeinteresses = listadeinteresses;
    this.#tipo = tipo;
    this.#trocado = trocado;
    this.#quemcriou = quemcriou;
    this.#photourl = photourl;
  }
  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  get trocaRealizadaId() {
    return this.#trocaRealizadaId;
  }
  get descricao() {
    return this.#descricao;
  }
  get listadeinteresses() {
    return this.#listadeinteresses;
  }
  get tipo() {
    return this.#tipo;
  }
  get trocado() {
    return this.#trocado;
  }
  get quemcriou() {
    return this.#quemcriou;
  }
  get photourl() {
    return this.#photourl;
  }
  toApi() {
    return {
      id: this.#id,
      nome: this.#nome,
      trocaRealizadaId: this.#trocaRealizadaId,
      descricao: this.#descricao,
      listadeinteresses: this.#listadeinteresses,
      trocado: this.#trocado,
      quemcriou: this.#quemcriou,
      photourl: this.#photourl,
      tipo: this.#tipo,
    };
  }
}
