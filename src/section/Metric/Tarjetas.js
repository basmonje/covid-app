import React from "react";
import { Container, Grid, Card } from "../../component";
import _ from "lodash";

export default function Comunas(props) {
  const { data } = props;
  const regionesData = _.values(data.regiones);
  return (
    <div className="tarjetas">
      <Container>
        <h1>Regiones</h1>
        <Grid>
          {regionesData &&
            regionesData.map(({ complete_name, activos }) => (
              <Card
                key={complete_name}
                label={complete_name}
                value={activos.value}
                tooltip={activos.date}
              />
            ))}
        </Grid>
      </Container>
      <style jsx>{`
        .tarjetas {
          padding-top: 100px;
          width: 100%;
        }

        h1 {
          padding-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
