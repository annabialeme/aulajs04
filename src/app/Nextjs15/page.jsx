import React from "react";
import styles from "./Next15.module.css";

export default function Next() {
  return (
    <>
      <header className={styles.headerGradient}>
        <h1 className={styles.tituloAnimado}>O que é Next.js 15?</h1>
      </header>

      <div className={styles.container}>
        <div className={styles.cardHighlight}>
          <p>
O Next.js 15 traz diversos pontos fortes, com foco em melhorias de performance, roteamento e suporte a TypeScript. Destacam-se o desempenho aprimorado, rotas aprimoradas e melhor integração com o TypeScript. Além disso, a segurança para ações do servidor foi aprimorada, com a eliminação de código morto e IDs de ação mais seguros. 
          </p>
        </div>

        <div className={styles.cardsRow}>
          <div className={`${styles.card} ${styles.cardHover}`}>
            <h3>✅ Prós</h3>
            <ul>
              <li>O Next.js 15 otimiza o desempenho, tanto em tempo de desenvolvimento quanto em tempo de execução, resultando em aplicações mais rápidas e responsivas. </li>
              <li>O sistema de rotas baseado em arquivos do Next.js foi aprimorado, oferecendo maior flexibilidade e controle sobre a navegação do aplicativo.</li>
              <li>O Next.js 15 oferece um suporte ainda melhor ao TypeScript, facilitando o desenvolvimento de aplicações maiores e mais complexas, com tipagem estática e detecção de erros em tempo de compilação.</li>
              <li>A introdução de IDs de ação seguros e a eliminação de código morto em ações do servidor melhoram a segurança das aplicações, evitando a exposição acidental de funções sensíveis. </li>
              <li>O Next.js 15 continua aprimorando suas ferramentas de desenvolvedor, tornando o processo de criação e depuração mais eficiente.</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.cardHover}`}>
            <h3>Melhorias</h3>
            <ul>
              <li>TurboPack Estável:
O TurboPack, ferramenta de construção do Next.js, agora está estável e oferece inicializações de servidor e atualizações de código muito mais rápidas, com melhorias significativas de desempenho em comparação com as versões anteriores. 
Sistema de Cache Renovado:
O sistema de cache foi aprimorado, com mudanças importantes nos manipuladores de rota. Por padrão, as rotas GET não são mais armazenadas em cache, e os desenvolvedores podem escolher o comportamento desejado usando opções de configuração. 
Novas APIs Assíncronas:
O Next.js 15 introduz APIs assíncronas para lidar com requisições, simplificando o desenvolvimento e otimizando o desempenho. 
Novo Componente Form:
Um novo componente Form foi adicionado para facilitar a criação de formulários, tornando o processo mais intuitivo e eficiente. 
Suporte ao React 19:
O Next.js 15 oferece suporte completo ao React 19, incluindo seus novos recursos para cliente e servidor. </li>
            </ul>
          </div>
        </div>

        <div className={styles.cardsRow}>
          <div className={`${styles.card} ${styles.cardHover}`}>
            <h3>🏢 Empresas que usam Next.js 15</h3> 
            <p>Netflix: Utiliza Next.js para otimizar a entrega de conteúdo e melhorar a experiência do usuário. 


Nike: Adota o Next.js para impulsionar sua plataforma online e oferecer uma experiência de compra mais eficiente. 


Hulu: Utiliza o Next.js para otimizar o desempenho de seu serviço de streaming. 


TikTok: Embora use React como base, o TikTok utiliza Next.js e outras tecnologias para construir sua plataforma. 
</p>

          </div>

          <div className={`${styles.card} ${styles.cardHover}`}>
            <h3>🌐 Áreas de atuação e oportunidades</h3>
            <p>Desenvolvimento de Aplicações Web:
O Next.js 15 simplifica o desenvolvimento de aplicações web complexas, oferecendo recursos como rotas otimizadas, componentes de servidor e melhorias no sistema de cache. 
Otimização de SEO:
O Next.js 15 aprimora o SEO (Search Engine Optimization) com recursos como renderização do lado do servidor (SSR) e geração de sites estáticos (SSG), facilitando o ranqueamento em mecanismos de busca. 
</p>
          </div>
        </div>

        <div className={`${styles.cardCuriosidades} ${styles.cardHover}`}>
          <h3>💡 Curiosidades sobre Tailwind CSS</h3>
          <ul>
            <li>O Next.js 15 traz diversas novidades e melhorias, com foco em desempenho, estabilidade e novas funcionalidades. Destaques incluem o uso do Turbopack para desenvolvimento local mais rápido, aprimoramentos na estratégia de cache, suporte ao React 19 e aprimoramentos na experiência do desenvolvedor com novas APIs e melhor depuração de erros. </li>
          </ul>
        </div>
      </div>
    </>
  );
}
