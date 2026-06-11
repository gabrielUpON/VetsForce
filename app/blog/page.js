'use client'

import styles from "@/css/app/blog/page.module.css";
{/*import { useEffect, useState } from "react";
import { getClientes } from "@/backend/database/supabase";*/}

export default function Home() {

    {/*const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function carregarClientes() {
            const dados = await getClientes();

            if (dados) {
                setClientes(dados);
            }
        }

        carregarClientes();
    }, []);*/}

    return (
        <div className={styles.container}>
            
        </div>
    );
}