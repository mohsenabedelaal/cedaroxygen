import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
      ],
      datasets: [
        {
          label: "Average Platform Ratio",
          fill: true,
          lineTension: 0,
          backgroundColor: "rgba(51,199,191, .3)",
          borderColor: "rgb(51,199,191)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40, 60, 55, 70, 80],
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer height="50">
        <div style={{ backgroundColor: "rgb(240,240,240)" }}>
          <h3 className="mt-3 text-dark" style={{ padding: "3%" }}>
            Average USD to LBP rate
          </h3>
          <Line data={this.state.dataLine} options={{ responsive: true }} />
        </div>
      </MDBContainer>
    );
  }
}

export default ChartsPage;
