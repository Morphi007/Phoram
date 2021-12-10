import { Container,Header} from './Home-style'
import React,{useState,useEffect} from 'react'
import TwetBox from "./TwetBox"
import Publics from "./Post"
import { db } from '../../../firebase/fire'


export default function Home() {
  
    const [post,setPost]=useState([])
    const getPost=()=>{
    db.collection("post").orderBy("timestamp","desc").onSnapshot((res)=>{
          const docs=[];
          res.forEach(doc=>{
            docs.push({...doc.data(),id:doc.id})
        })
        console.log(docs)
          setPost(docs)
    })

    } 
  
  useEffect(() => {
    getPost()
  }, [])

    return (
        <Container> 
        {/* Header*/}
        
        <Header><h2>Phoram</h2></Header>

            {/* tweeBox*/}
            <TwetBox/>
             
            {/* Post*/}
            
            {  
                post.map((pos)=>(
                    <Publics 
                      key={pos.id}
                      name={pos.name}
                      username={pos.name}
                      verifield={pos.verifield}
                      text={pos.text}
                      avatar={pos.avatar}
                      imagesPost={pos.imagesPost}
                    />
                    ))

            }

            

             {/* Feed*/}



      </Container>
    )
}
