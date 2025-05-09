# 🏆 Classificador de Ranqueadas - Desafio JavaScript

Este é um projeto de estudo em JavaScript, desenvolvido durante meu aprendizado na plataforma DIO. O objetivo do programa é calcular o saldo de vitórias de um jogador e classificar seu ranque com base nesse saldo, simulando um sistema semelhante ao de jogos competitivos.

---

## 🚀 Funcionalidades

- Solicita do usuário o número de vitórias e derrotas;
- Calcula o saldo de vitórias (`vitórias - derrotas`);
- Retorna o ranque do herói com base no saldo calculado;
- Exibe a mensagem final no console com o saldo e o ranque obtido.

---

## 🛠️ Tecnologias utilizadas

- JavaScript (puro)
- Função `prompt()` para entrada de dados (necessário rodar em ambiente compatível com browser ou usar pacote `prompt-sync` para Node.js)

---

## 📋 Lógica de Classificação

| Saldo de Vitórias | Ranque     |
|-------------------|------------|
| 0 - 10            | Ferro      |
| 11 - 20           | Bronze     |
| 21 - 50           | Prata      |
| 51 - 80           | Ouro       |
| 81 - 90           | Diamante   |
| 91 - 100          | Lendário   |
| 101+              | Imortal    |

---

## 💡 Como executar

Para rodar o código em um navegador, basta colá-lo dentro de uma tag `<script>` em um arquivo HTML, ou executá-lo em um console de navegador.
