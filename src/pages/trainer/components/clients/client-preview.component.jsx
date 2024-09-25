import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const clientData = [
  { name: "Osiris Simmons", lastViewed: "5 hours ago" },
  { name: "Saylor Quintero", lastViewed: "5 hours ago" },
  { name: "Zachariah Hartman", lastViewed: "3 days ago" },
  { name: "Marley Crosby", lastViewed: "2 weeks ago" },
  { name: "Jensen Greer", lastViewed: "2 weeks ago" },
  { name: "Ace Neal", lastViewed: "2 weeks ago" },
  { name: "Felix Delacruz", lastViewed: "1 month ago" },
  { name: "Dangelo Nielsen", lastViewed: "1 month ago" }
];

const ClientPreview = () => {
  return (
    <MDBox sx={{ height: 400, width: "100%" }}>
      <MDBox
        pt={0}
        mb={2}
        lineHeight={1.25}
        display="flex"
        justifyContent="space-between"
      >
        <MDTypography variant="h5" fontWeight="medium">
          Clients
        </MDTypography>
      </MDBox>

      <MDBox
        display="flex"
        justifyContent="space-between"
        pb={1}
        borderBottom="0.0625rem solid #3d444d!important"
      >
        <MDTypography variant="h6" fontWeight="medium">
          Name
        </MDTypography>
        <MDTypography variant="h6" fontWeight="medium">
          Last Viewed
        </MDTypography>
      </MDBox>

      <MDBox>
        {clientData.map((client, i) => (
          <MDBox
            display="flex"
            justifyContent="space-between"
            width="100%"
            borderBottom="0.0625rem solid #3d444d!important"
          >
            <MDTypography
              variant="h6"
              fontWeight="regular"
              display="flex"
              py={0.5}
              component={Link}
              to="/client-profile"
              color="info"
              sx={{ "&:hover": { textDecoration: "underline !important" } }}
            >
              {client.name}
            </MDTypography>
            <MDTypography
              variant="h6"
              fontWeight="regular"
              display="flex"
              py={0.5}
            >
              {client.lastViewed}
            </MDTypography>
          </MDBox>
        ))}
      </MDBox>
    </MDBox>
  );
};

export default ClientPreview;
