import "./Login.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = ({ setShowLogin }) => {
  const { login } = useContext(AuthContext);

  const [mode, setMode] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login("demo-token");

    setShowLogin(false);
  };

  return (
    <div className="login-overlay">
      <div className="login-popup">

        <button
          className="login-close"
          onClick={() => setShowLogin(false)}
        >
          ×
        </button>

        <p className="login-tag">
          StudentDays.co Access
        </p>

        <h2>
          Join the <span>community.</span>
        </h2>

        <p className="login-desc">
          Discover student experiences, unlock memories,
          meet new people, and make your college life feel unforgettable.
        </p>

        <div className="login-points">
          <p>✓ Student-only experiences</p>
          <p>✓ Safe community access</p>
          <p>✓ Join trips and memories</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <h3>
            {mode === "login"
              ? "Login to continue"
              : "Create account"}
          </h3>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {mode === "login"
              ? "Login →"
              : "Register →"}
          </button>

          <p className="auth-switch">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}

            <span
              onClick={() =>
                setMode(
                  mode === "login"
                    ? "register"
                    : "login"
                )
              }
            >
              {mode === "login"
                ? " Register"
                : " Login"}
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;