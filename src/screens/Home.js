import React, {useState} from 'react';
import {Text,View,ImageBackground,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import DocumentPicker from 'react-native-document-picker';
import { ScrollView } from 'react-native-gesture-handler';
import DetailResult from './DetailResult';
import TabNavigator from '../navigations/Navigator';
import { add } from 'react-native-reanimated';



const Home = ({navigation}) => {

    //const [singleFile, setSingleFile] = useState('');
    const [multipleFile, setMultipleFile] = useState([]);

    // const selectOneFile = async () => {
    //     try {
    //         const res = await DocumentPicker.pick({
    //         type: [DocumentPicker.types.allFiles],
    //         });
    //         //Setting the state to show single file attributes
    //         setSingleFile(res);
    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //         // User cancelled the picker, exit any dialogs or menus and move on
    //         } else {
    //         alert('Unknown Error: ' + JSON.stringify(err));
    //         throw err;
    //         }
    //     }
    // };
    const selectMultipleFile = async () => {
        // Pick multiple files
        try {
            const results = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.allFiles],
            });
            for (const res of results) {
                var newFile = res;
                console.log(newFile);
            }
            //Setting the state to show multiple file attributes
            setMultipleFile(results);
            
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
            } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
            }
        }
    };

    addFiles = () => {
       
    }

    deleteFiles = (key) => {
        
    }

    return (
        <ImageBackground source={require('../images/bg2.png')} 
            style={{width: '100%', height: '100%'}}>
                <View>
                    <TouchableOpacity onPress={selectMultipleFile} style={{alignItems: 'center'}}>
                        <Image source ={require('../images/cloud.png')}
                                style={styles.image}        
                        />

                        <View style={styles.viewTextStyle}>
                            <Text style={styles.textStyle}>{'Upload Files'} </Text>
                            <Text style={{fontSize:60, color:'white'}}> + </Text>                        
                            <Text style={styles.textStyle1}>{'browse and select your file \n you want to upload'}</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <View style={styles.listHeader}>
                <Text style={{textAlign: 'center', fontSize: 18}}> File List </Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {multipleFile.map((item, key) => (
                    <View key={key}>
                        <Text style={styles.flatText}>
                            {item.name ? item.name : ''} 
                        

                            <Text style={styles.deleteText} onPress={()=>{this.deleteFiles(key)}}> delete </Text>
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.button}>
                <Text onPress={() => { navigation.navigate('DetailResult')}}
                style={styles.buttonText}>Start Detail Search</Text>
            </View>
        </ImageBackground>
    );
};
export default Home ;




const styles = StyleSheet.create({
    container: {
        marginTop: 90,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 380,
        height: 240,
        marginTop: 90
    },
    viewTextStyle: {
        flex:1,
        position: 'absolute',
        textAlign: 'center', 
        alignSelf:"center",
        alignItems: 'center',
        marginTop: 90
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    textStyle: {
        fontSize: 30,
        color:"white",
        marginTop:60,
        //fontFamily:"SemiBold",
        textAlign: 'center', 
        alignSelf:"center",
        alignItems: 'center'
        
    },
    textStyle1: {
        fontSize: 12,
        color:"#FFFFFF",
        marginTop:10,
        alignSelf:"center",
        textAlign:"center",

    },
    uploadStyle: {
        color:"#FFFFFF",
        alignSelf:"center",
    },

    listHeader: {
        backgroundColor:"#C3C2C2",
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#5C5C5C",
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
        backgroundColor: "#FFF",
    },
    flatText: {
        marginVertical: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems:'center',
    },
    deleteText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: 'red',
    },
    button: {
        marginHorizontal:55,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:60,
        backgroundColor:"#2F2F2F",
        paddingVertical:12,
        borderRadius:23
    },
    buttonText: {
        fontSize:18,
        color:"white",
        //fontFamily:"SemiBold"
    }
});