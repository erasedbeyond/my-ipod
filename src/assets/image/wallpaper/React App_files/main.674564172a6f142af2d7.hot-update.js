webpackHotUpdate("main",{

/***/ "./src/components/IPod.js":
/*!********************************!*\
  !*** ./src/components/IPod.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/components/buttons.js");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display */ "./src/components/Display.js");
/* harmony import */ var _css_IPod_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/IPod.css */ "./src/css/IPod.css");
/* harmony import */ var _css_IPod_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_IPod_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_sounds_unlock_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sounds/unlock.mp3 */ "./src/assets/sounds/unlock.mp3");
/* harmony import */ var _assets_sounds_unlock_mp3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sounds_unlock_mp3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_sounds_click_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sounds/click.mp3 */ "./src/assets/sounds/click.mp3");
/* harmony import */ var _assets_sounds_click_mp3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_sounds_click_mp3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_datafiles_SongsData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/datafiles/SongsData */ "./src/assets/datafiles/SongsData.js");
/* harmony import */ var _assets_datafiles_MainMenuData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/datafiles/MainMenuData */ "./src/assets/datafiles/MainMenuData.js");
/* harmony import */ var _assets_datafiles_SongsMenuData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/datafiles/SongsMenuData */ "./src/assets/datafiles/SongsMenuData.js");
/* harmony import */ var _assets_datafiles_SettingMenuData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/datafiles/SettingMenuData */ "./src/assets/datafiles/SettingMenuData.js");
/* harmony import */ var _assets_datafiles_SongSettingMenuData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/datafiles/SongSettingMenuData */ "./src/assets/datafiles/SongSettingMenuData.js");
/* harmony import */ var _assets_datafiles_WallpaperData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/datafiles/WallpaperData */ "./src/assets/datafiles/WallpaperData.js");
/* harmony import */ var _assets_image_icon_colorIcon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/image/icon/colorIcon.svg */ "./src/assets/image/icon/colorIcon.svg");
/* harmony import */ var _assets_image_icon_colorIcon_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_icon_colorIcon_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_songs_song1_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/songs/song1.mp3 */ "./src/assets/songs/song1.mp3");
/* harmony import */ var _assets_songs_song1_mp3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_songs_song1_mp3__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/home/erasedbeyond/Documents/React/my-ipod/src/components/IPod.js";















class IPod extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    this.selectMenu = e => {
      const menuItem = document.getElementsByClassName(this.state.activeMenuClass);
      const currentMenu = document.getElementsByClassName(this.state.activeMenu);
      if (menuItem.length === 0) return; //if there are no menu item to be just return
      //if menu list item are more than 5, shifting list item up (styling)    

      if (this.i > 4) {
        var value = (this.i - 4) * 25;
        currentMenu[0].style.transform = 'translateY(-' + value + 'px)';
      } else {
        currentMenu[0].style.transform = 'translateY(0)';
      }

      this.j = this.i; //if currently at theme menu, then rotating on wheel show the change in color

      if (this.state.activeMenu === 'theme-menu') {
        if (e.detail.distanceFromLast > 0) {
          this.color++;
          document.getElementsByClassName('theme-menu')[0].style.filter = " hue-rotate(" + this.color + "deg)";
          this.hue++;
          document.getElementsByClassName('notification-bar')[0].style.backgroundColor = "hsla(" + this.hue + ",50.2%,52.0%,0.8)";
          document.getElementsByClassName('theme-menu-icon')[0].style.transform = "rotate(" + this.color + "deg)";
        } else if (e.detail.distanceFromLast < 0) {
          this.color--;
          document.getElementsByClassName('theme-menu')[0].style.filter = " hue-rotate(" + this.color + "deg)";
          this.hue--;
          document.getElementsByClassName('notification-bar')[0].style.backgroundColor = "hsla(" + this.hue + ",50.2%,52.0%,0.8)";
          document.getElementsByClassName('theme-menu-icon')[0].style.transform = "rotate(" + this.color + "deg)";
        }

        this.setState({
          filter: " hue-rotate(" + this.color + "deg)",
          notificationBarColor: "hsla(" + this.hue + ",50.2%,52.0%,0.8)",
          progressBarColor: "hsla(" + this.hue + ",50.2%,52.0%,0.4)"
        });
        return;
      } // changing the value of this.i and this.j to select new menu item and deselect prev menu item in a list 


      if (e.detail.distanceFromLast > 0) {
        this.skip++;

        if (this.skip > 15) {
          if (this.i < menuItem.length - 1) this.i++;else this.i = 0;
          this.skip = 1;
        }
      } else if (e.detail.distanceFromLast < 0) {
        this.skip++;

        if (this.skip > 15) {
          if (this.i > 0) this.i--;else this.i = menuItem.length - 1;
          this.skip = 1;
        }
      } //focusing the current select menu item


      menuItem[this.j].style.backgroundColor = '';
      menuItem[this.i].style.backgroundColor = 'rgb(71, 169, 194,.8)'; //when active menu is wallpaper then on rotating it shows currently selected Background

      if (this.state.activeMenu === "wallpaper-menu") {
        document.getElementsByClassName('display')[0].style.backgroundImage = "url(" + _assets_datafiles_WallpaperData__WEBPACK_IMPORTED_MODULE_11__["wallpaper"][this.i] + ")";
      } //setting right side display data (information on ever list item)


      if (this.state.activeMenu !== 'wallpaper-menu') //giving a check on which menu this should on update
        this.setState({
          rightDisplayData: this.state.rightDisplayMenu[this.i]
        });
    };

    this.rightDisplay = () => {
      //using switch function
      var menu = this.state.activeMenu;

      switch (menu) {
        case "lock-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "now-playing-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "main-menu":
          this.setState({
            rightDisplayMenu: _assets_datafiles_MainMenuData__WEBPACK_IMPORTED_MODULE_7__["MainMenuData"],
            rightDisplayData: _assets_datafiles_MainMenuData__WEBPACK_IMPORTED_MODULE_7__["MainMenuData"][0],
            showRightDisplay: true
          });
          break;

        case "song-menu":
          this.setState({
            rightDisplayMenu: _assets_datafiles_SongsMenuData__WEBPACK_IMPORTED_MODULE_8__["SongsMenuData"],
            rightDisplayData: _assets_datafiles_SongsMenuData__WEBPACK_IMPORTED_MODULE_8__["SongsMenuData"][0],
            showRightDisplay: true
          });
          break;

        case "video-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "game-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "setting-menu":
          this.setState({
            rightDisplayMenu: _assets_datafiles_SettingMenuData__WEBPACK_IMPORTED_MODULE_9__["SettingMenuData"],
            rightDisplayData: _assets_datafiles_SettingMenuData__WEBPACK_IMPORTED_MODULE_9__["SettingMenuData"][0],
            showRightDisplay: true
          });
          break;

        case "all-songs-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "artists-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "artist-songs-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "albums-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "album-songs-menu":
          this.setState({
            showRightDisplay: false
          });
          break;

        case "song-setting-menu":
          this.setState({
            rightDisplayMenu: _assets_datafiles_SongSettingMenuData__WEBPACK_IMPORTED_MODULE_10__["SongSettingMenuData"],
            rightDisplayData: _assets_datafiles_SongSettingMenuData__WEBPACK_IMPORTED_MODULE_10__["SongSettingMenuData"][0],
            showRightDisplay: true
          });
          break;

        case "wallpaper-menu":
          this.setState({
            rightDisplayData: {
              img: '',
              info: 'Click on Main Button to Update Wallpaper'
            },
            showRightDisplay: true
          });
          break;

        case "theme-menu":
          this.setState({
            rightDisplayMenu: [{
              src: _assets_image_icon_colorIcon_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
              info: 'Rotate the wheel'
            }],
            rightDisplayData: {
              src: _assets_image_icon_colorIcon_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
              info: 'Rotate the wheel'
            },
            showRightDisplay: true
          });
          break;
        // case "":
        // break;

        default:
          break;
      }
    };

    this.updateMenu = () => {
      const menuItem = document.getElementsByClassName(this.state.activeMenuClass);

      if (menuItem.length === 0) {
        if (this.state.activeMenu === 'lock-menu') {
          //if menu is lock-menu, updating to main menu
          this.setState({
            activeMenu: 'main-menu',
            activeMenuClass: 'main-menu-list-item',
            showRightDisplay: true,
            rightDisplayMenu: _assets_datafiles_MainMenuData__WEBPACK_IMPORTED_MODULE_7__["MainMenuData"]
          });
          document.getElementsByClassName(this.state.activeMenuClass)[0].style.backgroundColor = 'rgb(71, 169, 194,.8)';
          this.unlock.play();
          ;
        }

        if (this.state.activeMenu === 'now-playing-menu') {
          //if current menu is now playing then click on main button will play or pause the song
          if (!this.state.isPlaying) {
            this.state.currentAudio.play();
            this.setState({
              isPlaying: true
            });
          } else {
            this.state.currentAudio.pause();
            this.setState({
              isPlaying: false
            });
          }

          this.setState({
            showRightDisplay: false
          }); //now playing menu doesnt have right display
        }

        return; //return if there are no menu list items
      }

      if (this.state.activeMenu === "theme-menu") {
        return;
      } //data values sent by the selected  option


      const data = document.getElementsByClassName(this.state.activeMenuClass)[this.i].getAttribute('data'); //In song list if song is clicked then audio is changed

      if (data === "play") {
        this.setState({
          audioIndex: this.i
        });
        this.audio = new Audio(_assets_datafiles_SongsData__WEBPACK_IMPORTED_MODULE_6__["SongsData"][this.i].src);
        this.setState({
          currentAudio: this.audio
        });
        this.state.currentAudio.play();
        this.setState({
          isPlaying: true
        });
      } //choosing which menu is selected from albums or artist


      if (data === "artist" || data === "album") {
        this.setState({
          artistOrAlbum: data
        });
      } //when menu is updating from artist/album songs menu to now palying menu


      if (this.state.activeMenu === 'artist-songs-menu' || this.state.activeMenu === 'album-songs-menu') {
        var value = parseInt(data);
        this.state.currentAudio.pause(); //if song is already playing, so we pause and then change current audio

        this.setState({
          currentAudio: new Audio(_assets_datafiles_SongsData__WEBPACK_IMPORTED_MODULE_6__["SongsData"][value].src),
          audioIndex: value,
          isPlaying: true
        });
        this.state.currentAudio.play(); //play the newly selected song
      } //attribute "value" give the value of menu to shown when clicked


      const selected = document.getElementsByClassName(this.state.activeMenuClass)[this.i].getAttribute('value'); //changing wallpaper

      if (selected === "change-wallpaper") {
        var i = parseInt(data);
        this.setState({
          wallpaperIndex: i
        });
        return;
      } //updating state of to new active menu


      const newMenu = selected + '-list-item';
      this.setState({
        activeMenuClass: newMenu,
        activeMenu: selected,
        menuIndex: this.state.menuIndex + 1
      }); //after here on, the change are maid on new active menu
      //updating background hue filter of left menu to show the currently modified theme

      if (this.state.activeMenu === "theme-menu") {
        document.getElementsByClassName('theme-menu')[0].style.filter = this.state.filter;
      } //showing first item as selected


      if (document.getElementsByClassName(this.state.activeMenuClass).length !== 0) document.getElementsByClassName(this.state.activeMenuClass)[0].style.backgroundColor = 'rgb(71, 169, 194,.8)'; //when acive menu is artist or album song, then updating song to be show in list

      if (this.state.activeMenu === 'artist-songs-menu' || this.state.activeMenu === 'album-songs-menu') {
        console.log('data ', data);
        var arr = data.split(',');
        console.log('arr ', arr);
        this.setState({
          currentArtistOrAlbum: arr
        });
      } //updating right side display


      this.rightDisplay(); //reinisialitzing the values again after updataing

      this.angle = -1;
      this.j = 0;
      this.i = 0;
      this.click.play(); // sound of click
    };

    this.updateBackMenu = () => {
      const prevMenu = document.getElementsByClassName(this.state.activeMenu)[0].getAttribute('prevMenu');

      if (prevMenu.localeCompare('none') === 0) {
        // this.state.currentAudio.pause();
        // this.setState({isPlaying:false});
        return;
      } //if previous menu was wallpaper menu,then setting state..reseting current wallpaper that was set if it hasnt been updated


      if (this.state.activeMenu === "wallpaper-menu") {
        const i = this.state.wallpaperIndex;
        this.setState({
          wallpaperIndex: -1
        });
        this.setState({
          wallpaperIndex: i
        });
      } //if previous mene is theme menu, then rotate the right icon to normal


      if (this.state.activeMenu === "theme-menu") {
        if (this.color > 0) document.getElementById('right-image').style.transform = "rotate(-" + this.color + "deg)";else if (this.color < 0) document.getElementById('right-image').style.transform = "rotate(" + -this.color + "deg)";
      }

      this.setState({
        activeMenu: prevMenu,
        activeMenuClass: prevMenu + '-list-item'
      }); //showing first item as selected

      if (document.getElementsByClassName(this.state.activeMenuClass).length !== 0) document.getElementsByClassName(this.state.activeMenuClass)[0].style.backgroundColor = 'rgb(71, 169, 194,.8)'; //updating right side display

      this.rightDisplay(); //reinisialitzing the values again after updataing

      this.angle = 0;
      this.j = 0;
      this.i = 0;
      this.click.play(); //sound of click 
    };

    this.playPause = () => {
      //if song is playing
      if (!this.state.isPlaying) {
        this.state.currentAudio.play();
        this.setState({
          isPlaying: true
        });
      } //if song is not playing
      else if (this.state.isPlaying) {
          this.state.currentAudio.pause();
          this.setState({
            isPlaying: false
          });
        }
    };

    this.nextMedia = () => {
      var play = false; //if the song wasn't playing
      // play variable is used with the combination of second playPause() call
      // so that it doesnt play the song if it was not playing previously
      //if the song is playing

      if (this.state.isPlaying) {
        this.playPause(); //stop playing the song

        play = true;
      } //setting next song index


      if (this.state.audioIndex < _assets_datafiles_SongsData__WEBPACK_IMPORTED_MODULE_6__["SongsData"].length - 1) this.setState({
        audioIndex: this.state.audioIndex + 1
      });else this.setState({
        audioIndex: 0
      });
      this.audio = new Audio(_assets_datafiles_SongsData__WEBPACK_IMPORTED_MODULE_6__["SongsData"][this.state.audioIndex].src);
      this.setState({
        currentAudio: this.audio
      }); //change the current song

      if (!this.state.isPlaying && play) this.playPause(); //play the song
    };

    this.prevMedia = () => {
      var play = false;

      if (this.state.isPlaying) {
        this.playPause();
        play = true;
      }

      if (this.state.audioIndex > 0) this.setState({
        audioIndex: this.state.audioIndex - 1
      });else this.setState({
        audioIndex: _assets_datafiles_SongsData__WEBPACK_IMPORTED_MODULE_6__["SongsData"].length - 1
      });
      this.audio = new Audio(_assets_datafiles_SongsData__WEBPACK_IMPORTED_MODULE_6__["SongsData"][this.state.audioIndex].src);
      this.setState({
        currentAudio: this.audio
      });
      if (!this.state.isPlaying && play) this.playPause();
    };

    this.seekRight = e => {
      this.state.currentAudio.currentTime = this.state.currentAudio.currentTime + e.detail.interval / 50;
    };

    this.seekLeft = e => {
      this.state.currentAudio.currentTime = this.state.currentAudio.currentTime - e.detail.interval / 50;
    };

    this.state = {
      //for display menu
      activeMenuClass: 'lock-menu-list-item',
      activeMenu: 'lock-menu',
      //for audio
      currentAudio: new Audio(_assets_songs_song1_mp3__WEBPACK_IMPORTED_MODULE_13___default.a),
      audioIndex: 0,
      isPlaying: false,
      //for album or artist
      artistOrAlbum: "",
      currentArtistOrAlbum: [],
      //for wallpaper
      wallpaperIndex: 0,
      //for right side display
      showRightDisplay: false,
      rightDisplayMenu: _assets_datafiles_MainMenuData__WEBPACK_IMPORTED_MODULE_7__["MainMenuData"],
      rightDisplayData: _assets_datafiles_MainMenuData__WEBPACK_IMPORTED_MODULE_7__["MainMenuData"][0],
      //for theme
      progressBarColor: 'hsla(192,50.2%,52.0%,0.4)',
      notificationBarColor: 'hsla(192,50.2%,52.0%,0.8)',
      filter: 'hue-rotate(0deg)'
    };
    this.skip = 1;
    this.angle = -1;
    this.j = 0; //prev index to be selected of menu list item

    this.i = 0; //next index to be selected of menu list item

    this.audio = new Audio(_assets_datafiles_SongsData__WEBPACK_IMPORTED_MODULE_6__["SongsData"][0].src);
    this.unlock = new Audio(_assets_sounds_unlock_mp3__WEBPACK_IMPORTED_MODULE_4___default.a);
    this.click = new Audio(_assets_sounds_click_mp3__WEBPACK_IMPORTED_MODULE_5___default.a);
    this.color = 1;
    this.hue = 192;
  } //function to slect the menu items


  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "i-pod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Display__WEBPACK_IMPORTED_MODULE_2__["default"], {
      index: this.state.audioIndex,
      audio: this.state.currentAudio,
      currentMenu: this.state.activeMenu,
      isPlaying: this.state.isPlaying,
      currentArtistOrAlbum: this.state.currentArtistOrAlbum,
      artistOrAlbum: this.state.artistOrAlbum,
      wallpaperIndex: this.state.wallpaperIndex,
      showRightDisplay: this.state.showRightDisplay,
      rightDisplayData: this.state.rightDisplayData,
      notificationBarColor: this.state.notificationBarColor,
      progressBarColor: this.state.progressBarColor,
      filter: this.state.filter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      select: this.selectMenu,
      update: this.updateMenu,
      back: this.updateBackMenu,
      playPause: this.playPause,
      nextMedia: this.nextMedia,
      prevMedia: this.prevMedia,
      seekLeft: this.seekLeft,
      seekRight: this.seekRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 17
      }
    }));
  }

  componentDidMount() {
    //changing state isPlaying tto false...when audio is ended
    setInterval(() => {
      if (this.state.currentAudio.duration == this.state.currentAudio.currentTime) {
        this.setState({
          isPlaying: false
        });
      }
    }, 100);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IPod);

/***/ })

})
//# sourceMappingURL=main.674564172a6f142af2d7.hot-update.js.map