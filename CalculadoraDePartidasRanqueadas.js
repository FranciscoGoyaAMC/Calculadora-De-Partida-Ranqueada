function CalculaRanqueada(vit, der) {
    let saldo = vit - der;
    let rank = "";

    if (saldo <= 10) {
        rank = "Ferro";
    } else if (saldo <= 20) {
        rank = "Bronze";
    } else if (saldo <= 50) {
        rank = "Prata";
    } else if (saldo <= 80) {
        rank = "Ouro";
    } else if (saldo <= 90) {
        rank = "Diamante";
    } else if (saldo <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return { saldo, rank };
}

let vitoria = parseInt(prompt("Digite a quantidade de vitórias: "));
let derrota = parseInt(prompt("Digite a quantidade de derrotas: "));

let resultado = CalculaRanqueada(vitoria, derrota);
let mensagem = `O herói tem saldo de ${resultado.saldo} e está no rank ${resultado.rank}`;

console.log(mensagem);
