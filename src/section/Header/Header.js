import React from "react";
import Navbar from "../Navbar";
import { Container } from "../../component";

export default function Header() {
  return (
    <header className="header">
      <Navbar />
      <Container>
        <div className="text">
          <h1>Covid-19 en Chile</h1>
        </div>
      </Container>
      <style jsx>{`
        .header {
          background: #e8e8e8;
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

        .text {
          z-index: 1;
          position: relative;
        }

        .text h1 {
          font-size: 3rem;
          font-weight: 600;
          color: #333;
          padding-bottom: 1.3rem;
        }

        .text p {
          color: #333;
          font-size: 1rem;
        }

        @media (min-width: 768px) {
          .text h1 {
            font-size: 4.5rem;
          }

          .text p {
            font-size: 1.2rem;
          }
        }

        @media (min-width: 992px) {
          .text h1 {
            font-size: 6.5rem;
          }

          .text p {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </header>
  );
}
