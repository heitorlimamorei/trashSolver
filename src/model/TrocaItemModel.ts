export default class TrocaItemModel{
    #id:string;
    #nome:string;
    #descricao:string;
    #photourl:string;
    #quemcriou:string;
    #tipo:string;
    #trocado:boolean;
    #listadeinteresses: string[];
    #trocaRealizadaId: string;
    constructor(id:string,nome:string,descricao:string,photourl:string,quemcriou:string,tipo:string,trocado:boolean,listadeinteresses: string[], trocaRealizadaId:string){
        this.#id = id;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#photourl =photourl;
        this.#quemcriou = quemcriou;
        this.#tipo = tipo;
        this.#trocado = trocado;
        this.#listadeinteresses = listadeinteresses;
        this.#trocaRealizadaId = trocaRealizadaId;
    }
    static TrocaItemEmBraco(){
        return new TrocaItemModel(" "," "," "," "," "," ", false, ["","",""], " ")
    }
    get id():string{
        return this.#id;
    }
    get nome():string{
        return this.#nome;
    }
    get descricao():string{
        return this.#descricao;
    }
    get Photourl():string{
        return this.#photourl;
    }
    get quemcriou():string{
        return this.#quemcriou;
    }
    get tipo():string{
        return this.#tipo;
    }
    get trocado():boolean{
        return this.#trocado;
    }
    get listadeinteresses(): string[]{
        return this.#listadeinteresses;
    }
    get trocaRealizadaId(): string{
        return this.#trocaRealizadaId;
    }

}