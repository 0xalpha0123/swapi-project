import React from "react";

import{
  SafeAreaView,
  FlatList,
  View,
  Text
} from "react-native";

import { Navigation } from 'react-native-navigation'

import styles from '../../components/styles'

function formatText(field, data){
  return(
    <View style = {styles.view}>
      <Text style = {styles.text}>
        {(field + ": " + data).toUpperCase()}
      </Text>
    </View>
  )
}

class PersonRenderer extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    const {characterJson} = this.props
    return(
      <View style = {styles.view2}>

        <SafeAreaView style = {styles.safeareaview}>

          {formatText("Name", characterJson.name)}
          {formatText("Height", characterJson.height)}
          {formatText("Mass", characterJson.mass)}
          {formatText("Hair color", characterJson.hair_color)}
          {formatText("Skin color", characterJson.skin_color)}
          {formatText("Eye color", characterJson.eye_color)}
          {formatText("Gender", characterJson.gender)}

        </SafeAreaView>

      </View>

    )
  }
}

export default PersonRenderer