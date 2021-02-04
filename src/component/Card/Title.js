import React from "react";

export default function Title({ title }) {
  return (
    <div className="card-title">
      <h1 className="title">{title}</h1>
      <style jsx>{`
        .card-title {
          border: 5px solid #333;
          background: #e3f6f5;
          padding: 1rem 2rem;
          margin-bottom: 1rem;
          border-radius: 8px;
        }

        .card-title:hover {
          transform: scale(1.02);
          transition: all 100ms;
        }

        .card-title > h1 {
          color: #333;
        }
      `}</style>
    </div>
  );
}
