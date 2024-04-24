# tabnews

Project to recreate Tab News from the course of curso.dev

[Anotações do curso.dev](https://iagomachadocs.notion.site/Curso-dev-505ed0fb9d7f4e8bb3c7f4affbb406ab)

## Dia 3

Versionamento Node.js:
nvm ls -> retorna todos os tipos de versão do node existentes
basta dar nvm install <o nome da versão> (Ex. nvm install lts/hydrogen)

PAra definir a versão que queira usar do node, deve definir o default do sistema
comando: nvm alias default <o nome da versão> (Ex. nvm alias default lts/hydrogen)

Arquivo especial: .nvmrc -> gerencia as dependências e versão do projeto (RC -> Run Commands)
Adicionando o arquivo e na primeira linha o nome da versão , como o lts/hydrogen, todo que baixarem o repositório e rodarem o comando nvm install irão baixar a versão correta do sistema.

Versão Next js:
inicio do projeto: comando npm init

Instalando o Next: npm install next
(Para definir uma versão npm install next@<o num da versão> [Ex. npm install next@13.1.6])

Instalando o react: nom install react

Renderizador do React -> existem diversos renderizadores
Para WEB: react-dom

## Dia 4

Levantando o serviço WEB:

Antes deve ser indicado onde vai ser executado -> package.json

```json
"scripts": {
    "dev": "next dev"
  },
```

comando a ser executado: npm rum [script] (Ex. npm run dev)

Criando a primeira pagina e pasta de projetos: criar a pasta chamada **pages**

As paginas estão dentro dos index e componentes reacts são apenas componentes -> para exporta ou seja para indicar qual que deve ser renderizado pelo next devemos exportar o default componentes

```js
function Home() {
  return <h1>Teste</h1>;
}

export default Home;
```

## Dia 5 e 6

Conteúdo sobre git:
A título de contribuição e compartilhamento, vocês usam algumas palavras iniciais como padrão para fazer o commit ? Como essas que encontrei na internet:

Palavras chave para commit semântico

- feat: Para adicionar uma nova funcionalidade. Exemplo: feat: Adiciona um formulário de login.
- fix: Para corrigir um bug. Exemplo: fix: Resolve o problema de autenticação.
- docs: Para atualizar documentação. Exemplo: docs: Atualiza o README com instruções claras.
- style: Para ajustar formatação, espaçamento, etc., que não afetam o comportamento do código. Exemplo: style: Corrige a formatação do código.
- refactor: Para reorganizar o código existente sem adicionar ou remover funcionalidades. Exemplo: refactor: Reestrutura a classe de autenticação.
- chore: Para tarefas de manutenção, como atualização de dependências. Exemplo: chore: Atualiza biblioteca de terceiros.
- test: Para adicionar ou modificar testes. Exemplo: test: Adiciona testes de unidade para o serviço de usuário.

Fechar issue via terminal

Inclusive, o item 2 tem uma palavra especial para poder usar via terminal junto com a issue que deseja fechar, pois qualquer uma das palavras-chave (fix, fixes, fixed, close, closes, closed, resolve, resolves, e resolved) junto com o # e o número da issue (ex: "fix #4") é suficiente para o fechamento automático, mas a palavra chave deve vir ao lado da # e número da issue, do contrário não fecha via terminal.

Commit sem alteração de código, apenas para marcação
Também se quiser fazer um commit apenas para marcar uma situação ou momento no desenvolvimento, pode ser usado, caso queira fechar a issue #4, o seguinte comando:

git commit --allow-empty -m "Fixes #4"
Lembrando que o Fixes pode ser trocado por qualquer palavra-chave referida acima, só que ao fazer alguns testes, pelo menos no terminal do VSCode usando sistema iOs, só funcionava o fechamento da issue no github quando usava a palavra-chave ao lado do #4, se usar espalhado na mensagem do commit não fecha a issue, por exemplo:

git commit -m "update: README CursoDev progress: Close Dia001 #4" Não fechou
git commit -m "update: README CursoDev progress: Dia001 Close #4" Fechou a issue

Reabrir uma issue
Não consegui reabrir uma issue fechada via terminal, rodando o comando via terminal também, qual seja, o comando "reopen issue" que no caso sem especificar era para reabrir a última issue fechada, caso quisesse especificar uma issue, bastava colocar a tralha e o número da issue.

Tentei os seguintes comandos:

git commit -m "reopen issue" #Era para reabrir a última issue fechada
git commit -m "reopen issue #4" #Também não reabriu

Caso alguém puder ajudar, deixei até aberta uma issue no projeto, pode comentar aqui para todos terem o conhecimento ou lá pelo menos dizendo que respondeu aqui kkkkkk, segue a issue:
Issue #6

Comandos interessante:

- git log
- git log --stat
- git log --oneline
- git status
- git add [nome do arquivo]
- git commit -m [mensagem de confirmação]
- git commit -am [mensagem de confirmação]: adiciona todos os arquivos e faz commit
- git commit --amend [caso necessário colocar o identificador]
- git diff
- git push
- git branch
- git fetch
- git pull
- git restore --staged nome-arquivo : remover da stage area
- git reset HEAD~1 : para voltar o ultimo commit
- git push -f: forçar a aualização do git commit local
- git mv [arquvivo original] [novo arquivo]: move o arquivo ou renomeia um arquivo no sistema do git (EX. git mv .env .env.development)

Dica: caso você deseje emendar um commit sem alterar a mensagem, é possível passar a flag --no-edit. Com isso, a mensagem anterior será preservada e a tela de edição não será aberta. Ex: git commit --amend --no-edit

## Dia 7 e 8

Deploy na vercel

Programação Orgânica vs Impressora 3D
Não fazer todo o sistema de uma vez e sim construindo as funções aos poucos

## Dia 9

Organização de Tarefas e Planejamento

> Fazer muito com pouco

- Nível 1: Ser lembrado individualmente
  - Menor custo de produção
  - Menor tempo de aquecimento
- Nível 2: Ser lembrado em grupo (Distribuição)
  - Kanbam
  - Quadro Branco
  - Marcar o progresso
- Nível 3: Expandir conhecimento (Detalhar as tarefas)
  - Trello
  - Github
- Nível 4: Gerar Métricas (Medir Produtividade)
  - Mais para o gestor dela
  - Envolve um processo mais complexo e burocrático
  - Trazer as barreiras técnicas e negócio -> cuidar de usar as métricas como fom e não como um meio (utilizar as métricas como objetivo)
  - pode gerar um incentivo desalinhado
  - Ser o mais simples possível quando reportar a alguém

---

### Como criar Milestones?

Preparação:

Fazer um discovery e gerar um inception do projeto.
Fazer a validação e definição do escopo do projeto.
Criar milestones em funcionalidades que serão implementadas.
As milestones podem ser alteradas dependendo de quão complexas são durante o desenvolvimento podendo ser passadas para outras ou sendo atrasadas.
Definir o MVP do lançamento
Avaliar a aceitação do mercado e anotar feedbacks que deveriam ser alterados

Milestones do tab news:

- Rascunho do projeto e idealizações -> Inception
- Compra do domínio e criação do repositório.
- Definição das tecnologias à serem usadas e quais features quer implementar e anotar essas ideias.
- Desenvolvimento da página inicial e dos mecanismos de publicação e comentários.
- Desenvolvimento do mecanismo do tabcoin e login do usuário.
- Definição do design e do UX/UI
- Rodada de testes e atualizações de segurança e performance.
- Deploy do site e recebimento de feedback dos usuários
- Analisar os feedbacks e implementá-los.

Dopamina e Issues:

- Estágio 1: Início -> Antecipação de algo positivo pode acontecer
  - Título da Issue
- Estágio 2: Progresso -> Receber uma confirmação que o algo que esta fazendo esta dando certo e tendo progresso
- Estágio 3: Conclusão -> Receber a conclusão do mundo que deu tudo certo! Dopamina final!

## Dia 10

Processo de definir estilização e formatação de códigos

Utilizar o EditorConfig para poder manter o editor igual -> funciona para configurar o editor
Utilizar o Prettier -> Para ser mais profissional não usar a extensão e sim instalar como um pacote no npm:

Comando: `npm install prettier -D` -> esse -D cria uma dependência no _package.json_ mas apenas em DEV não é necessário para outros ambientes como produção e homologação

É possível criar um novo script no _package.json_ para rodar o prettier:

```json
{
  "lint:check": "prettier --check .",
  "lint:fix": "prettier --write ."
}
```

Esse `lint:check` script vai rodar o check de conferência em todos os arquivos
Esse `lint:fix` script vai rodar o prettier em todos os arquivos e arrumar a estilização.

É possível ser automático utilizando a extensão do VScode para isso, lembrando de configurar o extensão para isso.

---

**Comentário Interessante:**

Olá pessoal, comecei a usar o code spaces com a sincronização. Cada novo code space criado, mesmo que os anteriores ainda estejam 'funcionando' vai compartilhar as mesmas configurações, como se fosse o mesmo VsCode. Até aí não é novidade, (talvez pra alguns, como eu) inclusive o próprio settings.json será o mesmo para todos os codespaces que forem criados.
Acontece que eu comecei a estudar Flask e Python, aplicando as aulas do curso em outra linguagem e framework, e infelizmente o Prettier não suporta Python. Para isso, o "Prettier" do Python é o `autopep8` ou `black`, para quem tiver interesse. É só instalar o plugin na loja de plugins do VsCode.
Depois de tentar configurar os dois formatadores ao mesmo tempo no .settings, li os posts e vi que foi um assunto bem comentado há alguns meses atrás. Segui o post do renansilva15 e coloquei o formatador do Python junto com as outras configurações. Ficou assim (versão curta):

```json
  "window.menuBarVisibility": "classic",
  "workbench.colorTheme": "Default Dark Modern",
  "git.autofetch": true,
  "editor.formatOnSave": true,
  "files.autoSave": "off",
  "[python]": {
    "editor.defaultFormatter": "ms-python.autopep8"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

As configurações fora dos colchetes são globais, e as dentro dos colchetes específicas para a linguagem. Útil para quem quer usar as mesmas configs em vários projetos diferentes sem ter que ficar configurando sempre as mesmas coisas.

Segue a versão completa:

```json
{
  "window.menuBarVisibility": "classic",
  "workbench.colorTheme": "Default Dark Modern",
  "git.autofetch": true,
  "editor.formatOnSave": true,
  "files.autoSave": "off",
  "[python]": {
    "editor.defaultFormatter": "ms-python.autopep8"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[angular]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[graphql]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[handlebars]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

Configurar o `.prettierignore` para que o prettier não rodar o fiz nos aquivos do _.next_.

## Dia 11 e 12 - DNS

Instalar Dig - `sudo apt install dnsutils`
Usando DIG - `dig fintab.com.br A` -> esta requisitando o A Record do Domínio fintab.com.br
Adicionando a opção `+trace` em `dig fintab.com.br A +trace` traz todo o caminho realizado para encontrar o record

Comentário Interessante

---

Olá pessoal. Não sei se já foi dito/feito alguma coisa parecida aqui nos comentários, mas uma coisa bacana para colocar em prática essa aula de DNS e ficar também como um chorinho, é para quem já usa o novo app Bluesky(dos antigos criadores do finado Twitter).

Lá você ganha um handle o famoso @ que será uma forma de identificar o teu usuário dentro da plataforma. Por padrão virá algo do tipo username.bsky.social, esse handle é um domínio. Se quiser, você pode saber mais aqui, em resumo é um tal de protocolo AT. Então como o handle é um domínio, caso você possua um domínio próprio, se desejar, poderá alterar o seu handle para o seu domínio, no meu caso alterei para rogovski.dev.

E para fazer, vamos usar os super-poderes apresentados pelo @filipedeschamps nessas últimas aulas sobre DNS.

## Dia 13

[Museu Tab News](https://www.tabnews.com.br/museu)

[Teoria do MacDonald's](https://jonbell.medium.com/mcdonalds-theory-9216e1c9da7d)

Status Page:

[Vercel](https://www.vercel-status.com/)
[AWS](https://health.aws.amazon.com/health/status)
[GitHub](https://www.githubstatus.com/)

## Dia 14

Início _Milestone 1: Fundação_

Arquitetura e Software

Começar a visualizar pelo frontend -> Criar POCs das visualizações (Aprender usar o Figma estudar UX)
A partir das POC começar a pensar na tecnologias que serão utilizadas

Overengineering -> Quando vc complica muito as coisas

Sempre começar com algo mais simples e depois deixar complexo caso seja necessário

Comentário Interessante

---

Foco na simplicidade
Lembrar sobre a teoria McDonald's nessa hora é bom. Afinal, a solução por mais bonita, precisa funcionar e ser modificável.

Começar algo pequeno e simples ao invés de algo grande
Evitar começar logo com um grande pedaço de resultado não vai te ajudar. E não vai ser nenhum pouco legal brigar contra isso.

O senso de engenharia vem com a experiência
Infelizmente é mais fácil começar algo complexo devido a entropia do universo. Mas com certeza compensa começar, ou mesmo decidir, iniciar algo simples. E evoluir, se precisar.

A principal característica de um software bom é: modificável!
O foco que todos deveriam ter. A potência que um time tem de mudar um código no curto, médio e longo prazo.

Conclusão
Se o foco for "o software ser modificável", todas as outras variáveis que o projeto precisa responder naturalmente vão se organizando. A solução precisa se adaptar ao problema.

---

Definição de Arquitetura:
MVC - Model View Controller

> Uma arquitetura simples + uma boa organização é o mais eficiente

[Keep Simple (KISS)](https://dev.to/kwereutosu/the-k-i-s-s-principle-in-programming-1jfg)

Arquitetura Selecionada -> MVC

Organização de Pasta:

- Separar aquivos e pastas dependendo do escopo de cada parte do projeto

Esqueleto das páginas

📦 root
┣ 📂 pages
┃ ┗ 📜 index.js
┣ 📂 models
┃ ┣ 📜 user.js
┃ ┣ 📜 content.js
┃ ┗ 📜 password.js
┣ 📂 infra
┃ ┗ 📜 database.js
┃ ┣ 📂 migrations
┃ ┣ 📂 provisioning
┃ ┃ ┣ 📂 staging
┃ ┃ ┣ 📂 production
┣ 📂 tests

[ASCII Tree Generator](https://ascii-tree-generator.com/)

Recomendação: Domain-driven Design (DDD) do Eric Evans e Clean Code

---

POC vs MVP

---

PoC: Proof of Concept
Menor custo para poder escolher uma direção? Quais provas me compravam que isso vai ou não funcionar?
Discovery e Brainstorm

MVP: Minimum Viable Product
Se arriscar num desses PoCs e começar a desenhar o produto

## Dia 15

Testes Automatizados

Test Runner: [Jest](https://jestjs.io/)

Instalando o jest como dependência de desenvolvimento: `npm install --save-dev jest@29.6.2`

Adicionar um novo script:

```json
{
  "test": "jest",
  "test:watch": "jest --watch"
}
```

Pode mudar a opção para `"jest --watchAll"`para sempre analisar todos os arquivos do projeto sempre

Estudar JavaScript e ECMAScript: [Curso de JavaScript](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)

Arquivo de test que o JEst entente: `arquivo.test.js`

Exemplo de test:

```js
test("Espero que 1 seja 1", () => {
  expect(1).toBe(1);
});
```

MVC
Model -> É uma caixa de ferramentas onde estão localizadas as funções da sua aplicação, base do sistema

Exemplo de modelo:

```js
function somar(argumento1, argumento2) {
  return argumento1 + argumento2;
}

exports.somar = somar; //Exporta a sua função para o mundo de fora,
```

Padrão CommonJS -> ECMAScript Modules -> o Jest não suporta esse tipo -> Realizar o Transpilling para converter os modelos

TDD -> Os testes lideram os desenvolvimentos orientam o desenvolvimento -> é um exercício
complicado não começar por ele

Recomendação: _Craftsmanship Limpo do Robert Martin_
PEsquisar sobre: _Gherkin_
[Testes Django (Python)](https://docs.djangoproject.com/en/5.0/topics/testing/overview/)

## Dia 16

Encaixar os sistemas Integração com banco de dados, API e testes automatizados.

Nível de testes (**Pirâmide de Testes**):

- Testes de Unidade ou Testes Unitários: unit
- Testes de Integração: integration (service)
- Testes End-to-End (E2E) -> Simula até a interface -> Fazer deploy de um pre-prod (UI)

Essa pirâmide de Testes vai de DIficuldade de criação de testes bem como a rapidez de execução desses testes.

Criado por Mike Cohen em 2009 -> Succeeding with agile

[Mike Fowler - Unit Test](https://martinfowler.com/bliki/UnitTest.html)

Vc define qual o critério de unidade.

Outros tipos de metodologias de testes:

Frontend:
[Trophy of Tests](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
[More Testing Trophy](https://www.testingjavascript.com/)
[Kent Blog about testing](https://kentcdodds.com/blog?q=testing)

Backend:
[Test Honeycomb](https://www.youtube.com/watch?v=p3M1Y2Oi_Yk)
[Spotify Testing](https://engineering.atspotify.com/2018/01/testing-of-microservices/)

Explicação de diferentes testes -> [Different Types of Testing in Software Testing](https://www.irjet.net/archives/V3/i4/IRJET-V3I4329.pdf)

Falta de tempo:

Desenvolvimento API First -> Tudo que gostaria fazer deve começar pela disponibilização da API primeiro antes do desenvolvimento para o usuário final
Deve se dedicar mais tempo em testes de integração -> devido a falta de tempo -> Foco em testar oq os clientes usam.

### Criando Endpoints

[Projetos Usando API TabNews](https://github.com/gabrielsozinho/TabProjetos)

Usando Curl: [Curl](https://curl.se/)

Comando: `curl http://localhost:3000/api/status -v` Retorna todo o caminho realizado para fazer a requisição http para a API.

Versionamento de API

Breaking Change: Mudar as propriedades
Non-breaking Change: Adicionar novas propriedades

URI PAth Versioning -> Caminho que mostra várias APIs
Header Path -> Envia cabeçalhos com a versão que deseja se conectar

URI Path -> Novo caminho: `api/v1/status`

Em testes colocar o nome _get_ no arquivo de testes para apenas testar os métodos que fazer get nas APIs

Funções Assíncronas e Síncronas:

```json
test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
})
```

Nesse exemplo o _fetch_ retorna uma promessa de valor para não travar o sistema, a resposta pode vir depois e portanto pula, mas no nosso caso queremos esperar ele _await_ a resposta, mas para usar esse _await_ a função deve ser declarada como assíncrona e portanto é adicionado um _async_.

## Dia 17

### Escolhendo o Bancos de Dados

A escolha do banco de dados deve levar em conta:

- DBMS: Data Base Management System -> **O Banco de Dados**
  - MySQL
  - Postgres -> Ganha em performance
  - MongoDB
- Query: Consultar os dados do banco
  - ORM -> Object-Relation Mapping (Mapeamento por Objetos) Não precisa fazer as queries na mão [Sequelize](https://sequelize.org/)
  - Fazer queries -> aprender mais sobre SQL -> usando módulo pg
- Migrations: Arquivo que descreve uma modificação no banco de dados (tabelas e colunas), usado para versionamento dos bancos de dados, feitas por código e não por humanos (node-pg-migrate)
- Tipo de Banco de dados:
  - Relacional
  - Não- Relaciona (Json, chave-valor)
  - Série temporal
  - Espacial

Backend e frontend fica na vercel -> executado através das Lambdas da AWS

Jogo para aprender sobre SQL: [Lost at SQL](https://lost-at-sql.therobinlord.com/)

Outros bancos de dados:
[Prima](https://www.prisma.io/)
[DB Ranking](https://db-engines.com/en/ranking)

Comentário Interessante

---

Veja os nomes de algumas autoridades na área:

Bancos de Dados Relacionais Bancos de Dados Não Relacionais (NoSQL)
Edgar F. Codd Pramod J. Sadalage
C. J. Date Martin Fowler
Hector Garcia-Molina Shannon Bradshaw
Michael Stonebraker Kristina Chodorow
Jeffrey D. Ullman

Agora, olha só que interessante: Pedi ao Chat GPT 🤖 para se inspirar nessas autoridades e explicar de forma objetiva qual é a principal diferença entre bancos de dados relacionais e não relacionais e como isso afeta a vida de um desenvolvedor de software comum no quotidiano. Veja resposta:

Características Bancos de Dados Relacionais Bancos de Dados Não Relacionais (NoSQL)
Estrutura Tabelas interligadas por relacionamentos Não seguem a estrutura de tabelas relacionadas
Linguagem SQL (Structured Query Language) Varia de acordo com o tipo de banco de dados NoSQL
Consistência e Integridade ACID (Atomicidade, Consistência, Isolamento, Durabilidade) Geralmente segue BASE (Basically Available, Soft state, Eventually consistent)
Esquemas Pré-definidos e rígidos, seguindo um modelo relacional Flexíveis, permitindo esquemas dinâmicos e evolutivos
Modelos Tabelas Documentos, grafos, chave-valor, colunas
Escalabilidade Menos flexível Mais eficiente e flexível, adequado para grandes volumes de dados distribuídos

Impacto na vida do desenvolvedor:
Aspecto: Escolha da Tecnologia
Decide qual "tipo" de banco de dados usar com base nas necessidades do projeto: mais rápido, mas com pequenas inconsistências (NoSQL) ou mais lento, garantindo que os dados estejam sempre corretos (SQL).

Exemplo Descrição
Análise de Dados em Tempo Real Para um aplicativo que exige análise em tempo real de grandes volumes de dados, opta-se pelo MongoDB (NoSQL) devido à sua capacidade de fornecer velocidade e flexibilidade, mesmo que isso signifique pequenas inconsistências nos dados.

Sistema de Controle Bancário Para um sistema que gerencia transações financeiras onde a precisão dos dados é fundamental, escolhe-se o PostgreSQL (SQL) para garantir a precisão e consistência dos registros, mesmo que em detrimento de um pouco de velocidade.

Aspecto: Modelagem de Dados
Organiza como as informações são armazenadas no banco de dados, considerando diferentes abordagens: tabelas interligadas (SQL) ou estruturas flexíveis (NoSQL).

Exemplo Descrição
Sistema de Gerenciamento de Pedidos em Restaurante Para um sistema que gerencia pedidos em um restaurante, é mais eficaz modelar as informações em tabelas relacionais usando MySQL (SQL), facilitando consultas e relações complexas entre os dados.

Sistema de Gerenciamento de Conteúdo de Blog Para um sistema que gerencia o conteúdo de um blog, a estrutura flexível dos documentos no MongoDB (NoSQL) é adequada, permitindo armazenar os posts em documentos e simplificar operações de leitura e escrita.

Aspecto: Consulta e Manipulação
Determina a maneira de buscar e modificar dados no banco de dados: usando consultas SQL estruturadas ou consultas específicas ao banco de dados NoSQL.

Exemplo Descrição
Aplicativo de Comércio Eletrônico Ao desenvolver um aplicativo de comércio eletrônico, é necessário usar consultas SQL estruturadas em um banco de dados como PostgreSQL (SQL) para obter detalhes do produto e processar transações de compra com precisão.

Aplicativo de Análise de Dados Em um aplicativo de análise de dados, como um dashboard de métricas de uso, usar consultas específicas ao MongoDB (NoSQL) para extrair e analisar métricas de uso de maneira eficiente e flexível.

Aspecto: Manutenção e Escalabilidade
Afeta a facilidade de gerenciar o banco de dados à medida que o aplicativo cresce, adicionando mais servidores e mantendo o desempenho (NoSQL) ou exigindo mais cuidado ao escalar para garantir consistência (SQL).

Exemplo Descrição
Aplicativo de Redes Sociais Para um aplicativo de redes sociais que espera crescimento exponencial de usuários, escolhe-se o Cassandra (NoSQL) devido à sua escalabilidade linear e facilidade de adição de servidores para manter o desempenho com o aumento da carga.

Sistema de Controle de Estoque Para um sistema de controle de estoque que precisa manter consistência à medida que a empresa cresce, escolhe-se o Oracle (SQL) devido à sua robustez e capacidade de garantir a consistência dos dados mesmo com o aumento da demanda.

Aspecto: Consistência vs. Desempenho
Equilibra a garantia de que os dados estejam sempre corretos versus a velocidade de acesso aos dados. Opta por uma consistência estrita (SQL) ou aceita pequenas inconsistências em prol do desempenho (NoSQL).

Exemplo Descrição
Aplicativo de Monitoramento de Tráfego em Tempo Real Em um aplicativo que monitora o tráfego em tempo real, como um aplicativo de transporte, opta-se pelo Couchbase (NoSQL) para garantir desempenho rápido na atualização de dados, mesmo que haja uma ligeira inconsistência temporária.

Aplicativo Financeiro Em um aplicativo financeiro, prioriza-se a consistência dos dados, escolhendo o MySQL (SQL) para garantir que todas as transações e registros estejam sempre precisos, mesmo que isso signifique uma leve redução no desempenho.

---

### Docker

Agora o comando `docker-compose` é só `docker compose`

Novo arquivo: `compose.yaml` que irá gerenciar os dados do docker

[Alpine Linux](https://www.alpinelinux.org/)

Arquivos utilizados:
[Postgres Docker](https://hub.docker.com/_/postgres)

Comandos Docker:

`docker compose up`: Levanta o docker declarado no arquivo `compose.yaml`
`docker ps -a`: Lista os containers que estão na máquina (Exit Code: 0 tudo certo, 255 como tudo errado)
`docker logs <Name do Docker>`: Lista os logs do container (Ex. `docker logs tabnews-database-1`)
`docker compose up -d`: Subir o docker fora do terminal
`docker compose down`: Derrubar os docker ativos
`docker compose up -d --force-recreate`: Derruba e recria o docker para refletir as alterações no arquivo `compose.yaml`
`docker compose -f <caminho do arquivo de configuração> up`: Fala para o docker onde esta o arquivo `compose.yaml` que deve subir (Ex. `docker compose -f infra/compose.yaml up`)

Instalar o client do Postgres: `sudo apt install postgresql-client`

Comandos psql:
`psql --host=localhost --username=postgres --port=5432`: Conectando no banco de dados
`\q`: Para sair da conexão do banco de dados

Resumo da Aula: [Docker - Notion](https://iagomachadocs.notion.site/Docker-18e27386d92549158773a198e9b203d5)

## Dia 18

### Módulo database.js

Instalando o módulo de conexão do postgres no npm -> comando `npm install pg@8.11.3`

[Documentação node-postgres](https://node-postgres.com/)

Se conectando ao banco:

```js
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();

  return result;
}

export default {
  query: query,
};
```

### Variáveis de Ambiente

Definindo a variável de ambiente no _.js_

```js
password: process.env.POSTGRES_PASSWORD;
```

Pode ser declarado na hora de executar o `npm run dev` a variável de ambiente que precisa declarar como exemplo `POSTGRES_PASSWORD = local_password`.

> Dica: Para esconder do comando `history` as informações confidenciais deve-se colocar um espaço antes de executar o comando

Não é uma opção prática criar variáveis dessa forma -> usar o módulo [dotenv](https://www.npmjs.com/package/dotenv) para gerenciar as variáveis de ambiente -> o Next ja vem com esse recurso por padrão.

[Serviço para manter as variáveis de ambiente](https://www.dotenv.org/)

Criar o arquivo `.env` para gerenciar as variáveis de ambiente na raiz do projeto e adicionar cada variável de ambiente na seguinte forma: `POSTGRES_PASSWORD=local_password`, onde cada linha é uma variável de ambiente.

Comentário interessante:

---

Para transformar as palavras em maiúsculas, sem ter que digitar manualmente, basta selecionar a(s) palavra(s), apertar CTRL + SHIFT + P para abrir a barra de comandos e buscar por uppercase que irá aparecer a opção Transform to Uppercase.

---

### Variáveis de ambiente no Docker Compose

Adicionar uma propriedade no compose.yaml:

```yaml
env_file:
  - ../.env
```

## Dia 19

Não é problema subir o arquivo `.env` pois a Vercel vai sobrescrever essas variáveis para os valores de produção e a aplicação vai se tornar segura.

É mais semântico criar um arquivo `.env.development` para separar as variáveis para desenvolvimento.

### Como salvar um commit com informações confidenciais?

[Doc do Github](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

Trocar a senha o mais rápido possível e alterar o hash do commit e sim vai dar um problema e vai ser necessário dar um push force.

[Comentário Interessante](https://www.tabnews.com.br/maion/vazei-meus-dados-e-agora-veja-como-remover-dados-confidenciais-commitados)

---

Para quem quiser saber como eu usei o BFG para corrigir meu repositório que havia vazado dados em dois arquivos: .env e cred.json

1 - Baixei o arquivo .jar do BFG Repo-Cleaner do repositório e coloquei na mesma pasta que clonarei o projeto.

2 - Clonei meu repositório com o --mirror:
git clone --mirror git://example.com/repo_problemático.git

3 - Apaguei os arquivos com os comandos:
java -jar bfg-1.14.0.jar --delete-files cred.json repo_problemático.git
e
java -jar bfg-1.14.0.jar --delete-files .env repo_problemático.git

4 - entrar na pasta do repositório problemático:
cd repo_problemático.git

5 - Rodar os comandos conforme a documentação do BFG:
git reflog expire --expire=now --all && git gc --prune=now --aggressive

6 - git push

---

### Lapidações de Absolute Imports

Root Path -> deve ser configurado para não ficar navegando relativo entre os arquivos -> arquivo de configuração `jsconfig.json`
Desnecessário aquivo -> Ver como funciona o `AbsoluteImports`

### Adicionando mais scripts para subir o ambiente de desenvolvimento

Como rodar mais de um script no comando `npm run dev`:

```json
"dev": "npm run services:up && next dev",
```

Separar por && os comandos a serem rodados no terminal um logo depois do outro.

Comentário interessante:

---

Fala galera! Que aula massa filipedeschamps!

Seguindo na mesma pegada em lapidar esses scripts eu me peguei pensando em criar um script que fosse o contrário do comando npm run dev e sim um npm run stop que fecharia o docker e a aplicação Next de uma vez só, e acabei criando o seguinte script:

"stop": "npm run services:down && kill $(lsof -t -i:3000)"
Onde ese último comando mata a tarefa (kill) de executar o servidor na porta 3000. Mas isso vem com uma desvantagem ele não funciona em Windows, apenas em SOs Unix-like como o Linux, o MacOS e o nosso codespaces.

Não sei se essa é a melhor abordagem para isso também, se alguém tiver uma sugestão para melhorar eu agradeceria!

EDIT:

Depois vendo os comentário de felipeolliveira e o script montado por Hahnemann acabei melhorando ainda mais a funcionalidade do comando npm run dev usando um script em bash init-dev.sh dessa forma:

```bash
#!/bin/bash

function cleanup {
npm run services:down
kill $(lsof -t -i:3000)
exit 0
}

trap cleanup INT

npm run services:up && next dev
```

Agora ao dar `ctrl+c` no terminal tanto o Docker quanto o next serão eliminados sozinho

---

## Dia 20

### FInalizando a API `status`

Controller só serve para entrar a requisição do usuário -> Ele pede para o model para pegar os valores no Model -> Devolve para o controller -> que Envia para a View que se responsabiliza em devolver a resposta para o usuário.

Proposta! Programar tudo dentro dos controller e assim que for necessário um reaproveitamento de código ai sim criar os models

Convencão:
Variáveis de sistema serem cammelCase, exemplo `updatedAt`
Variáveis de API serem snake_case, exemplo `update_at`

O `new Date().toISOString()` cria um novo objeto de Date time
e sem o `new` apenas retornar a string com o valor -> pesquisar melhor essas diferenças.

Novo tipo de test:
`expect(responseBody.updated_at).toBeDefined();`: Espera que seja definido, ou seja, que exista
`expect(responseBody.updated_at).toEqual(parseUpdateAt);`: Espera que sejam valores iguais -> usado para arrays e objetos

### Estágios do TDD

Red: Adiciona a condição do teste
-> Não é atendido, pois não existe a implementação

Green: Implementação concreta
-> resolver o teste e habilitando o refactor

Refactor:
Estágio onde continua no extremos do testes e melhorar o código deixando os testes melhores.

SQL:
`SHOW` mostra as configurações do banco de dados

Queries:
Query sem parâmetros
Query com parâmetros fixos
Query com parâmetros dinâmicos -> pode dar problema de SQL Injections

Locais onde pode ser capturado informações sobre a quantidade de conexões abertas:
pg_stat_activity (em tempo real) e pg_stat_database -> duas Views

### SQL Injection

Template Literals -> usando Placeholders: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = '${databaseName}';`

Caso queiro testar apenas um test num arquivo de test apenas adicionar um `test.only`:

```js
test.only("Test SQL Injection", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
});
```

Não permitir acesso ao banco através de dados pela URL

Resolvido pelo próprio módulo do node-postgres

`console.error()` -> Faz o console como um erro na API

## Dia 21 - Banco de Dados em produção

### Logs da Vercel

### Criando Bancos de Dados em produção

- ElephantSQL: [ElephantSQL](https://www.elephantsql.com/)

Novo comando git:
`git restore .`: Restaura tudo que esta em modified até o ultimo commit

- Neon: [Neon](https://neon.tech/)

Conexão segura no Postgres:

```js
const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  ssl: true,
});
```

Apenas necessário adicionar a propriedade `ssl:true`
No entanto no docker não aceita ssl então se usa isso:
`ssl:process.env.NODE_ENV === 'development' ? false : true,`

- DigitalOcean: [DigitalOcean](https://www.digitalocean.com/)

## Dia 22 - Migrations

Migrations -> Versionamento para os BDs

Existem inúmeros sistemas de migrations para inúmeras tecnologias

C#: [Entity Framework](https://learn.microsoft.com/pt-br/ef/),[Fluent Migrations](https://fluentmigrator.github.io/)
Python: [Django migrations](https://docs.djangoproject.com/en/5.0/topics/migrations/)
Java: [Flyway](https://documentation.red-gate.com/flyway/flyway-cli-and-api/tutorials/tutorial-java-based-migrations)
Node: [node-pg-migrate](https://github.com/salsita/node-pg-migrate), [drizzle ORM](https://orm.drizzle.team/), [Prisma](https://www.prisma.io/docs/orm/prisma-migrate)

Framework de migrations

- Sequelize V6
- [node-pg-migrate](https://www.npmjs.com/package/node-pg-migrate)

Usando node-pg-migrate:

Instalando: `npm install node-pg-migrate@6.2.2`

Criando novo script e configurar o padrão das migrations `infra/migrations` ("migration:create"), tbm criar um script onde será executado os comandos de migração ("migration:up")

```json
{
  "migration:create": "node-pg-migrate --migrations-dir infra/migrations create",
  "migration:up": "node-pg-migrate -m infra/migrations --envPath .env.development up"
}
```

O comando cria um arquivo com um UNIX timestamp para que a migration seja executados na ordem de criação.

Deve ser adicionado as credenciais do banco, para isso é instalado o package `dotenv`: `npm install dotenv@16.4.4`, oq libera a opção `--envPath`.

Precisa criar a variável DATABASE_URL para que o comando possa se conectar no banco de dados, no seguinte formato:

```.env
DATABASE_URL=postgres://user:password@host:port/database
```

## Dia 23 - Continuação de Migrations

Criado novo endpoint `/migrations`

Mudança dos testes, quero rodar apenas um dos testes e não todos durante o desenvolvimento, para isso basta rodar o comando no terminal `npm run test:watch -- migrations` que só vai procurar testes relacionados a migrations.

Existe um problema em que diferentes OS a forma encontrar o caminho pode diferir, para isso é bom usar a funcionalidade de concatenação do Node que vai fazer isso para vc automaticamente, mesmo em Linux ou em Windows.

```js
import { join } from "node:path";

join("infra", "migrations");
```

Comentário Interessante

---

Caso alguém esteja com o mesmo problema que eu tava em relação ao JEST e arquivos .test.js que NÃO tem intellisense, ou seja, você não sabe se o comando realmente tem o parâmetro que você está digitando
Exemplo:
sem_intellisense

Você pode simplesmente instalar a seguinte lib:

`npm i @types/jest -D`

E agora seus arquivos `.test.js` do JEST estarão com intellisense, dessa forma:
com_intellisense

Pra quem usa TypeScript já está acostumado com isso, mas pra quem só usa JS ou ainda está aprendendo como funciona as coisas a partir do curso, é uma boa dica pra não ficar sofrendo digitando errado ou sem saber quais são as propriedade que o Jest aceita.

---

Problemas de rodar migrations na direção down:
[Pitfall with SQL rollbacks](https://octopus.com/blog/database-rollbacks-pitfalls)
[How Overflow do the deployment?](https://nickcraver.com/blog/2016/05/03/stack-overflow-how-we-do-deployment-2016-edition/)

-> Mudando parar o Dev container: [Gitpod Tutorial](https://github.com/adspacheco/nextjs-dev-container)

REGEX -> `migration.post` -> apenas seleciona o método POST nos tests de migrations

Erro `405` método não permitido!

Como melhorar os testes automatizados a bancos, não limpar os dados:
[Não limpar o banco para testes](https://calpaterson.com/against-database-teardown.html)
[Hacker News](https://news.ycombinator.com/item?id=29764792)

Comentário Interessante

---

O que é um JSDoc?
Resumindo de forma simples, é uma forma de você comentar um código de uma forma especial, dizendo o que uma função recebe como parâmetro e qual seu retorno.

Como sabemos, Javascript não possui tipos, pois é uma linguagem dinamicamente tipada, o que é bom para algumas coisas e péssimas para outras, principalmente para o intellisense e LSP.

Adicionando um JSDoc, além de vc realmente "documentar" uma função do código, faz com que o editor de código saiba quais métodos algum parâmetro aceita baseado no seu tipo.

E como fazemos isso?
Primeiro precisamos importar os tipos que vamos usar, que nesse caso é:

- NextApiRequest
- NextApiResponse

E pra fazer isso é bem simples, apenas adicione essa linha no seu arquivo:

```js
import { NextApiRequest, NextApiResponse } from "next";
```

Depois vamos criar o JSDoc, e pra fazer isso você tem duas formas:

- Criar manualmente
- Receber uma ajudinha do VSCode

Das duas formas, vá acima da função no editor e digita "/\*\* " e aceite o autocomplete do VScode, que vai criar um JSdoc pra você automaticamente com os parâmetros da função abaixo.

Vai ficar algo parecido com isso

Agora, aonde tem \* vamos trocar pelo tipo que importamos antes.
E vai fica mais ou menos assim:

```js
import { NextApiRequest, NextApiResponse } from "next";

/**
 * @param {NextApiRequest} request
 * @param {NextApiResponse} response
 */
```

Para fazer manualmente é só você escrever esse JSDoc na mão mesmo, acima da função.

Explicando como ele funciona:
Basicamente, esse JSDoc é composto por:

- `@param`
- `@returns`

O `@param` define quais parâmetros a função tem e qual será o seu tipo
o `@returns` define qual o retorno da função, que nesse caso não tem nada, então ele assume que o retorno é VOID, ou seja, não retorna nada.

E é basicamente isso, essa é a explicação de como tudo isso dai funciona, foi bem prolixo e acho que a maioria das pessoas estariam interessadas só na forma de resolver o problema, mas enfim. Espero ter ajudado.

---

## Dia 24

Adicionar a opção do jest rodar os testes de forma sequencial:

ALteração nos scripts:

```json
{
  "test": "jest --runInBand",
  "test:watch": "jest --watchAll --runInBand"
}
```

Necessário Traspilar os códigos que são entendidos pelo Next e enviar para o Jest poder tbm ter a mesma capacidade, por ser mais limitado

Criando um novo arquivo de configuração `jest.config.js`

Comando para excluir todo o banco: `DROP SCHEMA PUBLIC CASCADE;`

Nova função para o Jest `beforeAll(cleanDatabase)` ele executará a função `cleanDatabase` antes de tudo, do test no caso

Código `201` significa que algo foi criado!

## Dia 25

Adicionar a possibilidade de concatenar variáveis de ambiente.

Adicionar um novo pacote : `npm install dotenv-expand@11.0.6`

Dica: para exportar o valor não precisa ser assim:

```js
export default {
  query: query,
  getNewClient: getNewClient,
};
```

Quando a propriedade e o valor serem os mesmos pode simplificar usando apenas um valore no export:

```js
export default {
  query,
  getNewClient,
};
```

## Dia 26 - Branch

Comando criar uma nova branch: `git branch <nome da branch>`
Comando criar e fazer checkout para uma nova branch criando ela: `git checkout -b <nome da branch>`
Comando para mudar de branch: `git checkout <nome da branch>` ou `git switch <nome da branch>`

Após criar um branch deve ser publicada essa branch no repositório local.
Comando para publicar branch no repositório origin: `git push --set-upstream origin <nome da branch>`
Ela vai realizar o link com a branch no origin, pois o nome da branch é flexível para ser diferente

Curl com formatador de json: `curl <endpoint> | python3 json.tool`, já vai formatar como json a saída
