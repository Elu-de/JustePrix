import React, { Component } from 'react';
import { View, AppRegistry, Image } from 'react-native';
import Search from './components/justeprix'

export default class Bananas extends Component {
  render() {
    let pic = './img/1.jpg';
    return (
      <View>
        <Image source={require(pic)} style={{width: 350, height: 400}}/>
          <Search />
      </View>
    );
  }
}

