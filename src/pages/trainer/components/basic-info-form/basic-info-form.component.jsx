import { useState } from "react";
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

const BasicInfo = () => {
  const [formData, setFormData] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <MDBox mt={5}>
      <Card id="basic-info" sx={{ overflow: "visible" }}>
        <MDBox p={3}>
          <MDTypography variant="h5">Client Info</MDTypography>
        </MDBox>
        <MDBox component="form" pb={3} px={3}>
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
                    onChange={(event, value) => onChange(event)}
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
                placeholder="+40 735 631 620"
                inputProps={{ type: "number" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                multiple
                defaultValue={["Beginner"]}
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
                placeholder="200"
                inputProps={{ type: "string" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Height"
                placeholder="6'2"
                inputProps={{ type: "string" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Goal Weight"
                sx={{ color: "blue !important" }}
                placeholder="180"
                inputProps={{ type: "string" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Fitness Goals"
                placeholder="Lose weight"
                inputProps={{ type: "string" }}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Card>
    </MDBox>
  );
};

export default BasicInfo;
