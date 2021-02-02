import React, { useState } from "react";

export default function Card(props) {
  const { className, label, value, tooltip } = props;
  const [active, setActive] = useState(false);

  return (
    <div className={`card ${className || ""}`}>
      <h1>{label}</h1>
      <span>{value}</span>
      <div
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
      />
      {active && <Nube tooltip={`Ultima actualizacion ${tooltip}`} />}
      <style jsx>{`
        .card {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 8px;
          padding: 2rem;
          background: #e3f6f5;
          position: relative;
          color: #333;
          border: 5px solid #333;
        }

        h1 {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        span {
          font-size: 1.2rem;
        }

        div {
          padding: 1rem;
          position: absolute;
          border: none;
          border-radius: 50%;
          top: 3px;
          right: 3px;
          font-size: 0.6rem;
        }

        div:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function Nube(props) {
  return (
    <div className="nube">
      <p>{props.tooltip}</p>
      <style jsx>{`
        .nube {
          z-index: 1;
          position: absolute;
          width: 100%;
          padding: 1rem;
          bottom: 0;
          right: 0;
          background: #d44;
          border: none;
          border-radius: 8px;
        }

        p {
          color: #333;
        }
      `}</style>{" "}
    </div>
  );
}
