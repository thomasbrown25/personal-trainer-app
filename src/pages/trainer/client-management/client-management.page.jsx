import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

// Mui components
import { Card, Avatar, CardContent, Icon } from "@mui/material";

// components
import MainLayout from "layouts/main-layout";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import LineChart from "components/LineChart";

// actions
import { selectCurrentUser } from "store/user/user.selector";
import { getClients } from "store/trainer/trainer.action";

// css
import colors from "assets/theme-dark/base/colors";
import DataTable from "components/DataTable";
import MDButton from "components/MDButton";
import UserCard from "./user-card";
const { background } = colors;

const ClientManagementPage = ({ trainer: { clients }, getClients }) => {
  const user = useSelector(selectCurrentUser);
  const [clientTableData, setClientTableData] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    getClients(user?.id);
  }, [getClients, user?.id]);

  const buildData = () => {
    let data = [];

    clients?.map((client) => {
      data.push({
        id: client.id,
        name: client.firstname + " " + client.lastname,
        fitnessLevel: client.fitnessLevel,
        gender: client.sex,
        lastVisited: moment(client.lastVisited).format("MM-DD-YYYY")
      });
    });
    setClientTableData(data);
  };

  useEffect(() => {
    buildData();
  }, []);

  useEffect(() => {
    if (clients.length > 0) {
      setSelectedClient(clients[0]);
    }
  }, []);

  const handleClientClick = (id) => {
    setSelectedClient(clients[id]);
  };

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
          <MDBox
            px={1}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Avatar
              alt="Remy Sharp"
              src={require("assets/images/me/gym-1.jpg")}
              sx={{ width: "25%", height: "20rem" }}
            />
            <MDTypography variant="h4" fontWeight="medium" mt={2}>
              {selectedClient?.firstname + " " + selectedClient?.lastname}
            </MDTypography>
            <MDBox width="100%" display="flex" justifyContent="flex-start">
              <Icon color="info">people</Icon>
              <MDTypography
                variant="button"
                color="info"
                component={Link}
                to="/trainer/add-new-client"
                sx={{ "&:hover": { textDecoration: "underline !important" } }}
                ml={1}
              >
                Add Client
              </MDTypography>
            </MDBox>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              width="100%"
              mt={2}
            >
              <MDBox display="flex" width="100%">
                <UserCard user={selectedClient} />
                <Card sx={{ ml: 2, width: "100%" }}>
                  <MDBox
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <MDTypography mb={2}>Custom plan</MDTypography>
                    <Link
                      to={`/trainer/client-management/edit-workout-plan/${selectedClient?.id}`}
                    >
                      <MDButton variant="outlined" color="info">
                        Edit Workout Plan
                      </MDButton>
                    </Link>
                  </MDBox>
                </Card>
              </MDBox>

              <MDBox mt={8} width="100%">
                <Card sx={{ width: "100%" }}>
                  <MDBox
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    pb={2}
                  >
                    <MDTypography my={2}>Workout for Today</MDTypography>
                    <MDTypography>Upper Body</MDTypography>
                    <MDTypography variant="h6" color="info">
                      4x8 Bench Press
                    </MDTypography>
                    <MDTypography variant="h6" color="info">
                      4x10 Dumbbell curls
                    </MDTypography>
                    <MDTypography variant="h6" color="info">
                      4x15 Tricep dips
                    </MDTypography>
                    <MDTypography mt={2}>Back</MDTypography>
                    <MDTypography variant="h6" color="info">
                      {" "}
                      4x8 Deadlifts
                    </MDTypography>
                    <MDTypography variant="h6" color="info">
                      {" "}
                      4x10 Pullups
                    </MDTypography>
                    <MDTypography variant="h6" color="info">
                      {" "}
                      4x15 Rows
                    </MDTypography>
                    <MDTypography mt={2}>Core</MDTypography>
                    <MDTypography variant="h6" color="info">
                      {" "}
                      4x8 Leg raises
                    </MDTypography>
                    <MDTypography variant="h6" color="info">
                      {" "}
                      4x10 Russian twists
                    </MDTypography>
                    <MDTypography variant="h6" color="info">
                      {" "}
                      2x60(secs) Planks
                    </MDTypography>
                  </MDBox>
                </Card>
              </MDBox>

              <MDBox mt={8} width="100%">
                <MDTypography variant="h5" fontWeight="medium">
                  Weight History
                </MDTypography>
                <MDBox mt={2}>
                  <LineChart
                    icon={{ color: "info", component: "fitness_center" }}
                    title="Current: 220 lbs"
                    description="Goal: 215 lbs"
                    chart={{
                      labels: [
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                      ],
                      datasets: [
                        {
                          label: "Current",
                          color: "info",
                          data: [240, 238, 236, 234, 237, 233, 225, 222, 220]
                        },
                        {
                          label: "Goal",
                          color: "success",
                          data: [215, 215, 215, 215, 215, 215, 215, 215, 215]
                        }
                      ]
                    }}
                  />
                </MDBox>
              </MDBox>
            </MDBox>
            {/* Client List */}
            <MDBox
              mt={8}
              width="100%"
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
                <MDTypography variant="h5" fontWeight="medium">
                  Clients
                </MDTypography>
              </MDBox>
              {clients.length > 0 ? (
                <DataTable
                  canSearch
                  handleClientClick={handleClientClick}
                  table={{
                    columns: [
                      { Header: "name", accessor: "name", width: "40%" },
                      {
                        Header: "fitness level",
                        accessor: "fitnessLevel",
                        width: "25%"
                      },
                      { Header: "gender", accessor: "gender" },
                      {
                        Header: "last visited",
                        accessor: "lastVisited",
                        width: "12%"
                      }
                    ],
                    rows: clientTableData
                  }}
                />
              ) : (
                <MDTypography variant="h6">No Clients </MDTypography>
              )}
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </MainLayout>
  );
};
ClientManagementPage.propTypes = {
  trainer: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  trainer: state.trainer
});

export default connect(mapStateToProps, { getClients })(ClientManagementPage);
