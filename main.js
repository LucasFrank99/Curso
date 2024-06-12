function Game(nome, ano, nota) {
    this.nome = nome; 
    this.ano = ano; 
    this.nota = nota;
}

const jogo1 = new Game('death strading','2019' ,'10');
const jogo2 = new Game('Gow ragnarok', '2023' ,'8');
const jogo3 = new Game('Cyberpunk 2077', '2021' ,'9')

console.log(jogo1);
console.log(jogo2);
console.log(jogo3);