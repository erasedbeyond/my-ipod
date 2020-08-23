import React from 'react';
import '../css/NotificationBar.css';
import {SongsData} from '../SongsData';
import play from '../assets/image/playIcon.png';
import pause from '../assets/image/pauseIcon.png';
import battery from '../assets/image/battery.png';


class NotificationBar extends React.Component{


    constructor(){
        super();
        this.state = {
          
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()

        }
        // this.song=SongsData[this.props.index]
    }

    componentDidMount(){

        //updating time every 60secs
        setInterval(()=>{this.setState({
                hours:new Date().getHours(),
                minutes:new Date().getMinutes(),
            })
        },60000);
    }
    render(){

        //time setup
        
        var hr = this.state.hours;
        var min=this.state.minutes;
        var ampm = hr>=12? 'pm':'am';
        hr= hr%12;
        hr= hr? hr:12;
        min = min<10? '0'+min:min;
        
        var song=SongsData[this.props.index];
        var songPlaying;
        var iconImg;
        if(this.props.isPlaying){
            iconImg = <img src={play}/>
            songPlaying = <div id="noti-container-song"><div id="song-playing">{song.Tittle}- {song.artist}</div></div>;
        }else{
            iconImg = <img src={pause}/>
        songPlaying = <div id='time'>{hr}:{min} {ampm}</div>;
        }

        return(
            <div className="notification-bar">
                {iconImg}
                {songPlaying}
                <img id="battery-icon" src={battery}/>
                
                
            </div>
        )
    }
}

export default NotificationBar;
 