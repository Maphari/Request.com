import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleRegister = () => {
    navigate("/register");
  };

  const signInWithEmailPassword = async () => {
    try {
      if (!email || !password) {
        handleEmailErr();
        handlePasswordErr();
      } else {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        user.uid && navigate("/");
        localStorage.setItem("user", user);
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleEmailErr = () => {
    if (!email) {
      setEmailErr("Email is required");
    } else if (!email.includes("@")) {
      setEmailErr("Please provide a valid email address");
    } else {
      setEmailErr("");
    }
  };

  const handlePasswordErr = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!password) {
      setPasswordErr("Password is required");
    } else if (!password.includes(passwordRegex)) {
      setPasswordErr("at least 8 charactes that contains letters and symbols");
    } else if (password.length < 8) {
      setPasswordErr("more than 8 characters required");
    } else {
      setPasswordErr("");
    }
  };
  const prevent = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="register-container">
        <div className="register-container__inner drop-shadow-2xl rounded-lg">
          <div className="inner">
            <h1 className="register-container__inner-head">Login</h1>
            <p className="register-container__inner-para">
              Welcome back amazing feature are ready for you
            </p>

            <form onSubmit={prevent}>
              <p className="text-[red] err mb-[0.75rem]">{err && err}</p>
              <div className="input-group mb-1">
                <span className="input-group-text rounded-md" id="basic-addon1">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Example@gmail.com"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <p className="text-[red] err mb-[0.75rem]">
                {emailErr && emailErr}
              </p>
              <div className="input-group mb-1">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="at least 8 charactes"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p className="text-[red] err mb-[0.75rem]">
                {passwordErr && passwordErr}
              </p>
              <p>
                By logging in you agree to our{" "}
                <span className="color">terms</span> and{" "}
                <span className="color">conditions</span>
              </p>
              <button
                className="btn-sub rounded-lg"
                onClick={signInWithEmailPassword}
              >
                Log in
              </button>
              <div className="container-btn">
                <p className="para">Don't have an account?</p>
                <button className="btn-log" onClick={handleRegister}>
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="right">
            <h1>Request.com</h1>
          </div>
        </div>
      </div>
    </>
  );
}
