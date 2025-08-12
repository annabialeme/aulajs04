import React from "react";
import styles from "./Bibliotecas.module.css";

export default function Bibliotecas() {
  return (
    <>
      <header className={styles.headerGradient}>
        <h1 className={styles.tituloAnimado}>O que é Tailwind CSS?</h1>
        <h5 className={styles.subtituloAnimado}>
          Framework CSS utilitário para criar interfaces incríveis com rapidez e consistência.
        </h5>
      </header>

      <div className={styles.container}>
        <div className={styles.cardHighlight}>
          <p>
            A Tailwind CSS é um framework CSS utilitário que permite construir interfaces personalizadas rapidamente usando classes pré-definidas. Ele oferece produtividade, consistência e flexibilidade, sendo amplamente usado por empresas e desenvolvedores ao redor do mundo.
          </p>
        </div>

        <div className={styles.cardsRow}>
          <div className={`${styles.card} ${styles.cardHover}`}>
            <h3>✅ Prós</h3>
            <ul>
              <li>Produtividade: Economiza tempo com componentes prontos.</li>
              <li>Customização fácil: Como Tailwind é utilitário, adaptar os estilos é direto.</li>
              <li>Consistência visual: Padrões de design consistentes.</li>
              <li>Compatibilidade: 100% alinhadas com Tailwind.</li>
              <li>Acessibilidade (em algumas, como Headless UI).</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.cardHover}`}>
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
          <div className={`${styles.card} ${styles.cardHover}`}>
            <h3>🏢 Empresas que usam Tailwind CSS</h3>
            <p>Várias empresas já adotaram Tailwind CSS por sua flexibilidade e performance:</p>
            <ul className={styles.empresasList}>
              <li title="GitHub — Usa Tailwind no GitHub Copilot Dashboard">
                <img src="/images/git.jpg" alt="GitHub" width={32} height={32} className={styles.logoEmpresa} />
                <strong>GitHub:</strong> Utiliza Tailwind internamente em projetos.
              </li>
              <li title="Laravel — Usa Tailwind no Jetstream e Breeze">
                <img src="/images/laravel.png" alt="Laravel" width={32} height={32} className={styles.logoEmpresa} />
                <strong>Laravel:</strong> O framework PHP usa Tailwind em seu frontend (Laravel Jetstream, Breeze).
              </li>
              <li title="Vercel — Usa Tailwind em partes do site e Next.js">
                <img src="/images/vercel.png" alt="Vercel" width={32} height={32} className={styles.logoEmpresa} />
                <strong>Vercel:</strong> Usa Tailwind em partes do site e em projetos como Next.js.
              </li>
              <li title="DigitalOcean — Painéis internos usam Tailwind">
                <img src="/images/digital.jpg" alt="DigitalOcean" width={32} height={32} className={styles.logoEmpresa} />
                <strong>DigitalOcean:</strong> Alguns dashboards e sites usam Tailwind.
              </li>
              <li title="Statamic — CMS baseado em Laravel com Tailwind">
                <img src="/images/sta.jpg" alt="Statamic" width={32} height={32} className={styles.logoEmpresa} />
                <strong>Statamic:</strong> CMS moderno baseado em Laravel.
              </li>
              <li title="Figma — Utiliza Tailwind em diversos componentes internos">
                <img src="/images/figma.png" alt="Figma" width={32} height={32} className={styles.logoEmpresa} />
                <strong>Figma:</strong> Plataforma de design colaborativo que usa Tailwind.
              </li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.cardHover}`}>
            <h3>🌐 Projetos Open Source que Usam Tailwind CSS</h3>
            <ul>
              <li>
                <strong>Refine</strong><br />
                Website:{" "}
                <a href="https://refine.dev" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  refine.dev 🔗
                </a><br />
                Sobre: Plataforma para desenvolvimento de aplicações web, utiliza Tailwind CSS para interfaces adaptáveis.
              </li>
              <li>
                <strong>Django Tailwind</strong><br />
                Website:{" "}
                <a href="https://django-tailwind.readthedocs.io/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  django-tailwind 🔗
                </a><br />
                Sobre: Pacote para integrar o Tailwind CSS com o framework Django.
              </li>
              <li>
                <strong>Tremor</strong><br />
                Website:{" "}
                <a href="https://www.tremor.so/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  tremor.so 🔗
                </a><br />
                Sobre: Biblioteca de componentes para dashboards e interfaces analíticas, desenvolvida com Tailwind CSS.
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.cardCuriosidades} ${styles.cardHover}`}>
          <h3>💡 Curiosidades sobre Tailwind CSS</h3>
          <ul>
            <li>O nome “Tailwind” vem do termo de aviação para vento a favor, simbolizando velocidade.</li>
            <li>O criador do Tailwind CSS é Adam Wathan.</li>
            <li>O framework é open source e tem milhares de contribuidores.</li>
            <li>É possível criar temas escuros facilmente usando <code>dark:</code> nas classes.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
