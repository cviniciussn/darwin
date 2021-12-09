import React from 'react'
import { EmptyButtonComponent } from './styles-emptyButton'


export default function EmptyButton(props) {

    return (
        <EmptyButtonComponent>
            <span>{props.text}</span>
        </EmptyButtonComponent>
    )
}
