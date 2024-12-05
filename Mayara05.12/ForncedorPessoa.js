import Fornecedor from "./Fornecedor";

class FornecedorPessoa extends Fornecedor{
    //construtor
    constructor(nome="sei la",fone="(00)0000-0000",rg="00.000.0000",cpf="000.000.000-00"){
        super(nome,fone);
        this.rg = rg;
        this.cpf = cpf;
    }
    //setters e getters
    setRg(rg){
        this.rg = rg;
    }
    getRg(){
        return this.rg;
    }
    setCpf(cpf){
        this.cpf = cpf;
    }
    getCpf(){
        return this.cpf;
    }
}

export default FornecedorPessoa;