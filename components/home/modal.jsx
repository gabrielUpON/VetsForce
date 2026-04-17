"use client";

import styles from "./Modal.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const USER = "admin@vetsforce.com";
  const PASSWORD = "Vet753951";

  if (!isOpen) return null;

  function handleLogin(e) {
    e.preventDefault();

    if (email === USER && password === PASSWORD) {
      router.push("/blog");
    } else {
      alert("E-mail ou senha inválidos");
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
            <p onClick={() => setShowPassword(!showPassword)}>Mostrar senha</p>
          </div>
              
          <button type="submit">Acessar</button>

        </form>
      </div>
    </div>
  );
}