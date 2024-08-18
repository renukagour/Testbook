import React, { useState } from "react";

const FormsData = () => {
  // const[name,setName]=useState(0);
  // const[email,setEmail]=useState(0);
  // const[password,setpassword]=useState(0);
  // const[contact,setContact]=useState(0);

  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    contact: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formData.fname) {
      errors.fname = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.contact) {
      errors.contact = "Contact is required";
    }
    if (!formData.password) {
      errors.password = "Name is required";
    }
    if (formData.password.length < 8) {
      errors.password = "Password should be of atleast 8 characters";
    }
    return errors;
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      console.log(formData);
      alert("Thank You");
    }
  };
  return (
    <>
      <h1>Form Data </h1>
      <form onSubmit={handleClick}>
        <div>
          <label htmlFor="fname">Name</label>
          <input type="text" name="fname" onChange={handleChange} />
          {errors.fname}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />
          {errors.email}
        </div>

        <div>
          <label htmlFor="contact">Contact</label>
          <input type="number" name="contact" onChange={handleChange} />
          {errors.contact}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
          {errors.password}
        </div>

        <button>Register</button>
      </form>
    </>
  );
};

export default FormsData;
