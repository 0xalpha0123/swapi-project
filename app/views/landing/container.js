import React from 'react';

import { Navigation } from 'react-native-navigation'

import LandingRenderer from './renderer'

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filmList: []
    }
  }

  componentDidMount(){
    return fetch('http://swapi.dev/api/films/', {method: 'GET'})
            .then( (response) => { return response.json() })
            .then( (responseJson) => {
              this.setState({
                filmList: responseJson.results,
              })
            })
            .catch();
  }

  render(){
    return(
      <LandingRenderer filmList = {this.state.filmList}/>
    )
  }
}

export default Landing