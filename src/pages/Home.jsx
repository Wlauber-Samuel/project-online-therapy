import React from 'react';
import ComoFunciona from '../Components/ComoFunciona';

import '../styles/Home.css';

export default function Home() {
  return (
    <div>
      <ComoFunciona />

      <h1>Sejam-Bem Vindos!!!</h1>

      <p id='main-paragraphy'>
        A <strong>Terapia TRG - Online.</strong> É uma forma de atendimento à distância, onde o cliente pode realizar a terapia no conforto de sua casa, ou em qualquer lugar que desejar, de forma rápida e segura.
      </p>

      <img id="image-home" src={require('../images/young-teacher-paying-attention-her-students-while-having-some-coffee.jpg')} alt="" />

      <button
        type="button"
        id='button-shedule'
        onClick={() => {
          window.location.href = '/agendamento'
        }}
      >
        Agendar consulta
      </button>
    </div>
  )
}