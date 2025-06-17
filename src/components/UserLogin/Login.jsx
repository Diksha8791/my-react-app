import React, { useState } from "react";
import '../../App.css';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    contact: "",
    description: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const {name, value} = e.target;

    let tempFormData = {...formData, [name]: value};
    setFormData(tempFormData);
  }

  const handleSubmit = () => {
    console.log("Form submitted");
  }

  return (
    <>
    <h2>Sign up to our website..!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="loginInput"
            required
          />
        </div>
        <br />

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="loginInput"
            required
          />
        </div>
        <br />

        <div>
          <label>Date Of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="loginInput"
            required
          />
        </div>
        <br />

        <div>
          <label>Email id</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            pattern=".*@gmail\.com"
            placeholder="example@gmail.com"
            className="loginInput"
            required
          />
        </div>
        <br />

        <div>
          <label>Contact</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="10-digit number"
            className="loginInput"
            required
          />
        </div>
        <br />

        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="I am ..."
            className="loginInput"
            required
          />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>

      <div>Display results here..!!</div>
    </>
  );
};

export default Login;
