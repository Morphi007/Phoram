import styled from 'styled-components'

export const Contenedor = styled.div`
padding:35px;
  border-right:1px solid #ddd;
  flex:0.2;
  min-width:255px;
  
  >.gih{
    margin: 10px 0;
    width:46px;
    height: 30px ;
    fill:var(--phoramColor)!important
    }

    >.Btn-Logaut{
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #4c0277;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-top: 40px;
        letter-spacing: 4px}
        
        >.Btn-Logaut:hover{ 
            background: #290202;
            color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px #720404,
                        0 0 25px #d60404,
                        0 0 50px #f40303,
                        0 0 100px #9e0505;    }
    
         >.Btn-Logaut{
            top: 0;
            left: 1%;
            width: 100%;
            height: 50px;
            background: linear-gradient(50deg, transparent, #cc0606);
            
        }


               
 `


export const SidebarIcon = styled.div`
    display:flex;
    align-items:center;
    padding: 40px 15px;
    >h2{
        font-size:18px;
        margin: 0 15px 0 20px;
        font-weight:700;}
    
        >.MuiSvgIcon-root{
        width: 30px;
        height: 30px;}
   
&:hover{
    background: #2f2d2f;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #2a2929c9,
                0 0 25px #111010b7;
                margin-top:5px;
                cursor: pointer;}



   
            
   

`