# tabnews

Project to recreate Tab News from the course of curso.dev

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
    return <h1>Teste</h1>
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

git commit --allow-empty -m "Fixes  #4"
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
- git push -f

 Dica: caso você deseje emendar um commit sem alterar a mensagem, é possível passar a flag --no-edit. Com isso, a mensagem anterior será preservada e a tela de edição não será aberta. Ex: git commit --amend --no-edit

## Dia 7
