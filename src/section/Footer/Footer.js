import React from "react";
import { Container } from "../../component";
import { animateScroll } from "react-scroll";
import Link from "next/link";

export default function Footer() {
  const handle = () => animateScroll.scrollToTop();
  return (
    <footer>
      <Container>
        <div className="footer">
          <div className="text">
            <h1>covid-19</h1>
            <p>
              © Copyright {new Date().getFullYear()} ~{" "}
              <a href="https://basmonje.work" target="__blank">
                basmonje
              </a>
            </p>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <span className="ex" onClick={handle}>
                  Subir
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
      <style jsx>{`
        footer {
          width: 100%;
          padding-top: 100px;
          padding-bottom: 20px;
        }

        .footer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        footer a {
          color: #333;
        }

        li span {
          font-size: 2rem;
        }
      `}</style>
    </footer>
  );
}
