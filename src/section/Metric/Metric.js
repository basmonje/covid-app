import React from "react";
import { Container, Grid, Card } from "../../component";
import _ from "lodash";
import TitleCard from "../../component/Card/Title";
import { Element } from "react-scroll";

export default function Comunas({ data, type, title = "Regiones" }) {
  console.log(data);
  return (
    <div className="tarjetas">
      <Element name="regiones">
        <Container>
          <TitleCard title={title} />
          {type == "home" ? (
            <CardListHome data={data} />
          ) : (
            <CardListRegiones data={data} />
          )}
        </Container>
      </Element>
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

function CardListHome({ data }) {
  return (
    <Grid>
      {data &&
        data.map(({ complete_name, activos, slug }) => (
          <Card
            key={complete_name}
            label={complete_name}
            value={`Activos ${activos.value}`}
            tooltip={activos.date}
            slug={slug}
          />
        ))}
    </Grid>
  );
}

function CardListRegiones({ data }) {
  return (
    <Grid>
      {data &&
        data.map(({ name, activos, slug }) => (
          <Card
            key={name}
            label={name}
            value={`Activos ${activos.value}`}
            tooltip={activos.date}
            slug={slug}
          />
        ))}
    </Grid>
  );
}
