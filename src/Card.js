import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ForumIcon from "@mui/icons-material/Forum";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CardData() {
  const percentage = 50
  return (
    <div className="whole-card-container" >

    <div className="card-container-1">
      <p className="header-1">EARNINGS(MONTHLY)</p>
      <div className="price"> $40,000 <CalendarTodayTwoToneIcon className="card-icon" color="disabled"  sx={{ fontSize: 40 }}/>
      </div>
    </div>

    <div className="card-container-2">
      <p className="header-2">EARNINGS (ANNUAL) </p>
      <div className="price">  $215,000<AttachMoneyIcon className="card-icon" color="disabled" sx={{ fontSize: 40 }}/>
      </div>
    </div>

    <div className="card-container-3">
      <p className="header-3">TASKS </p>
      <div className="price">50% <ProgressBar className='percent-bar' now={percentage}  variant="info"/> <ContentPasteIcon className="card3-icon" color="disabled" sx={{ fontSize: 40 }}/>
      </div>
    </div>

    <div className="card-container-4">
      <p className="header-4">PENDING REQUESTS </p>
      <div className="price">18 <ForumIcon className="card-icon4" color="disabled" sx={{ fontSize: 40 }}/> 
      </div>
    </div>

    </div>
  );
}
