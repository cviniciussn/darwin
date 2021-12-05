import React from 'react'
import { EmptyButtonComponent } from './styles-emptyButton'


export default function EmptyButton(props) {

    return (
        <EmptyButtonComponent>
            <h4>{props.text}</h4>
        </EmptyButtonComponent>
    )
}
