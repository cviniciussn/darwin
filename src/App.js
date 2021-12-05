import Home from './pages/Home/Home';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
width: 100vw;
height: 220vh;


background-color: #262626;
color: #FCFCFC;
font-family: 'Open Sans', sans-serif;
min-width: 375px;

overflow-x: hidden;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Home></Home>
    </>
  );
}

export default App;
