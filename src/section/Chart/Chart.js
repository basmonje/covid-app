import React from "react";
import { Line } from "react-chartjs-2";
import { Container } from "../../component";

export default function Chart(props) {
  const chartValue = props.data.map(({ value }) => {
    return value;
  });

  const chartDate = props.data.map(({ date }) => {
    return date;
  });
  return (
    <div className="chart-cont padding-top">
      <Container>
        <div className="chart-card">
          <Line
            data={{
              labels: chartDate,
              datasets: [
                {
                  label: "# Casos activos",
                  data: chartValue,
                  fill: true,
                  backgroundColor: "rgba(75,192,192,0.2)",
                  borderColor: "rgba(75,192,192,1)",
                  borderWidth: 3,
                  pointBackgroundColor: "transparent",
                  pointBorderColor: "#FFF0",
                  pointHoverBorderWidth: 5,
                },
              ],
            }}
          />
        </div>
      </Container>
      <style jsx>{`
        .chart-card {
          padding: 2rem 1rem;
          border: 5px solid #333;
          border-radius: 8px;
          background: #e3f6f5;
        }
      `}</style>
    </div>
  );
}
