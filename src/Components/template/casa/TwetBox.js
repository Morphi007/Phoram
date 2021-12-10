import React,{useState,useEffect} from 'react'
import {Tweetbox,Div,Avatar,Form,DivBox,File} from "./Home-style"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import GifIcon from '@material-ui/icons/Gif';
import {Button} from '@material-ui/core'
import {db,storage} from "../../../firebase/fire"
import User from "../../../img/logo.svg"

export default function TwetBox() {
   const [tweetMsg,setTweetMsg]=useState("")
   const [usuario,setUsuario]=useState("")
   const [images,setImage]=useState("")
   const [tweetImg,setTweetImg]=useState("")


  
   useEffect(() => {
    const perfil=JSON.parse(localStorage.getItem("perfil"))
    if(perfil){
      setImage(perfil)
    }
 },[])



   useEffect(() => {
      localStorage.setItem("perfil",JSON.stringify(images))
    
   },[images])


   const sendTweet=async(e)=>{
     e.preventDefault()
     if(usuario.length<1){
      return alert("Debes ingresar un nombre de usuario")}
      if(images.length<1){
        return alert("Debes ingresar una foto de perfil")
      } 
      if(tweetMsg.length>300){
        return alert("debe ser menos a 300 caracteres")

      }
      if(tweetMsg.length<5){
        return alert("tu post debe tener mas de 5 y 300 palabra menos")
      }else{
        await db.collection("post").doc().set({
          name:usuario,
          username:usuario,
          verifield:true,
          text:tweetMsg,
          timestamp:Date.now(),
          avatar:images,
          imagesPost:tweetImg
        })
        setTweetImg("")
        setTweetMsg("")
      }
   }

  const handleSubir=(e)=>{
   const file=e.target.files[0]
      const storageRef=storage.ref(`/avatar/${file.name}`).put(file)
      storageRef.on( 
        "state_changed",
        snapshot=>{},
        error=>{
          console.log(error)
        },()=>{
          storage
          .ref("avatar")
         .child(file.name)
          .getDownloadURL()
          .then(url=>{
            setImage(url)  
            console.log(url)})
        }
        )

  };


  const handlePost=(e)=>{
    const file=e.target.files[0]
       const storageRef=storage.ref(`/Post/${file.name}`).put(file)
       storageRef.on( 
         "state_changed",
         snapshot=>{},
         error=>{
           console.log(error)
         },()=>{
           storage
           .ref("Post")
          .child(file.name)
           .getDownloadURL()
           .then(url=>{
            setTweetImg(url)  
             console.log(url)})
         }
         )
 
   };




    return (
     <Tweetbox>
           
      <Form>
         <Div>
          {
            images?<Avatar src={images}/>:<Avatar src={User} />
          }
          
           <File type="file" onChange={handleSubir} />
          
          <div className="columns" >
          <input placeholder="Escribe tu post" value={tweetMsg} 
            onChange={e=>setTweetMsg(e.target.value)} />
          <input text="text"  placeholder="Usuario" value={usuario} 
            onChange={e=>setUsuario(e.target.value)}
          />  
          </div>
         </Div>
          
          <Div>
          
          <DivBox>
          <File type="file" primary onChange={handlePost} />
            <AddAPhotoIcon/>
            <GifIcon/>    
          </DivBox>
          <File type="file"  onChange={handlePost} />  
           <input text="text" placeholder="ingresa link imagen/gif"
            value={tweetImg} onChange={e=>setTweetImg(e.target.value)} />
           <Button onClick={sendTweet} type="sumit" >Publicar</Button>
          </Div>
     </Form>

    </Tweetbox>
    )
}
            
