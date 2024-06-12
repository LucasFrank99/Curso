
function Game(nome, ano, nota) {
    this.nome = nome;
    this.ano = ano;
    this.nota = nota;


    this.detalhes = function() {
        return `${this.nome} foi lançado em ${this.ano} e tem uma nota de ${this.nota}`;
    };
}


function Kojima(nome, ano, nota, tamanho) {
    Game.call(this, nome, ano, nota); 
    this.tamanho = tamanho;


    this.tamanhoHoras = function() {
        return `A campanha possui ${this.tamanho} horas`;
    };
}

function RPG(nome, ano, nota, companions) {
    Game.call(this, nome, ano, nota); 
    this.companions = companions;

    this.companionsNumero = function() {
        return `O número de companheiros é ${this.companions}`;
    };
}


function Porrada(nome, ano, nota, personagens) {
    Game.call(this, nome, ano, nota); 
    this.personagens = personagens;

    this.personagensNumero = function() {
        return `O número de personagens é ${this.personagens}`;
    };
}


const jogo1 = new Kojima('Death Stranding', '2019', '10', '52');
const jogo2 = new RPG('Baldurs Gate 3', '2023', '10', '10');
const jogo3 = new Porrada('Multiversus', '2024', '8', '24');

console.log(jogo1.detalhes()); 
console.log(jogo1.tamanhoHoras()); 

console.log(jogo2.detalhes()); 
console.log(jogo2.companionsNumero()); 

console.log(jogo3.detalhes()); 
console.log(jogo3.personagensNumero());
