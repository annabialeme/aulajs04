import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.nome}>
                <h1>Mini Wiki Tech</h1>
            </div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>

                <div
                className={styles.dropdown}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                >

                <button className={styles.dropbtn}>
                    Conteúdo <span style={{marginLeft: '4px'}}>▼</span>
                </button>

                {open && (
                    <div className={styles.dropdownContent}>
                        <Link href="/Framework">Framework</Link>
                        <Link href="/Meta-Framework">Meta-framework</Link>
                        <Link href="/bibliotecas">Bibliotecas de Estilos</Link>
                        <Link href="/Nextjs15">Next.js 15</Link>
                        <Link href="/especiais">Arquivos especiais do App Router e raiz do projeto</Link>
                    </div>
                )}
                </div>
            </nav>
        </header>
    );
}