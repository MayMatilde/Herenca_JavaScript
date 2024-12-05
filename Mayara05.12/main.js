import Fornecedor from "./Fornecedor.js";
import FornecedorPessoa from "./FornecedorPessoa.js";

//criando objeto para manipular atributos e métodos da classe Fornecedor
const fornecedor1 = new Fornecedor("Mayara","(11)4002-8922")
console.log(`Dados do Fornecedor: Nome:${fornecedor1.getNome()} Fone:${fornecedor1.getFone()}`);

//criando objeto para trabalhar com FornecedorPessoa
const fornecedorPessoa1 = new FornecedorPessoa("Galinha do Grau", "(11)6234-2422", "11.345.2323-2", "734.728.732-21");
console.log(`Dados do Fornecedor Pessoa: Nome:${fornecedorPessoa1.getFone()} Fone:${fornecedorPessoa1.getFone()} CPF:${fornecedorPessoa1.getRg()} RG:${fornecedorPessoa1.getCpf()}`)