import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PáginaInicial.css';

export default function PaginaInicial() {
    return (
        <div>
            <Link
                id='home'
                to='/'
            >
                Página Inicial
            </Link>
        </div>
    )
}
