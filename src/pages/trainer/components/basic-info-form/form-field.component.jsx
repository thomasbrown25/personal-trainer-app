// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom components
import MDInput from "components/MDInput";

function FormField({ label, ...rest }) {
  return (
    <MDInput
      variant="standard"
      label={label}
      fullWidth
      InputLabelProps={{ shrink: true }}
      {...rest}
    />
  );
}

// Setting default values for the props of FormField
FormField.defaultProps = {
  label: " "
};

// Typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string
};

export default FormField;
