import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Grid } from '@mui/material';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import { deleteAccount } from 'store/user/user.action';

const DeleteAccount = ({ deleteAccount }) => {
  const handleDelete = () => {
    deleteAccount();
  };
  return (
    <Card id="delete-account">
      <MDBox
        pr={3}
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <MDBox p={3} lineHeight={1}>
          <MDBox mb={1}>
            <MDTypography variant="h5">Delete Account</MDTypography>
          </MDBox>
          <MDTypography variant="button" color="text">
            Once you delete your account, there is no going back. Please be
            certain.
          </MDTypography>
        </MDBox>
        <MDBox display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <MDButton variant="outlined" color="secondary">
            deactivate
          </MDButton>
          <MDBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <MDButton
              variant="gradient"
              color="error"
              sx={{ height: '100%' }}
              onClick={handleDelete}
            >
              delete account
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

DeleteAccount.propTypes = {
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {
  deleteAccount
})(DeleteAccount);
