import React from "react";
import { Container } from "../../component";

export default function Information() {
  return (
    <div className="information">
      <Container>
        <div className="text">
          <h1>Covid-19 en Chile:</h1>
          <p>
            Las siguientes gráficas corresponden a las cifras oficiales
            reportadas por el{" "}
            <a href="https://github.com/MinCiencia/Datos-COVID19">
              Ministerio de salud
            </a>{" "}
            en sus Reportes Diarios de Covid-19 e Informe Epidemiológico
            Covid-19.
          </p>
          <p>
            Los datos obtenidos desde el Ministerio de salud son procesadas por{" "}
            <a href="https://github.com/javierlopeza/datos-coronavirus-chile">
              javierlopeza/datos-coronavirus-chile
            </a>
            . Allí encontrará los scripts que procesan archivos PDF publicados
            todos los días por el gobierno.
          </p>
        </div>
      </Container>
      <style jsx>{`
        .information {
          width: 100%;
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .information h1 {
          margin-bottom: 1.4rem;
        }

        .information p {
          color: #333;
          font-size: 1.4rem;
          margin-bottom: 1rem;
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
