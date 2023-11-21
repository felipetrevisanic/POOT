import React from 'react';
import Botao from "../../components/Botao";
import Console from "../../components/Console";

const ConsolePage = () => {
  const executarCodigo = () => {
    // Limpar a saída anterior
    document.getElementById('output').innerHTML = '';

    // Armazenar a saída do console
    var consoleOutput = [];
    var originalConsoleLog = console.log;

    console.log = function (message) {
      consoleOutput.push(message);
    };

    // Obter o código do textarea
    var codigo = document.getElementById('code').value;

    try {
      // Executar o código
      eval(codigo);

      // Exibir a saída do console
      const outputElement = document.getElementById('output');
      outputElement.innerHTML = 'Saída do Console: ' + consoleOutput.join('<br>');

      // Exibir a resposta em um pop-up
      window.alert(outputElement.innerText);
    } catch (erro) {
      // Exibir erros, se houverem
      document.getElementById('output').innerHTML = 'Erro: ' + erro.message;
    } finally {
      // Restaurar a função original do console.log
      console.log = originalConsoleLog;
    };
  };

  return ( 
    <div>
      <Console></Console>
      <div>
        <Botao funcao={executarCodigo}>Rodar código</Botao> 
        <div id="output"></div>
      </div>
    </div>
  );
}

export default ConsolePage;
