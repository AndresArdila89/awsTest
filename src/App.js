import React, { Component } from 'react';
import './App.css';
import Exe from './series/card'


class App extends Component {
  state = {
    exeInfo: [
      { objetivo: "Fortalecimiento del Core",ejecucion: "Maximo numero de repeticiones en 60 segundos"},
      { objetivo: "Fortalecimiento Uperbody",ejecucion: "Realizar todas las repeticiones posibles"},
      { objetivo: "Fortalecimiento Espalda",ejecucion: "Realizar todas las repeticiones posibles"}  
    ]
  }


  switchExerHandler = () => {
    this.setState({
      exeInfo: [
        { objetivo: "estiramiento",ejecucion: "Maximo numero de repeticiones en 60 segundos"},
        { objetivo: "Fortalecimiento Uperbody",ejecucion: "Realizar todas las repeticiones posibles"},
        { objetivo: "Fortalecimiento Espalda",ejecucion: "Realizar todas las repeticiones posibles"}  
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Test de Capacidades</h1>
        <Exe objetivo={this.state.exeInfo[0].objetivo}  ejecucion={this.state.exeInfo[0].ejecucion}/>
        <Exe objetivo={this.state.exeInfo[1].objetivo}  ejecucion={this.state.exeInfo[1].ejecucion}/>
        <Exe objetivo={this.state.exeInfo[2].objetivo}  ejecucion={this.state.exeInfo[2].ejecucion}/>

        <button onClick={this.switchExerHandler}>Iniciar</button>

      </div>
    );
  }
}

export default App;
