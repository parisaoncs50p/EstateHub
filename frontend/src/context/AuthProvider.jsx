
import { useState } from "react";
import AuthContext from "./AuthContext";

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const login = () => {
    localStorage.setItem("isLogin", "true");
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}