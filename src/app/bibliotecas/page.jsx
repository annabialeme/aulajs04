import React from "react";
import styles from "./Bibliotecas.module.css";

export default function Bibliotecas() {
  return (
    <div>
      <header>
        <h1>O que é Tailwind CSS?</h1>
        <h4>Framework CSS utilitário para criar interfaces incríveis com rapidez e consistência.</h4>
      </header>
      <div className={styles.card}>
        <p>
          A Tailwind CSS é uma biblioteca de CSS utilitário-first que permite construir interfaces de forma rápida e altamente customizável. Em vez de escrever CSS personalizado para cada componente, você usa classes utilitárias prontas diretamente no HTML.
        </p>
      </div>
    </div>
  );
}

