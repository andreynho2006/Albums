import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//class Component   (life cicle methods)
class AlbumList extends Component {
    state = { albums: [{ title: 'Taylor Swift' },
                       { title: 'Fearless' },
                       { title: 'Speak now' }, 
                       { title: 'Red' }, 
                       { title: '1989' }] };

    // componentWillMount() {
    //     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //         .then(response => this.setState({ albums: response.data }));
    // }

    //helper function to get the albums
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
    console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }   
}

export default AlbumList;
