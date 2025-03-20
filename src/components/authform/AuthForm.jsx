import React, { useState } from "react";
import styles from "./AuthForm.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;

    if (username.includes(" ") || password.includes(" ")) {
      setError("No se permiten espacios en blanco.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial."
      );
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (isLogin) {
      if (username !== "admin" || password !== "Admin123!") {
        setError("Usuario o contraseña no válidos.");
        return;
      }

      alert("Inicio de sesión exitoso");
      navigate("/");
    } else {
      setSuccessMessage("Registro exitoso. Debes iniciar sesión.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
      setFormData({ username: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
        {error && <p className={styles.error}>{error}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}

        <div className={styles.inputGroup}>
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className={styles.eyeIcon}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {!isLogin && (
          <>
            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <p className={styles.passwordHint}>
              La contraseña debe incluir al menos una mayúscula, una minúscula,
              un número y un carácter especial, con un mínimo de 8 caracteres.
            </p>
          </>
        )}

        <button type="submit" className={styles.formButton}>
          {isLogin ? "Ingresar" : "Registrarse"}
        </button>

        <p className={styles.toggle} onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Inicia sesión"}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
