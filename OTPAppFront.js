import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image
} from "react-native";

export default class OTPAppFront extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otpnum1: "",
            otpnum2: "",
            otpnum3: "",
            otpnum4: "",
        }
    }
    render() {
        return (
            <View >

                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        Log into Saavn
                    </Text>
                </View>

                <View style={styles.enterYourCodeContainer}>
                    <Text style={styles.enterYourCode}>
                        Enter your code
                    </Text>
                </View>

                <View style={styles.otpInputContainer}>
                    <TextInput
                        keyboardType="numeric"
                        ref={'otpnum1ref'}
                        autoFocus={true}
                        style={styles.otpInput}
                        maxLength={1}
                        onChangeText={(otpnum1) => {
                            this.setState({ otpnum1: otpnum1 })
                            if (otpnum1 != "") {
                                this.refs.otpnum2ref.focus();
                            }
                            else {

                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {

                            }
                            else if (this.state.otpnum1 != ""){
                                this.refs.otpnum2ref.focus();
                            }
                        }
                        }/>
                    <TextInput
                        keyboardType="numeric"
                        ref={'otpnum2ref'}
                        style={styles.otpInput}
                        maxLength={1}
                        onChangeText={(otpnum2) => {
                            this.setState({ otpnum2: otpnum2 })
                            if (otpnum2 != '') {
                                this.refs.otpnum3ref.focus();
                            }
                            else {
                                this.refs.otpnum1ref.focus();
                            }
                        }} 
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                this.refs.otpnum1ref.focus();
                            }
                            else if (this.state.otpnum1 != ""){
                                this.refs.otpnum3ref.focus();
                            }
                        }
                        }/>
                    <TextInput
                        keyboardType="numeric"
                        ref={'otpnum3ref'}
                        style={styles.otpInput}
                        maxLength={1}
                        onChangeText={(otpnum3) => {
                            this.setState({ otpnum3: otpnum3 })
                            if (otpnum3 != '') {
                                this.refs.otpnum4ref.focus();
                            }
                            else {
                                this.refs.otpnum2ref.focus();
                            }
                        }} 
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                this.refs.otpnum2ref.focus();
                            }
                            else if (this.state.otpnum1 != ""){
                                this.refs.otpnum4ref.focus();
                            }
                        }
                        }/>
                    <TextInput
                        keyboardType="numeric"
                        ref={'otpnum4ref'}
                        style={styles.otpInput}
                        maxLength={1}
                        onChangeText={(otpnum4) => {
                            this.setState({ otpnum4: otpnum4 })
                            if (otpnum4 != '') {
                                alert("click on continue");
                            }
                            else {
                                this.refs.otpnum3ref.focus();
                            }
                        }} 
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                this.refs.otpnum3ref.focus();
                            }
                            else if (this.state.otpnum1 != ""){
                            }
                        }
                        }/>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { alert("OTP Checking"); }}>
                        <Text style={styles.buttonText}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.spaceContainer} />

                <View style={styles.keypadContainer}>
                    <View style={styles.keyContainer}>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 1 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 2 </Text>
                            <Text style={styles.keyButtonText}>ABC </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 3 </Text>
                            <Text style={styles.keyButtonText}>DEF </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyContainer}>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 4 </Text>
                            <Text style={styles.keyButtonText}>GHI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 5 </Text>
                            <Text style={styles.keyButtonText}>JKL </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 6 </Text>
                            <Text style={styles.keyButtonText}>MNO </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyContainer}>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 7 </Text>
                            <Text style={styles.keyButtonText}>PQRS </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 8 </Text>
                            <Text style={styles.keyButtonText}>TUV </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumber}> 9 </Text>
                            <Text style={styles.keyButtonText}>WXYZ </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyContainerZero}>
                        <TouchableOpacity style={styles.keyButton}>
                            <Text style={styles.keyButtonNumberZero}> 0 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButton}>
                            <Image
                                source={require('/Users/ashishnegi/Desktop/CounterApp/icons8-back-60.png')}
                                style={styles.backButtonImage}
                                resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'rgb(109,188,120)',
        paddingTop: 60,
        paddingBottom: 12
    },
    headerText: {
        color: 'rgb(210,241,213)',
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 17
    },
    enterYourCodeContainer: {
        padding: 60,
    },
    enterYourCode: {
        color: 'rgb(159,159,159)',
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
    },
    otpInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 60,
        paddingBottom: 70
    },
    otpInput: {
        height: 47,
        width: 45,
        fontSize: 15,
        borderWidth: 2,
        borderColor: 'rgb(231,231,231)',
        borderRadius: 4,
        padding: 8,
    },
    buttonContainer: {
        padding: 12,
        borderWidth: 1,
        borderTopWidth: 2,
        borderColor: 'rgb(109,188,120)',
        alignItems: "center",
        marginHorizontal: 60
    },
    buttonText: {
        color: 'rgb(109,188,120)',
        fontSize: 17,
        fontWeight: 'bold'
    },
    spaceContainer: {
        paddingTop: 220,
    },
    keypadContainer: {
        paddingTop: 5,
        paddingBottom: "100%",
        backgroundColor: 'rgb(211,214,222)',
    },
    keyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 2
    },
    keyContainerZero: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 2
    },
    keyButton: {
        height: 47,
        width: 123,
        backgroundColor: 'rgb(255,255,255)',
        borderWidth: 0.5,
        borderBottomWidth: 1.5,
        borderColor: 'rgb(231,231,231)',
        borderRadius: 8,
        // paddingBottom: 4,
        alignItems: 'center'
    },
    keyButtonNumber: {
        paddingTop: 2,
        fontSize: 25,
        color: 'rgb(65,65,65)',
        fontWeight: 'bold'
    },
    keyButtonNumberZero: {
        fontSize: 25,
        color: 'rgb(65,65,65)',
        paddingTop: 5,
        fontWeight: 'bold'
    },
    keyButtonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'rgb(65,65,65)'
    },
    backButton: {
        paddingTop: 10,
        paddingLeft: 57,
        paddingRight: 50,
    },
    backButtonImage: {
        height: 25,
        width: 25
    },
});