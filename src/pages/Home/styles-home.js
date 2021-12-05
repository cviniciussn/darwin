import styled from 'styled-components'

export const HomeComponent = styled.div`

h1{
    font-size: 64px;
    line-height: 64px;
    font-weight: 800;
}

p{
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    color: #b4b4b4;

}

.main{
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10vh;

#intro{
	width: 100vw;
    height: 100vh; 
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10vh;
}

	
    .logo{
        /* border: solid 1px red; */
        min-width: 370px;
        max-width: 380px;
        height: 460px;
        > img{
            width: 100%;
            height: 100%;
        }
    }
    .getToKnow{
        display: flex;
        flex-direction: column;
        gap: 20px;
        /* border: solid 1px red; */
        min-width: 380px;
        max-width: 380px;

    }

    .button-wrapper{
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 30px
    }

}

.paragraph{
    display: flex;
		align-items: center;
		justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
		min-width: 375px;
		height: fit-content;
		min-width: 425px;
    padding: 10vh;

    .h1-wrapper{
      display: block;
			width: 70%;
      min-width: 425px;
      max-width: 100vw;
      font-size: 48px;
      font-weight: 800;
      line-height: 56px;
     // padding: 20px;
    }
    .paragraph-wrapper{
      min-width: 425px;
      max-width: 100vw;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #b4b4b4;
      padding: 20px;
			width: 70%;

    }

    .presentation{
        width: 100vw;
    }
}

.areas{
    width: 100vw;
		min-width: 425px;
    height: max-content;
    display: flex;
    flex-direction: row;
		align-items: center;
    justify-content: center;

    gap: 5vw;
    flex-wrap: wrap;




}

footer{
	width: 100vw;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding-left: 10vh;
}

@media(max-width: 415px){
  width: 375px;
  padding: 0;
  margin: 0;

  body, html, main, .logo, .getToKnow, .paragraph, .presentation, .areas, .h1-wrapper, .paragraph-wrapper{
    width: 375px;
    margin-right: 0;
    margin-left: 0;
    padding: 0;
    overflow-x: hidden;

  }
  .paragraph{
    margin-top: 25vh;
    width: 50%;

    h1{
      font-size: 40px;
    }
  }

  #0, #1, #2{
padding: 0;
  }

}

`