import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = () => {
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !emailPattern.test(email)) setError(true);
    else window.open("https://app.loch.one/welcome", "_blank");
  };
  return (
    <div className="signup flex flex--column flex--loose flex--alignStart flex--MalignCenter flex--justifyCenter">
      <div className="flex-item">
        <h2 className="signup__heading">Signup for exclusive access.</h2>
      </div>
      <div className="flex-item">
        <input
          className="signup__email"
          onChange={(e) => {
            error && setError(false);
            setEmail(e.target.value);
          }}
          placeholder="Your email address"
          type="email"
          value={email}
        />
        {error && <sup>* Please enter a valid email address</sup>}
      </div>
      <div className="flex-item">
        <button className="btn btn--primary" onClick={validateEmail}>Get Started</button>
      </div>
      <div className="flex-item">
        <p className="signup__message">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default Signup;
