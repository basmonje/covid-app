import React from "react";

export default function Col(props) {
  return (
    <div className={props.className || "col"}>
      {props.children}
      <style jsx>{`
        .col {
          width: 100%;
          max-width: 100%;
          flex: 0 0 100%;
        }

        .col-3 {
          flex: 0 0 100%;
          max-width: 100%;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .col-3 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        @media (min-width: 992px) {
          .col-3 {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
          }
        }
      `}</style>{" "}
    </div>
  );
}
