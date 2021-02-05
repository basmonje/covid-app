import React from "react";
import Link from "next/link";
import { Container } from "../../component";
import ThemeMode from "./ThemeMode";

export default function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <nav className="nav">
          <div className="logo">
            <a href="https://basmonje.work">
              <p>basmonje</p>
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mode">
            <ThemeMode />
          </div>
        </nav>
      </Container>
      <style jsx>{`
        .navbar {
          width: 100%;
          background: transparent;
          z-index: 999999;
          position: relative;
        }

        .nav {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }
        .nav .menu ul {
          display: flex;
          align-items: center;
        }

        .nav .logo:hover {
          cursor: pointer;
        }

        .nav .logo p {
          color: #333;
          font-weight: 600;
        }

        .nav .logo p:hover {
          transition: all 200ms linear;
          transform: scale(1.1);
        }

        .menu {
          display: none;
        }

        li a {
          padding: 1rem 2rem;
          font-weight: 600;
          color: #ddd;
        }
      `}</style>
    </div>
  );
}
