import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContextAPI";
import { Link } from "react-router-dom";


const validate = (values) => {
  const errors = {};
//ensure input is appropriate formats
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
};

//login func
function Login() {
  const { loginUser } = useContext(EventContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && values.email === user.email && values.password === user.password) {
        loginUser({ email: values.email });
        navigate("/MyDashboard");
      } else {
        alert("Invalid email and/or password");
      }
    },
  });

  //login with email, password and button, also takes user to registration page if no account, with clear button
  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>

      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      )}

      <label>Password</label>
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      )}

      <button type="submit" style={{ marginTop: "1rem" }}>Login</button>
      <p>
  Don't have an account? <Link to="/register">Register here</Link>
</p>

    </form>
  );
}

export default Login;
