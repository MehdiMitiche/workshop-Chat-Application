import { Button, Input } from "antd";
import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  if (localStorage.getItem("username")) history.push("/");
  return (
    <div className="login-container col">
      <div className="header-container center">Welcome to our Chat App !</div>
      <div className="input-container center">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="large"
          placeholder="Please enter your username"
          style={{ width: "80%", height: "50%" }}
        />
      </div>
      <div className="btn-container center">
        <Button
          type="primary"
          size="large"
          onClick={() => {
            localStorage.setItem("username", input);
            history.push("/");
          }}
        >
          Join Chat !
        </Button>
      </div>
    </div>
  );
};

export default Login;
