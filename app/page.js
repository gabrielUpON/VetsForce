"use client";

import Modal from "@/components/modal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col bg-[linear-gradient(to_bottom,#2aa8fc_20%,#03945c_80%)]">

      <div className="flex p-[10px] fixed top-[0] left-[0] w-full backdrop-filter backdrop-blur-[10px] [box-shadow:0_8px_20px_rgba(0,_0,_0,_0.10)]">
        <button className="text-[0.8rem] font-bold bg-[#03945c] hover:bg-[#027a4c] rounded-lg ml-auto mr-4 px-[0.7rem] py-2 cursor-pointer transition-colors duration-500" onClick={() => setOpen(true)}>
          Entrar
        </button> 
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Modal com Styled Components</h2>
      </Modal>

      <div className="mt-28 text-center">

        <span className="block text-2xl font-bold">Sua plataforma completa</span>
        <span className="block text-2xl font-bold text-[#3AFF51]">para otimizar suas vendas</span>
        <p className="mt-6 text-[1.225rem]">Analise, gerencie e otimize de forma inteligente seus clientes, produtos e a força da sua equipe.</p>
        
        <div className="mt-8">

          <p className="mt-4">1000+ clientes</p>
          <p className="mt-4">5000+ produtos</p>
          <p className="mt-4">IA personalizada<span className="ml-8">relatórios gerenciais</span></p>

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

      <div className="bg-[#161616] text-center text-[0.8rem] mt-[16px] p-[8px]">

        <p>© 2026 Vet & Agro Ltda. Todos os direitos reservados.</p>

      </div>
      
    </div>
  );
}
