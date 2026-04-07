"use client";

import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <button className="absolute top-[10px] right-[10px] border-[none] bg-transparent cursor-pointer" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}