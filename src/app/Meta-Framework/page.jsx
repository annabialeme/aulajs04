"use client"
import React from "react"
import styles from "./MetaFramework.module.css"

export default function Page() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.titleheader}>Mini Wiki Tech + Pesquisa de Tecnologias</h1>
        </div>
        
        <h1 className={styles.title}>Meta Framework</h1>
        
        <div className={styles.content}>
            <div className={styles.card}>
                <h2 className={styles.cardtitle}>Definição: O que é um Meta-framework?</h2>
                <p className={styles.cardparagraph}>
                    Um meta-framework é uma camada de software que não apenas oferece funcionalidades próprias, 
                    mas também serve como base para a criação, integração ou gerenciamento de outros frameworks. 
                    Ele fornece abstrações, padrões e ferramentas para que desenvolvedores possam construir 
                    soluções mais rapidamente, geralmente unificando práticas ou facilitando a escolha entre 
                    múltiplos frameworks.
                </p>
            </div>
        </div>
    </div>
  )
}
