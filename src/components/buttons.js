import React from 'react';
import '../css/button.css';
import ZingTouch from 'zingtouch';


class Buttons extends React.Component{

    
    render(){
        // console.log('props',this.props.args);

        return (
            <div id="button" className="buttons">
                <div id="button-container">
                    
                        <div id="main"></div>
                        <div id="menu"></div>
                        <div id="backward"></div>
                        <div id="forward"></div>
                        <div id="play-pause"></div>
                    
                </div>
            </div>
        );


    
    }


    componentDidMount() {
        
        const containerElement = document.getElementById('button');
        const activeRegion = ZingTouch.Region(containerElement);
        const target = document.getElementById('button-container');
        const selectMenu=this.props.select;
        activeRegion.bind(target, 'rotate', function(e){
          selectMenu(e);            
        });


        var tap = new ZingTouch.Tap({
            maxDelay: 1000
        })
        //updating menu on main button click
        const main=document.getElementById('main');
        const updateMenu=this.props.update;
        var mainRegion=new ZingTouch.Region(main, true, false);
        mainRegion.bind(main, tap, function(e){
            console.log('updating menu')
            updateMenu();

            
        })

        //updating menu on click o menu button
        const menu=document.getElementById('menu');
        const updateBackMenu=this.props.back;
        var menuRegion=new ZingTouch.Region(menu, true, false);
        menuRegion.bind(menu, tap, function(e){
            console.log('updating  back menu');

            updateBackMenu();

            
        })

        //play/pause button

        const play=document.getElementById('play-pause');
        const playPause=this.props.playPause;
        var pauseRegion=new ZingTouch.Region(play, true, false);
        pauseRegion.bind(play, tap, function(e){

            playPause();

            
        })

        const next=document.getElementById('forward');
        const nextMedia=this.props.nextMedia;
        var nextRegion=new ZingTouch.Region(next, true, false);
        nextRegion.bind(next, tap, function(e){
            console.log('next buttion clicked')
            nextMedia();

            
        })

        const prev=document.getElementById('backward');
        const prevMedia=this.props.prevMedia;
        var prevRegion=new ZingTouch.Region(prev, true, false);
        prevRegion.bind(prev, tap, function(e){
            console.log('next buttion clicked')
            prevMedia();

            
        })




      


        
    }




  
}

export default Buttons;
