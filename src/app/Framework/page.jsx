"use client";
import React from "react";
import styles from "./Framework.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
             <h1>Framework Page</h1>
        </div>

        <div className={styles.card}>
                <h2>O que é um framework?</h2>
                <p>Um framework é uma estrutura de software abstrata que fornece um conjunto de funcionalidades genéricas que podem ser modificadas pelo programador para atender necessidades específicas. Ele oferece uma arquitetura padrão para o desenvolvimento de aplicações, reduzindo a quantidade de código que os desenvolvedores precisam escrever do zero.  </p>
                <p>Um framework determina a estrutura do software, com extensões ou módulos personalizáveis para tarefas específicas. Essencialmente, ele dirige a lógica de fluxo de uma aplicação, definindo suas principais funções e permitindo que os desenvolvedores se concentrem nas partes únicas de seu projeto.</p>       
          </div>

          <div className={styles.card}>
                <h2> Tipos de Frameworks</h2>
                <li>Front-end: Focados na interface do usuário.</li>
                <li>Back-end: Gerenciam a lógica do servidor e a comunicação com o banco de dados.</li>
                <li>Full-stack: Oferecem soluções tanto para front-end quanto para back-end.</li>
                <li>Mobile: Projetados para desenvolvimento de aplicativos móveis.</li>
                </div>

        <div className={styles.card}>
                <h2>Exemplos de Frameworks Populares</h2>
                <li>Django (Python): Um framework web que segue o padrão “batteries-included”, oferecendo uma ampla gama de funcionalidades prontas para uso, como autenticação, administração, e ORM (Object-Relational Mapping).</li>   
                <li>React (JavaScript): Um framework de front-end desenvolvido pelo Facebook que permite a criação de interfaces de usuário interativas e dinâmicas com componentes reutilizáveis.</li> 
                <li>Flutter (Dart): Um framework mobile desenvolvido pelo Google que permite criar aplicações nativas para Android e iOS com uma única base de código.</li>  
                <li>Spring (Java): Um framework de desenvolvimento de aplicações empresariais que fornece suporte abrangente para transações, segurança e configuração baseada em anotação.</li> 
                <li>JUnit (Java): Um framework de teste amplamente utilizado no desenvolvimento de software Java para escrever e executar testes unitários automatizados.</li>
          </div>

          <div className={styles.card}> 
                <h2>Prós</h2>
                <h3>Desenvolvimento mais rápido:</h3>
                <p>Frameworks fornecem estruturas e componentes pré-construídos, permitindo que os desenvolvedores criem aplicativos mais rapidamente. </p>
                <h3>Reutilização de código:</h3>
                <p>Permitem a reutilização de componentes e bibliotecas, economizando tempo e esforço na escrita de código do zero. </p>
                <h3>Manutenção facilitada:</h3>
                <p>A estrutura e o código padronizado tornam a manutenção e a atualização de aplicações mais simples. </p>
                <h3>Segurança:</h3>
                <p>Muitos frameworks incluem recursos de segurança integrados, como proteção contra ataques comuns, reduzindo a necessidade de implementar essas funcionalidades manualmente. </p>
                <h3>Comunidade ativa:</h3>
                <p>Frameworks populares contam com comunidades ativas de desenvolvedores que fornecem suporte, documentação e recursos úteis. </p>
                <h3>Escalabilidade:</h3>
                <p>Muitos frameworks são projetados para facilitar a escalabilidade de aplicações, permitindo que lidem com grandes volumes de dados e tráfego. </p>
          </div>

          <div className={styles.card}>
            <h2>Contras:</h2>
            <h3>Curva de aprendizado:</h3>
            <p>Pode ser necessário tempo e esforço para aprender a usar um framework de forma eficaz, especialmente se for um framework complexo. </p>
            <h3>Rigidez:</h3>
            <p>A estrutura rígida de um framework pode limitar a flexibilidade e dificultar a adaptação a requisitos específicos do projeto. </p>
            <h3>Sobrecarga:</h3>
            <p>Frameworks podem adicionar complexidade e tamanho desnecessário a projetos simples, tornando-os mais difíceis de gerenciar. </p>
            <h3>Personalização limitada:</h3>
            <p>Alguns frameworks podem limitar a personalização visual, especialmente se você precisar de um design altamente personalizado. </p>
            <h3>Dependência:</h3>
            <p>Usar um framework significa depender da sua estrutura e ecossistema, o que pode criar dependência de terceiros e dificultar a migração para outra tecnologia</p>
            <h3>Desempenho:</h3>
            <p>Em alguns casos, frameworks podem introduzir um overhead de desempenho, especialmente em projetos que exigem alta performance. </p>
          </div>

          <div className={styles.card}>
            <h2>Funcionalidades principais dos frameworks:</h2>
          <h3>Estrutura:</h3>
          <p>Os frameworks oferecem uma estrutura básica para a aplicação, incluindo diretórios, arquivos e convenções de código.  </p>
          <h3>Reutilização de código:</h3>
          <p>Permitem o uso de componentes e funcionalidades pré-definidas, evitando a necessidade de escrever código repetitivo. </p>
          <h3>Padrões de projeto:</h3>
          <p>Muitos frameworks promovem o uso de padrões de projeto (como MVC - Model-View-Controller) que ajudam a organizar o código e torná-lo mais fácil de manter. </p>
          <h3>Segurança:</h3>
          <p>Alguns frameworks oferecem recursos de segurança embutidos, como proteção contra ataques comuns, como injeção de SQL e cross-site scripting (XSS). </p>
          <h3>Gerenciamento de dados:</h3>
          <p>Facilitam a interação com bancos de dados, oferecendo mecanismos para mapeamento objeto-relacional (ORM). </p>
          <h3>Roteamento:</h3>
          <p>Permitem a definição de rotas para lidar com diferentes URLs e requisições HTTP. </p>
          <h3>Testabilidade:</h3>
          <p>Alguns frameworks facilitam a criação de testes automatizados para garantir a qualidade do código. </p>
          </div>   

            <div className={styles.card}>
            <h2>Uso no mercado e oportunidades:</h2>
            <h3>Aumento da produtividade:</h3>
            <p>Frameworks fornecem funcionalidades prontas, reduzindo o tempo de desenvolvimento e aumentando a eficiência da equipe. </p>
            <h3>Segurança:</h3>
            <p>Muitos frameworks seguem padrões de segurança e são revisados regularmente, minimizando vulnerabilidades. </p>
            <h3>Manutenção facilitada:</h3>
            <p>A estrutura organizada de um framework facilita a manutenção e evolução do código. </p>
            </div>

          <div className={styles.card}>
            <h2>Oportunidades de mercado:</h2>  
            <h3>Desenvolvedores:</h3>
            <p>Profissionais com conhecimento em frameworks populares são altamente requisitados. </p>
            <h3>Empresas:</h3>
            <p>Frameworks facilitam o desenvolvimento de produtos e serviços, impulsionando o crescimento das empresas. </p>
            <h3>Startups:</h3>
            <p>Frameworks podem ajudar startups a lançar produtos mais rapidamente e otimizar recursos.</p>
        </div>   
    </div>
  );
}       