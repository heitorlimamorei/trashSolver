export class HistoryEvent {
  #id: string;
  #pontoId: string;
  #itemId: string;
  #tipo: string;
  #realizadoPor: string;
  #data: any;
  #descricao: string;
  constructor(
    id: string,
    pontoId: string,
    itemId: string,
    tipo: string,
    realizadoPor: string,
    data: any,
    descricao: string
  ) {
    this.#id = id;
    this.#pontoId = pontoId;
    this.#itemId = itemId;
    this.#tipo = tipo;
    this.#realizadoPor = realizadoPor;
    this.#data = data;
    this.#descricao = descricao;
  }
  static trocaEventEmBranco() {
    return new trocaEvent(
      "",
      "",
      "",
      "",
      "",
      {
        seconds: 0,
        nanoseconds: 0,
      },
      ""
    );
  }
  getFormetedDate() {
    const dataFormatada = new Date(this.#data.seconds * 1000);
    return {
      day: dataFormatada.getDay(),
      month: dataFormatada.getMonth(),
      year: dataFormatada.getFullYear(),
    }
  }
  get id(): string {
    return this.#id;
  }
  get pontoId(): string {
    return this.#pontoId;
  }
  get itemId(): string {
    return this.#itemId;
  }
  get tipo(): string {
    return this.#tipo;
  }
  get realizadoPor(): string {
    return this.#realizadoPor;
  }
  get data(): any {
    return this.#data;
  }
  get descricao(): string {
    return this.#descricao;
  }
}
export class trocaEvent {
  #id: string;
  #pontoId: string;
  #trocaId: string;
  #tipo: string;
  #realizadoPor: string;
  #data: any;
  #descricao: string;
  constructor(
    id: string,
    pontoId: string,
    trocaId: string,
    tipo: string,
    realizadoPor: string,
    data: any,
    descricao: string
  ) {
    this.#id = id;
    this.#pontoId = pontoId;
    this.#trocaId = trocaId;
    this.#tipo = tipo;
    this.#realizadoPor = realizadoPor;
    this.#data = data;
    this.#descricao = descricao;
  }
  static trocaEventEmBranco() {
    return new trocaEvent(
      "",
      "",
      "",
      "",
      "",
      {
        seconds: 0,
        nanoseconds: 0,
      },
      ""
    );
  }
  getFormetedDate() {
    const dataFormatada = new Date(this.#data.seconds * 1000);
    return {
      day: dataFormatada.getDate(),
      month: dataFormatada.getMonth()+1,
      year: dataFormatada.getFullYear(),
    }
  }
  get id(): string {
    return this.#id;
  }
  get pontoId(): string {
    return this.#pontoId;
  }
  get trocaId(): string {
    return this.#trocaId;
  }
  get tipo(): string {
    return this.#tipo;
  }
  get realizadoPor(): string {
    return this.#realizadoPor;
  }
  get data(): any {
    return this.#data;
  }
  get descricao(): string {
    return this.#descricao;
  }
}
