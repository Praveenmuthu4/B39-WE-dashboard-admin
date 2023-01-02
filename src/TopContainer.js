import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { NotificationPop } from "./NotificationPopup";
import { MailPop } from "./MailPopup";
import { AvatarPop } from "./AvatarPopup";
import AppBar from '@mui/material/AppBar';

export function TopContainer() {
  
  return (
    <AppBar color="">
    <div className="whole-container">
      <div className="top-container">
        <div className="header-content">
          <input
            type="search"
            className="searchBar"
            placeholder="Search for..."
          />
          <Button variant="contained" color="primary">
            <SearchIcon />
          </Button>
          <div className="notification">
            <NotificationPop/>
            <MailPop/>
            <span className="vertical-line"></span>
            <h className="avatar-name">Douglas McGee</h>

            <div className="avatar">
              <AvatarPop/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppBar>
  );
}
