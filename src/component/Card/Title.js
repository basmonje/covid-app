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
          border: 1px solid #3335;
          transition: all 300ms ease-in-out;
        }

        .card-title:hover {
          border: 1px solid #333;
          transform: translate(0, -7px);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
            0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
            0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
            0 32px 64px rgba(0, 0, 0, 0.07);
        }

        .card-title > h1 {
          color: #333;
        }
      `}</style>
    </div>
  );
}
