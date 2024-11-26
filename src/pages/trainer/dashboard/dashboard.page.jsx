import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";

// Mui components
import { Grid } from "@mui/material";

// actions
import { selectCurrentUser } from "store/user/user.selector";

import Header from "components/Header/header.component";
import RecentActivity from "components/RecentActivity/recent-activity.component";

const TrainerDashboardPage = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <>
      <MainLayout>
        <Grid container spacing={10} sx={{ marginTop: "0" }}>
          <Grid item xs={12} sm={12} sx={{ paddingTop: "0 !important" }}>
            <Header title={`Good evening, ${user.firstname}!`} />

            <RecentActivity />
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};
TrainerDashboardPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {})(TrainerDashboardPage);
