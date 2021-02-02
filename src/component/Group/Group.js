import React from "react";

export default function Group(props) {
  return (
    <div className={`group ${props.className || ""}`}>
      {props.children}
      <style jsx>{`
        .group {
          display: flex;
        }

        .wrap {
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
