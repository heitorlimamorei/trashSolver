export default class PontoDeColetaItemModel {
    #id: string;
    #nome: string;
    #tipo: string;
    #pontoId: string
    #quempostou: string;
    #photourl: string;
    #descricao: string;
    #coletado:boolean;
    constructor(id: string, nome: string, tipo: string, pontoId: string, quempostou: string,photourl: string, descricao: string, coletado:boolean) {
        this.#id = id;
        this.#nome = nome;
        this.#tipo = tipo;
        this.#pontoId = pontoId;
        this.#quempostou = quempostou;
        this.#photourl = photourl;
        this.#descricao = descricao;
        this.#coletado =coletado;
    }
    static emBraco(){
        return new PontoDeColetaItemModel("","","","","","","", false)
    }
    get id():string{
        return this.#id;
    }
    get nome():string{
        return this.#nome;
    }
    get tipo():string{
        return this.#tipo;
    }
    get pontoId():string{
        return this.#pontoId;
    }
    get quempostou():string{
        return this.#quempostou;
    }
    get photourl():string{
        return this.#photourl;
    }
    get descricao():string{
        return this.#descricao;
    }
    get coletado():boolean{
        return this.#coletado;
    }
}