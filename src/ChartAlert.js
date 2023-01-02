import { Card } from "@mui/material";

export function ChartAlert(){
    return(
        <Card className="chart-alert">
            <p className="chart-alert-header">DROPDOWN HEADER:</p>
            <p className="chart-popup">Action</p>
            <p className="chart-popup">Another action</p>
            <button className="chart-popup-button">Smothing else here</button>
        </Card>
    );
}