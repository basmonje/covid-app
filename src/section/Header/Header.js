import React from "react";
import Navbar from "../Navbar";
import { Container } from "../../component";

export default function Header() {
  return (
    <header className="header">
      <Navbar />
      <Container>
        <div className="text">
          <h1>
            Covid-19 <br /> en Chile
          </h1>
          <p>Página en construcción.</p>
        </div>
      </Container>
      <style jsx>{`
        .header {
          background: #9ab3f5;
          padding-bottom: 100px;
        }

        .text {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          margin-top: 3rem;
        }

        .text h1 {
          font-size: 3rem;
          font-weight: 600;
          color: #333;
          padding-bottom: 1rem;
        }

        .text p {
          color: #333;
        }
      `}</style>
    </header>
  );
}
