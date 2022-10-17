import React,{Component} from "react";
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

export default class HexCodeInScreen extends Component {
    constructor(){
        super();
        this.state={
            hexColorValue:'',
            color:'grey'
        };
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.heading}>
                        Hexcode Color in Screen 
                    </Text>
                </View>

                <View style={styles.colorContainer}>
                    
                </View>

                <View style={styles.hexCodeInputContainer}>
                <TextInput
                        style={styles.hexCodeInput}
                        value={this.setState.hexColorValue}
                        placeholderTextColor="black"
                        placeholder='Hex Code / color Input' />
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Click 
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:50,
    },
    heading:{
        textAlign:'center',
        fontSize:25,
        color:'red',
        fontWeight:"bold",
    },
    colorContainer:{
        marginTop:70,
        borderColor:'grey',
        borderRadius:3,
        borderWidth:0.4,
        height:170,
        width:290,
    },
    hexCodeInputContainer: {
        marginTop: 100,
    },
    hexCodeInput: {
        height: 55,
        width: 280,
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'rgb(231,231,231)',
        borderRadius: 4,
        padding: 16,
    },
    buttonContainer:{
        marginTop:30,
        backgroundColor:'skyblue',
        borderColor:'rgb(231,231,231)',
        borderRadius:5,
        borderWidth:1,
        height:40,
        width:150,
        padding:10,
    },
    buttonText:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
    },
})