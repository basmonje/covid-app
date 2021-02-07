import React from "react";
import { Container } from "../../component";

export default function Information() {
  return (
    <div className="information">
      <Container>
        <p>
          Los datos se obtienen directamente de{" "}
          <a href="https://github.com/javierlopeza/datos-coronavirus-chile">
            javierlopeza/datos-coronavirus-chile
          </a>
          . Allí encontrará los scripts que procesan archivos PDF publicados
          todos los días por el gobierno.
        </p>
        <div className="links">
          <a className="" href="https://github.com/MinCiencia/Datos-COVID19">
            MinCiencia
          </a>
        </div>
      </Container>
      <style jsx>{`
        .information {
          width: 100%;
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .information p {
          color: #333;
          font-size: 1.4rem;
        }

        .information p a {
          color: #3339;
        }

        .information p a:hover {
          color: #333;
        }
      `}</style>
    </div>
  );
}
