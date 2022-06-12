## 🚀 Testes em Cypress 🚀

Alguns testes e estudos em utilizando cypress. Fui utilizado o [Parodify](https://parodify.herokuapp.com) como objeto de testes. Os cenários abordados foram: login, cadastro e reprodução de música. Além disso, o projeto segue o padrão PageObject.

para acessar o relatório de execução dos testes clique [AQUI](https://dashboard.cypress.io/projects/w2xpzx/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B"startDate"%3A"1970-01-01"%2C"endDate"%3A"2038-01-19"%7D);.

### 💡 Conceitos abordados
-----------------------

- Actions;
- Checkpoints;
- Constructor;
- Integração contínua (ci);
- PageObjects;


### ⚠️ Instalação e uso do projeto
-----------------------

- Instale o [Node.js](https://nodejs.org/en/download/);
- Baixe este repositório ou faça um git clone;
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npx cypress open`


### ⚙️ Arquitetura do projeto
-----------------------

```
MasterClass-cypress/
  ├─  .github/
  │        └── workflows/
  │            └── ci.yml
  |  
  ├─  cypress/
  │        ├── factories/
  │        │   └── Signupfactory.js      
  │        │
  │        ├── integration/
  │        │   └── cadastro.spec.js
  │        |   ├── login.specjs
  │        │   └── playsong.spec.js
  │        │
  │        └── support/
  │            ├── actions
  │            |   └── AuthActions.js
  │            ├── components
  │            |   └── AuthActions.js
  │            ├── commands.js
  │            └── index.js
  │ 
  ├── node_modules/
  ├── cypress.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```


## 🔍 Camadas do projeto
-----------------------

  -**.github:** contém arquivo para criação de pipeline de integração contínua (*.yml); 
 - **integration:** arquivos de testes separados em categorias a organização (*.spec.js);
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js";
 - **support:** camada com comandos Cypress customizados e sobrescritas globais:
    - Arquivo commands.js responsável de receber os comandos globais no cypress;
    - Arquivo index.js responsável de receber as importações dos comandos cypress;
    -**actions:** camada de funcionalidades;
      - Arquivo AuthActions.js é responsável pelas funcionalidades de autenticação de um usuário; 
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes;

