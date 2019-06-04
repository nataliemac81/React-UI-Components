import React from 'react';
import './Button.css';
// import ButtonContainer from './ButtonContainer';

const ActionButton = () => {
    return (
          <div className="action-buttons">
						<div className="clear">clear</div>
						<div className="operators">
							<div className="divide">&#247;</div>
							<div className="multiply">x</div>
							<div className="subtract">-</div>
							<div className="add">+</div>
							<div className="equal">=</div>
						</div>
          </div>
    );
  };

  export default ActionButton;