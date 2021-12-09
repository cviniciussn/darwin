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
    margin-bottom: 10vh;
}

	
    .logo{
        /* border: solid 1px red; */
        min-width: 220px;
        max-width: 370px;
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
        gap: 30px;
    }

}

    .h1-wrapper{
      display: flex;
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
      padding-top: 20px;
			width: 70%;

    }

    .presentation{
        height: fit-content;
        width: 80vw;
        //padding-left: 50px;
        h1-wrapper {
          width: 60vw;
        }
    }

.areas{
    width: 80vw;
		//min-width: 425px;
    height: max-content;
    display: flex;
    flex-direction: row;
		align-items: center;
    justify-content: space-between;

    gap: 5vw;
    flex-wrap: wrap;
    padding-left: 50px;
}

footer{ 
	width: 80vw;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding-left: 50px;
  padding-bottom: 50px ;
}



@media screen and (max-width: 700px){

  .main, html{
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    width: 100vw;
  }

  #intro{
    width: 100vw;
    height: max-content;
    gap: 0 !important;
    margin: 0;
    padding: 0;
  
  .logo{
    width: 180px;
    height: 240px !important;

    img>{
      width: 100%;
      height: 240px;
    }
  }

  .getToKnow{
    display: flex;
    flex-wrap: nowrap;
    width: 344px;
    height: fit-content;
    padding: 0 20px 0 20px;
    text-align: center;
    //gap: 0 !important;

    >h1{
      text-align: center;
      font-size: 40px;
      margin: 0 16px 0 16px;
    }
    >p{
      width: 344px;
    }
  }

  .button-wrapper{
    display: flex;
    justify-content: space-between;

    button{
      width: 150px;
      height: 56px;
    }
  }
}

.presentation{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 344px;
  height: fit-content;
  //padding: 0 20px 0 20px;
  padding: 0;
  text-align: flex-start;

.h1-wrapper{
  width: 344px;
  height: 160px;
  
  >h1{
    width: 344px;
    font-size: 32px;
    line-height: 40px;
  }
}

.paragraph-wrapper{
  >p{
    font-size: 16px;
    width: 344px;
    line-height: 24px;
  }  
}
}
y
.areas{
  width: 100vw;
  height: fit-content;
  padding: 10px;
  justify-content: center;

  p{
    font-size: 16px;
    width: 340px;
    line-height: 24px;
  }

  #card1{
    text-align: end;

    #imgcard1{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}

footer{
  align-items: center;
  justify-content: center;
  padding: 0 0 50px;
}


}

`