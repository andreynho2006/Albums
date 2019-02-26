import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//class Component   (life cicle methods)
class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music-albums')
            .then(response => this.setState({ albums: response.data }));
    }
    render() {
        return (
            <View>
                <Text>Album List!</Text>
            </View>
        );
    }   
}

export default AlbumList;
