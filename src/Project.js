import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@mui/material/Card";

export function Project() {
  return (
    <div className="whole-project-container">
      <div className="card-top">Projects</div>
      <div className="card-percentage">
        Server Migration 20%
        <ProgressBar now={20} variant="danger" />
        Sales Tracking 40%
        <ProgressBar now={40} variant="warning" />
        Customer Database 60%
        <ProgressBar now={60} />
        Payout Details 80%
        <ProgressBar now={80} variant="info" />
        Account Setup Complete
        <ProgressBar now={100} variant="success" />
      </div>
      <div className="card-bottom">
        <Card
          className="primary"
          sx={{
            bgcolor: "#4e73df",
            height: "85px",
            width: "427.25px",
            color: "white",
          }}
        >
          Primary
          <p>#4e73df</p>
        </Card>
        <Card
          className="primary"
          sx={{
            bgcolor: "#1cc88a",
            height: "85px",
            width: "427.25px",
            color: "white",
          }}
        >
          Success
          <p>#1cc88a</p>
        </Card>
        <Card
          className="primary"
          sx={{
            bgcolor: "#36b9cc",
            height: "85px",
            width: "427.25px",
            color: "white",
          }}
        >
          Info
          <p>#36b9cc</p>
        </Card>
        <Card
          className="primary"
          sx={{
            bgcolor: "#f6c23e",
            height: "85px",
            width: "427.25px",
            color: "white",
          }}
        >
          Warning
          <p>#f6c23e</p>
        </Card>
        <Card
          className="primary"
          sx={{
            bgcolor: "#e74a3b",
            height: "85px",
            width: "427.25px",
            color: "white",
          }}
        >
          Danger
          <p>#e74a3b</p>
        </Card>
        <Card
          className="primary"
          sx={{
            bgcolor: "#858796",
            height: "85px",
            width: "427.25px",
            color: "white",
          }}
        >
          Secondary
          <p>#858796</p>
        </Card>
        <Card
          className="primary"
          sx={{
            bgcolor: "#f8f9fc",
            height: "85px",
            width: "427.25px",
            color: "gray",
          }}
        >
          Light
          <p>#f8f9fc</p>
        </Card>
        <Card
          className="primary"
          sx={{
            bgcolor: "#5a5c69",
            height: "85px",
            width: "427.25px",
            color: "white",
          }}
        >
          Dark
          <p>#5a5c69</p>
        </Card>
      </div>
    </div>
  );
}
