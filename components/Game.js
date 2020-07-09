import React, { useState, useRef } from 'react';
import cn from 'classnames';

const Game = ({ value, activeGame, onChangeActiveGame }) => {
  const [inputValue, setInputValue] = useState(value);
  const [gameDone, setGameDone] = useState(false);
  const myRef = useRef(null);
  return (
    <li className={cn(activeGame === inputValue ? 'active' : '', gameDone ? 'done' : '')}>
      <div className="action status" onClick={() => setGameDone(!gameDone)}>{!gameDone ? 'done' : 'undo'}</div>
      <input type="text" value={inputValue} ref={myRef} onChange={e => setInputValue(e.target.value)} />
      <div className="action active" onClick={() => onChangeActiveGame(myRef.current.value)}>active</div>
      <style jsx>{`
        li {
          width: 48px;
          height: 48px;
          border: 2px solid red;
          position: relative;
          box-sizing: border-box;
        }

        li:hover .action {
          opacity: 1;
        }

        li.active {
          border-color: blue;
        }

        li.active input {
          color: blue;
        }

        li.done {
          border-color: green !important;
        }

        li.done input {
          color: green !important;
        }

        input {
          background: transparent;
          color: red;
          font-size: 20px;
          text-align: center;
          text-transform: uppercase;
          line-height: 48px;
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
          padding: 0;
        }

        .action {
          font-size: 12px;
          text-align: center;
          background: gray;
          height: 20px;
          line-height: 20px;
          position: absolute;
          left: 4px;
          right: 4px;
          opacity: 0;
          cursor: pointer;
        }

        .action.status {
          top: -20px;
        }

        .action.active {
          bottom: -20px;
        }

      `}</style>
    </li>
  );
}

export default Game;