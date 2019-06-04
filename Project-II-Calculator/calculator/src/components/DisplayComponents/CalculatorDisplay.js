import React from 'react';
import './Display.css';
import ButtonContainer from '../ButtonComponents/ButtonContainer';

const CalculatorDisplay = () => {
    return (
          <div className="calc-display">
              <div className="screen">
                  <div className="screen-num">0</div>
              </div>
              <ButtonContainer />
          </div>
    );
  };

  export default CalculatorDisplay;
