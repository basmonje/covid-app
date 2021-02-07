import React from "react";

export default function Modal(props) {
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
          font-size: 0.8rem;
        }
      `}</style>{" "}
    </div>
  );
}
