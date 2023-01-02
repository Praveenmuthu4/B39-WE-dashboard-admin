import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import { MailALert } from './MailALert';



export function MailPop() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
     
     <button className="notification-button" aria-describedby={id} variant="contained" onClick={handleClick}>
              <Badge badgeContent="7" color="error">
                <MailIcon color="disabled" className="topContainer-button" />
              </Badge>
            </button>
     
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}><MailALert/></Typography>
      </Popover>
    </div>
  );
}
