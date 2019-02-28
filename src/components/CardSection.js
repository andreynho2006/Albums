import React from 'react';
import { View } from 'react-native';

const CardItem = () => {
    return (
        <View style={styles.containerStyle}></View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottom: '#ddd',
        position: 'relative',
    }
}

export default CardItem;
