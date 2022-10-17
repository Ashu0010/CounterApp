import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Login';
import ScrollStyling from './ScrollStyling';
import OtpAppFront from './OTPAppFront';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        
        <View style={styles.homestyle}>
            
            <Text style={styles.homestyleText}>
                Assignments Navigation
            </Text>
            <View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('TicketApp')}>
                    <Text style={styles.buttonText}>
                        Book Ticket App 
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('LogInApp')}>
                    <Text style={styles.buttonText}>
                        Log In App Front
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('OtpApp')}>
                    <Text style={styles.buttonText}>
                        OTP App Front
                    </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default class NavigateProjectScreens extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="TicketApp" component={ScrollStyling} />
                    <Stack.Screen name="LogInApp" component={LogIn}/>
                    <Stack.Screen name="OtpApp" component={OtpAppFront}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    homestyle: {
        flex: 1,
        alignItems: 'center',
        padding:70,
        marginBottom:30,
        backgroundColor:'grey'
    },
    homestyleText:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom:50
    },
    buttonContainer: {
        marginTop:15,
        padding: 12,
        borderWidth: 1.4,
        borderRadius:7,
        backgroundColor:'skyblue',
        borderColor: 'rgb(109,188,120)',
        alignItems: "center",
        marginHorizontal: 60,
        height:50,
        width:250,
    },
    buttonBox:{
        marginTop:30
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
})