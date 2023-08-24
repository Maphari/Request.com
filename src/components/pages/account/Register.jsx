import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleAuthProvider,
  db,
} from "../../../firebase/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleUserRegister = async () => {
    try {
      if (!email && !password) {
        handleEmailErr();
        handlePasswordErr();
      } else {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        user.uid && navigate("/", { replace: true });
        localStorage.setItem("user", user);
      }
    } catch (error) {
      setErr(error.message);
    }
  };
  const handleUserRegisterWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleAuthProvider);
      user.uid && navigate("/", { replace: true });
      localStorage.setItem("user", user);
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleEmailErr = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailErr("Email is required");
    } else if (!email.includes(emailRegex)) {
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
            <h1 className="register-container__inner-head">Create account</h1>
            <p className="register-container__inner-para">
              Create an account and access all amazing features
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <p className="text-[red] err mb-[0.75rem]">
                {emailErr && emailErr}
              </p>
              <div className="input-group mb-1 rounded-md">
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <p className="text-[red] err mb-[0.75rem]">
                {passwordErr && passwordErr}
              </p>
              <p>
                By reistering you agree to our{" "}
                <span className="color">terms</span> and{" "}
                <span className="color">conditions</span>
              </p>
              <button
                className="btn-sub rounded-lg"
                type="submit"
                onClick={handleUserRegister}
              >
                Create account
              </button>
              <div
                className="google rounded-lg"
                onClick={handleUserRegisterWithGoogle}
              >
                <i className="fa-brands fa-google"></i> Create with google
              </div>
              <div className="container-btn">
                <p className="para">Already have an account?</p>
                <button className="btn-log" onClick={handleLogin}>
                  Log in
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
