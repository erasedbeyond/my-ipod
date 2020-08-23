import React from 'react';
import '../css/NowPlayingMenu.css';
import {SongsData} from '../SongsData';
import Song from '../assets/songs/song1.mp3';


class NowPlayingMenu extends React.Component{

    constructor(){
        super();
        this.state = {
            currentTime : 0,
        }
       
    }

    

    render(){
          
        var duration=Math.floor(this.props.audio.duration/60)+":"+Math.floor(this.props.audio.duration%60);
        var currentTime = Math.floor(this.state.currentTime / 60) + ":" + Math.floor(this.state.currentTime % 60);
        var i = this.props.index;
        var progress = (this.state.currentTime/this.props.audio.duration)*100;
        var styles={
            progressbar:{
                width:"200px",
                height:'10px',
               
            },
            progress:{
                width:progress+'%',
                height:'10px',
              
            }
        }
        return(
            
            <div className="now-playing-menu" prevMenu="song-menu">
                <div id="song-tittle">{SongsData[i].Tittle}</div>

                <div id="song-detail">
                    <div id="song-img">
                        <img src={SongsData[i].img}/>
                    </div>
                    <div id="song-info">
                        <div id="song-artist">{SongsData[i].artist}</div>
                        <div id="song-album">{SongsData[i].album}</div>

                    </div>

                </div>

                <div id="song-bar">
                    <div>{currentTime}</div>
                    <div id="progress-bar" style={styles.progressbar}>
                        <div id="progress" style={styles.progress}></div>
                    </div>
                    <div>{duration}</div>
                </div>
                
              
            </div>
        )
    }

    componentDidMount(){
      
        setInterval (() => {
            this.setState({currentTime:this.props.audio.currentTime});
        },100);
    }

}

export default NowPlayingMenu;