import React, { useState } from "react";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      console.log("Registering with", formData);
    } else {
      console.log("Logging in with", formData);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center">{isRegistering ? "Register" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {isRegistering && (
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center mt-3">
          {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="btn btn-link"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
