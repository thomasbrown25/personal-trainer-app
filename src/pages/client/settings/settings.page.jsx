import { Grid } from "@mui/material";
import BasicInfo from "components/BasicInfo/basic-info.component";
import ChangePassword from "components/ChangePassword/change-password.component";
import DeleteAccount from "components/DeleteAccount/delete-account.component";
import MainLayout from "layouts/main-layout";

const SettingsRoute = () => {
  return (
    <MainLayout>
      <Grid container spacing={2} className="jc-center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <BasicInfo />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ChangePassword />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <DeleteAccount />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default SettingsRoute;
