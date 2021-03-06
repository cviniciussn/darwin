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
margin: 0;




#bird{
    background-color: white;
    width: 50%;
    height: 70vh;
    flex-direction: column;
    padding: 15px;
    position: relative;



    #div1{
        width: 327px;
        background-image: url(${bird});
        background-position-y: top;
        height: 130px;
    }
    #div2{
        margin-top: 2vh;
        width: 327px;
        background-image: url(${bird});
        background-position-y: 30%;
        background-position-x: 80%;
        height: 130px;
        margin-left: 30% ;
    }

    #div-3-wrapper{
        margin-top: 2vh;
        width: 100%;
        
        display: flex;
        gap: 20px;
        #div3{
            width: 327px;
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
                width: 130px;
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
        width: 327px;
        background-image: url(${bird});
        background-position-x: right;
        background-position-y: bottom;

        height: 130px;
        margin-left: 40% ;

    }

    footer{
        display: flex;
        width: 800px;
        flex-direction: column;
        height: fit-content;
        position: relative;

        #socials-wrapper{
            padding: 10px;
            margin-top: 30px;
            display: flex;
            align-self: flex-end;
            gap: 10px;
            position: absolute;
            left: 410px;
            
            .social{
                &:hover{
                    transform: scale(1.2);
                    transition: all .5s;
                }
                &:not(:hover){
                    transition: all .5s;
                }
            }

            p{
                font-size: 24px;
                line-height: 32px;
                font-weight: 600;
            }
        }
    }

}

#form{
    width: 50%;
    height: 100%;
    height: fit-content;

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

    #form-header, #form-paragraph, #form-groups{
        margin: 5px 0 5px 0;
        width: 507px;
        text-align: left;

    }

    .form-wrapper{
        display: flex;
        justify-content: space-between;
    }
}

@media screen and (max-width: 700px){
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;

    .MuiOutlinedInput-root{
        width: 100% ;
        margin-bottom: 10px;

    }

    #bird{
        display: none;
    }

    #form, #form-groups, .css-1e2khdg-MuiFormGroup-root{
        padding: 0;
        margin: 0;
        width: 100%;
    }
    
    #name, #email, #subject{
        width: 100%;
    }
    .MuiFormControl-root{
        width: 344px;
    }
    .MuiFormGroup-root, #name-email-wrapper{
        padding: 25px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .css-1e2khdg-MuiFormGroup-root{
        width: 100% ;
    }
    .css-f9eaqo-MuiPaper-root-MuiAppBar-root{
        width: 90%;
    }
    .css-hz1bth-MuiDialog-container{
        margin-left: 0;
        padding: 0;
        width: 90%;
    }
}
`