import styled,{css} from 'styled-components'


export const Container=styled.div`
flex: 0.5;
border-right:1px solid #d1ccc0;
overflow-y: scroll;
box-sizing:border-box;

&::-webkit-scrollbar {
    display:none;
  } 
  -ms-overflow-style:none;
  scrollbar-width:none;
`

export const Header =styled.header`
`

/*  Tweetbox */
export const Tweetbox =styled.div` 
border-bottom:1px solid #ddd ;
padding: 5px 15px;
>.SearchIcon{
  color:#1B9CFC;
}
>.input{
  border:none;
  outline:0;
  padding-left:px;

} 



`
/* interfaz de publicar  */

export const Div =styled.div`
  display: flex;
  width: 100%;
  >.columns{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right:16px;
    >input{
      margin-left:10px;
      margin-top:10px;
      width:100%;
      border:none;
      outline:0;
      font-size:19px;
      line-height: 25px;
      color:#1e272e;
    }
  }
 >input{
     margin-left: 10px;
     width:100%;
     flex:1;
     border:none;
     outline:0;
     font-size:19px;
     line-height:25px;
     color:#1e272e;
 }

>Button{
  background-color: #1e272e !important;
  border:none  !important;
  color: white  !important;
  font-weight: 900  !important;
  width: 80px  !important;
  height: 40px  !important;
  margin-top:20px  !important;
  border-radius:10px  !important;
  text-transform: inherit  !important;

}

`

/* DivBox contiene los inconos*/

export const DivBox=styled.div`
  display: flex;
  justify-content: space-around;
  align-items:center;
  >.MuiSvgIcon-root{
    fill:#4b4b4b;
    margin-left:1rem;
    border: 2px solid #3d3d3d ;
    width: 21px;
    height: 20px;
    border-radius:5px;
    cursor:pointer;

    &:nth-child(3){
      
    }
  }

`


export const Avatar =styled.img` 
border-radius:50%;
width:50px;
height:50px;
object-fit:fill;
`


export const Form =styled.form`

display: flex;
flex-direction:column;

`

export const File=styled.input`
max-width: 35px;
position: absolute;
z-index:10;
padding-top:10px;
opacity:0;
${props=>props.primary && css`
margin-left:55px;
`}

`

/*-------Post style------------*/

export const  Post=styled.div` 
padding-top:10px 15px;
border-top:1px solid #ddd;
margin-top:5px;
display: flex;
align-items: flex-start;
.post_avatar {
 margin-top:4px;}

` 

 
export const  PostBody=styled.div`  
 padding-left:10px;
 width:87%;
 overflow: hidden;
>div span{
  font-weight: 600;
  font-size:15px;
  color:#5b7083;
}

.post_icon{
  font-size:14px !important;
  color:#18dcff;}

  h3{
    padding:1%;
    margin:0;
  }

` 


export const  Avata=styled.div`` 


export const  PostDescription=styled.div` 
 margin-bottom: 10px;
 margin-right: 10px;

 >p{
margin:0;
padding:0;
color:#0f1419;
font-size:16px;
line-height:16.6875px;
}  

` 


export const  Images=styled.img` 

border-radius: 20px;
min-width:100px;
width:100%;
min-height:300px;

`


export const  PostFooter=styled.div` 
display:flex;
justify-content:space-between;
margin-top: 10px;

color:#182C61;
transition: all 100ms ease-in;
>.MuiSvgIcon-root:hover:nth-child(1){
  fill:#ff9f1a;
 
  cursor:pointer;}

  >.MuiSvgIcon-root:hover:nth-child(2){
    fill:#ff3838;
    cursor:pointer;}

    >.MuiSvgIcon-root:hover:nth-child(3){
    fill:#ff3838;
    cursor:pointer;}



`