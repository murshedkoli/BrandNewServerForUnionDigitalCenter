import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import swal from "sweetalert";
import * as yup from "yup";
import Header from "../../components/Header";
import { host } from "../../ConfigurText";

const AdminForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values, { resetForm }) => {
    fetch(`${host}/addAdmin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "success") {
          swal(
            "ধন্যবাদ!",
            ` ${values?.fullName} এডমিন হিসাবে সিস্টেমে যুক্ত হয়েছে`,
            "success"
          );
          resetForm({ values: "" });
        } else {
          swal(
            "দুঃখিত!",
            `  ${values?.fullName} এডমিন হিসাবে সিস্টেমে যুক্ত হয়নি, আবার চেষ্টা করুন `,
            "warning"
          );
        }
      });
  };

  return (
    <Box m="20px">
      <Header title="এডমিন ফরম" subtitle="নতুন এডমিন যুক্ত করুন" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="নাম "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label=" ইমেইল"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="মোবাইল নাম্বার"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ঠিকানা "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="পাসওয়ার্ড"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                তৈরি করুন
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "মোবাইল নাম্বারটি সঠিক নয়")
    .required("required"),
  address: yup.string().required("required"),
  password: yup.string().required("required"),
});
const initialValues = {
  fullName: "",
  email: "",
  contact: "",
  address: "",
  password: "",
};

export default AdminForm;
