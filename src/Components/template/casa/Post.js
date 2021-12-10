import React from 'react'
import {Post,PostBody,Avatar,PostDescription,Images,PostFooter} from './Home-style'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
export default function Publics({
  
  name,
  username,
  text,
  avatar,
  imagesPost,

}) {
    return (
        
    <Post>
         <div className="post_avatar">
           <Avatar src={avatar} />
         </div>
      
    <PostBody>
      <div>
               <div>
                   <h3>{name}<span><VerifiedUserIcon className="post_icon" />
                   @{username} </span></h3>
                   <PostDescription>
                       <p>{text}</p>
                   </PostDescription>
             </div> 
             <Images  src={imagesPost} />
             <PostFooter>
              <ModeCommentIcon fontSize="small"/>
               <FavoriteIcon fontSize="small"/>
               <ExposurePlus1Icon fontSize="small"/>
            </PostFooter>
            </div>
    </PostBody>
    
    
    </Post>
 
 



)}
