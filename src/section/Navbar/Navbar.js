import React from "react";
import Link from "next/link";
import { Container } from "../../component";

export default function Navbar() {
  return (
    <header className="navbar">
      <Container>
        <nav className="nav">
          <div className="logo">
            <p>covid19</p>
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
        </nav>
      </Container>
      <style jsx>{`
        .navbar {
          width: 100%;
          background: #1b262c;
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

        .nav .logo p {
          color: #ddd;
        }
        li a {
          padding: 1rem 2rem;
          font-weight: 600;
          color: #ddd;
        }
      `}</style>
    </header>
  );
}
