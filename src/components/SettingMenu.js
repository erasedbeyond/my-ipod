import React from 'react';
import '../css/SettingMenu.css';

class SettingMenu extends React.Component{
    render(){
        return(
            <div className="setting-menu" prevMenu="main-menu">

                <div className="setting-menu-list-item" value="theme-menu">Theme</div>
                <div className="setting-menu-list-item" value="wallpaper-menu">Wallpaper</div>
                <div className="setting-menu-list-item" value="storage-menu">Storage</div>
                <div className="setting-menu-list-item" value="brightness-menu">Brightness</div>
                <div className="setting-menu-list-item" value="text-size-menu">Text Size</div>

                
            </div>
        )
    }
}

export default SettingMenu;
 