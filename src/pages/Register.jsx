import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContextAPI";

//validation function for register form
const validate = values => {
  const errors = {};

  //name
  if (!values.name) {
    errors.name = "Please enter a Name";
  }

  //username
  if (!values.username) {
    errors.username = "Please enter a Username";
  }

  //email
  if (!values.email) {
    errors.email = "Please enter an Email";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email";
  }

  //password
  if (!values.password) {
    errors.password = "Please enter a Password";
  } else if (values.password.length < 8) {
    errors.password = "Password has to be least 8 characters";
  }

  return errors;
};

function Register() {
  const { loginUser } = useContext(EventContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: values => {
  //saving user input to local storage
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
    })
  );
  //logging
  loginUser({
    name: values.name,
    username: values.username,
    email: values.email,
  });

  navigate("/MyDashboard");
},
  })
  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Create Account</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}

      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

      <button type="submit" style={{ marginTop: "1rem" }}>Register</button>
    </form>
  );
}

export default Register;
