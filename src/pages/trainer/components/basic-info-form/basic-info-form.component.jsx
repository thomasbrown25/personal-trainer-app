import { useState } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Custom components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
import FormField from "pages/trainer/components/basic-info-form/form-field.component";

// Data
import selectData from "./selectData";
import MDButton from "components/MDButton";

// Actions
import { selectCurrentUser } from "store/user/user.selector";
import { addClient } from "store/trainer/trainer.action";

const defaultFormData = {
  firstname: "",
  lastname: "",
  sex: "male",
  birthMonth: "February",
  birthDay: "1",
  birthYear: "2021",
  email: "example@gmail.com",
  phoneNumber: "",
  fitnessLevel: "Beginner",
  weight: "200",
  height: "6'2",
  weightGoal: "180",
  fitnessGoals: "Lose Weight",
  role: "Client",
  registrationCode: "client",
  password: "client1234",
  trainerId: ""
};

const BasicInfo = ({ addClient }) => {
  const user = useSelector(selectCurrentUser);

  const [formData, setFormData] = useState(defaultFormData);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (value) => {
    setFormData({
      ...formData,
      sex: value
    });
  };

  const handleBirthMonthChange = (value) => {
    setFormData({
      ...formData,
      birthMonth: value
    });
  };

  const handleBirthDayChange = (value) => {
    setFormData({
      ...formData,
      birthDay: value
    });
  };

  const handleBirthYearChange = (value) => {
    setFormData({
      ...formData,
      birthYear: value
    });
  };

  const handleFitnessLevelChange = (value) => {
    setFormData({
      ...formData,
      fitnessLevel: value
    });
  };

  const onSubmit = async (e) => {
    console.log("test");
    e.preventDefault();

    if (!formData.email === !formData.confirmEmail)
      return alert("Emails do not match");

    try {
      formData.trainerId = user.id;
      addClient(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MDBox mt={5}>
      <Card id="basic-info" sx={{ overflow: "visible" }}>
        <MDBox p={3}>
          <MDTypography variant="h5">Add your client manually</MDTypography>
        </MDBox>
        <MDBox component="form" pb={3} px={3} onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField
                name="firstname"
                label="First Name"
                placeholder="Alec"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                name="lastname"
                label="Last Name"
                placeholder="Thompson"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Autocomplete
                    name="gender"
                    defaultValue="Male"
                    options={selectData.gender}
                    onChange={(e, value) => handleGenderChange(value)}
                    renderInput={(params) => (
                      <FormField
                        {...params}
                        label="I'm"
                        InputLabelProps={{ shrink: true }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>
                      <Autocomplete
                        defaultValue="February"
                        name="birthMonth"
                        onChange={(e, value) => handleBirthMonthChange(value)}
                        options={selectData.birthDate}
                        renderInput={(params) => (
                          <FormField
                            {...params}
                            label="Birth Date"
                            InputLabelProps={{ shrink: true }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Autocomplete
                        defaultValue="1"
                        name="birthDay"
                        onChange={(e, value) => handleBirthDayChange(value)}
                        options={selectData.days}
                        renderInput={(params) => (
                          <FormField
                            {...params}
                            InputLabelProps={{ shrink: true }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Autocomplete
                        defaultValue="2021"
                        name="birthYear"
                        onChange={(e, value) => handleBirthYearChange(value)}
                        options={selectData.years}
                        renderInput={(params) => (
                          <FormField
                            {...params}
                            InputLabelProps={{ shrink: true }}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Email"
                onChange={onChange}
                name="email"
                placeholder="example@email.com"
                inputProps={{ type: "email" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="confirmation email"
                placeholder="example@email.com"
                inputProps={{ type: "email" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Phone Number"
                name="phoneNumber"
                onChange={onChange}
                placeholder="+40 735 631 620"
                inputProps={{ type: "number" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                onChange={(e, value) => handleFitnessLevelChange(value)}
                defaultValue={"Beginner"}
                options={selectData.fitnessLevel}
                renderInput={(params) => (
                  <FormField
                    label="Fitness Level"
                    {...params}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Weight"
                name="weight"
                onChange={onChange}
                placeholder="200"
                inputProps={{ type: "string" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Height"
                name="height"
                onChange={onChange}
                placeholder="6'2"
                inputProps={{ type: "string" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Goal Weight"
                name="weightGoal"
                onChange={onChange}
                sx={{ color: "blue !important" }}
                placeholder="180"
                inputProps={{ type: "string" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Fitness Goals"
                name="fitnessGoals"
                onChange={onChange}
                placeholder="Lose weight"
                inputProps={{ type: "string" }}
              />
            </Grid>
          </Grid>
          <MDBox display="flex" justifyContent="center" mt={3}>
            <MDBox width="300px">
              <MDButton type="submit" color="success" fullWidth>
                Add Client
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
};

BasicInfo.propTypes = {
  addClient: PropTypes.func.isRequired
};

//const mapStateToProps = (state) => ({});

export default connect(null, { addClient })(BasicInfo);
