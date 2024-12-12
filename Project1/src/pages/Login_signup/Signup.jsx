import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendSign = await fetch(`http://localhost:4000/user/Signup`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const response = await sendSign.json();
      if (sendSign.ok) {
        alert("Registration successful");
        navigate("/");
        console.log(response);
      } else {
        alert("registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hey}>Signup</h1>
        <div>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={onSubmit}>Submit</button>
        </div>
        <div>
          <p>
            already have an account?<Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
