import styled from "styled-components";

export const CardComponent = styled.div`

max-width: 348px;
min-width: 348px;
height: fit-content;
overflow: hidden;

display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 10vh;

.img-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
}

img{
    width: 158px;
    height: 158px;
}

.card-header-wrapper{
    display: block;
    width: 100%;
    h3{
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
    }
}

.card-paragraph-wrapper{
    display: block;
    p{
        font-size: 16px;
        line-height: 24px;
        color: #b4b4b4;
        text-align: justify;
    }
}

`