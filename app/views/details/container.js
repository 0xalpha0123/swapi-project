import React from "react";

import { Navigation } from 'react-native-navigation'

import DetailsRenderer from './renderer'

class Details extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      filmJson: props.data,
      characters: [],
    }
  }

  componentDidMount(){
    for(var i = 0; i < this.state.filmJson.characters.length; i++){
      fetch(this.state.filmJson.characters[i], {method: 'GET'})
        .then( (response) => {return response.json() })
        .then( (responseJson) => {
          this.setState({
            filmJson: this.state.filmJson,
            character: this.state.characters.push([responseJson.name, responseJson])
          })
        })
        .catch();
    }
  }

  render(){
    return(
      <DetailsRenderer characters = {this.state.characters}/>
    )
  }
}

export default Details
