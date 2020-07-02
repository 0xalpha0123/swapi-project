import React from "react";

import{
  SafeAreaView,
  FlatList,
  View,
  Text
} from "react-native";

import { Navigation } from 'react-native-navigation'

import PersonRenderer from './renderer'

class Person extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      characterJson: props.data,
    }
  }


  render(){
    return(
      <PersonRenderer characterJson = {this.state.characterJson} />
    )
  }
}

export default Person