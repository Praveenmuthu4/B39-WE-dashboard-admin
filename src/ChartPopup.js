import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { ChartAlert } from './ChartAlert';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function ChartPopup() {
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
<button className="chart-alert-button" aria-describedby={id} variant="contained" onClick={handleClick}>
<MoreVertIcon color="disabled"/>
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

<Typography sx={{ p: 2 }}><ChartAlert/></Typography>
        </Popover>
        </div>

    );
}
