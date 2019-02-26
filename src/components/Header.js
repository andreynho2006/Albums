//import libraries for making a component 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//making a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
        </View>   
    );
};

//make the component available to other parts of the app
export default Header;


//styles
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,  
        color: '#000'    
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    }
});
