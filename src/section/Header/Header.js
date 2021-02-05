import React from "react";
import Navbar from "../Navbar";
import { Container } from "../../component";
import { Virus, Viruses } from "../../component/Icons";

export default function Header() {
  return (
    <header className="header">
      <Navbar />
      <Container>
        <div className="text">
          <h1>Covid-19 en Chile</h1>
          <p>Página en construcción.</p>
        </div>
      </Container>
      <div className="blob">
        <Virus />
      </div>
      <div className="bloright">
        <Viruses />
      </div>
      <style jsx>{`
        .header {
          background: #eeeeee;
          padding-bottom: 100px;
          position: relative;
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
