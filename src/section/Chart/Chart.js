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
          border: 5px solid #333;
          border-radius: 8px;
          background: #e3f6f5;
        }
      `}</style>
    </div>
  );
}
