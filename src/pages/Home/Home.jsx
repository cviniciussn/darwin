import React from 'react'
import { useRef } from 'react'
import { HomeComponent } from './styles-home'
import { statements } from '../../statements/statements'
import logo from '../../img/logo.svg'
import EmptyButton from '../../components/EmptyButton/EmptyButton'
import AreaCard from '../../components/AreasCards/AreaCard'
import ModalComponent from '../../components/Modal/Modal'


export default function Home() {

  const ref = useRef()

  return (
    <HomeComponent>

      <div className="main" >
        <div id='intro'>
          <div className="logo" >
            <img src={logo} alt="logomarca" />
          </div>
          <div className="getToKnow">
            <h1>
              Vamos evoluir seu negócio
            </h1>
            <p>
              Somos uma agência de design e desenvolvimento que ajuda organizações
              a alcançar o próximo nível através da transformação digital.
            </p>
            <div className="button-wrapper" >
              <ModalComponent />
              <div
                onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
              >
                <EmptyButton text='Saiba Mais'
                  ref={ref}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="presentation" ref={ref}>
          <div className="h1-wrapper">
            <h1>
              Tudo que sua organização precisa para se adequar ao mundo digital
            </h1>
          </div>
          <div className="paragraph-wrapper">
            <p>
              Através da sua equipe de especialistas multidisciplinares,
              a Darwin pode prover tudo que uma organização precisa para se
              adequar ao novo panorama do mundo digital.
            </p>
          </div>
        </div>

        <div className="areas" >
          {statements.map(
            (card, index) => {
              return (
                <AreaCard
                  id={`card${index}`}
                  key={index}
                  img={card.img}
                  header={card.header}
                  paragraph={card.paragraph}
                />
              )
            }
          )}
        </div>
        <footer>
          <ModalComponent />
        </footer>
      </div>
    </HomeComponent>
  )
}