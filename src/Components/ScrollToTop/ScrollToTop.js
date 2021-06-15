import React from "react";
import { useScrollTrigger, Zoom, Fab } from "@material-ui/core";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@material-ui/icons";

function ScrollToTop(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Zoom in={trigger}>
        <div
          onClick={handleScroll}
          role="presentation"
          style={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            zIndex: 10,
          }}
        >
          <Fab
            size="small"
            aria-label="scroll back to top"
            style={{
              background:
                "linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)",
              outline: "none",
              color: "#fff",
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    </>
  );
}

export default ScrollToTop;
