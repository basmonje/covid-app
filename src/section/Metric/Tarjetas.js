import React from "react";
import { Container, Grid, Card } from "../../component";
import _ from "lodash";
import TitleCard from "../../component/Card/Title";

export default function Comunas(props) {
  const { data } = props;
  const regionesData = _.values(data.regiones);
  return (
    <div className="tarjetas">
      <Container>
        <TitleCard title="Regiones" />
        <Grid>
          {regionesData &&
            regionesData.map(({ complete_name, activos }) => (
              <Card
                key={complete_name}
                label={complete_name}
                value={`Activos ${activos.value}`}
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
