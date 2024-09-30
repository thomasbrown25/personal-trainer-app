// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

function DataTableBodyCell({
  noBorder,
  align,
  children,
  selectable,
  handleOnClick
}) {
  const linkStyle = {
    verticalAlign: "middle",
    "&:hover": { textDecoration: "underline !important" },
    cursor: "pointer"
  };

  // const handleOnClick = () => {
  //   console.log(children);
  // };

  const linkComponent = () => {
    return (
      <MDBox
        display="inline-block"
        width="max-content"
        color={"info"}
        sx={linkStyle}
        onClick={(e) => handleOnClick(e)}
      >
        {children}
      </MDBox>
    );
  };
  return (
    <MDBox
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({
        palette: { light },
        typography: { size },
        borders: { borderWidth }
      }) => ({
        fontSize: size.sm,
        borderBottom: noBorder
          ? "none"
          : `${borderWidth[1]} solid ${light.main}`
      })}
    >
      {selectable ? (
        linkComponent()
      ) : (
        <MDBox
          display="inline-block"
          width="max-content"
          color={"text"}
          sx={{ verticalAlign: "middle" }}
        >
          {children}
        </MDBox>
      )}
    </MDBox>
  );
}

// Setting default values for the props of DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  selectable: false,
  align: "left"
};

// Typechecking props for the DataTableBodyCell
DataTableBodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  selectable: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right", "center"])
};

export default DataTableBodyCell;
