import React from 'react'
import { FilledButtonComponent } from './styles-filledButton'

export default function FilledButton(props) {
    return (
        <FilledButtonComponent>
            {props.text}
        </FilledButtonComponent>
    )
}
