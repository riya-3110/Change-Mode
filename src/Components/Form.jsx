import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormwithValidation = () => {
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("First name is required"),
    lName: Yup.string().required("Last name is required"),
    email: Yup.string().matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid Email"
    ),
    pNumber: Yup.string().matches(
      /^\d{10}$/,
      "Contact numbers must be in 10 digits"
    ),
  });

  return (
    <Formik
      initialValues={{
        fName: "",
        lName: "",
        emailId: "",
        cNumber: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert("Form submitted Successfully", values);
      }}
    >
      {() => (
        <Form>
          <h1>Submission Form</h1>
          <Field type="text" placeholder="First Name" name="fName" />

          <ErrorMessage
            name="fName"
            component="div"
            style={{ color: "red", fontsize: "12px" }}
          />
          <br />
          <Field type="text" placeholder="Last Name" name="lName" />

          <ErrorMessage
            name="lName"
            component="div"
            style={{ color: "red", fontsize: "12px" }}
          />
          <br />
          <Field type="email" placeholder="Email Id" name="emailId" />
          <ErrorMessage
            name="emailId"
            component="div"
            style={{ color: "red", fontsize: "12px" }}
          />
          <br />
          <Field type="tel" placeholder="Phone Number" name="pNumber" />
          <ErrorMessage
            name="pNumber"
            component="div"
            style={{ color: "red", fontsize: "12px" }}
          />
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
