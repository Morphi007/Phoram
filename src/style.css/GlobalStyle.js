import {createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

:root{
    --phoramColor:#2c2c54;
    -phoramHover:#1a91da
}

*{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .Phoram{
    display: flex;
    height: 100vh;
    max-width: 1250px;
    margin: 0 auto;
  
  }

    .Btn-Logaut{

      position: relative;
        display: inline-block;
        padding: 15px 15px;
        color: #4c0277;
        font-size: 19px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-top: 5px;
        letter-spacing: 4px
    }
    .Btn-Logaut:hover{
      background: #290202;
            color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px #720404,
                        0 0 25px #d60404,
                        0 0 50px #f40303,
                        0 0 100px #9e0505;  
    }
    .Btn-Logaut{
      top: 0;
            left: 1%;
            width: 100%;
            height: 50px;
            background: linear-gradient(50deg, transparent, #cc0606);
    }
   

`;


 
export default GlobalStyle;

