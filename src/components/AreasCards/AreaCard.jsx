import React from 'react'
import { CardComponent } from './styles-areasCards'

export default function AreaCard(props) {
    return (
        <CardComponent id={props.id}>
            <div className='img-wrapper' id={`img${props.id}`}>
                <img src={props.img} alt="" />
            </div>
            <div className='card-header-wrapper'>
                <h3>{props.header}</h3>
            </div>
            <div className='card-paragraph-wrapper'>
                <p>
                    {props.paragraph}
                </p>
            </div>
        </CardComponent>
    )
}
