import React from 'react';
import '../css/AllSongs.css';
import {SongsData} from '../SongsData'

class AllSongs extends React.Component{
    render(){
        return(
            <div className="all-songs-menu" prevMenu="song-menu">
            {SongsData.map((songs)=>{
               return <div className="all-songs-menu-list-item" value="now-playing-menu">{songs.Tittle}</div>
               
            }

            )}
                
            </div>
        )
    }
}

export default AllSongs;
 