import '../style.css/style-Login.css';
import React,{useState,useEffect} from "react";
import  fire from "../firebase/fire"
import 'firebase/auth';  
import Login from '../Components/Login';
import Phoram from '../Components/phoram'
import Sidibar from '../Components/template/Siderbar/sidibar'

export default function IniciarSecion () {
   
  const [user,setUser]=useState("");
  const [email,setEmail]=useState(""); 
  const [password,setPassword]=useState("");
  const [emailError,setEmailError]=useState(""); 
  const [passwordError,setPasswordError]=useState("");   
  const [hasAccount,setHasAccount]=useState(true);

  const clearInputs =()=>{
    setEmail("") 
    setPassword("")   
}

const clearErrors =()=>{
setEmailError()
setPassword() 
}
    
  const  handleLogin = ()=>{
    clearErrors();
    fire.auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err =>{
        // eslint-disable-next-line default-case
        switch(err.code){
               case"auth/invalid-email":
               case"auth/user-disable":
               case"auth/user-not-found":
               setEmailError(err.message);
               break;
               case"auth/wrong-password":
               setPasswordError(err.message);
               break; }
           })
               };

  const  handleSignup=()=>{
              clearErrors();
            fire.auth()
            .createUserWithEmailAndPassword(email,password)
                .catch(err=>{
                    // eslint-disable-next-line default-case
                     switch(err.code){
                           case"auth/email-already-in-use":
                           case"auth/invalid-email":
                           setEmailError(err.message);
                           break;
                           case"auth/weak-password":
                           setPasswordError(err.message);
                           break;}
                       })
                           };

       const handleLogout =()=>{
        fire.auth().signOut();
          };
                      
         
      
const authListener =()=>{
     fire.auth().onAuthStateChanged((user)=>{
            if(user){
              clearInputs();
              setUser(user);
            }else{
                   setUser("")
            }
     });
};

useEffect(()=>{
  authListener();
},[]);




<Sidibar handleLogout={handleLogout}/>

               
  return (
    <div>
       
    {console.log(fire)}

{user?(
  
  <Phoram handleLogout={handleLogout}/>
):(

<Login  
  email={email}
  setEmail={setEmail}
  password={password}
  setPassword={setPassword}
  handleLogin={handleLogin}
  handlesignup={handleSignup}
  hasAccount={hasAccount}
  setHasAccount={setHasAccount}
  emailError={emailError}
  passwordError={passwordError} 
/>

)}
  </div>
     
     )
}


