import DownloadIcon from "@mui/icons-material/Download";
import Button from '@mui/material/Button';


export function Title() {
  return (
    <div className="title-container">
      <h1 className="title">Dashboard
      <span className="download-button">
      <Button variant="contained" color="primary" size="small">
      <DownloadIcon />Generate Report
</Button>
</span>
</h1>
     
    </div>
  );
}
