import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import supreendaMe from '../../assets/icones/supreenda-me-inativo.png'

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <img src='' alt='' />
                    <a href='/'>Início</a>
                </li>
                <li>
                    <img src='' alt='' />
                    <a href='/'>Mais curtidas</a>
                </li>
                <li>
                    <img src='' alt='' />
                    <a href='/'>Mais vistas</a>
                </li>
                <li>
                    <img src='' alt='' />
                    <a href='/'>Novas</a>
                </li>
                <li>
                    <img src='' alt='' />
                    <a href='/'>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}