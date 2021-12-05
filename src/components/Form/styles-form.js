import styled from 'styled-components'
import bird from '../../img/bird.svg'

export const ModalForm = styled.div`
background: none;
width: 1098px;
height: 90vh;

display: flex;
flex-direction: row;
gap: 20px;
align-self: center;
justify-self: center;
margin: 10vh;



#bird{
    background-color: white;
    width: 50%;
    height: 100%;
    flex-direction: column;
    padding: 15px;

    
    position: relative;



    #div1{
        width: 300px;
        background-image: url(${bird});
        background-position-y: top;
        height: 100px;
    }
    #div2{
        margin-top: 2vh;
        width: 300px;
        background-image: url(${bird});
        background-position-y: 30%;
        background-position-x: 80%;
        height: 100px;
        margin-left: 30% ;
    }

    #div-3-wrapper{
        margin-top: 2vh;
        width: 100%;
        
        display: flex;
        gap: 20px;
        #div3{
            width: 300px;
            height: 150px;
            background-image: url(${bird});
            background-position-y: 60%;
            background-position-x: 5%;
        }
        #phrases-wrapper{
            align-self: flex-end;
            

            display: flex;
            flex-direction: column;

            #entenda{
                height: 36px;
                width: 100px;
            }
            #desenvolva{
                width: 138px;
            }
            #evolua{
                width: 148px;
                height: 64px;
            }

        }
    }
    #div4{
        margin-top: 2vh;
        width: 300px;
        background-image: url(${bird});
        background-position-x: right;
        background-position-y: bottom;

        height: 100px;
        margin-left: 40% ;

    }

    footer{
        display: flex;
        flex-direction: column;
        height: fit-content;

        #socials-wrapper{
            padding: 10px;
            display: flex;
            align-self: flex-end;
            gap: 10px;

            .social{
                &:hover{
                    transform: scale(1.2);
                    transition: all .5s;
                }
                &:not(:hover){
                    transition: all .5s;
                }
            }
        }
    }

}

#form{
    width: 50%;
    height: 100%;
    height: 650px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
    }
    p{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #737373;
    }

    #form-header, #form-paragraph{
        margin: 20px 0 20px 0;
        width: 80%;
        text-align: justify;

    }
}

@media(max-width: 415px){
    width: 375px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;

    #bird{
        display: none;
    }
    #form, #form-groups, .css-1e2khdg-MuiFormGroup-root{
        padding: 0;
        margin: 0;
        width: 375px;
        
    }
    .css-1e2khdg-MuiFormGroup-root{
        width: 375px ;
        padding: 25px;
    }
    .css-f9eaqo-MuiPaper-root-MuiAppBar-root{
        width: 375px;
    }
    .css-hz1bth-MuiDialog-container{
        margin-left: 0;
        padding: 0;
        width: 375px;
    }
}
`