import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {

state = { albums: [] }; // 1. state declaration -->> empty state or default state  

componentWillMount(){  // 2. state getting data
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => this.setState({ albums: response.data }))
}
// this.setState({ albums: response.data })
// not using props here -> props are used whenever we want to communicate parent to child component.
// states is component's internal handler...***only used with class based components.
renderAlbums(){
    // return this.state.albums.map(album => <Text>{album.title}</Text>);
    return this.state.albums.map(album => 
           <AlbumDetail key={album.title} albumData={album} />
        );
}

render() {
    console.log(this.state)

    return(
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    );
 }
}
export default AlbumList; 