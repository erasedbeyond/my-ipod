import React from 'react';
import '../css/button.css';
import ZingTouch from 'zingtouch';


class Buttons extends React.Component{
    render(){
        return (
            <div id="button" className="buttons">
                <div id="button-container">
                    
                    <div id="main">
                        <div id="menu"></div>
                        <div id="backward"></div>
                        <div id="forward"></div>
                        <div id="play-pause"></div>
                    </div>
                </div>
            </div>
        );


    
    }


    componentDidMount() {
        const containerElement = document.getElementById('button');
        const activeRegion = ZingTouch.Region(containerElement);
        const target = document.getElementById('button-container');
        activeRegion.bind(target, 'rotate', function(e){
            console.log('Tap gesture emitted: ' + e.detail.interval);
        });
        
    }


  
}

export default Buttons;
