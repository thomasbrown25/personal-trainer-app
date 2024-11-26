import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

// components
import MainLayout from "layouts/main-layout";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// actions
import { selectCurrentUser } from "store/user/user.selector";
import { getClients } from "store/trainer/trainer.action";

// css
import DataTable from "components/DataTable";

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
        clientId: client.id,
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
  }, [clients]);

  const navigate = useNavigate();
  const handleClientClick = (clientId) => {
    navigate(`/trainer/client-profile/${clientId}`);
  };

  return (
    <MainLayout pageTitle="Trainer Dashboard">
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
