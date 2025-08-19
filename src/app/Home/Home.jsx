"use client";
import styles from "./Home.module.css";
import { Card, Typography, Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const cardsData = [
    {
      image: "/images/annaleme.jpeg",
      alt: "Foto da Anna Beatriz Leme",
      title: "Anna Beatriz Leme",
      subtitle: "2TDS1",
      instructors: "Instrutores Thiago Ferreira e Marcelo Carboni",
      description: "Mini Wiki Tech",
      details:
        "Em design e desenvolvimento web, uma biblioteca de estilos é uma coleção de regras CSS pré-definidas que facilitam a estilização consistente de elementos em um site ou aplicação",
    },
    {
      image: "/images/annavalentim.jpg",
      alt: "Foto da Anna Beatriz Valentim",
      title: "Anna Beatriz Valentim",
      subtitle: "2TDS1",
      instructors: "Instrutores Thiago Ferreira e Marcelo Carboni",
      description: "Mini Wiki Tech",
      details:
        "Em desenvolvimento de software, um framework (ou estrutura) é um conjunto de ferramentas, bibliotecas e regras reutilizáveis que fornecem uma base para a construção de aplicações.",
    },
    {
      image: "/images/react.jpeg",
      alt: "Foto da Beatriz Lima",
      title: "Beatriz Lima",
      subtitle: "2TDS1",
      instructors: "Instrutores Thiago Ferreira e Marcelo Carboni",
      description: "Mini Wiki Tech",
      details:
        "Um meta-framework é uma camada de abstração sobre um framework existente, oferecendo funcionalidades adicionais e uma abordagem mais abrangente para o desenvolvimento de aplicações.",
    },
    {
      image: "/images/luana.jpg",
      alt: "Foto da Luana Domeneghetti",
      title: "Luana Domeneghetti",
      subtitle: "2TDS1",
      instructors: "Instrutores Thiago Ferreira e Marcelo Carboni",
      description: "Mini Wiki Tech",
      details:
        "Um meta-framework é uma camada de abstração sobre um framework existente, oferecendo funcionalidades adicionais e uma abordagem mais abrangente para o desenvolvimento de aplicações.",
    },
    {
      image: "/images/mariaparma.jpeg",
      alt: "Foto da Maria",
      title: "Maria Eduarda Parma",
      subtitle: "2TDS1",
      instructors: "Instrutores Thiago Ferreira e Marcelo Carboni",
      description: "Mini Wiki Tech",
      details:
        "Next.js 15 é a versão mais recente do framework Next.js, que é um framework para React que facilita a criação de aplicações web, especialmente aquelas com foco em desempenho e SEO.",
    },
  ];

  return (
    <div className={styles.backgroundGradient}>
      <div className={styles.scrollContainer}>
        {cardsData.map((card, index) => (
          <Card hoverable className={styles.card} key={index}>
            <div className={styles.imageContainer}>
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className={styles.image}
                priority
              />
            </div>
            <Typography.Title level={3} style={{ textAlign: "center" }}>
              {card.title}
            </Typography.Title>
            <Typography.Paragraph style={{ textAlign: "center" }}>
              {card.subtitle}
            </Typography.Paragraph>
            <Typography.Paragraph style={{ textAlign: "center" }}>
              {card.instructors}
            </Typography.Paragraph>
            <Typography.Paragraph style={{ textAlign: "center" }}>
              {card.description}
            </Typography.Paragraph>
            <ul className={styles.text}>
              <p>{card.details}</p>
            </ul>
            <Button 
              type="primary" 
              className={styles.customButton}
              onClick={() => {
                if (index === 0) router.push('/bibliotecas');
                else if (index === 1) router.push('/Framework');
                else if (index === 2) router.push('/Meta-Framework');
                else if (index === 3) router.push('/Meta-Framework');
                else if (index === 4) router.push('/Nextjs15');
              }}
            >
              Saiba Mais
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}