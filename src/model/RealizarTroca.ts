import axios from 'axios';
import baseUrl from './Variaveis';
interface TrocaRealizadaRespProps {
  id: string;
  emailCriador: string;
  emailInteressado: string;
  idDaTroca: string;
  intemDeInteresse: string;
  pontoDeColetaId: string;
}
interface PontoDeColetaData {
  id: string;
  nome:string;
  criador: string;
  localizacao: string;
  tiposDeItens: string[];
}
export default class RealizarTrocaModel {
  #id: string;
  #nome: string;
  #descricao: string;
  #quemcriou: string;
  #interessado:string;
  #pontoDeColetaId:string;
  constructor(id: string, nome: string, descricao: string, quemcriou: string, pontoDeColetaId: string, interessado:string) {
    this.#id = id;
    this.#nome = nome;
    this.#descricao = descricao;
    this.#quemcriou = quemcriou;
    this.#pontoDeColetaId = pontoDeColetaId;
    this.#interessado = interessado;
  }
  static realizarTrocaEmBraco(){
    return new RealizarTrocaModel(
        '',
        '',
        '',
        '',
        '',
        ''
    )
  }
  static async fromRealizarTrocaAPI(trocaRealizada:TrocaRealizadaRespProps){
    const trocaResp = await axios.get(`${baseUrl}/api/trocas/${trocaRealizada.idDaTroca}`)
    const trocaData = await trocaResp.data
    return new RealizarTrocaModel(
      trocaRealizada.id,
      await trocaData.nome,
      await trocaData.descricao,
      trocaRealizada.emailCriador,
      trocaRealizada.pontoDeColetaId,
      trocaRealizada.emailInteressado
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
  get pontoDeColetaId():string{
    return this.#pontoDeColetaId;
  }
  async getPontosDeColetaData(): Promise<PontoDeColetaData> {
    const resp = await axios.get(`${baseUrl}/api/pontodecoleta/${this.#pontoDeColetaId}`)
    return await resp.data
    }
  get interessado(): string {
    return this.#interessado;
  }
}
