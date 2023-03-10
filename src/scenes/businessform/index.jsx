import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Header from "../../components/Header";

const BusinessForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [imageUrl, setImageUrl] = useState(null);

  console.log(imageUrl);

  const uploadImage = (e) => {
    e.preventDefault();
    const image = e.target.files[0];

    const imageData = new FormData();
    imageData.append("avatar", image);

    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:4000/uploadphoto", imageData, options)
      .then((res) => {
        setImageUrl(res.data);
      })
      .catch((err) => {});
  };

  return (
    <Box m="20px">
      <Header title="ব্যবসায় ফরম" subtitle="ব্যবসা প্রতিষ্টান যুক্ত করুন" />

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
          setFieldValue,
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
              {imageUrl ? (
                <img
                  src={`http://localhost:4000/${imageUrl}`}
                  alt=""
                  height="200px"
                />
              ) : (
                <input onChange={uploadImage} type="file" />
              )}

              {/* <input
                name="image"
                ref={fileRef}
                hidden
                type="file"
                onChange={uploadImage}
              />

              {values.file ? null : (
                <button
                  onClick={() => {
                    fileRef.current.click();
                  }}
                >
                  Upload
                </button>
              )} */}

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="প্রতিষ্ঠানের নাম"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.businessName}
                name="businessName"
                error={!!touched.businessName && !!errors.businessName}
                helperText={touched.businessName && errors.businessName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="মালিকের নাম"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ownerName}
                name="ownerName"
                error={!!touched.ownerName && !!errors.ownerName}
                helperText={touched.ownerName && errors.ownerName}
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="পিতার নাম"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fathersName}
                name="fathersName"
                error={!!touched.fathersName && !!errors.fathersName}
                helperText={touched.fathersName && errors.fathersName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="মাতার নাম"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mothersName}
                name="mothersName"
                error={!!touched.mothersName && !!errors.mothersName}
                helperText={touched.mothersName && errors.mothersName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ঠিকানা"
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
                type="text"
                label="ব্যবসায়ের ঠিকানা"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.businessAddress}
                name="businessAddress"
                error={!!touched.businessAddress && !!errors.businessAddress}
                helperText={touched.businessAddress && errors.businessAddress}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ব্যবসায়ের ধরণ"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.businessType}
                name="businessType"
                error={!!touched.businessType && !!errors.businessType}
                helperText={touched.businessType && errors.businessType}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ব্যবসায়ের মূলধন"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.businessCapital}
                name="businessCapital"
                error={!!touched.businessCapital && !!errors.businessCapital}
                helperText={touched.businessCapital && errors.businessCapital}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ব্যবসায়িক সনদ ফি/ নবায়ন ফি"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.licenseFee}
                name="licenseFee"
                error={!!touched.licenseFee && !!errors.licenseFee}
                helperText={touched.licenseFee && errors.licenseFee}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                ব্যবসায় প্রতিষ্ঠান যুক্ত করুন
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
  businessName: yup.string().required("required"),
  ownerName: yup.string().required("required"),
  fathersName: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  mothersName: yup.string().required("required"),
  address: yup.string().required("required"),
  businessAddress: yup.string().required("required"),
  businessType: yup.string().required("required"),
  businessCapital: yup.string().required("required"),
  licenseFee: yup.string().required("required"),
});
const initialValues = {
  businessName: "",
  ownerName: "",
  fathersName: "",
  contact: "",
  mothersName: "",
  address: "",
  businessAddress: "",
  businessType: "",
  businessCapital: "",
  licenseFee: "",
  file: null,
};

export default BusinessForm;
