import React from "react";
import styles from "./Bibliotecas.module.css";

export default function Bibliotecas() {
  return (
    <div>
      <header className={styles.headerGradient}>
        <h1>O que é Tailwind CSS?</h1>
        <h5>Framework CSS utilitário para criar interfaces incríveis com rapidez e consistência.</h5>
      </header>
      <div className={styles.cardHighlight}>
        <p>
          A Tailwind CSS é uma biblioteca de CSS utilitário-first que permite construir interfaces de forma rápida e altamente customizável. Em vez de escrever CSS personalizado para cada componente, você usa classes utilitárias prontas diretamente no HTML.
        </p>
      </div>
      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <h3>✅ Prós</h3>
          <ul>
            <li>Produtividade: Economiza tempo com componentes prontos.</li>
            <li>Customização fácil: Como Tailwind é utilitário, adaptar os estilos é direto.</li>
            <li>Consistência visual: Padrões de design consistentes.</li>
            <li>Compatibilidade: 100% alinhadas com Tailwind.</li>
            <li>Acessibilidade (em algumas, como Headless UI).</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>❌ Contras</h3>
          <ul>
            <li>Tailwind UI e outras premium: São pagas.</li>
            <li>Curva de aprendizado: Para quem não está familiarizado com Tailwind.</li>
            <li>Componentes genéricos: Pode faltar originalidade visual se não personalizados.</li>
            <li>JavaScript adicional: Algumas bibliotecas (como Flowbite) adicionam dependências JS.</li>
          </ul>
        </div>
      </div>
      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <h3>🏢 Empresas que usam Tailwind CSS</h3>
          <p>Várias empresas já adotaram Tailwind CSS por sua flexibilidade e performance:</p>
          <ul className={styles.empresasList}>
            <li>
              <img src="/images/git.jpg" alt="GitHub" width={32} height={32} style={{verticalAlign: "middle", marginRight: 8}} />
              <strong>GitHub:</strong> Utiliza Tailwind internamente em projetos.
            </li>
            <li>
              <img src="/images/laravel.png" alt="Laravel" width={32} height={32} style={{verticalAlign: "middle", marginRight: 8}} />
              <strong>Laravel:</strong> O framework PHP usa Tailwind em seu frontend (Laravel Jetstream, Breeze).
            </li>
            <li>
              <img src="/images/vercel.png" alt="Vercel" width={32} height={32} style={{verticalAlign: "middle", marginRight: 8}} />
              <strong>Vercel:</strong> Usa Tailwind em partes do site e em projetos como Next.js.
            </li>
            <li>
              <img src="/images/digital.jpg" alt="DigitalOcean" width={32} height={32} style={{verticalAlign: "middle", marginRight: 8}} />
              <strong>DigitalOcean:</strong> Alguns dashboards e sites usam Tailwind.
            </li>
            <li>
              <img src="/images/sta.jpg" alt="Statamic" width={32} height={32} style={{verticalAlign: "middle", marginRight: 8}} />
              <strong>Statamic:</strong> CMS moderno baseado em Laravel.
            </li>
            <li>
              <img src="/images/figma.png" alt="Figma" width={32} height={32} style={{verticalAlign: "middle", marginRight: 8}} />
              <strong>Figma:</strong> Plataforma de design colaborativo que usa Tailwind em diversos componentes internos.
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>🌐 Projetos Open Source que Usam Tailwind CSS</h3>
          <ul>
            <li>
              <strong>Refine</strong><br />
              Website: <a href="https://refine.dev" target="_blank" rel="noopener noreferrer">refine.dev</a><br />
              Sobre: Plataforma para desenvolvimento de aplicações web, utiliza Tailwind CSS para interfaces adaptáveis.
            </li>
            <li>
              <strong>Django Tailwind</strong><br />
              Website: <a href="https://django-tailwind.readthedocs.io/" target="_blank" rel="noopener noreferrer">django-tailwind</a><br />
              Sobre: Pacote para integrar o Tailwind CSS com o framework Django.
            </li>
            <li>
              <strong>Tremor</strong><br />
              Website: <a href="https://www.tremor.so/" target="_blank" rel="noopener noreferrer">tremor.so</a><br />
              Sobre: Biblioteca de componentes para dashboards e interfaces analíticas, desenvolvida com Tailwind CSS.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

