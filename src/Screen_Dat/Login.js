import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Login = props => {
  const { navigation } = props;
  const goto = () => {
    navigation.navigate('Signtup');
  };
  const goto2 = () => {
    navigation.navigate('Wellcome');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goto2}>
        <View style={{ padding: 24 }}>
          <Image source={require('../Image_Dat/Back.png')} />
        </View>
      </TouchableOpacity>

      <View style={styles.viewlogo}>
        <Image source={require('../Image_Dat/Text_Instagram.png')} />
      </View>
      <View style={{ marginTop: 39, padding: 24 }}>
        <TextInput style={styles.textInput} placeholder="Username" />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={{ marginTop: 1 }}>
        <Text
          style={{
            fontSize: 15,
            alignSelf: 'flex-end',
            color: '#3797EF',
            marginEnd: 19,
          }}>
          Forgot password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnLoginLabel} onPress={goto}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 29,
        }}>
        <Image source={require('../Image_Dat/IconFB.png')} />
        <View>
          <Text
            style={{
              color: '#3797EF',
              fontSize: 15,
              fontWeight: '900',
              lineHeight: 21,
              marginStart: 5,
            }}>
            Log in with Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          marginTop: 14,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{ borderBottomWidth: 1 }}>.....................</Text>
        <Text style={{ color: '#676060', fontSize: 18 }}>or</Text>
        <Text style={{ borderBottomWidth: 1 }}>.....................</Text>
      </View>
      <View style={styles.Textsignt}>
        <Text style={{ color: '#676060', fontSize: 15, marginTop: 20 }}>
          Don't have an account?
        </Text>
        <Text
          style={{
            color: '#3797EF',
            fontSize: 15,
            marginTop: 20,
            marginStart: 5,
            fontWeight: '900',
          }}
          onPress={goto}>
          Signt up.
        </Text>
      </View>
      <View style={styles.bottomText}>
        <Text
          style={{
            color: '#676060',
            fontSize: 15,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Dev by Dat
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
    paddingHorizontal: 15,
    height: 44,
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 12,
  },
  btnLogin: {
    marginStart: 24,
    marginTop: 61,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,
    height: 50,
    width: '90%',
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
  },
  bottomText: {
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
