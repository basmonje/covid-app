import React, { useRef } from "react";
import { Link, scroller } from "react-scroll";
import { Container } from "../../component";

export default function Navigation() {
  const ref = useRef(null);
  const handleTravel = ({ name, offset = -100 }) =>
    scroller.scrollTo(name, {
      duration: 600,
      delay: 100,
      smooth: true,
      offset: offset,
      activeClass: "active",
      spy: true,
    });

  return (
    <div className="navigator" ref={ref}>
      <Container>
        <div className="menu">
          <ul>
            <li>
              <Link
                smooth={true}
                offset={-100}
                activeClass="active"
                spy={true}
                to="hero"
                className="button-dead"
              >
                Chile
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                offset={-100}
                activeClass="active"
                spy={true}
                to="regiones"
                className="button-dead"
              >
                Regiones
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <style jsx>{`
        .navigator {
          width: 100%;
          position: sticky;
          z-index: 99;
          top: 40px;
          margin-top: 2rem;
        }

        .navigator .menu ul {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .navigator .menu ul li {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
}
