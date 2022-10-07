import TipoPersonalizadoModel from "./TipoPersonalizadoModel"

export default class TiposPersonalizadosModel{
    #arrayDeTipos: TipoPersonalizadoModel[]
    constructor(arrayDeTipos: TipoPersonalizadoModel[]){
        this.#arrayDeTipos = arrayDeTipos
    }
    static criarArrayPadrao(){
        let tiposLista = ["Computador", "Motores eletricos", "Transistor", "Impressora", "Controle"]
        return new TiposPersonalizadosModel(tiposLista.map((tipo, i)=>{
            return new TipoPersonalizadoModel(tipo, i)
        }))
    }
    static carregarArrayExistente(array: string[]){
        return new TiposPersonalizadosModel(array.map((tipo, i)=>{
            return new TipoPersonalizadoModel(tipo, i)
        }))
    }
    get arrayDeTipos(){
        return this.#arrayDeTipos
    }
    setNewTipo(tipo:string){
        let tipos = this.#arrayDeTipos
        let nextId = tipos.length
        tipos.push(new TipoPersonalizadoModel(tipo, nextId))
        return new TiposPersonalizadosModel(tipos)
    }
    deleteTipo(id:any){
        let tiposFiltrado = this.#arrayDeTipos.filter(tipo => tipo.id !== id)
        return new TiposPersonalizadosModel(tiposFiltrado)
    }
    toFirebase(){
        return this.#arrayDeTipos.map(tipo => tipo.nome)
    }
}