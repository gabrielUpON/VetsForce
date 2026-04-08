"use client";

import styles from "./Modal.module.css";
import { useState } from "react";

export default function Modal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className={styles.main}>
      <div className={styles.box}>

        <button className={styles.closer} onClick={onClose}>X</button>

        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Bem-vindo!</h2>
          <h3>Faça login na sua conta VetsForce</h3>

          <label htmlFor="email"><b>E-mail</b></label>
          <input type="text" placeholder="seuemail@exemplo.com" name="email" required />

          <label htmlFor="psw"><b>Senha</b></label>
          <div className={styles.showPsw}>
            <input type="password" placeholder="••••••••" name="psw" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              👁
            </button>
          </div>
              
          <button type="submit">Acessar</button>

        </form>
      </div>
    </div>
  );
}