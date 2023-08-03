import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

const Signtup = (props) => {
  const { navigation } = props;
  const goto = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={{ padding: 24 }}>
        <Image source={require('../Image_Dat/Back.png')} />
      </View>

      <View style={styles.viewlogo}>
        <Image source={require('../Image_Dat/Text_Instagram.png')} />
      </View>
      <View style={{ marginTop: 9, padding: 24 }}>
        <TextInput style={styles.textInput} placeholder="Username" />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnLoginLabel} onPress={goto}>
          Signt Up
        </Text>
      </TouchableOpacity>
      <View style={styles.Textsignt}>
        <Text style={{ color: '#676060', fontSize: 15 }}>
          You have an account?
        </Text>
        <Text
          style={{
            color: '#3797EF',
            fontSize: 15,
            marginStart: 5,
            fontWeight: '900',
          }}
          onPress={goto}>Login.</Text>
      </View>
      <View style={styles.bottomText}>
        <Text
          style={{
            color: '#676060',
            fontSize: 15,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          Dev by Dat
        </Text>
      </View>
    </View>
  )
}

export default Signtup

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewlogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },

  textInput: {
    paddingHorizontal: 10,
    height: 44,
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
  },
  btnLogin: {
    marginStart: 24,
    marginTop: 37,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,
    height: 50,
    width: '88%',
    backgroundColor: '#1877f2',
    borderRadius: 6,
  },
  btnLoginLabel: {
    fontWeight: '900',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#fff',
  },
  Textsignt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  bottomText: {
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
});