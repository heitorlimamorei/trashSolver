import PontoDeColetaItemModel from "./PontoItem";
import axios from "axios";
interface PontoPromisse {
  id: string;
  nome: string;
  criador: string;
  localizacao: string;
  tiposDeItens: string[];
}
interface ItemPromisse {
  id: string;
  nome: string;
  tipo: string;
  pontoId: string;
  quempostou: string;
  photourl: string;
  descricao: string;
  coletado: boolean;
}
export default class PontoDeColetaCompostaModel {
  // base
  #id: string;
  #nome: string;
  #criador: string;
  #localizacao: string;
  #tiposDeItens: string[];
  // itens
  #listaDeItens: PontoDeColetaItemModel[];
  constructor(
    id: string,
    nome: string,
    criador: string,
    localizacao: string,
    tiposDeItens: string[],
    listaDeItens: PontoDeColetaItemModel[]
  ) {
    this.#id = id;
    this.#nome = nome;
    this.#criador = criador;
    this.#localizacao = localizacao;
    this.#tiposDeItens = tiposDeItens;
    this.#listaDeItens = listaDeItens;
  }
  static emBraco() {
    return new PontoDeColetaCompostaModel(
      "",
      "",
      "",
      "",
      [""],
      [PontoDeColetaItemModel.emBraco()]
    );
  }
  itensFromApi(itens: ItemPromisse[]): PontoDeColetaItemModel[] {
    return itens.map((item) => {
      return new PontoDeColetaItemModel(
        item.id,
        item.nome,
        item.tipo,
        item.pontoId,
        item.quempostou,
        item.photourl,
        item.descricao,
        item.coletado
      );
    });
  }
  static staticItensFromApi(itens: ItemPromisse[]): PontoDeColetaItemModel[] {
    return itens.map((item) => {
      return new PontoDeColetaItemModel(
        item.id,
        item.nome,
        item.tipo,
        item.pontoId,
        item.quempostou,
        item.photourl,
        item.descricao,
        item.coletado
      );
    });
  }
  static async getById(id: string): Promise<PontoDeColetaCompostaModel> {
    const PontoResp = await axios.get(
      `http://localhost:3000/api/pontodecoleta/${id}`
    );
    const PontoData: PontoPromisse = await PontoResp.data;
    const ItensResp = await axios.get(
      `http://localhost:3000/api/pontodecoleta/${id}/itens`
    );
    const ItensData: ItemPromisse[] = await ItensResp.data;
    let itensNormalizados = this.staticItensFromApi(ItensData);
    return new PontoDeColetaCompostaModel(
      PontoData.id,
      PontoData.nome,
      PontoData.criador,
      PontoData.localizacao,
      PontoData.tiposDeItens,
      itensNormalizados
    );
  }
  async loadPontoDeColeta(): Promise<PontoDeColetaCompostaModel> {
    const PontoResp = await axios.get(
      `http://localhost:3000/api/pontodecoleta/${this.#id}`
    );
    const PontoData: PontoPromisse = await PontoResp.data;
    const ItensResp = await axios.get(
      `http://localhost:3000/api/pontodecoleta/${this.#id}/itens`
    );
    const ItensData: ItemPromisse[] = await ItensResp.data;
    let itensNormalizados = this.itensFromApi(ItensData);
    return new PontoDeColetaCompostaModel(
      PontoData.id,
      PontoData.nome,
      PontoData.criador,
      PontoData.localizacao,
      PontoData.tiposDeItens,
      itensNormalizados
    );
  }
  async loadItens(): Promise<PontoDeColetaCompostaModel> {
    const ItensResp = await axios.get(
      `http://localhost:3000/api/pontodecoleta/${this.#id}/itens`
    );
    const ItensData: ItemPromisse[] = await ItensResp.data;
    let itensNormalizados = this.itensFromApi(ItensData);
    return new PontoDeColetaCompostaModel(
      this.#id,
      this.#nome,
      this.#criador,
      this.#localizacao,
      this.#tiposDeItens,
      itensNormalizados
    );
  }
  #carregarItemsViaArrayInterno(items) {
    return new PontoDeColetaCompostaModel(
      this.#id,
      this.#nome,
      this.#criador,
      this.#localizacao,
      this.#tiposDeItens,
      items
    );
  }
  async coletar(id: string, coletadoPor): Promise<PontoDeColetaCompostaModel> {
    let item: ItemPromisse = this.#listaDeItens.find((it) => it.id === id);
    const resp = await axios.put(
      `http://localhost:3000/api/pontodecoleta/${this.#id}/itens`,
      {
        id: item.id,
        nome: item.nome,
        tipo: item.tipo,
        pontoId: item.pontoId,
        quempostou: item.quempostou,
        photourl: item.photourl,
        descricao: item.descricao,
        coletado: true,
        coletadoPor: coletadoPor,
        dataDaColeta: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
      }
    );
    return this.#carregarItemsViaArrayInterno(await resp.data);
  }
  async postar(item): Promise<PontoDeColetaCompostaModel> {
    const resp = await axios.post(
      `http://localhost:3000/api/pontodecoleta/${this.#id}/itens`,
      {
        nome: item.nome,
        tipo: item.tipo,
        pontoId: item.pontoId,
        quempostou: item.quempostou,
        photourl: item.photourl,
        descricao: item.descricao,
        coletado: false
      }
    );
    return this.#carregarItemsViaArrayInterno(await resp.data);
  }
  async deletar(id: string): Promise<PontoDeColetaCompostaModel> {
    const resp = await axios.delete(
      `http://localhost:3000/api/pontodecoleta/${this.#id}/itens/${id}`
    );
    return this.#carregarItemsViaArrayInterno(await resp.data);
  }
  get id(): string {
    return this.#id;
  }
  get nome(): string {
    return this.#nome;
  }
  get listaDeTipos(): string[] {
    return this.#tiposDeItens;
  }
  get criador(): string {
    return this.#criador;
  }
  get localizacao(): string {
    return this.#localizacao;
  }
  get listaDeItens(): PontoDeColetaItemModel[] {
    return this.#listaDeItens;
  }
}
