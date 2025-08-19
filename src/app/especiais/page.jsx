"use client";
import React from "react";
import styles from "./ArquivosEspeciais.module.css";
import Header from '../.././components/header';

export default function Page() {
  return (
    <>
    <Header />  

    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Arquivos especiais do App Router e raiz do projeto</h1>
      </div>

      <div className={styles.card}>
        <h2>Diferença e função dos arquivos: error.js / global-error.js.</h2>
        <p>Em um contexto de desenvolvimento web, especialmente com frameworks como Next.js, os arquivos error.js e global-error.js desempenham papéis distintos no tratamento de erros.</p>

        <h3>Diferenças principais:</h3>
        <ul>
          <li>error.js é usado em rotas ou componentes específicos.</li>
          <li>global-error.js é usado em erros globais da aplicação.</li>
          <li>error.js substitui a página daquela rota quando ocorre um erro local.</li>
          <li>global-error.js é a última linha de defesa, exibido quando o erro não é tratado em nenhum outro lugar.</li>
        </ul>

        <h3>error.js</h3>
        <p>Define um componente de erro específico para uma rota ou página, exibindo uma interface personalizada quando um erro ocorre dentro daquela rota.</p>
        <p>Se existir um error.js em uma rota, o Next.js o renderiza automaticamente quando acontece um erro, substituindo a página padrão.</p>
        <p>Exemplo: Um arquivo app/products/[id]/error.js será usado para mostrar um erro personalizado em páginas de produtos individuais.</p>

        <h3>global-error.js</h3>
        <p>Define um componente de erro global para toda a aplicação. Lida com erros que não são capturados por error.js ou que ocorrem fora do contexto de uma rota.</p>
        <p>É renderizado apenas uma vez, servindo como último recurso para exibir um fallback quando não há outro mecanismo de tratamento de erros.</p>
        <p>Exemplo: Se ocorrer um erro durante o carregamento inicial da aplicação ou em eventos fora de rotas específicas, o global-error.js será utilizado.</p>
      </div>

      <div className={styles.card}>
        <h2>Função e uso de not-found.js.</h2>
        <p>Cria uma página customizada quando uma rota não é encontrada no projeto Next.js, funcionando como uma página de erro 404 personalizada.</p>
        <p>O sistema de rotas do Next.js é baseado na estrutura de pastas. Se o usuário acessar uma URL que não possui um arquivo correspondente, o not-found.js é exibido como fallback.</p>
        <p>Substitui a página 404 padrão do navegador, permitindo exibir uma interface mais útil e personalizada (mensagem, links, layout diferenciado).</p>
        <p>Garante que a aplicação mantenha consistência, evitando frustrações e direcionando o usuário para páginas relevantes (ex.: botão para voltar à Home).</p>

        <h3>Como funciona:</h3>
        <ul>
          <li>Crie um arquivo not-found.js dentro da pasta app (ou pages, dependendo da versão do Next.js).</li>
          <li>Escreva um componente React nele.</li>
          <li>Esse componente será renderizado automaticamente sempre que uma rota inexistente for acessada.</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Função e uso de loading.js</h2>
        <p>Fornece uma interface de carregamento significativa usando React Suspense, exibindo um estado de loading instantâneo enquanto o conteúdo de uma rota está sendo processado ou transmitido do servidor.</p>
        <p>Evita páginas em branco ou carregamento desordenado, proporcionando uma navegação mais fluida.</p>
        <p>Pode exibir feedback visual como um spinner, uma barra de progresso, mensagens de "Carregando..." ou animações, deixando claro que o conteúdo está em processamento.</p>
        <p>A tela de carregamento pode incluir logotipo, cores ou elementos da marca, reforçando a identidade visual da aplicação.</p>

        <h3>Como funciona:</h3>
        <ul>
          <li>Crie um arquivo loading.js dentro de uma rota da pasta app.</li>
          <li>Ele será exibido automaticamente enquanto o conteúdo daquela rota está sendo carregado.</li>
          <li>Por padrão, é um Server Component, mas pode ser transformado em Client Component usando a diretiva "use client".</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Aplicação global e por rota do layout.js.</h2>
        <p>Define a estrutura de layout da aplicação em Next.js. Pode ser usado globalmente (em toda a aplicação) ou por rota (em uma seção específica).</p>

        <h3>Props:</h3>
        <ul>
          <li>children (obrigatório): O conteúdo que será renderizado dentro do layout (páginas, sublayouts ou arquivos especiais como loading.js e error.js).</li>
          <li>params (opcional): Uma Promise que resolve em um objeto contendo parâmetros de rotas dinâmicas, desde o segmento raiz até o layout atual.</li>
        </ul>

        <h3>Layout Global</h3>
        <p>Um arquivo app/layout.js (ou src/app/layout.js) é o layout raiz (root layout). Ele envolve toda a aplicação, definindo a base compartilhada entre todas as rotas.</p>
        <p>Exemplos de elementos em um layout global incluem a barra de navegação, o rodapé e outros elementos que aparecem em todas as páginas.</p>

        <h3>Layout por Rota</h3>
        <p>Um arquivo layout.js dentro de uma pasta de rota (ex.: app/dashboard/layout.js) define um layout apenas para aquela rota e suas subrotas. Ele permite que você crie layouts diferentes para partes distintas da sua aplicação, com elementos específicos para cada seção.</p>
        <p>É útil para criar estruturas de navegação diferentes, temas visuais distintos ou outros comportamentos específicos para certas páginas.</p>

        <h3>Como funciona:</h3>
        <ul>
          <li>O Next.js usa roteamento baseado em pastas (app ou src/app).</li>
          <li>Cada pasta pode ter um layout.js próprio.</li>
          <li>O Next.js renderiza primeiro o layout global e depois vai aninhando os layouts por rota, até chegar na página final.</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Função do page.js em cada rota.</h2>
        <p>É o componente principal de cada rota no Next.js. Define a interface de usuário exibida quando a rota é acessada. Sem um page.js, a rota não é acessível.</p>

        <ul>
          <li>Exporta um componente React que renderiza o conteúdo da rota.</li>
          <li>É responsável por mostrar ao usuário a interface daquela página.</li>
          <li>Cada page.js dentro de uma pasta representa uma rota.</li>
          <li>Sem ele, a rota não existe publicamente.</li>
          <li>Em rotas aninhadas (subpastas), cada page.js define o conteúdo do respectivo segmento da rota.</li>
          <li>Em rotas dinâmicas ([id]/page.js), recebe a prop params com os valores dos segmentos dinâmicos. Isso permite personalizar a página com base nos parâmetros da URL.</li>
          <li>Pode ser combinado com layout.js, loading.js, error.js, not-found.js, etc.</li>
        </ul>
      </div>
    </div>
    </>
  );
}       