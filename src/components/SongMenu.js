import React from 'react';
import '../css/SongMenu.css';

class SongMenu extends React.Component{
    render(){
        return(
            <div className="song-menu" prevMenu="main-menu">
                <div className="song-menu-list-item" value="now-playing-menu">Now Playing</div>
                <div className="song-menu-list-item" value="all-songs-menu">All Songs</div>
                <div className="song-menu-list-item" value="artists-menu">Artists</div>
                <div className="song-menu-list-item" value="albums-menu">Albums</div>
                <div className="song-menu-list-item" value="song-setting-menu">Settings</div>

                
            </div>
        )
    }
}

export default SongMenu;