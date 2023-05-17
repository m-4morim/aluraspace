import React from 'react'
import home from './home-ativo.png'
import maisCurtidas from './mais-curtidas-inativo.png'
import maisVistas from './mais-vistas-inativo.png'
import novas from './novas-inativo.png'
import supreendaMe from './supreenda-me-inativo.png'
import styles from './Menu.module.scss';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt='' />
                    <a href='/'>Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt='' />
                    <a href='/'>Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt='' />
                    <a href='/'>Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt='' />
                    <a href='/'>Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={supreendaMe} alt='' />
                    <a href='/'>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}