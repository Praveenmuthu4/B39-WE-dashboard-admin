import Card from '@mui/material/Card';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export function NotificationAlert() {

  return (
    <Card className="whole-notification-card">
      <p className="notification-header">Alert Center</p>

      <div className="notification-container1">
        <FileCopyIcon className="icon-notification" sx={{ fontSize: '30px', color: "white", bgcolor: "blue", borderRadius: '50%' }} />
        <p className="notification-card">
          <h6 className="date">December 12, 2019</h6>
          <p className="notification-card-content">
            A new monthly report is ready to download!</p>
        </p>
      </div>

      <div className="notification-container2">
        <AttachMoneyIcon className="icon-notification" sx={{ fontSize: '30px', color: "white", bgcolor: "green", borderRadius: '50%' }} />
        <p className="notification-card">
          <h6 className="date">December 7, 2019</h6>
          <p className="notification-card-content">
            $290.29 has been deposited into your account!</p>
        </p>
      </div>

      <div className="notification-container3">
        <ReportProblemIcon className="icon-notification" sx={{ fontSize: '30px', color: "white", bgcolor: "#f6c23e", borderRadius: '50%' }} />
        <p className="notification-card">
          <h6 className="date">December 2, 2019</h6>
          <p className="notification-card-content">
            Spendind Alert: We'hv noticed unusually high spending on your account.</p>
        </p>
      </div>

      <div className="notification-bottom">
        Show All Alert
      </div>

    </Card>
  );
}
