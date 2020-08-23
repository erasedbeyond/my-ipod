import React from 'react';
import Buttons from './buttons';
import Display from './Display';


import '../css/IPod.css';
import {SongsData} from '../SongsData';
import Song from '../assets/songs/song1.mp3';



class IPod extends React.Component {
    constructor(){
        super();
        
        
        this.state={
            activeMenuClass:'main-menu-list-item',
            activeMenu:'main-menu',
            currentAudio: new Audio(Song),
            audioIndex:0,
            isPlaying:false,
            i:0
        }
        this.angle=0;
        this.prev=0;
        this.i=0;
        this.audio=new Audio(SongsData[0].url);


    }


    //function to slect the menu items
    selectMenu=(e)=>{
        const menuItem=document.getElementsByClassName(this.state.activeMenuClass);
        const next=e.detail.angle;
        this.prev=this.i;
        // changing the value of this.i and this.prev to select new menu item and deselec prev menu item
        if(this.angle+15 < next){
            if(this.i>0) this.i--;
            else this.i=menuItem.length-1;
            this.angle=next
        }else if(this.angle > next+15) {
            if(this.i<menuItem.length-1) this.i++;
            else this.i=0;
            this.angle=next
        }
        //setting the state of i for further functionality
        this.setState({i:this.i});
        //focusing the current select menu item
        menuItem[this.prev].style.backgroundColor='rgb(255, 255, 255,0.8)';
        menuItem[this.i].style.backgroundColor='rgb(71, 169, 194,.8)';
    }

    //updating the current menu when the main button is pressed
    updateMenu= () => {
        const menuItem=document.getElementsByClassName(this.state.activeMenuClass);
        menuItem[this.i].style.backgroundColor='white';
        //attribute value give the value of menu to shown when clicked
        const selected=document.getElementsByClassName(this.state.activeMenuClass)[this.state.i].getAttribute('value');
        console.log('mnew ', document.getElementsByClassName(selected)[0])
     
        const newMenu=selected+'-list-item';
        this.setState({activeMenuClass:newMenu,activeMenu:selected,menuIndex:this.state.menuIndex+1});
        this.angle=0;
        this.prev=0;
        this.i=0;
        
    }

    updateBackMenu = () =>{
        const prevMenu=document.getElementsByClassName(this.state.activeMenu)[0].getAttribute('prevMenu');

        this.setState({activeMenu:prevMenu,activeMenuClass:prevMenu+'-list-item'});
        this.i=0;//reseting the looping index to zero

    }

    playPause = () =>{
        console.log('play pasue');
        // console.log(this.state.currentAudio.duration,'duration')

        if(!this.state.isPlaying){
            this.state.currentAudio.play();
        console.log('play');

            this.setState({isPlaying:true});
        }
        else if(this.state.isPlaying){
            this.state.currentAudio.pause();
            console.log('pasue');

            this.setState({isPlaying:false});
        }
      
    }

    nextMedia = () => {

        var play=false; //if the song wasn't playing
        // play variable is used with the combination of second playPause() call
        // so that it doesnt play the song if it was not playing previously

        //if the song is playing
        if(this.state.isPlaying){ 
            this.playPause(); //stop playing the song
            play=true;
        }

        //setting next song index
        if(this.state.audioIndex<SongsData.length-1)
            this.setState( {audioIndex : this.state.audioIndex+1});
        else this.setState( {audioIndex : 0});

        this.audio = new Audio(SongsData[this.state.audioIndex].src);
        this.setState({currentAudio:this.audio}) //change the current song

        if(!this.state.isPlaying&&play)
            this.playPause(); //play the song

    }


    // same funtionality as nextmedia() function except index is decreasing
    prevMedia = () => {

        var play=false;
        if(this.state.isPlaying){
            this.playPause();
            play=true;
        }

        if(this.state.audioIndex>0)
            this.setState( {audioIndex : this.state.audioIndex-1});
        else this.setState( {audioIndex : SongsData.length-1});
      

        this.audio = new Audio(SongsData[this.state.audioIndex].src);
        this.setState({currentAudio:this.audio})

        if(!this.state.isPlaying&&play)
            this.playPause();

    }
   
    

    
    render(){
        return (
            <div className="i-pod">
                <Display
                    index={this.state.audioIndex} 
                    audio={this.state.currentAudio}
                    currentMenu={this.state.activeMenu}
                    isPlaying={this.state.isPlaying}
                />

                <Buttons  
                    select={this.selectMenu}
                    update={this.updateMenu}
                    back={this.updateBackMenu}
                    playPause={this.playPause} 
                    nextMedia={this.nextMedia}
                    prevMedia={this.prevMedia}
                />

            </div>
        );
        
    }
    componentDidMount(){

        setInterval (() => {
            if(this.state.currentAudio.duration==this.state.currentAudio.currentTime){
                this.setState({isPlaying:false})
            }
        },100)
            
    }
}
export default IPod;
