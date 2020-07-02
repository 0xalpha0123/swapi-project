import React from 'react';

import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';

import { Navigation } from 'react-native-navigation'

import goToScreen from '../../components/goToScreen'

import styles from '../../components/styles'

class LandingRenderer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {filmList} = this.props
    return(
      <View style = {styles.view2}>
        <SafeAreaView style = {styles.safeareaview}>
          <FlatList
            data = {filmList}
            renderItem = {({item}) => {
              return(
                <View style = {styles.view}>
                  <Button title = {item.title} color='#89a203' onPress= {
                    () => goToScreen('Details', item)
                  }/>
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

export default LandingRenderer