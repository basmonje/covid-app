import React from "react";

export default function Title({ title }) {
  return (
    <div className="card-title">
      <h1 className="title">{title}</h1>
      <style jsx>{`
        .card-title {
          background: #e3f6f5;
          padding: 1rem 2rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          border: 5px solid #3339;
          transition: all 500ms ease-in-out;
        }

        .card-title:hover {
          border: 5px solid #333;
          transform: translate(0, -10px);
        }

        .card-title > h1 {
          color: #333;
        }
      `}</style>
    </div>
  );
}
