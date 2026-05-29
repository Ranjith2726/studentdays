import { createContext, useState } from "react";

export const AuthContext = createContext();

const API_URL = "/api/auth";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);

        return {
          success: true,
          user: data.user,
        };
      }

      return {
        success: false,
        message: data.message,
      };
    } catch (error) {
      console.log("LOGIN ERROR:", error);

      return {
        success: false,
        message: "Server connection failed",
      };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log("REGISTER RESPONSE:", data);

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);

        return {
          success: true,
          user: data.user,
        };
      }

      return {
        success: false,
        message: data.message,
      };
    } catch (error) {
      console.log("REGISTER ERROR:", error);

      return {
        success: false,
        message: "Server connection failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};