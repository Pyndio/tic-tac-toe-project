# Tic-Tac-Toe em React

## Descrição
Jogo da velha (Tic-Tac-Toe) feito em React para a disciplina de Coding (AV2 – Revisão 1).
Dois jogadores (X e O) alternam jogadas num tabuleiro 3x3; o jogo identifica vitória e empate e pode ser reiniciado.

## Tecnologias
- React 18
- JavaScript (ES6+)
- Create React App (react-scripts)
- Jest + React Testing Library (testes automatizados)
- Git e GitHub

## Como executar
Requisitos: Node.js 18+ e npm.

```bash
git clone URL_DO_REPOSITORIO
cd coding-tictactoe
npm install
npm start
```
O jogo abre em http://localhost:3000. Testes automatizados: `npm test`.

## Como jogar
1. X começa; o painel mostra quem é o próximo jogador.
2. Clique numa casa vazia para jogar. Casas ocupadas não podem ser sobrescritas.
3. Vence quem completar uma linha, coluna ou diagonal. Se as 9 casas forem preenchidas sem vencedor, é empate.
4. Após o fim da partida não há novas jogadas. Use **Reiniciar jogo** para recomeçar.

## Estrutura do projeto
```
src/
├── App.js / App.css
├── index.js / index.css
├── components/
│   ├── Square/   (casa individual)
│   ├── Board/    (tabuleiro 3x3)
│   └── Game/     (estado, status, reiniciar)
└── utils/
    └── calculateWinner.js
```

## Equipe
| Integrante | Papel | Contribuições |
|------------|-------|---------------|
| (nome) | Scrum Master | (ex.: organizou tarefas/Issues, revisou README) |
| (nome) | Desenvolvedor | (ex.: componentes Square e Board) |
| (nome) | Desenvolvedor | (ex.: componente Game e calculateWinner) |
| (nome) | Testador | (ex.: testes T01–T05) |
| (nome) | Testador | (ex.: testes T06–T09) |

## Processo Git
- `main`: versão estável.
- Cada desenvolvedor trabalha em branch própria (ex.: `feature-square-board`, `feature-game-logic`).
- Commits pequenos com mensagens descritivas.
- Integração à `main` via Pull Request, revisado por outro integrante.

## Testes
| Teste | Resultado | Observações |
|-------|-----------|-------------|
| T01 Abrir o jogo | (passou/falhou) | |
| T02 Realizar uma jogada | | |
| T03 Jogadas alternadas | | |
| T04 Posição ocupada | | |
| T05 Sequência vencedora | | |
| T06 Continuar após vitória | | |
| T07 Reiniciar o jogo | | |
| T08 Empate | | |
| T09 Atualizar a página | | |

Defeitos encontrados: (descrição, como reproduzir, corrigido?)

## Capturas de tela
(adicione prints em `docs/` e referencie aqui)
