import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [submission, setSubmission] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    setSubmission(true);
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {submission && (
          <div className="success">
            <p>Registration Successful</p>
          </div>
        )}
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          {...register("firstName", { required: "First name is required!" })}
        />
        {errors.firstName && <p className="err">{errors.firstName.message}</p>}
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          {...register("lastName", { required: "Last name is required!" })}
        />
        {errors.lastName && <p className="err">{errors.lastName.message}</p>}
        <label>Email:</label>
        <input
          type="text"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        {errors.email && <p className="err">{errors.email.message}</p>}
        <label>Password:</label>
        <input
          type="password"
          className="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password must be more than 4 characters",
            },
            maxLength: {
              value: 20,
              message: "Password cannot be more than 20 characters",
            },
          })}
        />
        {errors.password && <p className="err">{errors.password.message}</p>}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
