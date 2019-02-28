import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
    const { thumbnailStyle, headerContentStyles, imageView } = styles;
    return (
        <Card>
            <CardSection>
                <View style={imageView}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} />
                </View>               
                <View style={headerContentStyles}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text> 
                </View>           
            </CardSection>
        </Card>
    );
};

const styles = {
    imageView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    }
}

export default AlbumDetail;
