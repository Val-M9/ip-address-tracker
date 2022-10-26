import { useState } from 'react';
import arrow from '../../../common/images/icon-arrow.svg';
import './input.css';

const Input = ({ onIpChange }) => {
  const [inputValue, setInputValue] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    onIpChange(inputValue)
  }

  return (
    <form className="query__form" onSubmit={onSubmit}>
      <div className="query__input-position">
        <input className="query__input" placeholder="Enter IP address" onChange={(e) => {
          setInputValue(e.target.value);
        }}/>
        <button className="query__btn" type='submit'>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </form>
  );
};

export { Input };
