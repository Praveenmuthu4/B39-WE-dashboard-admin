import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

export const ScrollButton = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    }
    else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="scroll-button">

      <KeyboardArrowUpIcon color="disabled" className="arrow-button" onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }} />

    </div>
  );

};
