import { Card } from "@mui/material";
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { PopOver } from "./PopOver";


export function AvatarAlert() {
  return (
    <Card className="whole-avatar-container">
      <div className="avatar-icon-content">
        <p className="avatar-onclick"><Person2Icon color="disabled" />Profile</p>
        <p className="avatar-onclick"><SettingsIcon color="disabled" />Settings</p>
        <p className="avatar-onclick"><DehazeIcon color="disabled" />Activity Log</p>
      </div>
      <PopOver/>
     
    </Card>
  );
}
