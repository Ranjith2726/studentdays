import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, register } = useContext(AuthContext);

  const [mode, setMode] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    let result;

    if (mode === "register") {
      result = await register(
        formData.name,
        formData.email,
        formData.password
      );
    } else {
      result = await login(formData.email, formData.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message || "Something went wrong");
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <p className="login-tag">StudentDays.co Access</p>

        <h1>{mode === "login" ? "Login to continue." : "Create account."}</h1>

        <p className="login-desc">
          Login to unlock student experiences, stories, memories, community
          access, and trip updates.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit">
            {mode === "login" ? "Login →" : "Register →"}
          </button>
        </form>

        <p className="auth-switch">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={() => {
              setError("");
              setFormData({
                name: "",
                email: "",
                password: "",
              });
              setMode(mode === "login" ? "register" : "login");
            }}
          >
            {mode === "login" ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;