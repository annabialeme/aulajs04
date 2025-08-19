"use client"
import React from "react"
import styles from "./MetaFramework.module.css"
import Header from '../.././components/header';

export default function Page() {
  return (
    <>
    <Header />  
    
    <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.titleheader}>Mini Wiki Tech + Pesquisa de Tecnologias</h1>
        </div>
        
        <h1 className={styles.title}>Meta Framework</h1>
        
        <div className={styles.content}>
            <div className={styles.card}>
                <h2 className={styles.cardtitle}>Definição: O que é um Meta-framework?</h2>
                <line className={styles.cardline}></line>
                <p className={styles.cardparagraph}>
                    Um meta-framework é uma camada de software que não apenas oferece funcionalidades próprias, 
                    mas também serve como base para a criação, integração ou gerenciamento de outros frameworks. 
                    Ele fornece abstrações, padrões e ferramentas para que desenvolvedores possam construir 
                    soluções mais rapidamente, geralmente unificando práticas ou facilitando a escolha entre 
                    múltiplos frameworks.
                </p>
            </div>
            <div className={styles.card}>
                <h2 className={styles.cardtitle}>Tipos e Exemplos:</h2>
                <line className={styles.cardline}></line>
                <p className={styles.cardparagraph}>
                    <ul>
                        <h4 className={styles.cardsubtitle}>Baseados em React:</h4>
                        <ul>
                            <li>Next.js</li>
                            <li>Remix</li>
                            <li>Gatsby</li>
                        </ul>
                        <h4 className={styles.cardsubtitle}>Baseados em Vue:</h4>
                        <ul>
                            <li>Nuxt.js</li>
                        </ul>
                    </ul>
                </p>
            </div>
            <div className={styles.cardpccontainer}>
                <div className={styles.cardpc}>
                    <h2 className={styles.cardtitle}>Prós</h2>
                    <line className={styles.cardline}></line>
                    <ul className={styles.cardlist}>
                        <li>Desenvolvimento: Acelera ainda mais o desenvolvimento dos projetos.</li>
                        <li>Funcionalidades: Já resolve questões complexas como SSR, rotas automáticas e SEO.</li>
                        <li>Integrações: Oferece muitas integrações prontas para uso.</li>
                    </ul>
                </div>
                <div className={styles.cardpc}>
                    <h2 className={styles.cardtitle}>Contras</h2>
                    <line className={styles.cardline}></line>
                    <ul className={styles.cardlist}>
                        <li>Abstração: Mais "caixa preta", dificultando o entendimento interno.</li>
                        <li>Dependências: Dependência dupla do meta-framework e do framework base.</li>
                        <li>Complexidade: Pode ser pesado e complexo para projetos pequenos.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.card}>
                <h2 className={styles.cardtitle}>Funcionalidades Principais</h2>
                <line className={styles.cardline}></line>
                <ul className={styles.cardlist}>
                    <li>Roteamento automático</li>
                    <li>Renderização híbrida (Server-Side Rendering, Static Generation)</li>
                    <li>Divisão de código (Code Splitting)</li>
                    <li>Gestão de dados e APIs integradas</li>
                    <li>Configuração mínima (Zero config ou low config)</li>
                    <li>Suporte a internacionalização</li>
                    <li>Hot Reloading e ferramentas de desenvolvimento</li>
                </ul>
            </div>
            <div className={styles.card}>
                <h2 className={styles.cardtitle}>Uso no Mercado e Oportunidades</h2>
                <line className={styles.cardline}></line>
                <ul className={styles.cardlist}>
                    <li>Empresas de tecnologia e startups utilizam meta-frameworks para acelerar o desenvolvimento.</li>
                    <li>Demandados principalmente em projetos modernos de web e mobile.</li>
                    <li>Valorizados em vagas de front-end, fullstack e back-end.</li>
                    <li>O domínio de meta-frameworks como Next.js e Nuxt.js é diferencial no mercado.</li>
                </ul>
            </div>
            <div className={styles.card}>
                <h2 className={styles.cardtitle}>Qual será utilizado em sala de aula?</h2>
                <line className={styles.cardline}></line>
                <p className={styles.cardparagraph}>
                    O mais utilizado em sala de aula atualmente é o Next.js, por ser maduro, 
                    baseado em React, o framework mais popular do mercado, e apresentar ampla documentação 
                    e comunidade.
                </p>
            </div>
        </div>
    </div>
    </>
  )}