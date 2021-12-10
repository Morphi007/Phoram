import React from 'react'
import {Contenedor} from './sidibar-style'
import InstagramIcon from '@material-ui/icons/Instagram';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Button} from '@material-ui/core'
import IzOpciones from './izq.opciones'

export default function Sidibar({handleLogout}) {
    return (
        
      <Contenedor>

        <GitHubIcon className="gih"/>
        <IzOpciones Icon={InstagramIcon} text="my instagram"/>
        <IzOpciones Icon={ThumbUpAltSharpIcon} text="like post"/>
        <IzOpciones Icon={LocalLibraryOutlinedIcon} text="Lee un poco"/>
      
        {/* inconos opciones*/ }
        {/* inconos opciones*/ }
        {/* inconos opciones*/ }
         {/*<Button className="Btn-Logaut">Logaut</Button>*/}

         

      </Contenedor>
        
    )
}
