"use client";

import styles from "../css/components/LoginModal.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginRequest } from "@/backend/authService";

export default function Modal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  if (!isOpen) return null;

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginRequest(email, password);

      router.push("/blog");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <button className={styles.closer} onClick={onClose}>X</button>

        <form onSubmit={handleLogin}>
          <h2>Bem-vindo!</h2>
          <h3>Faça login na sua conta VetsForce</h3>

          <label><b>E-mail</b></label>
          <input 
            type="text" 
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <label><b>Senha</b></label>
          <div className={styles.showPsw}>
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <p onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Ocultar" : "Mostrar"} senha
            </p>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Acessar"}
          </button>
        </form>
      </div>
    </div>
  );
}