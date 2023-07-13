import React from 'react';
import PaginaInicial from '../Components/PaginaInicial';
import { Image } from 'react-bootstrap';
import '../styles/Infos.css';

export default function Infos() {

    return (
        <div>
            <PaginaInicial />

            <Image id='image-infos' src={require('../images/pexels-pixabay-273238.jpg')} />

            <div>

                <h1>Como funciona?</h1>

                <section>
                    <p>
                        A TRG através do processamento, acessa a raíz emocional.
                        Trata a causa e você fica livre dos problemas emocionais que tem te aprisionado.
                    </p>
                </section>

                <section>
                    <p>
                        Quais momentos ou sentimentos de hoje estão conectados ao ponto de origem de seus problemas emocionais e psicossomáticos.
                        <br />
                        Tais como:
                    </p>
                    <br />
                    <ul>
                        <li>Fobias</li>
                        <li>Traumas</li>
                        <li>Depressão</li>
                        <li>Ansiedade</li>
                        <li>Compulsões</li>
                        <li>Crise de pânico, dentre outras.</li>
                    </ul>
                </section>
                <section>
                    <p>
                        Você encontrando o caminho para sair desse quadro é encontrar o momento em que tudo começou.
                        <br />
                        Através da terapia de reprocessamento generativo (TRG) você encontrará o direcionamento para estabelecer o seu equilíbrio novamente.
                        <br />
                        Por isso eu te convido para fazer comigo uma sessão online da terapia.
                    </p>
                </section>


                <button
                    type="button"
                    className=""
                    onClick={() => {
                        window.location.href = '/agendamento'
                    }}
                >
                    Agendar consulta
                </button>

            </div>
        </div>
    )
}

