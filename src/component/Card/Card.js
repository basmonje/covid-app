import React, { useState } from "react";
import { Information } from "../Icons";

export default function Card(props) {
  const { className, label, value, tooltip } = props;
  const [active, setActive] = useState(false);

  return (
    <div className={`card ${className || ""}`}>
      <h1>{label}</h1>
      <span>{value}</span>

      <div
        className="information-alert"
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
      >
        <Information />
      </div>
      {active && <Nube tooltip={`última actualización ${tooltip}`} />}
      <style jsx>{`
        .card {
          width: 100%;  𕙔
          height: 100%;
          border: none;
          border-radius: 8px;
          padding: 2rem;
          background: #e3f6f5;
          position: relative;
          color: #333;
          border: 1px solid #3336;
          transition: all 300ms ease-in-out;
        }

        .card:hover {
          transition: all 300ms ease-in;
          border: 1px solid #333;
          transform: translate(0, -8px);
          box-shadow: 0 3px 3px rgba(0,0,0,0.2);
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

        .information-alert {
          transition: all 500ms ease-in-out;
          color: #f8dc81;
        }

        .information-alert:hover {
          color: #d44;
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
          width: 50%;
          padding: 1rem;
          bottom: -10px;
          right: -10px;
          background: #ffee93;
          border: 4px solid;
          border-radius: 8px;
          transition: all 500ms ease;
        }

        p {
          color: #333;
          font-weight: 600;
          font-size: 1rem;
        }
      `}</style>{" "}
    </div>
  );
}
