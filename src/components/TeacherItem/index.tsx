import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/50742592?s=460&u=531210e3a17b1aa7c30bb1a649c5b68c9cbba40d&v=4" alt="Rhuan Gabriel"/>
                <div>
                    <strong>Rhuan Gabriel</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Blá blá blá
                <br /><br />
                Mais blá blá ainda
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;