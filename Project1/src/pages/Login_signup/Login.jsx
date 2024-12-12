import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendSign = await fetch(`http://localhost:4000/user/Login`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const response = await sendSign.json();
      if (sendSign.ok) {
        alert("Login successful");
        localStorage.setItem("token", response.token);
        navigate("/home");
        console.log(response);
      } else {
        alert("user not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hello}>Login</h1>
        <div>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={onSubmit}>Login</button>
        </div>
        <div>
          <p>
            dont have an account?<Link to="/Signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
