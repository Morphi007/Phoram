import React from "react";
import GlobalStyle from "../style.css/GlobalStyle"
import Home from "./template/casa/home"
import Widget from "./feed-phoram/feed"
import Sidibar from "./template/Siderbar/sidibar"


export default function Phoram({handleLogout}){

    return(

        <div className="Phoram">
           
           <GlobalStyle/>
           
            {/*sidibar*/}
            <Sidibar/>
            
             {/*home*/}
             <Home/>
            
             {/*widgets*/}
             <Widget/>
             
             <section >
      <nav>
        <h2>Bienvenido</h2>
        <button  className="Btn-Logaut" onClick={handleLogout}>Logaut</button>
      </nav>
    </section>
             
        </div>
    )

}

