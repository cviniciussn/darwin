import styled from 'styled-components'

export const EmptyButtonComponent = styled.button`

width: 174px;
height: 48px;

display: flex;
justify-content: center;
align-items: center;

background-color: transparent;
border: 10px solid;
border-image-slice:1;
border-width: 5px;
border-image-source: linear-gradient(to right, #ff5d8e, #b251ff);
outline: none;

cursor: pointer;
line-height: 32px;


font-weight: 600;
font-family: 'Open Sans', sans-serif;

&:hover{
    transition: all .4s;
    box-shadow: 0 0 5px 5px rgba(255,93,142, .5);
}

&:not(:hover){
    transition: all .4s;
}

&:active{
    filter: brightness(120%);
}

&:active{
    filter: brightness(50%);
}

h4 {
    font-size: 24px;
  background: linear-gradient(90deg, rgba(255,93,142,1) 7%, rgba(178,81,255,1) 92%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


`