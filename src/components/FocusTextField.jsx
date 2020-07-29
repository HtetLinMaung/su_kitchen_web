import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input: {
    borderWidth: 0,
    padding: ".6rem .9rem",
    borderRadius: 10,
    width: "100%",
    color: "#E9E9E9",
    backgroundColor: "#FEFEFE",
    transition: "all 0.3s",
    "&:focus": {
      color: "#545F6D",
      outline: "none",
      boxShadow:
        "0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important"
    },
    "&::placeholder": {
      color: "#E9E9E9"
    }
  }
}));

const FocusTextField = (props) => {
  const classes = useStyles();

  return (
    <input
      {...props}
      type={props.type}
      className={`${classes.input} ${props.className}`}
    />
  );
};

FocusTextField.prototype = {
  type: PropTypes.string,
  className: PropTypes.string
};
FocusTextField.defaultProps = {
  type: "text",
  className: ""
};

export default FocusTextField;
