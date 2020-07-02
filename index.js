import Landing from './app/views/landing/container'
import Details from './app/views/details/container'
import Person from './app/views/person/container'

import title from './app/components/title'
import { Navigation } from 'react-native-navigation'

Landing.options = title('PICK A MOVIE')
Details.options = title('PICK A CHARACTER')
Person.options = title('ABOUT')

Navigation.registerComponent('Landing', () => Landing)
Navigation.registerComponent('Details', () => Details)
Navigation.registerComponent('Person', () => Person)

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root:{
      stack: {
        id: 'swapiproject',
        children:[{
          component:{
            name: 'Landing'
          }
        }]
      }
    }
  })
})