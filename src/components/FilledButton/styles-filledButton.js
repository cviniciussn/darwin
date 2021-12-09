import styled from 'styled-components'

export const FilledButtonComponent = styled.button`

width: 174px;
height: 48px;


display: flex;
justify-content: center;
align-items: center;

border: none;
outline: none;
color: #FCFCFC;
cursor: pointer;
background: linear-gradient(90deg, rgba(255,93,142,1) 7%, rgba(178,81,255,1) 92%);
font-size: 24px;
line-height: 32px;

font-weight: 600;
font-family: 'Open Sans', sans-serif;



&:hover{
    transition: all .4s;
    box-shadow: 0 0 20px 20px rgba(255,93,142, .5);
    filter: brightness(150%);
}

&:not(:hover){
    transition: all .8s;
}

&:active{
    filter: brightness(60%);
}

`