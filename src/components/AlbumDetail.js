import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.imageView}>
                    <Image src={props.album.image} />
                </View>               
                <View style={styles.headerContentStyles}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text> 
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
    }
}

export default AlbumDetail;
