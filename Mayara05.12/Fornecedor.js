class Fornecedor {

    //método construtor
    constructor(nome="Sei la", fone="(00)0000-0000"){
        this.nome = nome;
        this.fone = fonw;   //atributo = this.etc
    }
    //métodos setters e getters
    // -----------------------//
    //Setters recebem valores do user caso precisem deles
    setNome(nome){
        this.nome = nome;
    }
    setFone(fone){
        this.fone = fone;
    }
    //Getters retornam os valores dos setters 
    getNome(){
        return this.nome;
    }
    getFone(){
        return this.fone;
    }
}

//exportabdo a classe para usá-la em outros lugares
export default Fornecedor;