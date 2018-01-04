import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default class Login extends Component{
    constructor(properties){
        super();
        this.state = { message: "Please, log in!" };
        this.submit = this.submit.bind(this);
        this.onSuccess = properties.onSuccess;
    }
    submit(){
        if(this.state.login === "Andriy" && this.state.password === "admin123")
        {
            this.setState({message: "Login successful!"});
            this.onSuccess();
        }
        else
            this.setState({message: "Try again!"});
    }
    render(){
        return(
            <View style={styles.page}>
                <Image source={require('./images/sp2.png')} style={styles.logo}/>
                <Text style={styles.information}> { this.state.message } </Text>
                <View style={styles.form}>
                    <TextInput placeholder="login"
                        onChangeText={(login) => { this.setState({login: login}) } }
                        onSubmitEditing={() => { this.refs.password.focus(); } }
                        style={styles.input}
                        underlineColorAndroid="transparent"
                />
                    <TextInput
                        ref="password"
                        placeholder="password"
                        onChangeText={(password) => { this.setState({password: password}) } }
                        onSubmitEditing={ this.submit }
                        style={styles.input}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity onPress={ this.submit } style={styles.button}>
                        <Text style={styles.buttonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        width: "100%",
        height: "100%",
        padding: "10%",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        resizeMode: "contain",
        padding: "40%",
        width: 0, height: 0
    },
    information: {
        height: 36,
        fontSize: 24,
        color: "#999999",
        textAlign: "center",
        margin: 5
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        margin: 5,
        height: 40,
        fontSize: 16,
        borderWidth: 2,
        borderColor: "#BBBBBB",
        borderRadius: 50,
        backgroundColor: "#EFEFEF",
        width: "100%"
    },
    button: {
        paddingVertical: 5,
        margin: 5,
        height: 40,
        borderWidth: 0,
        borderColor: "#256087",
        borderRadius: 20,
        backgroundColor: "#36A9E1",
        width: "100%"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 22,
        color: "#FFFFFF"
    },
    form: {
        width: "100%",
        maxWidth: 260,
        height: 176
    }
});