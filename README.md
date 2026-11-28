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
git clone https://github.com/Pyndio/tic-tac-toe-project.git
cd tic-tac-toe-project
npm install
npm start
```
O jogo abre em http://localhost:3000. Testes automatizados: `npm test`.

## Como jogar
1. X começa; o painel mostra quem é o próximo jogador.
2. Clique numa casa vazia para jogar. Casas ocupadas não podem ser sobrescritas.
3. Vence quem completar uma linha, coluna ou diagonal. Se as 9 casas forem preenchidas sem vencedor, é empate.
4. Após o fim da partida não há novas jogadas. Use **Reiniciar jogo** para recomeçar.
5. Quando alguém vence, as 3 casas da sequência vencedora ficam iluminadas e aparece uma tela de vencedor com os botões **Jogar novamente** e **Ver tabuleiro** (para fechar a tela e ver as casas iluminadas).

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
| Pedro Pereira (01927476) | Scrum Master, Desenvolvedor 1, Testador 1 | Estrutura inicial do projeto (componentes, lógica, testes), README base, organização das tarefas e revisão de Pull Requests |
| Virginia Ratis (01927477) | Desenvolvedora 2, Testadora 2 | Destaque das casas vencedoras e tela de vencedor |

## Processo Git
- `main`: versão estável.
- Cada desenvolvedor trabalha em branch própria (ex.: `feature-square-board`, `feature-game-logic`).
- Commits pequenos com mensagens descritivas.
- Integração à `main` via Pull Request, revisado por outro integrante.

## Testes
| Teste | Resultado | Observações |
|-------|-----------|-------------|
| T01 Abrir o jogo | passou | flui normalmente |
| T02 Realizar uma jogada | passou | tudo ok ele corresponde ao x e a o normalmente |
| T03 Jogadas alternadas | passou | funciona bem |
| T04 Posição ocupada | passou | ele não entra na mesma casa que a outra  |
| T05 Sequência vencedora | passou | quando ganha aparece o ganhador e da pra ver o tabuleiro ou reiniciar o jogo |
| T06 Continuar após vitória | passou | ele continua normalmente, basta escolher jogar novamente ou olhar o tabuleiro da vitória/empate |
| T07 Reiniciar o jogo | passou | quando se aperta f5 ele reinicia normal a pagina e ao clicar em reiniciar também no final do jogo|
| T08 Empate | passou | N/T |
| T09 Atualizar a página | passou | f5 reinicia do 0 o jogo |

Defeitos encontrados: (descrição, como reproduzir, corrigido?)

## Capturas de tela
(adicione prints em `docs/` e referencie aqui)
