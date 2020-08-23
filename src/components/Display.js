import React from 'react';
import '../css/Display.css'
import SongMenu from './SongMenu';
import MainMenu from './MainMenu';
import SettingMenu from './SettingMenu';
import GameMenu from './GameMenu';
import VideoMenu from './VideoMenu';
import AllSongs from './AllSongs'
import NowPlaying from './NowPlayingMenu'
import NotificationBar from './NotificationBar'
import wall from '../assets/image/wallpaper/wallpaper1.jpg'



class Display extends React.Component{
    render(){
        var menu =this.props.currentMenu;
        // console.log(menu);

        const styles = {
            mainmenu:{
                backgroundImage:' url('+wall+')',
               
            }
        }
        return (
            <div className="display" style={styles.mainmenu}>
                <NotificationBar index={this.props.index} isPlaying={this.props.isPlaying}/>

                {!menu.localeCompare('main-menu')  && <MainMenu/>} 
                {!menu.localeCompare('song-menu') && <SongMenu/>}   
                {!menu.localeCompare('game-menu') && <GameMenu/>}   
                {!menu.localeCompare('video-menu') && <VideoMenu/>}   
                {!menu.localeCompare('setting-menu' )&&  <SettingMenu/>}   
                {!menu.localeCompare('all-songs-menu' )&&  <AllSongs/>}   
                {!menu.localeCompare('now-playing-menu' )&&  <NowPlaying index={this.props.index} audio={this.props.audio}/>}   
                {/* <MainMenu/>
                <SongMenu/>
                <GameMenu/>
                <VideoMenu/>
                <SettingMenu/>
                <AllSongs/>
                <NowPlaying index={this.props.index} audio={this.props.audio}/> */}
            </div>
        );


    }





  
}

export default Display;