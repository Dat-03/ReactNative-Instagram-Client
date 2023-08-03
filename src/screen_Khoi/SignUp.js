import { StyleSheet, Text, View, Image, StatusBar, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = (props) => {
    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    }
    const goToLogin = () => {
        navigation.navigate('Login');
      }
  return (
    <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={goBack}>
                    <Image style={styles.btnBack} source={require('../image_Khoi/Back.png')}></Image>
                </TouchableOpacity>
                <Image style={styles.logo} source={require('../image_Khoi/Instagram_Logo.png')}></Image>
                <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor={'#67606070'}></TextInput>
                <TextInput secureTextEntry={true} style={[styles.textInput, { marginTop: 12 }]} placeholder='Password' placeholderTextColor={'#67606070'}></TextInput>
                <TextInput secureTextEntry={true} style={[styles.textInput, { marginTop: 12 }]} placeholder='Confirm Password' placeholderTextColor={'#67606070'}></TextInput>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.orSignUpView}>
                    <Text style={styles.noAccText}>You have an account?</Text>
                    <TouchableOpacity style={{ marginStart: 5 }} onPress={goToLogin}>
                        <Text style={styles.signUpText}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.bottomView}>
                <Text style={styles.noAccText}>Instagram dev by Dat</Text>
            </View>
        </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    btnBack: {
        marginTop: 32,
        marginStart: 16
    },
    logo: {
        alignSelf: 'center',
        marginTop: 80
    },
    textInput: {
        marginHorizontal: 16,
        paddingHorizontal: 15,
        marginTop: 40,
        height: 44,
        borderRadius: 5,
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        borderColor: '#0000001A',
        color:'#676060'
    },
    btnLogin: {
        width: 343,
        height: 44,
        backgroundColor: '#3797EF',
        borderRadius: 5,
        marginTop: 60,
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
    orSignUpView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 30
    },
    noAccText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        color: '#676060',
    },
    signUpText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        color: '#3797EF',
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
})