import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export function MailALert() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const StyledBadge1 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: ' rgb(219, 217, 217)',
      color: 'rgb(219, 217, 217)',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const StyledBadge2 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#f6c23e',
      color: '#f6c23e',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <Card className="whole-mail-card">
      <p className="mail-header">Message Center</p>

      <div className="mail-card1">
        <Stack direction="row" spacing={2}>
          <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
            <Avatar alt="avatar-1" src="https://w7.pngwing.com/pngs/832/40/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" />
          </StyledBadge>
        </Stack>
        <p className="mail-content">Hi there! I am wondering if you...</p>
        <p className="mail-name">Emily Fowler . 58m</p>
      </div>

      <div className="mail-card2">
        <Stack direction="row" spacing={2}>
          <StyledBadge1 overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
            <Avatar alt="avatar-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLisiTQLfqYQkdV3tXs0wqdGGwRGZ4MOgYVA&usqp=CAU" />
          </StyledBadge1>
        </Stack>
        <p className="mail-content">I have the photos that you ordere...</p>
        <p className="mail-name">Jae Chun . 1d</p>
      </div>

      <div className="mail-card3">
        <Stack direction="row" spacing={2}>
          <StyledBadge2 overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
            <Avatar alt="avatar-1" src="https://i.pinimg.com/originals/d2/29/fb/d229fb29f5a504fbb33eebc459780ee1.jpg" />
          </StyledBadge2>
        </Stack>
        <p className="mail-content">Last month's report looks great, I...</p>
        <p className="mail-name">Morgan Alvarez . 2d</p>
      </div>

      <div className="mail-card4">
        <Stack direction="row" spacing={2}>
          <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
            <Avatar alt="avatar-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOus_LhrbbEnHR_ieTgtXI0fkir7anC017AQ&usqp=CAU" />
          </StyledBadge>
        </Stack>
        <p className="mail-content">Am I a good boy? The reason I as...</p>
        <p className="mail-name">Chicken the Dog . 2w</p>
      </div>
      <div className="notification-bottom">
        Read More Messages
      </div>
    </Card>
  );
}
