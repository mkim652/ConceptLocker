import React from 'react';
import {Text,View,ImageBackground, StyleSheet} from 'react-native';

export default class Tutorial extends React.Component{

    render(){ 
        const {navigate} = this.props.navigation
        let {buttonText,title,text1,text2} = styles;

        return(
            <ImageBackground source={require('../images/bg4.png')} 
                style={{width: '100%', height: '100%'}}>
            <Text
                 style={title}>Tutorial</Text>
            <Text style={text1}>1. Upload the file you want to find details. </Text>
            <Text style={text2}>2. Click 'Start Detail Search' button.</Text>
            <Text style={text2}>3. </Text>

            <Text onPress={()=>navigate('Home')}
                style={buttonText}>Let's Start!</Text>

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({ 
    title: {
        fontSize:42,
        color:"#2F2F2F",
        //fontFamily:"SemiBold",
        alignSelf:"center",
        marginTop:100,
    },
    buttonText: {
        alignSelf:"center",
        color:"#696969",
        fontSize:28,
        paddingVertical:20,
        marginTop:225
    },
    text1: {
        color: "#2C2C2C",
        alignSelf:"center",
        fontSize: 17,
        marginTop: 70,
    },
    text2: {
        color: "#2C2C2C",
        alignSelf:"center",
        fontSize: 17,
        marginTop: 30,
    }

});