import React from 'react';
import '../css/MainMenu.css';

class MainMenu extends React.Component{
    render(){
        return (
            <div className="main-menu">
                <div className="main-menu-list-item" value="now-playing-menu">Playing</div>
                <div className="main-menu-list-item" value="song-menu">Songs</div>
                <div className="main-menu-list-item" value="video-menu">Videos</div>
                <div className="main-menu-list-item" value="game-menu">Games</div>
                <div className="main-menu-list-item" value="setting-menu">Settings</div>
            </div>
        );


            
    }
    
  



  
}

export default MainMenu;
