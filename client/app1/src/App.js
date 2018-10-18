import React, { Component } from 'react';
import { HubConnectionBuilder } from '@aspnet/signalr';

class App extends Component {
  constructor() {
    super();
    this.conexao = {};
    this.state = { mensagem: '', nome: '', conversa: [] };
  }

  componentDidMount() {
    this.conexao = new HubConnectionBuilder().withUrl('http://localhost:5000/chatHub').build();

    this.conexao.on('RecebendoMensagem', (dado) => {
      const conversa = this.state.conversa;
      conversa.push(dado);
      this.setState({ conversa });
    });

    this.conexao.start().catch(err => console.error(err.toString()));
    const nome = prompt('Entre com o seu nome:');
    this.setState({ nome });
  }

  setValue(nomePropriedade, e) {
    this.setState({ [nomePropriedade]: e.target.value });
  }

  enviarMensagem(e) {
    e.preventDefault();
    this.conexao.invoke('EnviarMensagem', { nome: this.state.nome, msg: this.state.mensagem });
    this.setState({ mensagem: '' });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>App1</h2>
        <h4>Olá {this.state.nome}, inicie uma conversa</h4>
        <hr style={{ width: "450px"}}/>
        {this.state.conversa.map(item => (
        <div key={item.nome + item.msg}>
          <h4><u>{item.nome}:</u> {item.msg}</h4>
        </div>
        ))}
          <form onSubmit={e => this.enviarMensagem(e)}>
            <input autoFocus type="text" value={this.state.mensagem} onChange={e => this.setValue('mensagem', e)} />
            <button type="submit">Enviar</button>
          </form>
      </div>
    );
  }
}

export default App;
