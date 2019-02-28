import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//class Component   (life cicle methods)
class AlbumList extends Component {
    state = { 
        albums: [
            { 
                title: 'Taylor Swift', 
                artist: 'Taylor Swift', 
                url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6', 
                image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', 
                thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' 
            },
            {
                title: 'Fearless',
                artist: 'Taylor Swift',
                url: 'https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM',
                image: 'https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg',
                thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
            },
            {
                title: 'Speak Now',
                artist: 'Taylor Swift',
                url: 'https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886',
                image: 'https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg',
                thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
            },
            {
                title: 'Red',
                artist: 'Taylor Swift',
                url: 'htts://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU',
                image: 'https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg',
                thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
            },
            {
                title: '1989',
                artist: 'Taylor Swift',
                url: 'https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI',
                image: 'https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg',
                thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
            }
        ]
    };

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
