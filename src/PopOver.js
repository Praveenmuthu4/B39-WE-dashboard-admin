import { Popup } from "./LogOut";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';


export function PopOver() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return <div>
    <div className="avatar-bottom">
        <button className="avatar-button" onClick={togglePopup}>
          <LogoutIcon color="disabled" className="avatar-onclick" />Logout
        </button>
      </div>

    {isOpen && <Popup
      content={<>
        <h3 className="popup-heading">Ready to Leave?</h3>
        <p>Select "Logout" below if you are ready to end your current session.</p>
        <button className="cancel-button">Cancel</button>
        <button className="logout-button">Logout</button>
      </>}
      handleClose={togglePopup} />}
  </div>;
}
