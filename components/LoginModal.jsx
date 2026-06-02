"use client";

import styles from "../css/components/LoginModal.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/backend/config/supabase";

const { data, error } = await supabase.auth.signInWithPassword({
  email: 'teste@email.com',
  password: '123456'
})

export default function Modal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  if (!isOpen) return null;

  async function handleLogin(e) {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        throw error;
      }

      // Login válido
      console.log(data);

      router.push("/blog");

    } catch (err) {
      setErrorMessage(err.message);
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

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Acessar"}
          </button>
        </form>
      </div>
    </div>
  );
}