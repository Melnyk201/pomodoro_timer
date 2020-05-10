import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { styles } from './stylesheet';
import vibrate from './vibrate';

class Timer extends React.Component {
	render() {
		return (
			<Text style={styles.timer}>{this.props.currentTime}</Text>
		)
	}
}

class ChangeImage extends React.Component
{
    render()  {
        return (
            <Image style = {styles.image}
            source={this.props.flowerImg  ? require('./images/treeWithFlower.png') : require('./images/tree.png')}/>
        )
    }
}

class Label extends React.Component {
	render() {
		return (
			<View>
                <View style={styles.labelContainer}>
                    {
                        (!this.props.paused && !this.props.playing) &&
                        <Text style={styles.smallLabel}>press play to start</Text>
                    }
                    {
                        this.props.paused &&
                        <Text style={styles.smallLabel}>paused</Text>
                    }
                </View>
			<Text style={styles.label}>{this.props.working ? "work time" : "break time"}</Text>
			</View>
		)
	}
}

class Buttons extends React.Component {
  render() {
    return (
      <View style={styles.button}>
            <Button title={this.props.title} onPress={this.props.onPress}/>
          </View>
    )
  }
}
function leftPadding(n) {
  if (parseInt(n) < 10) {
    return "0" + n.toString();
  } else {
    return n.toString();
  }
}

export default class App extends React.Component {
    constructor(props) {
    super(props),
    this.state = {
      currentTime: "00:04",
      workTime: "00:04",
      breakTime: "00:03",
      working: true,
      timer: null,
      paused: false,
      playing: false,
      counting: false,
      flowerImg: false,
    }
   this.playButton = this.playButton.bind(this);
   this.pauseButton = this.pauseButton.bind(this);
   this.countdown = this.countdown.bind(this);
   this.resetButton = this.resetButton.bind(this);
   this.toggleStatus = this.toggleStatus.bind(this);

  }

  countdown() {
       if (this.state.currentTime === "00:00" && this.state.playing==true) {
        vibrate();
        this.toggleStatus();
      }
      else {
        var sec = this.state.currentTime.slice(3);
        var min = this.state.currentTime.slice(0, 2);
        if (sec === "00") {
          var newMin = leftPadding(parseInt(min) - 1);
          var newTime = newMin + ":59";
          this.setState({
            currentTime: newTime,
          });
        } else {
          var newSec = leftPadding((parseInt(sec) - 1));
          var newTime = min + ":" + newSec;
          this.setState({
            currentTime: newTime,
          })
        }
      }
    }

  playButton() {
      if (this.state.paused === true || this.state.playing === false) {
        this.setState({
          timer: setInterval(this.countdown, 1000),
          paused: false,
          playing: true,

         });
      }
  }

   pauseButton () {
           if (this.state.paused === false && this.state.playing === true) {
                clearInterval(this.state.timer);
                this.setState({
                paused: true,
                timer: null,
                playing: false,

           });
           console.log(this.state.paused);
           }
           else if (this.state.paused === true && this.state.playing === false) {
                 this.playButton();
           }
   }

   resetButton () {
       this.pauseButton();
       if(!this.state.working)
       {
           this.setState({
               currentTime: this.state.breakTime,
               playing: true,
               paused: false,
               working: false,
               //timer: null,

           })
       }
       else {
            this.setState({
               currentTime: this.state.workTime,
               playing: true,
               paused: false,
               working: true,
               //timer: null,

             })
       }
   }

   toggleStatus() {
       if (this.state.working) {
         this.setState({
           working: false,
           currentTime: this.state.breakTime,
           flowerImg: true,
          })
       } else {
         this.setState({
           working: true,
           currentTime: this.state.workTime,
           flowerImg:false,

         })
       }
     }


  render() {
    return (
      <View style={styles.container}>
      <Timer currentTime={this.state.currentTime}/>
      <ChangeImage flowerImg = {this.state.flowerImg}/>
      <Label paused={this.state.paused} playing={this.state.playing} working={this.state.working}/>
      <View style={styles.buttonsBlock}>
      <Buttons title= "Play" onPress = {this.playButton}/>
      <Buttons title="Pause" onPress={this.pauseButton}/>
      <Buttons title="Reset" onPress={this.resetButton}/>
      </View>
      </View>

    );
  }
}
