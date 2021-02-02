import React from "react";

export default function Container(props) {
  return (
    <div className={`container ${props.className || ""}`}>
      {props.children}{" "}
      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
          padding-left: 15px;
          padding-right: 15px;
        }

        @media (min-width: 767px) {
          .container {
            max-width: 760px;
          }
        }

        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }
      `}</style>
    </div>
  );
}
