import React from "react";

export default function Text(props) {
  const { title, description } = props;
  return (
    <div className="text">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <style jsx>{`
        .text {
          padding-top: 100px;
        }

        h1 {
          font-size: 2rem;
        }

        @media (min-width: 767px) {
          h1 {
            font-size: 3rem;
          }
        }

        @media (min-width: 992px) {
          h1 {
            font-size: 4.5rem;
          }
        }
      `}</style>
    </div>
  );
}
