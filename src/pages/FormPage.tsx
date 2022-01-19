import { Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import { Page } from "../components/Page";

export const FormPage = () => {
  return (
    <Page>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log({ ...values });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{ input: { color: "yellow" } }}
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ input: { color: "yellow" } }}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Page>
  );
};
