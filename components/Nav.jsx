"use client";

import Image from 'next/image'
import { useRouter } from "next/navigation";
import styles from '../css/components/Nav.module.css'
import { menuItems } from "@/components/data/navMenuItems.js";

export default function Nav() {

  const router = useRouter();

  return (
    <>
      {/* HEADERf */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.logo}>
            <span className={styles.logoText}>VetsForce</span>
          </div>

          <div className={styles.searchWrapper}>
            <input className={styles.searchInput} type="text" placeholder="Pesquisar..." />
          </div>

          <button className={styles.iconBtn} title="Inicial"onClick={() => router.push('/blog')}>
            <Image
              src="components/nav/house-chimney-blank-svgrepo-com.svg"
              alt="Notificações"
              loading="eager"
              width={20}
              height={20}
              title="Notificações"
            />
          </button>

          <button className={styles.iconBtn} title="Adicionar">
            <Image
              src="components/nav/file-plus-svgrepo-com.svg"
              alt="Notificações"
              loading="eager"
              width={20}
              height={20}
              title="Notificações"
            />
          </button>

          <button className={styles.iconBtn} title="Editar">
            <Image
              src="components/nav/file-pencil-alt-1-svgrepo-com.svg"
              alt="Notificações"
              loading="eager"
              width={20}
              height={20}
              title="Notificações"
            />
          </button>

          <button className={styles.iconBtn} title="Excluir">
            <Image
              src="components/nav/file-xmark-alt-1-svgrepo-com.svg"
              alt="Notificações"
              loading="eager"
              width={20}
              height={20}
              title="Notificações"
            />
          </button>
        </div>

        <div className={styles.headerRight}>
          <button className={styles.headerIconBtn} title="Notificações" data-badge="3">
            <Image
              src="components/nav/bell-svgrepo-com.svg"
              alt="Notificações"
              loading="eager"
              width={20}
              height={20}
              title="Notificações"
            />
            {/* SISTEMA DE NOTIFICACAO BADGE   <span className={styles.badge}>0</span>*/}
          </button>
          <button className={styles.headerIconBtn} title="Ajuda">
            <Image
              src="components/nav/circle-question-svgrepo-com.svg"
              alt="Ajuda"
              loading="eager"
              width={20}
              height={20}
              title="Ajuda"
            />
          </button>
          <button className={styles.headerIconBtn} title="Configurações">
            <Image
              src="components/nav/gear-alt-svgrepo-com.svg"
              alt="Configurações"
              loading="eager"
              width={20}
              height={20}
              title="Configurações"
            />
          </button>
          <div className={styles.avatar}>VF</div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarSearch}>
          <Image
            src="components/nav/search-alt-svgrepo-com.svg"
            alt="Configurações"
            loading="eager"
            width={13}
            height={13}
            title="Configurações"
          />
          <input type="text" placeholder="Pesquisar" className={styles.sidebarSearchInput} />
        </div>

        <div className={styles.sidebarSection}>
          <span className={styles.sidebarSectionLabel}>CADASTROS</span>
        </div>

        <nav className={styles.sidebarNav}>
          {menuItems.filter(item => item.group === "Cadastro").map((item) => (
            <button
              key={item.label}
              className={`${styles.navItem} ${
                item.active ? styles.navItemActive : ""
              }`}
            >
              <span className={styles.navIcon}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
              </span>

              <span className={styles.navLabel}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className={styles.sidebarSection}>
          <span className={styles.sidebarSectionLabel}>GERENCIAMENTO</span>
        </div>

        <nav className={styles.sidebarNav}>
          {menuItems.filter(item => item.group === "Gerenciamento").map((item) => (
            <button
              key={item.label}
              className={`${styles.navItem} ${
                item.active ? styles.navItemActive : ""
              }`}
            >
              <span className={styles.navIcon}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
              </span>

              <span className={styles.navLabel}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
