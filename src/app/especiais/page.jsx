"use client";
import React from "react";
import styles from "./ArquivosEspeciais.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Arquivos especiais do App Router e raiz do projeto</h1>
      </div>

      <div className={styles.card}>
        <h2>Diferença e função dos arquivos: error.js / global-error.js.</h2>
        <p>Em um contexto de desenvolvimento web, especialmente com frameworks como Next.js, os arquivos error.js e global-error.js desempenham papéis distintos no tratamento de erros.</p>
        <h3>Diferenças principais:</h3>
      </div>
    </div>
  );
}       