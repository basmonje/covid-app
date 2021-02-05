import React, { useRef } from "react";
import { Link, scroller } from "react-scroll";
import { Container } from "../../component";

export default function Navigation(props) {
  const ref = useRef(null);

  const handleButton = () => {
    // ref.current.focus();
    ref.current.style.background = "#3335";
  };

  const handleTravel = ({ name, offset = -100 }) =>
    scroller.scrollTo(name, {
      duration: 600,
      delay: 100,
      smooth: true,
      offset: offset,
      activeClass: "active",
      spy: true,
    });

  function handle(e) {
    e.target.style.background = "red";
  }

  return (
    <div className="navigator" ref={ref}>
      <Container>
        <div className="menu">
          <ul>
            <li onClick={() => handleTravel({ name: "hero" })}>
              <span>Chile</span>
            </li>
            <li onClick={() => handleTravel({ name: "regiones" })}>
              <span>Regiones</span>
            </li>
          </ul>
        </div>
      </Container>
      <style jsx>{`
        .navigator {
          width: 100%;
          position: sticky;
          z-index: 99;
          top: 20px;
          margin-top: 1rem;
        }

        .navigator .menu ul {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .navigator .menu ul li {
          margin-right: 1rem;
          background: #fff3b2;
          padding: 1rem 2rem;
          border-radius: 7px;
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
        }

        .navigator .menu ul li:hover {
          cursor: pointer;
          background: #f5d782;
        }

        .navigator .menu ul li a {
          color: #ddd !important;
        }

        .hidden-sleep {
          display: none;
        }

        @media (min-width: 676px) {
          .hidden-sleep {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
