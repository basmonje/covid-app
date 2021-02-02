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
  console.log(chartDate);
  return (
    <div className="chart-cont padding-top">
      <Container>
        <div className="chart-card shadow-row">
          <Line
            data={{
              labels: chartDate,
              datasets: [
                {
                  label: "# Casos activos",
                  data: chartValue,
                  backgroundColor: ["#98abf8"],
                  borderColor: ["#98abf8"],
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
          padding: 2rem 4rem;
          border: none;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
