export default class PontoDeColetaBaseModel {
    #id: string;
    #nome:string;
    #criador: string;
    #localizacao: string;
    #tiposDeItens: string[];
    constructor(id: string, nome: string, criador: string, localizacao: string, tiposDeItens: string[]) {
        this.#id = id;
        this.#nome = nome;
        this.#criador = criador;
        this.#localizacao = localizacao;
        this.#tiposDeItens = tiposDeItens
    }
    static EmBranco(){
        return new PontoDeColetaBaseModel("","","","", [""])
    }
    get id(): string {
        return this.#id
    }
    get nome(): string {
        return this.#nome
    }
    get criador(): string {
        return this.#criador
    }
    get localizacao(): string {
        return this.#localizacao
    }
    get tiposDeItens():string[]{
        return this.#tiposDeItens
    }
}