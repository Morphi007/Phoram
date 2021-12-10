import styled from 'styled-components'







export const Feed=styled.div` 
flex:0.3;
overflow-y:scroll;
box-sizing:border;
padding:0 30px 10px 20px;

&::-webkit-scrollbar {
    display:none;
  } 
  -ms-overflow-style:none;
  scrollbar-width:none;
  

` 

export const Header=styled.div` 
background-color:white;
height:50px;
padding-top:10px;
top:0;
` 

export const DivIcon=styled.div` 
display:flex;
align-items: center;
background-color:#95afc0;
padding: 5px;
border-radius:20px;
>.SearchIcon{
    color:#CAD3C8;
}

>input{
    border:none;
    outline:0;
    padding-left:10px;
    font-size:16px;
    background-color:#95afc0;
    font-size: 16px;
}

` 

export const DivContent=styled.div``

export const Tweet =styled.div``