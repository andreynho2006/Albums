//import a library to help create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a Component
const App = () => (
    <View>
        <Header headerText="Albums" />
        <AlbumList />
    </View>
    
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);
