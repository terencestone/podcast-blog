import { transit } from "react-css-transition";

/* Primarily used for animation transition styles */
const homeStyles = {
  defaultTransition: {
    transform: "scale(1, 1)",
    borderRadius: 130
  },
  onEnter: {
    transform: transit("scale(1.3, 1.3)", 500, "ease-in-out"),
    transformOrigin: "left right",
    boxShadow: '0px 0px 130px gold',
    borderRadius: 130
  },
  onLeave: {
    transform: transit("scale(1, 1)", 500, "ease-in-out"),
    transformOrigin: "left right",
    boxShadow: '0px 0px 0px',
    borderRadius: 130
  },
  active: {
    transform: "scale(1.3, 1.3)",
    transformOrigin: "left right",
    boxShadow: '0px 0px 130px gold',
    borderRadius: 130
  },
  defaultTitle: {
    opacity: 0,
    transform: "scale(1.3, 1.3)",
    transformOrigin: "left right",
  },
  onEnterTitle: {
    transform: "scale(1.3, 1.3)",
    opacity: transit(1, 500, "ease-in-out"),
    zIndex: 99
  },
  onLeaveTitle: {
    transform: "scale(1.3, 1.3)",
    opacity: transit(0, 300, "ease-in-out"),
    zIndex: 99
  },
  activeTitle: {
    transform: "scale(1.3, 1.3)",
    transformOrigin: "left right",
    zIndex: 99
  }
}

export default homeStyles