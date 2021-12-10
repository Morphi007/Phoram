import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Feed,Header,DivIcon,DivContent,Tweet } from './feed-style'
import { Timeline } from 'react-twitter-widgets'


export default function Widget() {
    return (
        <Feed>
          <Header>
            <DivIcon>
                  <SearchIcon className="SearchIcon"/>
                  <input  type="text" placeholder="buscador"  />
            </DivIcon>
          </Header>
          
          <DivContent>
               <h2>Feed twitter</h2> 

               <Tweet tweetId="841418541026877441" />


            <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'ch1nux'
  }}
  options={{
    height: '888'
    
  }}
/>
  
          </DivContent>

        </Feed>
    )
}
