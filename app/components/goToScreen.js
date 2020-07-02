import { Navigation } from 'react-native-navigation'

export default goToScreen = (screenName, data) =>{
  Navigation.push('swapiproject', {
    component: {
      name: screenName,
      passProps: {
        data: data
      }
    }
  });
}