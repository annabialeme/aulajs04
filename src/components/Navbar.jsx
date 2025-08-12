"use client"
import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Wiki Tech</Link>
            </div>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/Framework" className={styles.link}>Framework</Link>
                <Link href="/Meta-Framework" className={styles.link}>Meta Framework</Link>
                <Link href="/bibliotecas" className={styles.link}>Biblitecas</Link>
                <Link href="/arquivos-especiais" className={styles.link}>Arquivos Especiais</Link>

            </div>
        </nav>
    )
}
