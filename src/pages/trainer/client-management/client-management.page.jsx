import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";

// Mui components
import { Grid, Card, Divider, Avatar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import { FixedSizeList } from "react-window";

// components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// actions
import moment from "moment";
import Image from "components/Image/image.component";

// css
import colors from "assets/theme-dark/base/colors";
import MDInput from "components/MDInput";
const { background } = colors;

const ClientManagementPage = ({ user: { currentUser, loading } }) => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // Search input value state
  const [search, setSearch] = useState("");

  // Search input state handle
  // const onSearchChange = useAsyncDebounce((value) => {
  //   //setGlobalFilter(value || undefined);
  // }, 100);

  function renderRow(props) {
    const { index, style } = props;

    return (
      <ListItem
        style={style}
        key={index}
        component="div"
        secondaryAction={
          <Checkbox
            edge="end"
            onChange={handleToggle(index)}
            checked={checked.indexOf(index) !== -1}
            inputProps={{ "aria-labelledby": index }}
            sx={{ paddingRight: "2rem" }}
          />
        }
        disablePadding
        sx={{
          overflowY: "auto !important",
          overflowX: "hidden !important",
          scrollbarColor: `black grey !important`,
          scrollbarWdth: "thin !important"
        }}
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n° `}
              src={require(`assets/images/avatar/default-pic.png`)}
            />
          </ListItemAvatar>
          <MDTypography variant="h6">Client Name1</MDTypography>
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <MainLayout pageTitle="Trainer Dashboard">
      <MDBox
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          width="100%"
          maxWidth="1400px"
        >
          {/* Left Panel */}
          <MDBox
            width="30%"
            px={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Avatar
              alt="Remy Sharp"
              src={require("assets/images/me/me-and-isaiah.jpg")}
              sx={{ width: "100%", height: "20rem" }}
            />
            <MDTypography variant="h4" fontWeight="medium" mt={2}>
              Client Name1
            </MDTypography>
            <MDBox
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              flexDirection="column"
              width="100%"
            >
              <MDTypography variant="h5" fontWeight="medium">
                General
              </MDTypography>
              <MDBox ml={1} mb={1}>
                <MDTypography variant="h6">Email: </MDTypography>
                <MDTypography variant="h6">Phone Number: </MDTypography>
                <MDTypography variant="h6">DOB: </MDTypography>
                <MDTypography variant="h6">Gender: </MDTypography>
              </MDBox>
              <MDTypography variant="h5" fontWeight="medium">
                Health Information
              </MDTypography>
              <MDBox ml={1} mb={1}>
                <MDTypography variant="h6">Height: </MDTypography>
                <MDTypography variant="h6">Weight: </MDTypography>
                <MDTypography variant="h6">Fitness Level: </MDTypography>
                <MDTypography variant="h6">Fitness Goals: </MDTypography>
                <MDTypography variant="h6">Medical Conditions: </MDTypography>
              </MDBox>
              <MDTypography variant="h5" fontWeight="medium">
                Weight History
              </MDTypography>
              <MDBox ml={1}>
                <MDTypography variant="h6">Graph here... </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>

          {/* Right Panel */}
          <MDBox width="70%" px={1}>
            {/* Client List */}
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              flexDirection="column"
              sx={{
                overflowY: "auto !important",
                overflowX: "hidden !important"
              }}
            >
              <MDBox display="flex" justifyContent="space-between" width="100%">
                <MDTypography variant="h4" fontWeight="medium">
                  Client list
                </MDTypography>
                <MDInput
                  placeholder="Search..."
                  value={search}
                  size="small"
                  onChange={({ currentTarget }) => {
                    setSearch(search);
                    //onSearchChange(currentTarget.value);
                  }}
                  sx={{ marginBottom: ".5rem" }}
                />
              </MDBox>
              <FixedSizeList
                height={600}
                width={"100%"}
                itemSize={60}
                itemCount={200}
                style={{ border: `1px solid ${background.border}` }}
              >
                {renderRow}
              </FixedSizeList>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </MainLayout>
  );
};
ClientManagementPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {})(ClientManagementPage);

//border: `1px solid ${background.border}`

{
  /* <ListItem
sx={{ marginBottom: "1rem" }}
key={value}
secondaryAction={
  <Checkbox
    edge="end"
    onChange={handleToggle(value)}
    checked={checked.indexOf(value) !== -1}
    inputProps={{ "aria-labelledby": labelId }}
  />
}
disablePadding
>
<ListItemButton>
  <ListItemAvatar>
    <Avatar
      alt={`Avatar n°${value + 1}`}
      src={`/static/images/avatar/${value + 1}.jpg`}
    />
  </ListItemAvatar>
  <ListItemText
    id={labelId}
    primary={`Line item ${value + 1}`}
    sx={{ color: "text.main" }}
  />
</ListItemButton>
</ListItem> */
}
