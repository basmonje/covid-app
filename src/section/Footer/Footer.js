import React from "react";
import { Container } from "../../component";
import { animateScroll } from "react-scroll";
import { ArrowUp, Github } from "../../component/Icons";
import Link from "next/link";

export default function Footer() {
  const handle = () => animateScroll.scrollToTop();
  return (
    <footer>
      <Container>
        <div className="footer">
          <div className="text">
            <a
              className="git"
              href="https://github.com/basmonje/covid-app"
              target="__blank"
            >
              <Github /> covid-app
            </a>
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
                  <ArrowUp />
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
          align: center;
        }

        .git {
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          margin-bottom: 0.6rem;
        }

        li span {
          font-size: 2rem;
        }

        li span:hover {
          cursor: pointer;
        }
      `}</style>
    </footer>
  );
}
