import React from 'react';
import {Text,View,ImageBackground, TextInput,StyleSheet} from 'react-native';
//import {ListItem, SearchBar} from 'react-native-element';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

export default class DetailResult extends React.Component {


    render() { 
        const {navigate} = this.props.navigation
        let {flatText, textBox, textInput, scrollContainer,button,buttonText} = styles;
        return(
            <ImageBackground source={require('../images/bg2.png')} 
                style={{width: '100%', height: '100%'}}>
                <View>
                    <Text style={{fontSize:40,
                     color:"#2F2F2F",
                     alignSelf:"center",
                     marginTop:90}}>Details</Text>
                </View>
                <View style={textBox}>
                    <TextInput style={textInput}
                    placeholder='Search Details..'
                    //underlineColorAndroid='transparent'
                    >    
                    </TextInput>
                </View>

                <View> 
                    <ScrollView style={scrollContainer}>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>
                        <Text style={flatText}>test</Text>

                    </ScrollView>
                </View>
                <View style={button}>
                <Text onPress={()=>navigate('Home')}
                    style={buttonText}>Upload Another File</Text>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    textBox: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:20,
        borderWidth:1,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#969696",
        backgroundColor:"#FFF",
        borderRadius:23,
        paddingVertical:10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#000000',
        backgroundColor: '#FFF',
    },
    listContainer: {
        flexDirection: 'row',
        padding: 5,
    },
    dataContainer:{
        padding: 10,
        paddingTop: 5,
    },
    scrollContainer: {
        marginTop: 20,
        backgroundColor: "#FFF",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        height: 550
    },
    flatText: {
        marginVertical: 5,
        marginLeft: 10,
    },
    button: {
        marginHorizontal:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        backgroundColor:"#2F2F2F",
        paddingVertical:12,
        borderRadius:23
    },
    buttonText: {
        fontSize:18,
        color:"white",
        //fontFamily:"SemiBold"
    }
    
}
)