import React from 'react';
import { Moldura, ConsoleArea, ConsoleTexto, ConsoleBotao } from './style.js';

const Console = (props) => {
  

  return (
    <div>
      <Moldura>
        <ConsoleArea>
          <ConsoleBotao>
            <svg width="52" height="12" viewBox="0 0 52 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="#FF5F56" />
              <circle cx="26" cy="6" r="6" fill="#FFBD2E" />
              <circle cx="46" cy="6" r="6" fill="#27C93F" />
            </svg>
          </ConsoleBotao>
          <ConsoleTexto id="code" name="" cols="30" rows="40"></ConsoleTexto>
        </ConsoleArea>
      </Moldura>
    </div>
  );
};

export default Console;
