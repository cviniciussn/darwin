import React from 'react'
import { ModalForm } from './styles-form'

import entenda from '../../img/entenda.svg'
import desenvolva from '../../img/desenvolva.svg'
import evolua from '../../img/evolua.svg'
import insta from '../../img/instagram.svg'
import linkedin from '../../img/linkedin.svg'
import fb from '../../img/facebook.svg'
import { FormGroup } from '@mui/material';
import { TextField } from '@mui/material';
import FilledButton from '../FilledButton/FilledButton'


export default function FormComponent() {


    return (
        <ModalForm showBird='' >
            <div id='bird'>
                <div id='div1'>
                </div>
                <div id='div2'>
                </div>
                <div id="div-3-wrapper">
                    <div id='div3'>
                    </div>
                    <div id="phrases-wrapper">
                        <img id="entenda" src={entenda} alt="entenda" />
                        <img id="desenvolva" src={desenvolva} alt="desenvolva" />
                        <img id="evolua" src={evolua} alt="evolua" />
                    </div>
                </div>
                <div id='div4'>
                </div>
                <footer>
                    <div id="socials-wrapper">

                        <a href='https://linkedin.com/in/cviniciussn' target='_blank'>
                            <img src={linkedin} alt="linkedin" id="linkedin" className='social' />
                        </a>
                        <a href='http://instagram.com' target='_blank'>
                            <img src={insta} alt="instagram" id="insta" className='social' />
                        </a>
                        <a href='http://fb.com' target='_blank'>
                            <img src={fb} alt="facebook" id="face" className='social' />
                        </a>

                        <div>
                            <p>@darwindigital</p>
                        </div>
                    </div>
                </footer>
            </div>

            <div id="form">
                <div id="form-header">
                    <h1>
                        Pronto para levar sua organização para o próximo nível?
                    </h1>
                </div>
                <div id="form-paragraph">
                    <p> Sit morbi iaculis vitae tempor varius. In vel cras faucibus malesuada lacus luctus proin augue. Viverra consequat cursus enim enim et, nunc vel dignissim.
                    </p>
                </div>
                <div id="form-groups">

                    <FormGroup id='forms' sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "5px" }}>
                        <div className="form-wrapper">
                            <TextField id="name" label="Nome" variant="outlined" required />
                            <TextField id="email" label="E-mail" variant="outlined" />
                        </div>
                        <TextField id="subject" label="Assunto. Ex: orçamento" variant="outlined" required />
                        <TextField multiline rows={4} id="message" label="Mensagem" variant="outlined" required />
                        <div onClick={() => { alert("As your brand new Junior Developer, I'm looking forward to be part of this team!"); (window.location.href = '/') }}
                        >
                            <FilledButton text='Enviar' type='submit'
                            ></FilledButton>
                        </div>
                    </FormGroup>
                </div>
            </div>

        </ModalForm>
    )
}
