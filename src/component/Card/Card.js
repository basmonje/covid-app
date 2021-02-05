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
          border: 5px dotted #3339;
          transition: all 1s ease-in-out;
        }

        .card:hover {
          transition: all 500ms ease-in;
          border: 5px dotted #333;
          transform: translate(0, -10px);
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
