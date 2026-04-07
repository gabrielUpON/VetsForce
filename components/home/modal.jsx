"use client";

import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.main}>
      <div className={styles.box}>

        <button className={styles.closer} onClick={onClose}>X</button>

        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Bem-vindo!</h2>
          <h3>Faça login na sua conta VetsForce</h3>
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
              
          <button type="submit">Acessar</button>

        </form>
      </div>
    </div>
  );
}