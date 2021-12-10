import React from 'react'
import  {SidebarIcon} from './sidibar-style'

export default function IzqOpciones({text,Icon,}) {
    return (
        
        <SidebarIcon>
           
           <Icon/>
          <h2>{text}</h2>
        </SidebarIcon>
       
   
   )
}

