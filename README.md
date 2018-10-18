# SignalR - React

Um simples exemplo de utilização do socket SignalR comunicando com mais de uma aplicação React.

### Configurando o ambiente

O que você precisa para instalar:

Execute no terminal, diretório: **signalreact/client/app1**

```
npm install
```

E repita no diretório: **signalreact/client/app2**

```
npm install 
```

## Executando a aplicação

Para cada comando abra um terminal.

Inicialize o server, no diretório: **/server/SignalR_Server**

```
dotnet run
```

Inicialize o app1, no diretório: **signalreact/client/app1**

```
npm start
```

Inicialize o app2, no diretório **signalreact/client/app2**

```
npm start  
```

*Será necessário confirmar no terminal, a utilização de uma outra porta para executar a aplicação
