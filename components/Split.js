import React, { useState } from 'react';

const Split = ({ name }) => {
  const [status, setStatus] = useState(false);
  return (
    <li className="wrapper">
      <p className="name">{name}</p>
      <span className={status ? 'green' : 'red'} onClick={() => setStatus(!status)} />
      <style jsx>{`
        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          cursor: pointer;
        }

        p {
          color: white;
          margin: 0;
        }

        span {
          background: red;
          width: 20px;
          height: 20px;
          border-radius: 100%;
        }

        span.green {
          background: green;
        }
      `}</style>
    </li>
  );
}

export default Split;