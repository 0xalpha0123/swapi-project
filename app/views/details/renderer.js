import React from "react";
import{
  SafeAreaView,
  FlatList,
  Button,
  View,
  Text
} from "react-native";
import { Navigation } from 'react-native-navigation'

import goToScreen from '../../components/goToScreen'

import styles from '../../components/styles'

class DetailsRenderer extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const {characters} = this.props
    return(
      <View style = {styles.view2}>
        <SafeAreaView style = {styles.safeareaview}>
          <FlatList
            data = {characters}
            renderItem = {({item}) => {
              return(
                <View style = {styles.view}>
                  <Button title = {item[0]} color='#89a203' onPress= {
                    () => goToScreen('Person', item[1])
                    }
                  />
                 </View>
                )
              }
            }
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default DetailsRenderer