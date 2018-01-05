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
  }
}

export default homeStyles