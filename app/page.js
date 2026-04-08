"use client";
import { useState, useEffect } from "react";
import Image from 'next/image'

import styles from "./Home.module.css";
import Modal from "@/components/home/modal";

export default function Home() {

  const [open, setOpen] = useState(false);
  const [numero, setNumero] = useState(5);

  useEffect(() => {
    let i = 5;

    const interval = setInterval(() => {
      setNumero(i);
      i++;

      if (i > 39) clearInterval(interval);
    }, 100); // velocidade
        return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>

      <div className={styles.cabecalho}>
        <button className={styles.botao} onClick={() => setOpen(true)}>
          Entrar
        </button> 
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}/>

      <div className={styles.container}>

        <div className={styles.apresentacao}>
          <span>
            Sua plataforma completa
          </span>

          <span>
            para otimizar suas vendas
          </span>

          <p>
            Analise, gerencie e otimize de forma inteligente seus clientes, produtos e a força da sua equipe.
          </p>
        </div>

        <button className={styles.botaocentral} onClick={() => setOpen(true)}>
          Comece Agora !
        </button>

        <div className={styles.metricas}>

          <p >1000+ clientes</p>
          <p>5000+ produtos</p>
          <p>IA personalizada<span>Relatórios gerenciais</span></p>

        </div>

        <div className={styles.radar} >
          <Image loading="eager" src="/line-graph-svgrepo-com.svg" width={150} height={150} alt="Picture of the author" /> 
          <p>+R$ {numero} mil</p>
        </div>

        <article>
          <h2>Analise vendas em produndidade</h2>
          <p>Analise, crie, envie pedidos de forma facil e inteligente.Acompanhe o andamento até a prateleira.</p>
        </article>

        <article>
          <h2>Genrencie seus clientes</h2>
          <p>O que ele comprou ou deixou de comprar, relatório financeiro, histórico e relação.</p>
        </article>

        <article>
          <h2>Tire dúvidas com a IA</h2>
          <p>Uma IA treinada e alimentada com ativos e históricos da Vet & Agro capaz de lhe auxiliar de forma inteligente!</p>
        </article>

      </div>

      <div className={styles.footer}>

        <p>© 2026 Vet & Agro Ltda. Todos os direitos reservados.</p>

        <div className={styles.nextjslogo}>

          <p>Powered by</p>
          <Image src="/next.svg" width={50} height={50} alt="Picture of the author" /> 

        </div>

      </div>
      
    </div>
  );
}
