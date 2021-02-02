import React from "react";

export default function Grid(props) {
  return (
    <div className={`${props.className || "grid"}`}>
      {props.children}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-gap: 1rem;
        }

        @media (min-width: 767px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: none;
          }
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-gap: 1rem;
        }

        @media (min-width: 767px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
