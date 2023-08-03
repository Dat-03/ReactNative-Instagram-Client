import { StatusBar, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = (props) => {
    const { navigation } = props;
    const goToLogin = () => {
        navigation.navigate('Login');
    }
    const goToSignUp = () => {
        navigation.navigate('SignUp');
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image style={styles.logo} source={require('../image_Khoi/Instagram_Logo.png')}></Image>
                <TouchableOpacity style={styles.btnLogin} onPress={goToLogin}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.noAccText}>Don't have an account?</Text>
                <TouchableOpacity style={{ marginStart: 5 }} onPress={goToSignUp}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    logo: {
        alignSelf: 'center',
        marginTop: 200
    },
    btnLogin: {
        width: 307,
        height: 44,
        backgroundColor: '#3797EF',
        borderRadius: 5,
        marginTop: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    bottomView: {
        backgroundColor: '#00000005',
        height: 84,
        borderTopWidth: 1,
        borderColor: '#00000010',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    noAccText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        color: '#676060',
    },
    signUpText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '900',
        color: '#3797EF',
    }
})